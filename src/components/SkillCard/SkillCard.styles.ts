import { SxProps, Theme } from "@mui/material";

export const sxSkillCardContainer: SxProps<Theme> = {
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
    boxShadow: "0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)",
};

export const sxSkillCardContainerSmall: SxProps<Theme> = {
    ...sxSkillCardContainer,
    gap: "12px",
}

export const sxSkillCardContainerTitle: SxProps<Theme> = {
    color: (theme) => theme.palette.text.primary,
    fontSize: (theme) => theme.typography.h6.fontSize,
    fontWeight: 800,
    fontFamily: (theme) => theme.typography.fontFamily,
}

export const sxSkillCardItemContainer: SxProps<Theme> = {
    display: "flex",
    flexDirection: "column",
    gap: "8px",
}

export const sxSkillCardItemTitle: SxProps<Theme> = {
    color: (theme) => theme.palette.primary.main,
    fontSize: (theme) => theme.typography.body1.fontSize,
    fontWeight: 700,
    fontFamily: (theme) => theme.typography.fontFamily,
}

export const sxSkillCardItemContent: SxProps = {
    display: "flex",
    flexDirection: "column",
    gap: "8px",
    paddingLeft: "8px",
}

export const sxSkillCardItemContentText: SxProps<Theme> = {
    color: (theme) => theme.palette.text.secondary,
    fontSize: (theme) => theme.typography.body2.fontSize,
    fontWeight: 600,
    fontFamily: (theme) => theme.typography.fontFamily,
    fontStyle: "italic",
}