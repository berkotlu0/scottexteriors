"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
  const trustFeatures = [
    {
      icon: Zap,
      title: "Energy Efficiency",
      desc: "Our premium window and door solutions offer advanced glass packages. Stay cooler in the Texas summer and warmer in winter."
    },
    {
      icon: ShieldCheck,
      title: "Texas Durability",
      desc: "Engineered to withstand extreme conditions. From sudden DFW hailstorms to blistering heat, our solutions maintain elite performance."
    },
    {
      icon: TrendingUp,
      title: "Increased Value",
      desc: "New roofing, siding, and windows provide among the highest ROI. Transform your home's exterior with an immediate visual impact."
    },
    {
      icon: Wrench,
      title: "Low Maintenance",
      desc: "Eliminate the burden of constant upkeep. We install products with advanced finishes that resist fading, peeling, and rot."
    }
  ];

  const processSteps = [
    { icon: MessageSquare, title: "Free Consultation", desc: "Expert assessment of your home's needs." },
    { icon: Ruler, title: "Custom Design", desc: "Precise measurements for a perfect fit." },
    { icon: Hammer, title: "Pro Installation", desc: "Talented, fully-insured Dallas crews." },
    { icon: CheckCircle, title: "Quality Inspection", desc: "Thorough walkthrough for satisfaction." },
    { icon: FileCheck2, title: "Warranty Registration", desc: "Manufacturer & labor warranties activated." }
  ];

  // Sadece Üst Kısım İçin Carousel State'i
  const [featureIdx, setFeatureIdx] = useState(0);

  useEffect(() => {
    const featureTimer = setInterval(() => {
      setFeatureIdx((prev) => (prev + 1) % trustFeatures.length);
    }, 4500);
    return () => clearInterval(featureTimer);
  }, [trustFeatures.length]);

  // Build Hatası Fix: Büyük harfle başlayan değişkene atama
  const FeatureIcon = trustFeatures[featureIdx].icon;

  return (
    <section className="relative w-full py-24 bg-emerald-50/50 border-y border-emerald-100/50 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6">
        
        {/* --- 1. BÖLÜM: WHY SCOTT EXTERIORS (Carousel) --- */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-[#087F23] font-black tracking-[0.2em] uppercase mb-4 text-sm">
            The Scott Standard
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Why Homeowners Trust Scott
          </h2>
        </div>

        {/* MASAÜSTÜ: 4'lü Grid */}
        <div className="hidden lg:grid grid-cols-2 gap-8 mb-32">
          {trustFeatures.map((feature, idx) => (
            <div key={idx} className="group bg-white p-10 rounded-2xl border border-emerald-100 shadow-sm hover:shadow-2xl transition-all duration-500 relative overflow-hidden">
              <div className="absolute -right-10 -top-10 w-48 h-48 bg-emerald-50 rounded-full group-hover:scale-[1.8] transition-transform duration-1000 z-0"></div>
              <div className="relative z-10 flex gap-6 items-start">
                <div className="bg-white shadow-md p-4 rounded-xl text-[#087F23] border border-emerald-50">
                  <feature.icon size={36} strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-[#087F23] transition-colors">{feature.title}</h3>
                  <p className="text-slate-600 leading-relaxed font-medium text-[15px]">{feature.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* MOBİL: Carousel (Statik değil, kaymaya devam ediyor) 🔥 */}
        <div className="lg:hidden mb-24 relative px-2">
          <AnimatePresence mode="wait">
            <motion.div
              key={featureIdx}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="bg-white p-8 rounded-3xl border border-emerald-100 shadow-xl"
            >
              <div className="flex flex-col items-center text-center">
                <div className="bg-emerald-50 p-5 rounded-2xl text-[#087F23] mb-6">
                  <FeatureIcon size={44} strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-4">{trustFeatures[featureIdx].title}</h3>
                <p className="text-slate-600 font-medium leading-relaxed">{trustFeatures[featureIdx].desc}</p>
              </div>
            </motion.div>
          </AnimatePresence>
          <div className="flex justify-center gap-2 mt-8">
            {trustFeatures.map((_, i) => (
              <div key={i} className={`h-1.5 rounded-full transition-all duration-500 ${featureIdx === i ? 'w-8 bg-[#087F23]' : 'w-2 bg-emerald-200'}`} />
            ))}
          </div>
        </div>

        {/* --- 2. BÖLÜM: 5-STEP PROCESS (MİNİ VE STATİK) --- */}
        <div className="mt-20">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight uppercase">
              Our Professional Process
            </h2>
            <div className="w-20 h-1.5 bg-[#087F23] mx-auto mt-6 rounded-full"></div>
          </div>

          {/* MASAÜSTÜ: 5'li Grid */}
          <div className="hidden lg:grid grid-cols-5 gap-6 relative">
            <div className="absolute top-12 left-0 w-full h-[2px] bg-emerald-100 z-0"></div>
            {processSteps.map((step, idx) => (
              <div key={idx} className="flex flex-col items-center text-center group relative z-10">
                <div className="w-24 h-24 bg-white rounded-full border-4 border-emerald-50 flex items-center justify-center shadow-lg group-hover:border-[#087F23] transition-all duration-500 mb-6">
                  <span className="absolute -top-1 -right-1 bg-[#087F23] text-white w-8 h-8 rounded-full flex items-center justify-center font-black text-xs shadow-md">{idx + 1}</span>
                  <step.icon size={32} className="text-[#087F23]" strokeWidth={1.5} />
                </div>
                <h4 className="text-base font-bold text-slate-900 mb-2">{step.title}</h4>
                <p className="text-[13px] text-slate-500 font-medium px-2">{step.desc}</p>
              </div>
            ))}
          </div>

          {/* 🔥 MOBİL: MİNİ VE STATİK LİSTE (Carousel Değil!) 🔥 */}
          <div className="lg:hidden flex flex-col gap-4 px-2">
            {processSteps.map((step, idx) => (
              <div 
                key={idx} 
                className="flex items-center gap-5 bg-white/60 p-4 rounded-2xl border border-emerald-100/50 shadow-sm"
              >
                <div className="relative flex-shrink-0 w-12 h-12 bg-[#087F23] rounded-xl flex items-center justify-center text-white shadow-md">
                  <step.icon size={22} strokeWidth={2} />
                  <span className="absolute -top-2 -right-2 bg-slate-900 text-white w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-black border border-white">
                    {idx + 1}
                  </span>
                </div>
                <div className="flex flex-col">
                  <h4 className="text-sm font-black text-slate-900 uppercase tracking-tight">{step.title}</h4>
                  <p className="text-[12px] text-slate-500 font-medium leading-tight mt-0.5">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}