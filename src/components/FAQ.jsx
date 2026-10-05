import React, { useState } from 'react';
import { HelpCircle, ChevronDown } from 'lucide-react';
import { faqs } from '../data/content';

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState(0);

  const toggle = (idx) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 md:py-28 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-500/10 border border-brand-500/20 text-xs font-semibold text-brand-300 mb-4">
            <HelpCircle className="w-3.5 h-3.5 text-cyanAccent-400" />
            PERTANYAAN UMUM
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl text-white tracking-tight mb-4">
            Kerap Ditanyakan{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-cyanAccent-400">
              (FAQ)
            </span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base font-light">
            Segala hal yang perlu Anda ketahui sebelum memulai kolaborasi pembuatan website bersama Pal's Project.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'bg-dark-850/90 border-brand-500/40 shadow-lg shadow-brand-500/5'
                    : 'bg-dark-900/60 border-white/10 hover:border-white/20'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                >
                  <span className="font-display font-bold text-base sm:text-lg text-white">
                    {faq.q}
                  </span>
                  <div className={`w-8 h-8 rounded-full bg-dark-950 border border-white/10 flex items-center justify-center flex-shrink-0 text-slate-300 transition-transform duration-200 ${
                    isOpen ? 'rotate-180 text-cyanAccent-400 border-cyanAccent-500/30' : ''
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm text-slate-300 leading-relaxed font-light border-t border-white/5 animate-fadeIn">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
