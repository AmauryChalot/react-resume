import { useMediaQuery, useTheme } from "@mui/material";
import Box from "@mui/material/Box";
import { InfoCardProps } from "./InfoCard.models";
import {
  sxInfoCardContainer,
  sxInfoCardContainerSmall,
} from "./InfoCard.styles";

export const InfoCard = (props: InfoCardProps) => {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      sx={isSmall ? sxInfoCardContainerSmall : sxInfoCardContainer}
      id={"contact"}
    ></Box>
  );
};
