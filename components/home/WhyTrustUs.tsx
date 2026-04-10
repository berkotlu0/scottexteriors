"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Zap, 
  ShieldCheck, 
  TrendingUp, 
  Wrench, 
  MessageSquare, 
  Ruler, 
  Hammer, 
  CheckCircle, 
  FileCheck2 
} from 'lucide-react';

export default function WhyTrustUs() {
  // Neden Biz (4'lü Kart) Verileri
  const trustFeatures = [
    {
      icon: Zap,
      title: "Energy Efficiency That Saves Money",
      desc: "Infinity by Marvin windows offer multiple glass options, including Low-E coatings and argon gas fills. Combined with James Hardie siding, your home stays cooler in summer and warmer in winter, significantly reducing HVAC costs."
    },
    {
      icon: ShieldCheck,
      title: "Durability Designed for Regional Climates",
      desc: "Engineered to withstand extreme weather conditions. From Texas hailstorms to freezing temperatures, these products maintain their elite performance and pristine appearance for decades."
    },
    {
      icon: TrendingUp,
      title: "Increased Home Value & Curb Appeal",
      desc: "New windows and siding provide among the highest returns on investment. James Hardie offers immediate visual impact, while Infinity by Marvin windows enhance aesthetics with clean sightlines."
    },
    {
      icon: Wrench,
      title: "Low Maintenance Exteriors",
      desc: "Eliminate the burden of constant upkeep. Ultrex fiberglass windows never need painting, and James Hardie ColorPlus Technology provides a factory-applied finish that resists fading."
    }
  ];

  // 5 Adımlık Süreç Verileri
  const processSteps = [
    { icon: MessageSquare, title: "Free Consultation", desc: "Expert assessment of your needs with detailed product info." },
    { icon: Ruler, title: "Custom Design", desc: "Precise measurements ensure a perfect fit and optimal performance." },
    { icon: Hammer, title: "Pro Installation", desc: "Factory-trained installers follow best practices." },
    { icon: CheckCircle, title: "Quality Inspection", desc: "Thorough final walkthrough ensures complete satisfaction." },
    { icon: FileCheck2, title: "Warranty Registration", desc: "Full manufacturer and contractor warranties activated." }
  ];

  return (
    <section className="relative w-full py-24 bg-[#EFF6FC] border-y border-gray-100 shadow-inner overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6">
        
        {/* --- 1. BÖLÜM: WHY TRUST US --- */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-[#3A6B9C] font-black tracking-[0.2em] uppercase mb-4 text-sm">
            The Amazing Standard
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#1D3557] leading-tight tracking-tight">
            Why Homeowners Trust <br/> Amazing Exteriors
          </h2>
        </div>

        {/* 4'lü Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32">
          {trustFeatures.map((feature, idx) => (
            <div 
              key={idx} 
              className="group bg-white p-10 rounded-2xl border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 relative overflow-hidden cursor-default"
            >
              {/* SÜREKLİ HAREKET EDEN BALON */}
              <div className="absolute -right-10 -top-10 w-48 h-48 bg-[#D9E8F5] rounded-full animate-float-blob group-hover:scale-[1.8] transition-transform duration-1000 ease-out z-0"></div>
              
              <div className="relative z-10 flex flex-col sm:flex-row gap-6 items-start">
                
                {/* 🔥 İKON KUTUSU - Loop Animasyonu Burada 🔥 */}
                <div className="bg-white shadow-md p-4 rounded-xl text-[#3A6B9C] group-hover:text-[#DE5D5D] transition-colors duration-500 flex-shrink-0">
                  <motion.div
                    animate={{ y: [0, -6, 0] }} // Yukarı aşağı süzülme
                    transition={{ 
                      duration: 3, // 3 saniyede bir tur
                      repeat: Infinity, // Sonsuz döngü
                      ease: "easeInOut", // Yumuşak geçiş
                      delay: idx * 0.2 // Hepsi aynı anda zıplamasın diye ufak gecikmeler
                    }}
                  >
                    <feature.icon size={36} strokeWidth={1.5} />
                  </motion.div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-[#3A6B9C] transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed font-medium text-[15px]">
                    {feature.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* --- 2. BÖLÜM: 5-STEP PROCESS --- */}
        <div className="mt-20">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#1D3557] tracking-tight">
              Our Five-Step Professional Installation Process
            </h2>
            <div className="w-24 h-1.5 bg-[#DE5D5D] mx-auto mt-6 rounded-full"></div>
          </div>

          <div className="relative">
            {/* Masaüstü için arkadan geçen yatay çizgi */}
            <div className="hidden lg:block absolute top-12 left-0 w-full h-[2px] bg-gray-200 z-0"></div>

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-6 relative z-10">
              {processSteps.map((step, idx) => (
                <div key={idx} className="flex flex-col items-center text-center group">
                  
                  {/* Numara ve İkon (Yuvarlak Kutu) */}
                  <div className="relative w-24 h-24 bg-white rounded-full border-4 border-gray-100 flex items-center justify-center shadow-lg group-hover:border-[#3A6B9C] group-hover:scale-110 transition-all duration-500 mb-6">
                    <span className="absolute -top-2 -right-2 bg-[#1D3557] text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm shadow-md z-20">
                      {idx + 1}
                    </span>
                    
                    {/* Alttaki yuvarlak ikonlar için de ufak bir "Nefes Alma" loop animasyonu */}
                    <motion.div
                      animate={{ scale: [1, 1.1, 1] }} 
                      transition={{ 
                        duration: 3, 
                        repeat: Infinity, 
                        ease: "easeInOut",
                        delay: idx * 0.3
                      }}
                    >
                      <step.icon size={32} className="text-[#3A6B9C] group-hover:text-[#DE5D5D] transition-colors duration-300 relative z-10" strokeWidth={1.5} />
                    </motion.div>
                  </div>

                  <h4 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-[#3A6B9C] transition-colors">
                    {step.title}
                  </h4>
                  <p className="text-sm text-slate-500 font-medium leading-relaxed px-2">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}