import { Drawer } from "@mui/material";
import React from "react";
import { SidePanelProps } from "./SidePanel.models";
import { sxSidePanelContainer } from "./SidePanel.styles";

export const SidePanel = (props: SidePanelProps) => {
  return (
    <Drawer
      open={props.open}
      onClose={props.onClose}
      sx={sxSidePanelContainer}
      disableScrollLock
    >
      {props.children}
    </Drawer>
  );
};
