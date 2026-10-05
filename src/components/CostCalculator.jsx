import React, { useState, useMemo } from 'react';
import { 
  Calculator, 
  CheckCircle2, 
  Clock, 
  Sparkles, 
  ArrowRight, 
  HelpCircle, 
  Check, 
  MessageCircle,
  Copy
} from 'lucide-react';
import { calculatorOptions, siteConfig } from '../data/content';

export default function CostCalculator() {
  const [selectedType, setSelectedType] = useState(calculatorOptions.types[1].id); // default Company Profile Starter
  const [selectedFeatures, setSelectedFeatures] = useState(["seo-booster", "livechat-wa"]);
  const [selectedTimeline, setSelectedTimeline] = useState("standard");
  const [copied, setCopied] = useState(false);

  // Toggle feature selection
  const handleToggleFeature = (featId) => {
    if (selectedFeatures.includes(featId)) {
      setSelectedFeatures(selectedFeatures.filter(id => id !== featId));
    } else {
      setSelectedFeatures([...selectedFeatures, featId]);
    }
  };

  // Calculate totals
  const calculation = useMemo(() => {
    const currentType = calculatorOptions.types.find(t => t.id === selectedType) || calculatorOptions.types[0];
    const featuresTotal = selectedFeatures.reduce((acc, featId) => {
      const feat = calculatorOptions.features.find(f => f.id === featId);
      return acc + (feat ? feat.price : 0);
    }, 0);

    const subtotal = currentType.basePrice + featuresTotal;
    const currentTimeline = calculatorOptions.timelines.find(t => t.id === selectedTimeline) || calculatorOptions.timelines[0];
    const total = Math.round(subtotal * currentTimeline.multiplier);

    // Timeline days
    let days = currentType.days;
    if (selectedFeatures.length > 3) days += 2;
    if (selectedTimeline === "express") {
      days = Math.max(2, Math.round(days * 0.7));
    }

    return {
      type: currentType,
      featuresTotal,
      subtotal,
      timeline: currentTimeline,
      total,
      days
    };
  }, [selectedType, selectedFeatures, selectedTimeline]);

  // Format currency
  const formatRupiah = (val) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      maximumFractionDigits: 0
    }).format(val);
  };

  // WhatsApp Pre-filled Message Generator
  const waMessage = useMemo(() => {
    const featNames = selectedFeatures.map(fId => {
      const f = calculatorOptions.features.find(item => item.id === fId);
      return f ? `• ${f.name}` : '';
    }).filter(Boolean).join('%0A');

    const msg = `Halo Pal's Project, saya ingin konsultasi estimasi proyek website:%0A%0A` +
      `*Tipe Website:* ${calculation.type.name}%0A` +
      `*Fitur Tambahan:*%0A${featNames || '• Tidak ada fitur tambahan'}%0A` +
      `*Jadwal:* ${calculation.timeline.name}%0A` +
      `*Estimasi Biaya:* ${formatRupiah(calculation.total)}%0A` +
      `*Estimasi Waktu:* ± ${calculation.days} Hari Kerja%0A%0A` +
      `Mohon informasikan ketersediaan jadwal pengerjaannya. Terima kasih!`;

    return msg;
  }, [calculation, selectedFeatures]);

  const handleCopySummary = () => {
    const featNames = selectedFeatures.map(fId => {
      const f = calculatorOptions.features.find(item => item.id === fId);
      return f ? `- ${f.name}` : '';
    }).filter(Boolean).join('\n');

    const text = `Estimasi Proyek Website Pal's Project:
Tipe Website: ${calculation.type.name}
Fitur Tambahan:
${featNames || '- Standar'}
Jadwal: ${calculation.timeline.name}
Estimasi Total: ${formatRupiah(calculation.total)}
Estimasi Waktu: ± ${calculation.days} Hari Kerja`;

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="calculator" className="py-20 md:py-28 relative bg-dark-900/60 overflow-hidden">
      {/* Background light glow */}
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-brand-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-500/10 border border-brand-500/20 text-xs font-semibold text-brand-300 mb-4">
            <Calculator className="w-3.5 h-3.5 text-cyanAccent-400" />
            KALKULATOR INTERAKTIF
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight mb-4">
            Hitung Estimasi Biaya Website{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-cyanAccent-400">
              Secara Transparan
            </span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg font-light">
            Sesuaikan kebutuhan proyek Anda secara fleksibel. Tanpa biaya tersembunyi, dapatkan perkiraan investasi dan durasi pengerjaan dalam hitungan detik.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left 8 Cols: Interactive Controls */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Step 1: Website Type */}
            <div className="rounded-2xl bg-dark-850/90 border border-white/10 p-6 sm:p-7 shadow-xl">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-brand-400 flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-brand-500/20 text-brand-300 flex items-center justify-center text-xs">1</span>
                  Pilih Jenis Website
                </span>
                <span className="text-xs text-slate-400">Pilih salah satu</span>
              </div>

              <div className="space-y-2.5">
                {calculatorOptions.types.map((type) => {
                  const isSelected = selectedType === type.id;
                  return (
                    <div
                      key={type.id}
                      onClick={() => setSelectedType(type.id)}
                      className={`p-4 rounded-xl cursor-pointer border transition-all duration-200 flex items-center justify-between gap-4 ${
                        isSelected
                          ? 'bg-brand-600/15 border-brand-500 shadow-md shadow-brand-500/10'
                          : 'bg-dark-900/60 border-white/5 hover:border-white/20 hover:bg-dark-900'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${
                          isSelected ? 'border-brand-400 bg-brand-500 text-white' : 'border-slate-600'
                        }`}>
                          {isSelected && <div className="w-2 h-2 rounded-full bg-white" />}
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-white">{type.name}</div>
                          <div className="text-xs text-slate-400 flex items-center gap-2 mt-0.5">
                            <Clock className="w-3 h-3 text-cyanAccent-400" />
                            <span>Durasi estimasi: ~{type.days} hari</span>
                          </div>
                        </div>
                      </div>
                      <div className="text-right flex-shrink-0">
                        <span className="text-xs text-slate-400 block font-light">Mulai dari</span>
                        <span className="text-sm font-bold text-cyanAccent-400">{formatRupiah(type.basePrice)}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Add-on Features */}
            <div className="rounded-2xl bg-dark-850/90 border border-white/10 p-6 sm:p-7 shadow-xl">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-cyanAccent-400 flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-cyanAccent-500/20 text-cyanAccent-300 flex items-center justify-center text-xs">2</span>
                  Fitur Tambahan (Opsional)
                </span>
                <span className="text-xs text-slate-400">Pilih yang Anda butuhkan</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {calculatorOptions.features.map((feat) => {
                  const isChecked = selectedFeatures.includes(feat.id);
                  return (
                    <div
                      key={feat.id}
                      onClick={() => handleToggleFeature(feat.id)}
                      className={`p-3.5 rounded-xl cursor-pointer border transition-all duration-200 flex items-start gap-3 ${
                        isChecked
                          ? 'bg-cyanAccent-500/10 border-cyanAccent-400/60 shadow-sm'
                          : 'bg-dark-900/60 border-white/5 hover:border-white/20 hover:bg-dark-900'
                      }`}
                    >
                      <div className={`w-4 h-4 rounded mt-0.5 flex items-center justify-center flex-shrink-0 border transition-colors ${
                        isChecked ? 'bg-cyanAccent-400 border-cyanAccent-400 text-dark-950' : 'border-slate-600'
                      }`}>
                        {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-xs font-medium text-slate-200 leading-snug">{feat.name}</div>
                        <div className="text-[11px] font-bold text-slate-400 mt-1">+{formatRupiah(feat.price)}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Timeline Urgency */}
            <div className="rounded-2xl bg-dark-850/90 border border-white/10 p-6 sm:p-7 shadow-xl">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-400 flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-amber-500/20 text-amber-300 flex items-center justify-center text-xs">3</span>
                  Kecepatan Pengerjaan
                </span>
                <span className="text-xs text-slate-400">Pilih skala prioritas</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {calculatorOptions.timelines.map((time) => {
                  const isSelected = selectedTimeline === time.id;
                  return (
                    <div
                      key={time.id}
                      onClick={() => setSelectedTimeline(time.id)}
                      className={`p-4 rounded-xl cursor-pointer border transition-all duration-200 ${
                        isSelected
                          ? 'bg-amber-500/15 border-amber-500/80 shadow-md shadow-amber-500/10'
                          : 'bg-dark-900/60 border-white/5 hover:border-white/20 hover:bg-dark-900'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm font-semibold text-white">{time.name}</span>
                        {time.multiplier > 1 && (
                          <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-amber-500/20 text-amber-300">
                            Fast Track
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-slate-400 font-light">{time.label}</p>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Right 5 Cols: Live Estimate Summary Sticky Card */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <div className="rounded-2xl bg-gradient-to-b from-dark-850 via-dark-900 to-dark-950 border border-brand-500/30 p-6 sm:p-7 shadow-2xl shadow-brand-500/15 relative overflow-hidden">
              
              {/* Card top banner */}
              <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-5">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-300">
                  Ringkasan Estimasi
                </span>
                <span className="text-xs font-mono text-emerald-400 flex items-center gap-1.5 bg-emerald-500/10 px-2 py-0.5 rounded">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                  Real-time Kalkulasi
                </span>
              </div>

              {/* Selected Website Type */}
              <div className="mb-4">
                <span className="text-xs text-slate-400 block mb-1">Tipe Website Terpilih:</span>
                <div className="text-base font-bold text-white flex items-center justify-between">
                  <span>{calculation.type.name}</span>
                  <span className="text-slate-300 text-sm">{formatRupiah(calculation.type.basePrice)}</span>
                </div>
              </div>

              {/* Selected Features List */}
              <div className="mb-4 pt-3 border-t border-white/5">
                <span className="text-xs text-slate-400 block mb-2">
                  Fitur Tambahan ({selectedFeatures.length}):
                </span>
                {selectedFeatures.length === 0 ? (
                  <p className="text-xs text-slate-500 italic">Belum ada fitur tambahan dipilih.</p>
                ) : (
                  <div className="space-y-1.5">
                    {selectedFeatures.map(fId => {
                      const f = calculatorOptions.features.find(item => item.id === fId);
                      if (!f) return null;
                      return (
                        <div key={fId} className="flex items-center justify-between text-xs text-slate-300">
                          <span className="truncate pr-2">• {f.name}</span>
                          <span className="text-slate-400 font-mono flex-shrink-0">+{formatRupiah(f.price)}</span>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>

              {/* Timeline Indicator */}
              <div className="mb-6 pt-3 border-t border-white/5 flex items-center justify-between text-xs">
                <span className="text-slate-400">Jadwal Pengerjaan:</span>
                <span className="font-semibold text-amber-300">{calculation.timeline.name}</span>
              </div>

              {/* Total Estimated Box */}
              <div className="rounded-xl bg-dark-950/80 border border-brand-500/40 p-5 mb-6 text-center relative overflow-hidden">
                <div className="text-xs text-slate-400 uppercase tracking-wider mb-1 font-medium">
                  Estimasi Total Investasi
                </div>
                <div className="font-display font-black text-3xl sm:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-brand-300 via-white to-cyanAccent-300 tracking-tight">
                  {formatRupiah(calculation.total)}
                </div>
                <div className="mt-2 text-xs text-emerald-400 flex items-center justify-center gap-1.5 font-medium">
                  <Clock className="w-3.5 h-3.5" />
                  <span>Estimasi Durasi: ± {calculation.days} Hari Kerja</span>
                </div>
              </div>

              {/* WhatsApp Action Button */}
              <a
                href={`https://wa.me/${siteConfig.whatsapp}?text=${waMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/30 transition-all duration-200 active:scale-95 mb-3"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                Konsultasikan Estimasi via WhatsApp
              </a>

              {/* Copy Summary Button */}
              <button
                type="button"
                onClick={handleCopySummary}
                className="w-full py-2.5 px-4 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 flex items-center justify-center gap-2 text-xs font-medium transition-all"
              >
                <Copy className="w-3.5 h-3.5" />
                {copied ? 'Tersalin ke Clipboard!' : 'Salin Rincian Estimasi'}
              </button>

              <p className="mt-4 text-[11px] text-slate-400 text-center font-light leading-relaxed">
                *Estimasi ini bersifat indikatif dan dapat disesuaikan kembali sesuai kebutuhan spesifik bisnis Anda.
              </p>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
