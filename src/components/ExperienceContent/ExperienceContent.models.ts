export interface ExperienceItem {
  title?: string;
  subTitle?: string;
  info?: string;
  content?: string;
}

export interface ExperienceContentProps {
  experiences: ExperienceItem[];
}
