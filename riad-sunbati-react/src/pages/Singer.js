import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Mic, Play } from 'lucide-react';

const Singer = () => {
  const { t } = useLanguage();

  const songs = [
    { key: 'ala', title: t('singer.list.ala'), desc: t('singer.list.ala.desc') },
    { key: 'ashwaq', title: t('singer.list.ashwaq'), desc: t('singer.list.ashwaq.desc') },
    { key: 'ilah', title: t('singer.list.ilah'), desc: t('singer.list.ilah.desc') },
    { key: 'fajr', title: t('singer.list.fajr'), desc: t('singer.list.fajr.desc') },
  ];

  const handleSongClick = (songTitle) => {
    // Placeholder for song play functionality
    console.log('Playing:', songTitle);
  };

  return (
    <section id="singer" className="py-24 bg-amber-950/20 relative border-y border-amber-900/30 min-h-screen pt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Content Section */}
          <div>
            <h2 className="text-sm font-bold tracking-[0.2em] text-amber-500 uppercase mb-3">
              {t('singer.subtitle')}
            </h2>
            <h3 className="text-4xl font-heading font-bold text-white mb-6">
              {t('singer.title')}
            </h3>
            <div className="space-y-4 text-slate-300 leading-relaxed">
              <p dangerouslySetInnerHTML={{ __html: t('singer.p1') }} />
              <p dangerouslySetInnerHTML={{ __html: t('singer.p2') }} />
              <p dangerouslySetInnerHTML={{ __html: t('singer.p3') }} />
            </div>
          </div>

          {/* Songs List Card */}
          <Card className="bg-slate-900 border-amber-900/50 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-amber-600/20 rounded-full blur-xl"></div>
            
            <CardHeader className="border-b border-amber-900/50 pb-4">
              <CardTitle className="text-xl font-heading text-amber-100 flex items-center gap-2">
                <Mic className="w-5 h-5 text-amber-500" />
                {t('singer.list_title')}
              </CardTitle>
            </CardHeader>

            <CardContent className="pt-6">
              <ul className="space-y-4">
                {songs.map((song) => (
                  <li
                    key={song.key}
                    className="flex items-center gap-4 group cursor-pointer hover:bg-slate-800 p-2 rounded transition-colors"
                    onClick={() => handleSongClick(song.title)}
                  >
                    <Button
                      size="icon"
                      className="bg-amber-700 text-white rounded-full group-hover:bg-amber-600 transition-transform group-hover:scale-110"
                    >
                      <Play className="w-4 h-4" />
                    </Button>
                    <div>
                      <p className="text-white font-bold group-hover:text-amber-400 transition-colors">
                        {song.title}
                      </p>
                      <p className="text-xs text-slate-500">{song.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Singer;
