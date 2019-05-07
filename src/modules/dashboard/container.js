import React from 'react';
import { Button } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { ErrorContextConsumer } from '../../shared/molecules/error/context';
import DualColumnTemplate from '../../shared/templates/dualColumnTemplate';
import { AuthContext } from '../auth/authContext';
import { APPLICATION_HOME } from '../../config';

const DashboardContainer = () => {
  const authContext = React.useContext(AuthContext);

  return (
    <DualColumnTemplate>
      {{
        col1: <h2>This is Dashboard</h2>,
        col2: (
          <React.Fragment>
            <h2>You are already logged in</h2>
            <NavLink className="btn btn-primary" to={APPLICATION_HOME}>
              Home
            </NavLink>
            <Button onClick={() => authContext.logout()}>Logout</Button>
            <ErrorContextConsumer>
              {props => (
                <Button
                  onClick={() =>
                    props.setError(
                      {
                        type: 'info',
                        message: 'Error Occured',
                        statusCode: 404,
                      },
                      true
                    )
                  }
                >
                  Show Error
                </Button>
              )}
            </ErrorContextConsumer>
          </React.Fragment>
        ),
      }}
    </DualColumnTemplate>
  );
};

export default DashboardContainer;
