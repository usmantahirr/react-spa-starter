import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Button } from 'reactstrap';

import AuthContextContainer from './modules/auth/contextContainer';
import ErrorBoundary from './modules/error/ErrorBoundry';

function App() {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <AuthContextContainer>
          <Button color="primary">Change</Button>
        </AuthContextContainer>
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;
