import { ItemContent } from "../ExperienceContent/ExperienceContent.models";

export interface ProjectItem {
  title?: string;
  info?: string;
  content?: ItemContent[];
}

export interface ProjectContentProps {
  projects: ProjectItem[];
}
