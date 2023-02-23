import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import { useTheme } from "@mui/material";

export const ContactCard = () => {
  const theme = useTheme();

  return (
    <Card
      sx={{
        width: "100%",
        padding: "1rem",
      }}
    >
      <Box
        sx={{
          width: "200px",
          height: "200px",
          overflow: "hidden",
          //borderRadius: "10px",
          borderRadius: "9999px",
          border: "2px solid " + theme.palette.common.white,
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "center",
        }}
      >
        <img
          style={{ width: "115%", marginTop: "-10px" }}
          src="/images/pp.png"
        />
      </Box>
    </Card>
  );
};
