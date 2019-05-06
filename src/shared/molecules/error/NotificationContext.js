import React from 'react';

const defaultNotificationContextState = {
  notification: {
    type: '',
    fail: false,
    message: '',
    statusCode: '',
  },
  setNotification: (notification, show) => {
    console.log(notification, show);
  },
};

const NotificationContext = React.createContext(defaultNotificationContextState);

export const NotificationContextProvider = NotificationContext.Provider;
export const NotificationContextConsumer = NotificationContext.Consumer;

export default NotificationContext;
