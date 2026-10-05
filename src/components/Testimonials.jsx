import React from 'react';
import { Star, MessageSquareQuote, CheckCircle2 } from 'lucide-react';
import { testimonials } from '../data/content';

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 md:py-28 relative bg-dark-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-xs font-semibold text-amber-300 mb-4">
            <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
            KEPUASAN KLIEN
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight mb-4">
            Apa Kata Mereka Tentang{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-cyanAccent-400">
              Pal's Project?
            </span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg font-light">
            Pengalaman langsung dari para founder dan pemimpin bisnis yang telah mempercayakan kehadiran digital mereka kepada tim kami.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="rounded-2xl bg-dark-850/80 border border-white/10 p-7 sm:p-8 flex flex-col justify-between hover:border-brand-500/30 transition-all duration-300 hover:-translate-y-1"
            >
              <div>
                {/* Rating Stars */}
                <div className="flex items-center gap-1 mb-6">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                  ))}
                  <span className="text-xs text-slate-400 ml-2 font-mono">5.0 / 5.0</span>
                </div>

                {/* Quote text */}
                <p className="text-sm text-slate-200 leading-relaxed font-light italic mb-8">
                  "{item.content}"
                </p>
              </div>

              {/* Author info */}
              <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="w-11 h-11 rounded-full object-cover ring-2 ring-brand-500/40"
                />
                <div>
                  <h4 className="font-display font-bold text-sm text-white flex items-center gap-1.5">
                    {item.name}
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyanAccent-400" />
                  </h4>
                  <p className="text-xs text-slate-400">
                    {item.role}
                  </p>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
