import { SxProps, Theme } from "@mui/material";

export const sxProjectContentContainer: SxProps = {
  display: "flex",
  flexDirection: "column",
  gap: "64px",
  marginTop: "24px",
};

export const sxProjectContentItemContainer: SxProps = {
  display: "flex",
  flexDirection: "column",
  gap: "24px",
  paddingX: "12px",
};

export const sxProjectContentItemTitleContainer: SxProps = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
};

export const sxProjectContentItemTitleContainerMedium: SxProps = {
  ...sxProjectContentItemTitleContainer,
  flexDirection: "column",
  alignItems: "flex-start",
  gap: "8px",
};

export const sxProjectContentItemTitle: SxProps<Theme> = {
  color: (theme) => theme.palette.text.primary,
  fontSize: (theme) => theme.typography.h6.fontSize,
  fontWeight: 600,
  fontFamily: (theme) => theme.typography.fontFamily,
};

export const sxProjectContentItemSubTitle: SxProps<Theme> = {
  color: (theme) => theme.palette.text.secondary,
  fontSize: (theme) => theme.typography.body2.fontSize,
  fontWeight: 600,
  fontStyle: "italic",
  fontFamily: (theme) => theme.typography.fontFamily,
};

export const sxProjectContentItemContentContainer: SxProps = {
  paddingLeft: "0px",
};

export const sxProjectContentItemContent: SxProps<Theme> = {
  color: (theme) => theme.palette.text.primary,
  fontSize: (theme) => theme.typography.body1.fontSize,
  fontWeight: 500,
  fontFamily: (theme) => theme.typography.fontFamily,
};
