import * as React from 'react';
import '@testing-library/jest-dom';
import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import App from '../../../App';

test('renders language switcher component and changes the app  language to French', () => {
  render(<App />);

  // using waitFor to ensure app is completely rendered and DOM contains all the components we need to test
  waitFor(
    () => {
      // passes only if language switcher is found in the DOM
      expect(screen.getByTestId('languageSwitcher')).toBeDefined();

      // clicks on the language switcher component to open the dropdown component
      fireEvent.click(screen.getByTestId('languageSwitcher'));

      // passes only if language switcher's option to move to french is found in the DOM'
      expect(screen.getByTestId('fr')).toBeInTheDocument();

      // clicks on the french option form the dropdown
      fireEvent.click(screen.getByTestId('fr'));

      // passes only if French title is found in the DOM'
      expect(screen.getByTestId('title-fr')).toBeInTheDocument();
    },
    { timeout: 1000 }
  );
});
