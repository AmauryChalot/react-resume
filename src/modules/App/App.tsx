import { useTheme } from "@mui/material";
import Box from "@mui/material/Box";
import { CustomCard } from "../../components/Card/CustomCard";
import { Appbar } from "../Appbar/Appbar";
import { sxAppContainer } from "./App.styles";

function App() {
  const theme = useTheme();

  return (
    <div style={{ height: "200vh", overflow: "hidden" }}>
      <Appbar />
      <Box sx={sxAppContainer}>
        <CustomCard />
      </Box>
    </div>
  );
}

export default App;
