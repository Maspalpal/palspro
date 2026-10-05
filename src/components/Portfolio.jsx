import React, { useState } from 'react';
import { 
  FolderGit2, 
  ExternalLink, 
  Sparkles, 
  ArrowUpRight, 
  X, 
  CheckCircle, 
  Layers, 
  TrendingUp 
} from 'lucide-react';
import { portfolioData, siteConfig } from '../data/content';

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = [
    { id: 'all', label: 'Semua Proyek' },
    { id: 'company-profile', label: 'Company Profile' },
    { id: 'ecommerce', label: 'E-Commerce' },
    { id: 'web-app', label: 'Web App' },
    { id: 'landing-page', label: 'Landing Page' },
  ];

  const filteredProjects = activeFilter === 'all'
    ? portfolioData
    : portfolioData.filter(p => p.category === activeFilter);

  return (
    <section id="portfolio" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyanAccent-500/10 border border-cyanAccent-500/20 text-xs font-semibold text-cyanAccent-400 mb-4">
            <FolderGit2 className="w-3.5 h-3.5" />
            SHOWCASE PROYEK UNGGULAN
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight mb-4">
            Karya Pilihan yang{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-cyanAccent-400">
              Membanggakan
            </span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg font-light">
            Jelajahi portofolio website yang kami bangun dengan standar estetika tinggi, kenyamanan pengguna, dan dampak bisnis yang nyata.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveFilter(cat.id)}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 ${
                activeFilter === cat.id
                  ? 'bg-brand-600 text-white shadow-lg shadow-brand-500/30 scale-105'
                  : 'bg-dark-900/80 text-slate-300 hover:text-white hover:bg-dark-800 border border-white/5'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group cursor-pointer rounded-2xl bg-dark-900/90 border border-white/10 overflow-hidden hover:border-brand-500/50 hover:shadow-2xl hover:shadow-brand-500/10 transition-all duration-300 flex flex-col justify-between hover:-translate-y-2"
            >
              {/* Image Thumbnail with Overlay */}
              <div className="relative h-56 sm:h-64 overflow-hidden bg-dark-950">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-transparent to-transparent opacity-80" />
                
                {/* Category Badge Floating */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full text-[11px] font-semibold bg-dark-950/80 backdrop-blur-md text-cyanAccent-300 border border-white/10">
                    {project.categoryLabel}
                  </span>
                </div>

                {/* View Details Icon Floating */}
                <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-dark-950/80 backdrop-blur-md border border-white/10 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <ArrowUpRight className="w-4 h-4 text-cyanAccent-400" />
                </div>

                {/* Metric highlight bottom tag */}
                <div className="absolute bottom-3 left-4 right-4">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-dark-950/90 border border-brand-500/30 text-[11px] font-semibold text-emerald-400 backdrop-blur-sm">
                    <TrendingUp className="w-3.5 h-3.5" />
                    <span>{project.metrics}</span>
                  </div>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[11px] font-medium text-slate-400 block mb-1">
                    {project.client}
                  </span>
                  <h3 className="font-display font-bold text-lg text-white group-hover:text-cyanAccent-300 transition-colors mb-2">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 line-clamp-2 mb-4 font-light">
                    {project.desc}
                  </p>
                </div>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/5">
                  {project.tags.map((t, idx) => (
                    <span
                      key={idx}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-dark-950 text-slate-400 border border-white/5"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Modal Detail Project */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
            <div className="relative w-full max-w-3xl rounded-2xl bg-dark-900 border border-white/15 overflow-hidden shadow-2xl shadow-black/80 max-h-[90vh] flex flex-col">
              
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-dark-950/80 border border-white/10 text-slate-300 hover:text-white flex items-center justify-center transition-colors"
                aria-label="Tutup"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Image Banner */}
              <div className="relative h-64 sm:h-80 w-full overflow-hidden flex-shrink-0 bg-dark-950">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/30 to-transparent" />
                <div className="absolute bottom-4 left-6">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-brand-500 text-white">
                    {selectedProject.categoryLabel}
                  </span>
                  <h3 className="font-display font-black text-2xl sm:text-3xl text-white mt-2">
                    {selectedProject.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-cyanAccent-300 font-medium">
                    {selectedProject.client}
                  </p>
                </div>
              </div>

              {/* Modal Content Details */}
              <div className="p-6 sm:p-8 overflow-y-auto flex-1 space-y-6">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                    Deskripsi Proyek & Solusi
                  </h4>
                  <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-light">
                    {selectedProject.desc} Website ini dirancang khusus oleh tim Pal's Project dengan mempertimbangkan persona audiens, kecepatan akses di jaringan lokal maupun internasional, serta struktur copywriting yang memandu pengunjung melakukan kontak atau pemesanan secara instan.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-dark-950/80 border border-white/5">
                    <span className="text-xs font-medium text-slate-400 block mb-1">Dampak Bisnis Tercapai:</span>
                    <span className="text-sm font-bold text-emerald-400 flex items-center gap-1.5">
                      <CheckCircle className="w-4 h-4" />
                      {selectedProject.metrics}
                    </span>
                  </div>
                  <div className="p-4 rounded-xl bg-dark-950/80 border border-white/5">
                    <span className="text-xs font-medium text-slate-400 block mb-1">Standar Kualitas:</span>
                    <span className="text-sm font-bold text-white flex items-center gap-1.5">
                      <Sparkles className="w-4 h-4 text-cyanAccent-400" />
                      Google Core Web Vitals Passed
                    </span>
                  </div>
                </div>

                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                    Teknologi & Fitur Terintegrasi
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tags.map((t, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 rounded-lg bg-dark-950 border border-white/10 text-xs font-mono text-cyanAccent-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Modal CTA */}
                <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <p className="text-xs text-slate-400 text-center sm:text-left">
                    Ingin website dengan konsep dan kualitas seperti proyek ini?
                  </p>
                  <a
                    href={`https://wa.me/${siteConfig.whatsapp}?text=Halo%20Pal's%20Project,%20saya%20tertarik%20dengan%20konsep%20website%20${encodeURIComponent(selectedProject.title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-brand-600 to-cyanAccent-600 text-white font-semibold text-xs flex items-center justify-center gap-2 shadow-lg shadow-brand-500/25 hover:shadow-brand-500/40 transition-all"
                  >
                    Konsultasikan Konsep Serupa
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}
