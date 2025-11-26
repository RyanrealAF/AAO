import React from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Doctrine } from './components/Doctrine';
import { Lore } from './components/Lore';
import { CommandCenter } from './components/CommandCenter';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-matte-black min-h-screen text-white font-sans selection:bg-bronze-500 selection:text-black">
      <Navigation />
      <main>
        <Hero />
        <Doctrine />
        <Lore />
        <CommandCenter />
      </main>
      <Footer />
    </div>
  );
};

export default App;