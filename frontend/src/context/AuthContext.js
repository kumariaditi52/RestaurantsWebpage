import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  // Check if user is authenticated
  const isAuthenticated = !!user;

  // Register function
  const register = (userData) => {
    // In a real app, you would send this data to your backend
    // For now, we'll just simulate a successful registration
    console.log('Registering user:', userData);
    return true;
  };

  // Login function
  const login = (credentials) => {
    // In a real app, you would validate credentials with your backend
    // For now, we'll just simulate a successful login
    console.log('Logging in with:', credentials);
    setUser({ 
      name: 'User', 
      email: credentials.email 
    });
    return true;
  };

  // Logout function
  const logout = () => {
    setUser(null);
  };

  const value = {
    user,
    loading,
    isAuthenticated,
    register,
    login,
    logout
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};