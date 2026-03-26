"use client";

import React, { useState, useEffect } from "react"; 
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from 'next/navigation';

const roadmapData = {
  dasar: [
    { 
      step: 1, 
      title: "Mengenal Dunia Saham", 
      slug: "mengenal-dunia-saham",
      descCard: "Memahami saham sebagai kepemilikan bisnis & sejarah pasar modal di Indonesia.", 
      modules: "3 modul", 
      level: "Dasar", 
      contentTitle: "Mengenal Dunia Saham", 
      contentDesc: "Membangun landasan berpikir yang benar tentang investasi..." 
    },
    { 
      step: 2, 
      title: "Ekosistem Bursa Efek", 
      slug: "ekosistem-bursa-efek", 
      descCard: "Mengenal peran OJK, IDX, KSEI, dan cara transaksi saham di balik layar.", 
      modules: "3 modul", 
      level: "Dasar", 
      contentTitle: "Ekosistem Bursa Efek (BEI)", 
      contentDesc: "Memahami siapa saja 'pemain' di balik layar pasar modal..." 
    },
    { 
      step: 3, 
      title: "Persiapan Rekening Dana Nasabah", 
      slug: "persiapan-rekening-dana-nasabah", 
      descCard: "Panduan memilih sekuritas legal dan cara praktis membuka akun investasi.", 
      modules: "3 modul", 
      level: "Dasar", 
      contentTitle: "Persiapan Rekening Dana Nasabah", 
      contentDesc: "Langkah praktis untuk memulai perjalanan investasi Anda secara legal..." 
    },
    { 
      step: 4, 
      title: "Membaca Aplikasi Trading", 
      slug: "membaca-aplikasi-trading", 
      descCard: "Bid, Offer, Lot, ARA (Auto Reject Atas), dan ARB (Auto Reject Bawah).", 
      modules: "4 modul", 
      level: "Dasar", 
      contentTitle: "Membaca Aplikasi Trading", 
      contentDesc: "Menguasai 'bahasa' pasar agar Anda bisa bertransaksi dengan percaya diri..." 
    }
  ],
menengah: [
    { 
      step: 1, 
      title: "Bedah Laporan Keuangan", 
      slug: "bedah-laporan-keuangan",
      descCard: "Memahami data mentah perusahaan dari tiga pilar utama dengan baik.", 
      modules: "Modul", 
      level: "Menengah", 
      contentTitle: "Bedah Laporan Keuangan", 
      contentDesc: "Langkah pertama menuju kemandirian analisis adalah memahami data mentah perusahaan. Di sini Anda akan belajar membedah Neraca, Laba Rugi, dan Arus Kas untuk mengetahui kesehatan asli sebuah bisnis." 
    },
    { 
      step: 2, 
      title: "Valuasi Saham (Murah vs Mahal)", 
      slug: "valuasi-saham-dasar",
      descCard: "Belajar menghitung PER dan PBV agar tidak membeli saham kemahalan.", 
      modules: "Modul", 
      level: "Menengah", 
      contentTitle: "Valuasi Saham Dasar", 
      contentDesc: "Perusahaan bagus belum tentu sahamnya layak dibeli jika harganya sudah terlalu mahal. Pelajari metrik valuasi dasar seperti Price to Earning Ratio (PER) dan Price to Book Value (PBV)." 
    },
    { 
      step: 3, 
      title: "Analisa Teknikal Lanjutan", 
      slug: "analisa-teknikal-lanjutan",
      descCard: "Membaca Trend, Support, Resistance, dan indikator Moving Average.", 
      modules: "Modul", 
      level: "Menengah", 
      contentTitle: "Analisa Teknikal Lanjutan", 
      contentDesc: "Tingkatkan skill membaca grafik Anda. Temukan titik pantul harga (Support) dan titik rawan turun (Resistance), serta pahami arah tren menggunakan indikator Moving Average." 
    },
    { 
      step: 4, 
      title: "Corporate Action", 
      slug: "corporate-action",
      descCard: "Memahami efek Dividen, Right Issue, dan Stock Split pada harga saham.", 
      modules: "Modul", 
      level: "Menengah", 
      contentTitle: "Corporate Action (Aksi Korporasi)", 
      contentDesc: "Perusahaan sering melakukan aksi yang mengubah struktur sahamnya. Pahami jebakan 'Dividend Trap' dan manfaatkan peluang dari Right Issue atau Stock Split." 
    }
  ],
  mahir: [
    { 
      step: 1, 
      title: "Money Management", 
      slug: "money-management",
      descCard: "Menghitung persentase modal dan membatasi risiko secara matematis.", 
      modules: "Modul", 
      level: "Mahir", 
      contentTitle: "Money Management & Position Sizing", 
      contentDesc: "Level mahir dimulai dengan teknik Position Sizing untuk membatasi risiko secara matematis dan logis. Anda akan belajar cara agar modal Anda tetap aman meski pasar sedang krisis." 
    },
    { 
      step: 2, 
      title: "Bandarmologi & Broker Summary", 
      slug: "bandarmologi",
      descCard: "Melacak jejak uang besar (Big Fund) dan investor asing di pasar.", 
      modules: "Modul", 
      level: "Mahir", 
      contentTitle: "Bandarmologi (Ilmu Arus Dana)", 
      contentDesc: "Harga saham digerakkan oleh uang besar. Pelajari cara membaca Broker Summary untuk mendeteksi apakah saham sedang diakumulasi (dikumpulkan) atau didistribusi (dibuang) oleh institusi besar." 
    },
    { 
      step: 3, 
      title: "Makro Ekonomi & Siklus Sektoral", 
      slug: "makro-ekonomi",
      descCard: "Pengaruh suku bunga, inflasi, dan nilai tukar terhadap IHSG.", 
      modules: "Modul", 
      level: "Mahir", 
      contentTitle: "Makro Ekonomi & Sektoral", 
      contentDesc: "Investor besar melihat kondisi dunia sebelum membeli saham. Pahami bagaimana keputusan The Fed, tingkat inflasi, dan rotasi sektor bisnis sangat mempengaruhi portofolio Anda." 
    },
    { 
      step: 4, 
      title: "Menyusun Trading Plan", 
      slug: "trading-plan",
      descCard: "Membuat sistem trading mandiri yang mekanis dan tanpa emosi.", 
      modules: "Modul", 
      level: "Mahir", 
      contentTitle: "Menyusun Trading/Investing Plan", 
      contentDesc: "Lulus dari AKSARA berarti Anda bisa mandiri. Rangkum semua ilmu Anda ke dalam satu rencana baku: kapan harus beli, kapan harus Hold, dan kapan harus Cut Loss tanpa penyesalan." 
    }
  ]
};

const investorsData = [
  { id: "inv-1", src: "/ihsg/LKH.jpg", name: "Lo Kheng Hong", title: "Warren Buffett Indonesia", bio: "Value investor legendaris. Bukti nyata bahwa sabar berinvestasi di bursa saham lokal (IHSG) bisa membawa kebebasan finansial sejati." },
  { id: "inv-2", src: "/ihsg/warren.png", name: "Warren Buffett", title: "The Oracle of Omaha", bio: "Kiblat value investing dunia. Mengajarkan kita pentingnya membeli bisnis yang luar biasa dengan harga yang masuk akal." },
  { id: "inv-3", src: "/ihsg/andri.jpeg", name: "Andry Hakim", title: "Investor Muda Inspiratif", bio: "Mewakili generasi muda yang sukses meraup profit konsisten dari bursa saham Indonesia dengan analisis yang tajam dan realistis." },
  { id: "inv-4", src: "/ihsg/rivankurniawan.jpeg", name: "Rivan Kurniawan", title: "Indonesia Value Investor", bio: "Praktisi dan edukator saham yang membuktikan bahwa memahami fundamental perusahaan adalah kunci kemenangan jangka panjang." },
  { id: "inv-5", src: "/ihsg/radityadika.jpeg", name: "Raditya Dika", title: "Kreator & Investor", bio: "Membuktikan bahwa siapa saja, dari latar belakang apa saja, bisa dan wajib mulai berinvestasi demi masa depan yang tenang." },
];

export default function EdukasiPage() {
 const [activeTab, setActiveTab] = useState("dasar");
  const [selectedInvestor, setSelectedInvestor] = useState(null);
  const searchParams = useSearchParams();
  const tabQuery = searchParams.get('tab');

  useEffect(() => {
    if (tabQuery === 'dasar' || tabQuery === 'menengah' || tabQuery === 'mahir') {
      setActiveTab(tabQuery);
    }
  }, [tabQuery]);

  return (
    <main className="min-h-screen font-sans overflow-x-hidden relative bg-slate-50 text-slate-900 dark:bg-[#0B1120] dark:text-white transition-colors duration-300">
      <div className="h-32 w-full block shrink-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-32 relative z-10">
        
        {/* --- HEADER --- */}
        <div className="flex flex-col items-center justify-center text-center mb-16 relative z-10">
          <h1 className="text-3xl md:text-3xl font-bold tracking-wide uppercase mb-6 leading-tight drop-shadow-lg text-slate-900 dark:text-white">
            Stock Investor Roadmap
          </h1>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-sm md:text-base leading-relaxed font-light">
            Alur belajar investasi paling komprehensif untuk mencetak investor cerdas. Kurikulum ini dirancang secara sistematis untuk memandu Anda menguasai analisis fundamental hingga manajemen risiko pasar modal secara rasional.
          </p>
        </div>

        {/* --- TABS --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 w-full max-w-5xl mx-auto items-center relative z-10 font-['Inter'] px-4" style={{ marginBottom: '80px' }}>
          {["dasar", "menengah", "mahir"].map((tab, index) => (
            <div 
              key={tab} 
              className={`flex ${
                index === 0 ? "justify-center md:justify-start" :
                index === 1 ? "justify-center" :
                "justify-center md:justify-end"
              }`}
            >
              <button
                onClick={() => setActiveTab(tab)}
                className={`flex justify-center items-center rounded-full text-lg font-bold tracking-widest transition-all duration-300 border-2 ${
                  activeTab === tab 
                    ? "bg-slate-900 text-white border-slate-900 shadow-[0_5px_15px_rgba(0,0,0,0.1)] dark:bg-white dark:text-[#0B1120] dark:border-white dark:shadow-[0_0_20px_rgba(255,255,255,0.3)]" 
                    : "bg-slate-200 text-slate-500 border-transparent hover:border-slate-300 dark:bg-[#1E293B] dark:text-slate-400 dark:hover:border-slate-500"
                }`}
                style={{ 
                  padding: '16px 48px',
                  minWidth: '160px',
                }}
              >
                {tab.toUpperCase()}
              </button>
            </div>
          ))}
        </div>

        {/* --- TIMELINE SECTION --- */}
        <div className="relative w-full mx-auto max-w-6xl">
          <div className="hidden md:block absolute left-1/2 top-4 bottom-4 w-[2px] bg-slate-300 dark:bg-slate-700 -translate-x-1/2 z-0 transition-colors duration-300"></div>

          <AnimatePresence mode="wait">
            <motion.div 
              key={activeTab}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.3 }}
              className="w-full flex flex-col relative z-10" 
            >
              {roadmapData[activeTab].map((item, index) => {

              return (
                <Link 
                  href={`/edukasi/${item.slug}`} 
                  key={index} 
                  className="flex flex-col md:flex-row w-full items-stretch relative z-10 gap-8 md:gap-0 group cursor-pointer" 
                  style={{ paddingBottom: index === roadmapData[activeTab].length - 1 ? '0px' : '110px' }}
                >
                  
                  {/* --- BAGIAN KIRI (CARD) --- */}
                  <div className="flex-1 w-full flex justify-center md:justify-end md:pr-10 lg:pr-16 relative z-10 items-start">
                    <div className="bg-white dark:bg-[#1E293B] rounded-xl p-7 w-full max-w-[360px] border border-slate-200 dark:border-slate-700 shadow-lg dark:shadow-xl flex flex-col justify-between transition-all group-hover:border-emerald-500 dark:group-hover:border-emerald-400 group-hover:shadow-emerald-500/10 dark:group-hover:shadow-emerald-400/20">
                      <div>
                        <span className="text-[11px] font-bold text-emerald-600 dark:text-emerald-400 mb-3 flex items-center gap-1.5 uppercase tracking-wider">
                          <svg width="12" height="12" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path></svg>
                          Langkah {item.step}
                        </span>
                        <h3 className="text-base font-bold text-slate-900 dark:text-white mb-3 leading-tight">{item.title}</h3>
                        
                        <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-6 font-light">{item.descCard}</p>
                      </div>
                      <div className="flex items-center gap-4 text-xs font-medium text-slate-500 dark:text-slate-400 border-t border-slate-100 dark:border-slate-700 pt-4 mt-auto">
                        <span className="flex items-center gap-1">📄 Modul</span>
                        <span className="flex items-center gap-1">📊 {item.level}</span>
                      </div>
                    </div>
                  </div>

                  {/* --- BAGIAN TENGAH (ANGKA TIMELINE) --- */}
                  <div className="hidden md:flex flex-none w-16 flex-col items-center justify-start relative z-20">
                    {index !== roadmapData[activeTab].length - 1 && (
                      <div className="absolute top-0 bottom-0 w-[2px] bg-slate-300 dark:bg-slate-700 -z-10 transition-colors duration-300"></div>
                    )}
                    <div className="text-xl font-bold text-slate-900 dark:text-white relative z-10 bg-slate-50 dark:bg-[#0B1120] py-2 px-3 mt-1 rounded-md transition-colors group-hover:text-emerald-600 dark:group-hover:text-emerald-400">
                      {item.step}
                    </div>
                  </div>

                  {/* --- BAGIAN KANAN (KONTEN TEKS) --- */}
                  <div className="flex-1 w-full flex justify-start md:pl-10 lg:pl-16 relative z-10 items-start pt-0 md:pt-3">
                    <div className="w-full">
                      <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-3 leading-snug transition-colors group-hover:text-emerald-600 dark:group-hover:text-emerald-400">{item.contentTitle}</h3>
                      <p className="text-sm md:text-[13px] text-justify md:text-left text-slate-600 dark:text-slate-300 font-light leading-relaxed">
                        {item.contentDesc}
                      </p>
                    </div>
                  </div>

                </Link>
              );
            })}
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="w-full h-20 md:h-56 block shrink-0"></div>

        {/* --- SECTION: INVESTOR HEBAT --- */}
        <div className="mt-28 mb-16 text-center relative z-10">
          <h2 className="text-2xl md:text-2xl font-['Inter'] mb-16 tracking-tight text-slate-900 dark:text-white">
            Jadilah investor hebat seperti mereka
          </h2>
          
          <div className="flex flex-col items-center gap-y-20 w-full">
            <div className="flex justify-center items-center w-full max-w-[350px] mx-auto -space-x-8 relative z-10">
              {investorsData.map((inv, index) => (
                <motion.div 
                  key={inv.id} 
                  onClick={() => setSelectedInvestor(inv)} 
                  whileHover={{ y: -10, scale: 1.1, zIndex: 30 }}
                  className={`w-20 h-20 rounded-full border-4 ${selectedInvestor?.id === inv.id ? 'border-emerald-500 scale-110' : 'border-slate-50 dark:border-[#0B1120]'} shadow-[0_0_15px_rgba(0,0,0,0.1)] dark:shadow-[0_0_25px_rgba(255,255,255,0.08)] relative z-10 cursor-pointer overflow-hidden transition-all duration-300 opacity-95 group hover:opacity-100 hover:shadow-[0_0_20px_rgba(72,187,120,0.4)]`}
                  style={{ zIndex: investorsData.length - index }}
                >
                  <img src={inv.src} alt={inv.name} className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110" />
                </motion.div>
              ))}
            </div>

            <AnimatePresence mode="wait">
              {selectedInvestor && (
                <motion.div
                  key={selectedInvestor.id}
                  initial={{ opacity: 0, y: -20, height: 0 }}
                  animate={{ opacity: 1, y: 0, height: "auto" }}
                  exit={{ opacity: 0, y: -20, height: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="w-full max-w-4xl mx-auto relative overflow-hidden z-30" 
                  style={{ marginTop: '80px' }} 
                >
                  <div className="bg-white/90 dark:bg-slate-800/80 backdrop-blur-md rounded-2xl p-8 md:p-10 border border-slate-200 dark:border-slate-700 shadow-2xl relative text-left flex flex-col md:flex-row items-center md:items-start gap-8 overflow-hidden transition-colors duration-300">
                    <button 
                      onClick={() => setSelectedInvestor(null)} 
                      className="absolute flex items-center justify-center bg-slate-200 dark:bg-slate-700/80 hover:bg-slate-300 dark:hover:bg-slate-600 rounded-full text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-all z-50 border border-slate-300 dark:border-slate-500/50 cursor-pointer"
                      style={{ width: '40px', height: '40px', top: '24px', right: '24px' }}
                    >
                      ✕
                    </button>

                    <div className="w-32 h-32 shrink-0 rounded-full border-4 border-slate-200 dark:border-slate-600 overflow-hidden shadow-lg mt-8 md:mt-0 md:ml-12">
                      <img src={selectedInvestor.src} alt={selectedInvestor.name} className="w-full h-full object-cover" />
                    </div>

                    <div className="flex-1 text-center md:text-left mt-2 md:mt-0">
                      <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white mb-1 tracking-tight">{selectedInvestor.name}</h3>
                      <p className="text-emerald-600 dark:text-emerald-400 text-sm md:text-base font-semibold mb-4 uppercase tracking-widest">{selectedInvestor.title}</p>
                      <p className="text-slate-600 dark:text-slate-300 leading-relaxed font-light text-sm md:text-base">{selectedInvestor.bio}</p>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

    </main>
    
  );
}