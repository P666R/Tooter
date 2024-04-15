import { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export function AuthContextProvider({ children }) {
  const [authUser, setAuthUser] = useState(
    JSON.parse(localStorage.getItem('chat-user')) || null
  );

  return (
    <AuthContext.Provider value={{ authUser, setAuthUser }}>
      {children}
    </AuthContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useAuthContext() {
  const value = useContext(AuthContext);
  if (value === undefined) {
    throw new Error('useAuthContext must be used within a AuthContextProvider');
  }
  return value;
}
