import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useThemeMediaQuery } from '../../utils/hooks/useThemeMediaQuery';
import { DynamicText } from '../DynamicText/DynamicText';
import {
  sxLanguageCardContainer,
  sxLanguageCardContainerSmall,
  sxLanguageCardContainerTitle,
  sxLanguageCardItemContainer,
  sxLanguageCardItemSubtitle,
  sxLanguageCardItemTitle,
} from './LanguageCard.styles';

export const LanguageCard = () => {
  const { isSmall } = useThemeMediaQuery();

  return (
    <Box sx={isSmall ? sxLanguageCardContainerSmall : sxLanguageCardContainer}>
      <Typography sx={sxLanguageCardContainerTitle}>
        <DynamicText textId={'languages'} />
      </Typography>
      <Box sx={sxLanguageCardItemContainer}>
        <Typography sx={sxLanguageCardItemTitle}>
          <DynamicText textId="languages-1-title" />
        </Typography>
        <Typography sx={sxLanguageCardItemSubtitle}>
          <DynamicText textId="languages-1-info" />
        </Typography>
      </Box>
      <Box sx={sxLanguageCardItemContainer}>
        <Typography sx={sxLanguageCardItemTitle}>
          <DynamicText textId="languages-2-title" />
        </Typography>
        <Typography sx={sxLanguageCardItemSubtitle}>
          <DynamicText textId="languages-2-info" />
        </Typography>
      </Box>
    </Box>
  );
};
