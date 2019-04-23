import React, { Suspense, useContext } from 'react';
import { Redirect, Route, Switch } from 'react-router';
import { NavLink } from 'react-router-dom';

import { AuthContext } from './modules/auth/authContext';
import AuthRoutes from './modules/auth/routes';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const authContext = useContext(AuthContext);
  return (
    <Route
      {...rest}
      exact
      render={props =>
        authContext.checkAuthentication() ? <Component {...props} /> : <Redirect to="/account/login" />
      }
    />
  );
};

const renderRouteFromList = isPrivate => (item, i) => {
  const { Component } = item;
  if (isPrivate) {
    return <PrivateRoute exact key={i} path={item.path} component={Component} />;
  }
  return <Route exact key={i} path={item.path} component={Component} />;
};

const Routes = () => (
  <Suspense fallback="loading">
    <Switch>
      {AuthRoutes.map(renderRouteFromList())}
      <PrivateRoute exact path="/" component={() => <NavLink to="/account/login">Login</NavLink>} />
    </Switch>
  </Suspense>
);

export default Routes;
