import { useMediaQuery, useTheme } from "@mui/material";
import Box from "@mui/material/Box";
import { CustomCard } from "../../components/Card/CustomCard";
import { ContactCard } from "../../components/ContactCard/ContactCard";
import { LinkCard } from "../../components/LinkCard/LinkCard";
import { Appbar } from "../Appbar/Appbar";
import {
  sxAppContainer,
  sxAppContentContainer,
  sxAppContentContainerSmall,
  sxAppContentLeftContainer,
  sxAppContentRightContainer,
  sxPageContainer, sxPageContainerLarge,
} from "./App.styles";

function App() {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("md"));
  const isLarge = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Box sx={isLarge ? sxPageContainerLarge : sxPageContainer}>
      <Appbar />
      <Box sx={sxAppContainer} maxWidth={isSmall ? "sm" : "xl"}>
        <ContactCard />
        <Box sx={isSmall ? sxAppContentContainerSmall : sxAppContentContainer}>
          <Box sx={sxAppContentLeftContainer}>
            <CustomCard />
            <CustomCard id={"skills"} />
            <CustomCard />
            <CustomCard />
            <CustomCard />
            <CustomCard id={"experiences"} />
          </Box>
          <Box sx={sxAppContentRightContainer}>
            <LinkCard />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default App;
