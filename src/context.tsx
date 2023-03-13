import { createTheme, ThemeProvider } from "@mui/material";
import React from "react";
import { LanguageDictionary } from "./modules/Languages";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#070707",
    },
    text: {
      primary: "#fff",
    },
  },
  typography: {
    fontFamily: '"Helvetica", "Arial", "Roboto", sans-serif',
  },
});

const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      //main: "#000",
      main: "rgb(6, 182, 212)",
    },
    background: {
      default: "#f8f8f8",
      paper: "#fff",
    },
    text: {
      primary: "#000",
    },
  },
  typography: {
    fontFamily: '"Helvetica", "Arial", "Roboto", sans-serif',
  },
});

//export type ThemeMode = "light" | "dark";

const localStorageThemeItem = "amaury-chalot-theme";
const localStorageLanguageItem = "amaury-chalot-language";

export type ThemeContextType = {
  currentTheme: "light" | "dark";
  setTheme: (theme: "light" | "dark") => void;
};

export const ThemeContext = React.createContext<ThemeContextType>({
  currentTheme: "light",
  setTheme: () => null,
});

export type LanguageContextType = {
  currentLanguage: "french" | "english";
  dictionary: { [index: string]: string };
  setLanguage: (language: "french" | "english") => void;
};

export const LanguageContext = React.createContext<LanguageContextType>({
  currentLanguage: "french",
  dictionary: LanguageDictionary.french,
  setLanguage: () => null,
});

export interface ContextsProvidersProps {
  children: React.ReactNode;
}

export const ContextsProviders = (props: ContextsProvidersProps) => {
  //Theme
  const currentTheme: "light" | "dark" =
    (localStorage.getItem(localStorageThemeItem) as "light" | "dark") ||
    "light";
  const [themeMode, setThemeMode] = React.useState(currentTheme);
  const setTheme = (theme: "light" | "dark") => {
    localStorage.setItem(localStorageThemeItem, theme);
    setThemeMode(theme);
  };

  //Language
  const currentLanguage: "french" | "english" =
    (localStorage.getItem(localStorageLanguageItem) as "french" | "english") ||
    "french";
  const [languageMode, setLanguageMode] = React.useState(currentLanguage);
  const setLanguage = (language: "french" | "english") => {
    localStorage.setItem(localStorageLanguageItem, language);
    setLanguageMode(language);
  };

  return (
    <LanguageContext.Provider
      value={{
        currentLanguage: languageMode,
        dictionary: LanguageDictionary[languageMode],
        setLanguage,
      }}
    >
      <ThemeContext.Provider value={{ currentTheme: themeMode, setTheme }}>
        <ThemeProvider theme={themeMode === "light" ? lightTheme : darkTheme}>
          {props.children}
        </ThemeProvider>
      </ThemeContext.Provider>
    </LanguageContext.Provider>
  );
};
