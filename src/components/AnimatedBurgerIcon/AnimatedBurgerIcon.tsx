import Box from "@mui/material/Box";
import React from "react";
import { AnimatedBurgerIconProps } from "./AnimatedBurgerIcon.models";
import {
  sxAnimatedBurgerIcon,
  sxAnimatedBurgerIconActive,
  sxAnimatedBurgerIconContainer,
  sxAnimatedBUrgerIconSpan,
} from "./AnimatedBurgerIcon.styles";

export const AnimatedBurgerIcon = (props: AnimatedBurgerIconProps) => {
  return (
    <Box sx={sxAnimatedBurgerIconContainer}>
      <Box
        sx={props.active ? sxAnimatedBurgerIconActive : sxAnimatedBurgerIcon}
      >
        <Box component="span" sx={sxAnimatedBUrgerIconSpan}></Box>
        <Box component="span" sx={sxAnimatedBUrgerIconSpan}></Box>
        <Box component="span" sx={sxAnimatedBUrgerIconSpan}></Box>
      </Box>
    </Box>
  );
};
