
import React from 'react';
import { SERVICES } from '../constants';
import { Headphones } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        
        {/* Section Header */}
        <div className="flex flex-col items-center mb-20 text-center">
          <div className="text-pink-500 mb-4 bg-pink-50 p-4 rounded-2xl">
            <Headphones size={40} strokeWidth={1.5} />
          </div>
          <span className="text-xs font-black tracking-[0.3em] text-gray-400 uppercase mb-2">What I Do</span>
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 border-b-4 border-pink-500 pb-4 inline-block">
            WE PROVIDE SERVICES
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-gray-100 rounded-2xl overflow-hidden shadow-xl shadow-gray-100">
          {SERVICES.map((service, index) => (
            <div 
              key={service.id} 
              className={`p-16 flex flex-col items-center transition-all duration-300 hover:bg-gray-50 group border-r border-gray-100 last:border-r-0`}
            >
              <div className={`w-32 h-32 mb-10 flex items-center justify-center bg-gradient-to-br ${service.gradient} service-shape transform transition-transform group-hover:scale-110 shadow-lg group-hover:shadow-xl`}>
                <div className="group-hover:rotate-12 transition-transform duration-300">
                  {service.icon}
                </div>
              </div>
              <h3 className="text-lg font-black text-gray-800 text-center uppercase tracking-tight group-hover:text-pink-600 transition-colors">
                {service.title}
              </h3>
              <div className="w-8 h-1 bg-gray-200 mt-4 group-hover:w-16 group-hover:bg-pink-500 transition-all"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
