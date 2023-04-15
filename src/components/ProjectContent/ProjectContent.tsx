import { List, ListItem, useMediaQuery, useTheme } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { DynamicText } from '../DynamicText/DynamicText';
import {
  isContentList,
  isContentText,
} from '../ExperienceContent/ExperienceContent';
import { ItemContent } from '../ExperienceContent/ExperienceContent.models';
import {
  sxExperienceContentItemContent,
  sxExperienceContentItemList,
  sxExperienceContentItemListItem,
} from '../ExperienceContent/ExperienceContent.styles';
import { ProjectContentProps } from './ProjectContent.models';
import {
  sxProjectContentContainer,
  sxProjectContentItemContainer,
  sxProjectContentItemContentContainer,
  sxProjectContentItemSubTitle,
  sxProjectContentItemTitle,
  sxProjectContentItemTitleContainer,
  sxProjectContentItemTitleContainerMedium,
} from './ProjectContent.styles';

export const ProjectContent = ({ projects }: ProjectContentProps) => {
  const theme = useTheme();
  const isMedium = useMediaQuery(theme.breakpoints.down('md'));
  const isSmall = useMediaQuery(theme.breakpoints.down('sm'));

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
                <DynamicText textId={element.title ?? ''} />
              </Typography>
              <Typography component="div" sx={sxProjectContentItemSubTitle}>
                <DynamicText textId={element.info ?? ''} />
              </Typography>
            </Box>
            <Box sx={sxProjectContentItemContentContainer}>
              {element?.content?.map(
                (contentItem: ItemContent, contentItemIndex) => {
                  if (isContentText(contentItem.content, contentItem.type)) {
                    return (
                      <Typography
                        key={contentItemIndex}
                        component="p"
                        sx={sxExperienceContentItemContent}
                      >
                        <DynamicText textId={contentItem.content ?? ''} />
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
                            <DynamicText textId={listItem ?? ''} />
                          </ListItem>
                        ))}
                      </List>
                    );
                  } else {
                    return <></>;
                  }
                },
              )}
            </Box>
          </Box>
        );
      })}
    </Box>
  );
};
