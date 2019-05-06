import React from 'react';
import { Button } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { NotificationContextConsumer } from '../../shared/molecules/error/NotificationContext';
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
            <NotificationContextConsumer>
              {props => (
                <Button
                  onClick={() =>
                    props.setNotification(
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
            </NotificationContextConsumer>
          </React.Fragment>
        ),
      }}
    </DualColumnTemplate>
  );
};

export default DashboardContainer;
