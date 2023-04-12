import React, { createContext, useState } from 'react';
import { IThemeContext } from '../models/ThemeProp';

const defaultState: IThemeContext = {
  dark: false,
  toggleDark: () => {}
};

export const ThemeContext = createContext<IThemeContext>(defaultState);

const ThemeProvider = ({ children }: any) => {
  const [dark, setDark] = useState(defaultState.dark);

  const toggleDark = () => setDark(!dark);

  return (
    <ThemeContext.Provider value={{ dark, toggleDark }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;