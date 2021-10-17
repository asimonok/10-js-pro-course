import React, { FC, useState, Dispatch } from 'react';

interface IProps {
  children: React.ReactNode;
}

const ThemeContext = React.createContext<[string, Dispatch<string>]>([
  '',
  () => {},
]);

const ThemeProvider: FC<IProps> = (props) => {
  const [theme, setTheme] = useState('light');
  const { children } = props;

  return (
    <ThemeContext.Provider value={[theme, setTheme]}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };
