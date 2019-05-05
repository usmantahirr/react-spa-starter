import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import AuthContextContainer from './modules/auth/contextContainer';
import ErrorBoundary from './shared/molecules/error/ErrorBoundary';
import Routes from './routes';

function App() {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <AuthContextContainer>
          <Routes />
        </AuthContextContainer>
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;
