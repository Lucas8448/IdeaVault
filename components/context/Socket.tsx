'use client'

import React, { createContext, useContext, useEffect, useState, useCallback, FC } from 'react';

interface WebSocketContextType {
  sendMessage: (message: string) => void;
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
  const [webSocket, setWebSocket] = useState<WebSocket | null>(null);
  const [message, setMessage] = useState<string>('');
  const [isConnected, setIsConnected] = useState<boolean>(false);

  useEffect(() => {
    const ws = new WebSocket(WS_SERVER_URL);

    const closeConnection = () => {
      ws.close();
    };

    ws.onopen = () => {
      ws.send(JSON.stringify({ type: 'INITIATE_CONNECTION' }));
      ws.onmessage = (event) => {
        if (typeof event.data === 'string') {
          const { type, payload } = JSON.parse(event.data);
          if (type === 'CONNECTION_ESTABLISHED') {
            console.log('Connection established', payload.content);
            setIsConnected(true);
          }
        }
      }
    };

    ws.onmessage = (event) => {
      if (typeof event.data === 'string') {
        const { type, payload } = JSON.parse(event.data);
        setMessage(payload.content);
      }
      console.log('Message received', event);
    };

    ws.onclose = () => {
      setIsConnected(false);
    };

    ws.onerror = () => {
      closeConnection();
    };

    setWebSocket(ws);

    return () => {
      closeConnection();
    };
  }, []);

  const sendMessage = useCallback((content: string) => {
    if (webSocket && webSocket.readyState === WebSocket.OPEN) {
      webSocket.send(JSON.stringify({ type: 'SEND', payload: { content } }));
    }
  }, [webSocket]);

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