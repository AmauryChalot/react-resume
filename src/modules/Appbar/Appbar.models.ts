import React from 'react';

export interface AppbarMenuItem {
  id: string;
  value: string;
}

export interface AppbarProps {
  scrolledSectionsState: [number, React.Dispatch<React.SetStateAction<number>>];
}
