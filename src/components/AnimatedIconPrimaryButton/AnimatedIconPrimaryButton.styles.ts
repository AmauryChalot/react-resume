import { SxProps, Theme } from "@mui/material";

export const sxDownloadButton: SxProps<Theme> = {
    backgroundColor: "transparent",
    border: (theme) => `2px solid ${theme.palette.primary.main}`,
    borderRadius: '9999px',
    textTransform: 'capitalize',
    transition: "all 0.1s ease-in-out",
    fontWeight: 600,
    paddingY: "2px",


    "> a": {
        position: "relative",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        textDecoration: "none",
        color: "inherit",

        "> h3": {
            fontWeight: 600,
        },

        "> div": {
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            flexDirection: "column",
            gap: "2px",
            width: "24px",
            height: "24px",
            paddingBottom: "6px",
            transition: "gap 100ms ease-in-out",
        },

        ":active": {
            "> div": {
                gap: "0px",
            },
        }
    },
}

export const sxDownloadBottomIcon: SxProps<Theme> = {
    backgroundColor: (theme) => theme.palette.primary.main,
    width: "14px",
    height: "2px",
}