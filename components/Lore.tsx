import React from 'react';
import { SectionHeading } from './SectionHeading';
import { Mic, Scroll, Zap, BarChart3 } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { Persona } from '../types';

const PERSONAS: Persona[] = [
  {
    title: "Street Preacher",
    role: "Data Capture",
    description: "Raw, unfiltered reality. The voice that speaks before it thinks, capturing the grit of the moment."
  },
  {
    title: "Urban Mythmaker",
    role: "Narrative Archive",
    description: "Transcribes the struggle into a map. Turns concrete memories into folklore."
  },
  {
    title: "Spiritual Jester",
    role: "Impact & Redemption",
    description: "Uses a whimsical edge to disarm defenses. The punchline that saves your soul."
  }
];

const METRIC_DATA = [
  { name: 'Static Text', value: 100 },
  { name: 'Rhythmic Cadence', value: 138 },
];

export const Lore: React.FC = () => {
  return (
    <section id="lore" className="py-24 px-4 md:px-12 bg-neutral-900 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto">
        <SectionHeading title="Myth-Making In The Margins" subtitle="Enter Lore" align="right" />

        {/* Narrative Flow Intro */}
        <div className="mb-20 grid grid-cols-1 md:grid-cols-3 gap-8 text-neutral-400">
          <div className="md:col-span-2">
            <p className="text-xl font-light leading-relaxed">
              We mythologize the margins. We transform trauma into testimony and memory into a map. 
              This is not just storytelling; it is <strong className="text-white">cartography of the soul</strong>.
            </p>
          </div>
          <div className="border-l border-neutral-700 pl-6 flex flex-col justify-center">
            <span className="block text-xs uppercase tracking-widest text-bronze-500 mb-2">Digital Folklore</span>
            <span className="text-lg text-white font-extended">Concrete Lament</span>
            <span className="text-lg text-white font-extended">A F*cking Juggernaut</span>
          </div>
        </div>

        {/* Persona Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
          {PERSONAS.map((persona, idx) => (
            <div key={idx} className="bg-matte-black border border-neutral-800 p-8 hover:border-bronze-500 transition-all duration-300 group">
              <div className="mb-6 text-bronze-500">
                {idx === 0 && <Mic className="w-8 h-8" />}
                {idx === 1 && <Scroll className="w-8 h-8" />}
                {idx === 2 && <Zap className="w-8 h-8" />}
              </div>
              <h3 className="text-xl font-extended text-white mb-2 group-hover:text-bronze-400 transition-colors">
                {persona.title}
              </h3>
              <span className="inline-block px-2 py-1 bg-neutral-800 text-xs uppercase tracking-widest text-neutral-400 mb-4 rounded">
                {persona.role}
              </span>
              <p className="text-neutral-500 leading-relaxed font-light">
                {persona.description}
              </p>
            </div>
          ))}
        </div>

        {/* Metrics Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-matte-black p-8 md:p-12 border border-neutral-800">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <BarChart3 className="text-bronze-500" />
              <h4 className="text-2xl font-extended text-white uppercase">The Rhythm Metric</h4>
            </div>
            <p className="text-neutral-400 mb-8 font-light">
              Words hitting like bars isn't an artistic choice—it's a tactical one. 
              Data confirms that rhythmic cadence holds attention where static prose fails.
            </p>
            <div className="text-4xl md:text-5xl font-bold text-white mb-2">
              +38%
            </div>
            <span className="text-sm uppercase tracking-widest text-bronze-500">Engagement Lift</span>
          </div>

          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={METRIC_DATA} layout="vertical" margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#333" horizontal={false} />
                <XAxis type="number" hide />
                <YAxis dataKey="name" type="category" stroke="#666" fontSize={12} width={100} tick={{fill: '#999'}} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#0a0a0a', borderColor: '#333', color: '#fff' }}
                  itemStyle={{ color: '#fff' }}
                  cursor={{fill: 'rgba(255,255,255,0.05)'}}
                />
                <Bar dataKey="value" barSize={30}>
                  {METRIC_DATA.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={index === 1 ? '#CD7F32' : '#333333'} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

      </div>
    </section>
  );
};