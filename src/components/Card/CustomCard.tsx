import { Card, Typography } from '@mui/material';
import React from 'react';
import { useScrollableRef } from './CustomCard.hook';
import { CustomCardProps } from './CustomCard.models';
import {
  sxCustomCardContainer,
  sxCustomCardContent,
  sxCustomCardContentHighlighted,
  sxCustomCardTitle,
  sxCustomCardTitleHighlighted,
} from './CustomCard.styles';

export const CustomCard = (props: CustomCardProps) => {
  const [_, setScrolledSections] = props.scrolledSectionsState;

  const { ref, refIsVisible } = useScrollableRef(
    props.containerRef,
    props.index,
    setScrolledSections,
  );

  return (
    <Card sx={sxCustomCardContainer} id={props.id} ref={ref}>
      <Typography
        sx={refIsVisible ? sxCustomCardTitleHighlighted : sxCustomCardTitle}
      >
        {props.title}
      </Typography>
      <Typography
        component="div"
        sx={refIsVisible ? sxCustomCardContentHighlighted : sxCustomCardContent}
      >
        {props.content}
      </Typography>
    </Card>
  );
};
