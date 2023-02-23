import {SxProps, Theme} from "@mui/material";

export const sxAppContainer: SxProps<Theme> = {
    overflow: "auto",
    height: '100%',
    p: 0,
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
    backgroundColor: (theme) => theme.palette.background.default,
};