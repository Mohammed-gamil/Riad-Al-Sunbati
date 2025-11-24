import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const { currentLang, toggleLanguage, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { to: '/#home', label: t('nav.home') },
    { to: '/#biography', label: t('nav.bio') },
    { to: '/#singer', label: t('nav.singer') },
    { to: '/#muse', label: t('nav.muse') },
    { to: '/#legacy', label: t('nav.legacy') },
    { to: '/#compositions', label: t('nav.compositions') },
    { to: '/bibliography', label: t('nav.bibliography') },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);

    if (href.startsWith('/#')) {
      const hash = href.substring(1); // remove '/'
      if (location.pathname !== '/') {
        navigate('/');
        setTimeout(() => {
          const element = document.querySelector(hash);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      } else {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    } else {
      navigate(href);
      window.scrollTo(0, 0);
    }
  };

  return (
    <nav
      className={`fixed w-full z-50 bg-slate-900/80 backdrop-blur-md border-b border-amber-700/30 transition-all duration-300 ${isScrolled ? 'shadow-lg bg-slate-900/95' : ''
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <a href="/#home" onClick={(e) => handleNavClick(e, '/#home')} className="flex-shrink-0 flex items-center gap-3">
            <div className="bg-amber-600 p-2 rounded-full text-slate-900">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"
                />
              </svg>
            </div>
            <div>
              <span className="font-heading text-2xl text-amber-500 tracking-wide font-bold block leading-none">
                Riad Al Sunbati
              </span>
              <span className="font-arabic text-sm text-slate-400 tracking-widest">
                رياض السنباطي
              </span>
            </div>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ms-10 flex items-baseline gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.to}
                  href={link.to}
                  onClick={(e) => handleNavClick(e, link.to)}
                  className={`hover:text-amber-400 transition-colors duration-300 font-medium tracking-widest ${currentLang === 'ar' ? 'text-base' : 'text-sm uppercase'
                    }`}
                >
                  {link.label}
                </a>
              ))}
              <button
                onClick={toggleLanguage}
                className="text-amber-500 hover:text-white transition-colors font-bold text-sm border border-amber-500/50 px-3 py-1 rounded hover:bg-amber-500/10 ml-4"
              >
                {currentLang === 'ar' ? 'EN' : 'AR'}
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-amber-500 hover:text-white focus:outline-none"
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-slate-900 border-b border-amber-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.to}
                href={link.to}
                onClick={(e) => handleNavClick(e, link.to)}
                className="block px-3 py-2 text-base font-medium hover:text-amber-400"
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={() => {
                toggleLanguage();
                setIsMobileMenuOpen(false);
              }}
              className="block w-full text-start px-3 py-2 text-base font-medium text-amber-500 hover:text-white border-t border-amber-800/50 mt-2 pt-2"
            >
              {currentLang === 'ar' ? 'Switch to English' : 'Switch to Arabic'}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
