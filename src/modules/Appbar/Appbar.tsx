import React from "react";
import { AppBar, Box, Container, Toolbar } from "@mui/material";
import { ThemeSwitch } from "../ThemeSwitch/ThemeSwitch";
import { ThemeContext } from "../../context";

export const Appbar = () => {
  const { currentTheme, setTheme } = React.useContext(ThemeContext);
  return (
    <AppBar
      position="static"
      sx={{ top: 0 }}
      color={currentTheme === "light" ? "transparent" : "primary"}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: "1" }}>Amaury Chalot</Box>
          <Box sx={{ flexGrow: "0" }}>
            <ThemeSwitch />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
