import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-matte-black border-t border-neutral-900 py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-neutral-500 text-sm tracking-widest">
          © {new Date().getFullYear()} RYANREALAF. ALL RIGHTS RESERVED.
        </div>
        <div className="flex gap-6">
           {/* Social Placeholders */}
           <a href="#" className="text-neutral-600 hover:text-bronze-500 transition-colors uppercase text-xs font-bold tracking-widest">Instagram</a>
           <a href="#" className="text-neutral-600 hover:text-bronze-500 transition-colors uppercase text-xs font-bold tracking-widest">Twitter</a>
        </div>
      </div>
    </footer>
  );
};