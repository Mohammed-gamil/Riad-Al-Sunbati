import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Card, CardContent } from '../components/ui/card';
import { Star } from 'lucide-react';

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
    <section id="legacy" className="py-24 bg-gradient-to-b from-slate-950 to-amber-950/20 relative min-h-screen pt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold tracking-[0.2em] text-amber-500 uppercase mb-3">
            {t('legacy.subtitle')}
          </h2>
          <h3 className="text-5xl font-heading font-bold text-white mb-6">
            {t('legacy.title')}
          </h3>
          <p className="text-slate-300 text-lg max-w-3xl mx-auto leading-relaxed">
            {t('legacy.desc')}
          </p>
        </div>

        {/* Artists Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {artists.map((artist) => (
            <Card
              key={artist.key}
              className="singer-card bg-slate-800/50 border-amber-700/20 hover:border-amber-700/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-amber-600/10 cursor-pointer group"
            >
              <CardContent className="p-6 text-center">
                <div className="singer-icon mb-4 transition-transform duration-300">
                  <div className="w-16 h-16 mx-auto bg-amber-600/20 rounded-full flex items-center justify-center group-hover:bg-amber-600/30">
                    <Star className="w-8 h-8 text-amber-500 group-hover:text-amber-400" />
                  </div>
                </div>
                <h4 className="font-heading text-lg text-amber-100 group-hover:text-amber-400 transition-colors">
                  {artist.name}
                </h4>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-8 bg-slate-800/30 border border-amber-700/20 rounded-lg">
            <div className="text-5xl font-bold text-amber-500 font-heading mb-2">539</div>
            <div className="text-slate-400 uppercase tracking-wider text-sm">Total Compositions</div>
          </div>
          <div className="text-center p-8 bg-slate-800/30 border border-amber-700/20 rounded-lg">
            <div className="text-5xl font-bold text-amber-500 font-heading mb-2">50+</div>
            <div className="text-slate-400 uppercase tracking-wider text-sm">Years of Excellence</div>
          </div>
          <div className="text-center p-8 bg-slate-800/30 border border-amber-700/20 rounded-lg">
            <div className="text-5xl font-bold text-amber-500 font-heading mb-2">10+</div>
            <div className="text-slate-400 uppercase tracking-wider text-sm">Legendary Artists</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Legacy;
