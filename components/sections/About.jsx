"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Grid, Bookmark, Award } from 'lucide-react';
import { PROJECTS, TECH_STACK, EXPERIENCE } from '@/components/data/index.js';

export default function About({ onProjectClick }) {
  const [activeTab, setActiveTab] = useState('projects');

  return (
    <section id="about" className="py-24 px-6 md:px-12 lg:px-24 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-slate-50 border border-slate-100 rounded-[2.5rem] p-8 md:p-12 lg:p-16 shadow-lg shadow-slate-200/50">
          
          <div className="flex flex-col md:flex-row gap-10 lg:gap-16 items-center md:items-start mb-16">
            <div className="relative shrink-0">
              <div className="w-40 h-40 md:w-56 md:h-56 rounded-full p-1.5 bg-gradient-to-tr from-blue-600 to-cyan-400 shadow-xl">
                <div className="w-full h-full rounded-full bg-white border-4 border-white flex items-center justify-center overflow-hidden relative">
                  <Image src="/asd.webp" alt="Ferdynand Silalahi" width={224} height={224} className="w-full h-full rounded-full object-cover" priority />
                </div>
              </div>
            </div>

            <div className="flex-1 text-center md:text-left">
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6 justify-center md:justify-start">
                <h3 className="text-3xl font-extrabold text-slate-900">Ferdynand Silalahi</h3>
                <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-bold rounded-full w-fit mx-auto sm:mx-0">B.Comp.Sc (2025)</span>
              </div>
      
              <div className="flex flex-wrap justify-center md:justify-start gap-6 lg:gap-8">
                {[{l:'Experience', v:'2+ Years'}, {l:'Successful Projects', v:'5+'}, {l:'Clients', v:'3+'}].map(s => (
                  <div key={s.l} className="flex items-center gap-2">
                    <span className="font-bold text-base text-blue-600">{s.v}</span>
                    <span className="font-medium text-base text-slate-600">{s.l}</span>
                  </div>
                ))}
              </div>

              <p className="text-slate-600 text-lg leading-relaxed max-w-2xl mb-8 text-justify pt-8">
                A proactive web developer based in Tabalong, South Kalimantan. With hands-on experience building diverse web applications independently, I am currently looking for an opportunity to join an innovative tech team. I am ready to leverage my full-stack capabilities to drive business goals and create impactful user experiences.
              </p>
            </div>
          </div>

          <div className="border-b border-slate-200">
            <div className="flex justify-start md:justify-center gap-8 overflow-x-auto no-scrollbar">
              {[
                { id: 'projects', label: 'Portfolio', icon: <Grid size={18}/> },
                { id: 'stack', label: 'Skills', icon: <Bookmark size={18}/> },
                { id: 'exp', label: 'Experience', icon: <Award size={18}/> },
              ].map((t) => (
                <button 
                  key={t.id} 
                  onClick={() => setActiveTab(t.id)} 
                  className={`flex items-center gap-2 py-4 text-sm font-semibold relative whitespace-nowrap transition-colors
                    ${activeTab === t.id ? 'text-blue-600' : 'text-slate-500 hover:text-slate-800'}`}
                >
                  {t.icon} {t.label}
                  {activeTab === t.id && <motion.div layoutId="tab-indicator" className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600" />}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-12 min-h-[300px]">
            <AnimatePresence mode="wait">
              {activeTab === 'projects' && (
                <motion.div key="p" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {PROJECTS.map((p) => (
                    <div key={p.id} onClick={() => onProjectClick(p)} className="group bg-white rounded-2xl overflow-hidden cursor-pointer border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col">
                      <div className="aspect-video overflow-hidden relative">
                        <img src={p.image} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt={p.title} />
                        <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors" />
                      </div>
                      <div className="p-6 flex-1 flex flex-col">
                         <span className="text-xs font-bold text-blue-600 mb-2">{p.category}</span>
                         <h4 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">{p.title}</h4>
                         <p className="text-sm text-slate-500 line-clamp-2">{p.description}</p>
                      </div>
                    </div>
                  ))}
                </motion.div>
              )}

              {activeTab === 'stack' && (
                <motion.div key="s" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {TECH_STACK.map((s, i) => (
                    <div key={i} className="p-6 border border-slate-200 rounded-2xl bg-white flex items-center gap-4 hover:border-blue-300 hover:shadow-md transition-all group">
                      <div className="p-3 bg-slate-50 text-slate-600 rounded-xl group-hover:bg-blue-600 group-hover:text-white transition-colors">
                        {s.icon}
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900">{s.name}</h4>
                        {/* <p className="text-xs font-medium text-slate-500">{s.level}</p> */}
                      </div>
                    </div>
                  ))}
                </motion.div>
              )}

              {activeTab === 'exp' && (
                <motion.div key="e" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="space-y-8">
                  {EXPERIENCE.map((e, i) => (
                    <div key={i} className="pl-8 border-l-2 border-slate-200 relative">
                      <div className="absolute left-[-9px] top-1 w-4 h-4 rounded-full bg-white border-4 border-blue-600" />
                      <span className="text-sm font-bold text-blue-600 mb-1 block">{e.year}</span>
                      <h4 className="text-xl font-bold text-slate-900">{e.role}</h4>
                      <span className="text-sm font-medium text-slate-500 mb-3 block">{e.company}</span>
                      <p className="text-base text-slate-600 leading-relaxed max-w-3xl">{e.desc}</p>
                    </div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
}