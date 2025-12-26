
import React from 'react';
import { NAV_LINKS } from '../constants';
import { Image as ImageIcon } from 'lucide-react';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto flex items-center h-20 px-4 md:px-0">
        {/* Logo Section */}
        <div className="bg-pink-500 h-full flex items-center px-8 text-white logo-clip relative -left-4 md:-left-0">
          <div className="flex items-center space-x-3">
             <div className="bg-white/20 p-2 rounded-lg">
                <ImageIcon size={28} />
             </div>
             <div>
               <p className="text-[10px] font-bold tracking-widest leading-none">MULTIPURPOSE</p>
               <h1 className="text-xl font-black leading-none tracking-tighter">PORTFOLIO</h1>
             </div>
          </div>
        </div>

        {/* Links Section */}
        <div className="flex-grow flex items-center justify-end md:justify-center">
          <ul className="hidden lg:flex items-center space-x-6">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <a 
                  href={link.href} 
                  className="text-[13px] font-bold text-gray-700 hover:text-pink-500 transition-colors py-2"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Buy Now Button */}
        <div className="hidden md:block">
          <button className="bg-pink-500 hover:bg-pink-600 transition-all text-white font-bold py-3 px-8 text-sm">
            BUY NOW
          </button>
        </div>
        
        {/* Mobile Menu Icon Placeholder */}
        <div className="lg:hidden ml-auto">
          <button className="text-gray-700">
             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
