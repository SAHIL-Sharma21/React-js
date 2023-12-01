//2nd approach for making a context

import { createContext, useContext } from 'react'

export const ThemeContext = createContext({
    themeMode: "light",
    darkTheme: () => { },
    lightTheme: () => { }
}); // we can give default value in createContext method. we get one variable and 2 methods

export const ThemeProvider = ThemeContext.Provider  //exporting ThemeContextProvider from this file only

///making custom hooks
export default function useTheme() {
    return useContext(ThemeContext);
}


