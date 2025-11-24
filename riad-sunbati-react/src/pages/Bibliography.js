import React, { useState, useEffect } from 'react';
import HTMLFlipBook from 'react-pageflip';
import { Document, Page, pdfjs } from 'react-pdf';
import { Download, ChevronLeft, ChevronRight, BookOpen } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

// Configure PDF worker
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

function Bibliography() {
    const { t, currentLang } = useLanguage();
    const [numPages, setNumPages] = useState(null);
    const [bookDimensions, setBookDimensions] = useState({ width: 400, height: 550 });
    const bookRef = React.useRef();

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }

    // Responsive book size
    useEffect(() => {
        const handleResize = () => {
            const isMobile = window.innerWidth < 768;
            setBookDimensions({
                width: isMobile ? window.innerWidth * 0.85 : 450,
                height: isMobile ? window.innerWidth * 0.85 * 1.4 : 600
            });
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className="min-h-screen bg-slate-950 relative overflow-hidden pt-24 pb-12">
            {/* Background Ambience */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-amber-900/20 via-slate-950 to-slate-950 pointer-events-none"></div>
            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center">

                {/* Header Section */}
                <div className="text-center mb-12 max-w-3xl mx-auto animate-fade-in-up">
                    <div className="inline-flex items-center gap-2 text-amber-500 mb-4 bg-amber-900/20 px-4 py-1.5 rounded-full border border-amber-700/30 backdrop-blur-sm">
                        <BookOpen size={16} />
                        <span className="text-sm font-medium tracking-wider uppercase">{t('biblio.badge')}</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-500 to-amber-200 mb-6 font-arabic leading-tight py-2">
                        {t('biblio.title')}
                    </h1>
                    <div className="relative">
                        <div className="absolute inset-0 bg-amber-500/10 blur-xl rounded-full"></div>
                        <p className="relative text-lg md:text-xl text-slate-300 leading-loose font-arabic text-center max-w-2xl mx-auto border-y border-amber-800/30 py-6 bg-slate-900/40 backdrop-blur-sm rounded-xl px-6 shadow-xl">
                            <span className="text-amber-500 text-2xl">"</span>
                            {t('biblio.desc')}
                            <span className="text-amber-500 text-2xl">"</span>
                        </p>
                    </div>
                </div>

                {/* Book Showcase */}
                <div className="relative w-full flex justify-center perspective-1000 mb-12">
                    {/* Decorative Elements behind book */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-amber-600/5 blur-3xl rounded-full pointer-events-none"></div>

                    <div className="relative shadow-2xl shadow-black/50 rounded-lg overflow-hidden border-r-4 border-r-amber-900/50 bg-slate-900">
                        <Document
                            file="/Pdf.pdf"
                            onLoadSuccess={onDocumentLoadSuccess}
                            loading={
                                <div className="flex flex-col items-center justify-center h-[600px] w-[450px] bg-slate-900 border border-amber-900/30 rounded-lg">
                                    <div className="w-12 h-12 border-4 border-amber-500 border-t-transparent rounded-full animate-spin mb-4"></div>
                                    <span className="text-amber-500 font-arabic">{t('biblio.loading')}</span>
                                </div>
                            }
                            error={
                                <div className="flex items-center justify-center h-[600px] w-[450px] bg-slate-900 border border-red-900/30 rounded-lg text-red-400">
                                    {t('biblio.error')}
                                </div>
                            }
                        >
                            {numPages && (
                                <HTMLFlipBook
                                    width={bookDimensions.width}
                                    height={bookDimensions.height}
                                    showCover={true}
                                    mobileScrollSupport={true}
                                    className="shadow-2xl"
                                    ref={bookRef}
                                    flippingTime={1000}
                                    usePortrait={true}
                                    startZIndex={0}
                                    autoSize={true}
                                    clickEventForward={true}
                                    useMouseEvents={true}
                                    swipeDistance={30}
                                    showPageCorners={true}
                                    disableFlipByClick={false}
                                >
                                    {Array.from(new Array(numPages), (el, index) => (
                                        <div key={`page_${index + 1}`} className="bg-[#fdfbf7] overflow-hidden shadow-inner border-l border-gray-200">
                                            <div className="relative h-full w-full">
                                                {/* Paper Texture Overlay */}
                                                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')] opacity-50 pointer-events-none z-10"></div>

                                                <Page
                                                    pageNumber={index + 1}
                                                    width={bookDimensions.width}
                                                    renderTextLayer={false}
                                                    renderAnnotationLayer={false}
                                                    className="h-full w-full object-contain"
                                                    loading=""
                                                />

                                                {/* Page Number */}
                                                <div className="absolute bottom-4 left-0 right-0 text-center text-xs text-gray-400 font-serif z-20">
                                                    - {index + 1} -
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </HTMLFlipBook>
                            )}
                        </Document>
                    </div>

                    {/* Navigation Hints (Desktop) */}
                    <div className="hidden md:flex absolute top-1/2 -translate-y-1/2 w-full max-w-5xl justify-between px-4 pointer-events-none">
                        <div className={`bg-slate-900/50 backdrop-blur-md p-3 rounded-full border border-amber-500/20 text-amber-500/50 animate-pulse ${currentLang === 'ar' ? 'rotate-180' : ''}`}>
                            <ChevronLeft size={24} />
                        </div>
                        <div className={`bg-slate-900/50 backdrop-blur-md p-3 rounded-full border border-amber-500/20 text-amber-500/50 animate-pulse ${currentLang === 'ar' ? 'rotate-180' : ''}`}>
                            <ChevronRight size={24} />
                        </div>
                    </div>
                </div>

                {/* Controls & Download */}
                <div className="flex flex-col md:flex-row items-center gap-6 mt-4">
                    <div className="text-slate-400 text-sm font-arabic bg-slate-900/50 px-4 py-2 rounded-full border border-slate-800">
                        {t('biblio.hint')}
                    </div>

                    <a
                        href="https://drive.google.com/file/d/1hhaOOFPb7IfUKWiQY31cbfVKnTjlDvie/view"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-amber-600 to-amber-700 text-white rounded-xl overflow-hidden transition-all duration-300 hover:shadow-[0_0_20px_rgba(217,119,6,0.5)] hover:-translate-y-1"
                    >
                        <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                        <Download size={20} className="relative z-10" />
                        <span className="font-bold font-arabic relative z-10 text-lg">{t('biblio.download')}</span>
                    </a>
                </div>

            </div>
        </div>
    );
}

export default Bibliography;
