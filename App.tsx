import React from 'react';
import { Navbar } from './components/Navbar';
import { LoginCard } from './components/LoginCard';
import { HeroButtons } from './components/HeroButtons';
import { Footer } from './components/Footer';

// Use a high-quality Unsplash image that matches the "Sunset above clouds with wing" vibe
// Keeping the image as it fits the aviation theme perfectly
const BG_IMAGE = "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2074&auto=format&fit=crop";

export default function App() {
  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-[#020617] selection:bg-blue-600/30 selection:text-blue-200">
      
      {/* Background Image Layer */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat transition-transform duration-[40s] ease-linear transform scale-100 hover:scale-105"
        style={{ backgroundImage: `url(${BG_IMAGE})` }}
      />
      
      {/* Deep Dark Overlay for "Midnight Aviation" feel */}
      <div className="absolute inset-0 bg-slate-950/40" />
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/50 via-slate-900/20 to-slate-950/80" />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/60 via-transparent to-transparent" />

      {/* Main Container */}
      <div className="relative z-10 min-h-screen flex flex-col">
        <Navbar />

        <main className="flex-grow flex flex-col items-center justify-center px-6 md:px-12 lg:px-24 pt-20 pb-20 w-full">
            
            <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
                
                {/* Left Side: Hero Text */}
                <div className="flex-1 text-center lg:text-left space-y-6 max-w-4xl animate-fade-in-down">
                    
                    {/* Badge Removed as requested */}

                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight text-white drop-shadow-2xl pb-2">
                        Sua aprovação na <br />
                        
                        <span className="whitespace-nowrap">
                            ANAC{' '}
                            {/* Blue gradient and glow effect matching the button style */}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-blue-500 to-blue-600 drop-shadow-[0_0_20px_rgba(96,165,250,0.6)]">
                                começa aqui.
                            </span>
                        </span>
                    </h1>

                    <p className="text-lg md:text-xl text-slate-300 font-light leading-relaxed max-w-xl mx-auto lg:mx-0 drop-shadow-md pt-2">
                        Plataforma completa de treinamento CHT para Célula, GMP e Aviônicos, criada por profissionais da aviação, com foco total na sua aprovação.
                    </p>
                    
                    <div className="hidden lg:block pt-6">
                        <HeroButtons />
                    </div>
                </div>

                {/* Right Side: Login Card */}
                <div className="flex-1 w-full flex justify-center lg:justify-end lg:pr-12">
                    <LoginCard />
                </div>

                {/* Mobile only Buttons */}
                <div className="lg:hidden">
                     <HeroButtons />
                </div>
            </div>

        </main>

        <Footer />
      </div>
      
      {/* Grain texture for realism */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.04] mix-blend-overlay" 
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}>
      </div>

    </div>
  );
}