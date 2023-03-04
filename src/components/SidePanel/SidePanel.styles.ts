import { SxProps, Theme } from "@mui/material";

export const sxSidePanelContainer: SxProps<Theme> = {
    marginTop: "64px",

    "& .MuiBackdrop-root": {
        marginTop: "64px",
        backgroundColor: "transparent",
    },
    "& .MuiPaper-root": {
        backdropFilter: "blur(3px)",
        marginTop: "64px",
        width: "100%",
        backgroundColor: (theme) => theme.palette.mode === "light" ? "rgba(255, 255, 255, 0.3)" : "rgba(0, 0, 0, 0.3)",
        backgroundImage: 'none',
    }
}