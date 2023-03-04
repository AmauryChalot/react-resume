import { SxProps, Theme } from "@mui/material";

export const sxCustomCardContainer: SxProps<Theme> = {
    padding: "16px",
    boxSizing: "border-box",
    overflow: "visible",
    color: (theme) => theme.palette.text.primary,
    fontSize: (theme) => theme.typography.body1.fontSize,
    fontWeight: 500,
    fontFamily: (theme) => theme.typography.fontFamily,
    scrollMarginTop: "80px",
    borderRadius: "10px",
    backgroundColor: (theme) => theme.palette.background.paper,
    backgroundImage: "none",
}

export const sxCustomCardTitle: SxProps<Theme> = {
    color: (theme) => theme.palette.text.primary,
    fontSize: (theme) => theme.typography.h5.fontSize,
    fontWeight: 800,
    fontFamily: (theme) => theme.typography.fontFamily,
};

export const sxCustomCardTitleHighlighted: SxProps<Theme> = {
    ...sxCustomCardTitle,
    color: (theme) => theme.palette.primary.main,
};

export const sxCustomCardContent: SxProps<Theme> = {
    marginTop: "16px",
    paddingLeft: "16px",
    position: "relative",
    "&:after": {
        content: "''",
        position: "absolute",
        width: "2px",
        transform: "scaleY(0)",
        height: "100%",
        top: 0,
        left: 0,
        backgroundColor: (theme) => theme.palette.primary.main,
        transformOrigin: "top left",
        transition: "transform 0.8s ease-in-out",
      },
}

export const sxCustomCardContentHighlighted: SxProps<Theme> = {
    ...sxCustomCardContent,
    "&:after": {
        content: "''",
        position: "absolute",
        width: "2px",
        transform: "scaleY(1)",
        height: "100%",
        top: 0,
        left: 0,
        backgroundColor: (theme) => theme.palette.primary.main,
        transformOrigin: "top left",
        transition: "transform 0.8s ease-in-out",
      },
}