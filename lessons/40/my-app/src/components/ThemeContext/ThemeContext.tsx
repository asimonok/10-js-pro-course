import React, { useState, Dispatch } from 'react';

const ThemeContext = React.createContext<[string, Dispatch<string>]>([
  '',
  () => {},
]);

const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [theme, setTheme] = useState('light');

  return (
    <ThemeContext.Provider value={[theme, setTheme]}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };
