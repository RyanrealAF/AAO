import React from 'react';
import { SectionHeading } from './SectionHeading';
import { MoveRight } from 'lucide-react';

export const CommandCenter: React.FC = () => {
  return (
    <section id="command" className="py-24 px-4 md:px-12 bg-neutral-950 relative overflow-hidden">
       {/* Background noise texture simulation */}
       <div className="absolute inset-0 opacity-5" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeading title="The Doctrine of Dark Elegance" subtitle="Design As Discipline" align="left" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
          
          {/* Principles */}
          <div className="space-y-12">
             <div className="border-l-4 border-bronze-500 pl-8 py-2">
                <h3 className="text-3xl text-white font-extended mb-4">Tactical Minimalism</h3>
                <p className="text-neutral-400 font-light">Every element must earn its place. The space is a weapon. Remove what does not strike.</p>
             </div>
             <div className="border-l-4 border-neutral-700 pl-8 py-2">
                <h3 className="text-3xl text-neutral-300 font-extended mb-4">Texture Over Pattern</h3>
                <p className="text-neutral-500 font-light">Visual noise distracts. Tactile resonance connects. We choose the rough stone over the polished tile.</p>
             </div>
          </div>

          {/* Swatches */}
          <div className="grid grid-cols-1 gap-4">
            <div className="h-32 bg-matte-black border border-neutral-800 flex items-end p-6 group transition-all hover:border-white">
              <div className="w-full flex justify-between items-end">
                <span className="font-extended text-white text-lg">Matte Black</span>
                <span className="text-xs text-neutral-500 uppercase tracking-widest group-hover:text-white transition-colors">"It's Assertion"</span>
              </div>
            </div>
            <div className="h-32 bg-gradient-to-br from-bronze-500 to-bronze-900 flex items-end p-6 group transition-transform hover:scale-[1.02]">
              <div className="w-full flex justify-between items-end">
                <span className="font-extended text-white text-lg">Metallic Bronze</span>
                <span className="text-xs text-white/70 uppercase tracking-widest">"Legacy. Every glint is a scar."</span>
              </div>
            </div>
            <div className="h-32 bg-matte-stone border border-neutral-800 flex items-end p-6 relative overflow-hidden group">
               {/* Faux stone texture overlay */}
               <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-500 via-gray-900 to-black"></div>
               <div className="w-full flex justify-between items-end relative z-10">
                <span className="font-extended text-neutral-300 text-lg">Textured Stone</span>
                <span className="text-xs text-neutral-500 uppercase tracking-widest">"Unfiltered Reality"</span>
              </div>
            </div>
          </div>
        </div>

        {/* Application Protocol Gallery */}
        <div className="space-y-8">
            <div className="flex items-center gap-4">
                <div className="h-px bg-neutral-800 flex-grow"></div>
                <h4 className="text-neutral-500 uppercase tracking-widest text-sm">Protocol Application</h4>
                <div className="h-px bg-neutral-800 flex-grow"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="relative aspect-[4/3] bg-neutral-900 group overflow-hidden">
                    <img src="https://picsum.photos/seed/desk/800/600?grayscale" alt="Workspace" className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
                    <div className="absolute bottom-0 left-0 p-6">
                        <h5 className="text-white font-extended uppercase mb-1">Command Center</h5>
                        <p className="text-xs text-bronze-500 uppercase tracking-widest flex items-center gap-2">
                            Workspace <MoveRight className="w-3 h-3" /> Weapon
                        </p>
                    </div>
                </div>
                <div className="relative aspect-[4/3] bg-neutral-900 group overflow-hidden">
                    <img src="https://picsum.photos/seed/car/800/600?grayscale" alt="Vehicle" className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
                    <div className="absolute bottom-0 left-0 p-6">
                        <h5 className="text-white font-extended uppercase mb-1">Mobile Presence</h5>
                        <p className="text-xs text-bronze-500 uppercase tracking-widest flex items-center gap-2">
                            Vehicle <MoveRight className="w-3 h-3" /> Console
                        </p>
                    </div>
                </div>
            </div>
        </div>

      </div>
    </section>
  );
};