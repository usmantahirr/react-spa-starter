import React from 'react';

import LanguageContext from '../../../modules/language/context';

const LanguageSwitcher = () => {
  return (
    <LanguageContext.Consumer>
      {({ language, switchLanguage }) => (
        <select value={language} onChange={() => switchLanguage()}>
          <option value="en">English</option>
          <option value="fr">French</option>
        </select>
      )}
    </LanguageContext.Consumer>
  );
};

export default LanguageSwitcher;
