import { SxProps, Theme } from "@mui/material";

export const sxSidePanelContainer: SxProps<Theme> = {
  marginTop: "64px",
  zIndex: (theme) => theme.zIndex.appBar - 1,

  "& .MuiBackdrop-root": {
    backgroundColor: "transparent",
  },
  "& .MuiPaper-root": {
    backdropFilter: "blur(3px)",
    width: "fit-content",
    backgroundColor: (theme) =>
      theme.palette.mode === "light"
        ? "rgba(255, 255, 255, 0.7)"
        : "rgba(0, 0, 0, 0.57)",
    backgroundImage: "none",
  },
};

export const sxSidePanelContainerSmall: SxProps<Theme> = {
  ...sxSidePanelContainer,
  "& .MuiPaper-root": {
    backdropFilter: "blur(3px)",
    width: "100%",
    backgroundColor: (theme) =>
      theme.palette.mode === "light"
        ? "rgba(255, 255, 255, 0.7)"
        : "rgba(0, 0, 0, 0.57)",
    backgroundImage: "none",
  },
};
