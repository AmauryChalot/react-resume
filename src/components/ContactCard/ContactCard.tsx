import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useMediaQuery, useTheme } from "@mui/material";
import {
  sxContactCardContainer,
  sxContactCardPictureContainer,
  sxContactCardInfoContainer,
  sxContactCardTitle,
  sxContactCardSubtitle,
  sxContactCardBody,
  sxContactCardContainerSmall,
} from "./ContactCard.styles";

export const ContactCard = () => {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      sx={isSmall ? sxContactCardContainerSmall : sxContactCardContainer}
      id={"aboutme"}
    >
      <Box sx={sxContactCardPictureContainer}>
        <img
          style={{ width: "115%", marginTop: "-10px" }}
          src="/images/pp.png"
        />
      </Box>
      <Box sx={sxContactCardInfoContainer}>
        <Typography component="h1" sx={sxContactCardTitle}>
          AMAURY CHALOT
        </Typography>
        <Typography component="h2" sx={sxContactCardSubtitle}>
          Software Engineer
        </Typography>
        <Typography sx={sxContactCardBody}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
          elementum maximus nunc a ultrices. Maecenas laoreet vehicula felis eu
          sollicitudin. Pellentesque sed est rhoncus, semper lorem consectetur,
          suscipit purus. Fusce accumsan tortor nec tortor maximus lacinia.
        </Typography>
      </Box>
    </Box>
  );
};
