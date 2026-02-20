"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
import { NAV_ITEMS } from '@/components/data/index.js';

export default function Navbar({ isScrolled, activeSection }) {
  return (
    <motion.div 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-6 left-0 right-0 z-[100] flex justify-center px-4 md:px-12 pointer-events-none"
    >
      <div className={`
        flex items-center gap-2 p-1.5 rounded-full border transition-all duration-500 pointer-events-auto shadow-sm
        ${isScrolled 
          ? 'bg-white/90 backdrop-blur-md border-slate-200 w-full max-w-lg justify-between shadow-lg shadow-slate-200/50' 
          : 'bg-white/80 backdrop-blur-sm border-slate-200 w-auto'}
      `}>
        <div className="flex items-center gap-3 pl-4">
          <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white text-xs font-bold">FS</div>
          {!isScrolled && <span className="text-sm font-bold tracking-tight mr-4 hidden sm:block text-slate-800">fdynns_</span>}
        </div>

        <div className="flex items-center gap-1">
          {NAV_ITEMS.map((item) => (
            <a 
              key={item.id} 
              href={`#${item.id}`} 
              className={`
                px-4 py-2 rounded-full text-sm font-medium transition-all
                ${activeSection === item.id ? 'bg-blue-600 text-white shadow-md shadow-blue-600/20' : 'text-slate-600 hover:text-blue-600 hover:bg-blue-50'}
              `}
            >
              {item.label}
            </a>
          ))}
        </div>

        {isScrolled && (
          <div className="pr-1.5 hidden sm:block">
             <a href="#contact" className="flex items-center justify-center bg-slate-900 text-white p-2 rounded-full hover:scale-105 active:scale-95 transition-all">
                <Send size={16} />
             </a>
          </div>
        )}
      </div>
    </motion.div>
  );
}