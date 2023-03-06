import { SxProps, Theme } from "@mui/material";

export const sxAnimatedBurgerIconContainer: SxProps = {
    width: "24px",
    height: "24px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "100%",
}

export const sxAnimatedBurgerIcon: SxProps = {
    width: "18px",
    height: "12px",
    position: "relative",
    transform: "rotate(0deg)",
    transition: ".5s ease-in-out",
    cursor: "pointer",

    "& span:nth-child(1)": {
        top: 0,
        transformOrigin: "left center",
    },

    "& span:nth-child(2)": {
        top: 5,
        transformOrigin: "left center",
    },

    "& span:nth-child(3)": {
        top: 10,
        transformOrigin: "left center",
    }
}

export const sxAnimatedBUrgerIconSpan: SxProps<Theme> = {
    display: "block",
    position: "absolute",
    height: "2px",
    width: "100%",
    left: 0,
    opacity: 1,
    transform: "rotage(0deg)",
    transitionProperty: "opacity, transform, width, top, left, opacity",
    transitionDuration: ".3s",
    transitionTimingFunction: "ease-in-out",
    backgroundColor: (theme) => theme.palette.action.active,
}

export const sxAnimatedBurgerIconActive: SxProps = {
    ...sxAnimatedBurgerIcon,
    "& span:nth-child(1)": {
        top: "-1px",
        left: "3px",
        transform: "rotate(45deg)",
        transformOrigin: "left center",
    },

    "& span:nth-child(2)": {
        width: "0%",
        opacity: 0,
        transformOrigin: "left center",
    },

    "& span:nth-child(3)": {
        transform: "rotate(-45deg)",
        top: "12px",
        left: "3px",
        transformOrigin: "left center",
    }
}