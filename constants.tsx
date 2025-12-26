
import React from 'react';
import { NavLink, Service } from './types';
import { Laptop, Smartphone, Palette } from 'lucide-react';

export const NAV_LINKS: NavLink[] = [
  { label: 'ABOUT ME', href: '#' },
  { label: 'PROJECT', href: '#' },
  { label: 'INTERNAL RESOURCES DEV', href: '#' },
  { label: 'CONTACT', href: '#' },
];

export const SERVICES: Service[] = [
  {
    id: 1,
    title: 'WEB DESIGN',
    icon: <Palette className="w-10 h-10 text-white" />,
    gradient: 'from-pink-400 to-rose-500'
  },
  {
    id: 2,
    title: 'WEB DEVELOPMENT',
    icon: <Laptop className="w-10 h-10 text-white" />,
    gradient: 'from-indigo-400 to-purple-600'
  },
  {
    id: 3,
    title: 'APP DESIGN & DEVELOPMENT',
    icon: <Smartphone className="w-10 h-10 text-white" />,
    gradient: 'from-sky-400 to-blue-600'
  }
];
