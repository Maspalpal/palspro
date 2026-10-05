import React, { useState } from 'react';
import { 
  Send, 
  MessageCircle, 
  Mail, 
  MapPin, 
  Clock, 
  CheckCircle2, 
  Sparkles, 
  ArrowRight 
} from 'lucide-react';
import { siteConfig } from '../data/content';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    brand: '',
    whatsapp: '',
    websiteType: 'Company Profile Korporat',
    budget: 'Rp 2.000.000 - Rp 5.000.000',
    notes: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Create WhatsApp encoded link
    const text = `Halo Pal's Project, saya ingin mengajukan brief proyek website baru:%0A%0A` +
      `*Nama:* ${formData.name}%0A` +
      `*Brand / Bisnis:* ${formData.brand || '-'}%0A` +
      `*WhatsApp:* ${formData.whatsapp}%0A` +
      `*Jenis Website:* ${formData.websiteType}%0A` +
      `*Perkiraan Budget:* ${formData.budget}%0A` +
      `*Detail Kebutuhan:* ${formData.notes || 'Ingin konsultasi terlebih dahulu'}%0A%0A` +
      `Mohon informasikan langkah selanjutnya. Terima kasih!`;

    const waUrl = `https://wa.me/${siteConfig.whatsapp}?text=${text}`;
    window.open(waUrl, '_blank');
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 md:py-28 relative bg-dark-900/60 overflow-hidden">
      {/* Glow background accent */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-brand-600/15 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-500/10 border border-brand-500/20 text-xs font-semibold text-brand-300 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-cyanAccent-400" />
            MULAI LANGKAH DIGITAL ANDA
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight mb-4">
            Siap Membangun Website{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-cyanAccent-400">
              Impian Bisnis Anda?
            </span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg font-light">
            Diskusikan ide dan kebutuhan Anda secara gratis bersama tim ahli Pal's Project. Kami siap membantu dari nol hingga website siap mendatangkan klien.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Contact Details & Guarantees */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="rounded-2xl bg-dark-850/90 border border-white/10 p-6 sm:p-8 shadow-xl">
              <h3 className="font-display font-bold text-xl text-white mb-2">
                Hubungi Kami Langsung
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mb-6 font-light">
                Lebih suka mengobrol santai tanpa mengisi formulir? Tim kami aktif dan siap merespons dengan cepat.
              </p>

              <div className="space-y-4">
                {/* WhatsApp */}
                <a
                  href={`https://wa.me/${siteConfig.whatsapp}?text=Halo%20Pal's%20Project,%20saya%20ingin%20konsultasi%20website`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl bg-dark-900/80 border border-white/5 hover:border-emerald-500/40 hover:bg-emerald-500/5 transition-all group"
                >
                  <div className="w-11 h-11 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:scale-105 transition-transform">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block">WhatsApp Resmi</span>
                    <span className="text-sm font-bold text-white group-hover:text-emerald-400 transition-colors">
                      {siteConfig.whatsappDisplay}
                    </span>
                  </div>
                </a>

                {/* Email */}
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-4 p-4 rounded-xl bg-dark-900/80 border border-white/5 hover:border-brand-500/40 hover:bg-brand-500/5 transition-all group"
                >
                  <div className="w-11 h-11 rounded-xl bg-brand-500/15 border border-brand-500/30 flex items-center justify-center text-brand-300 group-hover:scale-105 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block">Email Penawaran / RFQ</span>
                    <span className="text-sm font-bold text-white group-hover:text-brand-300 transition-colors">
                      {siteConfig.email}
                    </span>
                  </div>
                </a>

                {/* Location */}
                <div className="flex items-center gap-4 p-4 rounded-xl bg-dark-900/80 border border-white/5">
                  <div className="w-11 h-11 rounded-xl bg-cyanAccent-500/15 border border-cyanAccent-500/30 flex items-center justify-center text-cyanAccent-400">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block">Cakupan Layanan</span>
                    <span className="text-xs font-semibold text-white">
                      {siteConfig.location}
                    </span>
                  </div>
                </div>

                {/* Response Speed */}
                <div className="flex items-center gap-4 p-4 rounded-xl bg-dark-900/80 border border-white/5">
                  <div className="w-11 h-11 rounded-xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-400">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block">Jam Operasional & Respon</span>
                    <span className="text-xs font-semibold text-white">
                      Senin - Sabtu (08.00 - 21.00 WIB) • Balasan &lt;15 Menit
                    </span>
                  </div>
                </div>
              </div>

            </div>

            {/* Quick Benefits Card */}
            <div className="rounded-2xl bg-gradient-to-br from-brand-900/40 to-dark-850 border border-brand-500/20 p-6">
              <h4 className="font-display font-bold text-sm text-white mb-3 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-cyanAccent-400" />
                Jaminan Pelayanan Pal's Project
              </h4>
              <ul className="space-y-2 text-xs text-slate-300 font-light">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                  <span>Konsultasi dan estimasi kebutuhan awal 100% Bebas Biaya.</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                  <span>Transparansi harga tanpa tagihan tersembunyi di kemudian hari.</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                  <span>Source code & akses akun domain sepenuhnya menjadi hak milik Anda.</span>
                </li>
              </ul>
            </div>

          </div>

          {/* Right Column: Briefing Form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl bg-dark-850/90 border border-white/10 p-6 sm:p-8 shadow-2xl relative">
              
              <div className="mb-6">
                <h3 className="font-display font-bold text-xl sm:text-2xl text-white mb-1">
                  Kirim Brief Proyek Anda
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 font-light">
                  Isi data singkat berikut. Formulir akan otomatis terhubung ke WhatsApp kami agar respon dapat segera diberikan.
                </p>
              </div>

              {submitted && (
                <div className="mb-6 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs sm:text-sm flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 flex-shrink-0 text-emerald-400" />
                  <span>Brief Anda telah disusun! Halaman WhatsApp sedang dibuka untuk mengirim pesan.</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Nama Lengkap Anda <span className="text-rose-400">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Contoh: Rian Pratama"
                      className="w-full px-4 py-2.5 rounded-xl bg-dark-900 border border-white/10 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Nama Bisnis / Brand
                    </label>
                    <input
                      type="text"
                      name="brand"
                      value={formData.brand}
                      onChange={handleChange}
                      placeholder="Contoh: Pratama Logistics"
                      className="w-full px-4 py-2.5 rounded-xl bg-dark-900 border border-white/10 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Nomor WhatsApp Aktif <span className="text-rose-400">*</span>
                  </label>
                  <input
                    type="tel"
                    name="whatsapp"
                    required
                    value={formData.whatsapp}
                    onChange={handleChange}
                    placeholder="Contoh: 082178318700"
                    className="w-full px-4 py-2.5 rounded-xl bg-dark-900 border border-white/10 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-colors"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Jenis Website yang Diinginkan
                    </label>
                    <select
                      name="websiteType"
                      value={formData.websiteType}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-xl bg-dark-900 border border-white/10 text-sm text-white focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-colors"
                    >
                      <option value="Company Profile Korporat">Company Profile Korporat</option>
                      <option value="Company Profile UMKM / Starter">Company Profile UMKM</option>
                      <option value="Toko Online / E-Commerce">Toko Online / E-Commerce</option>
                      <option value="High-Converting Landing Page">Landing Page Iklan</option>
                      <option value="Custom Web App / Portal">Aplikasi Web Kustom / Portal</option>
                      <option value="Website Redesign & Optimasi">Redesign Website Lawas</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Perkiraan Anggaran (Budget)
                    </label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-xl bg-dark-900 border border-white/10 text-sm text-white focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-colors"
                    >
                      <option value="< Rp 2.000.000">&lt; Rp 2.000.000</option>
                      <option value="Rp 2.000.000 - Rp 5.000.000">Rp 2.000.000 - Rp 5.000.000</option>
                      <option value="Rp 5.000.000 - Rp 10.000.000">Rp 5.000.000 - Rp 10.000.000</option>
                      <option value="> Rp 10.000.000 (Custom / Enterprise)">&gt; Rp 10.000.000 (Enterprise)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Ceritakan Kebutuhan Proyek Anda (Opsional)
                  </label>
                  <textarea
                    name="notes"
                    rows="3"
                    value={formData.notes}
                    onChange={handleChange}
                    placeholder="Contoh: Kami butuh website modern dengan fitur katalog produk, integrasi WhatsApp multi-admin, dan siap diiklankan di Google Ads..."
                    className="w-full px-4 py-2.5 rounded-xl bg-dark-900 border border-white/10 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-colors resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-brand-600 via-indigo-600 to-cyanAccent-600 hover:from-brand-500 hover:to-cyanAccent-500 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-xl shadow-brand-500/25 hover:shadow-brand-500/40 transition-all duration-300 active:scale-[0.98]"
                >
                  <Send className="w-4 h-4" />
                  Kirim Brief via WhatsApp Sekarang
                  <ArrowRight className="w-4 h-4" />
                </button>

                <p className="text-[11px] text-slate-400 text-center font-light">
                  Data Anda aman dan hanya digunakan untuk keperluan komunikasi proyek.
                </p>

              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
