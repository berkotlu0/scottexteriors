"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

export default function HeroSection() {
  // Arka planda dönecek görsellerin listesi
  const heroImages = [
    '/hero1.webp',
    '/hero2.webp',
    '/hero3.webp'
  ];

  const [currentImage, setCurrentImage] = useState(0);

  // Görselleri 5 saniyede bir otomatik değiştirme efekti
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev === heroImages.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [heroImages.length]);

  return (
    <section className="relative w-full h-[85vh] min-h-[600px] flex items-center overflow-hidden">
      
      {/* 1. Arka Plan Görselleri (Geçişli Animasyon) */}
      <div className="absolute inset-0 w-full h-full z-0 bg-[#0B1221]">
        {heroImages.map((src, index) => (
          <Image
            key={index}
            src={src}
            alt={`Premium American Home ${index + 1}`}
            fill
            className={`object-cover object-center transition-opacity duration-1000 ease-in-out ${
              index === currentImage ? 'opacity-100' : 'opacity-0'
            }`}
            priority={index === 0} // Sadece ilk görseli öncelikli yükle
          />
        ))}
        {/* Karartma Overlay - Metinlerin cam gibi okunması için */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1221]/95 via-[#0B1221]/60 to-transparent"></div>
      </div>

      {/* 2. İçerik */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 flex flex-col items-start justify-center h-full">
        <div className="max-w-3xl animate-in fade-in slide-in-from-bottom-4 duration-1000 ease-out">
          
          <p className="text-[#3A6B9C] font-bold tracking-[0.2em] uppercase mb-4 text-sm drop-shadow-md">
            Top-Rated Contractor in Texas
          </p>

          <h1 className="text-5xl md:text-7xl font-bold text-white leading-[1.1] mb-6 tracking-tight drop-shadow-xl">
            Your Texas Home, <br/>
            <span className="text-[#3A6B9C]">Remade.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 font-medium mb-10 max-w-2xl leading-relaxed drop-shadow-lg">
            Premium windows, siding, and doors that last. Built for energy efficiency and undeniable curb appeal. Upgrade your exterior with the best materials in the industry.
          </p>
          
          {/* 3. Butonlar (Küçültüldü, "Free" kaldırıldı, Elite hale getirildi) */}
          <div className="flex flex-col sm:flex-row gap-4">
            {/* Ana Buton */}
            <button className="relative overflow-hidden group bg-[#3A6B9C] text-white font-bold text-[13px] tracking-[0.15em] uppercase px-8 py-3.5 rounded transition-all duration-300 shadow-lg hover:shadow-[0_10px_30px_rgba(58,107,156,0.5)] transform hover:-translate-y-1">
              <span className="relative z-10">Get An Estimate</span>
              {/* İçten dolan parlama efekti */}
              <div className="absolute inset-0 h-full w-full bg-white/20 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </button>
            
            {/* İkincil Buton */}
            <button className="group bg-transparent border-[1.5px] border-white/40 hover:border-white hover:bg-white text-white hover:text-[#0B1221] font-bold text-[13px] tracking-[0.15em] uppercase px-8 py-3.5 rounded transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl">
              View Our Work
            </button>
          </div>

        </div>
      </div>

      {/* Alt kısımdaki Slider Noktaları */}
      <div className="absolute bottom-8 left-6 md:left-[auto] md:right-1/2 md:translate-x-1/2 flex gap-3 z-20">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImage(index)}
            className={`h-2 rounded-full transition-all duration-500 ${
              index === currentImage ? 'w-8 bg-[#3A6B9C]' : 'w-2 bg-white/40 hover:bg-white/70'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

    </section>
  );
}