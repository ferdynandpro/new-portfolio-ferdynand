"use client";
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, MapPin, Clock } from 'lucide-react';

export default function Hero() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false }));
    };
    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-6 md:px-12 lg:px-24 overflow-hidden pt-20">
      <div className="absolute top-0 left-[10%] w-[500px] h-[500px] bg-blue-300/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-[10%] w-[400px] h-[400px] bg-indigo-300/20 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-4xl mx-auto w-full relative z-10 flex flex-col items-center text-center space-y-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-2 px-5 py-2.5 bg-white border border-slate-200 rounded-full shadow-sm">
          <div className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" />
          <span className="text-xs font-bold text-slate-600 tracking-wide uppercase">Available for freelance work</span>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="space-y-6">
          <h1 className="text-6xl md:text-8xl lg:text-[7.5rem] font-extrabold tracking-tighter text-slate-900 leading-[1.1]">
            Ferdynand <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Silalahi.</span>
          </h1>
          <p className="max-w-2xl mx-auto text-slate-600 text-lg md:text-xl font-medium leading-relaxed">
            Building clean, responsive, and high-performance digital interfaces to elevate your business.
          </p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="flex flex-col sm:flex-row items-center gap-4 pt-4 w-full sm:w-auto">
          <a href="#contact" className="w-full sm:w-auto px-8 py-4 bg-blue-600 text-white rounded-xl font-bold text-sm hover:bg-blue-700 transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-600/20">
            Get in Touch <ArrowRight size={18} />
          </a>
          <a href="#about" className="w-full sm:w-auto px-8 py-4 bg-white border border-slate-200 rounded-xl text-slate-700 font-bold text-sm hover:bg-slate-50 transition-all shadow-sm">
            View Portfolio
          </a>
          <a href="https://drive.google.com/file/d/1-fk9WkJQNh4yG8QcNwvPchbIPb_Qcyfv/view?usp=drive_open" target="_blank" rel="noreferrer" className="w-full sm:w-auto px-8 py-4 bg-slate-900 text-white rounded-xl font-bold text-sm hover:bg-slate-800 transition-all flex items-center justify-center gap-2 shadow-lg shadow-slate-900/20">
            View CV <Download size={18} />
          </a>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }} className="flex items-center gap-6 pt-12 text-slate-500 text-sm font-semibold">
          <div className="flex items-center gap-2">
            <MapPin size={16} className="text-blue-600" /> Tabalong, South Kalimantan
          </div>
          <div className="w-1.5 h-1.5 rounded-full bg-slate-300" />
          <div className="flex items-center gap-2">
            <Clock size={16} className="text-blue-600" /> {time} WITA
          </div>
        </motion.div>
      </div>
    </section>
  );
}