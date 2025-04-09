export interface Project {
  name: string;
  id: string;
  type: string;
  isPublished: boolean;
  thumbnailImage?: string;
}

export const projects: Project[] = [
  {
    name: 'Riddargatan',
    id: 'owc_01',
    type: 'interior design',
    isPublished: true,
    thumbnailImage: '/images/thumbnails/riddargatan-thumbnail.webp',
  },
  {
    name: 'Cultural Winery',
    id: 'ar_01',
    type: 'architecture',
    isPublished: true,
    thumbnailImage: '/images/thumbnails/cultural-winery-thumbnail.webp',
  },
  {
    name: 'Träbyn',
    id: 'esencial_01',
    type: 'architecture',
    isPublished: true,
    thumbnailImage: '/images/thumbnails/trabyn-thumbnail.webp',
  },
  {
    name: 'Hantverkargatan',
    id: 'owc_02',
    type: 'interior design',
    isPublished: true,
    thumbnailImage: '/images/thumbnails/hantverkargatan-thumbnail.webp',
  },
  {
    name: 'Vaxand',
    id: 'wb_01',
    type: 'web development',
    isPublished: true,
    thumbnailImage: '',
  },
  {
    name: 'Camille Daher Website',
    id: 'wd_02',
    type: 'web development',
    isPublished: true,
    thumbnailImage: '',
  },
  {
    name: 'Adrien Rouchet Porfolio',
    id: 'wd_03',
    type: 'web development',
    isPublished: true,
  },
];
