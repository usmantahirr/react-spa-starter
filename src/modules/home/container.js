import React from 'react';
import { NavLink } from 'react-router-dom';

import DualColumnTemplate from '../../shared/templates/dualColumnTemplate';
import { AUTH_PAGE, LOGGED_IN_HOME } from '../../config';
import { AuthContext } from '../auth/authContext';

const HomeContainer = () => {
  const authContext = React.useContext(AuthContext);
  const isLoggedIn = authContext.checkAuthentication();

  return (
    <DualColumnTemplate>
      {{
        col1: <h2>This is Home</h2>,
        col2: (
          <React.Fragment>
            <p>You might want to login</p>
            {isLoggedIn ? (
              <NavLink to={LOGGED_IN_HOME}>Dashboard</NavLink>
            ) : (
              <NavLink to={AUTH_PAGE} data-testid="login-btn">
                Login
              </NavLink>
            )}
          </React.Fragment>
        ),
      }}
    </DualColumnTemplate>
  );
};

export default HomeContainer;
