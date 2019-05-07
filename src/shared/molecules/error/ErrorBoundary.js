import React from 'react';
import PropTypes from 'prop-types';

import NotificationContext from './NotificationContext';
import { ErrorContextProvider } from './context';

class ErrorBoundary extends React.Component {
  static getDerivedStateFromError(error) {
    // eslint-disable-next-line no-console
    console.log('Derived Error', error);
    return { applicationError: true };
  }

  static contextType = NotificationContext;

  constructor(props) {
    super(props);

    this.setError = this.setError.bind(this);

    this.state = {
      error: {
        fail: false,
        message: '',
        statusCode: '',
      },
      applicationError: false,
    };
  }

  setError(error, show) {
    if (show) {
      // eslint-disable-next-line react/destructuring-assignment
      this.context.setNotification(error, show);
    }
    this.setState({ error });
  }

  componentDidCatch(error, info) {
    // You can also log the error to an error reporting service
    // eslint-disable-next-line no-console
    console.log('CDC', error, info);
  }

  render() {
    const { children } = this.props;
    const { error, applicationError } = this.state;

    if (applicationError) {
      return <h1>Something went wrong.</h1>;
    }

    return <ErrorContextProvider value={{ error, setError: this.setError }}>{children}</ErrorContextProvider>;
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ErrorBoundary;
