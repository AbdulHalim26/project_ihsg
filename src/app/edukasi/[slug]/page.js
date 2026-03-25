import Link from 'next/link';
import Image from 'next/image';
import { dataMateri } from '@/data/materi';

export default async function IsiModul({ params }) {
  const resolvedParams = await params;
  const slug = resolvedParams?.slug || ''; 
  const konten = dataMateri[slug];

  // =========================================================
  // STATE KETIKA MATERI BELUM ADA
  // =========================================================
  if (!konten || !konten.sections) {
    return (
      <div className="min-h-screen pt-[120px] pb-12 px-6 flex flex-col items-center justify-center text-white bg-[#0B1120]">
        <div className="bg-[#151E2D] border border-slate-700 p-10 rounded-2xl text-center max-w-lg shadow-2xl">
          <span className="text-5xl mb-4 block">🚧</span>
          <h1 className="text-2xl font-bold mb-3">Materi Belum Tersedia</h1>
          <p className="text-slate-400 mb-8">Materi untuk topik ini sedang dalam tahap penyusunan.</p>
          <Link href="/edukasi" className="inline-block bg-emerald-500 hover:bg-emerald-600 px-6 py-3 rounded-xl text-white font-semibold transition-colors">
            Kembali ke Roadmap
          </Link>
        </div>
      </div>
    );
  }

  // =========================================================
  // LOGIKA BUAT NENTUIN BALIK KE TAB MANA (OTOMATIS)
  // =========================================================
  const levelMateri = konten?.level?.toLowerCase() || "";
  let tabTujuan = "dasar"; // Default ke dasar
  
  if (levelMateri.includes("menengah")) {
    tabTujuan = "menengah";
  } else if (levelMateri.includes("mahir")) {
    tabTujuan = "mahir";
  }

  // =========================================================
  // STATE KETIKA MATERI ADA
  // =========================================================
  return (
    <>
      <main className="pt-[120px] pb-16 px-4 md:px-8 bg-[#0B1120] text-white font-sans min-h-screen flex flex-col items-center">
        
        <div className="w-full max-w-4xl space-y-8">
          <Link href={`/edukasi?tab=${tabTujuan}`} className="text-slate-400 hover:text-emerald-400 text-sm font-medium transition-colors w-fit flex items-center gap-1">
            ← Kembali
          </Link>

          <div className="space-y-3">
            <h1 className="text-3xl md:text-5xl font-extrabold leading-tight tracking-tight text-white">
              {konten.title}
            </h1>
            <p className="text-slate-300 text-lg leading-relaxed max-w-3xl">
              {konten.intro}
            </p>
          </div>

          <div className="border border-slate-600 rounded-2xl overflow-hidden bg-[#151E2D] shadow-2xl w-full flex flex-col">
            
            {konten.videoId && (
              <div className="w-full aspect-video border-b border-slate-600 bg-black shrink-0">
                <iframe 
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${konten.videoId}`} 
                  title="YouTube video" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe>
              </div>
            )}

            <div className="p-6 md:p-8 lg:p-10 flex-1">
              <div className="space-y-10 px-4 md:px-8">
                {konten.sections.map((section, index) => (
                  <div key={index} className="space-y-3">
                    <h2 className="flex items-start gap-4 text-xl md:text-2xl font-bold text-white leading-snug">
                      <span className="text-emerald-500 shrink-0">{index + 1}</span>
                      <span>{section.subJudul}</span>
                    </h2>
                    <p className="text-slate-300 leading-relaxed text-base md:text-lg opacity-90 text-justify md:text-left">
                      {section.teks}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="w-full border-t border-slate-700/50">
              <Link 
                href={`/edukasi?tab=${tabTujuan}`} 
                className="group flex w-full items-center justify-center bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-lg py-5 transition-all duration-300 hover:tracking-wide text-center"
              >
                Tandai Selesai & Lanjut
              </Link>
            </div>

          </div>
        </div>
      </main>

    </>
  );
}