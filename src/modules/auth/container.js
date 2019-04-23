import React, { useContext } from 'react';
import { withRouter } from 'react-router-dom';

import { AuthContext } from './authContext';
import LoginPage from './loginPage';

const AuthContainer = ({ history }) => {
  const authContext = useContext(AuthContext);

  if (authContext.checkAuthentication()) {
    history.push('/');
  }

  const handleSubmit = (email, password) => e => {
    e.preventDefault();
    if (email && password) {
      authContext.authenticate('token', 'user');
    }
  };
  return <LoginPage handleSubmit={handleSubmit} />;
};

export default withRouter(AuthContainer);
