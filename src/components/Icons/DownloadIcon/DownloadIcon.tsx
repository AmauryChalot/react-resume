import React from 'react';

interface DownloadIconProps {
  width?: string;
  height?: string;
  color?: string;
}

export const DownloadIcon = (props: DownloadIconProps) => {
  const { width, height, color } = props;

  return (
    <svg width={width ?? '50'} height={height ?? '50'} viewBox="0 0 100 100">
      <polygon
        points="30,0 70,0 70,50 100,50 50,100 0,50 30,50"
        fill={color ?? 'red'}
      />
    </svg>
  );
};
