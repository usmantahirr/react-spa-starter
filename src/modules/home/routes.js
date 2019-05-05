import { lazy } from 'react';

const AuthRoutes = [
  {
    Component: lazy(() => import('./container')),
    path: '/',
  },
];

export default AuthRoutes;
