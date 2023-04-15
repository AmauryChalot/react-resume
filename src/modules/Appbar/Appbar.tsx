import {
  AppBar,
  Box,
  Container,
  IconButton,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import Link from '@mui/material/Link';
import React from 'react';
import { AnimatedBurgerIcon } from '../../components/AnimatedBurgerIcon/AnimatedBurgerIcon';
import { DynamicText } from '../../components/DynamicText/DynamicText';
import { LanguageSelection } from '../../components/LanguageSelection/LanguageSelection';
import { SidePanel } from '../../components/SidePanel/SidePanel';
import { ThemeSwitch } from '../../components/ThemeSwitch/ThemeSwitch';
import { LanguageContext, ThemeContext } from '../../context';
import { AppbarMenuItem, AppbarProps } from './Appbar.models';
import {
  sxAppbar,
  sxAppbarContainer,
  sxAppbarLeftContainer,
  sxAppbarLeftContainerSmall,
  sxAppbarNavigationItem,
  sxAppbarNavigationItemSelected,
  sxAppbarNavigationItemSmall,
  sxAppbarNavigationItemSmallSelected,
  sxAppbarRightContainer,
  sxAppbarSideMenuList,
  sxAppbarSideMenuListSmall,
} from './Appbar.styles';

export const Appbar = ({ scrolledSectionsState }: AppbarProps) => {
  const { currentTheme, setTheme } = React.useContext(ThemeContext);
  const { currentLanguage, setLanguage } = React.useContext(LanguageContext);

  const [scrolledSections, setScrolledSections] = scrolledSectionsState;

  const theme = useTheme();
  const isMedium = useMediaQuery(theme.breakpoints.down('md'));
  const isSmall = useMediaQuery(theme.breakpoints.down('sm'));

  const menuItems: AppbarMenuItem[] = [
    {
      id: 'aboutMe',
      value: '#aboutme',
    },
    {
      id: 'experiences',
      value: '#experiences',
    },
    /*{
      id: "skills",
      value: "#skills",
    },*/
    {
      id: 'projects',
      value: '#projects',
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
              color={'inherit'}
              href={element.value}
              underline={'none'}
              sx={
                index === scrolledSections
                  ? sxAppbarNavigationItemSmallSelected
                  : sxAppbarNavigationItemSmall
              }
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
                  color: theme.palette.text.primary,
                }}
              >
                Portfolio
              </Typography>
              {!isMedium &&
                menuItems.map((element, index) => {
                  return (
                    <Link
                      key={index}
                      color={'inherit'}
                      href={element.value}
                      underline={'none'}
                      sx={
                        index === scrolledSections
                          ? sxAppbarNavigationItemSelected
                          : sxAppbarNavigationItem
                      }
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
