import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Music } from 'lucide-react';

const Compositions = () => {
  const { t } = useLanguage();

  const compositions = [
    { key: 'ilaiha', title: t('comp.ilaiha.title'), desc: t('comp.ilaiha.desc') },
    { key: 'longa', title: t('comp.longa.title'), desc: t('comp.longa.desc') },
    { key: 'amal', title: t('comp.amal.title'), desc: t('comp.amal.desc') },
    { key: 'liqaa', title: t('comp.liqaa.title'), desc: t('comp.liqaa.desc') },
    { key: 'nasini', title: t('comp.nasini.title'), desc: t('comp.nasini.desc') },
    { key: 'ashwaq', title: t('comp.ashwaq.title'), desc: t('comp.ashwaq.desc') },
  ];

  return (
    <section id="compositions" className="py-24 bg-amber-950 relative border-b border-amber-900/50 min-h-screen pt-32">
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-amber-900/40 via-slate-950 to-slate-950"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold tracking-[0.2em] text-amber-500 uppercase mb-3">
            {t('comp.subtitle')}
          </h2>
          <h3 className="text-5xl font-heading font-bold gold-text mb-6">
            {t('comp.title')}
          </h3>
          <p className="text-slate-300 text-lg max-w-3xl mx-auto leading-relaxed">
            {t('comp.desc')}
          </p>
        </div>

        {/* Compositions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {compositions.map((comp) => (
            <Card
              key={comp.key}
              className="bg-slate-900/80 border-amber-700/30 hover:border-amber-700/60 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-amber-600/10 group cursor-pointer"
            >
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="bg-amber-600/20 p-2 rounded-full group-hover:bg-amber-600/30 transition-colors">
                    <Music className="w-5 h-5 text-amber-500" />
                  </div>
                  <CardTitle className="text-xl font-heading text-amber-400 group-hover:text-amber-300 transition-colors">
                    {comp.title}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-slate-300 leading-relaxed">
                  {comp.desc}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Note */}
        <div className="mt-12 text-center">
          <p className="text-slate-500 text-sm italic">
            {t('comp.note')}
          </p>
        </div>

        {/* Additional Featured Work Section */}
        <div className="mt-20 bg-slate-900/50 border border-amber-800/30 rounded-lg p-8">
          <div className="text-center">
            <h4 className="text-2xl font-heading text-amber-400 mb-4">
              Longa Riad - The Masterpiece
            </h4>
            <p className="text-slate-300 max-w-2xl mx-auto leading-relaxed mb-6">
              Perhaps his most celebrated instrumental work, Longa Riad showcases Sunbati's virtuosic command of the Oud. The piece has become a benchmark for aspiring musicians and a testament to his technical brilliance.
            </p>
            <div className="flex justify-center gap-4">
              <div className="px-4 py-2 bg-amber-900/30 border border-amber-700/50 rounded-full">
                <span className="text-amber-400 text-sm font-semibold">Maqam: Nahawand</span>
              </div>
              <div className="px-4 py-2 bg-amber-900/30 border border-amber-700/50 rounded-full">
                <span className="text-amber-400 text-sm font-semibold">Genre: Longa</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Compositions;
