
import React from 'react';
import { Phone, Mail, Twitter, Facebook, Linkedin, Github } from 'lucide-react';

const TopBar: React.FC = () => {
  return (
    <div className="bg-gray-50 border-b border-gray-100 py-2 hidden md:block">
      <div className="container mx-auto px-4 flex justify-between items-center text-xs text-gray-500 font-medium">
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-2">
            <Phone size={14} className="text-pink-500" />
            <span>+123-657-897</span>
          </div>
          <div className="flex items-center space-x-2">
            <Mail size={14} className="text-pink-500" />
            <span>portfolio@gmail.com</span>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <Twitter size={14} className="hover:text-pink-500 cursor-pointer transition-colors" />
          <Facebook size={14} className="hover:text-pink-500 cursor-pointer transition-colors" />
          <Linkedin size={14} className="hover:text-pink-500 cursor-pointer transition-colors" />
          <Github size={14} className="hover:text-pink-500 cursor-pointer transition-colors" />
        </div>
      </div>
    </div>
  );
};

export default TopBar;
