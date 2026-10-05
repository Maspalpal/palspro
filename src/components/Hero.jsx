import React from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  Zap, 
  Gauge, 
  TrendingUp, 
  Code2, 
  Layers 
} from 'lucide-react';
import { siteConfig } from '../data/content';

export default function Hero() {
  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background Decorative Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[450px] bg-brand-600/15 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[350px] h-[350px] bg-cyanAccent-500/15 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-20 left-10 w-[300px] h-[300px] bg-purple-600/10 rounded-full blur-[100px] pointer-events-none -z-10" />

      {/* Subtle Grid Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none -z-10"
        style={{
          backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
          backgroundSize: '48px 48px'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Copywriting & Actions */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Top Pill Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-brand-500/15 to-cyanAccent-500/15 border border-brand-500/30 mb-6 backdrop-blur-md">
              <Sparkles className="w-4 h-4 text-cyanAccent-400 animate-spin" style={{ animationDuration: '8s' }} />
              <span className="text-xs md:text-sm font-semibold text-slate-200 tracking-wide">
                Jasa Pembuatan Website Modern & Berkelas Tinggi
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.15] mb-6">
              Mewujudkan Website Impian,{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 via-indigo-300 to-cyanAccent-400">
                Mengakselerasi Bisnis Anda
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg md:text-xl text-slate-300 leading-relaxed max-w-2xl mb-8 font-light">
              <strong className="text-white font-semibold">{siteConfig.name}</strong> merancang website custom berkinerja kilat, estetika visual mewah, dan berorientasi konversi tinggi untuk mengangkat kredibilitas bisnis Anda ke level berikutnya.
            </p>

            {/* Key Value Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10 w-full max-w-xl">
              <div className="flex items-center gap-2.5 text-sm text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Desain Eksklusif (Bukan Template Murahan)</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Skor Google PageSpeed 95+ (Kilat)</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Mobile First & SEO Friendly</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Garansi Maintenance & Support Ramah</span>
              </div>
            </div>

            {/* Call to Actions */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
              <a
                href="#calculator"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-gradient-to-r from-brand-600 via-indigo-600 to-cyanAccent-600 text-white font-semibold text-sm sm:text-base shadow-xl shadow-brand-500/25 hover:shadow-brand-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
              >
                <Zap className="w-4 h-4 text-yellow-300 fill-yellow-300" />
                Hitung Estimasi Biaya
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#portfolio"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-white/5 hover:bg-white/10 text-slate-200 hover:text-white font-medium text-sm sm:text-base border border-white/10 hover:border-white/20 transition-all duration-300"
              >
                <Layers className="w-4 h-4 text-cyanAccent-400" />
                Lihat Portofolio
              </a>
            </div>

            {/* Trust Indicator Mini */}
            <div className="mt-8 flex items-center gap-3 text-xs text-slate-400">
              <div className="flex -space-x-2">
                <img className="inline-block h-8 w-8 rounded-full ring-2 ring-dark-900 object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=80&q=80" alt="Client 1" />
                <img className="inline-block h-8 w-8 rounded-full ring-2 ring-dark-900 object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=80&q=80" alt="Client 2" />
                <img className="inline-block h-8 w-8 rounded-full ring-2 ring-dark-900 object-cover" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=80&q=80" alt="Client 3" />
              </div>
              <div>
                <p className="text-slate-300 font-semibold">140+ Bisnis & Korporasi Puas</p>
                <p className="text-[11px] text-slate-400">Rating 4.9/5.0 dari ulasan terverifikasi</p>
              </div>
            </div>

          </div>

          {/* Right Column: High-Tech Interactive Visual Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
              
              {/* Main Simulated Browser Window */}
              <div className="rounded-2xl bg-dark-900/90 border border-white/15 p-4 sm:p-5 shadow-2xl shadow-brand-500/10 backdrop-blur-2xl relative overflow-hidden group">
                
                {/* Window Top Controls */}
                <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block"></span>
                    <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block"></span>
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
                  </div>
                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-dark-950/80 border border-white/5 text-[11px] text-slate-400 font-mono w-48 sm:w-60 truncate justify-center">
                    <span className="text-emerald-400 font-bold">https://</span>
                    <span>palsproject.id/client-preview</span>
                  </div>
                  <div className="w-8"></div>
                </div>

                {/* Showcase Mockup Content Inside Window */}
                <div className="space-y-4">
                  
                  {/* Hero banner inside preview */}
                  <div className="rounded-xl p-5 bg-gradient-to-br from-brand-900/40 via-dark-850 to-dark-800 border border-brand-500/20 relative overflow-hidden">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[11px] font-semibold text-brand-300 uppercase tracking-wider">
                        Next-Gen Web Architecture
                      </span>
                      <span className="px-2 py-0.5 rounded-full text-[10px] bg-emerald-500/20 text-emerald-300 font-mono border border-emerald-500/30">
                        200 OK • FAST
                      </span>
                    </div>
                    <p className="font-display font-bold text-lg sm:text-xl text-white mb-2">
                      Desain Eksklusif yang Menjual
                    </p>
                    <p className="text-xs text-slate-300 line-clamp-2 mb-3 font-light">
                      Kombinasi animasi interaktif, struktur SEO teruji, dan tampilan mewah yang memikat sejak 3 detik pertama.
                    </p>
                    <div className="flex items-center gap-2">
                      <span className="h-2 w-16 bg-brand-500 rounded-full"></span>
                      <span className="h-2 w-10 bg-cyanAccent-400 rounded-full"></span>
                      <span className="h-2 w-6 bg-slate-700 rounded-full"></span>
                    </div>
                  </div>

                  {/* Lighthouse Scores Simulation */}
                  <div className="rounded-xl bg-dark-950/70 border border-white/10 p-4">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <Gauge className="w-4 h-4 text-emerald-400" />
                        <span className="text-xs font-semibold text-white">Google Lighthouse Score</span>
                      </div>
                      <span className="text-[10px] text-emerald-400 font-mono font-bold bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                        Top 1% Tier
                      </span>
                    </div>
                    <div className="grid grid-cols-4 gap-2 text-center">
                      <div className="p-2 rounded-lg bg-dark-850 border border-white/5">
                        <div className="text-base sm:text-lg font-bold text-emerald-400">99</div>
                        <div className="text-[9px] text-slate-400 uppercase font-medium">Performance</div>
                      </div>
                      <div className="p-2 rounded-lg bg-dark-850 border border-white/5">
                        <div className="text-base sm:text-lg font-bold text-emerald-400">100</div>
                        <div className="text-[9px] text-slate-400 uppercase font-medium">Structure</div>
                      </div>
                      <div className="p-2 rounded-lg bg-dark-850 border border-white/5">
                        <div className="text-base sm:text-lg font-bold text-emerald-400">100</div>
                        <div className="text-[9px] text-slate-400 uppercase font-medium">Best Practice</div>
                      </div>
                      <div className="p-2 rounded-lg bg-dark-850 border border-white/5">
                        <div className="text-base sm:text-lg font-bold text-emerald-400">100</div>
                        <div className="text-[9px] text-slate-400 uppercase font-medium">SEO Ready</div>
                      </div>
                    </div>
                  </div>

                  {/* Code Snippet Preview */}
                  <div className="rounded-xl bg-dark-950 border border-white/5 p-3 text-[11px] font-mono text-slate-400">
                    <div className="flex items-center justify-between pb-2 border-b border-white/5 mb-2 text-[10px] text-slate-500">
                      <span>production_ready.tsx</span>
                      <span className="text-brand-400">Pal's Engine v2.4</span>
                    </div>
                    <div className="space-y-1">
                      <p><span className="text-purple-400">const</span> <span className="text-blue-300">palsWebsite</span> = <span className="text-purple-400">await</span> createExperience({`{`}</p>
                      <p className="pl-3"><span className="text-cyan-300">aesthetic</span>: <span className="text-emerald-300">'Luxury & Bespoke'</span>,</p>
                      <p className="pl-3"><span className="text-cyan-300">speed</span>: <span className="text-yellow-300">'&lt; 0.8s'</span>,</p>
                      <p className="pl-3"><span className="text-cyan-300">conversion</span>: <span className="text-indigo-300">'High ROI'</span></p>
                      <p>{`}`});</p>
                    </div>
                  </div>

                </div>

                {/* Floating Badge 1: Speed */}
                <div className="absolute -top-4 -left-4 sm:-left-6 bg-dark-900/95 border border-emerald-500/30 px-3.5 py-2 rounded-xl shadow-xl backdrop-blur-md flex items-center gap-2 animate-float">
                  <div className="w-7 h-7 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                    <Zap className="w-4 h-4 fill-emerald-400" />
                  </div>
                  <div>
                    <div className="text-[10px] text-slate-400 font-medium">Load Speed</div>
                    <div className="text-xs font-bold text-emerald-400">&lt; 0.8 Detik Kilat</div>
                  </div>
                </div>

                {/* Floating Badge 2: Conversion */}
                <div className="absolute -bottom-4 -right-4 sm:-right-6 bg-dark-900/95 border border-brand-500/40 px-3.5 py-2 rounded-xl shadow-xl backdrop-blur-md flex items-center gap-2 animate-float-delayed">
                  <div className="w-7 h-7 rounded-lg bg-brand-500/20 flex items-center justify-center text-brand-400">
                    <TrendingUp className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] text-slate-400 font-medium">Tingkat Konversi</div>
                    <div className="text-xs font-bold text-white">+240% Lebih Tinggi</div>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>

        {/* Stats Section Bar */}
        <div className="mt-20 pt-10 border-t border-white/10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            {siteConfig.stats.map((stat, idx) => (
              <div key={idx} className="flex flex-col items-center md:items-start">
                <span className="font-display font-black text-3xl sm:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-brand-300">
                  {stat.value}
                </span>
                <span className="text-sm font-semibold text-slate-200 mt-1">
                  {stat.label}
                </span>
                <span className="text-xs text-slate-400 text-center md:text-left mt-0.5">
                  {stat.desc}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
