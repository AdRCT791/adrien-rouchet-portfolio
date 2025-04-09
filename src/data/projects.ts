import { Project } from '../types/baseTypes';
import { ProjectType } from '../types/baseTypes';

export const projects: Project[] = [
  {
    name: 'Riddargatan',
    id: 'owc_01',
    type: ProjectType.INTERIOR_DESIGN,
    isPublished: true,
    thumbnailImage: '/images/thumbnails/riddargatan-thumbnail.webp',
  },
  {
    name: 'Cultural Winery',
    id: 'ar_01',
    type: ProjectType.ARCHITECTURE,
    isPublished: true,
    thumbnailImage: '/images/thumbnails/cultural-winery-thumbnail.webp',
  },
  {
    name: 'Träbyn',
    id: 'esencial_01',
    type: ProjectType.ARCHITECTURE,
    isPublished: true,
    thumbnailImage: '/images/thumbnails/trabyn-thumbnail.webp',
  },
  {
    name: 'Hantverkargatan',
    id: 'owc_02',
    type: ProjectType.INTERIOR_DESIGN,
    isPublished: true,
    thumbnailImage: '/images/thumbnails/hantverkargatan-thumbnail.webp',
  },
  {
    name: 'Vaxand',
    id: 'wb_01',
    type: ProjectType.WEB_DEV,
    isPublished: true,
    thumbnailImage: '',
  },
  {
    name: 'Camille Daher Website',
    id: 'wd_02',
    type: ProjectType.WEB_DEV,
    isPublished: true,
    thumbnailImage: '',
  },
  {
    name: 'Adrien Rouchet Porfolio',
    id: 'wd_03',
    type: ProjectType.WEB_DEV,
    isPublished: true,
  },
];
