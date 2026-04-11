"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

export default function HeroSection() {
  // Arka planda dönecek görsellerin listesi (Scott Exteriors'a uygun görseller eklenebilir)
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
    // Navbar şeffaf olduğu için pt-32 ve lg:pt-48 ile yazıları aşağı ittik (Eski ayarlara sadık)
    <section className="relative w-full h-[90vh] min-h-[750px] flex items-center overflow-hidden">
      
      {/* 1. Arka Plan Görselleri (Geçişli Animasyon) */}
      <div className="absolute inset-0 w-full h-full z-0 bg-[#0B1221]">
        {heroImages.map((src, index) => (
          <Image
            key={index}
            src={src}
            alt={`Premium Dallas Home ${index + 1}`}
            fill
            className={`object-cover object-center transition-opacity duration-1000 ease-in-out ${
              index === currentImage ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
            }`}
            priority={index === 0} 
          />
        ))}
        {/* Karartma Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent"></div>
      </div>

      {/* 2. İçerik - Dış padding pt-32 lg:pt-48 ve lg:px-8 korundu */}
      <div className="relative z-10 w-full max-w-[1600px] mx-auto px-6 lg:px-8 flex flex-col items-start justify-center h-full pt-32 lg:pt-48">
        <div className="max-w-3xl animate-in fade-in slide-in-from-bottom-4 duration-1000 ease-out relative z-10">
          
          {/* 🔥 Üst Vurgu - text-xs Yapıldı 🔥 */}
          <p className="text-[#4ADE80] font-bold tracking-[0.2em] uppercase mb-4 text-xs md:text-sm drop-shadow-md">
            Family-Owned & Operated Since 1997
          </p>

          {/* 🔥 Ana Başlık - text-4xl ve lg:text-6xl Yapıldı 🔥 */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] mb-6 tracking-tight drop-shadow-2xl">
            Premium Roofing, <br className="hidden md:block"/> Siding & Windows. <br/>
            <span className="text-[#087F23]">Dallas' Trusted Experts.</span>
          </h1>
          
          {/* 🔥 Paragraf - text-base ve lg:text-lg Yapıldı 🔥 */}
          <p className="text-base md:text-lg text-gray-300 font-medium mb-8 max-w-2xl leading-relaxed drop-shadow-lg">
            An award-winning company serving residential and commercial customers throughout the greater Dallas area. Fully insured and committed to quality, our talented crews install premium materials built for energy efficiency and undeniable curb appeal.
          </p>

          {/* 🔥 Güven Bandı Note - text-xs Yapıldı 🔥 */}
          <div className="flex items-center gap-3 mb-10 opacity-80">
            <div className="h-px w-8 bg-[#087F23]"></div>
            <p className="text-xs text-white uppercase tracking-widest font-semibold italic">
              Multi-Year Angie's List & Houzz Award Winners
            </p>
          </div>
          
          {/* 3. Butonlar - text-12px Yapıldı 🔥 */}
          <div className="flex flex-col sm:flex-row gap-4 relative z-10">
            {/* Ana Buton - Yonca Yeşili */}
            <button className="relative overflow-hidden group bg-[#087F23] text-white font-bold text-[12px] tracking-[0.15em] uppercase px-9 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-[0_10px_30px_rgba(8,127,35,0.4)] transform hover:-translate-y-1">
              <span className="relative z-10">Get An Estimate</span>
              <div className="absolute inset-0 h-full w-full bg-white/20 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </button>
            
            {/* İkincil Buton */}
            <button className="group bg-transparent border-2 border-white/40 hover:border-white hover:bg-white text-white hover:text-[#0B1221] font-bold text-[12px] tracking-[0.15em] uppercase px-9 py-4 rounded-full transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl">
              View Our Work
            </button>
          </div>

        </div>
      </div>

      {/* Alt kısımdaki Slider Noktaları - Yonca Yeşili ve text-base korundu */}
      <div className="absolute bottom-10 left-6 md:left-[auto] md:right-1/2 md:translate-x-1/2 flex gap-3 z-20">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImage(index)}
            className={`h-2 rounded-full transition-all duration-500 ${
              index === currentImage ? 'w-10 bg-[#087F23]' : 'w-2 bg-white/40 hover:bg-white/70'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

    </section>
  );
}