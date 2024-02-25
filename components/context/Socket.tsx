"use client"

import React, { createContext, useContext, useEffect, useState, useCallback, FC } from 'react';
import { useAuth } from "@clerk/nextjs";
import NodeRSA from 'node-rsa';

interface WebSocketContextType {
  sendMessage: (type: string, message: string) => void;
  closeConnection: () => void;
  message: string;
  isConnected: boolean;
}

interface WebSocketProviderProps {
  children: React.ReactNode;
}

const WebSocketContext = createContext<WebSocketContextType | undefined>(undefined);

const WS_SERVER_URL = 'ws://localhost:3001';

const WebSocketProvider: FC<WebSocketProviderProps> = ({ children }) => {
  const { isLoaded, userId, getToken } = useAuth();
  const [webSocket, setWebSocket] = useState<WebSocket | null>(null);
  const [message, setMessage] = useState<string>('');
  const [isConnected, setIsConnected] = useState<boolean>(false);
  const [key, setKey] = useState<NodeRSA | null>(null);

  useEffect(() => {
    const ws = new WebSocket(WS_SERVER_URL);

    ws.onopen = () => {
      ws.send(JSON.stringify({ type: 'INITIATE_CONNECTION' }));
    };

    ws.onmessage = (event) => {
      if (typeof event.data === 'string') {
        const { type, payload } = JSON.parse(event.data);

        switch (type) {
          case 'CONNECTION_ESTABLISHED':
            setIsConnected(true);
            ws.send(JSON.stringify({ type: 'GET_PUBLIC_KEY' }));
            break;
          case 'PUBLIC_KEY':
            const newKey = new NodeRSA();
            console.log('Public key received', payload.key);
            newKey.importKey(payload.key, 'pkcs8-public');
            setKey(newKey);
            break;
          case 'MESSAGE':
            setMessage(payload.content);
            console.log('Message received', payload.content);
            break;
          default:
            console.log('Unhandled message type:', type);
        }
      }
    };

    ws.onclose = () => {
      setIsConnected(false);
    };

    ws.onerror = () => {
      ws.close();
    };

    setWebSocket(ws);

    return () => {
      ws.close();
    };
  }, []);

    const sendMessage = useCallback((type: string, payload: any) => {
    if (webSocket && webSocket.readyState === WebSocket.OPEN) {
      const message = { type, payload };
      if (key && ['SEND_IDEA', 'CREATE_ROOM', 'JOIN_ROOM'].includes(type)) {
        message.payload = key.encrypt(JSON.stringify(payload), 'base64');
      }
      webSocket.send(JSON.stringify(message));
    } else {
      console.error('Unable to send message. WebSocket is not ready.');
    }
  }, [webSocket, key]);

  const value = { sendMessage, closeConnection: () => webSocket?.close(), message, isConnected };

  return (
    <WebSocketContext.Provider value={value}>
      {children}
    </WebSocketContext.Provider>
  );
};

const useWebSocket = (): WebSocketContextType => {
  const context = useContext(WebSocketContext);
  if (!context) {
    throw new Error('useWebSocket must be used within a WebSocketProvider');
  }
  return context;
};

export { WebSocketProvider, useWebSocket };