import React from 'react';

export default function Footer() {
  return (
    <footer className="py-12 bg-white border-t border-slate-200 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <div className="font-extrabold text-2xl tracking-tight text-slate-900 mb-2">Ferdynand<span className="text-blue-600">.</span></div>
          <p className="text-sm text-slate-500">Building digital solutions from Tabalong.</p>
        </div>
        
        <p className="text-sm font-medium text-slate-500">
          © {new Date().getFullYear()} Ferdynand Silalahi. All rights reserved.
        </p>
      </div>
    </footer>
  );
}