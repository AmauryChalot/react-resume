import { Card, Typography } from "@mui/material";
import React from "react";
import { CustomCardProps } from "./CustomCard.models";
import {
  sxCustomCardContainer,
  sxCustomCardContent,
  sxCustomCardContentHighlighted,
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
      if (
        props.containerRef?.current &&
        props.containerRef.current?.scrollTop >= 0 &&
        props.containerRef.current?.scrollTop <=
          props.containerRef.current?.scrollHeight / 64
      ) {
        setMyRefIsVisible(false);
      } else if (
        props.containerRef?.current &&
        myRef.current &&
        myRef.current.offsetTop <
          props.containerRef.current?.scrollTop +
            props.containerRef.current?.scrollHeight / 3
      ) {
        setScrolledSections(props.index);
        setMyRefIsVisible(true);
      } else {
        setMyRefIsVisible(false);
      }
    };
    if (props.containerRef?.current)
      props.containerRef.current.addEventListener("scroll", handleScroll);
    return () => {
      if (props.containerRef?.current)
        props.containerRef.current.removeEventListener("scroll", handleScroll);
    };
  }, [props.containerRef]);

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
