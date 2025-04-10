export interface BaseItem {
  id: string;
  name: string;
  isPublished: boolean;
}

export interface Experience extends BaseItem {
  yearStart?: Date;
  yearEnd: Date | 'present';
}

export enum ProjectType {
  INTERIOR_DESIGN = 'interior design',
  ARCHITECTURE = 'architecture',
  WEB_DEV = 'web development',
}

export interface Project extends BaseItem {
  type: ProjectType;
  thumbnailImage?: string;
}
