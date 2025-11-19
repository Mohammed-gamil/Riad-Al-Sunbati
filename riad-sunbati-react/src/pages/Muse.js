import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';

const Muse = () => {
  const { t } = useLanguage();

  return (
    <section id="muse" className="py-24 bg-slate-900 relative min-h-screen pt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold tracking-[0.2em] text-amber-500 uppercase mb-3">
            {t('muse.subtitle')}
          </h2>
          <h3 className="text-5xl font-heading font-bold text-white mb-4">
            {t('muse.title')}
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1: Guardian of the Poem */}
          <Card className="bg-slate-800/50 border-amber-700/30 hover:border-amber-700/60 transition-all duration-300 hover:-translate-y-2">
            <CardHeader>
              <CardTitle className="text-2xl font-heading text-amber-400">
                {t('muse.card1.title')}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-slate-300 leading-relaxed">
                {t('muse.card1.desc')}
              </CardDescription>
            </CardContent>
          </Card>

          {/* Card 2: Al-Atlal */}
          <Card className="bg-slate-800/50 border-amber-700/30 hover:border-amber-700/60 transition-all duration-300 hover:-translate-y-2">
            <CardHeader>
              <CardTitle className="text-2xl font-heading text-amber-400">
                {t('muse.card2.title')}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-slate-300 leading-relaxed mb-4">
                {t('muse.card2.desc')}
              </CardDescription>
              <Button variant="outline" size="sm">
                {t('muse.card2.cta')}
              </Button>
            </CardContent>
          </Card>

          {/* Card 3: 200+ Songs */}
          <Card className="bg-slate-800/50 border-amber-700/30 hover:border-amber-700/60 transition-all duration-300 hover:-translate-y-2">
            <CardHeader>
              <CardTitle className="text-2xl font-heading text-amber-400">
                {t('muse.card3.title')}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-slate-300 leading-relaxed">
                {t('muse.card3.desc')}
              </CardDescription>
            </CardContent>
          </Card>
        </div>

        {/* Additional Content Section */}
        <div className="mt-16 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="bg-amber-950/30 border border-amber-800/50 rounded-lg p-8">
              <p className="text-slate-300 text-lg leading-relaxed font-arabic italic">
                "السنباطي لم يكن مجرد ملحن، بل كان شريكاً في صناعة التاريخ الموسيقي العربي"
              </p>
              <p className="text-amber-400 mt-4 text-sm">
                - Critics on Sunbati & Umm Kulthum
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Muse;
