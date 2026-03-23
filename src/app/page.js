'use client';
import TradingViewWidget from "@/components/TradingViewWidget";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  const { scrollY } = useScroll();
  
  // Teks Hero nge-blur saat di-scroll ke bawah
  const heroBlur = useTransform(scrollY, [0, 300], ["blur(0px)", "blur(10px)"]);
  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0]);
  const fadeOut = useTransform(scrollY, [0, 350], [1, 0]); // Opacity 1 ke 0 (hilang)
  const blurOut = useTransform(scrollY, [0, 350], ["blur(0px)", "blur(10px)"]); // Tajam ke Burem
  const slideDown = useTransform(scrollY, [0, 350], [0, 100]); // Efek turun dikit (parallax)
  const sec2FadeOut = useTransform(scrollY, [600, 900], [1, 0]); 
  const sec2BlurOut = useTransform(scrollY, [600, 900], ["blur(0px)", "blur(10px)"]);
  

  const stockLogos = [
    { id: 1, name: "BBCA", src: "/ihsg/BBCA.svg", popFinalX: -90, popFinalY: -220 },
    { id: 2, name: "BMRI", src: "/ihsg/BBRI.svg", popFinalX: 90, popFinalY: -200 },
    { id: 3, name: "BREN", src: "/ihsg/BUMI.svg", popFinalX: 0, popFinalY: -270 },
  ];

  return (
    <main className="w-full bg-[#0F172A] min-h-screen font-sans"> 

      {/* ========================================================= */}
      {/* 1. HERO SECTION */}
      {/* ========================================================= */}
      <section className="relative w-full pt-28 lg:pt-32 pb-0 overflow-hidden z-10">
        
        {/* REVISI: Hapus items-end dari grid biar teks gak ikut turun ke bawah */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 px-4 relative z-10 min-h-[500px] lg:min-h-[600px]">
          
          {/* KOLOM KIRI: TEKS */}
          {/* REVISI: Tambah justify-center biar teks rapi di tengah secara vertikal */}
          <motion.div 
            style={{ filter: heroBlur, opacity: heroOpacity }} 
            className="flex flex-col justify-center space-y-6 pt-10 pb-20 lg:py-0"
          >
            <div className="mb-6 lg:mb-10 flex items-end">
              <Image 
                src="/ihsg/A.svg" alt="Huruf A" width={80} height={80} 
                className="w-auto h-16 md:h-20 drop-shadow-md relative z-10 translate-y-1" priority
              />
              <Image 
                src="/ihsg/KSARA.svg" alt="Teks KSARA" width={180} height={60} 
                className="w-auto h-10 md:h-10 drop-shadow-md -ml-1 md:-ml-0 relative z-0 translate-y-0" priority
              />
            </div>

            <div className="mb-4 z-10 relative">
              <Image 
                src="/ihsg/headline.svg" alt="Headline" width={600} height={150}
                className="w-full h-auto drop-shadow-md max-w-[500px] md:max-w-[600px]" priority 
              />
            </div>

            <p className="text-base md:text-lg text-white/80 max-w-lg leading-relaxed mt-4 font-light">
              Belajar analisa fundamental dan teknikal dari nol hingga mahir dengan data yang akurat.
            </p>
          </motion.div>

          {/* KOLOM KANAN: TABUNG */}
          <div className="relative w-full h-[400px] md:h-[500px] lg:h-auto flex justify-center items-end self-end">
            
            {/* 👇 INI DIA WADAH BARU KHUSUS SENSOR SCROLL 👇 */}
            <motion.div 
              style={{
                opacity: fadeOut,
                filter: blurOut,
              }}
              className="relative w-full flex justify-center items-end"
            >
              
              {/* Ini wadah pembatas lebar aslimu (tetap biarkan seperti ini) */}
              <div className="relative w-[90%] md:w-[85%] max-w-[380px]">
                
                {/* --- LAYER 1: KOIN --- */}
                {stockLogos.map((logo, index) => (
                  <motion.div
                    key={logo.id}
                    className="absolute left-1/2 top-1/3 -translate-x-1/2 z-0 w-20 md:w-28"
                    // 1. ANIMASI LOMPAT (Hanya jalan sekali di awal)
                    initial={{ opacity: 0, scale: 0.5, y: 0, x: 0 }}
                    animate={{ opacity: 1, scale: 1, y: logo.popFinalY, x: logo.popFinalX }}
                    transition={{ 
                      duration: 2.0, 
                      delay: index * 0.15, 
                      type: "spring", 
                      bounce: 0.5 
                    }}
                  >
                    {/* 2. ANIMASI NGAMBANG (Jalan terus menerus setelah lompat selesai) */}
                    <motion.div
                      animate={{ y: [0, -15, 0] }}
                      transition={{
                        duration: 3.0,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: index * 0.15 + 0.8 
                      }}
                    >
                      <Image 
                        src={logo.src} 
                        alt={logo.name} 
                        width={120} 
                        height={120} 
                        className="w-full h-auto drop-shadow-lg" 
                      />
                    </motion.div>
                  </motion.div>
                ))}

                {/* --- LAYER 2 & 3: TABUNG --- */}
                <Image src="/ihsg/tabung.svg" alt="Tabung Base" width={400} height={300} className="w-full h-auto relative z-10 drop-shadow-2xl align-bottom" />
                <Image src="/ihsg/h-tabung.svg" alt="Tabung Rim" width={400} height={100} className="absolute -top-3 left-0 w-full h-auto z-20" />
              </div>         
            </motion.div> 
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 2. SECTION MENGAPA AKSARA */}
      {/* ========================================================= */}
      <section className="py-24 relative z-10 bg-[#0B1120]"> 
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div style={{ opacity: sec2FadeOut, filter: sec2BlurOut }}>
          
         <motion.h2 
            initial={{ opacity: 0, y: 20, filter: "blur(10px)" }} // Tambahin awal blur di sini juga
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -20, filter: "blur(10px)" }} // 👇 TAMBAHIN INI BIAR HALUS PAS KELUAR
            viewport={{ once: false, amount: 0.2 }} // Ganti margin jadi amount biar trigger-nya lebih presisi
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-4xl font-bold text-center text-white mb-16"
          >
            Mengapa harus memilih AKSARA?
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* KOTAK 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: 30, filter: "blur(10px)" }} // 👇 TAMBAHIN INI DI TIAP KOTAK
              viewport={{ once: false, amount: 0.1 }} // Ganti ke amount
              transition={{ duration: 0.6, delay: 0.1 }} // Delay disesuaikan urutan kotaknya
              className="bg-[#1E293B] rounded-xl p-8 transition-all duration-300 hover:-translate-y-3 hover:shadow-[0_20px_40px_-15px_rgba(59,130,246,0.3)] border border-white/5 hover:border-blue-500/50 group"
            >
              <h3 className="text-xl font-bold text-white mb-4 text-center group-hover:text-blue-400 transition-colors">
                Analisa Berbasis Data
              </h3>
              <p className="text-slate-300 text-center leading-relaxed text-sm md:text-base font-light">
                Kami menyajikan data saham secara real-time untuk membantu Anda mengambil keputusan investasi yang objektif.
              </p>
            </motion.div>

            {/* KOTAK 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: 30, filter: "blur(10px)" }} // 👇 TAMBAHIN INI DI TIAP KOTAK
              viewport={{ once: false, amount: 0.1 }} // Ganti ke amount
              transition={{ duration: 0.6, delay: 0.1 }} // Delay disesuaikan urutan kotaknya
              className="bg-[#1E293B] rounded-xl p-8 transition-all duration-300 hover:-translate-y-3 hover:shadow-[0_20px_40px_-15px_rgba(59,130,246,0.3)] border border-white/5 hover:border-blue-500/50 group"
            >
              <h3 className="text-xl font-bold text-white mb-4 text-center text-blue-400 group-hover:text-blue-300 transition-colors">
                Kurikulum Terstruktur
              </h3>
              <p className="text-slate-300 text-center leading-relaxed text-sm md:text-base font-light">
                Mulai dari dasar-dasar pasar modal hingga strategi tingkat lanjut yang mudah dipahami pemula.
              </p>
            </motion.div>

            {/* KOTAK 3 */}
            <motion.div 
              initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: 30, filter: "blur(10px)" }} // 👇 TAMBAHIN INI DI TIAP KOTAK
              viewport={{ once: false, amount: 0.1 }} // Ganti ke amount
              transition={{ duration: 0.6, delay: 0.1 }} // Delay disesuaikan urutan kotaknya
              className="bg-[#1E293B] rounded-xl p-8 transition-all duration-300 hover:-translate-y-3 hover:shadow-[0_20px_40px_-15px_rgba(59,130,246,0.3)] border border-white/5 hover:border-blue-500/50 group"
            >
              <h3 className="text-xl font-bold text-white mb-4 text-center group-hover:text-blue-400 transition-colors">
                Komunitas Rasional
              </h3>
              <p className="text-slate-300 text-center leading-relaxed text-sm md:text-base font-light">
                Bergabung dengan ribuan investor lainnya untuk berdiskusi secara sehat tanpa terpengaruh FOMO.
              </p>
            </motion.div>
            

          </div>
          </motion.div>
        </div>
      </section>

    {/* ========================================================= */}
      {/* 3. SECTION MARKET OVERVIEW */}
      {/* ========================================================= */}
      <section className="py-24 relative z-10"> 
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header Section (Kita biarkan reveal-nya saja) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Market <span className="text-blue-400">Overview</span>
            </h2>
            <p className="text-slate-300 font-light max-w-2xl mx-auto">
              Pantau pergerakan Indeks Harga Saham Gabungan (IHSG) dan beberap saham-saham di Indonesia secara real-time.
            </p>
          </motion.div>

          {/* Widget TradingView Container */}
          <motion.div
            initial={{ opacity: 0, y: 30, filter: "blur(10px)" }} // Awal blur-to-sharp
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }} // Reveal animation
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 0.8, delay: 0.2 }} // Durasi reveal
            className="w-full max-w-5xl mx-auto"
          >
            {/* INI DIA PEMANGGILAN WIDGET-NYA */}
            <TradingViewWidget />
          </motion.div>

        </div>
      </section>

    {/* ========================================================= */}
      {/* 4. SECTION KELAS / LEARNING PATH */}
      {/* ========================================================= */}
      <section className="py-24 relative z-10 bg-[#0F172A]"> 
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Mulai Perjalanan <span className="text-blue-400">Belajarmu</span>
            </h2>
            <p className="text-slate-300 font-light max-w-2xl mx-auto">
              Kurikulum yang disusun oleh praktisi berpengalaman. Pilih kelas yang sesuai dengan profil risikomu.
            </p>
          </motion.div>

          {/* Grid Kartu Kelas */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* KARTU 1: PEMULA */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-[#1E293B] rounded-2xl p-8 border border-white/5 relative overflow-hidden group hover:border-blue-500/50 transition-colors"
            >
              {/* Efek Glow di belakang kartu pas di-hover */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-32 bg-blue-500/20 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <span className="inline-block py-1 px-3 rounded-full bg-blue-500/20 text-blue-400 text-xs font-semibold tracking-wider mb-4 border border-blue-500/30">
                  LEVEL 1 • GRATIS
                </span>
                <h3 className="text-2xl font-bold text-white mb-3">Investor Pemula</h3>
                <p className="text-slate-400 font-light text-sm mb-8 leading-relaxed">
                  Pahami apa itu saham, cara kerja bursa efek, dan pengenalan aplikasi sekuritas dari nol.
                </p>
                <Link href="/edukasi?level=pemula" className="inline-flex w-full justify-center items-center py-3 px-4 rounded-xl bg-white/5 hover:bg-blue-600 text-white font-medium transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(37,99,235,0.4)]">
                  Mulai Belajar
                </Link>
              </div>
            </motion.div>

            {/* KARTU 2: MENENGAH */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-[#1E293B] rounded-2xl p-8 border border-white/5 relative overflow-hidden group hover:border-emerald-500/50 transition-colors"
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-32 bg-emerald-500/20 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <span className="inline-block py-1 px-3 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-semibold tracking-wider mb-4 border border-emerald-500/30">
                  LEVEL 2 • PRO
                </span>
                <h3 className="text-2xl font-bold text-white mb-3">Analisa Fundamental</h3>
                <p className="text-slate-400 font-light text-sm mb-8 leading-relaxed">
                  Bedah laporan keuangan, valuasi rasio (PER, PBV), dan cara mencari saham salah harga.
                </p>
                <Link href="/edukasi?level=menengah" className="inline-flex w-full justify-center items-center py-3 px-4 rounded-xl bg-white/5 hover:bg-emerald-600 text-white font-medium transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(16,185,129,0.4)]">
                  Lihat Silabus
                </Link>
              </div>
            </motion.div>

            {/* KARTU 3: MAHIR */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-[#1E293B] rounded-2xl p-8 border border-white/5 relative overflow-hidden group hover:border-purple-500/50 transition-colors"
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-32 bg-purple-500/20 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <span className="inline-block py-1 px-3 rounded-full bg-purple-500/20 text-purple-400 text-xs font-semibold tracking-wider mb-4 border border-purple-500/30">
                  LEVEL 3 • MASTER
                </span>
                <h3 className="text-2xl font-bold text-white mb-3">Teknikal & Bandarmologi</h3>
                <p className="text-slate-400 font-light text-sm mb-8 leading-relaxed">
                  Membaca chart, indikator teknikal lanjutan, dan mendeteksi akumulasi/distribusi big money.
                </p>
                <Link href="/edukasi?level=mahir" className="inline-flex w-full justify-center items-center py-3 px-4 rounded-xl bg-white/5 hover:bg-purple-600 text-white font-medium transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(147,51,234,0.4)]">
                  Lihat Silabus
                </Link>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

    {/* ========================================================= */}
      {/* 5. FOOTER SECTION */}
      {/* ========================================================= */}
      <footer className="bg-[#0B1120] border-t border-white/10 pt-16 pb-8 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Grid Layout buat isi Footer */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            
            {/* Kolom 1: Brand & Deskripsi */}
            <div className="md:col-span-2">
              <Link href="/" className="inline-block mb-6">
                <div className="flex-shrink-0 flex items-center">
                           <Image 
                             src="/logo-aksara.png" 
                             alt="Aksara Logo" 
                             width={200} 
                             height={80} 
                             className="w-auto h-20 object-contain"
                             priority
                           />
                         </div>
              </Link>
              <p className="text-slate-400 font-light text-sm leading-relaxed max-w-sm">
                Langkah Cerdas Menuju Kebebasan Finansial melalui Aksi Saham Rasional. Platform edukasi dan analisis saham terpercaya untuk investor Indonesia.
              </p>
            </div>

            {/* Kolom 2: Navigasi Cepat */}
            <div>
              <h4 className="text-white font-semibold mb-6">Eksplorasi</h4>
              <ul className="space-y-4">
                <li>
                  <Link href="#" className="text-slate-400 hover:text-blue-400 text-sm transition-colors duration-300">
                    Market Overview
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-slate-400 hover:text-blue-400 text-sm transition-colors duration-300">
                    Produk & Layanan
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-slate-400 hover:text-blue-400 text-sm transition-colors duration-300">
                    Kelas Edukasi
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-slate-400 hover:text-blue-400 text-sm transition-colors duration-300">
                    Promosi
                  </Link>
                </li>
              </ul>
            </div>

            {/* Kolom 3: Perusahaan */}
            <div>
              <h4 className="text-white font-semibold mb-6">Perusahaan</h4>
              <ul className="space-y-4">
                <li>
                  <Link href="#" className="text-slate-400 hover:text-blue-400 text-sm transition-colors duration-300">
                    Tentang Kami
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-slate-400 hover:text-blue-400 text-sm transition-colors duration-300">
                    Hubungi Kami
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-slate-400 hover:text-blue-400 text-sm transition-colors duration-300">
                    Syarat & Ketentuan
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-slate-400 hover:text-blue-400 text-sm transition-colors duration-300">
                    Kebijakan Privasi
                  </Link>
                </li>
              </ul>
            </div>
            
          </div>

          {/* Garis Pemisah Bawah */}
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-500 text-xs text-center md:text-left">
              &copy; {new Date().getFullYear()} AKSARA (Aksi Saham Rasional). All rights reserved.
            </p>
            
            {/* Opsional: Tempat buat naruh icon sosmed kalau ada */}
            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:bg-blue-500 hover:text-white transition-all cursor-pointer">
                In
              </div>
              <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:bg-blue-500 hover:text-white transition-all cursor-pointer">
                Ig
              </div>
              <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:bg-blue-500 hover:text-white transition-all cursor-pointer">
                X
              </div>
            </div>
          </div>

        </div>
      </footer>            

    </main>
  );
}