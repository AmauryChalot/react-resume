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
  const { containerRef, title, content, index, scrolledSectionsState, id } =
    props;
  const [_, setScrolledSections] = scrolledSectionsState;

  const { ref, refIsVisible } = useScrollableRef(
    containerRef,
    index,
    setScrolledSections,
  );

  return (
    <Card sx={sxCustomCardContainer} id={id} ref={ref}>
      <Typography
        sx={refIsVisible ? sxCustomCardTitleHighlighted : sxCustomCardTitle}
      >
        {title}
      </Typography>
      <Typography
        component="div"
        sx={refIsVisible ? sxCustomCardContentHighlighted : sxCustomCardContent}
      >
        {content}
      </Typography>
    </Card>
  );
};
