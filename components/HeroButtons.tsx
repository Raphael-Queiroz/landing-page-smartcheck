import React from 'react';

export const HeroButtons: React.FC = () => {
  return (
    <div className="flex flex-col sm:flex-row items-center gap-4 pt-2 animate-fade-in-up delay-200">
      {/* Primary Button - Lighter Blue (400), Translucent with Glass Effect */}
      <button className="px-8 py-3.5 rounded-lg bg-blue-400/70 hover:bg-blue-400/90 text-white font-semibold transition-all duration-300 shadow-[0_0_20px_rgba(96,165,250,0.4)] hover:shadow-[0_0_25px_rgba(96,165,250,0.6)] backdrop-blur-md border border-blue-300/30 transform hover:-translate-y-0.5">
        Começar Agora
      </button>

      {/* Secondary Button - Subtle Glass/Border */}
      <button className="px-8 py-3.5 rounded-lg border border-white/10 text-slate-300 hover:bg-white/5 hover:text-white hover:border-white/30 transition-all duration-300 font-medium backdrop-blur-sm">
        Saber Mais
      </button>
    </div>
  );
};