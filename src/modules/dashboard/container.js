import React, { useEffect } from 'react';
import { Button, Row, Col, Spinner } from 'reactstrap';
import { NavLink, withRouter } from 'react-router-dom';

import DualColumnTemplate from '../../shared/templates/dualColumnTemplate';

import ErrorContext from '../../shared/modules/error/context';
import { NotificationContextConsumer } from '../../shared/modules/notification/context';
import { AuthContext } from '../auth/authContext';

import { getCourseList } from './service';
import Logger from '../../shared/modules/logger';
import { APPLICATION_HOME } from '../../config';

const defaultState = {
  courses: [],
  filters: {},
  pageDetails: {
    currentPage: 1,
    pageSize: 20,
  },
  isLoading: false,
};

const DashboardContainer = ({ match }) => {
  const authContext = React.useContext(AuthContext);
  const errorContext = React.useContext(ErrorContext);
  const [state, setState] = React.useState(defaultState);

  // https://reactjs.org/docs/hooks-faq.html#is-it-safe-to-omit-functions-from-the-list-of-dependencies
  useEffect(() => {
    function fetchAllCourses() {
      setState(prevState => ({ ...prevState, isLoading: true }));

      getCourseList({ filters: { ...state.filters, ...state.pageDetails } })
        .then(courses => {
          Logger.info('Courses received', courses);
          setState(prevState => ({
            ...prevState,
            courses: courses.data,
            isLoading: false,
          }));
        })
        .catch(error => {
          setState(prevState => ({ ...prevState, isLoading: false }));
          errorContext.setError(error, true);
        });
    }

    fetchAllCourses();
  }, [match.path, state.filters, state.pageDetails]);

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
                        message: 'Error Occurred',
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
            <Row>
              <Col>
                {state.isLoading ? (
                  <Spinner />
                ) : (
                  <ul>
                    {state.courses.map(course => (
                      <li key={course.id}>
                        <img className="img-thumbnail" src={course.thumbnail} alt={`${course.name}-thumb`} />
                        {course.name}
                      </li>
                    ))}
                  </ul>
                )}
              </Col>
            </Row>
          </React.Fragment>
        ),
      }}
    </DualColumnTemplate>
  );
};

export default withRouter(DashboardContainer);
