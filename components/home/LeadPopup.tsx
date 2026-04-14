"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { X, ShieldCheck, Award } from 'lucide-react';

export default function LeadPopup() {
  const [showPopup, setShowPopup] = useState(false);
  const [popupScale, setPopupScale] = useState(1);
  const [isMounted, setIsMounted] = useState(false);

  // 8 saniye sonra sahneye iner
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 8000); 
    return () => clearTimeout(timer);
  }, []);

  // PC TASARIMINI MOBİLE SIĞDIRAN MATEMATİKSEL ÖLÇEKLERME 🔥
  useEffect(() => {
    setIsMounted(true);
    const calcScale = () => {
      const vw = window.innerWidth;
      const vh = window.innerHeight;
      
      const BASE_W = 800; // Tasarım genişliği
      const BASE_H = 600; // Tasarım yüksekliği
      const padding = 20; // Güvenlik boşluğu

      const scaleX = (vw - padding) / BASE_W;
      const scaleY = (vh - padding) / BASE_H;
      
      // En küçük oranı alıyoruz ki hiçbir yerden taşmasın
      setPopupScale(Math.min(scaleX, scaleY, 1));
    };
    
    if (showPopup) {
      calcScale();
      window.addEventListener('resize', calcScale);
    }
    return () => window.removeEventListener('resize', calcScale);
  }, [showPopup]);

  if (!showPopup) return null;

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center overflow-hidden">
      {/* Karartma Overlay */}
      <div 
        className="absolute inset-0 bg-[#050A0F]/90 backdrop-blur-md animate-in fade-in duration-500"
        onClick={() => setShowPopup(false)}
      />
      
      {/* ANA POPUP - 800px SABİT, SCALE İLE KÜÇÜLÜYOR 🔥 */}
      <div 
        className="relative bg-[#0F1713] rounded-[2.5rem] shadow-[0_40px_120px_rgba(0,0,0,0.8)] flex flex-col border border-white/5 origin-center transition-all duration-300"
        style={{ 
          width: '800px', 
          height: '600px',
          transform: `scale(${popupScale})`,
          opacity: isMounted ? 1 : 0,
        }}
      >
        
        {/* Scott Yeşili Hareketli Dalgalar */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[2.5rem]">
            <div className="absolute top-[-50%] left-1/2 w-[200%] h-[200%] rounded-[40%] bg-[#087F23]/[0.05] animate-wave z-0"></div>
            <div className="absolute top-[-45%] left-1/2 w-[200%] h-[200%] rounded-[38%] bg-[#087F23]/[0.03] animate-wave-fast z-0"></div>
        </div>

        {/* Kapat Butonu */}
        <button 
          onClick={() => setShowPopup(false)}
          className="absolute top-6 right-6 z-40 bg-white/5 text-white/40 p-2.5 rounded-full hover:bg-[#087F23] hover:text-white transition-all backdrop-blur-md border border-white/5"
        >
          <X size={20} strokeWidth={3} />
        </button>

        {/* İÇERİK - FLEX-ROW (YAN YANA) ASLA BOZULMAZ 🔥 */}
        <div className="relative z-10 flex flex-row p-10 gap-10 h-full">
          
          {/* SOL: Trust Cards (300px Sabit) */}
          <div className="w-[300px] flex flex-col gap-6 justify-center">
              
              <div className="flex flex-col rounded-3xl overflow-hidden border border-white/5 bg-white/[0.03] backdrop-blur-xl group">
                  <div className="bg-[#087F23]/90 py-4 flex items-center justify-center h-16">
                      <ShieldCheck className="text-white" size={32} />
                  </div>
                  <div className="p-6 text-center">
                      <h3 className="text-white text-lg font-black uppercase">Trusted</h3>
                      <p className="text-emerald-100/60 text-[11px] font-bold mt-1">Dallas area integrity since 1997.</p>
                  </div>
              </div>

              <div className="flex flex-col rounded-3xl overflow-hidden border border-white/5 bg-white/[0.03] backdrop-blur-xl group">
                  <div className="bg-slate-800 py-4 flex items-center justify-center h-16">
                      <Award className="text-emerald-400" size={32} />
                  </div>
                  <div className="p-6 text-center">
                      <h3 className="text-white text-lg font-black uppercase">Premium</h3>
                      <p className="text-emerald-100/60 text-[11px] font-bold mt-1">Award-winning quality.</p>
                  </div>
              </div>
          </div>

          {/* SAĞ: Form Alanı */}
          <div className="flex-1 flex flex-col justify-center">
            <div className="mb-6 text-left">
              <h3 className="text-[38px] font-black text-white mb-1 tracking-tighter leading-none">Expert Estimate</h3>
              <p className="text-emerald-500 font-bold text-xs uppercase tracking-widest">Start Your Dallas Project Today</p>
            </div>

            <form className="space-y-3.5" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-3.5">
                <input type="text" placeholder="First Name" className="w-full px-5 py-3.5 bg-white/[0.03] border border-white/10 text-white text-xs rounded-2xl outline-none focus:border-[#087F23] transition-all" />
                <input type="text" placeholder="Last Name" className="w-full px-5 py-3.5 bg-white/[0.03] border border-white/10 text-white text-xs rounded-2xl outline-none focus:border-[#087F23] transition-all" />
              </div>

              <div className="grid grid-cols-2 gap-3.5">
                <input type="tel" placeholder="Phone Number" className="w-full px-5 py-3.5 bg-white/[0.03] border border-white/10 text-white text-xs rounded-2xl outline-none focus:border-[#087F23] transition-all" />
                <input type="email" placeholder="Email Address" className="w-full px-5 py-3.5 bg-white/[0.03] border border-white/10 text-white text-xs rounded-2xl outline-none focus:border-[#087F23] transition-all" />
              </div>

              <select className="w-full px-5 py-3.5 bg-white/[0.03] border border-white/10 text-white text-xs rounded-2xl outline-none focus:border-[#087F23] appearance-none cursor-pointer">
                <option className="bg-[#0F1713]">Select Service Needed...</option>
                <option className="bg-[#0F1713]">Roofing Installation</option>
                <option className="bg-[#0F1713]">Siding Replacement</option>
                <option className="bg-[#0F1713]">Window Services</option>
              </select>

              <div className="py-2">
                <p className="text-[#087F23] font-black text-[10px] mb-3 uppercase tracking-[0.2em]">Best time to contact?</p>
                <div className="flex gap-6">
                  {['Morning', 'Afternoon', 'Evening'].map((item) => (
                    <label key={item} className="flex items-center gap-2 cursor-pointer group">
                      <input type="radio" name="time" className="accent-[#087F23] w-4 h-4" />
                      <span className="text-white/50 text-[11px] font-bold uppercase tracking-wider group-hover:text-white transition-colors">{item}</span>
                    </label>
                  ))}
                </div>
              </div>

              <button type="submit" className="w-full bg-[#087F23] hover:bg-white hover:text-[#087F23] text-white font-black text-[12px] uppercase tracking-[0.3em] py-4.5 rounded-2xl transition-all shadow-xl transform active:scale-[0.98] mt-2">
                GET MY FREE QUOTE
              </button>
            </form>
          </div>
        </div>

        {/* ALT BAND - PC GÖRÜNÜMÜ KORUNDU 🔥 */}
        <div className="relative mt-auto z-20 bg-white p-5 flex flex-row items-center justify-between border-t border-slate-200 rounded-b-[2.5rem]">
           <div className="flex-1 flex justify-center border-r border-slate-200">
             <Image src="/logs12.webp" alt="Awards" width={280} height={35} className="object-contain h-7 grayscale brightness-0 opacity-80" />
           </div>
           <div className="flex-1 flex flex-col items-center justify-center">
             <span className="text-[10px] font-black text-[#087F23] uppercase tracking-widest mb-0.5">Scott Exteriors</span>
             <span className="text-[8px] font-bold text-[#087F23]/60 uppercase tracking-widest leading-none italic">Managed by B&S Media</span>
           </div>
        </div>

      </div>
    </div>
  );
}