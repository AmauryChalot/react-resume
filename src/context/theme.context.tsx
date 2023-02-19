import { Theme, ThemeProvider, createTheme } from "@mui/material";
import React from "react";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const lightTheme = createTheme({
  palette: {
    mode: "light",
  },
});

export type ThemeMode = "light" | "dark";

const localStorageThemeItem = "amaury-chalot-theme";

export type ThemeContextType = {
  currentTheme: ThemeMode;
  setTheme: (theme: ThemeMode) => void;
};

export const ThemeContext = React.createContext<ThemeContextType>({
  currentTheme: "light",
  setTheme: () => null,
});

export interface ThemeContextProviderProps {
  children: React.ReactNode;
}

export const ThemeContextProvider = (props: ThemeContextProviderProps) => {
  const currentTheme: ThemeMode =
    (localStorage.getItem(localStorageThemeItem) as ThemeMode) || "light";
  const [themeMode, setThemeMode] = React.useState(currentTheme);
  const setTheme = (theme: ThemeMode) => {
    localStorage.setItem(localStorageThemeItem, theme);
    setThemeMode(theme);
  };

  return (
    <ThemeContext.Provider value={{ currentTheme: themeMode, setTheme }}>
      <ThemeProvider theme={themeMode === "light" ? lightTheme : darkTheme}>
        {props.children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};
