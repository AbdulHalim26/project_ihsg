import Link from 'next/link';
import Image from 'next/image'; 

export const metadata = {
  title: "Promosi & Kemitraan | AKSARA",
  description: "Program Kemitraan dan Promosi Aksara",
};

export default function PromosiPage() {
  return (
    <main className="min-h-screen pt-[120px] pb-20 bg-[#0B1120] text-white font-sans">
      
      {/* ========================================== */}
      {/* SECTION 1: HERO */}
      {/* ========================================== */}
      <section className="text-center px-6 max-w-4xl mx-auto mb-20">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight tracking-tight uppercase">
          Program Kemitraan Dan <br /> Promosi Aksara
        </h1>
        <p className="text-slate-400 text-lg md:text-xl font-light">
          Solusi Terintegrasi untuk jangkau Komunitas Investor Terarah di Platform AKSARA
        </p>
      </section>

      {/* ========================================== */}
      {/* SECTION 2: KEMITRAAN STRATEGIS */}
      {/* ========================================== */}
      <section className="bg-[#151E2D] py-20 px-6 border-y border-slate-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16 uppercase tracking-wider">
            Solusi Kemitraan Strategis
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            
            {/* Card 1 */}
            <div className="bg-[#0B1120] p-8 rounded-2xl border border-slate-700 hover:border-emerald-500/50 transition-all group shadow-xl">
              <div className="mb-6 h-12 flex items-center">
                <Image src="/ihsg/native-ads.svg" alt="Native Ads Icon" width={40} height={40} className="object-contain" />
              </div>
              <h3 className="text-xl font-bold mb-4">Native Mobile Ads</h3>
              <p className="text-emerald-400 font-semibold text-sm mb-4 uppercase tracking-wide">Targeted In-App Placement</p>
              <p className="text-slate-400 text-sm leading-relaxed">
                Sponsor langkah edukasi di learning path dengan tautan unduh aplikasi. Capai user yang siap berinvestasi.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-[#0B1120] p-8 rounded-2xl border border-slate-700 hover:border-emerald-500/50 transition-all group shadow-xl">
              <div className="mb-6 h-12 flex items-center">
                <Image src="/ihsg/referral.svg" alt="Referral Icon" width={40} height={40} className="object-contain" />
              </div>
              <h3 className="text-xl font-bold mb-4">Exclusive Referral</h3>
              <p className="text-emerald-400 font-semibold text-sm mb-4 uppercase tracking-wide">Program Referensi Prioritas</p>
              <p className="text-slate-400 text-sm leading-relaxed">
                Tawarkan kode referensi eksklusif dengan reward saldo RDN untuk user AKSARA yang baru. Dorong konversi langsung.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-[#0B1120] p-8 rounded-2xl border border-slate-700 hover:border-emerald-500/50 transition-all group shadow-xl">
              <div className="mb-6 h-12 flex items-center">
                <Image src="ihsg/sponsored.svg" alt="Sponsored Content Icon" width={40} height={40} className="object-contain" />
              </div>
              <h3 className="text-xl font-bold mb-4">Sponsored Content</h3>
              <p className="text-emerald-400 font-semibold text-sm mb-4 uppercase tracking-wide">Konten & Bedah Fitur</p>
              <p className="text-slate-400 text-sm leading-relaxed">
                Artikel edukasi premium dan bedah fitur mendalam aplikasi Anda untuk membangun kepercayaan dan pemahaman user.
              </p>
            </div>

          </div>

          <div className="flex justify-center">
            <Link 
            href="https://wa.me/6281312333735?text=Halo%20Tim%20Aksara,%20saya%20tertarik%20untuk%20diskusi%20mengenai%20kemitraan." 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-slate-200 hover:bg-white text-slate-900 font-bold py-4 px-8 rounded-xl transition-all shadow-lg hover:shadow-white/20"
            >
            Hubungi Tim Kemitraan Kami
            </Link>     
          </div>
        </div>
      </section>

      {/* ========================================== */}
      {/* SECTION 3: PLATFORM TRADING */}
      {/* ========================================== */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-6 uppercase tracking-wider">
            Pilih Platform Trading <br /> Terbaik & Aman
          </h2>
          <p className="text-center text-slate-400 mb-16">
            Aplikasi Saham Mitra Terbaik Aksara yang Rasional untuk Anda
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Sekuritas 1: Ajaib */}
            <div className="bg-[#151E2D] p-8 rounded-2xl border border-slate-700 flex flex-col hover:-translate-y-2 transition-transform duration-300 shadow-xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full overflow-hidden flex items-center justify-center bg-white">
                  <Image src="/ihsg/ajaib.svg" alt="Ajaib Logo" width={48} height={48} className="object-cover" />
                </div>
                <h3 className="text-xl font-black uppercase tracking-wider">Sekuritas<br/>Ajaib</h3>
              </div>
              <h4 className="font-bold text-emerald-400 mb-4 text-sm">Investasi Saham & Reksa Dana</h4>
              <ul className="text-slate-300 text-sm space-y-3 mb-10 flex-1">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 mt-0.5">•</span> Fee Transaksi Rendah: 0.15% - 0.25%
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 mt-0.5">•</span> Mulai dari Rp 10.000,-
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 mt-0.5">•</span> Fitur Komunitas Aktif
                </li>
              </ul>
            <Link href="https://invest.ajaib.co.id/?ref=AKSARA_PARTNER" target="_blank" rel="noopener noreferrer" className="w-full block text-center bg-slate-200 hover:bg-white text-slate-900 font-bold py-3 rounded-lg text-sm transition-colors">
            Daftar via AKSARA
            </Link>
            </div>

            {/* Sekuritas 2: Stockbit */}
            <div className="bg-[#151E2D] p-8 rounded-2xl border border-slate-700 flex flex-col hover:-translate-y-2 transition-transform duration-300 shadow-xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full overflow-hidden flex items-center justify-center bg-white">
                  {/* Gambar SVG Logo Stockbit */}
                  <Image src="/ihsg/stockbit.svg" alt="Stockbit Logo" width={48} height={48} className="object-cover" />
                </div>
                <h3 className="text-xl font-black uppercase tracking-wider">Sekuritas<br/>Stockbit</h3>
              </div>
              <h4 className="font-bold text-emerald-400 mb-4 text-sm">Alat Analisis Fundamental Tercanggih</h4>
              <ul className="text-slate-300 text-sm space-y-3 mb-10 flex-1">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 mt-0.5">•</span> Data Fundamental Lengkap: 10 tahun++
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 mt-0.5">•</span> Fee transaksi 0.15% - 0.25%
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 mt-0.5">•</span> Forum Diskusi Terbesar
                </li>
              </ul>
            <Link href="https://stockbit.com/register?source=AKSARA" target="_blank" rel="noopener noreferrer" className="w-full block text-center bg-slate-200 hover:bg-white text-slate-900 font-bold py-3 rounded-lg text-sm transition-colors">
            Daftar via AKSARA
            </Link>
            </div>

            {/* Sekuritas 3: Indo Premier */}
            <div className="bg-[#151E2D] p-8 rounded-2xl border border-slate-700 flex flex-col hover:-translate-y-2 transition-transform duration-300 shadow-xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full overflow-hidden flex items-center justify-center bg-white">
                  {/* Gambar SVG Logo Indo Premier */}
                  <Image src="/ihsg/indopremier.svg" alt="Indo Premier Logo" width={48} height={48} className="object-cover" />
                </div>
                <h3 className="text-xl font-black uppercase tracking-wider">Sekuritas<br/>Indo Premier</h3>
              </div>
              <h4 className="font-bold text-emerald-400 mb-4 text-sm">Platform Trading Profesional & Stabil</h4>
              <ul className="text-slate-300 text-sm space-y-3 mb-10 flex-1">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 mt-0.5">•</span> Fitur Auto Order Canggih
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 mt-0.5">•</span> Fee transaksi 0.19% - 0.29%
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 mt-0.5">•</span> Akses Webinar Mingguan
                </li>
              </ul>
            <Link href="https://indopremier.com/#ipot/registration?utm_source=AksaraApp" target="_blank" rel="noopener noreferrer" className="w-full block text-center bg-slate-200 hover:bg-white text-slate-900 font-bold py-3 rounded-lg text-sm transition-colors">
              Daftar via AKSARA
            </Link>
            </div>

          </div>
        </div>
      </section>

    </main>
  );
}