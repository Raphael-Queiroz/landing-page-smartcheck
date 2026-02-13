import React from 'react';
import { Plane, Menu } from 'lucide-react';
import { NavItem } from '../types';

const navItems: NavItem[] = [
  { label: 'Our Mission', href: '#' },
  { label: 'Community', href: '#' },
  { label: 'Support', href: '#' },
];

export const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-6 md:px-12 lg:px-24 flex items-center justify-between text-white/90">
      <div className="flex items-center gap-2 group cursor-pointer">
        <Plane className="w-6 h-6 transform group-hover:-rotate-45 transition-transform duration-500" />
        <span className="text-xl font-medium tracking-tight">flight_takeoff <span className="font-bold text-white">SmartCheck</span></span>
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