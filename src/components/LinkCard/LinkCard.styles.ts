import { SxProps, Theme } from "@mui/material";

export const sxLinkCardContainer: SxProps<Theme> = {
    display: "flex",
    alignItems: "flex-start",
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: (theme) => theme.palette.background.paper,
    borderRadius: "10px",
    padding: "16px",
    width: "100%",
    height: "fit-content",
    boxSizing: "border-box",
    gap: "16px",
    scrollMarginTop: "96px",
    boxShadow: "0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)",
}

export const sxLinkCardTitle: SxProps<Theme> = {
    color: (theme) => theme.palette.text.primary,
    fontSize: (theme) => theme.typography.h6.fontSize,
    fontWeight: 800,
    fontFamily: (theme) => theme.typography.fontFamily,
}

export const sxLinkCardItemContainer: SxProps = {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "row",
    gap: "8px",
}

export const sxLinkCardItemTypography: SxProps<Theme> = {
    color: (theme) => theme.palette.text.secondary,
    fontSize: (theme) => theme.typography.caption.fontSize,
    fontWeight: 700,
    fontFamily: (theme) => theme.typography.fontFamily,
}