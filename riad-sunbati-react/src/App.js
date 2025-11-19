import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Biography from './pages/Biography';
import Singer from './pages/Singer';
import Muse from './pages/Muse';
import Legacy from './pages/Legacy';
import Compositions from './pages/Compositions';

function App() {
  return (
    <LanguageProvider>
      <Router>
        <div className="dark bg-background text-foreground min-h-screen">
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/biography" element={<Biography />} />
              <Route path="/singer" element={<Singer />} />
              <Route path="/muse" element={<Muse />} />
              <Route path="/legacy" element={<Legacy />} />
              <Route path="/compositions" element={<Compositions />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;
