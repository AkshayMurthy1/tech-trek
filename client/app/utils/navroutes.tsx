export interface NavLink {
  name: string;
  route: string;
}

export const Navlinks: NavLink[] = [
  {
    name: 'Home',
    route: '/',
  },
  {
    name: 'Marketplace',
    route: '/marketplace',
  },
  {
    name: 'Forum',
    route: '/forum',
  },
  {
    name: 'Ventures',
    route: '/ventures',
  },
  {
    name: 'News',
    route: '/news',
  },
 
];
