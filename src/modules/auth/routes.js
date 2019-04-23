import { lazy } from 'react';

const AuthRoutes = [
  {
    Component: lazy(() => import('./container')),
    path: '/account/login',
  },
];

export default AuthRoutes;
