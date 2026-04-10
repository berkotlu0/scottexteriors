"use client";

import React, { useState, useEffect } from 'react';
import { MapPin, Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import Image from 'next/image';

export default function ServiceAreas() {
  // 1. Hizmet Bölgeleri Verisi
  const locations = [
    { city: "Boise", state: "Idaho", mapQuery: "Boise,+ID" },
    { city: "Oklahoma City", state: "Oklahoma", mapQuery: "Oklahoma+City,+OK" },
    { city: "Houston", state: "Texas", mapQuery: "Houston,+TX" },
    { city: "Dallas", state: "Texas", mapQuery: "Dallas,+TX" },
    { city: "San Antonio", state: "Texas", mapQuery: "San+Antonio,+TX" },
    { city: "Tyler", state: "Texas", mapQuery: "Tyler,+TX" },
    { city: "Austin", state: "Texas", mapQuery: "Austin,+TX" },
    { city: "Ogden", state: "Utah", mapQuery: "Ogden,+UT" }
  ];

  // 2. Google Yorumları Verisi
  const googleReviews = [
    {
      id: 1,
      name: "Michael R.",
      location: "Austin, TX",
      date: "2 weeks ago",
      text: "Amazing Exteriors completely transformed our 1990s home. The James Hardie siding installation was flawless, and the crew was incredibly professional. They cleaned up every day before leaving. Worth every penny!",
    },
    {
      id: 2,
      name: "Sarah Jenkins",
      location: "Dallas, TX",
      date: "1 month ago",
      text: "We replaced all 14 windows in our house with Infinity by Marvin. The difference in our energy bill was immediate. The sales process was zero-pressure, and the installers were meticulous. Highly recommend.",
    },
    {
      id: 3,
      name: "David T.",
      location: "Boise, ID",
      date: "3 months ago",
      text: "Fantastic experience from start to finish. We had a tight deadline before winter hit, and they managed to get our Provia doors installed right on time. The quality is exceptional.",
    },
    {
      id: 4,
      name: "Elena M.",
      location: "San Antonio, TX",
      date: "4 months ago",
      text: "After a massive hailstorm, we needed full exterior replacement. Amazing Exteriors handled everything. Their 5-step process is real; they kept us informed at every stage. Our house looks brand new.",
    }
  ];

  // Yorumlar Slider'ı için State
  const [currentReview, setCurrentReview] = useState(0);

  // Otomatik dönen yorum slider'ı
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentReview((prev) => (prev === googleReviews.length - 1 ? 0 : prev + 1));
    }, 6000); // Her 6 saniyede bir değişir
    return () => clearInterval(timer);
  }, [googleReviews.length]);

  const nextReview = () => setCurrentReview((prev) => (prev === googleReviews.length - 1 ? 0 : prev + 1));
  const prevReview = () => setCurrentReview((prev) => (prev === 0 ? googleReviews.length - 1 : prev - 1));

  return (
    <section className="relative w-full py-24 bg-white overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6">
        
        {/* --- 1. BÖLÜM: SERVICE AREAS --- */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-[#3A6B9C] font-black tracking-[0.2em] uppercase mb-4 text-sm">
            Where We Work
          </p>
          <h2 className="text-4xl font-extrabold text-[#1D3557] tracking-tight mb-6">
            SERVICE AREA
          </h2>
          <p className="text-slate-600 font-medium leading-relaxed">
            We Serve Homeowners from Multiple Locations Across the Southwest and Mountain West. Amazing Exteriors provides professional Infinity by Marvin window installation and James Hardie siding services throughout:
          </p>
        </div>

        {/* Lokasyon Grid'i */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-32">
          {locations.map((loc, idx) => (
            <a 
              key={idx} 
              href={`https://maps.google.com/?q=$${loc.mapQuery}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-[#F8F9FA] border border-gray-100 rounded-xl p-6 flex flex-col items-center justify-center text-center hover:bg-[#3A6B9C] hover:border-[#3A6B9C] transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <div className="bg-white p-3 rounded-full mb-4 shadow-sm text-[#DE5D5D] group-hover:text-[#3A6B9C] group-hover:bg-white transition-colors">
                <MapPin size={28} strokeWidth={2} />
              </div>
              <h3 className="text-lg font-bold text-slate-900 group-hover:text-white transition-colors">
                {loc.city}
              </h3>
              <p className="text-sm text-slate-500 font-medium group-hover:text-white/80 transition-colors">
                {loc.state}
              </p>
            </a>
          ))}
        </div>

        {/* --- 2. BÖLÜM: GOOGLE YORUMLARI CAROUSEL --- */}
        <div className="max-w-5xl mx-auto relative">
          
          {/* Arka plandaki dev tırnak işareti */}
          <div className="absolute -top-10 -left-10 text-gray-100 z-0 hidden md:block">
            <Quote size={120} fill="currentColor" />
          </div>

          <div className="relative z-10 bg-white rounded-3xl border border-gray-100 shadow-[0_20px_50px_rgba(0,0,0,0.05)] p-8 md:p-16">
            
            {/* Google Logosu ve Yıldızlar */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 md:mb-10 border-b border-gray-100 pb-6">
              <div className="flex items-center gap-3 mb-4 md:mb-0">
                <span className="text-2xl font-bold tracking-tighter">
                  <span className="text-[#4285F4]">G</span>
                  <span className="text-[#EA4335]">o</span>
                  <span className="text-[#FBBC05]">o</span>
                  <span className="text-[#4285F4]">g</span>
                  <span className="text-[#34A853]">l</span>
                  <span className="text-[#EA4335]">e</span>
                </span>
                <span className="text-slate-400 font-medium text-xs md:text-sm border-l border-gray-300 pl-3">
                  Verified Customer Reviews
                </span>
              </div>
              
              <div className="flex items-center gap-2">
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} size={20} className="text-[#FBBC05] fill-[#FBBC05]" />
                  ))}
                </div>
                <span className="font-bold text-slate-800 ml-2 text-sm md:text-base">4.9/5 Rating</span>
              </div>
            </div>

            {/* Carousel İçeriği */}
            <div className="relative min-h-[220px] md:min-h-[180px] flex flex-col justify-between">
              <div className="w-full transition-opacity duration-500 ease-in-out">
                <p className="text-lg md:text-2xl text-slate-700 leading-relaxed font-medium italic mb-8">
                  "{googleReviews[currentReview].text}"
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-bold text-slate-900 text-base md:text-lg">
                      {googleReviews[currentReview].name}
                    </h4>
                    <p className="text-xs md:text-sm text-slate-500 font-medium">
                      {googleReviews[currentReview].location} • {googleReviews[currentReview].date}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* 🔥 Carousel Kontrolleri (Mobilde Küçük, PC'de Büyük) 🔥 */}
            <div className="absolute bottom-6 right-6 md:bottom-10 md:right-10 flex gap-2 md:gap-3">
              <button 
                onClick={prevReview}
                className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-gray-200 flex items-center justify-center text-slate-600 hover:bg-[#3A6B9C] hover:text-white hover:border-[#3A6B9C] transition-all shadow-sm"
              >
                <ChevronLeft size={20} className="md:w-6 md:h-6" />
              </button>
              <button 
                onClick={nextReview}
                className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-gray-200 flex items-center justify-center text-slate-600 hover:bg-[#3A6B9C] hover:text-white hover:border-[#3A6B9C] transition-all shadow-sm"
              >
                <ChevronRight size={20} className="md:w-6 md:h-6" />
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}