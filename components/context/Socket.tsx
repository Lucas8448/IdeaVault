import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';

type WebSocketContextType = {
  sendMessage: (message: string) => void;
  message: string;
  isConnected: boolean;
}

type WebSocketProviderProps = {
  children: React.ReactNode;
}

const WebSocketContext = createContext<WebSocketContextType | undefined>(undefined);

const WS_SERVER_URL = 'wss://your-websocket-server.com';

export const Socket: React.FC<WebSocketProviderProps> = ({ children }) => {
  const [webSocket, setWebSocket] = useState<WebSocket | null>(null);
  const [message, setMessage] = useState('');
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    const ws = new WebSocket(WS_SERVER_URL);

    ws.onopen = () => {
      console.log('WebSocket connected');
      setIsConnected(true);
    };

    ws.onmessage = (event) => {
      console.log('Message from server ', event.data);
      setMessage(event.data);
    };

    ws.onclose = () => {
      console.log('WebSocket disconnected');
      setIsConnected(false);
    };

    setWebSocket(ws);

    return () => {
      ws.close();
    };
  }, []);

  const sendMessage = (message: string) => {
    if (webSocket) {
      webSocket.send(message);
    }
  };

  return (
    <WebSocketContext.Provider value={{ sendMessage, message, isConnected }}>
      {children}
    </WebSocketContext.Provider>
  );
};

export const useWebSocket = () => {
  const context = useContext(WebSocketContext);
  if (context === undefined) {
    throw new Error('useWebSocket must be used within a WebSocketProvider');
  }
  return context;
};
