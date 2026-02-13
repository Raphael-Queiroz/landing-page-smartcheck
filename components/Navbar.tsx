import React from 'react';
import { Menu } from 'lucide-react';
import { NavItem } from '../types';

const navItems: NavItem[] = [
  { label: 'Our Mission', href: '#' },
  { label: 'Community', href: '#' },
  { label: 'Support', href: '#' },
];

// Custom SVG Logo based on the provided "Shield with Checkmark" image
const SmartCheckLogo: React.FC<{ className?: string }> = ({ className }) => (
  <svg 
    viewBox="0 0 24 24" 
    className={className} 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    {/* Shield Outline - interrupted at top right for the checkmark */}
    <path d="M16 3H6C4.34315 3 3 4.34315 3 6V11C3 16.5228 7.47715 21 12 21.5C14.5 21.2 16.8 20 18.5 18" />
    
    {/* Prominent Checkmark extending out */}
    <path d="M8 11L12 15L22 3" />
  </svg>
);

export const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-6 md:px-12 lg:px-24 flex items-center justify-between text-white/90">
      
      {/* Brand Logo Container */}
      <div className="flex items-center gap-3 group cursor-pointer select-none">
        
        {/* Custom Logo - Standalone (No Circle) */}
        <SmartCheckLogo className="w-10 h-10 text-white group-hover:text-blue-300 transition-colors duration-300 drop-shadow-[0_0_10px_rgba(96,165,250,0.3)]" />

        <div className="flex flex-col justify-center">
            <span className="text-lg font-bold text-white tracking-[0.2em] uppercase leading-none group-hover:text-blue-100 group-hover:drop-shadow-[0_0_8px_rgba(96,165,250,0.5)] transition-all duration-300">
                SmartCheck
            </span>
            <span className="text-[8px] text-blue-200/50 tracking-[0.4em] uppercase leading-none mt-1.5 ml-0.5 group-hover:text-blue-300 group-hover:tracking-[0.5em] transition-all duration-500">
                Training Platform
            </span>
        </div>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-8">
        {navItems.map((item) => (
          <a 
            key={item.label} 
            href={item.href}
            className="text-sm font-medium hover:text-white transition-colors duration-200 relative group"
          >
            {item.label}
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
          </a>
        ))}
      </div>

      {/* Mobile Menu Icon */}
      <button className="md:hidden p-2 hover:bg-white/10 rounded-full transition-colors">
        <Menu className="w-6 h-6" />
      </button>
    </nav>
  );
};