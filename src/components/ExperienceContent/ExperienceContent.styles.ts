import { SxProps, Theme } from "@mui/material";

export const sxExperienceContentContainer: SxProps = {
  display: "flex",
  flexDirection: "column",
  gap: "64px",
  marginTop: "24px",
};

export const sxExperienceContentItemContainer: SxProps = {
  display: "flex",
  flexDirection: "column",
  gap: "24px",
  paddingLeft: "16px",
};

export const sxExperienceContentItemTitleContainer: SxProps = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  //paddingLeft: "24px",
};

export const sxExperienceContentItemTitle: SxProps<Theme> = {
  color: (theme) => theme.palette.text.primary,
  fontSize: (theme) => theme.typography.h6.fontSize,
  fontWeight: 600,
  fontFamily: (theme) => theme.typography.fontFamily,
};

export const sxExperienceContentItemInfoContainer: SxProps = {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-end",
};

export const sxExperienceContentItemSubTitle: SxProps<Theme> = {
  color: (theme) => theme.palette.text.secondary,
  fontSize: (theme) => theme.typography.body2.fontSize,
  fontWeight: 600,
  fontStyle: "italic",
  fontFamily: (theme) => theme.typography.fontFamily,
  textAlign: "right",
};

export const sxExperienceContentItemInfo: SxProps<Theme> = {
  color: (theme) => theme.palette.text.secondary,
  fontSize: (theme) => theme.typography.body2.fontSize,
  fontWeight: 500,
  fontStyle: "italic",
  fontFamily: (theme) => theme.typography.fontFamily,
  textAlign: "right",
};

export const sxExperienceContentItemContentContainer: SxProps = {
  paddingLeft: "0px",
};

export const sxExperienceContentItemContent: SxProps<Theme> = {
  color: (theme) => theme.palette.text.primary,
  fontSize: (theme) => theme.typography.body1.fontSize,
  fontWeight: 500,
  fontFamily: (theme) => theme.typography.fontFamily,
};
