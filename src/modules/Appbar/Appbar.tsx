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
import { ThemeContext, LanguageContext } from "../../context";
import { AppbarMenuItem } from "./Appbar.models";
import {
  sxAppbar,
  sxAppbarContainer,
  sxAppbarLeftContainer,
  sxAppbarLeftContainerSmall,
  sxAppbarNavigationItem,
  sxAppbarRightContainer,
} from "./Appbar.styles";
import { LanguageSelection } from "../LanguageSelection/LanguageSelection";
import { SidePanel } from "../../components/SidePanel/SidePanel";
import { AnimatedBurgerIcon } from "../../components/AnimatedBurgerIcon/AnimatedBurgerIcon";

export const Appbar = () => {
  const { currentTheme, setTheme } = React.useContext(ThemeContext);
  const { currentLanguage, setLanguage } = React.useContext(LanguageContext);

  const theme = useTheme();
  const isMedium = useMediaQuery(theme.breakpoints.down("md"));
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));

  const menuItems: AppbarMenuItem[] = [
    {
      frenchDisplayName: "A propos de moi",
      englishDisplayName: "About me",
      value: "#aboutme",
    },
    {
      frenchDisplayName: "Compétences",
      englishDisplayName: "Skills",
      value: "#skills",
    },
    {
      frenchDisplayName: "Expériences",
      englishDisplayName: "Experiences",
      value: "#experiences",
    },
    {
      frenchDisplayName: "Contact",
      englishDisplayName: "Contact",
      value: "#contact",
    },
  ];

  const [sidePanelOpen, setSidePanelOpen] = React.useState(false);

  const handleSidePanelClose = () => {
    setSidePanelOpen(false);
  };

  const sidePanelMenu = () => {
    return (
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          alignItems: isSmall ? "center" : "flex-start",
          paddingX: isSmall ? 0 : "64px",
          paddingTop: "32px",
          gap: "16px",
        }}
      >
        {menuItems.map((element, index) => {
          return (
            <Link
              key={index}
              color={"inherit"}
              href={element.value}
              underline={"none"}
              sx={sxAppbarNavigationItem}
              onClick={handleSidePanelClose}
            >
              {currentLanguage === "french"
                ? element.frenchDisplayName
                : element.englishDisplayName}
            </Link>
          );
        })}
      </Box>
    );
  };

  return (
    <React.Fragment>
      {isMedium && (
        <SidePanel open={sidePanelOpen} onClose={handleSidePanelClose}>
          {sidePanelMenu()}
        </SidePanel>
      )}
      <AppBar sx={sxAppbar}>
        <Container maxWidth="xl" sx={sxAppbarContainer}>
          <Toolbar disableGutters>
            <Box
              sx={isMedium ? sxAppbarLeftContainerSmall : sxAppbarLeftContainer}
            >
              {isMedium && (
                <IconButton onClick={() => setSidePanelOpen(!sidePanelOpen)}>
                  <AnimatedBurgerIcon active={sidePanelOpen} />
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
              {!isMedium &&
                menuItems.map((element, index) => {
                  return (
                    <Link
                      key={index}
                      color={"inherit"}
                      href={element.value}
                      underline={"none"}
                      sx={sxAppbarNavigationItem}
                    >
                      {currentLanguage === "french"
                        ? element.frenchDisplayName
                        : element.englishDisplayName}
                    </Link>
                  );
                })}
            </Box>
            <Box sx={sxAppbarRightContainer}>
              <LanguageSelection />
              <ThemeSwitch />
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </React.Fragment>
  );
};
