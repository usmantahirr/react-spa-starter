import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import AuthContextContainer from './modules/auth/contextContainer';
import ErrorBoundary from './shared/modules/error/ErrorBoundary';
import Notification from './shared/modules/notification';
import Routes from './routes';

function App() {
  return (
    <Notification>
      <ErrorBoundary>
        <BrowserRouter>
          <AuthContextContainer>
            <Routes />
          </AuthContextContainer>
        </BrowserRouter>
      </ErrorBoundary>
    </Notification>
  );
}

export default App;
