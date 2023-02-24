import React from "react";
import {
  AppBar,
  Box,
  Container,
  Toolbar,
  Typography,
  useTheme,
} from "@mui/material";
import Link from "@mui/material/Link";
import { ThemeSwitch } from "../ThemeSwitch/ThemeSwitch";
import { ThemeContext } from "../../context";
import { AppbarMenuItem } from "./Appbar.models";

export const Appbar = () => {
  const { currentTheme, setTheme } = React.useContext(ThemeContext);

  const theme = useTheme();

  const menuItems: AppbarMenuItem[] = [
    {
      displayName: "About me",
      value: "#aboutme",
    },
    {
      displayName: "Skills",
      value: "#skills",
    },
    {
      displayName: "Experiences",
      value: "#experiences",
    },
    {
      displayName: "contact",
      value: "#contact",
    },
  ];

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
        scrollBehavior: "smooth",
      }}
    >
      <Container maxWidth="xl" sx={{ backgroundColor: "transparent" }}>
        <Toolbar disableGutters>
          <Box
            sx={{
              flexGrow: "1",
              display: "flex",
              alignItems: "center",
              gap: "58px",
            }}
          >
            <Typography
              component="h1"
              sx={{
                fontSize: theme.typography.h5.fontSize,
                fontWeight: 800,
                fontFamily: theme.typography.fontFamily,
              }}
            >
              Portfolio
            </Typography>
            {menuItems.map((element, index) => {
              return (
                <Link
                  key={index}
                  color={"inherit"}
                  href={element.value}
                  underline={"none"}
                  sx={{
                    display: "inline-block",
                    position: "relative",
                    fontSize: theme.typography.body1.fontSize,
                    fontWeight: 600,
                    fontFamily: theme.typography.fontFamily,
                    cursor: "pointer",
                    "&:hover": {
                      color: theme.palette.primary.main,
                    },
                    "&:after": {
                      content: "''",
                      position: "absolute",
                      width: "100%",
                      transform: "scaleX(0)",
                      height: "2px",
                      bottom: 0,
                      left: 0,
                      backgroundColor: theme.palette.primary.main,
                      transformOrigin: "bottom right",
                      transition: "transform 0.3s ease-out",
                    },
                    "&:hover:after": {
                      transform: "scaleX(1)",
                      transformOrigin: "bottom left",
                    },
                  }}
                >
                  {element.displayName}
                </Link>
              );
            })}
          </Box>
          <Box sx={{ flexGrow: "0" }}>
            <ThemeSwitch />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
