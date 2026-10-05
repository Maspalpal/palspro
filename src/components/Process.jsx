import React from 'react';
import { 
  Compass, 
  PenTool, 
  Code2, 
  CheckCircle2, 
  Rocket, 
  ArrowRight 
} from 'lucide-react';
import { processSteps } from '../data/content';

const stepIcons = [Compass, PenTool, Code2, CheckCircle2, Rocket];

export default function Process() {
  return (
    <section id="process" className="py-20 md:py-28 relative bg-dark-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-500/10 border border-brand-500/20 text-xs font-semibold text-brand-300 mb-4">
            <Rocket className="w-3.5 h-3.5 text-cyanAccent-400" />
            ALUR KERJA TRANSPARAN
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight mb-4">
            Bagaimana Kami Mewujudkan{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-cyanAccent-400">
              Website Anda
            </span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg font-light">
            Alur kerja yang rapi, transparan, dan terstruktur menjamin proyek selesai tepat waktu dengan standar kualitas tertinggi.
          </p>
        </div>

        {/* 5 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 relative">
          {processSteps.map((step, idx) => {
            const Icon = stepIcons[idx] || Rocket;
            return (
              <div
                key={step.step}
                className="relative rounded-2xl bg-dark-850 border border-white/10 p-6 flex flex-col justify-between group hover:border-brand-500/40 hover:-translate-y-2 transition-all duration-300"
              >
                <div>
                  {/* Top Step Number & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-display font-black text-3xl text-brand-500/40 group-hover:text-brand-400 transition-colors">
                      {step.step}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-dark-950 border border-white/10 flex items-center justify-center text-cyanAccent-400 group-hover:bg-brand-600 group-hover:text-white transition-all">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="font-display font-bold text-base text-white mb-2 group-hover:text-cyanAccent-300 transition-colors">
                    {step.title}
                  </h3>

                  <p className="text-xs text-slate-300 leading-relaxed font-light">
                    {step.desc}
                  </p>
                </div>

                {/* Step indicator bar */}
                <div className="mt-6 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] text-slate-400">
                  <span>Tahap {idx + 1} dari 5</span>
                  <ArrowRight className="w-3.5 h-3.5 text-brand-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
