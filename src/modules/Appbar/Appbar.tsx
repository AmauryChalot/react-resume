import React from "react";
import {
  AppBar,
  Box,
  Container,
  Toolbar,
  Typography,
  useTheme,
} from "@mui/material";
import { ThemeSwitch } from "../ThemeSwitch/ThemeSwitch";
import { ThemeContext } from "../../context";

export const Appbar = () => {
  const { currentTheme, setTheme } = React.useContext(ThemeContext);

  const theme = useTheme();

  return (
    <AppBar
      sx={{
        top: 0,
        backgroundImage: "none",
        boxSizing: "border-box",
        flexShrink: 0,
        position: "sticky",
        backgroundColor: "transparent",
        backdropFilter: "blur(8px)",
      }}
    >
      <Container maxWidth="xl" sx={{ backgroundColor: "transparent" }}>
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: "1" }}>
            <Typography
              component="h1"
              sx={{
                fontSize: theme.typography.h5.fontSize,
                fontWeight: 800,
                fontFamily: theme.typography.fontFamily,
              }}
            >
              Amaury Chalot
            </Typography>
          </Box>
          <Box sx={{ flexGrow: "0" }}>
            <ThemeSwitch />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
