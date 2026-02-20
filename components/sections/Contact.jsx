import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { SOCIAL_CONNECT } from '@/components/data/index.js';

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 md:px-12 lg:px-24 bg-slate-50">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
        <div className="flex-1 space-y-8 text-center lg:text-left">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900">
            Let's Work Together.
          </h2>
          <p className="text-slate-600 text-lg md:text-xl max-w-md mx-auto lg:mx-0 leading-relaxed">
            Have a project idea, need a responsive website, or just want to say hi? Don't hesitate to reach out.
          </p>
          <a href="mailto:ferdynandsilalahipro@gmail.com" className="inline-flex items-center justify-center lg:justify-start gap-4 text-xl md:text-2xl lg:text-3xl font-bold text-blue-600 hover:text-blue-800 transition-colors group">
            ferdynandsilalahipro@gmail.com
            <span className="p-3 bg-blue-100 rounded-full group-hover:bg-blue-200 transition-colors">
               <ArrowUpRight size={24} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </span>
          </a>
        </div>

        <div className="w-full lg:w-[45%] grid grid-cols-2 gap-4">
          {SOCIAL_CONNECT.map((social, i) => (
            <a key={i} href={social.url} target="_blank" rel="noreferrer" className="p-6 bg-white rounded-2xl border border-slate-200 flex flex-col items-center justify-center gap-4 hover:border-blue-400 hover:shadow-lg hover:-translate-y-1 transition-all group">
              <div className="p-4 bg-slate-50 rounded-full text-slate-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                {social.icon}
              </div>
              <div className="text-center">
                <h4 className="text-sm font-bold text-slate-900">{social.name}</h4>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}