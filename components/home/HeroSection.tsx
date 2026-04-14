"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

export default function HeroSection() {
  const heroImages = [
    '/hero1.webp',
    '/hero2.webp',
    '/hero3.webp'
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev === heroImages.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [heroImages.length]);

  return (
    <section className="relative w-full h-screen md:h-[90vh] min-h-[700px] flex items-center overflow-hidden">
      
      {/* 1. Arka Plan Görselleri */}
      <div className="absolute inset-0 w-full h-full z-0 bg-[#0B1221]">
        {heroImages.map((src, index) => (
          <Image
            key={index}
            src={src}
            alt={`Premium Dallas Home ${index + 1}`}
            fill
            className={`object-cover object-center transition-all duration-1000 ease-in-out ${
              index === currentImage ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
            }`}
            priority={index === 0} 
            // 🔥 PERFORMANS SİHİRLERİ BURADA BAŞLIYOR 🔥
            quality={60} // Kaliteyi %60'a çektik, gözle fark edilmez ama boyutu yarı yarıya düşürür!
            sizes="100vw" // Tarayıcıya ekran genişliğine göre boyut seçmesini emrediyoruz!
          />
        ))}
        {/* Karartma Overlay - Mobilde daha yoğun, masaüstünde geçişli */}
        <div className="absolute inset-0 bg-black/60 md:bg-gradient-to-r md:from-black/90 md:via-black/60 md:to-transparent"></div>
      </div>

      {/* 2. İçerik - Mobilde MERKEZİ, Masaüstünde SOLA YASLI 🔥 */}
      <div className="relative z-10 w-full max-w-[1600px] mx-auto px-6 lg:px-8 flex flex-col items-center text-center md:items-start md:text-left justify-center h-full pt-20">
        <div className="max-w-3xl animate-in fade-in slide-in-from-bottom-6 duration-1000 ease-out relative z-10">
          
          <p className="text-[#4ADE80] font-bold tracking-[0.2em] uppercase mb-4 text-[10px] md:text-sm drop-shadow-md">
            Family-Owned & Operated Since 1997
          </p>

          <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-white leading-[1.1] mb-6 tracking-tighter drop-shadow-2xl">
            Premium Roofing, <br className="hidden md:block"/> Siding & Windows. <br/>
            <span className="text-[#087F23]">Dallas' Trusted Experts.</span>
          </h1>
          
          <p className="text-sm md:text-lg text-gray-200 font-medium mb-10 max-w-2xl leading-relaxed drop-shadow-lg mx-auto md:mx-0">
            Award-winning residential and commercial solutions throughout DFW. Fully insured, highly rated, and committed to undeniable curb appeal.
          </p>

          <div className="flex items-center justify-center md:justify-start gap-3 mb-10 opacity-90">
            <div className="h-px w-6 bg-[#087F23]"></div>
            <p className="text-[10px] md:text-xs text-white uppercase tracking-[0.2em] font-black italic">
              Multi-Year Award Winners
            </p>
            <div className="h-px w-6 bg-[#087F23] md:hidden"></div>
          </div>
          
          {/* 3. Butonlar - Mobilde yan yana sığması için optimize edildi */}
          <div className="flex flex-row gap-3 md:gap-5 relative z-10 justify-center md:justify-start">
            <button className="bg-[#087F23] text-white font-black text-[10px] md:text-[12px] tracking-[0.1em] md:tracking-[0.2em] uppercase px-6 md:px-10 py-4 rounded-full transition-all duration-300 shadow-xl hover:bg-white hover:text-[#087F23] active:scale-95 border-2 border-[#087F23]">
              Get Estimate
            </button>
            
            <button className="bg-transparent border-2 border-white/20 hover:border-white text-white font-black text-[10px] md:text-[12px] tracking-[0.1em] md:tracking-[0.2em] uppercase px-6 md:px-10 py-4 rounded-full transition-all duration-300 backdrop-blur-sm active:scale-95">
              View Work
            </button>
          </div>

        </div>
      </div>

      {/* 🔥 ALTTARAFINDAKİ NOKTALAR KALDIRILDI - TEMİZ GÖRÜNÜM 🔥 */}
    </section>
  );
}