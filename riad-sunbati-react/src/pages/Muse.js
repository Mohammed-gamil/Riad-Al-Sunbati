import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Heart, Music, Star, Quote } from 'lucide-react';

const Muse = () => {
  const { t } = useLanguage();

  return (
    <section id="muse" className="relative py-32 bg-slate-950 overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-amber-900/20 via-slate-950 to-slate-950 pointer-events-none"></div>
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/arabesque.png')] opacity-5 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 text-amber-500 bg-amber-900/10 px-4 py-1.5 rounded-full border border-amber-700/20 backdrop-blur-sm mb-6">
            <Heart size={14} className="fill-amber-500" />
            <span className="text-xs font-bold tracking-[0.2em] uppercase">
              {t('muse.subtitle')}
            </span>
          </div>

          <h2 className="text-5xl md:text-7xl font-heading font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-100 via-amber-400 to-amber-100 mb-6 drop-shadow-2xl">
            {t('muse.title')}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1: Guardian of the Poem */}
          <div className="group relative">
            <div className="absolute -inset-0.5 bg-gradient-to-b from-amber-500/20 to-transparent rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
            <Card className="h-full bg-slate-900/80 backdrop-blur-sm border-amber-500/10 hover:border-amber-500/30 transition-all duration-500 hover:-translate-y-2 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Music size={100} />
              </div>
              <CardHeader>
                <div className="w-12 h-12 bg-amber-500/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500">
                  <Music className="text-amber-500" size={24} />
                </div>
                <CardTitle className="text-2xl font-heading text-slate-100 group-hover:text-amber-400 transition-colors">
                  {t('muse.card1.title')}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-slate-400 leading-relaxed text-base">
                  {t('muse.card1.desc')}
                </CardDescription>
              </CardContent>
            </Card>
          </div>

          {/* Card 2: Al-Atlal (Featured) */}
          <div className="group relative md:-mt-8">
            <div className="absolute -inset-1 bg-gradient-to-b from-amber-500/30 to-amber-700/30 rounded-2xl blur-lg opacity-50 group-hover:opacity-100 transition duration-500"></div>
            <Card className="h-full bg-slate-900 border-amber-500/30 hover:border-amber-500/50 transition-all duration-500 hover:-translate-y-2 relative overflow-hidden shadow-2xl flex flex-col">
              <div className="absolute inset-0 bg-gradient-to-b from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Image Header */}
              <div className="relative h-56 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent z-10"></div>
                <img
                  src="/sunbati-ummkulthum.jpg"
                  alt="Riad Al Sunbati and Umm Kulthum"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                />
              </div>

              <CardHeader className="relative z-10 -mt-12">
                <div className="w-14 h-14 bg-gradient-to-br from-amber-500 to-amber-700 rounded-xl flex items-center justify-center mb-4 shadow-lg shadow-amber-900/20 group-hover:scale-110 transition-transform duration-500 border-4 border-slate-900">
                  <Star className="text-slate-900 fill-slate-900" size={28} />
                </div>
                <CardTitle className="text-3xl font-heading text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-500">
                  {t('muse.card2.title')}
                </CardTitle>
              </CardHeader>
              <CardContent className="relative z-10 flex-grow flex flex-col">
                <CardDescription className="text-slate-300 leading-relaxed text-lg mb-6 flex-grow">
                  {t('muse.card2.desc')}
                </CardDescription>
                <Button variant="outline" className="w-full border-amber-500/30 text-amber-500 hover:bg-amber-500 hover:text-slate-900 transition-all duration-300 font-bold mt-auto">
                  {t('muse.card2.cta')}
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Card 3: 200+ Songs */}
          <div className="group relative">
            <div className="absolute -inset-0.5 bg-gradient-to-b from-amber-500/20 to-transparent rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
            <Card className="h-full bg-slate-900/80 backdrop-blur-sm border-amber-500/10 hover:border-amber-500/30 transition-all duration-500 hover:-translate-y-2 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Heart size={100} />
              </div>
              <CardHeader>
                <div className="w-12 h-12 bg-amber-500/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500">
                  <Heart className="text-amber-500" size={24} />
                </div>
                <CardTitle className="text-2xl font-heading text-slate-100 group-hover:text-amber-400 transition-colors">
                  {t('muse.card3.title')}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-slate-400 leading-relaxed text-base">
                  {t('muse.card3.desc')}
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Quote Section */}
        <div className="mt-24 text-center relative">
          <div className="absolute left-1/2 -translate-x-1/2 -top-10 text-amber-500/10">
            <Quote size={120} />
          </div>
          <div className="max-w-4xl mx-auto relative z-10">
            <div className="bg-slate-900/50 backdrop-blur-md border border-amber-500/10 rounded-2xl p-10 md:p-14 shadow-2xl">
              <p className="text-xl md:text-3xl text-slate-200 leading-relaxed font-arabic font-light">
                "السنباطي لم يكن مجرد ملحن، بل كان شريكاً في صناعة التاريخ الموسيقي العربي"
              </p>
              <div className="mt-8 flex items-center justify-center gap-4">
                <div className="h-px w-12 bg-amber-500/30"></div>
                <p className="text-amber-500 text-sm font-bold tracking-widest uppercase">
                  Critics on Sunbati & Umm Kulthum
                </p>
                <div className="h-px w-12 bg-amber-500/30"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Muse;
