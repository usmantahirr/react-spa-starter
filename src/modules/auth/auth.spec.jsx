import * as React from 'react';
import '@testing-library/jest-dom';
import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import App from '../../App';

test('tests if user was logged in on pressing login button', () => {
  render(<App />);
  waitFor(
    () => {
      // clicks on the language switcher component to open the dropdown component
      fireEvent.click(screen.getByTestId('login-btn'));

      const emailInput = screen.getByLabelText('email-input');
      const passwordInput = screen.getByLabelText('password-input');

      fireEvent.change(emailInput, { target: { value: 'ghazanfar@systems.io' } });
      fireEvent.change(passwordInput, { target: { value: '123' } });
      fireEvent.click(screen.getByTestId('login-button'));
      expect(screen.getByTestId('logout-btn')).toBeInTheDocument();
    },
    { timeout: 1000 }
  );
});
