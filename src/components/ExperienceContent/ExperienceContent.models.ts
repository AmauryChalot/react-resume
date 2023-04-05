export enum ContentType {
  TEXT = "TEXT",
  LIST = "LIST",
}

export type ItemTypes = string | string[];

export interface ItemContent {
  type: ContentType;
  content: ItemTypes;
}

export interface ExperienceItem {
  title?: string;
  subTitle?: string;
  info?: string;
  content?: ItemContent[];
}

export interface ExperienceContentProps {
  experiences: ExperienceItem[];
}
