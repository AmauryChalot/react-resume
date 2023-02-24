import {SxProps, Theme} from "@mui/material";

export const sxPageContainer: SxProps<Theme> = {
    backgroundColor: (theme) => theme.palette.background.default,
}

export const sxAppContainer: SxProps<Theme> = {
    //overflow: "auto",
    top: 0,
    boxSizing: "border-box",
    //paddingTop: "64px",
    //marginTop: "64px",
    //paddingTop: "64px",
    //flexGrow: 1,
    height: "100%",
    //height: 'calc(100% - 64px)',
    //p: 0,
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
    flexDirection: 'column',
    gap: '32px',
    padding: "32px",
    backgroundColor: (theme) => theme.palette.background.default,
    position: "relative",
};