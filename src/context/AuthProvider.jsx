import { createContext, useState, useMemo, useCallback } from 'react';

export const AuthContext = createContext(null);

const MOCK_USER = {
  name: 'Jordan Lee',
  email: 'jordan.lee@example.com',
};

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = useCallback(() => setIsLoggedIn(true), []);
  const logout = useCallback(() => setIsLoggedIn(false), []);

  const value = useMemo(
    () => ({
      isLoggedIn,
      user: isLoggedIn ? MOCK_USER : null,
      login,
      logout,
    }),
    [isLoggedIn, login, logout]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
