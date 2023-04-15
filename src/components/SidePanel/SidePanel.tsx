import { Drawer } from '@mui/material';
import React from 'react';
import { useThemeMediaQuery } from '../../utils/hooks/useThemeMediaQuery';
import { SidePanelProps } from './SidePanel.models';
import {
  sxSidePanelContainer,
  sxSidePanelContainerSmall,
} from './SidePanel.styles';

export const SidePanel = (props: SidePanelProps) => {
  const { open, onClose, children } = props;

  const { isSmall } = useThemeMediaQuery();

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
