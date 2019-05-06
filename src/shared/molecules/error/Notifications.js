import React, { createRef } from 'react';
import PropTypes from 'prop-types';

import NotificationSystem from 'react-notification-system';
import { NotificationContextProvider } from './NotificationContext';

class ErrorBoundary extends React.Component {
  static getDerivedStateFromError(error) {
    // eslint-disable-next-line no-console
    console.log('Derived Error', error);
    return { applicationError: true };
  }

  notificationsRef = createRef();

  constructor(props) {
    super(props);

    this.setNotification = this.setNotification.bind(this);

    this.state = {
      notification: {
        type: '',
        fail: false,
        message: '',
        statusCode: '',
      },
      applicationError: false,
    };
  }

  setNotification(notification, show) {
    if (show && this.notificationsRef && this.notificationsRef.current) {
      this.notificationsRef.current.addNotification({
        level: notification.type,
        message: (
          <div>
            <b>{notification.statusCode}: </b>
            {notification.message}
          </div>
        ),
        position: 'tc',
      });
    }
    this.setState({ notification });
  }

  componentDidCatch(error, info) {
    // You can also log the error to an error reporting service
    // eslint-disable-next-line no-console
    console.log('CDC', error, info);
  }

  render() {
    const { children } = this.props;
    const { notification, applicationError } = this.state;

    if (applicationError) {
      return <h1>Something went wrong.</h1>;
    }

    return (
      <NotificationContextProvider value={{ notification, setNotification: this.setNotification }}>
        <NotificationSystem ref={this.notificationsRef} />
        {children}
      </NotificationContextProvider>
    );
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ErrorBoundary;
