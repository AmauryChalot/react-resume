import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { DynamicText } from "../DynamicText/DynamicText";
import {
  sxDownloadBottomIcon,
  sxDownloadButton,
} from "./AnimatedIconPrimaryButton.styles";
import { AnimatedIconPrimaryButtonProps } from "./AnimatedIconPrimaryButton.models";
import FrenchPDF from "../../assets/documents/Amaury-Chalot-CV-FR.pdf";

export const AnimatedIconPrimaryButton = (
  props: AnimatedIconPrimaryButtonProps
) => {
  const { text, icon } = props;

  return (
    <Button component="button" sx={sxDownloadButton}>
      <a href={FrenchPDF} download="Amaury Chalot CV.pdf">
        {icon && (
          <Box>
            {icon}
            <Box component="span" sx={sxDownloadBottomIcon}></Box>
          </Box>
        )}
        <Typography component="h3">
          <DynamicText textId={text} />
        </Typography>
      </a>
    </Button>
  );
};
