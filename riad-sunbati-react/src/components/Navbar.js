import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Globe } from 'lucide-react';

const Navbar = () => {
  const { currentLang, toggleLanguage, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
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
      className={`fixed w-full z-50 transition-all duration-500 ${isScrolled
          ? 'bg-slate-950/80 backdrop-blur-xl border-b border-amber-500/10 py-2'
          : 'bg-transparent py-6'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a
            href="/#home"
            onClick={(e) => handleNavClick(e, '/#home')}
            className="group flex items-center gap-3"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-amber-500 blur-lg opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
              <div className="relative bg-gradient-to-br from-amber-500 to-amber-700 p-2.5 rounded-xl text-slate-950 shadow-lg group-hover:scale-105 transition-transform duration-300">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                </svg>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-heading text-xl md:text-2xl text-slate-100 tracking-wide font-bold leading-none group-hover:text-amber-400 transition-colors">
                Riad Al Sunbati
              </span>
              <span className="font-arabic text-sm text-amber-500/80 tracking-widest opacity-80 group-hover:opacity-100 transition-opacity">
                رياض السنباطي
              </span>
            </div>
          </a>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-1 bg-slate-900/50 backdrop-blur-md px-2 py-1.5 rounded-full border border-white/5">
            {navLinks.map((link) => (
              <a
                key={link.to}
                href={link.to}
                onClick={(e) => handleNavClick(e, link.to)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${currentLang === 'ar' ? 'font-arabic text-base' : 'uppercase tracking-wider'
                  } hover:bg-white/10 hover:text-amber-400 text-slate-300`}
              >
                {link.label}
              </a>
            ))}
            <div className="w-px h-6 bg-white/10 mx-2"></div>
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-2 px-4 py-2 rounded-full text-amber-500 hover:bg-amber-500/10 transition-colors font-bold text-sm"
            >
              <Globe size={16} />
              <span>{currentLang === 'ar' ? 'EN' : 'AR'}</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-slate-300 hover:text-amber-500 transition-colors"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <div className={`lg:hidden fixed inset-0 z-40 bg-slate-950/95 backdrop-blur-xl transition-transform duration-500 ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col h-full pt-24 px-6 pb-8">
          <div className="flex flex-col gap-4">
            {navLinks.map((link, index) => (
              <a
                key={link.to}
                href={link.to}
                onClick={(e) => handleNavClick(e, link.to)}
                className="text-2xl font-heading text-slate-300 hover:text-amber-500 transition-colors py-2 border-b border-white/5"
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="mt-auto">
            <button
              onClick={() => {
                toggleLanguage();
                setIsMobileMenuOpen(false);
              }}
              className="flex items-center justify-center gap-3 w-full py-4 bg-slate-900 rounded-xl border border-amber-500/20 text-amber-500 font-bold"
            >
              <Globe size={20} />
              {currentLang === 'ar' ? 'Switch to English' : 'التبديل للعربية'}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
