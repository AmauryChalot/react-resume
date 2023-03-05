import { SxProps, Theme } from "@mui/material";

export const sxAppbar: SxProps = {
    top: 0,
    backgroundImage: "none",
    boxSizing: "border-box",
    flexShrink: 0,
    position: "sticky",
    backgroundColor: "transparent",
    backdropFilter: "blur(8px)",
    height: "64px",
};

export const sxAppbarContainer: SxProps = {
    backgroundColor: "transparent",
}

export const sxAppbarLeftContainer: SxProps = {
    flexGrow: "1",
    display: "flex",
    alignItems: "center",
    gap: "64px",
}

export const sxAppbarLeftContainerSmall: SxProps = {
    ...sxAppbarLeftContainer,
    gap: "16px",
}

export const sxAppbarNavigationItem: SxProps<Theme> = {
    display: "inline-block",
    position: "relative",
    fontSize: (theme) => theme.typography.body1.fontSize,
    fontWeight: 600,
    fontFamily: (theme) => theme.typography.fontFamily,
    cursor: "pointer",
    "&:hover": {
      color: (theme) => theme.palette.primary.main,
    },
    "&:after": {
      content: "''",
      position: "absolute",
      width: "100%",
      transform: "scaleX(0)",
      height: "2px",
      bottom: 0,
      left: 0,
      backgroundColor: (theme) => theme.palette.primary.main,
      transformOrigin: "bottom right",
      transition: "transform 0.2s ease-out",
    },
    "&:hover:after": {
      transform: "scaleX(1)",
      transformOrigin: "bottom left",
    },
    '&:active': {
      color: (theme) => theme.palette.primary.dark,
    },

    '&:active:after': {
      backgroundColor: (theme) => theme.palette.primary.dark,
    }
}

export const sxAppbarNavigationItemSelected: SxProps<Theme> = {
  ...sxAppbarNavigationItem,
  color: (theme) => theme.palette.primary.main,
}

export const sxAppbarRightContainer: SxProps = {
    flexGrow: 0,
    display: "flex",
    alignItems: "center",
    gap: "16px",
}

export const sxAppbarSideMenuList: SxProps = {
  display: "flex",
  flexDirection: "column",
  width: "100%",
  alignItems: "flex-start",
  paddingX: "64px",
  paddingTop: "32px",
  gap: "16px",
};

export const sxAppbarSideMenuListSmall: SxProps = {
  ...sxAppbarSideMenuList,
  alignItems: "center",
  paddingX: 0,
};