import { useTheme } from "@mui/material";
import Container from "@mui/material/Container";

function App() {
  const theme = useTheme();

  return (
    <div style={{ height: "100vh", overflow: "hidden" }}>
      <Container maxWidth={false} sx={{ overflow: "overlay" }}></Container>
    </div>
  );
}

export default App;
