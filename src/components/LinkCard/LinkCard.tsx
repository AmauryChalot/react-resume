import Box from "@mui/material/Box";
import React from "react";
import {
  sxLinkCardContainer,
  sxLinkCardContainerSmall,
  sxLinkCardItemContainer,
  sxLinkCardItemTypography,
  sxLinkCardTitle,
} from "./LinkCard.styles";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import Typography from "@mui/material/Typography";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { useMediaQuery, useTheme } from "@mui/material";

export const LinkCard = () => {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      sx={isSmall ? sxLinkCardContainerSmall : sxLinkCardContainer}
      id={"contact"}
    >
      <Typography sx={sxLinkCardTitle}>Contact</Typography>
      <Box sx={sxLinkCardItemContainer}>
        <PhoneIcon color="primary" />
        <Typography sx={sxLinkCardItemTypography}>+33 6 52 06 44 25</Typography>
      </Box>
      <Box sx={sxLinkCardItemContainer}>
        <EmailIcon color="primary" />
        <Typography sx={sxLinkCardItemTypography}>
          amaurychalot@gmail.com
        </Typography>
      </Box>
      <Box sx={sxLinkCardItemContainer}>
        <LinkedInIcon color="primary" />
        <Typography sx={sxLinkCardItemTypography}>
          linkedin.com/in/amaury-chalot-6519b319b
        </Typography>
      </Box>
      <Box sx={sxLinkCardItemContainer}>
        <GitHubIcon color="primary" />
        <Typography sx={sxLinkCardItemTypography}>
          github.com/AmauryChalot
        </Typography>
      </Box>
      <Box sx={sxLinkCardItemContainer}>
        <LanguageOutlinedIcon color="primary" />
        <Typography sx={sxLinkCardItemTypography}>amaurychalot.dev</Typography>
      </Box>
      <Box sx={sxLinkCardItemContainer}>
        <LocationOnIcon color="primary" />
        <Typography sx={sxLinkCardItemTypography}>Paris, France</Typography>
      </Box>
    </Box>
  );
};
