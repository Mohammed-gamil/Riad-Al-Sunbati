import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Lazy load pages
const Home = lazy(() => import('./pages/Home'));
const Biography = lazy(() => import('./pages/Biography'));
const Singer = lazy(() => import('./pages/Singer'));
const Muse = lazy(() => import('./pages/Muse'));
const Legacy = lazy(() => import('./pages/Legacy'));
const Compositions = lazy(() => import('./pages/Compositions'));
const Bibliography = lazy(() => import('./pages/Bibliography'));

// Loading component
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-slate-950">
    <div className="w-12 h-12 border-4 border-amber-500 border-t-transparent rounded-full animate-spin"></div>
  </div>
);

function App() {
  return (
    <LanguageProvider>
      <Router>
        <div className="dark bg-background text-foreground min-h-screen">
          <Navbar />
          <main>
            <Suspense fallback={<PageLoader />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/biography" element={<Biography />} />
                <Route path="/singer" element={<Singer />} />
                <Route path="/muse" element={<Muse />} />
                <Route path="/legacy" element={<Legacy />} />
                <Route path="/compositions" element={<Compositions />} />
                <Route path="/bibliography" element={<Bibliography />} />
              </Routes>
            </Suspense>
          </main>
          <Footer />
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;
