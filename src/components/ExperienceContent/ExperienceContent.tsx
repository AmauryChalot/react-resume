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
  ContentType,
  ExperienceContentProps,
  ItemContent,
  ItemTypes,
} from "./ExperienceContent.models";
import {
  sxExperienceContentContainer,
  sxExperienceContentItemContainer,
  sxExperienceContentItemContent,
  sxExperienceContentItemContentContainer,
  sxExperienceContentItemInfo,
  sxExperienceContentItemInfoContainer,
  sxExperienceContentItemInfoContainerIsMedium,
  sxExperienceContentItemList,
  sxExperienceContentItemListItem,
  sxExperienceContentItemSubTitle,
  sxExperienceContentItemTitle,
  sxExperienceContentItemTitleContainer,
  sxExperienceContentItemTitleContainerMedium,
} from "./ExperienceContent.styles";

export const isContentText = (
  content: ItemTypes,
  type: ContentType
): content is string => {
  return type === ContentType.TEXT;
};

export const isContentList = (
  content: ItemTypes,
  type: ContentType
): content is string[] => {
  return type === ContentType.LIST;
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
              {element?.content?.map(
                (contentItem: ItemContent, contentItemIndex) => {
                  if (isContentText(contentItem.content, contentItem.type)) {
                    return (
                      <Typography
                        key={contentItemIndex}
                        component="p"
                        sx={sxExperienceContentItemContent}
                      >
                        <DynamicText textId={contentItem.content ?? ""} />
                      </Typography>
                    );
                  } else if (
                    isContentList(contentItem.content, contentItem.type)
                  ) {
                    return (
                      <List
                        key={contentItemIndex}
                        sx={sxExperienceContentItemList}
                      >
                        {contentItem.content.map((listItem, index) => (
                          <ListItem
                            key={index}
                            sx={sxExperienceContentItemListItem}
                          >
                            <DynamicText textId={listItem ?? ""} />
                          </ListItem>
                        ))}
                      </List>
                    );
                  } else {
                    return <></>;
                  }
                }
              )}
            </Box>
          </Box>
        );
      })}
    </Box>
  );
};
