import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { siteConfig } from '../data/content';

export default function WhatsAppFloating() {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <aside aria-label="WhatsApp Contact Button" className="fixed bottom-6 right-6 z-40 flex items-end gap-3">
      {/* Interactive Tooltip Chat Bubble */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-3 p-3.5 rounded-2xl bg-dark-900/95 border border-emerald-500/40 shadow-2xl backdrop-blur-md animate-fadeIn max-w-xs">
          <div className="flex-1">
            <div className="flex items-center gap-1.5 mb-1">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
              <span className="text-[11px] font-bold text-white uppercase tracking-wider">Tim Pal's Project Online</span>
            </div>
            <p className="text-xs text-slate-300 font-light">
              Konsultasi pembuatan website gratis? Yuk, ngobrol langsung di WhatsApp!
            </p>
          </div>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-slate-400 hover:text-white p-1"
            aria-label="Tutup pesan bantuan"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Action Circle Button */}
      <a
        href={`https://wa.me/${siteConfig.whatsapp}?text=Halo%20Pal's%20Project,%20saya%20tertarik%20untuk%20konsultasi%20pembuatan%20website`}
        target="_blank"
        rel="noopener noreferrer"
        className="relative group w-14 h-14 rounded-full bg-gradient-to-tr from-emerald-600 to-teal-500 hover:from-emerald-500 hover:to-teal-400 text-white flex items-center justify-center shadow-xl shadow-emerald-500/30 hover:shadow-emerald-500/50 hover:scale-110 active:scale-95 transition-all duration-300"
        aria-label="Chat WhatsApp Pal's Project"
      >
        <MessageCircle className="w-7 h-7 fill-white text-emerald-600" />
        
        {/* Pulsing Green Online Indicator */}
        <span className="absolute top-1 right-1 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-300 border-2 border-dark-950"></span>
        </span>
      </a>
    </aside>
  );
}
