    import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  // Theme colors
  const theme = {
    darkMode,
    colors: darkMode ? {
      background: '#1f2937', // Dark background
      cardBackground: '#374151', // Dark card background
      text: '#ffffff', // White text
      secondaryText: '#d1d5db', // Light gray text
      primary: '#3b82f6', // Blue primary color
      secondary: '#60a5fa', // Light blue secondary color
      border: '#4b5563', // Dark border
    } : {
      background: '#f9fafb', // Light background
      cardBackground: '#ffffff', // White card background
      text: '#111827', // Dark text
      secondaryText: '#4b5563', // Gray text
      primary: '#3b82f6', // Blue primary color
      secondary: '#60a5fa', // Light blue secondary color
      border: '#e5e7eb', // Light border
    }
  };

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  // Apply theme to body
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
      document.body.style.backgroundColor = theme.colors.background;
      document.body.style.color = theme.colors.text;
    } else {
      document.body.classList.remove('dark-mode');
      document.body.style.backgroundColor = theme.colors.background;
      document.body.style.color = theme.colors.text;
    }
  }, [darkMode, theme.colors.background, theme.colors.text]);

  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme, theme }}>
      {children}
    </ThemeContext.Provider>
  );
};
