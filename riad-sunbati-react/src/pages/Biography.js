import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Card, CardContent } from '../components/ui/card';
import { Music2 } from 'lucide-react';

const Biography = () => {
  const { t } = useLanguage();

  return (
    <section id="biography" className="py-24 bg-muted/50 relative min-h-screen pt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Image/Icon Section */}
          <div className="relative">
            <div className="absolute -inset-4 border-2 border-primary/20 translate-x-4 translate-y-4"></div>
            <Card className="relative h-[500px] bg-card overflow-hidden flex items-center justify-center shadow-2xl grayscale hover:grayscale-0 transition-all duration-700 group border-primary/30">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-background/50"></div>
              <img 
                src="/Riad.jpg" 
                alt="Riad Al Sunbati" 
                className="middle inset-0 w-full h-full object-cover"
              />
            </Card>
          </div>

          {/* Content Section */}
          <div>
            <h2 className="text-sm font-bold tracking-[0.2em] text-primary uppercase mb-3">
              {t('bio.subtitle')}
            </h2>
            <h3 className="text-4xl font-heading font-bold text-foreground mb-8">
              {t('bio.title')}
            </h3>

            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p dangerouslySetInnerHTML={{ __html: t('bio.p1') }} />
              <p dangerouslySetInnerHTML={{ __html: t('bio.p2') }} />
              <p dangerouslySetInnerHTML={{ __html: t('bio.p3') }} />

              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="border-s-2 border-primary ps-4">
                  <span className="block text-3xl font-bold text-primary font-heading">
                    539
                  </span>
                  <span className="text-sm text-slate-400 uppercase tracking-wider">
                    {t('bio.stat1')}
                  </span>
                </div>
                <div className="border-s-2 border-amber-700 ps-4">
                  <span className="block text-3xl font-bold text-amber-500 font-heading">
                    1977
                  </span>
                  <span className="text-sm text-slate-400 uppercase tracking-wider">
                    {t('bio.stat2')}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Biography;
