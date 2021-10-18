import React, {useState, Dispatch} from 'react'


export const ThemeContext = React.createContext<[string, Dispatch<string>]>(['', () => {}]);

export const ThemeProvider: React.FC<{children: React.ReactNode}> = ({children}) => {
  const [theme, setTheme] = useState("light");
  
  const color = theme === "light" ? '#333333' : '#ffffff';
  const backgroundColor = theme === "light" ? "#ffffff" : "#333333";
  
  document.body.style.color = color;
  document.body.style.backgroundColor = backgroundColor;
  return (
    <ThemeContext.Provider value={[theme, setTheme]}>
      {children}
    </ThemeContext.Provider>
  );
};
