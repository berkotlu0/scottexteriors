"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { X } from 'lucide-react';

export default function LeadPopup() {
  const [showPopup, setShowPopup] = useState(false);
  const [popupScale, setPopupScale] = useState(1);
  const [isMounted, setIsMounted] = useState(false);

  // Popup'ın 8 saniye sonra açılması
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 8000); 
    return () => clearTimeout(timer);
  }, []);

  // MATEMATİKSEL KÜÇÜLTME MERKEZİ
  useEffect(() => {
    setIsMounted(true);
    const calcScale = () => {
      const vw = window.innerWidth;
      const vh = window.innerHeight;
      
      // Popup'ın Orijinal (PC) Boyutları
      const BASE_W = 800; 
      const BASE_H = 600;

      // Ekran kenarlarından bırakılacak güvenlik boşluğu (Padding)
      const paddingX = vw < 640 ? 20 : 40; 
      const paddingY = vh < 640 ? 20 : 40;

      // Ekrana tam sığması için gereken oranı hesapla
      const scaleX = (vw - paddingX) / BASE_W;
      const scaleY = (vh - paddingY) / BASE_H;
      
      // En küçük olan oranı al (hiçbir yerden taşmasın)
      const finalScale = Math.min(scaleX, scaleY, 1);
      
      setPopupScale(finalScale);
    };
    
    if (showPopup) {
      calcScale();
      window.addEventListener('resize', calcScale);
    }
    return () => window.removeEventListener('resize', calcScale);
  }, [showPopup]);

  if (!showPopup) return null;

  return (
    // Dış Taşıyıcı: Sabit, kaydırmaz, ekranı kaplar
    <div className="fixed inset-0 z-[999] flex items-center justify-center overflow-hidden">
      
      {/* Arka Plan Karartması */}
      <div 
        className="absolute inset-0 bg-[#0B1221]/70 backdrop-blur-md animate-in fade-in duration-500"
        onClick={() => setShowPopup(false)}
      />
      
      {/* ANA POPUP: Sabit 800px genişlikte, sadece "scale" ile küçülür/büyür */}
      <div 
        className="relative bg-[#1D3557] rounded-[2rem] shadow-[0_30px_100px_rgba(0,0,0,0.5)] flex flex-col border border-white/10 origin-center transition-all duration-300"
        style={{ 
          width: '800px', 
          transform: `scale(${popupScale})`,
          opacity: isMounted ? 1 : 0,
          animation: 'zoomIn 0.5s ease-out forwards'
        }}
      >
        
        {/* Dalgalar */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[2rem]">
            <div className="absolute top-[-50%] left-1/2 w-[200%] h-[200%] rounded-[40%] bg-white/[0.03] animate-wave z-0"></div>
            <div className="absolute top-[-45%] left-1/2 w-[200%] h-[200%] rounded-[38%] bg-white/[0.02] animate-wave-fast z-0"></div>
        </div>

        {/* Kapat Butonu */}
        <button 
          onClick={() => setShowPopup(false)}
          className="absolute top-5 right-5 z-30 bg-black/20 text-white p-2.5 rounded-full hover:bg-[#3A6B9C] transition-all backdrop-blur-md border border-white/10"
        >
          <X size={20} strokeWidth={3} />
        </button>

        {/* İÇERİK - Tamamen Sabit PC Tasarımı (Flex Row) */}
        <div className="relative z-10 flex flex-row p-8 gap-8">
          
          {/* SOL Taraf: Promosyonlar (Genişlik: 300px sabit) */}
          <div className="w-[300px] flex flex-col gap-5 justify-center">
              
              {/* Infinity Promo */}
              <div className="flex flex-col rounded-2xl overflow-hidden shadow-xl border border-white/5 bg-[#3A3A3A]/40 backdrop-blur-md">
                  <div className="bg-[#2B5E93]/80 py-3 flex items-center justify-center h-16">
                      <Image src="/Infinity_Logo_CMYK_WHITE.svg" alt="Infinity" width={140} height={40} className="object-contain" />
                  </div>
                  <div className="p-5 text-center">
                      <h3 className="text-[#3A6B9C] text-xl font-black mb-1 tracking-tighter italic">SPRING SALE</h3>
                      <p className="text-white text-xs font-bold mb-2 leading-tight">Save $325 each Window, $775 each Patio Door</p>
                      <p className="text-white/50 text-[9px] mb-4 font-medium uppercase tracking-widest">Plus, NO Payments/Interest for 2 Years@</p>
                      <button type="button" className="bg-[#3A6B9C] hover:bg-white hover:text-[#3A6B9C] text-white font-black text-[10px] px-8 py-3 rounded-full transition-all uppercase tracking-widest w-full">FIND OUT MORE</button>
                  </div>
              </div>

              {/* James Hardie Promo */}
              <div className="flex flex-col rounded-2xl overflow-hidden shadow-xl border border-white/5 bg-[#3A3A3A]/40 backdrop-blur-md">
                  <div className="bg-[#FDB913] py-3 flex items-center justify-center h-16">
                      <Image src="/James_Hardie_logo.webp" alt="James Hardie" width={140} height={40} className="object-contain" />
                  </div>
                  <div className="p-5 text-center">
                      <h3 className="text-[#FDB913] text-xl font-black mb-1 tracking-tighter italic">SPRING SALE</h3>
                      <p className="text-white text-xs font-bold mb-5 italic leading-tight">50% OFF Siding Materials</p>
                      <button type="button" className="bg-[#FDB913] hover:bg-white text-black font-black text-[10px] px-8 py-3 rounded-full transition-all uppercase tracking-widest w-full">FIND OUT MORE</button>
                  </div>
              </div>
          </div>

          {/* SAĞ Taraf: Form (Genişlik: Kalan boşluk) */}
          <div className="flex-1 flex flex-col justify-center">
            <h3 className="text-[32px] font-black text-white mb-1 tracking-tighter leading-none">Request Your Quote</h3>
            <p className="text-white/60 mb-5 font-medium text-xs">Simply fill out the form below to secure your limited-time savings.</p>

            <form className="space-y-3.5">
              <select className="w-full px-4 py-3 bg-white/[0.05] border border-white/10 text-white text-xs rounded-xl outline-none focus:border-[#3A6B9C] transition-colors appearance-none cursor-pointer">
                <option className="bg-[#1D3557]">Please select your location</option>
                <option className="bg-[#1D3557]">Austin, TX</option>
                <option className="bg-[#1D3557]">Dallas, TX</option>
                <option className="bg-[#1D3557]">Houston, TX</option>
                <option className="bg-[#1D3557]">San Antonio, TX</option>
              </select>

              <div className="grid grid-cols-2 gap-3.5">
                <input type="text" placeholder="First Name" className="w-full px-4 py-3 bg-white/[0.05] border border-white/10 text-white placeholder:text-white/30 text-xs rounded-xl outline-none focus:border-[#3A6B9C] transition-all" />
                <input type="text" placeholder="Last Name" className="w-full px-4 py-3 bg-white/[0.05] border border-white/10 text-white placeholder:text-white/30 text-xs rounded-xl outline-none focus:border-[#3A6B9C] transition-all" />
              </div>

              <div className="grid grid-cols-2 gap-3.5">
                <input type="tel" placeholder="Mobile Phone" className="w-full px-4 py-3 bg-white/[0.05] border border-white/10 text-white placeholder:text-white/30 text-xs rounded-xl outline-none focus:border-[#3A6B9C] transition-all" />
                <input type="email" placeholder="Email" className="w-full px-4 py-3 bg-white/[0.05] border border-white/10 text-white placeholder:text-white/30 text-xs rounded-xl outline-none focus:border-[#3A6B9C] transition-all" />
              </div>

              <input type="text" placeholder="Zip Code" className="w-full px-4 py-3 bg-white/[0.05] border border-white/10 text-white placeholder:text-white/30 text-xs rounded-xl outline-none focus:border-[#3A6B9C] transition-all" />

              <div className="py-1">
                <p className="text-[#3A6B9C] font-black text-[10px] mb-2.5 uppercase tracking-[0.2em]">What are you interested in?</p>
                <div className="flex gap-5">
                  {['Windows', 'Doors', 'Siding'].map((item) => (
                    <label key={item} className="flex items-center gap-2 cursor-pointer group">
                      <input type="radio" name="interest" className="accent-[#3A6B9C] w-4 h-4" />
                      <span className="text-white/70 text-[11px] font-bold uppercase tracking-wider group-hover:text-white transition-colors">{item}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="flex items-start gap-2.5 pt-1">
                <input type="checkbox" id="consent" className="mt-0.5 accent-[#3A6B9C] shrink-0 w-3.5 h-3.5" required />
                <label htmlFor="consent" className="text-[10px] text-white/40 leading-relaxed italic">
                  I agree to be contacted by Amazing Exteriors via phone/SMS/email. We respect your <Link href="/privacy" className="text-[#3A6B9C] hover:text-white font-bold transition-colors">Privacy Policy</Link>.
                </label>
              </div>

              <button type="submit" className="w-full bg-[#3A6B9C] hover:bg-white hover:text-[#3A6B9C] text-white font-black text-[11px] uppercase tracking-[0.3em] py-4 rounded-full transition-all shadow-2xl transform active:scale-95 mt-1">
                SEND MESSAGE
              </button>
            </form>
          </div>
        </div>

        {/* Alt Logo Bandı */}
        <div className="relative z-10 bg-white p-6 flex items-center justify-between border-t border-white/10 rounded-b-[2rem]">
          {[
            { src: "/popup/bbb-768x361.png", alt: "BBB" },
            { src: "/popup/qualifiedremodeler.png", alt: "Qualified Remodeler" },
            { src: "/popup/google-768x361.png", alt: "Google" },
            { src: "/popup/facebook-768x361.png", alt: "Facebook" }
          ].map((item, i) => (
            <div key={i} className={`flex-1 px-4 flex justify-center ${i < 3 ? 'border-r border-slate-100' : ''}`}>
              <Image 
                src={item.src} 
                alt={item.alt} 
                width={120} 
                height={40} 
                className="object-contain h-8 hover:scale-110 transition-transform duration-300" 
              />
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}