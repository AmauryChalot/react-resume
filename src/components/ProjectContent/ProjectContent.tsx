import { useMediaQuery, useTheme } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { DynamicText } from "../DynamicText/DynamicText";
import { ProjectContentProps } from "./ProjectContent.models";
import {
  sxProjectContentContainer,
  sxProjectContentItemContainer,
  sxProjectContentItemContent,
  sxProjectContentItemContentContainer,
  sxProjectContentItemSubTitle,
  sxProjectContentItemTitle,
  sxProjectContentItemTitleContainer,
  sxProjectContentItemTitleContainerMedium,
} from "./ProjectContent.styles";

export const ProjectContent = ({ projects }: ProjectContentProps) => {
  const theme = useTheme();
  const isMedium = useMediaQuery(theme.breakpoints.down("md"));
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box sx={sxProjectContentContainer}>
      {projects.map((element, index) => {
        return (
          <Box key={index} sx={sxProjectContentItemContainer}>
            <Box
              sx={
                isMedium
                  ? sxProjectContentItemTitleContainerMedium
                  : sxProjectContentItemTitleContainer
              }
            >
              <Typography component="div" sx={sxProjectContentItemTitle}>
                <DynamicText textId={element.title ?? ""} />
              </Typography>
              <Typography component="div" sx={sxProjectContentItemSubTitle}>
                <DynamicText textId={element.info ?? ""} />
              </Typography>
            </Box>
            <Box sx={sxProjectContentItemContentContainer}>
              <Typography component="div" sx={sxProjectContentItemContent}>
                <DynamicText textId={element.content ?? ""} />
              </Typography>
            </Box>
          </Box>
        );
      })}
    </Box>
  );
};
