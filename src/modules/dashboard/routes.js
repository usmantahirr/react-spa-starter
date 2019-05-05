import { lazy } from 'react';

const AuthRoutes = [
  {
    Component: lazy(() => import('./container')),
    path: '/dashboard',
  },
];

export default AuthRoutes;
