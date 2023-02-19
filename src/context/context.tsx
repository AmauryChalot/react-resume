import React from "react";
import { ThemeContextProvider } from "./theme.context";

export interface ContextsProvidersProps {
  children: React.ReactNode;
}

export const ContextsProviders = (props: ContextsProvidersProps) => {
  return <ThemeContextProvider>{props.children}</ThemeContextProvider>;
};
