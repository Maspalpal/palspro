import React from 'react';
import { Check, Sparkles, ArrowRight, ShieldCheck, Zap } from 'lucide-react';
import { pricingPlans, siteConfig } from '../data/content';

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyanAccent-500/10 border border-cyanAccent-500/20 text-xs font-semibold text-cyanAccent-400 mb-4">
            <Zap className="w-3.5 h-3.5" />
            INVESTASI TRANSPARAN & TERJANGKAU
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight mb-4">
            Pilihan Paket Pengembangan{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-cyanAccent-400">
              Website Eksklusif
            </span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg font-light">
            Biaya terjangkau dengan mutu korporat berkelas tinggi. Seluruh paket sudah termasuk nama domain .COM dan hosting cloud selama 1 tahun penuh.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {pricingPlans.map((plan) => {
            const isHighlight = plan.highlight;

            return (
              <div
                key={plan.id}
                className={`relative rounded-3xl p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 ${
                  isHighlight
                    ? 'bg-gradient-to-b from-dark-850 via-dark-900 to-dark-950 border-2 border-brand-500 shadow-2xl shadow-brand-500/20 lg:-translate-y-4'
                    : 'bg-dark-900/80 border border-white/10 hover:border-white/20'
                }`}
              >
                {/* Popular Badge */}
                {isHighlight && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-brand-500 to-cyanAccent-500 text-white shadow-md flex items-center gap-1.5">
                      <Sparkles className="w-3 h-3" />
                      Paling Populer & Diminati
                    </span>
                  </div>
                )}

                <div>
                  {/* Top info */}
                  <div className="mb-4">
                    <span className="text-xs font-semibold text-slate-400 block mb-1">
                      {plan.badge}
                    </span>
                    <h3 className="font-display font-bold text-2xl text-white">
                      {plan.name}
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 mb-6 font-light min-h-[40px]">
                    {plan.desc}
                  </p>

                  {/* Price */}
                  <div className="mb-8 pb-6 border-b border-white/10">
                    <div className="flex items-baseline gap-1">
                      <span className="font-display font-black text-3xl sm:text-4xl text-white tracking-tight">
                        {plan.price}
                      </span>
                      <span className="text-xs text-slate-400">/ proyek</span>
                    </div>
                    <span className="text-[11px] text-emerald-400 block mt-1">
                      Sudah termasuk Domain .COM & Hosting 1 Thn
                    </span>
                  </div>

                  {/* Features List */}
                  <div className="space-y-3 mb-8">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-3">
                      Fitur yang Anda Dapatkan:
                    </span>
                    {plan.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-200">
                        <div className="w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="w-2.5 h-2.5 stroke-[3]" />
                        </div>
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action CTA */}
                <div>
                  <a
                    href={`https://wa.me/${siteConfig.whatsapp}?text=Halo%20Pal's%20Project,%20saya%20tertarik%20dengan%20${encodeURIComponent(plan.name)}%20(${encodeURIComponent(plan.price)})`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full py-3.5 px-6 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-all duration-300 ${
                      isHighlight
                        ? 'bg-gradient-to-r from-brand-600 via-indigo-600 to-cyanAccent-600 text-white shadow-lg shadow-brand-500/30 hover:shadow-brand-500/50 hover:scale-[1.02]'
                        : 'bg-white/10 hover:bg-white/15 text-white border border-white/10'
                    }`}
                  >
                    <span>{plan.cta}</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>

                  <p className="text-[11px] text-slate-400 text-center mt-3 font-light">
                    Konsultasi gratis via WhatsApp sebelum mulai
                  </p>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
