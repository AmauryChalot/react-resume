import React from "react";
import { Card, Typography } from "@mui/material";
import {
  sxCustomCardContainer,
  sxCustomCardContent,
  sxCustomCardContentHighlighted,
} from "./CustomCard.styles";
import { CustomCardProps } from "./CustomCard.models";
import {
  sxCustomCardTitle,
  sxCustomCardTitleHighlighted,
} from "./CustomCard.styles";

export const CustomCard = (props: CustomCardProps) => {
  const myRef = React.useRef<HTMLDivElement | null>(null);
  const [myRefIsVisible, setMyRefIsVisible] = React.useState<boolean>(false);

  React.useEffect(() => {
    myRef.current?.focus();
    const handleScroll = (e: Event) => {
      if (window.scrollY >= 0 && window.scrollY <= window.innerHeight / 64) {
        setMyRefIsVisible(false);
      } else if (
        myRef.current &&
        myRef.current.offsetTop - window.scrollY < window.innerHeight / 1.55
      ) {
        setMyRefIsVisible(true);
      } else {
        setMyRefIsVisible(false);
      }
    };
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [window.scrollY]);

  return (
    <Card sx={sxCustomCardContainer} id={props.id} ref={myRef}>
      <Typography
        sx={myRefIsVisible ? sxCustomCardTitleHighlighted : sxCustomCardTitle}
      >
        {props.title}
      </Typography>
      <Typography
        sx={
          myRefIsVisible ? sxCustomCardContentHighlighted : sxCustomCardContent
        }
      >
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
