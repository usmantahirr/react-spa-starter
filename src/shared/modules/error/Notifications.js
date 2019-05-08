import React, { createRef } from 'react';
import PropTypes from 'prop-types';

import NotificationSystem from 'react-notification-system';
import { NotificationContextProvider } from './NotificationContext';

class Notifications extends React.Component {
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

  render() {
    const { children } = this.props;
    const { notification } = this.state;

    return (
      <NotificationContextProvider value={{ notification, setNotification: this.setNotification }}>
        <NotificationSystem ref={this.notificationsRef} />
        {children}
      </NotificationContextProvider>
    );
  }
}

Notifications.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Notifications;
