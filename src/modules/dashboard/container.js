import React, { useEffect } from 'react';
import { Button } from 'reactstrap';
import { NavLink, withRouter } from 'react-router-dom';
import DualColumnTemplate from '../../shared/templates/dualColumnTemplate';
import { AuthContext } from '../auth/authContext';
import { getCourseList } from './service';
import { APPLICATION_HOME } from '../../config';
import ErrorContext, { ErrorContextConsumer } from '../../shared/molecules/error/context';

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

  function fetchAllCourses() {
    setState({ ...state, isLoading: true });
    getCourseList({ filters: { ...state.filters, ...state.pageDetails } })
      .then(courses => {
        setState({
          ...state,
          courses: courses.data,
          isLoading: false,
        });
      })
      .catch(error => {
        setState({ ...state, isLoading: false });
        errorContext.setError(error, true);
      });
  }

  useEffect(() => {
    fetchAllCourses();
  }, [match.path]);

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
            </ErrorContextConsumer>
          </React.Fragment>
        ),
      }}
    </DualColumnTemplate>
  );
};

export default withRouter(DashboardContainer);
