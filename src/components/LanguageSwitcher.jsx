import React from 'react';
import { useTranslation } from 'react-i18next';

function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div style={{ margin: '1rem' }}>
      <button onClick={() => changeLanguage('en')}>English</button>
      <button onClick={() => changeLanguage('hi')}>हिन्दी</button>
      <button onClick={() => changeLanguage('kn')}>ಕನ್ನಡ</button>
      <button onClick={() => changeLanguage('fr')}>Français</button>
      <button onClick={() => changeLanguage('ja')}>日本語</button>
      <button onClick={() => changeLanguage('ko')}>한국어</button>


    </div>
  );
}

export default LanguageSwitcher;
