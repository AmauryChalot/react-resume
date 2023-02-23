import React from "react";
import { ThemeProvider, createTheme, useTheme } from "@mui/material";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#000",
    },
    text: {
      primary: "#fff",
    },
  },
});

const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "rgb(6, 182, 212)",
    },
    background: {
      default: "#fff",
    },
    text: {
      primary: "#000",
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
