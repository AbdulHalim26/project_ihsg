"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const roadmapData = {
  dasar: [
    { step: 1, title: "Mengenal Dunia Saham", descCard: "Memahami saham sebagai kepemilikan bisnis & sejarah pasar modal di Indonesia.", modules: "3 modul", level: "Dasar", contentTitle: "Mengenal Dunia Saham", contentDesc: "Membangun landasan berpikir yang benar tentang investasi. Di sini, Anda akan membedah definisi saham bukan sekadar angka di layar, melainkan bukti nyata kepemilikan aset sebuah bisnis. Modul ini juga menelusuri sejarah panjang pasar modal di Indonesia untuk memberikan perspektif bagaimana bursa efek bertumbuh menjadi pilar ekonomi bangsa yang aman dan terpercaya." },
    { step: 2, title: "Ekosistem Bursa Efek", descCard: "Mengenal peran OJK, IDX, KSEI, dan cara transaksi saham di balik layar.", modules: "3 modul", level: "Dasar", contentTitle: "Ekosistem Bursa Efek (BEI)", contentDesc: "Memahami siapa saja 'pemain' di balik layar pasar modal. Anda akan mempelajari peran vital OJK sebagai pengawas, IDX sebagai penyelenggara bursa, serta KSEI dan KPEI sebagai penjaga keamanan aset Anda. Pengetahuan ini penting agar Anda merasa aman berinvestasi." },
    { step: 3, title: "Persiapan Rekening Dana Nasabah", descCard: "Panduan memilih sekuritas legal dan cara praktis membuka akun investasi.", modules: "3 modul", level: "Dasar", contentTitle: "Persiapan Rekening Dana Nasabah", contentDesc: "Langkah praktis untuk memulai perjalanan investasi Anda secara legal. Kami menyediakan panduan komprehensif dalam memilih perusahaan sekuritas yang memiliki kredibilitas tinggi dan biaya transaksi yang kompetitif. Anda akan dibimbing melalui proses pembukaan akun secara online." },
    { step: 4, title: "Membaca Aplikasi Trading", descCard: "Bid, Offer, Lot, ARA (Auto Reject Atas), dan ARB (Auto Reject Bawah).", modules: "4 modul", level: "Dasar", contentTitle: "Membaca Aplikasi Trading", contentDesc: "Menguasai 'bahasa' pasar agar Anda bisa bertransaksi dengan percaya diri. Langkah ini mengupas tuntas fitur-fitur utama dalam aplikasi trading, mulai dari memahami antrean jual-beli (Bid & Offer) hingga satuan lot." }
  ],
  menengah: [
    { step: 1, title: "Bedah Laporan Keuangan", descCard: "Memahami data mentah perusahaan dari tiga pilar utama dengan baik.", modules: "4 modul", level: "Menengah", contentTitle: "Bedah Laporan Keuangan", contentDesc: "Langkah pertama menuju kemandirian analisis adalah memahami data mentah perusahaan: Neraca, Laba Rugi, dan Arus Kas." }
  ],
  mahir: [
    { step: 1, title: "Money Management", descCard: "Menghitung berapa persen modal yang boleh masuk ke dalam satu aset.", modules: "3 modul", level: "Mahir", contentTitle: "Money Management & Position Sizing", contentDesc: "Level mahir dimulai dengan teknik Position Sizing untuk membatasi risiko secara matematis dan logis, sehingga modal Anda tetap aman saat krisis melanda." }
  ]
};

const investorsData = [
  { id: "inv-1", src: "/ihsg/LKH.jpg", name: "Lo Kheng Hong", title: "Warren Buffett Indonesia", bio: "Value investor legendaris. Bukti nyata bahwa sabar berinvestasi di bursa saham lokal (IHSG) bisa membawa kebebasan finansial sejati." },
  { id: "inv-2", src: "/ihsg/warren.png", name: "Warren Buffett", title: "The Oracle of Omaha", bio: "Kiblat value investing dunia. Mengajarkan kita pentingnya membeli bisnis yang luar biasa dengan harga yang masuk akal." },
  { id: "inv-3", src: "/ihsg/andri.jpeg", name: "Andri Hakim", title: "Investor Muda Inspiratif", bio: "Mewakili generasi muda yang sukses meraup profit konsisten dari bursa saham Indonesia dengan analisis yang tajam dan realistis." },
  { id: "inv-4", src: "/ihsg/rivankurniawan.jpeg", name: "Rivan Kurniawan", title: "Indonesia Value Investor", bio: "Praktisi dan edukator saham yang membuktikan bahwa memahami fundamental perusahaan adalah kunci kemenangan jangka panjang." },
  { id: "inv-5", src: "/ihsg/radityadika.jpeg", name: "Raditya Dika", title: "Kreator & Investor", bio: "Membuktikan bahwa siapa saja, dari latar belakang apa saja, bisa dan wajib mulai berinvestasi demi masa depan yang tenang." },
];

export default function EdukasiPage() {
  const [activeTab, setActiveTab] = useState("dasar");
  const [selectedInvestor, setSelectedInvestor] = useState(null);

  return (
    <main className="min-h-screen bg-[#0B1120] text-white font-sans overflow-x-hidden relative">
      <div className="h-32 w-full block shrink-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-32 relative z-10">
        
        {/* --- HEADER --- */}
        <div className="flex flex-col items-center justify-center text-center mb-16 relative z-10">
          <h1 className="text-3xl md:text-3xl font-bold tracking-wide uppercase mb-6 leading-tight drop-shadow-lg">
            Stock Investor Roadmap
          </h1>
          <p className="text-slate-400 max-w-2xl mx-auto text-sm md:text-base leading-relaxed font-light">
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
                className={`flex justify-center items-center rounded-full text-lg font-bold tracking-widest transition-all duration-300 border-2 hover:border-slate-500`}
                style={{ 
                  padding: '16px 48px',
                  minWidth: '160px',
                  // INI FINAL JURUS TABS: 
                  backgroundColor: activeTab === tab ? '#ffffff' : '#1E293B', // Putih kalau aktif, abu-abu transparan/gelap kalau mati
                  color: activeTab === tab ? '#0B1120' : '#94a3b8',               // Teks gelap kalau aktif, abu-abu kalau mati
                  borderColor: activeTab === tab ? '#ffffff' : 'transparent',     // Border putih kalau aktif
                  boxShadow: activeTab === tab ? '0 0 20px rgba(255,255,255,0.3)' : 'none' // Efek nyala/glowing
                }}
              >
                {tab.toUpperCase()}
              </button>
            </div>

          ))}
        </div>

        {/* --- TIMELINE SECTION --- */}
        <div className="relative w-full mx-auto max-w-6xl">
          <div className="hidden md:block absolute left-1/2 top-4 bottom-4 w-[2px] bg-slate-300 -translate-x-1/2 z-0"></div>

          <AnimatePresence mode="wait">
            <motion.div 
              key={activeTab}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.3 }}
              className="w-full flex flex-col relative z-10" 
            >
              {roadmapData[activeTab].map((item, index) => (
                <div key={index} className="flex flex-col md:flex-row w-full items-stretch relative z-10 gap-8 md:gap-0" style={{ paddingBottom: index === roadmapData[activeTab].length - 1 ? '0px' : '110px' }}>
                  
                  {/* --- KIRI: KARTU --- */}
                  <div className="flex-1 w-full flex justify-center md:justify-end md:pr-10 lg:pr-16 relative z-10 items-start">
                    <div className="bg-[#1E293B] rounded-xl p-6 w-full max-w-[280px] border border-slate-700 shadow-xl flex flex-col justify-between transition-all">
                      <div>
                        <span className="text-[10px] font-bold text-emerald-400 mb-2 flex items-center gap-1.5 uppercase tracking-wider">
                          <svg width="12" height="12" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path></svg>
                          Langkah {item.step}
                        </span>
                        <h3 className="text-[13px] font-bold text-white mb-3 leading-tight">{item.title}</h3>
                        <p className="text-slate-300 text-[12px] leading-relaxed mb-6 font-light">{item.descCard}</p>
                      </div>
                      <div className="flex items-center gap-4 text-[11px] font-medium text-slate-300 border-t border-slate-700 pt-4 mt-auto">
                        <span className="flex items-center gap-1">📄 {item.modules}</span>
                        <span className="flex items-center gap-1">📊 {item.level}</span>
                      </div>
                    </div>
                  </div>

                  {/* --- TENGAH: ANGKA & GARIS --- */}
                  <div className="hidden md:flex flex-none w-16 flex-col items-center justify-start relative z-20">
                    {index !== roadmapData[activeTab].length - 1 && (
                      <div className="absolute top-0 bottom-0 w-[2px] bg-slate-400 -z-10"></div>
                    )}
                    <div className="text-xl font-bold text-white relative z-10 bg-[#0B1120] py-2 px-3 mt-1 rounded-md">
                      {item.step}
                    </div>
                  </div>

                  {/* --- KANAN: TEKS PENJELASAN --- */}
                  <div className="flex-1 w-full flex justify-start md:pl-10 lg:pl-16 relative z-10 items-start pt-0 md:pt-3">
                    <div className="w-full">
                      <h3 className="text-xl md:text-2xl font-bold text-white mb-3 leading-snug">{item.contentTitle}</h3>
                      <p className="text-sm md:text-[13px] text-justify md:text-left text-slate-300 font-light leading-relaxed">
                        {item.contentDesc}
                      </p>
                    </div>
                  </div>

                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="w-full h-20 md:h-56 block shrink-0"></div>

        {/* --- SECTION: INVESTOR HEBAT --- */}
        <div className="mt-28 mb-16 text-center relative z-10">
          <h2 className="text-2xl md:text-2xl font-['Inter'] mb-16 tracking-tight">
            Jadilah investor hebat seperti mereka
          </h2>
          
          <div className="flex flex-col items-center gap-y-20 w-full">
            
            <div className="flex justify-center items-center w-full max-w-[350px] mx-auto -space-x-8 relative z-10">
              {investorsData.map((inv, index) => (
                <motion.div 
                  key={inv.id} 
                  onClick={() => setSelectedInvestor(inv)} 
                  whileHover={{ y: -10, scale: 1.1, zIndex: 30 }}
                  className={`w-20 h-20 rounded-full border-4 ${selectedInvestor?.id === inv.id ? 'border-emerald-500 scale-110' : 'border-[#0B1120]'} shadow-[0_0_25px_rgba(255,255,255,0.08)] relative z-10 cursor-pointer overflow-hidden transition-all duration-300 opacity-95 group hover:opacity-100 hover:shadow-[0_0_30px_rgba(72,187,120,0.3)]`}
                  style={{ zIndex: investorsData.length - index }}
                >
                  <img src={inv.src} alt={inv.name} className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110" />
                </motion.div>
              ))}
            </div>

            {/* Kotak Detail Investor */}
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
                  <div className="bg-slate-800/80 backdrop-blur-md rounded-3xl p-8 md:p-10 border border-slate-700 shadow-2xl relative text-left flex flex-col md:flex-row items-center md:items-start gap-8">
                    
                    {/* Tombol Close X */}
                    <button 
                      onClick={() => setSelectedInvestor(null)} 
                      className="absolute flex items-center justify-center bg-slate-700/80 hover:bg-slate-600 rounded-full text-slate-300 hover:text-white transition-all z-50 border border-slate-500/50 cursor-pointer"
                      style={{ 
                        width: '40px',
                        height: '40px',
                        top: '24px', 
                        right: '24px' 
                      }}
                    >
                      ✕
                    </button>

                    {/* Foto Besar di dalam Banner */}
                    <div className="w-32 h-32 shrink-0 rounded-full border-4 border-slate-600 overflow-hidden shadow-lg mt-8 md:mt-0 md:ml-12">
                      <img src={selectedInvestor.src} alt={selectedInvestor.name} className="w-full h-full object-cover" />
                    </div>

                    {/* Teks Penjelasan (Pakai bio, title, name sesuai datamu) */}
                    <div className="flex-1 text-center md:text-left mt-2 md:mt-0">
                      <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-1 tracking-tight">
                        {selectedInvestor.name}
                      </h3>
                      <p className="text-emerald-400 text-sm md:text-base font-semibold mb-4 uppercase tracking-widest">
                        {selectedInvestor.title}
                      </p>
                      <p className="text-slate-300 leading-relaxed font-light text-sm md:text-base">
                        {selectedInvestor.bio}
                      </p>
                    </div>

                  </div>
                </motion.div>
              )}
            </AnimatePresence>

          {/* 👇 INI PENUTUP BUNGKUS BARUNYA 👇 */}
          </div>
          

          <button className="bg-[#1E293B] hover:bg-slate-700 text-white font-semibold py-4 px-12 rounded-xl transition-all border border-slate-600 hover:border-white shadow-lg active:scale-95">
            Mulai Belajar
          </button>
        </div>

        {/* --- BANNER --- */}
        <div className="mt-24 w-full h-[300px] rounded-3xl relative overflow-hidden shadow-2xl">
          <img src="/photos/banners.jpg" alt="Edukasi Banner" className="absolute inset-0 w-full h-full object-cover z-0" onError={(e) => { e.target.style.display = 'none'; e.target.parentNode.style.backgroundColor = '#1E293B'; }} />
          <div className="z-10 text-center relative flex flex-col items-center justify-center h-full">
             <h1 className="text-5xl md:text-6xl font-black text-white italic tracking-tighter mb-2 shadow-black drop-shadow-lg">KITA SEMUA</h1>
             <h2 className="text-4xl md:text-5xl font-black text-white italic tracking-tighter shadow-black drop-shadow-lg">ADALAH INVESTOR</h2>
          </div>
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white to-transparent z-1"></div>
        </div>

      </div>
    </main>
  );
}