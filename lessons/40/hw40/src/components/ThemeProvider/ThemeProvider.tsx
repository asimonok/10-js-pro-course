import React, {useState, Dispatch} from 'react'


export const ThemeContext = React.createContext<[string, Dispatch<string>]>(['', () => {}]);

export const ThemeProvider: React.FC<{children: React.ReactNode}> = ({children}) => {
  const [theme, setTheme] = useState("light");
  
  return (
    <ThemeContext.Provider value={[theme, setTheme]}>
      {children}
    </ThemeContext.Provider>
  );
};
