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
  sxAppbarSideMenuList,
  sxAppbarSideMenuListSmall,
} from "./Appbar.styles";
import { LanguageSelection } from "../LanguageSelection/LanguageSelection";
import { SidePanel } from "../../components/SidePanel/SidePanel";
import { AnimatedBurgerIcon } from "../../components/AnimatedBurgerIcon/AnimatedBurgerIcon";
import { DynamicText } from "../../components/DynamicText/DynamicText";

export const Appbar = () => {
  const { currentTheme, setTheme } = React.useContext(ThemeContext);
  const { currentLanguage, setLanguage } = React.useContext(LanguageContext);

  const theme = useTheme();
  const isMedium = useMediaQuery(theme.breakpoints.down("md"));
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));

  const menuItems: AppbarMenuItem[] = [
    {
      id: "aboutMe",
      value: "#aboutme",
    },
    {
      id: "skills",
      value: "#skills",
    },
    {
      id: "experiences",
      value: "#experiences",
    },
    {
      id: "contact",
      value: "#contact",
    },
  ];

  const [sidePanelOpen, setSidePanelOpen] = React.useState(false);

  const handleSidePanelClose = () => {
    setSidePanelOpen(false);
  };

  const sidePanelMenu = () => {
    return (
      <Box sx={isSmall ? sxAppbarSideMenuListSmall : sxAppbarSideMenuList}>
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
              <DynamicText textId={element.id} />
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
                      <DynamicText textId={element.id} />
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
