import React from "react";

export interface ContactCardProps {
  containerRef: React.MutableRefObject<HTMLDivElement | null>;
  index: number;
  scrolledSectionsState: [number, React.Dispatch<React.SetStateAction<number>>];
}
