import React from "react";
import { ThemeProvider, createTheme, useTheme } from "@mui/material";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "black",
    },
    text: {
      primary: "white",
    },
  },
});

const lightTheme = createTheme({
  palette: {
    mode: "light",
    background: {
      default: "white",
    },
    text: {
      primary: "black",
    },
  },
});

//export type ThemeMode = "light" | "dark";

//const localStorageThemeItem = "amaury-chalot-theme";

export type ThemeContextType = {
  currentTheme: "light" | "dark";
  setTheme: (theme: "light" | "dark") => void;
};

export const ThemeContext = React.createContext<ThemeContextType>({
  currentTheme: "light",
  setTheme: () => null,
});

export interface ContextsProvidersProps {
  children: React.ReactNode;
}

export const ContextsProviders = (props: ContextsProvidersProps) => {
  const [themeMode, setThemeMode] = React.useState("light" as "light" | "dark");
  const setTheme = (theme: "light" | "dark") => {
    setThemeMode(theme);
  };

  return (
    <ThemeContext.Provider value={{ currentTheme: themeMode, setTheme }}>
      <ThemeProvider theme={themeMode === "light" ? lightTheme : darkTheme}>
        {props.children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );

  /*return (
    <ThemeContext.Provider value={{ currentTheme: themeMode, setTheme }}>
      <ThemeProvider theme={themeMode === "light" ? lightTheme : darkTheme}>
        {props.children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );*/
};
