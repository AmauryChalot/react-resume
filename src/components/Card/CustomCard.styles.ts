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