import {SxProps, Theme} from "@mui/material";

export const sxPageContainer: SxProps<Theme> = {
    backgroundColor: (theme) => theme.palette.background.default,
    height: "100%",
};

export const sxAppContainer: SxProps<Theme> = {
    top: 0,
    boxSizing: "border-box",
    height: "fit-content",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    flexDirection: "column",
    gap: "32px",
    padding: "32px 32px 32px 32px",
    backgroundColor: (theme) => theme.palette.background.default,
    position: "relative",
};

export const sxAppContentContainer: SxProps<Theme> = {
    boxSizing: "border-box",
    display: "flex",
    gap: "24px",
};

export const sxAppContentContainerSmall: SxProps<Theme> = {
    ...sxAppContentContainer,
    flexDirection: "column-reverse",
    gap: "16px",
}

export const sxAppContentLeftContainer: SxProps = {
    display: "flex",
    flexDirection: "column",
    gap: "16px",
    flex: "3",
};

export const sxAppContentRightContainer: SxProps = {
    flex: "1",
    display: "flex",
    flexDirection: "column",
    gap: "16px",
}