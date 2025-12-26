import React from 'react';

export interface Service {
  id: number;
  title: string;
  // Fix: Using React.ReactNode for the icon type; requires importing React at the top of the file
  icon: React.ReactNode;
  gradient: string;
}

export interface NavLink {
  label: string;
  href: string;
}