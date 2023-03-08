import { SxProps, Theme } from "@mui/material";

export const sxInfoCardContainer: SxProps<Theme> = {
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
  boxShadow:
    "0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)",
};

export const sxInfoCardContainerSmall: SxProps<Theme> = {
  ...sxInfoCardContainer,
  gap: "12px",
};
