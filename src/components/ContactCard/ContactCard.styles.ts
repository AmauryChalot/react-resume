import { SxProps, Theme } from "@mui/material";

export const sxContactCardContainer: SxProps<Theme> = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: (theme) => theme.palette.background.paper,
    borderRadius: "10px",
    padding: "16px",
    width: "100%",
    height: "fit-content",
    boxSizing: "border-box",
    gap: "32px",
    scrollMarginTop: "96px",
    boxShadow: "0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)",
}

export const sxContactCardPictureContainer: SxProps = {
    width: "200px",
    height: "250px",
    overflow: "hidden",
    borderRadius: "10px",
    boxSizing: "border-box",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    flexShrink: 0,
}

export const sxContactCardInfoContainer: SxProps = {
    flexGrow: 1,
    marginTop: 0,
    height: "100%",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    flexDirection: "column",
    boxSizing: "border-box",
}

export const sxContactCardTitle: SxProps<Theme> = {
    color: (theme) => theme.palette.text.primary,
    fontSize: (theme) => theme.typography.h4.fontSize,
    fontWeight: 800,
    fontFamily: (theme) => theme.typography.fontFamily,
}

export const sxContactCardSubtitle: SxProps<Theme> = {
    marginTop: "4px",
    color: (theme) => theme.palette.primary.main,
    fontSize: (theme) => theme.typography.h5.fontSize,
    fontWeight: 800,
    fontFamily: (theme) => theme.typography.fontFamily,
}

export const sxContactCardBody: SxProps<Theme> = {
    marginTop: "16px",
    color: (theme) => theme.palette.text.primary,
    fontSize: (theme) => theme.typography.body1.fontSize,
    fontWeight: 500,
    fontFamily: (theme) => theme.typography.fontFamily,
}