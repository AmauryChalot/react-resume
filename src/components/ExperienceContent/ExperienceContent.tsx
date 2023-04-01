import {
  Box,
  List,
  ListItem,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { DynamicText } from "../DynamicText/DynamicText";
import {
  ExperienceItemTypes,
  ExperienceContentProps,
  ExperienceItemContent,
  ExperienceContentType,
} from "./ExperienceContent.models";
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

const isContentText = (
  content: ExperienceItemTypes,
  type: ExperienceContentType
): content is string => {
  return type === ExperienceContentType.TEXT;
};

const isContentList = (
  content: ExperienceItemTypes,
  type: ExperienceContentType
): content is string[] => {
  return type === ExperienceContentType.LIST;
};

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
                {element?.content?.map(
                  (contentItem: ExperienceItemContent, contentItemIndex) => {
                    if (isContentText(contentItem.content, contentItem.type)) {
                      return (
                        <DynamicText
                          key={contentItemIndex}
                          textId={contentItem.content ?? ""}
                        />
                      );
                    } else if (
                      isContentList(contentItem.content, contentItem.type)
                    ) {
                      return (
                        <List key={contentItemIndex}>
                          {contentItem.content.map((listItem, index) => (
                            <ListItem key={index}>{listItem}</ListItem>
                          ))}
                        </List>
                      );
                    } else {
                      return <></>;
                    }
                  }
                )}
              </Typography>
            </Box>
          </Box>
        );
      })}
    </Box>
  );
};
