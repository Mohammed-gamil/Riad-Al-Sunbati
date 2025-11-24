import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Card, CardContent } from '../components/ui/card';
import { Star, Award, Users, Music } from 'lucide-react';

const Legacy = () => {
  const { t } = useLanguage();

  const artists = [
    { name: t('legacy.asmahan'), key: 'asmahan' },
    { name: t('legacy.laila'), key: 'laila' },
    { name: t('legacy.warda'), key: 'warda' },
    { name: t('legacy.halim'), key: 'halim' },
    { name: t('legacy.fayza'), key: 'fayza' },
    { name: t('legacy.najat'), key: 'najat' },
    { name: t('legacy.sabah'), key: 'sabah' },
    { name: t('legacy.huda'), key: 'huda' },
    { name: t('legacy.souad'), key: 'souad' },
    { name: t('legacy.saleh'), key: 'saleh' },
  ];

  return (
    <section id="legacy" className="relative py-32 bg-slate-950 overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-amber-900/20 via-slate-950 to-slate-950 pointer-events-none"></div>
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 text-amber-500 bg-amber-900/10 px-4 py-1.5 rounded-full border border-amber-700/20 backdrop-blur-sm mb-6">
            <Award size={14} className="fill-amber-500" />
            <span className="text-xs font-bold tracking-[0.2em] uppercase">
              {t('legacy.subtitle')}
            </span>
          </div>

          <h2 className="text-5xl md:text-7xl font-heading font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-100 via-amber-400 to-amber-100 mb-6 drop-shadow-2xl">
            {t('legacy.title')}
          </h2>
          <p className="text-slate-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed font-light">
            {t('legacy.desc')}
          </p>
        </div>

        {/* Artists Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {artists.map((artist, index) => (
            <div key={artist.key} className="group relative perspective-1000">
              <div className="absolute -inset-0.5 bg-gradient-to-b from-amber-500/20 to-transparent rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
              <Card
                className="h-full bg-slate-900/80 backdrop-blur-sm border-amber-500/10 hover:border-amber-500/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-amber-900/10 cursor-pointer relative overflow-hidden"
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-b from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardContent className="p-6 text-center relative z-10">
                  <div className="mb-4 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12">
                    <div className="w-16 h-16 mx-auto bg-slate-950 rounded-full flex items-center justify-center border border-amber-500/20 group-hover:border-amber-500/50 shadow-lg">
                      <Star className="w-8 h-8 text-amber-500/50 group-hover:text-amber-400 transition-colors" />
                    </div>
                  </div>
                  <h3 className="font-heading text-lg text-slate-300 group-hover:text-amber-400 transition-colors">
                    {artist.name}
                  </h3>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: <Music size={32} />, value: "539", label: "Total Compositions" },
            { icon: <Award size={32} />, value: "50+", label: "Years of Excellence" },
            { icon: <Users size={32} />, value: "10+", label: "Legendary Artists" }
          ].map((stat, index) => (
            <div key={index} className="group relative p-8 bg-slate-900/50 border border-amber-500/10 rounded-2xl hover:bg-slate-900/80 transition-all duration-500 hover:-translate-y-1">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"></div>
              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="text-amber-500 mb-4 opacity-50 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500">
                  {stat.icon}
                </div>
                <div className="text-5xl font-bold text-slate-100 font-heading mb-2 group-hover:text-amber-400 transition-colors">
                  {stat.value}
                </div>
                <div className="text-slate-400 uppercase tracking-wider text-sm font-medium">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Legacy;
