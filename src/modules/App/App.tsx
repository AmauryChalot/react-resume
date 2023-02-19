import { useTheme } from "@mui/material";
import Box from "@mui/material/Box";
import {CustomCard} from "../../components/Card/CustomCard";
import {sxAppContainer} from "./App.styles";

function App() {
  const theme = useTheme();

  return (
    <div style={{ height: "100vh", overflow: "hidden" }}>
      <Box sx={sxAppContainer}>
          <CustomCard />
      </Box>
    </div>
  );
}

export default App;
