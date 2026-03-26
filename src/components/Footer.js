import Link from 'next/link';
import Image from 'next/image'; 

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-[#0B1120] border-t border-slate-200 dark:border-white/10 pt-16 pb-8 relative z-10 transition-colors duration-300">
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
                  className="w-auto h-20 object-contain drop-shadow-sm dark:drop-shadow-none"
                  priority
                />
              </div>
            </Link>
            <p className="text-slate-600 dark:text-slate-400 font-light text-sm leading-relaxed max-w-sm">
              Langkah Cerdas Menuju Kebebasan Finansial melalui Aksi Saham Rasional. Platform edukasi dan analisis saham terpercaya untuk investor Indonesia.
            </p>
          </div>

          {/* Kolom 2: Eksplorasi (Sesuai Navbar Baru) */}
          <div>
            <h4 className="text-slate-900 dark:text-white font-semibold mb-6">Eksplorasi</h4>
            <ul className="space-y-4">
              <li>
                <Link href="/" className="text-slate-600 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 text-sm transition-colors duration-300">
                  Beranda
                </Link>
              </li>
              <li>
                <Link href="/edukasi?tab=dasar" className="text-slate-600 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 text-sm transition-colors duration-300">
                  Kelas Edukasi
                </Link>
              </li>
              <li>
                <Link href="/trading/simulasi" className="text-slate-600 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 text-sm transition-colors duration-300">
                  Simulasi Trading
                </Link>
              </li>
              <li>
                <Link href="/promosi" className="text-slate-600 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 text-sm transition-colors duration-300">
                  Promosi & Kemitraan
                </Link>
              </li>
            </ul>
          </div>

         {/* Kolom 3: Perusahaan */}
          <div>
            <h4 className="text-slate-900 dark:text-white font-semibold mb-6">Perusahaan</h4>
            <ul className="space-y-4">
              <li>
                <Link href="/tentang-kami" className="text-slate-600 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 text-sm transition-colors duration-300">
                  Tentang Kami
                </Link>
              </li>
              <li>
                {/* Pakai tag <a> buat eksternal link ke WA */}
                <a 
                  href="https://wa.me/6281312333735?text=Halo%20Tim%20Aksara,%20saya%20tertarik%20untuk%20diskusi%20mengenai%20kemitraan." 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-slate-600 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 text-sm transition-colors duration-300"
                >
                  Hubungi Kami
                </a>
              </li>
            </ul>
          </div>
          
        </div>

        {/* Garis Pemisah Bawah */}
        <div className="border-t border-slate-200 dark:border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 dark:text-slate-500 text-xs text-center md:text-left">
            &copy; {new Date().getFullYear()} AKSARA (Aksi Saham Rasional). All rights reserved.
          </p>
          
         {/* --- SOCIAL MEDIA & CONTACT LINKS --- */}
          <div className="flex justify-center md:justify-end gap-6">
            {/* LINK GITHUB */}
            <Link 
              href="https://github.com/AbdulHalim26/project_ihsg" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors duration-300"
              aria-label="GitHub Project"
            >
              <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6" aria-hidden="true">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
            </Link>

            {/* LINK WHATSAPP */}
            <Link 
              href="https://wa.me/6281312333735?text=Halo%20Tim%20Aksara!"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors duration-300"
              aria-label="WhatsApp Contact"
            >
              <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6" aria-hidden="true">
                <path d="M12.031 0C5.385 0 0 5.388 0 12.036c0 2.12.553 4.195 1.604 6.01L.027 24l6.096-1.597A11.95 11.95 0 0012.031 24c6.644 0 12.03-5.388 12.03-12.036S18.675 0 12.031 0zm0 21.968c-1.784 0-3.535-.48-5.074-1.39l-.364-.216-3.772.988.995-3.676-.237-.377A9.914 9.914 0 012.033 12.03c0-5.518 4.492-10.01 10.001-10.01 2.67 0 5.181 1.04 7.07 2.929 1.888 1.888 2.927 4.398 2.927 7.07 0 5.518-4.493 10.01-10.001 10.01zM17.52 14.49c-.302-.151-1.782-.878-2.058-.98-.276-.101-.478-.151-.678.151-.202.302-.78 1.002-.955 1.203-.176.202-.352.227-.654.076-.302-.151-1.272-.469-2.423-1.498-.896-.8-1.503-1.79-1.68-2.091-.176-.302-.019-.465.132-.616.136-.135.302-.352.453-.528.151-.176.202-.302.302-.503.1-.202.05-.378-.025-.529-.076-.151-.678-1.636-.93-2.24-.245-.588-.495-.508-.678-.517-.176-.008-.378-.01-.58-.01-.202 0-.528.076-.805.378-.277.302-1.057 1.032-1.057 2.518 0 1.486 1.082 2.922 1.233 3.123.151.202 2.13 3.253 5.161 4.56.72.312 1.282.498 1.722.637.724.229 1.383.196 1.9.119.58-.086 1.782-.728 2.033-1.431.252-.703.252-1.306.177-1.431-.076-.126-.277-.202-.58-.353z" />
              </svg>
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}