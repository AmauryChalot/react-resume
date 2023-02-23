import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material";

export const ContactCard = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: theme.palette.background.paper,
        borderRadius: "10px",
        padding: "1rem",
        width: "100%",
        boxSizing: "border-box",
        gap: "1rem",
      }}
    >
      <Box
        sx={{
          width: "200px",
          height: "250px",
          overflow: "hidden",
          borderRadius: "10px",
          //borderRadius: "9999px",
          //border: "2px solid " + theme.palette.common.white,
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "center",
          flexGrow: 0,
        }}
      >
        <img
          style={{ width: "115%", marginTop: "-10px" }}
          src="/images/pp.png"
        />
      </Box>
      <Box
        sx={{
          flexGrow: 1,
          height: "100%",
          display: "flex",
          alignItems: "center",
          boxSizing: "border-box",
        }}
      >
        <Typography
          component="h1"
          sx={{
            color: theme.palette.text.primary,
            fontSize: theme.typography.h4.fontSize,
            fontWeight: 800,
            fontFamily: theme.typography.fontFamily,
          }}
        >
          AMAURY CHALOT
        </Typography>
      </Box>
    </Box>
  );
};
