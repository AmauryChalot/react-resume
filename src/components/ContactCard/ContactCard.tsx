import { useMediaQuery, useTheme } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import React from 'react';
import { useScrollableRef } from '../Card/CustomCard.hook';
import { DynamicText } from '../DynamicText/DynamicText';
import { ContactCardProps } from './ContactCard.models';
import {
  sxContactCardBody,
  sxContactCardContainer,
  sxContactCardContainerMedium,
  sxContactCardContainerSmall,
  sxContactCardInfoContainer,
  sxContactCardPictureContainer,
  sxContactCardPictureContainerMedium,
  sxContactCardPictureTextContainer,
  sxContactCardSubtitle,
  sxContactCardTitle,
} from './ContactCard.styles';

export const ContactCard = (props: ContactCardProps) => {
  const theme = useTheme();
  const isMedium = useMediaQuery(theme.breakpoints.between('sm', 'md'));
  const isSmall = useMediaQuery(theme.breakpoints.down('md'));

  const [_, setScrolledSections] = props.scrolledSectionsState;

  const { ref } = useScrollableRef(
    props.containerRef,
    props.index,
    setScrolledSections,
    true,
  );

  return (
    <Box
      sx={
        isSmall
          ? sxContactCardContainerSmall
          : isMedium
          ? sxContactCardContainerMedium
          : sxContactCardContainer
      }
      id={'aboutme'}
      ref={ref}
    >
      <Box sx={isMedium ? sxContactCardPictureContainerMedium : {}}>
        <Box sx={sxContactCardPictureContainer}>
          <img
            alt="image"
            style={{
              width: '115%',
              marginTop: '-10px',
              userSelect: 'none',
              objectFit: 'cover',
            }}
            height="300"
            width="230"
            src="/images/pp.webp"
          />
        </Box>
        {isMedium && (
          <Box sx={sxContactCardPictureTextContainer}>
            <Typography component="h1" sx={sxContactCardTitle}>
              AMAURY CHALOT
            </Typography>
            <Typography component="h2" sx={sxContactCardSubtitle}>
              Software Engineer
            </Typography>
          </Box>
        )}
      </Box>
      <Box sx={sxContactCardInfoContainer}>
        {!isMedium && (
          <React.Fragment>
            <Typography component="h1" sx={sxContactCardTitle}>
              AMAURY CHALOT
            </Typography>
            <Typography component="h2" sx={sxContactCardSubtitle}>
              Software Engineer
            </Typography>
          </React.Fragment>
        )}
        <Typography sx={sxContactCardBody}>
          <DynamicText textId="about-me-content" />
        </Typography>
      </Box>
    </Box>
  );
};
