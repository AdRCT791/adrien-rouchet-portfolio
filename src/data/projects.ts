export interface Project {
  name: string;
  id: string;
  type: string;
  isPublished: boolean;
}

export const projects: Project[] = [
  {
    name: 'Riddargatan',
    id: 'owc_01',
    type: 'interior design',
    isPublished: true,
  },
  {
    name: 'Hantverkargatan',
    id: 'owc_02',
    type: 'interior design',
    isPublished: true,
  },
  { name: 'Vaxand', id: 'wb_01', type: 'web development', isPublished: true },
  {
    name: 'Camille Daher Website',
    id: 'wd_02',
    type: 'web development',
    isPublished: true,
  },
  {
    name: 'Adrien Rouchet Porfolio',
    id: 'wd_03',
    type: 'web development',
    isPublished: true,
  },
];
