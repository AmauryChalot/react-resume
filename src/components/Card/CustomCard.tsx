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
  const [scrolledSections, setScrolledSections] = props.scrolledSectionsState;

  const myRef = React.useRef<HTMLDivElement | null>(null);
  const [myRefIsVisible, setMyRefIsVisible] = React.useState<boolean>(false);

  React.useEffect(() => {
    myRef.current?.focus();
    const handleScroll = (e: Event) => {
      if (window.scrollY >= 0 && window.scrollY <= window.innerHeight / 64) {
        setMyRefIsVisible(false);
      } else if (
        myRef.current &&
        myRef.current.offsetTop < window.scrollY + window.innerHeight / 3
      ) {
        setScrolledSections(props.index);
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
        {props.content}
      </Typography>
    </Card>
  );
};
