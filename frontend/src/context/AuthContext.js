import React, { createContext, useContext, useState, useEffect } from 'react';

// Create the auth context
const AuthContext = createContext();

// Auth provider component
export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Check if user is logged in on initial load
  useEffect(() => {
    // This would typically check for a token in localStorage or cookies
    const token = localStorage.getItem('authToken');
    
    if (token) {
      // In a real app, you would validate the token with your backend
      setIsAuthenticated(true);
      // Mock user data - in a real app, you would decode the token or fetch user data
      setUser({
        name: 'Demo User',
        email: 'user@example.com',
        avatar: 'https://randomuser.me/api/portraits/men/32.jpg'
      });
    }
    
    setLoading(false);
  }, []);

  // Login function
  const login = (email, password) => {
    // In a real app, you would make an API call to authenticate
    return new Promise((resolve, reject) => {
      // Mock successful login
      if (email === 'user@example.com' && password === 'password') {
        // Mock token - in a real app, this would come from your backend
        const token = 'mock-jwt-token';
        localStorage.setItem('authToken', token);
        
        setIsAuthenticated(true);
        setUser({
          name: 'Demo User',
          email: 'user@example.com',
          avatar: 'https://randomuser.me/api/portraits/men/32.jpg'
        });
        
        resolve({ success: true });
      } else {
        reject({ message: 'Invalid email or password' });
      }
    });
  };

  // Logout function
  const logout = () => {
    localStorage.removeItem('authToken');
    setIsAuthenticated(false);
    setUser(null);
  };

  // Register function
  const register = (name, email, password) => {
    // In a real app, you would make an API call to register the user
    return new Promise((resolve) => {
      // Mock successful registration
      setTimeout(() => {
        resolve({ success: true });
      }, 1000);
    });
  };

  // Auth context value
  const value = {
    isAuthenticated,
    user,
    loading,
    login,
    logout,
    register
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use the auth context
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};