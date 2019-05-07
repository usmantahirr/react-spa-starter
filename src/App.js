import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import AuthContextContainer from './modules/auth/contextContainer';
import ErrorBoundary from './shared/molecules/error/ErrorBoundary';
import Notifications from './shared/molecules/error/Notifications';
import Routes from './routes';

function App() {
  return (
    <Notifications>
      <ErrorBoundary>
        <BrowserRouter>
          <AuthContextContainer>
            <Routes />
          </AuthContextContainer>
        </BrowserRouter>
      </ErrorBoundary>
    </Notifications>
  );
}

export default App;
