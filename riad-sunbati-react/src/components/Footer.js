import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 py-12 border-t border-amber-700/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="gold-text text-xl font-heading mb-4">{t('footer.about')}</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              {t('footer.aboutText')}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="gold-text text-xl font-heading mb-4">{t('footer.quickLinks')}</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-slate-400 hover:text-amber-400 text-sm transition-colors">
                  {t('nav.home')}
                </Link>
              </li>
              <li>
                <Link to="/biography" className="text-slate-400 hover:text-amber-400 text-sm transition-colors">
                  {t('nav.bio')}
                </Link>
              </li>
              <li>
                <Link to="/singer" className="text-slate-400 hover:text-amber-400 text-sm transition-colors">
                  {t('nav.singer')}
                </Link>
              </li>
              <li>
                <Link to="/muse" className="text-slate-400 hover:text-amber-400 text-sm transition-colors">
                  {t('nav.muse')}
                </Link>
              </li>
              <li>
                <Link to="/legacy" className="text-slate-400 hover:text-amber-400 text-sm transition-colors">
                  {t('nav.legacy')}
                </Link>
              </li>
              <li>
                <Link to="/compositions" className="text-slate-400 hover:text-amber-400 text-sm transition-colors">
                  {t('nav.compositions')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="gold-text text-xl font-heading mb-4">{t('footer.contact')}</h3>
            <div className="text-slate-400 text-sm space-y-2">
              <p>{t('footer.email')}</p>
              <p>{t('footer.location')}</p>
            </div>
          </div>
        </div>

        <div className="border-t border-amber-700/20 mt-8 pt-8 text-center">
          <p className="text-slate-500 text-sm">
            {t('footer.rights')} © {currentYear}
          </p>
          <p className="text-slate-600 text-xs mt-2">
            {t('footer.tribute')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
