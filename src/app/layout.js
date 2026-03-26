import "./globals.css";
import ThemeProvider from "@/components/ThemeProvider"; 
import CardNav from "@/components/CardNav"; 
import Footer from "@/components/Footer"; 

const navData = [
  {
    label: "Eksplorasi",
    links: [
      { label: "Beranda", href: "/" },
      { label: "Promosi", href: "/promosi" },
      { label: "Tentang Kami", href: "/tentang-kami" }
    ]
  },
  {
    label: "Trading",
    links: [
      { label: "Prediksi Saham AI", href: "/trading" },
      { label: "Robo Advisor AI", href: "/trading/robo" } 
    ]
  },
  {
    label: "Edukasi",
    links: [
      { label: "Tingkat Dasar", href: "/edukasi?tab=dasar" },
      { label: "Tingkat Menengah", href: "/edukasi?tab=menengah" },
      { label: "Tingkat Mahir", href: "/edukasi?tab=mahir" }
    ]
  }
];

export const metadata = {
  title: "Aksara | Aksi Saham Rasional",
  description: "Platform Edukasi dan Trading Saham",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <CardNav logo="/logo-aksara.png" items={navData} />
          
          <main className="min-h-screen">
            {children}
          </main>

          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}