import React, { createContext, useState } from 'react';

const ThemeContext = createContext(false);

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(JSON.parse(localStorage.getItem('theme')) || 'light');

  const checkTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
      window.localStorage.setItem('theme', JSON.stringify('dark'));
    }
    if (theme === 'dark') {
      setTheme('light');
      window.localStorage.setItem('theme', JSON.stringify('light'));
    }
  };

  return <ThemeContext.Provider value={{ theme, checkTheme }}>{children}</ThemeContext.Provider>;
};

export { ThemeContext, ThemeProvider };
