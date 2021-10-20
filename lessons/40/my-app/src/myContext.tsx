import React, { Dispatch, useState } from "react";

//create theme context
export const ThemeContext = React.createContext<[string, Dispatch<string>]>([
  "dark",
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
export const VarContext = React.createContext<
  [number, React.Dispatch<React.SetStateAction<number>>]
>([5, () => {}]);

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

export let LoadedContext = React.createContext<
  [boolean, React.Dispatch<React.SetStateAction<boolean>>]
>([true, () => {}]);

export let LoadedProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  let [loading, setLoading] = useState(true);
  return (
    <LoadedContext.Provider value={[loading, setLoading]}>
      {children}
    </LoadedContext.Provider>
  );
};

export const AuthorIdContext = React.createContext<
  [number, React.Dispatch<React.SetStateAction<number>>]
>([0, () => {}]);

export const AuthorIdProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [authorId, setAuthorId] = useState(0);
  return (
    <AuthorIdContext.Provider value={[authorId, setAuthorId]}>
      {children}
    </AuthorIdContext.Provider>
  );
};
