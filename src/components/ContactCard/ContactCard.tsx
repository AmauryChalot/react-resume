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
import { ContactCardProps } from "./ContactCard.models";

export const ContactCard = (props: ContactCardProps) => {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("md"));

  const [scrolledSections, setScrolledSections] = props.scrolledSectionsState;

  const myRef = React.useRef<HTMLDivElement | null>(null);
  const [myRefIsVisible, setMyRefIsVisible] = React.useState<boolean>(false);

  React.useEffect(() => {
    myRef.current?.focus();
    const handleScroll = (e: Event) => {
      if (
        myRef.current &&
        myRef.current.offsetTop < window.scrollY + window.innerHeight / 3
      ) {
        setScrolledSections(props.index);
        setMyRefIsVisible(true);
      } else {
        setMyRefIsVisible(false);
      }
    };
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [window.scrollY]);

  return (
    <Box
      sx={isSmall ? sxContactCardContainerSmall : sxContactCardContainer}
      id={"aboutme"}
      ref={myRef}
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
        {/* <Divider sx={sxContactCardDivider} />
        <Box sx={sxContactCardLinkContainer}>
          <Box>
            <GitHubIcon />
            github.com/AmauryChalot
          </Box>
          <Box>
            <LinkedInIcon />
            linkedin.com/in/amaury-chalot-6519b319b
          </Box>
        </Box> */}
      </Box>
    </Box>
  );
};
