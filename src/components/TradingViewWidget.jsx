"use client";
import React, { useEffect, useRef, memo } from 'react';

function TradingViewWidget() {
  const container = useRef();

  useEffect(() => {
    // Mencegah script dimuat dua kali (bug bawaan React Strict Mode)
    if (container.current.querySelector("script")) return;

    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-market-overview.js";
    script.type = "text/javascript";
    script.async = true;
    
    // Di sini kamu bisa ganti daftar sahamnya! (Format: "Bursa:KodeSaham")
    script.innerHTML = `
      {
        "colorTheme": "dark",
        "dateRange": "12M",
        "showChart": true,
        "locale": "id",
        "largeChartUrl": "",
        "isTransparent": true,
        "showSymbolLogo": true,
        "showFloatingTooltip": true,
        "width": "100%",
        "height": "500",
        "tabs": [
          {
            "title": "IHSG & Top Saham Indo",
            "symbols": [
              { "s": "IDX:COMPOSITE", "d": "IHSG (Indeks Harga Saham Gabungan)" },
              { "s": "IDX:BBCA", "d": "Bank Central Asia" },
              { "s": "IDX:BBRI", "d": "Bank Rakyat Indonesia" },
              { "s": "IDX:BMRI", "d": "Bank Mandiri" },
              { "s": "IDX:BREN", "d": "Barito Renewables Energy" },
              { "s": "IDX:BUMI", "d": "Bumi Rsources" } 
            ],
            "originalTitle": "Indices"
          }
        ]
      }
    `;
    container.current.appendChild(script);
  }, []);

  return (
    // Wadah widget-nya kita kasih border dan shadow biar estetik masuk sama tema Aksara
    <div className="tradingview-widget-container overflow-hidden rounded-2xl border border-white/10 shadow-[0_20px_40px_-15px_rgba(59,130,246,0.2)]" ref={container}>
      <div className="tradingview-widget-container__widget"></div>
    </div>
  );
}

export default memo(TradingViewWidget);