import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useThemeMediaQuery } from '../../utils/hooks/useThemeMediaQuery';
import { DynamicText } from '../DynamicText/DynamicText';
import {
  sxInfoCardContainer,
  sxInfoCardContainerSmall,
  sxInfoCardContainerTitle,
  sxInfoCardItemContainer,
  sxInfoCardItemInfo,
  sxInfoCardItemSubtitle,
  sxInfoCardItemTitle,
} from './InfoCard.styles';

export const InfoCard = () => {
  const { isSmall } = useThemeMediaQuery();

  return (
    <Box
      sx={isSmall ? sxInfoCardContainerSmall : sxInfoCardContainer}
      id={'contact'}
    >
      <Typography sx={sxInfoCardContainerTitle}>
        <DynamicText textId={'education'} />
      </Typography>
      <Box sx={sxInfoCardItemContainer}>
        <Typography sx={sxInfoCardItemTitle}>
          <DynamicText textId="education-1-title" />
        </Typography>
        <Typography sx={sxInfoCardItemSubtitle}>
          <DynamicText textId="education-1-date" />
        </Typography>
        <Typography sx={sxInfoCardItemInfo}>
          <DynamicText textId="education-1-location" />
        </Typography>
      </Box>
      <Box sx={sxInfoCardItemContainer}>
        <Typography sx={sxInfoCardItemTitle}>
          <DynamicText textId="education-2-title" />
        </Typography>
        <Typography sx={sxInfoCardItemSubtitle}>
          <DynamicText textId="education-2-date" />
        </Typography>
        <Typography sx={sxInfoCardItemInfo}>
          <DynamicText textId="education-2-location" />
        </Typography>
      </Box>
      <Box sx={sxInfoCardItemContainer}>
        <Typography sx={sxInfoCardItemTitle}>
          <DynamicText textId="education-3-title" />
        </Typography>
        <Typography sx={sxInfoCardItemSubtitle}>
          <DynamicText textId="education-3-date" />
        </Typography>
        <Typography sx={sxInfoCardItemInfo}>
          <DynamicText textId="education-3-location" />
        </Typography>
      </Box>
    </Box>
  );
};
