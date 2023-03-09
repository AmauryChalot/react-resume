import { useMediaQuery, useTheme } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { DynamicText } from "../DynamicText/DynamicText";
import { InfoCardProps } from "./InfoCard.models";
import {
  sxInfoCardContainer,
  sxInfoCardContainerSmall,
  sxInfoCardContainerTitle,
  sxInfoCardItemContainer,
  sxInfoCardItemInfo,
  sxInfoCardItemSubtitle,
  sxInfoCardItemTitle,
} from "./InfoCard.styles";

export const InfoCard = (props: InfoCardProps) => {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      sx={isSmall ? sxInfoCardContainerSmall : sxInfoCardContainer}
      id={"contact"}
    >
      <Typography sx={sxInfoCardContainerTitle}>
        <DynamicText textId={"education"} />
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
