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
    name: 'About',
    route: '/about',
  },
  {
    name: 'Forum',
    route: '/forum',
  },
  {
    name: 'Services',
    route: '/Services',
  },
];
