import { createContext, useState, useEffect, useContext } from 'react';

export const ThemeContext = createContext({
  theme: 'dark',
  toggleTheme: () => {}, // Placeholder no-op function
});

export const ThemeProvider = ({ children }) => {
  // Initialize theme from localStorage or default to 'light'
  const [theme, setTheme] = useState(() => {
    try {
      const savedTheme = localStorage.getItem('app-theme');
      return savedTheme || 'dark';
    } catch (error) {
      console.warn(
        "Failed to read theme from localStorage, defaulting to 'dark'.",
        error
      );
      return 'dark'; // Fallback in case localStorage access fails
    }
  });

  useEffect(() => {
    const rootElement = document.body; // Or document.body

    // Remove existing theme classes
    rootElement.classList.remove('light-theme', 'dark-theme');

    // Add the new theme class
    rootElement.classList.add(`${theme}-theme`);

    // Store in localStorage
    try {
      localStorage.setItem('app-theme', theme);
    } catch (error) {
      console.warn('Failed to save theme to localStorage.', error);
    }
  }, [theme]); // Re-run effect when 'theme' changes

  // Function to toggle the theme
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const contextValue = {
    theme,
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};

// Optional: Custom hook for convenience (highly recommended)
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
