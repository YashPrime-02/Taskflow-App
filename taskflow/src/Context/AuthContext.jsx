import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null); // {name, email, role}
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Login
  function login({ name, email, role }) {
    setUser({ name, email, role });
    setIsAuthenticated(true);
  }

  // Signup
  function signup({ name, email, role }) {
    setUser({ name, email, role });
    setIsAuthenticated(true);
  }

  // Logout
  function logout() {
    setUser(null);
    setIsAuthenticated(false);
  }

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
