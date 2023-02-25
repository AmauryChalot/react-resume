import React from "react";
import {
  AppBar,
  Box,
  Container,
  IconButton,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Link from "@mui/material/Link";
import { ThemeSwitch } from "../ThemeSwitch/ThemeSwitch";
import { ThemeContext } from "../../context";
import { AppbarMenuItem } from "./Appbar.models";
import MenuIcon from "@mui/icons-material/Menu";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import {
  sxAppbar,
  sxAppbarContainer,
  sxAppbarLeftContainer,
  sxAppbarLeftContainerSmall,
  sxAppbarNavigationItem,
  sxAppbarRightContainer,
} from "./Appbar.styles";

export const Appbar = () => {
  const { currentTheme, setTheme } = React.useContext(ThemeContext);

  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("md"));

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
      displayName: "Contact",
      value: "#contact",
    },
  ];

  return (
    <AppBar sx={sxAppbar}>
      <Container maxWidth="xl" sx={sxAppbarContainer}>
        <Toolbar disableGutters>
          <Box
            sx={isSmall ? sxAppbarLeftContainerSmall : sxAppbarLeftContainer}
          >
            {isSmall && (
              <IconButton>
                <MenuIcon />
              </IconButton>
            )}
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
            {!isSmall &&
              menuItems.map((element, index) => {
                return (
                  <Link
                    key={index}
                    color={"inherit"}
                    href={element.value}
                    underline={"none"}
                    sx={sxAppbarNavigationItem}
                  >
                    {element.displayName}
                  </Link>
                );
              })}
          </Box>
          <Box sx={sxAppbarRightContainer}>
            <IconButton>
              <LanguageOutlinedIcon />
            </IconButton>
            <ThemeSwitch />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
