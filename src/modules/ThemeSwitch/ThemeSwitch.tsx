import React from "react";
import { Card, Switch, Typography, Box } from "@mui/material";
import { ThemeContext } from "../../context";

export const ThemeSwitch = () => {
  const { currentTheme, setTheme } = React.useContext(ThemeContext);

  return (
    <Box>
      <Switch
        checked={currentTheme === "dark"}
        onChange={() => {
          setTheme(currentTheme === "light" ? "dark" : "light");
        }}
      />
    </Box>
  );
};
