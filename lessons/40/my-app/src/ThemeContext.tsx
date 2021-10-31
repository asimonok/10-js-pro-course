import React from 'react';

enum Themes {
    white = 'white',
    black = 'black',
  }

export const ThemeContext = React.createContext<Themes>(Themes.white);