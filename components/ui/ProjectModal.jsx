"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { X, ExternalLink } from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <motion.div 
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      className="fixed inset-0 z-[150] flex items-center justify-center p-4 md:p-12 bg-slate-900/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div 
        initial={{ scale: 0.95, opacity: 0, y: 20 }} animate={{ scale: 1, opacity: 1, y: 0 }} exit={{ scale: 0.95, opacity: 0, y: 20 }}
        className="bg-white border border-slate-200 w-full max-w-5xl rounded-3xl overflow-hidden flex flex-col md:flex-row max-h-[90vh] shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="w-full md:w-[55%] bg-slate-100 overflow-hidden">
          <img src={project.image} alt={project.title} className="w-full h-full object-contain bg-slate-100" />
        </div>
        <div className="w-full md:w-[45%] flex flex-col p-8 md:p-10 overflow-y-auto bg-white text-slate-800">
          <div className="flex justify-between items-center mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full">Project Details</span>
            <button onClick={onClose} className="p-2 hover:bg-slate-100 rounded-full transition-colors text-slate-500"><X size={20}/></button>
          </div>
          <h3 className="text-3xl font-bold tracking-tight mb-4">{project.title}</h3>
          <p className="text-base text-slate-600 leading-relaxed mb-8">{project.description}</p>
          
          <div className="space-y-6 flex-1">
            <div>
              <h4 className="text-sm font-semibold text-slate-900 mb-3">Technologies Used</h4>
              <div className="flex flex-wrap gap-2">
                {project.tags.map(t => <span key={t} className="px-3 py-1.5 bg-slate-100 border border-slate-200 rounded-lg text-sm font-medium text-slate-700">{t}</span>)}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}