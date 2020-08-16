import React from 'react';
import { Trans, useTranslation } from 'react-i18next';
import './App.css';

function App() {
  const { t, i18n } = useTranslation(); //i18n hook to convert language

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <div>
      <button onClick={() => changeLanguage('en')}>English</button>
      <button onClick={() => changeLanguage('de')}>German</button>
      <hr />

      <h1>Translation with trans component</h1>
      <Trans i18nKey='description.part1'>
        To get started, edit <code>src/App.js</code> and save to reload.
      </Trans>

      <h1>Translation with i18n hook</h1>
      <div>{t('description.part1')}</div>
      <button>{t('title')}</button>
    </div>
  );
}

export default App;
