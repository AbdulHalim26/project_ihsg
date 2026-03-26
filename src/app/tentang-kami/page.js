import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: "Tentang Kami | AKSARA",
  description: "Mengenal lebih dekat platform Aksara dan visi misi kami.",
};

export default function TentangKamiPage() {
  return (
    <main className="min-h-screen pt-[120px] pb-20 font-sans bg-slate-50 text-slate-900 dark:bg-[#0B1120] dark:text-white transition-colors duration-300">
      
      {/* ========================================== */}
      {/* SECTION 1: HERO (Image + Title) */}
      {/* ========================================== */}
      <section className="relative h-[300px] md:h-[400px] w-full overflow-hidden mt-[-120px]">
        <Image 
          src="/ihsg/tentang-kami.jpg"
          alt="Tentang Kami Hero"
          fill
          className="object-cover opacity-60 z-0"
          priority
        />
        {/* Dark Overlay - Tetap gelap agar teks putih di atasnya terbaca */}
        <div className="absolute inset-0 bg-[#0B1120]/60 z-10" />

        {/* Hero Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 z-20 pt-[120px]">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 uppercase tracking-tight text-white">
            Tentang Kami
          </h1>
          <p className="text-slate-200 text-lg md:text-xl font-light max-w-2xl mx-auto">
            Langkah cerdas menuju kebebasan finansial melalui aksi saham rasional. Platform edukasi dan analisis saham terpercaya untuk investor Indonesia.
          </p>
        </div>
      </section>

      {/* ========================================== */}
      {/* SECTION 2: SUB-NAV (Visi & Misi, Makna Logo, Sejarah) */}
      {/* ========================================== */}
      <section className="bg-white dark:bg-[#151E2D] py-4 px-6 border-y border-slate-200 dark:border-slate-800 mb-16 transition-colors duration-300">
        <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-10 text-slate-600 dark:text-slate-300 text-sm font-medium">
          <Link href="#visi-misi" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
            Visi & Misi
          </Link>
          <Link href="#makna-logo" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
            Makna Logo
          </Link>
          <Link href="#sejarah" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
            Tonggak Sejarah
          </Link>
        </div>
      </section>

      {/* ========================================== */}
      {/* SECTION 3: VISI & MISI */}
      {/* ========================================== */}
      <section id="visi-misi" className="py-16 px-6 max-w-6xl mx-auto mb-20 scroll-mt-[100px]">
        {/* Visi */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-8 uppercase tracking-wider text-slate-900 dark:text-white">Visi</h2>
          <div className="bg-white dark:bg-[#151E2D] p-8 rounded-2xl border border-slate-200 dark:border-slate-700 max-w-3xl mx-auto shadow-lg dark:shadow-xl transition-colors duration-300">
            <p className="text-slate-700 dark:text-slate-300 text-base md:text-lg leading-relaxed font-light">
              Menjadi motor penggerak literasi keuangan digital yang inklusif untuk menciptakan generasi investor Indonesia yang cerdas, mandiri, dan berbasis data.
            </p>
          </div>
        </div>

        {/* Misi */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-10 uppercase tracking-wider text-slate-900 dark:text-white">Misi</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Misi Point 1 */}
            <div className="bg-white dark:bg-[#151E2D] p-8 rounded-2xl border border-slate-200 dark:border-slate-700 hover:border-emerald-500/50 transition-all shadow-lg dark:shadow-xl text-left flex gap-6">
              <div className="text-3xl font-extrabold text-emerald-600 dark:text-emerald-400 flex-shrink-0">01</div>
              <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
                Membangun platform edukasi yang interaktif, mudah dipahami, dan dapat diakses oleh semua lapisan masyarakat, termasuk para pelajar dan mahasiswa.
              </p>
            </div>
            {/* Misi Point 2 */}
            <div className="bg-white dark:bg-[#151E2D] p-8 rounded-2xl border border-slate-200 dark:border-slate-700 hover:border-emerald-500/50 transition-all shadow-lg dark:shadow-xl text-left flex gap-6">
              <div className="text-3xl font-extrabold text-emerald-600 dark:text-emerald-400 flex-shrink-0">02</div>
              <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
                Menyediakan tools analisis dan data pasar terkini untuk membantu investor mengambil keputusan investasi yang lebih rasional dan terencana.
              </p>
            </div>
            {/* Misi Point 3 */}
            <div className="bg-white dark:bg-[#151E2D] p-8 rounded-2xl border border-slate-200 dark:border-slate-700 hover:border-emerald-500/50 transition-all shadow-lg dark:shadow-xl text-left flex gap-6">
              <div className="text-3xl font-extrabold text-emerald-600 dark:text-emerald-400 flex-shrink-0">03</div>
              <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
                Menciptakan ekosistem keuangan digital yang aman, transparan, dan terintegrasi dengan mitra-mitra keuangan yang terpercaya.
              </p>
            </div>
            {/* Misi Point 4 */}
            <div className="bg-white dark:bg-[#151E2D] p-8 rounded-2xl border border-slate-200 dark:border-slate-700 hover:border-emerald-500/50 transition-all shadow-lg dark:shadow-xl text-left flex gap-6">
              <div className="text-3xl font-extrabold text-emerald-600 dark:text-emerald-400 flex-shrink-0">04</div>
              <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
                Mendorong pertumbuhan inklusi keuangan melalui literasi dan akses ke instrumen pasar modal yang lebih baik.
              </p>
            </div>
          </div>
        </div>
      </section>

     {/* ========================================== */}
      {/* SECTION 4: MAKNA LOGO (FIXED SPACING) */}
      {/* ========================================== */}
      <section id="makna-logo" className="bg-white dark:bg-[#151E2D] py-24 md:py-32 px-6 border-y border-slate-200 dark:border-slate-800 mb-20 scroll-mt-[100px] transition-colors duration-300">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-24 uppercase tracking-wider text-slate-900 dark:text-white">Makna Logo</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 lg:gap-24 items-center">
            
            {/* Left: Logo Image */}
            <div className="flex justify-center md:justify-end w-full">
              <div className="bg-slate-50 border border-slate-100 dark:border-none dark:bg-white p-6 md:p-10 rounded-2xl shadow-lg dark:shadow-xl w-full max-w-md flex items-center justify-center">
                <Image 
                  src="/logo-aksara.png" 
                  alt="Logo Aksara Makna"
                  width={450}
                  height={180}
                  className="object-contain w-full h-auto drop-shadow-sm"
                />
              </div>
            </div>

            {/* Right: Explanation text */}
            <div className="text-slate-700 dark:text-slate-300 space-y-4 text-sm md:text-base leading-relaxed text-left">
              <p className="font-bold text-slate-900 dark:text-white uppercase tracking-wide">Makna dan logo AKSARA:</p>
              <ul className="list-disc pl-5 space-y-3 font-light">
                <li><strong className="text-emerald-600 dark:text-emerald-400">Warna Biru:</strong> Melambangkan stabilitas, kepercayaan, dan profesionalisme dalam dunia keuangan.</li>
                <li><strong className="text-emerald-600 dark:text-emerald-400">Garis Grafik Naik:</strong> Mewakili pertumbuhan dan keberhasilan investasi yang rasional.</li>
                <li><strong className="text-emerald-600 dark:text-emerald-400">Huruf 'A':</strong> Membentuk kurva yang menggambarkan proses pembelajaran dan kemajuan.</li>
              </ul>
              <p className="font-bold text-slate-900 dark:text-white uppercase tracking-wide mt-6">Simbol grafis memiliki arti:</p>
              <ul className="list-disc pl-5 space-y-3 font-light">
                <li><strong className="text-emerald-600 dark:text-emerald-400">Garis Dinamis:</strong> Menunjukkan ketangkasan dalam menganalisis data pasar secara real-time.</li>
                <li><strong className="text-emerald-600 dark:text-emerald-400">Kombinasi Warna:</strong> Melambangkan komunitas investor yang saling mendukung dan berbagi pengetahuan.</li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================== */}
      {/* SECTION 5: TONGGAK SEJARAH (TIMELINE) */}
      {/* ========================================== */}
      <section id="sejarah" className="py-16 px-6 max-w-4xl mx-auto mb-20 scroll-mt-[100px]">
        <h2 className="text-3xl font-bold mb-8 text-center uppercase tracking-wider text-slate-900 dark:text-white">Tonggak Sejarah</h2>
        
        {/* Teks Pengantar */}
        <p className="text-slate-700 dark:text-slate-300 text-base md:text-lg leading-relaxed font-light text-center mb-16">
          AKSARA tidak lahir begitu saja. Kami terbentuk dari sebuah observasi tajam terhadap fenomena ekonomi digital saat ini: di mana kemudahan akses investasi tidak dibarengi dengan kedalaman literasi. Melihat data kerugian masyarakat akibat investasi emosional, kami memutuskan untuk membangun platform yang mengembalikan fungsi pasar modal ke jalur yang benar—jalur yang rasional.
        </p>

        {/* TIMELINE WRAPPER */}
        <div className="relative border-l border-slate-300 dark:border-slate-600 ml-4 md:ml-8 space-y-12 pb-4">
          
          {/* Fase 1 */}
          <div className="relative pl-8 md:pl-12">
            <div className="absolute -left-[14px] top-0 bg-slate-50 dark:bg-[#0B1120] w-7 text-center py-1 text-slate-900 dark:text-white font-bold text-lg leading-none">
              1
            </div>
            <h3 className="text-lg md:text-xl font-bold text-slate-900 dark:text-white mb-3">Fase Inisiasi: Kesenjangan Literasi (2024 – Awal 2025)</h3>
            <div className="space-y-4 text-slate-700 dark:text-slate-300 text-sm md:text-base font-light leading-relaxed">
              <p>Perjalanan AKSARA dimulai dari sebuah keprihatinan mendalam terhadap data Survei Nasional Literasi dan Inklusi Keuangan (SNLIK). Meskipun angka inklusi keuangan (masyarakat yang memiliki akun keuangan) melonjak hingga di atas 85%, angka literasi (pemahaman mendalam) masih tertinggal jauh di angka 49%.</p>
              <p>Di lapangan, fenomena ini melahirkan gelombang investor muda yang terjebak dalam skema FOMO (Fear of Missing Out) dan investasi bodong yang mengakibatkan kerugian materi triliunan rupiah akibat ketidakmampuan menganalisis risiko secara Rasional.</p>
            </div>
          </div>

          {/* Fase 2 */}
          <div className="relative pl-8 md:pl-12">
            <div className="absolute -left-[14px] top-0 bg-slate-50 dark:bg-[#0B1120] w-7 text-center py-1 text-slate-900 dark:text-white font-bold text-lg leading-none">
              2
            </div>
            <h3 className="text-lg md:text-xl font-bold text-slate-900 dark:text-white mb-3">Fase Riset & Kajian Akademis (Pertengahan 2025)</h3>
            <p className="text-slate-700 dark:text-slate-300 text-sm md:text-base font-light leading-relaxed">
              Mengacu pada kajian dalam jurnal Lokawati (Januari 2026), tim kami melakukan riset mengenai pentingnya aksesibilitas informasi keuangan yang tidak hanya "ada", tapi juga "dimengerti". Kami menemukan bahwa platform edukasi yang ada cenderung terlalu teknis atau justru terlalu komersial. Oleh karena itu, kami mulai merancang Pilar Rasionalitas sebuah konsep di mana edukasi harus berbanding lurus dengan alat praktik (produk) yang aman dan terverifikasi.
            </p>
          </div>

          {/* Fase 3 */}
          <div className="relative pl-8 md:pl-12">
            <div className="absolute -left-[14px] top-0 bg-slate-50 dark:bg-[#0B1120] w-7 text-center py-1 text-slate-900 dark:text-white font-bold text-lg leading-none">
              3
            </div>
            <h3 className="text-lg md:text-xl font-bold text-slate-900 dark:text-white mb-3">Fase Pengembangan Ekosistem (Akhir 2025 – 2026)</h3>
            <p className="text-slate-700 dark:text-slate-300 text-sm md:text-base font-light leading-relaxed mb-4">
              Memasuki tahun 2026, AKSARA bertransformasi dari sekadar portal informasi menjadi sebuah Ekosistem Digital Terintegrasi. Kami mengintegrasikan tiga elemen utama:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-slate-700 dark:text-slate-300 text-sm md:text-base font-light leading-relaxed">
              <li><strong className="text-slate-900 dark:text-white font-medium">Edukasi Terstruktur:</strong> Berdasarkan Learning Path yang logis.</li>
              <li><strong className="text-slate-900 dark:text-white font-medium">Alat Analisis (Produk):</strong> Memfasilitasi pengambilan keputusan berbasis data.</li>
              <li><strong className="text-slate-900 dark:text-white font-medium">Kemitraan Strategis (Promosi):</strong> Menjamin bahwa pengguna hanya berinteraksi dengan entitas yang terdaftar dan diawasi oleh OJK.</li>
            </ul>
          </div>

          {/* Fase 4 */}
          <div className="relative pl-8 md:pl-12">
            <div className="absolute -left-[14px] top-0 bg-slate-50 dark:bg-[#0B1120] w-7 text-center py-1 text-slate-900 dark:text-white font-bold text-lg leading-none">
              4
            </div>
            <h3 className="text-lg md:text-xl font-bold text-slate-900 dark:text-white mb-3">Masa Kini: Realisasi Investasi Masa Depan</h3>
            <p className="text-slate-700 dark:text-slate-300 text-sm md:text-base font-light leading-relaxed">
              AKSARA berdiri sebagai platform yang menjawab tantangan ekonomi digital. Kami hadir untuk memastikan bahwa setiap "Aksi" yang diambil oleh investor di pasar modal bukan lagi berdasarkan spekulasi emosional, melainkan berdasarkan pemahaman "Aksara" finansial yang benar dan "Rasional".
            </p>
          </div>

        </div>
      </section>

    </main>
  );
}