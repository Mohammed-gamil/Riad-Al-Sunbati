import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Card } from '../components/ui/card';
import { Music, Award, Star } from 'lucide-react';

const Biography = () => {
  const { t } = useLanguage();

  return (
    <section id="biography" className="relative py-32 bg-slate-950 overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-amber-900/10 via-slate-950 to-slate-950 pointer-events-none"></div>
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/arabesque.png')] opacity-5 pointer-events-none"></div>

      {/* Decorative Circle */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-amber-600/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Image Section */}
          <div className="relative group perspective-1000">
            <div className="absolute -inset-4 bg-gradient-to-tr from-amber-600/20 to-transparent rounded-2xl blur-lg group-hover:blur-xl transition-all duration-500"></div>
            <div className="absolute -inset-1 border border-amber-500/20 rounded-2xl translate-x-4 translate-y-4 transition-transform duration-500 group-hover:translate-x-6 group-hover:translate-y-6"></div>

            <Card className="relative h-[600px] bg-slate-900 overflow-hidden rounded-2xl border-0 shadow-2xl group-hover:shadow-amber-900/20 transition-all duration-500 transform group-hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent z-10 opacity-60"></div>
              <img
                src="/Riad.jpg"
                alt="Riad Al Sunbati"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0"
                loading="lazy"
              />

              {/* Floating Badge */}
              <div className="absolute bottom-8 left-8 z-20 bg-slate-900/90 backdrop-blur-md border border-amber-500/30 p-4 rounded-xl shadow-lg transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                <div className="flex items-center gap-3">
                  <div className="bg-amber-500/20 p-2 rounded-full text-amber-500">
                    <Music size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 uppercase tracking-wider">Known As</p>
                    <p className="text-amber-100 font-bold font-arabic">{t('bio.nightingale.ar')}</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Content Section */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 text-amber-500 bg-amber-900/10 px-4 py-1.5 rounded-full border border-amber-700/20 backdrop-blur-sm">
                <Star size={14} className="fill-amber-500" />
                <span className="text-xs font-bold tracking-[0.2em] uppercase">
                  {t('bio.subtitle')}
                </span>
              </div>

              <h2 className="text-4xl md:text-5xl font-heading font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-100 via-amber-400 to-amber-100 leading-tight">
                {t('bio.title')}
              </h2>
            </div>

            <div className="space-y-6 text-slate-300 text-lg leading-relaxed font-light">
              <div className="p-6 bg-slate-900/50 rounded-2xl border border-amber-500/10 hover:border-amber-500/20 transition-colors">
                <p dangerouslySetInnerHTML={{ __html: t('bio.p1') }} />
              </div>
              <p dangerouslySetInnerHTML={{ __html: t('bio.p2') }} className="ps-4 border-s-2 border-amber-500/30" />
              <p dangerouslySetInnerHTML={{ __html: t('bio.p3') }} />
            </div>

            <div className="grid grid-cols-2 gap-6 pt-4">
              <div className="group p-4 bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl border border-amber-500/10 hover:border-amber-500/30 transition-all">
                <div className="text-amber-500 mb-2 group-hover:scale-110 transition-transform origin-left">
                  <Music size={24} />
                </div>
                <span className="block text-3xl font-bold text-slate-100 font-heading mb-1">
                  539
                </span>
                <span className="text-xs text-slate-400 uppercase tracking-wider">
                  {t('bio.stat1')}
                </span>
              </div>

              <div className="group p-4 bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl border border-amber-500/10 hover:border-amber-500/30 transition-all">
                <div className="text-amber-500 mb-2 group-hover:scale-110 transition-transform origin-left">
                  <Award size={24} />
                </div>
                <span className="block text-3xl font-bold text-slate-100 font-heading mb-1">
                  1977
                </span>
                <span className="text-xs text-slate-400 uppercase tracking-wider">
                  {t('bio.stat2')}
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Biography;
