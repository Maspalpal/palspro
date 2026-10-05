import React from 'react';
import { 
  Building2, 
  ShoppingBag, 
  Target, 
  Layers, 
  Sparkles, 
  Check, 
  ArrowRight,
  RefreshCw 
} from 'lucide-react';
import { servicesData, siteConfig } from '../data/content';

const serviceIcons = {
  "company-profile": Building2,
  "ecommerce": ShoppingBag,
  "landing-page": Target,
  "web-app": Layers,
  "redesign": RefreshCw
};

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyanAccent-500/10 border border-cyanAccent-500/20 text-xs font-semibold text-cyanAccent-400 mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            LAYANAN SPESIALIS KAMI
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight mb-4">
            Solusi Digital yang Disesuaikan dengan{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-cyanAccent-400">
              Kebutuhan Bisnis Anda
            </span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg font-light">
            Setiap bisnis memiliki keunikan tersendiri. Kami menyediakan berbagai jenis pengembangan website yang terbukti mendatangkan hasil nyata.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => {
            const Icon = serviceIcons[service.id] || Building2;
            const isFeatured = index === 0 || index === 1;

            return (
              <div
                key={service.id}
                className={`relative rounded-2xl bg-dark-900/80 border ${
                  isFeatured ? 'border-brand-500/30 shadow-xl shadow-brand-500/5' : 'border-white/10'
                } p-7 flex flex-col justify-between group hover:border-brand-400/60 hover:-translate-y-1.5 transition-all duration-300`}
              >
                {/* Top Badge */}
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-500/20 to-cyanAccent-500/20 border border-brand-500/30 flex items-center justify-center text-cyanAccent-400 group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    {service.badge && (
                      <span className="px-3 py-1 rounded-full text-[11px] font-semibold bg-brand-500/10 text-brand-300 border border-brand-500/20">
                        {service.badge}
                      </span>
                    )}
                  </div>

                  <h3 className="font-display font-bold text-xl text-white mb-1 group-hover:text-cyanAccent-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs font-semibold text-brand-300 mb-4">
                    {service.subtitle}
                  </p>
                  <p className="text-sm text-slate-300 leading-relaxed mb-6 font-light">
                    {service.desc}
                  </p>

                  {/* Feature Bullets */}
                  <div className="space-y-2.5 mb-6 pt-4 border-t border-white/5">
                    {service.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2.5 text-xs text-slate-200">
                        <div className="w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="w-2.5 h-2.5" />
                        </div>
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Tech Tags & Action */}
                <div>
                  <div className="flex flex-wrap gap-1.5 mb-6 pt-2">
                    {service.tech.map((t, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-dark-950 text-slate-400 border border-white/5"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <a
                    href={`https://wa.me/${siteConfig.whatsapp}?text=Halo%20Pal's%20Project,%20saya%20tertarik%20dengan%20layanan%20${encodeURIComponent(service.title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 px-4 rounded-xl bg-white/5 hover:bg-brand-600 text-slate-200 hover:text-white border border-white/10 hover:border-brand-500 flex items-center justify-center gap-2 text-xs font-semibold transition-all duration-200 group-hover:shadow-lg group-hover:shadow-brand-500/20"
                  >
                    Konsultasi Layanan Ini
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
