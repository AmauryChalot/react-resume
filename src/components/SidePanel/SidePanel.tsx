import { Drawer, useMediaQuery, useTheme } from '@mui/material';
import React from 'react';
import { SidePanelProps } from './SidePanel.models';
import {
  sxSidePanelContainer,
  sxSidePanelContainerSmall,
} from './SidePanel.styles';

export const SidePanel = (props: SidePanelProps) => {
  const { open, onClose, children } = props;
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Drawer
      open={open}
      onClose={onClose}
      sx={isSmall ? sxSidePanelContainerSmall : sxSidePanelContainer}
      disableScrollLock
    >
      {children ?? <></>}
    </Drawer>
  );
};
