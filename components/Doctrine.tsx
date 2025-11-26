import React from 'react';
import { SectionHeading } from './SectionHeading';
import { ShieldAlert, X, Zap } from 'lucide-react';

export const Doctrine: React.FC = () => {
  return (
    <section id="doctrine" className="py-24 px-4 md:px-12 bg-matte-black relative">
      <div className="max-w-7xl mx-auto">
        <SectionHeading 
          title="The A.A.O. Manifesto" 
          subtitle="Radical Truth As Armor"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          {/* Column 1: Tenets */}
          <div className="space-y-12">
            <div className="space-y-8">
              <h3 className="text-2xl font-extended text-bronze-500 border-l-2 border-bronze-500 pl-6">
                The Three No's
              </h3>
              <ul className="space-y-6">
                {[
                  { text: "No Sugarcoating", desc: "Dilution is death." },
                  { text: "No Algorithm-Friendly Script", desc: "We don't optimize for bots." },
                  { text: "No Apology", desc: "Stand in the conviction of your scars." }
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start group">
                    <X className="w-6 h-6 text-neutral-600 group-hover:text-red-500 transition-colors mt-1 mr-4 shrink-0" />
                    <div>
                      <span className="block text-xl font-bold text-white uppercase tracking-wide group-hover:text-bronze-400 transition-colors">
                        {item.text}
                      </span>
                      <span className="text-neutral-500 text-sm font-light">
                        {item.desc}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-matte-stone p-8 border border-neutral-800">
              <div className="flex items-center gap-4 mb-4">
                <ShieldAlert className="text-bronze-500" />
                <h4 className="font-extended text-sm tracking-widest text-white">Anti-Fragile Outcome</h4>
              </div>
              <p className="text-neutral-400 leading-relaxed font-light">
                This strategy annihilates the notion that authenticity must be softened to scale. 
                We build an identity that strengthens under pressure.
              </p>
            </div>
          </div>

          {/* Column 2: Visualizing Dichotomies (Venn Diagram) */}
          <div className="relative flex justify-center py-12 lg:py-0">
            {/* Custom SVG Visualization of Fusion */}
            <div className="relative w-80 h-80 md:w-96 md:h-96">
              <svg viewBox="0 0 400 400" className="w-full h-full animate-pulse-slow">
                <defs>
                  <linearGradient id="bronzeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#CD7F32" stopOpacity="0.2" />
                    <stop offset="100%" stopColor="#A05A15" stopOpacity="0.8" />
                  </linearGradient>
                </defs>
                
                {/* Circle 1: Street */}
                <circle cx="150" cy="150" r="100" fill="none" stroke="#333" strokeWidth="2" className="opacity-50" />
                <text x="100" y="140" fill="#666" className="text-xs uppercase font-sans tracking-widest" textAnchor="middle">Street</text>
                
                {/* Circle 2: Sacred */}
                <circle cx="250" cy="150" r="100" fill="none" stroke="#333" strokeWidth="2" className="opacity-50" />
                <text x="300" y="140" fill="#666" className="text-xs uppercase font-sans tracking-widest" textAnchor="middle">Sacred</text>
                
                {/* Circle 3: Struggle (Bottom) */}
                <circle cx="200" cy="240" r="100" fill="none" stroke="#333" strokeWidth="2" className="opacity-50" />
                <text x="200" y="300" fill="#666" className="text-xs uppercase font-sans tracking-widest" textAnchor="middle">Struggle</text>
                
                {/* Intersection Highlight */}
                <path d="M200,165 Q230,200 200,235 Q170,200 200,165" fill="url(#bronzeGrad)" />
                <circle cx="200" cy="200" r="5" fill="#CD7F32" />
                
                {/* Connection Lines */}
                <line x1="200" y1="200" x2="350" y2="50" stroke="#CD7F32" strokeWidth="1" />
                <rect x="340" y="30" width="120" height="40" fill="#111" stroke="#CD7F32" />
                <text x="400" y="55" fill="#FFF" className="text-xs uppercase font-bold" textAnchor="middle">Linguistic Liminality</text>
              </svg>

              {/* Floating Labels */}
              <div className="absolute top-0 right-0 transform translate-x-4 -translate-y-4">
                 <div className="bg-matte-charcoal border border-neutral-700 p-3 text-xs text-neutral-300 max-w-[150px]">
                    <span className="text-bronze-500 font-bold block mb-1">Vulnerability vs Valor</span>
                    Struggle as courage.
                 </div>
              </div>
              <div className="absolute bottom-0 left-0 transform -translate-x-4 translate-y-4">
                 <div className="bg-matte-charcoal border border-neutral-700 p-3 text-xs text-neutral-300 max-w-[150px]">
                    <span className="text-bronze-500 font-bold block mb-1">Process vs Sermon</span>
                    The grind is the gospel.
                 </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};