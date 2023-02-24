import { useTheme } from "@mui/material";
import Box from "@mui/material/Box";
import { CustomCard } from "../../components/Card/CustomCard";
import { ContactCard } from "../../components/ContactCard/ContactCard";
import { Appbar } from "../Appbar/Appbar";
import { sxAppContainer, sxPageContainer } from "./App.styles";

function App() {
  const theme = useTheme();

  return (
    <Box sx={sxPageContainer}>
      <Appbar />
      <Box sx={sxAppContainer}>
        <ContactCard />
        <CustomCard />
        <CustomCard id={"skills"} />
        <CustomCard />
        <CustomCard />
        <CustomCard />
        <CustomCard />
        <CustomCard id={"contact"} />
        <CustomCard />
        <CustomCard />
        <CustomCard id={"experiences"} />
        <CustomCard />
      </Box>
    </Box>
  );
}

export default App;
