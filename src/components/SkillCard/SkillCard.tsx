import { useMediaQuery, useTheme } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { DynamicText } from '../DynamicText/DynamicText';
import { SkillCardProps } from './SkillCard.models';
import {
  sxSkillCardContainer,
  sxSkillCardContainerSmall,
  sxSkillCardContainerTitle,
  sxSkillCardItemContainer,
  sxSkillCardItemContent,
  sxSkillCardItemContentText,
  sxSkillCardItemTitle,
} from './SkillCard.styles';

export const SkillCard = (props: SkillCardProps) => {
  const { skills, id } = props;

  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box
      id={id}
      sx={isSmall ? sxSkillCardContainerSmall : sxSkillCardContainer}
    >
      <Typography sx={sxSkillCardContainerTitle}>
        <DynamicText textId={'skills'} />
      </Typography>

      {skills.map((section, sectionIndex) => {
        return (
          <Box sx={sxSkillCardItemContainer} key={sectionIndex}>
            <Typography sx={sxSkillCardItemTitle}>
              <DynamicText textId={section.title} />
            </Typography>
            <Box sx={sxSkillCardItemContent}>
              {section.content.map((skill, skillIndex) => {
                return (
                  <Box key={skillIndex} sx={sxSkillCardItemContentText}>
                    <DynamicText textId={skill} />
                  </Box>
                );
              })}
            </Box>
          </Box>
        );
      })}
    </Box>
  );
};
