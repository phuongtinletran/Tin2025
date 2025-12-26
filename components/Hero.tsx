
import React from 'react';
import { Twitter, Facebook, Linkedin, Instagram } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-white hero-bg min-h-[600px] flex items-center">
      <div className="container mx-auto px-4 lg:px-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center py-16 md:py-0">
        
        {/* Text Content */}
        <div className="z-10 relative">
          <div className="mb-6">
            <h3 className="text-sm font-bold tracking-[0.2em] text-gray-500 mb-4 border-l-4 border-pink-500 pl-4 uppercase">
              We Are Branding Agency
            </h3>
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 leading-[1.1] mb-6">
              LOVE DESIGN WITH<br />
              <span className="text-pink-500">YOUR SOUL</span>
            </h2>
            <p className="text-gray-500 font-medium text-lg leading-relaxed max-w-md">
              We a Flock of Artists & Strategic Thinkers who craft visual experiences that last a lifetime.
            </p>
          </div>
          <button className="bg-pink-500 hover:bg-pink-600 hover:translate-y-[-2px] transition-all text-white font-bold py-4 px-10 rounded shadow-lg shadow-pink-200 uppercase tracking-wider text-sm">
            About Me
          </button>
        </div>

        {/* Hero Image */}
        <div className="relative flex justify-center items-end h-full">
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-pink-50 rounded-full blur-[100px] opacity-40 -z-10"></div>
           <img 
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=1000" 
              alt="Profile" 
              className="max-h-[550px] object-contain drop-shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
           />
        </div>
      </div>

      {/* Floating Social Icons */}
      <div className="absolute right-6 top-1/2 -translate-y-1/2 hidden lg:flex flex-col space-y-3">
        <div className="bg-sky-500 p-3 rounded-full text-white cursor-pointer hover:scale-110 transition-transform shadow-md">
          <Twitter size={18} />
        </div>
        <div className="bg-blue-700 p-3 rounded-full text-white cursor-pointer hover:scale-110 transition-transform shadow-md">
          <Facebook size={18} />
        </div>
        <div className="bg-blue-600 p-3 rounded-full text-white cursor-pointer hover:scale-110 transition-transform shadow-md">
          <Linkedin size={18} />
        </div>
        <div className="bg-pink-600 p-3 rounded-full text-white cursor-pointer hover:scale-110 transition-transform shadow-md">
          <Instagram size={18} />
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
        <div className="w-1 h-12 bg-gray-200 rounded-full flex justify-center p-1">
          <div className="w-full h-1/3 bg-pink-500 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
