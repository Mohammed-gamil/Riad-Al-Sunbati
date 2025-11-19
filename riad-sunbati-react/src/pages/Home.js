import React, { useEffect, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';
import OudScene from '../components/OudScene';
import Biography from './Biography';
import Legacy from './Legacy';
import Singer from './Singer';
import Muse from './Muse';
import Compositions from './Compositions';

const Home = () => {
  const { t } = useLanguage();
  const heroRef = useRef(null);
  const lastNoteTime = useRef(0);

  const createFloatingNote = (x, y) => {
    console.log('Creating floating note at:', x, y);
    const notes = ['♪', '♫', '♩', '♬', '♭', '♮', '♯'];
    const note = document.createElement('div');
    note.classList.add('music-note');
    note.innerText = notes[Math.floor(Math.random() * notes.length)];
    
    // Random position offset
    const offsetX = (Math.random() - 0.5) * 50;
    const offsetY = (Math.random() - 0.5) * 50;
    
    note.style.left = `${x + offsetX}px`;
    note.style.top = `${y + offsetY}px`;
    
    // Random size and rotation
    const size = Math.floor(Math.random() * 20) + 15;
    const rotation = Math.floor(Math.random() * 360);
    note.style.fontSize = `${size}px`;
    note.style.transform = `rotate(${rotation}deg)`;
    
    // Random amber/gold colors
    const colors = ['#fbbf24', '#d97706', '#b45309', '#92400e', '#fcd34d'];
    note.style.color = colors[Math.floor(Math.random() * colors.length)];

    document.body.appendChild(note);
    console.log('Note appended to body');

    // Remove after animation
    setTimeout(() => {
      note.remove();
    }, 2000);
  };

  useEffect(() => {
    const heroSection = heroRef.current;
    console.log('Hero section ref:', heroSection);
    if (!heroSection) {
      console.error('Hero section not found!');
      return;
    }

    const handleMouseMove = (e) => {
      const now = Date.now();
      if (now - lastNoteTime.current > 100) {
        createFloatingNote(e.clientX, e.clientY);
        lastNoteTime.current = now;
      }
    };

    const handleClick = (e) => {
      console.log('Hero section clicked!');
      // Burst on click
      for (let i = 0; i < 5; i++) {
        setTimeout(() => createFloatingNote(e.clientX, e.clientY), i * 100);
      }
    };

    console.log('Adding event listeners to hero section');
    heroSection.addEventListener('mousemove', handleMouseMove);
    heroSection.addEventListener('click', handleClick);

    return () => {
      console.log('Cleaning up event listeners');
      heroSection.removeEventListener('mousemove', handleMouseMove);
      heroSection.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section ref={heroRef} id="home" className="relative min-h-[100svh] md:min-h-screen flex items-center justify-center pt-20 pb-10 cursor-pointer">
        {/* 3D Oud Scene */}
        <div className="pointer-events-none">
          <OudScene />
        </div>
        
        <div className="vintage-overlay"></div>
        
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background"></div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center pointer-events-auto">
          <h1 className="font-heading text-3xl sm:text-5xl md:text-7xl mb-4 md:mb-6 gold-text animate-fade-in tracking-wide">
            {t('hero.title')}
          </h1>
          <p className="font-arabic text-3xl sm:text-5xl md:text-6xl mb-6 md:mb-8 text-primary/90 tracking-wider">
            {t('hero.arabicTitle')}
          </p>
          <p className="text-base sm:text-xl md:text-2xl text-muted-foreground mb-8 md:mb-12 leading-relaxed max-w-3xl mx-auto font-light tracking-wide">
            {t('hero.subtitle')}
          </p>
          
          {/* Interactive hint */}
          <div className="mb-8 text-primary/60 text-sm animate-pulse">
            ✨ Move your mouse or click to create musical notes ✨
          </div>
          
          <div className="flex gap-4 md:gap-6 justify-center flex-wrap">
            <a
              href="#biography"
              onClick={(e) => { e.preventDefault(); document.querySelector('#biography')?.scrollIntoView({ behavior: 'smooth' }); }}
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 md:px-8 py-3 md:py-4 rounded-lg font-bold text-base md:text-lg transition-all duration-300 shadow-lg hover:shadow-primary/50 hover:-translate-y-1"
            >
              {t('hero.learnMore')}
            </a>
            <a
              href="#compositions"
              onClick={(e) => { e.preventDefault(); document.querySelector('#compositions')?.scrollIntoView({ behavior: 'smooth' }); }}
              className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-6 md:px-8 py-3 md:py-4 rounded-lg font-bold text-base md:text-lg transition-all duration-300 hover:-translate-y-1"
            >
              {t('hero.explore')}
            </a>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <svg
            className="w-8 h-8 text-primary"
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
      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="p-6 bg-card/50 rounded-xl border border-primary/20 hover:border-primary/50 transition-all">
              <div className="text-4xl font-bold text-primary mb-2">300+</div>
              <div className="text-muted-foreground">{t('hero.stats.compositions')}</div>
            </div>
            <div className="p-6 bg-slate-800/50 rounded-xl border border-amber-700/20 hover:border-amber-700/50 transition-all">
              <div className="text-4xl font-bold text-amber-500 mb-2">60+</div>
              <div className="text-slate-400">{t('hero.stats.years')}</div>
            </div>
            <div className="p-6 bg-slate-800/50 rounded-xl border border-amber-700/20 hover:border-amber-700/50 transition-all">
              <div className="text-4xl font-bold text-amber-500 mb-2">1906</div>
              <div className="text-slate-400">{t('hero.stats.born')}</div>
            </div>
            <div className="p-6 bg-slate-800/50 rounded-xl border border-amber-700/20 hover:border-amber-700/50 transition-all">
              <div className="text-4xl font-bold text-amber-500 mb-2">1981</div>
              <div className="text-slate-400">{t('hero.stats.legacy')}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Sections Preview */}
      <section className="py-20 bg-gradient-to-b from-muted/50 to-background">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="font-heading text-4xl md:text-5xl text-center mb-16 gold-text">
            {t('hero.discover')}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Biography Card */}
            <a
              href="#biography"
              onClick={(e) => { e.preventDefault(); document.querySelector('#biography')?.scrollIntoView({ behavior: 'smooth' }); }}
              className="group bg-slate-800/50 p-8 rounded-xl border border-amber-700/20 hover:border-amber-700/50 transition-all hover:-translate-y-2 hover:shadow-xl hover:shadow-amber-600/10"
            >
              <div className="text-amber-500 mb-4">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="font-heading text-2xl mb-3 text-primary group-hover:text-primary/80">
                {t('nav.bio')}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {t('hero.bioPreview')}
              </p>
            </a>

            {/* Singer Card */}
            <a
              href="#singer"
              onClick={(e) => { e.preventDefault(); document.querySelector('#singer')?.scrollIntoView({ behavior: 'smooth' }); }}
              className="group bg-slate-800/50 p-8 rounded-xl border border-amber-700/20 hover:border-amber-700/50 transition-all hover:-translate-y-2 hover:shadow-xl hover:shadow-amber-600/10"
            >
              <div className="text-amber-500 mb-4">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                </svg>
              </div>
              <h3 className="font-heading text-2xl mb-3 text-amber-400 group-hover:text-amber-300">
                {t('nav.singer')}
              </h3>
              <p className="text-slate-400 leading-relaxed">
                {t('hero.singerPreview')}
              </p>
            </a>

            {/* Legacy Card */}
            <a
              href="#legacy"
              onClick={(e) => { e.preventDefault(); document.querySelector('#legacy')?.scrollIntoView({ behavior: 'smooth' }); }}
              className="group bg-slate-800/50 p-8 rounded-xl border border-amber-700/20 hover:border-amber-700/50 transition-all hover:-translate-y-2 hover:shadow-xl hover:shadow-amber-600/10"
            >
              <div className="text-amber-500 mb-4">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="font-heading text-2xl mb-3 text-amber-400 group-hover:text-amber-300">
                {t('nav.legacy')}
              </h3>
              <p className="text-slate-400 leading-relaxed">
                {t('hero.legacyPreview')}
              </p>
            </a>
          </div>
        </div>
      </section>
      <Biography />
      <Singer />
      <Muse />
      <Legacy />
      <Compositions />
    </div>
  );
};

export default Home;
