import React from 'react';
import { NavLink } from 'react-router-dom';

import DualColumnTemplate from '../../shared/templates/dualColumnTemplate';
import { AUTH_PAGE, LOGGEDIN_HOME } from '../../config';
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
            {isLoggedIn ? <NavLink to={LOGGEDIN_HOME}>Dashboard</NavLink> : <NavLink to={AUTH_PAGE}>Login</NavLink>}
          </React.Fragment>
        ),
      }}
    </DualColumnTemplate>
  );
};

export default HomeContainer;
