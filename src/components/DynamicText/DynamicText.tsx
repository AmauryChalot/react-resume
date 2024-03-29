import { Fragment, useContext } from 'react';
import { LanguageContext } from '../../context';
import { DynamicTextProps } from './DynamicText.models';

export const DynamicText = (props: DynamicTextProps) => {
  const { textId } = props;

  const context = useContext(LanguageContext);
  return <Fragment>{context.dictionary[textId] || textId}</Fragment>;
};
