import React from 'react';

const defaultErrorContextState = {
  error: {
    fail: false,
    message: '',
    statusCode: '',
  },
  setError: (error, show) => {
    console.log(error, show);
  },
};

const ErrorContext = React.createContext(defaultErrorContextState);

export const ErrorContextProvider = ErrorContext.Provider;
export const ErrorContextConsumer = ErrorContext.Consumer;

export default ErrorContext;
