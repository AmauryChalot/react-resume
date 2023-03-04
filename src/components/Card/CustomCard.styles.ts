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
    fontSize: (theme) => theme.typography.h4.fontSize,
    fontWeight: 800,
    fontFamily: (theme) => theme.typography.fontFamily,
    display: "inline-block",
    position: "relative",

    "&:after": {
        content: "''",
        position: "absolute",
        width: "100%",
        transform: "scaleX(0)",
        height: "4px",
        bottom: 0,
        left: 0,
        backgroundColor: (theme) => theme.palette.secondary.main,
        transformOrigin: "bottom right",
        transition: "transform 0.2s ease-out",
      },
};

export const sxCustomCardTitleHighlighted: SxProps<Theme> = {
    ...sxCustomCardTitle,
    color: (theme) => theme.palette.secondary.main,

    "&:after": {
        content: "''",
        position: "absolute",
        width: "100%",
        transform: "scaleX(1)",
        transformOrigin: "bottom left",
        height: "4px",
        bottom: 0,
        left: 0,
        backgroundColor: (theme) => theme.palette.secondary.main,
        transition: "transform 0.2s ease-out",
      },
};