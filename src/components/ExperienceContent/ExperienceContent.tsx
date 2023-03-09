import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import { DynamicText } from "../DynamicText/DynamicText";
import { ExperienceContentProps } from "./ExperienceContent.models";
import {
  sxExperienceContentContainer,
  sxExperienceContentItemContainer,
  sxExperienceContentItemContent,
  sxExperienceContentItemContentContainer,
  sxExperienceContentItemInfo,
  sxExperienceContentItemInfoContainer,
  sxExperienceContentItemInfoContainerIsMedium,
  sxExperienceContentItemSubTitle,
  sxExperienceContentItemTitle,
  sxExperienceContentItemTitleContainer,
  sxExperienceContentItemTitleContainerMedium,
} from "./ExperienceContent.styles";

export const ExperienceContent = ({ experiences }: ExperienceContentProps) => {
  const theme = useTheme();
  const isMedium = useMediaQuery(theme.breakpoints.down("md"));
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box sx={sxExperienceContentContainer}>
      {experiences.map((element, index) => {
        return (
          <Box key={index} sx={sxExperienceContentItemContainer}>
            <Box
              sx={
                isMedium
                  ? sxExperienceContentItemTitleContainerMedium
                  : sxExperienceContentItemTitleContainer
              }
            >
              <Typography component="div" sx={sxExperienceContentItemTitle}>
                <DynamicText textId={element.title ?? ""} />
              </Typography>
              <Box
                sx={
                  isMedium
                    ? sxExperienceContentItemInfoContainerIsMedium
                    : sxExperienceContentItemInfoContainer
                }
              >
                <Typography
                  component="div"
                  sx={sxExperienceContentItemSubTitle}
                >
                  <DynamicText textId={element.subTitle ?? ""} />
                </Typography>
                <Typography component="div" sx={sxExperienceContentItemInfo}>
                  <DynamicText textId={element.info ?? ""} />
                </Typography>
              </Box>
            </Box>
            <Box sx={sxExperienceContentItemContentContainer}>
              <Typography component="div" sx={sxExperienceContentItemContent}>
                <DynamicText textId={element.content ?? ""} />
              </Typography>
            </Box>
          </Box>
        );
      })}
    </Box>
  );
};
