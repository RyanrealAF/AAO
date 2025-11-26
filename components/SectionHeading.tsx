import React from 'react';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({ title, subtitle, align = 'left' }) => {
  const alignClass = align === 'center' ? 'text-center' : align === 'right' ? 'text-right' : 'text-left';
  
  return (
    <div className={`mb-16 ${alignClass} space-y-4`}>
      <h2 className="text-3xl md:text-5xl font-extended font-bold uppercase tracking-wider text-white">
        {title}
      </h2>
      {subtitle && (
        <div className="h-1 w-24 bg-bronze-500 mt-4 mb-6 inline-block" />
      )}
      {subtitle && (
        <p className="text-neutral-400 text-lg uppercase tracking-widest font-light">
          {subtitle}
        </p>
      )}
    </div>
  );
};