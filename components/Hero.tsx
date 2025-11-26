import React from 'react';
import { Play } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center items-center pt-20 px-4 border-b border-neutral-900 overflow-hidden">
      
      {/* Abstract Background Texture */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#CD7F32" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="z-10 text-center max-w-5xl mx-auto space-y-12">
        <div className="space-y-6">
          <h1 className="text-5xl md:text-7xl lg:text-9xl font-extended font-bold text-white tracking-tighter leading-none bronze-glow">
            AUTHENTICITY<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-500 to-white">AIN'T OPTIONAL</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-bronze-500 uppercase tracking-widest font-medium max-w-3xl mx-auto">
            Trauma is a truth <span className="text-white font-bold">weaponized through rhythm</span>, not apology.
          </p>
        </div>

        {/* Cadence Teaser / Micro-Sermon Placeholder */}
        <div className="relative group w-full max-w-2xl mx-auto aspect-video bg-matte-charcoal border border-neutral-800 rounded-sm overflow-hidden cursor-pointer hover:border-bronze-500 transition-colors duration-500">
          <div className="absolute inset-0 flex items-center justify-center bg-black/60 group-hover:bg-black/40 transition-all duration-500">
            <div className="flex flex-col items-center gap-4">
              <div className="w-16 h-16 border-2 border-bronze-500 rounded-full flex items-center justify-center pl-1 group-hover:scale-110 transition-transform duration-300">
                <Play className="w-6 h-6 text-bronze-500 fill-bronze-500" />
              </div>
              <span className="text-xs font-extended tracking-widest text-neutral-400">Micro-Sermon: 00:30</span>
            </div>
          </div>
          <img 
            src="https://picsum.photos/800/450?grayscale" 
            alt="Micro Sermon Thumbnail" 
            className="w-full h-full object-cover opacity-50"
          />
        </div>

        <div className="pt-8">
          <a 
            href="#lore" 
            className="inline-block px-12 py-4 border border-white text-white font-extended tracking-widest hover:bg-bronze-500 hover:border-bronze-500 hover:text-black transition-all duration-300 text-sm md:text-base"
          >
            ENTER LORE
          </a>
        </div>
      </div>
      
      {/* Mission Statement Footer of Hero */}
      <div className="absolute bottom-0 w-full border-t border-neutral-900 py-6 text-center">
        <p className="text-neutral-500 text-xs md:text-sm uppercase tracking-ultra-wide">
          Movement Architecture forged in trauma. Built on resonance.
        </p>
      </div>
    </section>
  );
};