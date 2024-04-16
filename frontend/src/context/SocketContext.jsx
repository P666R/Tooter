import { createContext, useContext, useEffect, useState } from 'react';
import { useAuthContext } from './AuthContext';
import { io } from 'socket.io-client';

const SocketContext = createContext();

export function SocketContextProvider({ children }) {
  const [socket, setSocket] = useState(null);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const { authUser } = useAuthContext();

  useEffect(() => {
    if (authUser) {
      const socket = io('http://localhost:5000', {
        query: { userId: authUser._id },
      });

      setSocket(socket);

      socket.on('getOnlineUsers', (users) => {
        setOnlineUsers(users);
      });

      return () => socket.close();
    } else {
      if (socket) {
        socket.close();
        setSocket(null);
      }
    }
  }, []);

  return (
    <SocketContext.Provider value={{ socket, onlineUsers }}>
      {children}
    </SocketContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useSocketContext() {
  const value = useContext(SocketContext);
  if (value === undefined) {
    throw new Error(
      'useSocketContext must be used within a SocketContextProvider'
    );
  }
  return value;
}
