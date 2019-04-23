import React, { useState } from 'react';
import { withRouter } from 'react-router';

import { AuthContextProvider } from './authContext';

const AuthContextContainer = ({ history, children }) => {
  const [state, setState] = useState({
    isAuthenticated: false,
  });

  const authenticate = (token, user) => {
    localStorage.setItem('user', user);
    localStorage.setItem('token', token);
    setState({ isAuthenticated: true });
    history.push('/');
  };

  const logout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    setState({ isAuthenticated: false });
    history.push('/account/login');
  };

  const checkAuthentication = () => !!localStorage.getItem('user') && !!localStorage.getItem('token');

  return (
    <AuthContextProvider value={{ isAuthenticated: state.isAuthenticated, authenticate, logout, checkAuthentication }}>
      {children}
    </AuthContextProvider>
  );
};

export default withRouter(AuthContextContainer);
