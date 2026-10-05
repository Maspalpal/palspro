export const siteConfig = {
  name: "Pal's Project",
  tagline: "High-End Website Development & Digital Experience",
  description: "Kami membantu brand, perusahaan, dan UMKM berkembang pesat melalui website kustom berkecepatan tinggi, estetika visual mewah, dan strategi konversi teruji.",
  whatsapp: "6282178318700",
  whatsappDisplay: "+62 821-7831-8700",
  email: "hello@palsproject.id",
  location: "Jakarta & Surabaya, Indonesia (Melayani Seluruh Indonesia & Global)",
  stats: [
    { value: "140+", label: "Proyek Selesai", desc: "Dari berbagai industri" },
    { value: "99.8%", label: "Tingkat Kepuasan", desc: "Klien repeat order & puas" },
    { value: "< 1.0s", label: "Loading Speed", desc: "Performa Google Lighthouse 95+" },
    { value: "5+ Thn", label: "Pengalaman Dedikasi", desc: "Spesialis modern web dev" },
  ]
};

export const whyUsData = [
  {
    id: "bespoke",
    title: "Desain Eksklusif & Elegan",
    desc: "Bukan template pasaran. Setiap pixel kami rancang khusus untuk merefleksikan identitas brand Anda secara berkelas dan prestisius.",
    icon: "Palette",
    gradient: "from-indigo-500 to-purple-600"
  },
  {
    id: "speed",
    title: "Ultra Fast & SEO Ready",
    desc: "Dibangun dengan teknologi mutakhir untuk performa kilat, skor Google PageSpeed tinggi, dan ramah algoritma mesin pencari.",
    icon: "Zap",
    gradient: "from-cyan-500 to-blue-600"
  },
  {
    id: "responsive",
    title: "100% Responsif di Semua Layar",
    desc: "Tampilan sempurna dan nyaman diakses baik dari smartphone, tablet, hingga monitor resolusi tinggi 4K.",
    icon: "Smartphone",
    gradient: "from-pink-500 to-rose-600"
  },
  {
    id: "support",
    title: "Garansi & Support Responsif",
    desc: "Dukungan penuh pasca-peluncuran, garansi bebas bug, serta panduan pengelolaan website yang mudah dimengerti.",
    icon: "ShieldCheck",
    gradient: "from-amber-500 to-orange-600"
  }
];

export const servicesData = [
  {
    id: "company-profile",
    title: "Company Profile Korporat & Bisnis",
    subtitle: "Tingkatkan Kredibilitas & Kepercayaan Calon Klien",
    desc: "Website representasi resmi perusahaan dengan tampilan elegan, struktur informasi teratur, profil tim, sertifikasi, dan portofolio layanan.",
    features: [
      "Desain UI/UX Eksklusif & Modern",
      "Struktur Menu Profesional & Interaktif",
      "Integrasi WhatsApp & Formulir Penawaran",
      "Optimasi SEO On-Page Dasar",
      "Termasuk Domain .COM & Cloud Hosting"
    ],
    tech: ["Next.js / React", "Tailwind CSS", "SSL Protection", "Analytics Ready"],
    badge: "Pilihan Utama Bisnis"
  },
  {
    id: "ecommerce",
    title: "E-Commerce & Toko Online",
    subtitle: "Konversi Pengunjung Menjadi Pembeli Setia",
    desc: "Platform toko online mandiri tanpa terikat biaya marketplace. Terintegrasi payment gateway lokal (QRIS, VA, Kartu Kredit) dan ongkos kirim otomatis.",
    features: [
      "Manajemen Produk & Inventori Mudah",
      "Integrasi Payment Gateway (Midtrans/Xendit)",
      "Kalkulasi Ongkir Otomatis (JNE, SiCepat, J&T)",
      "Notifikasi Pesanan via WhatsApp & Email",
      "Fitur Promo, Kupon Diskon, & Flash Sale"
    ],
    tech: ["Fullstack Web", "Midtrans / Xendit", "RajaOngkir", "Dashboard Admin"],
    badge: "Tingkatkan Penjualan"
  },
  {
    id: "landing-page",
    title: "High-Converting Landing Page",
    subtitle: "Didesain Khusus untuk Iklan & Lead Generation",
    desc: "Halaman satu fokus dengan copywriting persuasif dan call-to-action yang terukur, sangat efektif untuk kampanye Google Ads, TikTok Ads, dan Meta Ads.",
    features: [
      "Copywriting Berorientasi Penjualan (AIDA)",
      "Loading Kecepatan Tinggi (<1.2 detik)",
      "Integrasi Meta Pixel & Google Tag Manager",
      "Tombol WhatsApp Direct Chat dengan Pesan Kustom",
      "A/B Testing Ready Layout"
    ],
    tech: ["Vite + React", "High Conversion UX", "Tracking Pixels", "Fast CDN"],
    badge: "ROI Maksimal"
  },
  {
    id: "web-app",
    title: "Custom Web App & Internal Portal",
    subtitle: "Digitalisasi Sistem & Operasional Bisnis Anda",
    desc: "Pengembangan aplikasi web kustom seperti dashboard manajemen, sistem booking, portal klien, CRM internal, atau platform SaaS.",
    features: [
      "Arsitektur Database Terukur & Aman",
      "Multi-level User Role & Authentication",
      "Reporting & Export Data (PDF / Excel)",
      "RESTful API Integration",
      "Maintenance & SLA Support Berkala"
    ],
    tech: ["React / Next.js", "Node.js / Python", "PostgreSQL", "Cloud Server"],
    badge: "Solusi Skala Lanjutan"
  },
  {
    id: "redesign",
    title: "Website Redesign & Speed Optimization",
    subtitle: "Upgrade Tampilan & Performa Website Lawas",
    desc: "Punya website lama yang lambat atau terlihat ketinggalan zaman? Kami rombak menjadi berpenampilan mewah, modern, dan secepat kilat.",
    features: [
      "Modernisasi Visual Sesuai Tren Terkini",
      "Optimasi Core Web Vitals & Kecepatan",
      "Pembersihan Skrip & Kompresi Aset",
      "Migrasi Aman Tanpa Kehilangan Data",
      "Audit UX untuk Meningkatkan Retensi Pengunjung"
    ],
    tech: ["Lighthouse 95+", "Asset Minification", "Modern CSS", "Mobile UX"],
    badge: "Transformasi Instan"
  }
];

export const portfolioData = [
  {
    id: 1,
    title: "Nusantara Capital Partners",
    category: "company-profile",
    categoryLabel: "Company Profile",
    client: "Venture Capital & Investment",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=80",
    desc: "Website korporat elegan untuk firma modal ventura terkemuka dengan visual arsitektur modern, laporan portofolio interaktif, dan investor relations.",
    tags: ["React", "Tailwind CSS", "Financial Tech", "Corporate"],
    metrics: "+140% Kredibilitas & Engagement Mitra"
  },
  {
    id: 2,
    title: "Aura Luxe Botanical Skincare",
    category: "ecommerce",
    categoryLabel: "E-Commerce",
    client: "Beauty & D2C Brand",
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1000&q=80",
    desc: "Toko online premium dengan nuansa minimalis mewah, visual showcase produk 360, checkout instan satu klik, dan integrasi QRIS/VA otomatis.",
    tags: ["E-Commerce", "Payment Gateway", "Mobile First", "High Conversion"],
    metrics: "2.8x Peningkatan Penjualan D2C"
  },
  {
    id: 3,
    title: "Svara Smart Logistics Portal",
    category: "web-app",
    categoryLabel: "Web App",
    client: "Supply Chain & Logistics",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80",
    desc: "Dashboard analitik real-time dan sistem tracking armada kontainer terpusat untuk memantau ratusan pengiriman antar pulau.",
    tags: ["Web Application", "Interactive Charts", "PostgreSQL", "Realtime API"],
    metrics: "Hemat 60% Waktu Pelaporan Operasional"
  },
  {
    id: 4,
    title: "Verve Residences & Villas",
    category: "company-profile",
    categoryLabel: "Company Profile",
    client: "Luxury Real Estate Developer",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80",
    desc: "Website showcase properti mewah di Bali dengan galeri virtual tour, spesifikasi unit interaktif, dan formulir private viewing VIP.",
    tags: ["Luxury Property", "Interactive Gallery", "Lead Generation"],
    metrics: "35+ Prospek Pembeli VIP per Bulan"
  },
  {
    id: 5,
    title: "Apex Fitness Masterclass",
    category: "landing-page",
    categoryLabel: "Landing Page",
    client: "Fitness & Wellness Bootcamp",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1000&q=80",
    desc: "Landing page konversi tinggi dengan video hero dinamis, bukti sosial sebelum-sesudah, countdown pendaftaran, dan checkout kilat.",
    tags: ["Landing Page", "Ads Campaign", "A/B Tested", "Conversion Rate"],
    metrics: "Tingkat Konversi Traffic 8.4%"
  },
  {
    id: 6,
    title: "Karsa Sustainable Architects",
    category: "company-profile",
    categoryLabel: "Company Profile",
    client: "Architecture & Interior Studio",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1000&q=80",
    desc: "Portofolio visual arsitektur ramah lingkungan dengan grid editorial minimalis, dark mode halus, dan visual case study mendalam.",
    tags: ["Architecture", "Editorial Layout", "Minimalist Luxury"],
    metrics: "Pemenang Desain Web Digital Eksklusif"
  }
];

export const processSteps = [
  {
    step: "01",
    title: "Konsultasi & Riset Strategi",
    desc: "Kami mendiskusikan visi, target audiens, kompetitor, serta tujuan bisnis Anda untuk merumuskan struktur website yang tepat sasaran."
  },
  {
    step: "02",
    title: "Desain Prototipe UI/UX (Figma)",
    desc: "Kami membuat rancangan visual kustom yang elegan dan modern. Anda dapat meninjau serta memberikan masukan sebelum tahap koding."
  },
  {
    step: "03",
    title: "Development & Integrasi",
    desc: "Proses koding dengan standar performa tinggi, animasi mulus, responsivitas semua perangkat, dan integrasi fitur yang dibutuhkan."
  },
  {
    step: "04",
    title: "Testing, QA & SEO Audit",
    desc: "Uji coba menyeluruh di berbagai browser dan smartphone, pengecekan kecepatan (speed test), keamanan SSL, dan optimasi SEO on-page."
  },
  {
    step: "05",
    title: "Peluncuran & Pendampingan",
    desc: "Website resmi online di domain Anda. Kami berikan panduan penggunaan dan siap sedia memberikan bantuan teknis pasca-launch."
  }
];

export const pricingPlans = [
  {
    id: "starter",
    name: "Paket Starter",
    badge: "Cocok untuk UMKM & Personal",
    price: "Rp 1.950.000",
    priceNumber: 1950000,
    desc: "Pilihan ideal untuk bisnis baru atau personal branding yang membutuhkan kehadiran online yang profesional dan terpercaya.",
    features: [
      "Halaman One-Page / Up to 4 Halaman",
      "Desain Responsif & Modern",
      "Free Domain .COM 1 Tahun",
      "Cloud Hosting Berkecepatan Tinggi",
      "Tombol WhatsApp Direct Chat",
      "Integrasi Google Maps & Media Sosial",
      "Garansi Maintenance 1 Bulan",
      "Waktu Pengerjaan 3 - 5 Hari Kerja"
    ],
    highlight: false,
    cta: "Pilih Starter"
  },
  {
    id: "business-pro",
    name: "Paket Business Pro",
    badge: "Paling Populer & Diminati",
    price: "Rp 3.850.000",
    priceNumber: 3850000,
    desc: "Solusi lengkap untuk perusahaan berkembang yang mengutamakan citra elegan, kredibilitas tinggi, dan keunggulan SEO.",
    features: [
      "Hingga 8 - 10 Halaman Lengkap",
      "Desain Kustom Eksklusif (Figma Preview)",
      "Free Domain .COM + SSL Premium",
      "Cloud Server Berkecepatan Super (<1s)",
      "Sistem Blog / Artikel Berita (CMS Mudah)",
      "SEO On-Page Optimization Komprehensif",
      "Setup Google Analytics & Search Console",
      "Email Bisnis Profesional (nama@bisnisanda.com)",
      "Garansi Maintenance & Support 3 Bulan",
      "Waktu Pengerjaan 7 - 10 Hari Kerja"
    ],
    highlight: true,
    cta: "Mulai Business Pro"
  },
  {
    id: "custom-enterprise",
    name: "Paket Enterprise / Toko Online",
    badge: "Skala Penuh & Kustom",
    price: "Rp 6.500.000+",
    priceNumber: 6500000,
    desc: "Dikhususkan untuk toko online dengan payment gateway lokal, sistem booking kustom, portal web app, atau kebutuhan fitur rumit.",
    features: [
      "Halaman Tanpa Batas / Fitur Kustom Penuh",
      "Integrasi Payment Gateway (QRIS, VA, CC)",
      "Kalkulator Ongkir Otomatis Antar Ekspedisi",
      "Dashboard Manajemen Pesanan & Klien",
      "Desain Interaktif & Animasi Khusus",
      "Prioritas Kecepatan Server & Proteksi DDoS",
      "Pelatihan Admin & Dokumentasi Lengkap",
      "Garansi & Dedicated Priority Support 6 Bulan",
      "Waktu Pengerjaan 14 - 21 Hari Kerja"
    ],
    highlight: false,
    cta: "Konsultasi Enterprise"
  }
];

export const testimonials = [
  {
    id: 1,
    name: "Bambang Sudiro",
    role: "CEO & Founder, PT Megah Nusantara",
    content: "Pal's Project berhasil mengubah citra perusahaan kami 180 derajat. Website baru terasa sangat prestisius, cepat, dan membuat klien B2B kami jauh lebih yakin saat dealing proyek bernilai miliaran.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80"
  },
  {
    id: 2,
    name: "Clarissa Angelica",
    role: "Brand Director, Aura Luxe Skincare",
    content: "Sangat puas dengan hasilnya! Desainnya benar-benar elegan dan tidak pasaran. Checkout e-commerce-nya lancar, pembeli sering memuji tampilan website yang bersih dan estetik.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80"
  },
  {
    id: 3,
    name: "Hendrik Prasetyo",
    role: "Managing Partner, Svara Logistics",
    content: "Komunikasi tim Pal's Project sangat responsif. Proyek selesai tepat waktu dan performa website di smartphone luar biasa cepat. Rekomendasi utama untuk siapa saja yang butuh web dev profesional.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80"
  }
];

export const faqs = [
  {
    q: "Berapa lama waktu yang dibutuhkan untuk membuat website?",
    a: "Durasi tergantung jenis paket dan kompleksitas fitur. Untuk landing page atau paket Starter rata-rata selesai dalam 3-5 hari kerja. Untuk Company Profile Business Pro membutuhkan sekitar 7-10 hari kerja, dan sistem kustom/E-commerce berkisar antara 2-3 minggu."
  },
  {
    q: "Apakah harga sudah termasuk domain dan hosting?",
    a: "Ya! Semua paket kami sudah termasuk biaya sewa nama domain (.COM) dan Cloud Hosting berkecepatan tinggi selama 1 tahun pertama. Anda tinggal terima beres dan siap pakai."
  },
  {
    q: "Apakah saya bisa mengubah atau menambah isi website sendiri nanti?",
    a: "Tentu saja. Kami merancang website dengan panel pengelola konten yang ramah pengguna. Kami juga menyediakan video panduan singkat serta sesi panduan agar tim Anda bisa memperbarui teks, artikel, atau foto produk dengan mudah."
  },
  {
    q: "Bagaimana jika ada kendala atau ingin revisi setelah website selesai?",
    a: "Setiap paket disertai masa garansi maintenance gratis (1 hingga 6 bulan tergantung paket). Jika ada bug teknis, link error, atau penyesuaian teks minor, tim Pal's Project siap membantu dengan responsif."
  },
  {
    q: "Bagaimana alur pembayaran untuk memulai proyek?",
    a: "Umumnya kami membagi pembayaran menjadi 2 tahap yang aman: DP 50% di awal saat kesepakatan desain, dan pelunasan 50% setelah website selesai ditinjau serta siap online di domain utama Anda."
  }
];

// Opsi untuk Kalkulator Estimasi Biaya Interaktif
export const calculatorOptions = {
  types: [
    { id: "landing", name: "High-Converting Landing Page", basePrice: 1500000, days: 3 },
    { id: "company-starter", name: "Company Profile Starter", basePrice: 1950000, days: 5 },
    { id: "company-pro", name: "Company Profile Corporate Pro", basePrice: 3850000, days: 8 },
    { id: "ecommerce", name: "Toko Online / E-Commerce Store", basePrice: 5500000, days: 14 },
    { id: "custom-app", name: "Custom Web App / Portal Bisnis", basePrice: 8500000, days: 21 },
  ],
  features: [
    { id: "multilingual", name: "Dukungan Multi-Bahasa (ID & EN)", price: 650000 },
    { id: "cms-blog", name: "Sistem Manajemen Berita / Blog (CMS)", price: 500000 },
    { id: "payment", name: "Integrasi Payment Gateway (QRIS/VA)", price: 950000 },
    { id: "seo-booster", name: "SEO Booster & Schema Markup Lengkap", price: 600000 },
    { id: "livechat-wa", name: "Integrasi CRM / Multi-CS WhatsApp", price: 350000 },
    { id: "figma-custom", name: "UI/UX Figma Bespoke Design & Prototyping", price: 800000 },
  ],
  timelines: [
    { id: "standard", name: "Jadwal Standar", multiplier: 1.0, label: "Sesuai durasi paket" },
    { id: "express", name: "Express Priority (+30% Lebih Cepat)", multiplier: 1.25, label: "Dikerjakan prioritas" },
  ]
};
