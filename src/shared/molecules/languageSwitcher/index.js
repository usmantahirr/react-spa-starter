import React from 'react';

import LanguageContext from '../../modules/language/context';

const LanguageSwitcher = () => {
  return (
    <LanguageContext.Consumer>
      {({ language, switchLanguage }) => (
        <select value={language} onChange={e => switchLanguage(e.target.value)} data-testid="languageSwitcher">
          <option value="en" data-testid="en">
            English
          </option>
          <option value="fr" data-testid="fr">
            French
          </option>
        </select>
      )}
    </LanguageContext.Consumer>
  );
};

export default LanguageSwitcher;
