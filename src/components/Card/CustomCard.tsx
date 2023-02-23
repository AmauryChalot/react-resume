import React from "react";
import { Card } from "@mui/material";
import { sxCustomCardContainer } from "./CustomCard.styles";

export const CustomCard = () => {
  return (
    <Card sx={sxCustomCardContainer}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras elementum
      sit amet quam vitae congue. Morbi vitae odio rutrum, eleifend nulla nec,
      commodo erat. Pellentesque eu lacus at mauris sollicitudin lobortis.
      Mauris id lorem euismod, malesuada ipsum vel, faucibus nulla. Donec
      tincidunt ut tellus ac aliquam. Phasellus blandit non dui non fermentum.
      Praesent eget sodales diam. Aliquam erat volutpat. Sed tempus risus
      turpis. Fusce placerat mauris nec tristique facilisis. Aenean quis aliquam
      nisi, sit amet condimentum dui. Pellentesque habitant morbi tristique
      senectus et netus et malesuada fames ac turpis egestas. Maecenas bibendum
      lacus eu est malesuada, id pharetra est finibus. Praesent tincidunt
      porttitor enim, eu tempor dui facilisis nec. Fusce vehicula tempus mattis.
    </Card>
  );
};
