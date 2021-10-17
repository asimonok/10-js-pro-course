import React, { Dispatch, useState } from "react";

//create theme context
export const ThemeContext = React.createContext<[string, Dispatch<string>]>([
  "",
  () => {},
]);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [theme, setTheme] = useState("dark");
  return (
    <ThemeContext.Provider value={[theme, setTheme]}>
      {children}
    </ThemeContext.Provider>
  );
};

// create "global" variable
export const VarContext = React.createContext<[number, Dispatch<any>]>([
  5,
  () => {},
]);

export const VarProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [value, setValue] = useState(0);
  return (
    <VarContext.Provider value={[value, setValue]}>
      {children}
    </VarContext.Provider>
  );
};
