import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Mic, Play, Music2, Disc } from 'lucide-react';

const Singer = () => {
  const { t } = useLanguage();

  const songs = [
    { key: 'ala', title: t('singer.list.ala'), desc: t('singer.list.ala.desc') },
    { key: 'ashwaq', title: t('singer.list.ashwaq'), desc: t('singer.list.ashwaq.desc') },
    { key: 'ilah', title: t('singer.list.ilah'), desc: t('singer.list.ilah.desc') },
    { key: 'fajr', title: t('singer.list.fajr'), desc: t('singer.list.fajr.desc') },
  ];

  const handleSongClick = (songTitle) => {
    console.log('Playing:', songTitle);
  };

  return (
    <section id="singer" className="relative py-32 bg-slate-950 overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-amber-900/20 via-slate-950 to-slate-950 pointer-events-none"></div>
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Content Section */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 text-amber-500 bg-amber-900/10 px-4 py-1.5 rounded-full border border-amber-700/20 backdrop-blur-sm">
                <Mic size={14} className="fill-amber-500" />
                <span className="text-xs font-bold tracking-[0.2em] uppercase">
                  {t('singer.subtitle')}
                </span>
              </div>

              <h2 className="text-4xl md:text-5xl font-heading font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-100 via-amber-400 to-amber-100 leading-tight">
                {t('singer.title')}
              </h2>
            </div>

            <div className="space-y-6 text-slate-300 text-lg leading-relaxed font-light">
              <p dangerouslySetInnerHTML={{ __html: t('singer.p1') }} />
              <div className="p-6 bg-slate-900/50 rounded-2xl border border-amber-500/10 hover:border-amber-500/20 transition-colors relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-r from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <p dangerouslySetInnerHTML={{ __html: t('singer.p2') }} className="relative z-10" />
              </div>
              <p dangerouslySetInnerHTML={{ __html: t('singer.p3') }} />
            </div>
          </div>

          {/* Songs List Card */}
          <div className="relative group perspective-1000">
            <div className="absolute -inset-1 bg-gradient-to-r from-amber-500/20 to-amber-700/20 rounded-2xl blur-lg group-hover:blur-xl transition-all duration-500"></div>

            <Card className="bg-slate-900/90 backdrop-blur-xl border-amber-500/10 shadow-2xl relative overflow-hidden rounded-2xl">
              {/* Vinyl Record Decoration */}
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-slate-950 rounded-full border-8 border-slate-800 shadow-2xl opacity-50 animate-[spin_10s_linear_infinite]">
                <div className="absolute inset-0 border-4 border-slate-700 rounded-full m-8"></div>
                <div className="absolute inset-0 border-4 border-slate-700 rounded-full m-16"></div>
                <div className="absolute inset-0 bg-amber-600/20 rounded-full m-24 backdrop-blur-sm"></div>
              </div>

              <CardHeader className="border-b border-white/5 pb-6 relative z-10">
                <CardTitle className="text-2xl font-heading text-amber-100 flex items-center gap-3">
                  <div className="p-2 bg-amber-500/10 rounded-lg text-amber-500">
                    <Disc size={24} />
                  </div>
                  {t('singer.list_title')}
                </CardTitle>
              </CardHeader>

              <CardContent className="pt-6 relative z-10">
                <ul className="space-y-3">
                  {songs.map((song, index) => (
                    <li
                      key={song.key}
                      className="group/item flex items-center gap-4 p-3 rounded-xl hover:bg-white/5 transition-all duration-300 cursor-pointer border border-transparent hover:border-white/5"
                      onClick={() => handleSongClick(song.title)}
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <Button
                        size="icon"
                        className="w-10 h-10 rounded-full bg-amber-500/10 text-amber-500 group-hover/item:bg-amber-500 group-hover/item:text-slate-900 transition-all duration-300 shadow-lg group-hover/item:shadow-amber-500/20"
                        aria-label={`Play ${song.title}`}
                      >
                        <Play className="w-4 h-4 ml-0.5" />
                      </Button>
                      <div className="flex-1">
                        <p className="text-slate-200 font-bold group-hover/item:text-amber-400 transition-colors font-heading text-lg">
                          {song.title}
                        </p>
                        <p className="text-xs text-slate-500 group-hover/item:text-slate-400 transition-colors line-clamp-1">
                          {song.desc}
                        </p>
                      </div>
                      <div className="opacity-0 group-hover/item:opacity-100 transition-opacity duration-300">
                        <Music2 size={16} className="text-amber-500/50" />
                      </div>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Singer;
