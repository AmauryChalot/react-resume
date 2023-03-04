import React from "react";
import { Card, Typography } from "@mui/material";
import { sxCustomCardContainer } from "./CustomCard.styles";
import { CustomCardProps } from "./CustomCard.models";
import {
  sxCustomCardTitle,
  sxCustomCardTitleHighlighted,
} from "./CustomCard.styles";

export const CustomCard = (props: CustomCardProps) => {
  return (
    <Card sx={sxCustomCardContainer} id={props.id}>
      <Typography
        sx={
          props.highlighted ? sxCustomCardTitleHighlighted : sxCustomCardTitle
        }
      >
        {props.title}
      </Typography>
      <Typography sx={{ marginTop: "24px" }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras elementum
        sit amet quam vitae congue. Morbi vitae odio rutrum, eleifend nulla nec,
        commodo erat. Pellentesque eu lacus at mauris sollicitudin lobortis.
        Mauris id lorem euismod, malesuada ipsum vel, faucibus nulla. Donec
        tincidunt ut tellus ac aliquam. Phasellus blandit non dui non fermentum.
        Praesent eget sodales diam. Aliquam erat volutpat. Sed tempus risus
        turpis. Fusce placerat mauris nec tristique facilisis. Aenean quis
        aliquam nisi, sit amet condimentum dui. Pellentesque habitant morbi
        tristique senectus et netus et malesuada fames ac turpis egestas.
        Maecenas bibendum lacus eu est malesuada, id pharetra est finibus.
        Praesent tincidunt porttitor enim, eu tempor dui facilisis nec. Fusce
        vehicula tempus mattis.
      </Typography>
    </Card>
  );
};
