import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { Mail, MapPin, Heart } from 'lucide-react';

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 py-16 relative overflow-hidden border-t border-amber-900/20">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_var(--tw-gradient-stops))] from-amber-900/10 via-slate-950 to-slate-950 pointer-events-none"></div>
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* About Section */}
          <div className="space-y-6">
            <h3 className="text-2xl font-heading font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-500">
              {t('footer.about')}
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed font-light">
              {t('footer.aboutText')}
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-2xl font-heading font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-500">
              {t('footer.quickLinks')}
            </h3>
            <ul className="grid grid-cols-2 gap-3">
              {[
                { to: "/", label: t('nav.home') },
                { to: "/biography", label: t('nav.bio') },
                { to: "/singer", label: t('nav.singer') },
                { to: "/muse", label: t('nav.muse') },
                { to: "/legacy", label: t('nav.legacy') },
                { to: "/compositions", label: t('nav.compositions') },
                { to: "/bibliography", label: t('nav.bibliography') },
              ].map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.to}
                    className="text-slate-400 hover:text-amber-400 text-sm transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-amber-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-2xl font-heading font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-500">
              {t('footer.contact')}
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3 text-slate-400 group">
                <div className="p-2 bg-slate-900 rounded-lg border border-amber-500/10 group-hover:border-amber-500/30 transition-colors">
                  <Mail size={16} className="text-amber-500" />
                </div>
                <p className="text-sm mt-1">{t('footer.email')}</p>
              </div>
              <div className="flex items-start gap-3 text-slate-400 group">
                <div className="p-2 bg-slate-900 rounded-lg border border-amber-500/10 group-hover:border-amber-500/30 transition-colors">
                  <MapPin size={16} className="text-amber-500" />
                </div>
                <p className="text-sm mt-1">{t('footer.location')}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-amber-900/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            {t('footer.rights')} © {currentYear}
          </p>
          <div className="flex items-center gap-2 text-slate-600 text-xs">
            <span>{t('footer.tribute')}</span>
            <Heart size={12} className="text-red-500/50 fill-red-500/20 animate-pulse" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
