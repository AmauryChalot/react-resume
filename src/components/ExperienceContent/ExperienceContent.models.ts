export enum ExperienceContentType {
  TEXT = "TEXT",
  LIST = "LIST"
}

export type ExperienceItemTypes = string | string[]

export interface ExperienceItemContent {
  type: ExperienceContentType;
  content: ExperienceItemTypes;
}

export interface ExperienceItem {
  title?: string;
  subTitle?: string;
  info?: string;
  content?: ExperienceItemContent[];
}

export interface ExperienceContentProps {
  experiences: ExperienceItem[];
}
