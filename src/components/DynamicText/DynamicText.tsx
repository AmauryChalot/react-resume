import { useContext, Fragment } from "react";
import { DynamicTextProps } from "./DynamicText.models";
import { LanguageContext } from "../../context";

export const DynamicText = ({ textId }: DynamicTextProps) => {
  const context = useContext(LanguageContext);
  return <Fragment>{context.dictionary[textId] || textId}</Fragment>;
};
