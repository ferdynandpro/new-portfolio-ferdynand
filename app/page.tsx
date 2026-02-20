// src/app/page.jsx
"use client";
import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';

// Imports (Pastikan alias @/ mengarah ke folder src kamu)
import ProjectModal from '@/components/ui/ProjectModal';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Contact from '@/components/sections/Contact';
import Navbar from '@/components/layouts/Navbar';
import Footer from '@/components/layouts/Footer';

export default function Home() {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      const sections = ['home', 'about', 'contact'];
      const current = sections.find(section => {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 300 && rect.bottom >= 300;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-slate-50 text-slate-900 font-sans antialiased overflow-x-hidden selection:bg-blue-200 selection:text-blue-900">
      
      <Navbar isScrolled={isScrolled} activeSection={activeSection} />

      <Hero />
      <About onProjectClick={setSelectedProject} />
      <Contact />
      <Footer />

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal 
            project={selectedProject} 
            onClose={() => setSelectedProject(null)} 
          />
        )}
      </AnimatePresence>

    </div>
  );
}