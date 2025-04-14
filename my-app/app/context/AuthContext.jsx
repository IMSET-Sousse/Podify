import { createContext, useState, useContext } from 'react';

// Create context with a default value
const AuthContext = createContext({
  user: null,
  setUser: () => {},
});

// Create provider component
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // Initial state for user

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

// Create custom hook for using context
export const useAuth = () => useContext(AuthContext);
