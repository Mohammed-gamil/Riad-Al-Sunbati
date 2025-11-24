import React, { useEffect, useRef, Suspense, lazy } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useNavigate } from 'react-router-dom';
import { BookOpen, Music, Mic, Award, Star, Calendar, Clock, User } from 'lucide-react';

// Lazy load heavy components
const OudScene = lazy(() => import('../components/OudScene'));
const Biography = lazy(() => import('./Biography'));
const Legacy = lazy(() => import('./Legacy'));
const Singer = lazy(() => import('./Singer'));
const Muse = lazy(() => import('./Muse'));
const Compositions = lazy(() => import('./Compositions'));

const SectionLoader = () => (
  <div className="py-24 flex justify-center items-center bg-slate-950">
    <div className="w-8 h-8 border-2 border-amber-500 border-t-transparent rounded-full animate-spin"></div>
  </div>
);

const Home = () => {
  const { t, currentLang } = useLanguage();
  const heroRef = useRef(null);
  const lastNoteTime = useRef(0);
  const navigate = useNavigate();

  const createFloatingNote = (x, y) => {
    const notes = ['♪', '♫', '♩', '♬', '♭', '♮', '♯'];
    const note = document.createElement('div');
    note.classList.add('music-note');
    note.innerText = notes[Math.floor(Math.random() * notes.length)];

    const offsetX = (Math.random() - 0.5) * 50;
    const offsetY = (Math.random() - 0.5) * 50;

    note.style.left = `${x + offsetX}px`;
    note.style.top = `${y + offsetY}px`;

    const size = Math.floor(Math.random() * 20) + 15;
    const rotation = Math.floor(Math.random() * 360);
    note.style.fontSize = `${size}px`;
    note.style.transform = `rotate(${rotation}deg)`;

    const colors = ['#fbbf24', '#d97706', '#b45309', '#92400e', '#fcd34d'];
    note.style.color = colors[Math.floor(Math.random() * colors.length)];

    document.body.appendChild(note);

    setTimeout(() => {
      note.remove();
    }, 2000);
  };

  useEffect(() => {
    const heroSection = heroRef.current;
    if (!heroSection) return;

    const handleMouseMove = (e) => {
      const now = Date.now();
      if (now - lastNoteTime.current > 100) {
        createFloatingNote(e.clientX, e.clientY);
        lastNoteTime.current = now;
      }
    };

    const handleClick = (e) => {
      for (let i = 0; i < 5; i++) {
        setTimeout(() => createFloatingNote(e.clientX, e.clientY), i * 100);
      }
    };

    heroSection.addEventListener('mousemove', handleMouseMove);
    heroSection.addEventListener('click', handleClick);

    return () => {
      heroSection.removeEventListener('mousemove', handleMouseMove);
      heroSection.removeEventListener('click', handleClick);
    };
  }, []);

  const scrollToSection = (e, id) => {
    e.preventDefault();
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-slate-950 overflow-hidden">
      {/* Hero Section */}
      <section ref={heroRef} id="home" className="relative min-h-[100svh] md:min-h-screen flex items-center justify-center pt-20 pb-10 cursor-pointer overflow-hidden">
        {/* Background Ambience */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-amber-900/20 via-slate-950 to-slate-950 pointer-events-none"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 pointer-events-none"></div>

        {/* 3D Oud Scene - Lazy Loaded - Desktop Only */}
        <div className="hidden md:block pointer-events-none absolute inset-0">
          <Suspense fallback={<div className="w-full h-full" />}>
            <OudScene />
          </Suspense>
        </div>

        <div className="vintage-overlay"></div>

        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-transparent to-slate-950"></div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center pointer-events-auto">
          <h1 className="font-heading text-4xl sm:text-6xl md:text-8xl mb-6 gold-text animate-fade-in tracking-wide drop-shadow-2xl">
            {t('hero.title')}
          </h1>
          <p className="font-arabic text-4xl sm:text-6xl md:text-7xl mb-8 text-amber-500/90 tracking-wider drop-shadow-lg">
            {t('hero.arabicTitle')}
          </p>
          <p className="text-lg sm:text-xl md:text-2xl text-slate-300 mb-12 leading-relaxed max-w-3xl mx-auto font-light tracking-wide drop-shadow-md">
            {t('hero.subtitle')}
          </p>

          {/* Interactive hint */}
          <div className="mb-10 text-amber-500/60 text-sm animate-pulse flex justify-center items-center gap-2">
            <Music size={16} />
            <span>Move your mouse or click to create musical notes</span>
            <Music size={16} />
          </div>

          <div className="flex gap-6 justify-center flex-wrap">
            <a
              href="#biography"
              onClick={(e) => scrollToSection(e, '#biography')}
              className="bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 shadow-[0_0_20px_rgba(217,119,6,0.3)] hover:shadow-[0_0_30px_rgba(217,119,6,0.5)] hover:-translate-y-1"
            >
              {t('hero.learnMore')}
            </a>
            <a
              href="#compositions"
              onClick={(e) => scrollToSection(e, '#compositions')}
              className="px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 border border-amber-500/50 text-amber-500 hover:bg-amber-500/10 hover:border-amber-500 hover:-translate-y-1 backdrop-blur-sm"
            >
              {t('hero.explore')}
            </a>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-amber-500/50">
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
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </section>

      {/* Quick Stats Section */}
      <section className="py-20 bg-slate-900/50 relative border-y border-amber-900/20">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/arabesque.png')] opacity-5 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            {[
              { icon: <Music size={32} />, value: "300+", label: t('hero.stats.compositions') },
              { icon: <Clock size={32} />, value: "60+", label: t('hero.stats.years') },
              { icon: <Calendar size={32} />, value: "1906", label: t('hero.stats.born') },
              { icon: <Star size={32} />, value: "1981", label: t('hero.stats.legacy') }
            ].map((stat, index) => (
              <div key={index} className="group p-8 bg-slate-800/40 rounded-2xl border border-amber-500/10 hover:border-amber-500/30 transition-all duration-500 hover:-translate-y-2 hover:bg-slate-800/60 shadow-lg hover:shadow-amber-900/20">
                <div className="text-amber-600 mb-4 flex justify-center group-hover:text-amber-500 transition-colors group-hover:scale-110 duration-300">{stat.icon}</div>
                <div className="text-4xl font-bold text-slate-100 mb-2 font-heading">{stat.value}</div>
                <div className="text-slate-400 font-medium tracking-wide uppercase text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Sections Preview */}
      <section className="py-24 bg-gradient-to-b from-slate-950 to-slate-900 relative">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-amber-500 text-sm font-bold tracking-widest uppercase mb-2 block">Explore The Legend</span>
            <h2 className="font-heading text-4xl md:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-500 to-amber-200 mb-4">
              {t('hero.discover')}
            </h2>
            <div className="w-24 h-1 bg-amber-600 mx-auto rounded-full opacity-50"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Biography Card */}
            <a
              href="#biography"
              onClick={(e) => scrollToSection(e, '#biography')}
              className="group bg-slate-800/30 p-8 rounded-2xl border border-amber-500/10 hover:border-amber-500/40 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_10px_40px_-10px_rgba(217,119,6,0.1)] relative overflow-hidden"
              aria-label={`Go to ${t('nav.bio')} section`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="text-amber-500 mb-6 bg-amber-900/20 w-16 h-16 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500 border border-amber-500/20">
                <User size={32} />
              </div>
              <h3 className="font-heading text-2xl mb-3 text-slate-100 group-hover:text-amber-400 transition-colors">
                {t('nav.bio')}
              </h3>
              <p className="text-slate-400 leading-relaxed text-sm">
                {t('hero.bioPreview')}
              </p>
            </a>

            {/* Singer Card */}
            <a
              href="#singer"
              onClick={(e) => scrollToSection(e, '#singer')}
              className="group bg-slate-800/30 p-8 rounded-2xl border border-amber-500/10 hover:border-amber-500/40 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_10px_40px_-10px_rgba(217,119,6,0.1)] relative overflow-hidden"
              aria-label={`Go to ${t('nav.singer')} section`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="text-amber-500 mb-6 bg-amber-900/20 w-16 h-16 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500 border border-amber-500/20">
                <Mic size={32} />
              </div>
              <h3 className="font-heading text-2xl mb-3 text-slate-100 group-hover:text-amber-400 transition-colors">
                {t('nav.singer')}
              </h3>
              <p className="text-slate-400 leading-relaxed text-sm">
                {t('hero.singerPreview')}
              </p>
            </a>

            {/* Legacy Card */}
            <a
              href="#legacy"
              onClick={(e) => scrollToSection(e, '#legacy')}
              className="group bg-slate-800/30 p-8 rounded-2xl border border-amber-500/10 hover:border-amber-500/40 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_10px_40px_-10px_rgba(217,119,6,0.1)] relative overflow-hidden"
              aria-label={`Go to ${t('nav.legacy')} section`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="text-amber-500 mb-6 bg-amber-900/20 w-16 h-16 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500 border border-amber-500/20">
                <Award size={32} />
              </div>
              <h3 className="font-heading text-2xl mb-3 text-slate-100 group-hover:text-amber-400 transition-colors">
                {t('nav.legacy')}
              </h3>
              <p className="text-slate-400 leading-relaxed text-sm">
                {t('hero.legacyPreview')}
              </p>
            </a>

            {/* Bibliography Card (New) */}
            <div
              onClick={() => navigate('/bibliography')}
              className="group bg-slate-800/30 p-8 rounded-2xl border border-amber-500/10 hover:border-amber-500/40 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_10px_40px_-10px_rgba(217,119,6,0.1)] relative overflow-hidden cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="text-amber-500 mb-6 bg-amber-900/20 w-16 h-16 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500 border border-amber-500/20">
                <BookOpen size={32} />
              </div>
              <h3 className="font-heading text-2xl mb-3 text-slate-100 group-hover:text-amber-400 transition-colors">
                {t('nav.bibliography')}
              </h3>
              <p className="text-slate-400 leading-relaxed text-sm">
                {t('hero.biblioPreview')}
              </p>
            </div>

          </div>
        </div>
      </section>

      <Suspense fallback={<SectionLoader />}>
        <Biography />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <Singer />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <Muse />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <Legacy />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <Compositions />
      </Suspense>
    </div>
  );
};

export default Home;
