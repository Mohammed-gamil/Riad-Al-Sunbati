import React, { createContext, useState, useContext, useEffect } from 'react';
import { translations } from '../data/translations';

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const LanguageProvider = ({ children }) => {
  const [currentLang, setCurrentLang] = useState('en');

  useEffect(() => {
    document.documentElement.lang = currentLang;
    document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
    
    if (currentLang === 'ar') {
      document.body.classList.add('font-arabic');
      document.body.classList.remove('font-body');
    } else {
      document.body.classList.remove('font-arabic');
      document.body.classList.add('font-body');
    }
  }, [currentLang]);

  const toggleLanguage = () => {
    setCurrentLang(prev => prev === 'en' ? 'ar' : 'en');
  };

  const t = (key) => {
    return translations[currentLang][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ currentLang, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
