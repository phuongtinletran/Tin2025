
import React from 'react';
import TopBar from './components/TopBar';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <TopBar />
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        <Services />
        
        {/* Additional Mock Sections for Completeness */}
        <section className="bg-gray-900 py-20 text-white text-center">
          <div className="container mx-auto px-4">
             <h2 className="text-3xl font-black mb-4">READY TO START YOUR PROJECT?</h2>
             <p className="text-gray-400 mb-8 max-w-2xl mx-auto">We provide the best design and development services to help your business grow globally.</p>
             <button className="bg-white text-pink-600 font-bold py-4 px-12 rounded hover:bg-pink-500 hover:text-white transition-all uppercase tracking-widest text-sm shadow-xl">
               Contact Us Now
             </button>
          </div>
        </section>
      </main>

      <footer className="bg-white py-12 border-t border-gray-100">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <div className="mb-4 md:mb-0">
             <p>© 2024 <span className="text-pink-500 font-bold">Multipurpose Portfolio</span>. All Rights Reserved.</p>
          </div>
          <div className="flex space-x-6 font-bold uppercase tracking-widest text-[10px]">
            <a href="#" className="hover:text-pink-500 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-pink-500 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-pink-500 transition-colors">Career</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
