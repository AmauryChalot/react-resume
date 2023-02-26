import { useMediaQuery, useTheme } from "@mui/material";
import Box from "@mui/material/Box";
import { CustomCard } from "../../components/Card/CustomCard";
import { ContactCard } from "../../components/ContactCard/ContactCard";
import { LinkCard } from "../../components/LinkCard/LinkCard";
import { Appbar } from "../Appbar/Appbar";
import {
  sxAppContainer,
  sxAppContentContainer,
  sxAppContentLeftContainer,
  sxAppContentRightContainer,
  sxPageContainer,
} from "./App.styles";

function App() {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box sx={sxPageContainer}>
      <Appbar />
      <Box sx={sxAppContainer}>
        <ContactCard />
        <Box sx={sxAppContentContainer}>
          <Box sx={sxAppContentLeftContainer}>
            <CustomCard />
            <CustomCard id={"skills"} />
            <CustomCard />
            <CustomCard />
            <CustomCard />
            <CustomCard />
            <CustomCard />
            <CustomCard />
            <CustomCard />
            <CustomCard id={"experiences"} />
            <CustomCard />
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
