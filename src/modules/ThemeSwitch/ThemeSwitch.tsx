import React from "react";
import Box from "@mui/material/Box";
import { ThemeContext } from "../../context";
import { styled } from "@mui/material";
import { SwitchProps } from "@mui/material/Switch";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

const MaterialUISwitch = styled((props: SwitchProps) => {
  return (
    <Box
      className={props.className}
      onClick={(e) => {
        if (props.onChange) props.onChange(e, !props.checked);
      }}
    >
      <LightModeIcon
        className={
          "CustomSwitch-lightIcon" +
          (!props.checked ? " CustomSwitch-hiddenIcon" : "")
        }
      />
      <DarkModeIcon
        className={
          "CustomSwitch-lightIcon" +
          (props.checked ? " CustomSwitch-hiddenIcon" : "")
        }
      />
      <Box
        className={
          "CustomSwitch-thumb" + (props.checked ? " CustomSwitch-checked" : "")
        }
      >
        <LightModeIcon
          className={
            "CustomSwitch-icon" +
            (props.checked ? " CustomSwitch-hiddenIcon" : "")
          }
        />
        <DarkModeIcon
          className={
            "CustomSwitch-icon" +
            (!props.checked ? " CustomSwitch-hiddenIcon" : "")
          }
        />
      </Box>
    </Box>
  );
})(({ theme }) => ({
  position: "relative",
  cursor: "pointer",
  display: "inline-flex",
  padding: "0.375rem 0.5rem",
  gap: "0.875rem",
  backgroundColor:
    theme.palette.mode === "light"
      ? theme.palette.primary.light
      : theme.palette.primary.contrastText,
  borderRadius: "9999px",
  transition: "background-color 0.1s ease-in-out",
  "&:hover": {
    backgroundColor:
      theme.palette.mode === "light"
        ? theme.palette.primary.main
        : theme.palette.grey[900],
  },
  ".CustomSwitch-lightIcon": {
    color: "rgba(255, 255, 255, 0.8)",
    transition: "all .3s ease-in-out",
  },
  "& .CustomSwitch-hiddenIcon": {
    transform: "scale(0)",
  },
  ".CustomSwitch-thumb": {
    position: "absolute",
    top: "0.125rem",
    left: "0.125rem",
    height: "2rem",
    width: "2rem",
    borderRadius: "9999px",
    backgroundColor:
      theme.palette.mode === "light"
        ? theme.palette.background.default
        : theme.palette.text.primary,
    transition: "all .3s ease-in-out",

    ".CustomSwitch-icon": {
      position: "absolute",
      margin: "0.25rem",
      color:
        theme.palette.mode === "light"
          ? theme.palette.primary.main
          : theme.palette.primary.contrastText,
      transition: "all .3s ease-in-out",
    },

    "& .CustomSwitch-hiddenIcon": {
      transform: "scale(0)",
    },
  },

  "& .CustomSwitch-checked": {
    transform: "translateX(2.625rem)",
  },
}));

export const ThemeSwitch = () => {
  const { currentTheme, setTheme } = React.useContext(ThemeContext);

  return (
    <Box>
      <MaterialUISwitch
        checked={currentTheme === "dark"}
        onChange={() => {
          setTheme(currentTheme === "light" ? "dark" : "light");
        }}
      />
    </Box>
  );
};
