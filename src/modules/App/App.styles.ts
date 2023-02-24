import {SxProps, Theme} from "@mui/material";

export const sxAppContainer: SxProps<Theme> = {
    overflow: "auto",
    boxSizing: "border-box",
    flexGrow: 1,
    height: '100%',
    p: 0,
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
    flexDirection: 'column',
    gap: '2rem',
    padding: "2rem",
    backgroundColor: (theme) => theme.palette.background.default,
    position: "relative",
    scrollBehavior: "smooth",
    scrollSnapType: "y mandatory",

    "> *": {
        scrollSnapAlign: "start",
    }
};