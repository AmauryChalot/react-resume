import { useMediaQuery, useTheme } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {
  sxSkillCardContainerSmall,
  sxSkillCardContainer,
  sxSkillCardContainerTitle,
  sxSkillCardItemContainer,
  sxSkillCardItemTitle,
  sxSkillCardItemContent,
  sxSkillCardItemContentText,
} from "./SkillCard.styles";
import React from "react";
import { DynamicText } from "../DynamicText/DynamicText";
import { SkillCardProps } from "./SkillCard.models";

export const SkillCard = ({ skills }: SkillCardProps) => {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      id={"skills"}
      sx={isSmall ? sxSkillCardContainerSmall : sxSkillCardContainer}
    >
      <Typography sx={sxSkillCardContainerTitle}>
        <DynamicText textId={"skills"} />
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
