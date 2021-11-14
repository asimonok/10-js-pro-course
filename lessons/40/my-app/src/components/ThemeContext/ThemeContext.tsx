import React, { FC, useState, Dispatch } from 'react';
import { THEMES } from 'constants/THEMES';

interface IProps {
  children: React.ReactNode;
}

const ThemeContext = React.createContext<[THEMES, Dispatch<THEMES>]>([
  '' as THEMES,
  () => {},
]);

const ThemeProvider: FC<IProps> = (props) => {
  const [theme, setTheme] = useState(
    (localStorage.getItem('theme') as THEMES) || THEMES.LIGHT
  );
  const { children } = props;

  return (
    <ThemeContext.Provider value={[theme, setTheme]}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };
