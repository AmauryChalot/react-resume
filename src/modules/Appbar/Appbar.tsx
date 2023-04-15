import {
  AppBar,
  Box,
  Container,
  IconButton,
  Toolbar,
  Typography,
} from '@mui/material';
import Link from '@mui/material/Link';
import React from 'react';
import { AnimatedBurgerIcon } from '../../components/AnimatedBurgerIcon/AnimatedBurgerIcon';
import { DynamicText } from '../../components/DynamicText/DynamicText';
import { LanguageSelection } from '../../components/LanguageSelection/LanguageSelection';
import { SidePanel } from '../../components/SidePanel/SidePanel';
import { ThemeSwitch } from '../../components/ThemeSwitch/ThemeSwitch';
import { useThemeMediaQuery } from '../../utils/hooks/useThemeMediaQuery';
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
  sxAppBarTitle,
} from './Appbar.styles';

export const Appbar = (props: AppbarProps) => {
  const { scrolledSectionsState } = props;
  const [scrolledSections, _] = scrolledSectionsState;

  const { isSmall, isMedium, isLarge } = useThemeMediaQuery();

  const menuItems: AppbarMenuItem[] = [
    {
      id: 'aboutMe',
      value: '#aboutme',
    },
    {
      id: 'experiences',
      value: '#experiences',
    },
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
      {(isSmall || isMedium) && (
        <SidePanel open={sidePanelOpen} onClose={handleSidePanelClose}>
          {sidePanelMenu()}
        </SidePanel>
      )}
      <AppBar sx={sxAppbar}>
        <Container maxWidth="xl" sx={sxAppbarContainer}>
          <Toolbar disableGutters>
            <Box
              sx={
                isSmall || isMedium
                  ? sxAppbarLeftContainerSmall
                  : sxAppbarLeftContainer
              }
            >
              {(isSmall || isMedium) && (
                <IconButton onClick={() => setSidePanelOpen(!sidePanelOpen)}>
                  <AnimatedBurgerIcon active={sidePanelOpen} />
                </IconButton>
              )}
              <Typography component="h1" sx={sxAppBarTitle}>
                Portfolio
              </Typography>
              {isLarge &&
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
