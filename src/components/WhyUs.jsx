import React from 'react';
import { Palette, Zap, Smartphone, ShieldCheck, CheckCircle, Award } from 'lucide-react';
import { whyUsData } from '../data/content';

const iconMap = {
  Palette: Palette,
  Zap: Zap,
  Smartphone: Smartphone,
  ShieldCheck: ShieldCheck,
};

export default function WhyUs() {
  return (
    <section id="why-us" className="py-20 md:py-28 relative overflow-hidden bg-dark-900/50">
      {/* Glow background accent */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-brand-600/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-500/10 border border-brand-500/20 text-xs font-semibold text-brand-300 mb-4">
            <Award className="w-3.5 h-3.5 text-cyanAccent-400" />
            STANDAR KUALITAS TINGGI
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight mb-4">
            Mengapa Mempercayakan Website Anda pada{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-cyanAccent-400">
              Pal's Project?
            </span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg font-light">
            Kami tidak sekadar membuat website online, kami merancang aset digital yang bekerja 24/7 membangun reputasi dan melipatgandakan omset Anda.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {whyUsData.map((item) => {
            const IconComponent = iconMap[item.icon] || ShieldCheck;
            return (
              <div
                key={item.id}
                className="group relative rounded-2xl bg-dark-850/80 border border-white/10 p-6 sm:p-7 hover:border-brand-500/40 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-brand-500/10"
              >
                {/* Accent Icon Glow */}
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${item.gradient} p-0.5 mb-6 shadow-lg shadow-black/40 group-hover:scale-110 transition-transform duration-300`}>
                  <div className="w-full h-full bg-dark-900 rounded-[10px] flex items-center justify-center">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                </div>

                <h3 className="font-display font-bold text-lg text-white mb-3 group-hover:text-cyanAccent-400 transition-colors">
                  {item.title}
                </h3>
                
                <p className="text-sm text-slate-300 leading-relaxed font-light">
                  {item.desc}
                </p>

                {/* Subtle bottom line shine */}
                <div className="absolute bottom-0 left-6 right-6 h-[1px] bg-gradient-to-r from-transparent via-brand-500/0 to-transparent group-hover:via-brand-500/50 transition-all duration-500" />
              </div>
            );
          })}
        </div>

        {/* Comparison Banner */}
        <div className="mt-14 rounded-2xl bg-gradient-to-r from-dark-850 via-dark-800 to-dark-850 border border-white/10 p-6 sm:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-cyanAccent-400">
                Transparansi & Komitmen
              </span>
              <h3 className="font-display font-bold text-xl sm:text-2xl text-white mt-1 mb-3">
                Beda Pal's Project dengan Jasa Website Biasa
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed font-light">
                Banyak jasa website menawarkan harga murah namun menggunakan template bajakan yang berat, rawan diretas, dan tidak bisa disesuaikan. Di Pal's Project, setiap baris kode bersih, berlisensi resmi, dan 100% milik Anda seutuhnya.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="p-3.5 rounded-xl bg-dark-950/60 border border-emerald-500/30">
                <div className="text-xs font-bold text-emerald-400 flex items-center gap-1.5 mb-1">
                  <CheckCircle className="w-3.5 h-3.5" /> Pal's Project
                </div>
                <div className="text-xs text-slate-200">
                  Desain kustom, kode cepat, hosting cloud premium, garansi purnajual aktif.
                </div>
              </div>
              <div className="p-3.5 rounded-xl bg-dark-950/60 border border-rose-500/20 opacity-75">
                <div className="text-xs font-bold text-rose-400 flex items-center gap-1.5 mb-1">
                  ✕ Jasa Web Murahan
                </div>
                <div className="text-xs text-slate-300">
                  Template bajakan usang, lemot, rawan malware, susah dihubungi setelah dibayar.
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
