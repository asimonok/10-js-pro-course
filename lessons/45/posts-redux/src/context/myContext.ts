import React, { Dispatch, useState } from "react";

//create theme context
export const ThemeContext = React.createContext<[boolean, Dispatch<boolean>]>([true, () => {}]);

// export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
//   const [theme, setTheme] = useState(true);
//   return <ThemeContext.Provider value={[theme, setTheme]}>{children}</ThemeContext.Provider>;
// };

// // create "global" variable
// export const VarContext = React.createContext<
//   [number, React.Dispatch<React.SetStateAction<number>>]
// >([5, () => {}]);

// export const VarProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
//   const [value, setValue] = useState(0);
//   return <VarContext.Provider value={[value, setValue]}>{children}</VarContext.Provider>;
// };

// export let LoadedContext = React.createContext<
//   [boolean, React.Dispatch<React.SetStateAction<boolean>>]
// >([false, () => {}]);

// export let LoadedProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
//   let [loaded, setLoaded] = useState(false);
//   return <LoadedContext.Provider value={[loaded, setLoaded]}>{children}</LoadedContext.Provider>;
// };

// export const AuthorIdContext = React.createContext<
//   [number, React.Dispatch<React.SetStateAction<number>>]
// >([0, () => {}]);

// export const AuthorIdProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
//   const [authorId, setAuthorId] = useState(0);
//   return (
//     <AuthorIdContext.Provider value={[authorId, setAuthorId]}>{children}</AuthorIdContext.Provider>
//   );
// };
