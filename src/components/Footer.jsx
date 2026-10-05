import React from 'react';
import { ArrowUp, Sparkles, MessageCircle, Mail, Globe, Heart } from 'lucide-react';
import { siteConfig } from '../data/content';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-dark-950 border-t border-white/10 pt-16 pb-12 relative overflow-hidden">
      
      {/* Background radial accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-24 bg-brand-500/10 rounded-full blur-[90px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/5">
          
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-brand-600 to-cyanAccent-400 p-[1.5px]">
                <div className="w-full h-full bg-dark-900 rounded-[10px] flex items-center justify-center font-display font-black text-white text-lg">
                  P
                </div>
              </div>
              <span className="font-display font-bold text-xl text-white tracking-wide">
                Pal's Project
              </span>
            </div>
            
            <p className="text-slate-300 text-sm leading-relaxed max-w-md font-light mb-6">
              Agensi spesialis jasa pembuatan website berkelas premium, company profile, e-commerce, dan sistem web kustom yang dirancang dengan estetika mewah, kode bersih, dan fokus pada konversi bisnis.
            </p>

            <div className="flex items-center gap-3 text-xs text-slate-400">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-emerald-400">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                Open for New Projects
              </span>
            </div>
          </div>

          {/* Col 2: Layanan */}
          <div className="lg:col-span-3">
            <h4 className="font-display font-bold text-sm text-white uppercase tracking-wider mb-4">
              Layanan Utama
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-300">
              <li><a href="#services" className="hover:text-cyanAccent-400 transition-colors">Company Profile Korporat</a></li>
              <li><a href="#services" className="hover:text-cyanAccent-400 transition-colors">E-Commerce & Toko Online</a></li>
              <li><a href="#services" className="hover:text-cyanAccent-400 transition-colors">High-Converting Landing Page</a></li>
              <li><a href="#services" className="hover:text-cyanAccent-400 transition-colors">Aplikasi Web & Dashboard</a></li>
              <li><a href="#services" className="hover:text-cyanAccent-400 transition-colors">Website Redesign & Speed Audit</a></li>
            </ul>
          </div>

          {/* Col 3: Navigasi Cepat */}
          <div className="lg:col-span-2">
            <h4 className="font-display font-bold text-sm text-white uppercase tracking-wider mb-4">
              Navigasi
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-300">
              <li><a href="#hero" className="hover:text-cyanAccent-400 transition-colors">Beranda</a></li>
              <li><a href="#why-us" className="hover:text-cyanAccent-400 transition-colors">Keunggulan</a></li>
              <li><a href="#portfolio" className="hover:text-cyanAccent-400 transition-colors">Portofolio</a></li>
              <li><a href="#calculator" className="hover:text-cyanAccent-400 transition-colors">Kalkulator Biaya</a></li>
              <li><a href="#pricing" className="hover:text-cyanAccent-400 transition-colors">Paket Harga</a></li>
              <li><a href="#faq" className="hover:text-cyanAccent-400 transition-colors">Tanya Jawab</a></li>
            </ul>
          </div>

          {/* Col 4: Kontak Cepat */}
          <div className="lg:col-span-2">
            <h4 className="font-display font-bold text-sm text-white uppercase tracking-wider mb-4">
              Hubungi Kami
            </h4>
            <ul className="space-y-3 text-xs text-slate-300">
              <li>
                <a
                  href={`https://wa.me/${siteConfig.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-emerald-400 transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                  <span>WhatsApp Chat</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-2 hover:text-brand-300 transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-brand-400" />
                  <span>{siteConfig.email}</span>
                </a>
              </li>
              <li className="flex items-center gap-2 text-slate-400">
                <Globe className="w-3.5 h-3.5 text-cyanAccent-400" />
                <span>Indonesia</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Copyright & Back to top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p className="flex items-center gap-1.5">
            © {new Date().getFullYear()} <strong className="text-slate-200 font-semibold">{siteConfig.name}</strong>. Seluruh Hak Cipta Dilindungi.
          </p>

          <div className="flex items-center gap-4">
            <span className="text-slate-400 flex items-center gap-1">
              Didesain dengan <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500 inline" /> untuk Pertumbuhan Bisnis Anda
            </span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-dark-900 border border-white/10 hover:border-brand-500 hover:text-white transition-colors"
              aria-label="Kembali ke atas"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
