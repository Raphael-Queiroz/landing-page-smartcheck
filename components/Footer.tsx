import React from 'react';

const links = [
    'About Us',
    'ANAC Certification',
    'Contact',
    'Privacy Policy'
];

export const Footer: React.FC = () => {
  return (
    <footer className="fixed bottom-0 left-0 right-0 p-6 md:p-8 flex flex-col md:flex-row items-center justify-between text-[10px] md:text-xs text-blue-100/40 z-40 bg-gradient-to-t from-black/60 to-transparent">
        <div className="flex gap-6 mb-2 md:mb-0">
            {links.map(link => (
                <a key={link} href="#" className="hover:text-white transition-colors">
                    {link}
                </a>
            ))}
        </div>
        <div className="font-light tracking-wide">
            © 2026 SmartCheck Aviation. Designed & Developed by Raphael Queiroz.
        </div>
    </footer>
  );
};