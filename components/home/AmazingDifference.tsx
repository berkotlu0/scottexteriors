"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { CheckCircle2, Download } from 'lucide-react'; // Download ikonu eklendi!

export default function AmazingDifference() {
  // Sol tarafta otomatik dönecek lüks görseller
  const sliderImages = [
    '/lux1.webp',
    '/lux2.webp',
    '/lux3.webp'
  ];

  const [currentImg, setCurrentImg] = useState(0);

  // Görselleri 4 saniyede bir değiştir
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImg((prev) => (prev === sliderImages.length - 1 ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(timer);
  }, [sliderImages.length]);

  // Sağ taraftaki maddeler
  const features = [
    "Factory-authorized installation by trained, certified professionals",
    "Custom solutions tailored to your home's architecture and regional climate",
    "Premium materials from Infinity by Marvin and James Hardie with full warranty coverage",
    "Turnkey service from initial consultation through final inspection",
    "Nearly 200,000 successful installations since 1989",
    "Family-owned business committed to quality and customer satisfaction"
  ];

  // Logoların listesi
  const partnerLogos = [
    { src: '/logo/new-marvin-logo.png', alt: 'Marvin' },
    { src: '/logo/2000px-james_hardie_logosvg.png', alt: 'James Hardie' },
    { src: '/logo/provia-transparent.png', alt: 'ProVia' },
    { src: '/logo/GIF-Infinity_Digital_Logo_RGB.gif', alt: 'Infinity by Marvin' },
    { src: '/logo/goodcontractorslogo.jpg', alt: 'Good Contractors' },
  ];

  // Sürekli akış için logolar listesini iki katına çıkarıyoruz
  const duplicatedLogos = [...partnerLogos, ...partnerLogos];

  return (
    <section className="relative w-full py-24 bg-white overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6">
        
        {/* 1. Üst Kısım: Slider ve Metin 50/50 Bölünümü */}
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24 mb-24">
          
          {/* Sol Taraf: Animasyonlu Lüks Slider */}
          <div className="w-full lg:w-1/2 relative h-[450px] md:h-[600px] rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.15)] group">
            {sliderImages.map((src, index) => (
              <Image
                key={index}
                src={src}
                alt={`Premium Installation ${index + 1}`}
                fill
                className={`object-cover transition-all duration-1000 ease-in-out ${
                  index === currentImg ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
                }`}
                priority={index === 0}
              />
            ))}
            {/* Slider üzerine çok hafif bir premium karartma */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            
            {/* Görsel göstergeleri (Noktalar) */}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-3 z-10">
              {sliderImages.map((_, index) => (
                <div 
                  key={index} 
                  className={`h-1.5 rounded-full transition-all duration-500 ${
                    index === currentImg ? 'w-8 bg-white' : 'w-2 bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Sağ Taraf: "The Amazing Difference" Metinleri */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            <h4 className="text-[#3A6B9C] font-black tracking-[0.2em] uppercase mb-4 text-sm text-center lg:text-left">
              The Amazing Difference
            </h4>
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight mb-6 tracking-tight text-center lg:text-left">
              Complete Exterior <br className="hidden lg:block"/> Transformation Solutions
            </h2>
            <p className="text-lg text-slate-600 mb-10 leading-relaxed font-medium text-center lg:text-left">
              Amazing Exteriors has built its reputation on partnerships with the industry’s best manufacturers. When you choose us, you receive:
            </p>
            
            {/* Özel Check İkonlu Liste */}
            <ul className="space-y-5">
              {features.map((item, idx) => (
                <li key={idx} className="flex items-start gap-4 group">
                  <CheckCircle2 className="text-[#3A6B9C] w-6 h-6 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" strokeWidth={2.5} />
                  <span className="text-slate-700 font-medium leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            {/* 🔥 EFSANE CTA BUTONU BURADA 🔥 */}
            <div className="mt-14 w-full flex justify-center">
              <div className="relative group cursor-pointer">
                {/* Arkada sürekli nefes alan parıltı (Glow) efekti */}
                <div className="absolute -inset-1.5 bg-gradient-to-r from-[#3A6B9C] via-[#DE5D5D] to-[#3A6B9C] rounded-full blur opacity-50 group-hover:opacity-100 transition duration-500 animate-pulse"></div>
                
                {/* Ana Buton */}
                <button className="relative flex items-center gap-3 bg-slate-900 group-hover:bg-[#3A6B9C] text-white font-black text-[15px] px-12 py-5 rounded-full transition-all duration-300 shadow-[0_10px_30px_rgba(58,107,156,0.4)] tracking-[0.2em] uppercase transform group-hover:-translate-y-1 active:scale-95">
                  <span>Download Free Guide</span>
                  <Download size={20} className="group-hover:translate-y-1 transition-transform duration-300" strokeWidth={2.5} />
                </button>
              </div>
            </div>
            
          </div>

        </div>

        {/* 2. Alt Kısım: Partner Logoları Bandı */}
        <div className="pt-16 border-t border-gray-100">
          <p className="text-center text-sm font-bold text-slate-400 uppercase tracking-widest mb-10">
            Trusted by the Industry's Best
          </p>
          
          <div className="w-full overflow-hidden relative">
            <div className="animate-infinite-scroll flex items-center gap-16 md:gap-20">
              {duplicatedLogos.map((logo, index) => (
                <div key={index} className="relative flex-shrink-0 h-12 w-32 md:h-16 md:w-40 grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100">
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    fill
                    className="object-contain"
                  />
                </div>
              ))}
            </div>
            
            <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent z-10"></div>
            <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent z-10"></div>
          </div>
        </div>

      </div>
    </section>
  );
}