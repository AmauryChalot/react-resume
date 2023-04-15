import { useMediaQuery, useTheme } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import React from 'react';
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

  const [scrolledSections, setScrolledSections] = props.scrolledSectionsState;

  const myRef = React.useRef<HTMLDivElement | null>(null);
  const [myRefIsVisible, setMyRefIsVisible] = React.useState<boolean>(false);

  React.useEffect(() => {
    myRef.current?.focus();
    const handleScroll = (e: Event) => {
      console.log();
      if (
        myRef.current &&
        props.containerRef.current &&
        myRef.current.offsetTop <
          props.containerRef.current?.scrollTop +
            props.containerRef?.current?.clientHeight / 2.5
      ) {
        setScrolledSections(props.index);
        setMyRefIsVisible(true);
      } else {
        setMyRefIsVisible(false);
      }
    };
    if (props.containerRef?.current)
      props.containerRef.current.addEventListener('scroll', handleScroll);
    return () => {
      if (props.containerRef?.current)
        props.containerRef.current.removeEventListener('scroll', handleScroll);
    };
  }, []);

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
      ref={myRef}
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
