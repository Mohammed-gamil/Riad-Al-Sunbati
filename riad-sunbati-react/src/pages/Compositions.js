import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Music, PlayCircle, Disc } from 'lucide-react';

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
    <section id="compositions" className="relative py-32 bg-slate-950 overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_var(--tw-gradient-stops))] from-amber-900/20 via-slate-950 to-slate-950 pointer-events-none"></div>
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/arabesque.png')] opacity-5 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 text-amber-500 bg-amber-900/10 px-4 py-1.5 rounded-full border border-amber-700/20 backdrop-blur-sm mb-6">
            <Music size={14} className="fill-amber-500" />
            <span className="text-xs font-bold tracking-[0.2em] uppercase">
              {t('comp.subtitle')}
            </span>
          </div>

          <h2 className="text-5xl md:text-7xl font-heading font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-100 via-amber-400 to-amber-100 mb-6 drop-shadow-2xl">
            {t('comp.title')}
          </h2>
          <p className="text-slate-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed font-light">
            {t('comp.desc')}
          </p>
        </div>

        {/* Compositions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {compositions.map((comp, index) => (
            <div key={comp.key} className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-b from-amber-500/20 to-transparent rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
              <Card
                className="h-full bg-slate-900/80 backdrop-blur-sm border-amber-500/10 hover:border-amber-500/30 transition-all duration-500 hover:-translate-y-2 relative overflow-hidden group/card"
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <div className="absolute top-0 right-0 p-4 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 transform translate-x-4 group-hover/card:translate-x-0">
                  <PlayCircle className="text-amber-500" size={32} />
                </div>

                <CardHeader>
                  <div className="flex items-center gap-4 mb-2">
                    <div className="w-10 h-10 bg-amber-500/10 rounded-lg flex items-center justify-center group-hover/card:bg-amber-500 group-hover/card:text-slate-900 transition-all duration-500">
                      <Disc size={20} className="text-amber-500 group-hover/card:text-slate-900 transition-colors" />
                    </div>
                    <CardTitle className="text-xl font-heading text-slate-100 group-hover/card:text-amber-400 transition-colors">
                      {comp.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-slate-400 leading-relaxed">
                    {comp.desc}
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* Note */}
        <div className="mt-12 text-center">
          <p className="text-slate-500 text-sm italic font-light">
            {t('comp.note')}
          </p>
        </div>

        {/* Additional Featured Work Section */}
        <div className="mt-24 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 via-transparent to-amber-500/10 blur-3xl opacity-30 pointer-events-none"></div>
          <div className="bg-slate-900/60 backdrop-blur-md border border-amber-500/20 rounded-2xl p-8 md:p-12 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent opacity-50"></div>

            <div className="text-center relative z-10">
              <div className="inline-block p-3 bg-amber-500/10 rounded-full mb-6 animate-pulse">
                <Music size={32} className="text-amber-500" />
              </div>

              <h4 className="text-3xl md:text-4xl font-heading text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-500 mb-6">
                Longa Riad - The Masterpiece
              </h4>

              <p className="text-slate-300 max-w-3xl mx-auto leading-relaxed mb-8 text-lg font-light">
                Perhaps his most celebrated instrumental work, Longa Riad showcases Sunbati's virtuosic command of the Oud. The piece has become a benchmark for aspiring musicians and a testament to his technical brilliance.
              </p>

              <div className="flex flex-wrap justify-center gap-4">
                <div className="px-6 py-2 bg-slate-950 border border-amber-500/30 rounded-full text-amber-400 text-sm font-bold tracking-wide uppercase hover:bg-amber-500/10 transition-colors cursor-default">
                  Maqam: Nahawand
                </div>
                <div className="px-6 py-2 bg-slate-950 border border-amber-500/30 rounded-full text-amber-400 text-sm font-bold tracking-wide uppercase hover:bg-amber-500/10 transition-colors cursor-default">
                  Genre: Longa
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Compositions;
