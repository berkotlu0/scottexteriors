"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { X } from 'lucide-react';

export default function LeadPopup() {
  const [showPopup, setShowPopup] = useState(false);
  const [popupScale, setPopupScale] = useState(1);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 8000); 
    return () => clearTimeout(timer);
  }, []);

  // Ekrana sığdırmak için dinamik scale hesapla
  useEffect(() => {
    const calcScale = () => {
      const vw = window.innerWidth;
      const vh = window.innerHeight;
      // Popup doğal boyutu yaklaşık 1000x900px
      const scaleX = (vw - 24) / 1000; // 12px padding her taraf
      const scaleY = (vh - 24) / 900;
      const s = Math.min(scaleX, scaleY, 1); // max 1, büyütme yok
      setPopupScale(s);
    };
    calcScale();
    window.addEventListener('resize', calcScale);
    return () => window.removeEventListener('resize', calcScale);
  }, []);

  if (!showPopup) return null;

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-[#0B1221]/50 backdrop-blur-lg animate-in fade-in duration-500"
        onClick={() => setShowPopup(false)}
      />
      
      {/* Ana Popup - dinamik scale */}
      <div 
        className="relative bg-[#1D3557] w-[1000px] rounded-[2rem] shadow-[0_30px_100px_rgba(0,0,0,0.5)] flex flex-col border border-white/10 animate-in slide-in-from-top-10 duration-700 origin-center"
        style={{ transform: `scale(${popupScale})` }}
      >
        
        {/* Dalgalar */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[2rem]">
            <div className="absolute top-[-50%] left-1/2 w-[200%] h-[200%] rounded-[40%] bg-white/[0.03] animate-wave z-0"></div>
            <div className="absolute top-[-45%] left-1/2 w-[200%] h-[200%] rounded-[38%] bg-white/[0.02] animate-wave-fast z-0"></div>
        </div>

        {/* Kapat */}
        <button 
          onClick={() => setShowPopup(false)}
          className="absolute top-6 right-6 z-30 bg-white/10 text-white p-2 rounded-full hover:bg-[#3A6B9C] transition-all backdrop-blur-sm"
        >
          <X size={20} strokeWidth={3} />
        </button>

        {/* İçerik */}
        <div className="relative z-10 flex flex-row p-12 gap-10">
          
          {/* SOL */}
          <div className="w-1/2 flex flex-col gap-6 justify-center">
              <div className="flex flex-col rounded-2xl overflow-hidden shadow-2xl border border-white/5 bg-[#3A3A3A]/40 backdrop-blur-md">
                  <div className="bg-[#2B5E93]/80 py-4 flex items-center justify-center h-20">
                      <Image src="/Infinity_Logo_CMYK_WHITE.svg" alt="Infinity" width={180} height={50} className="object-contain" />
                  </div>
                  <div className="p-6 text-center">
                      <h3 className="text-[#3A6B9C] text-2xl font-black mb-1 tracking-tighter italic">SPRING SALE</h3>
                      <p className="text-white text-sm font-bold mb-2">Save $325 each Window, $775 each Patio Door</p>
                      <p className="text-white/50 text-[11px] mb-5 font-medium uppercase tracking-widest">Plus, NO Payments/Interest for 2 Years@</p>
                      <button className="bg-[#3A6B9C] hover:bg-white hover:text-[#3A6B9C] text-white font-black text-[10px] px-8 py-3 rounded-full transition-all uppercase tracking-widest">FIND OUT MORE</button>
                  </div>
              </div>

              <div className="flex flex-col rounded-2xl overflow-hidden shadow-2xl border border-white/5 bg-[#3A3A3A]/40 backdrop-blur-md">
                  <div className="bg-[#FDB913] py-4 flex items-center justify-center h-20">
                      <Image src="/James_Hardie_logo.webp" alt="James Hardie" width={180} height={50} className="object-contain" />
                  </div>
                  <div className="p-6 text-center">
                      <h3 className="text-[#FDB913] text-2xl font-black mb-1 tracking-tighter italic">SPRING SALE</h3>
                      <p className="text-white text-sm font-bold mb-6 italic">50% OFF Siding Materials</p>
                      <button className="bg-[#FDB913] hover:bg-white text-black font-black text-[10px] px-8 py-3 rounded-full transition-all uppercase tracking-widest">FIND OUT MORE</button>
                  </div>
              </div>
          </div>

          {/* SAĞ */}
          <div className="w-1/2 flex flex-col justify-center">
            <h3 className="text-4xl font-black text-white mb-3 tracking-tighter">Request Your Spring Quote</h3>
            <p className="text-white/60 mb-8 font-medium text-sm">Simply fill out the form below to secure your limited-time savings.</p>

            <form className="space-y-4">
              <select className="w-full px-5 py-4 bg-white/[0.05] border border-white/10 text-white text-sm rounded-xl outline-none focus:border-[#3A6B9C] transition-colors appearance-none cursor-pointer">
                <option className="bg-[#1D3557]">Please select your location</option>
                <option className="bg-[#1D3557]">Austin, TX</option>
                <option className="bg-[#1D3557]">Dallas, TX</option>
                <option className="bg-[#1D3557]">Houston, TX</option>
                <option className="bg-[#1D3557]">San Antonio, TX</option>
              </select>

              <div className="grid grid-cols-2 gap-4">
                <input type="text" placeholder="First Name" className="w-full px-5 py-4 bg-white/[0.05] border border-white/10 text-white placeholder:text-white/30 text-sm rounded-xl outline-none focus:border-[#3A6B9C] transition-all" />
                <input type="text" placeholder="Last Name" className="w-full px-5 py-4 bg-white/[0.05] border border-white/10 text-white placeholder:text-white/30 text-sm rounded-xl outline-none focus:border-[#3A6B9C] transition-all" />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <input type="tel" placeholder="Mobile Phone" className="w-full px-5 py-4 bg-white/[0.05] border border-white/10 text-white placeholder:text-white/30 text-sm rounded-xl outline-none focus:border-[#3A6B9C] transition-all" />
                <input type="email" placeholder="Email" className="w-full px-5 py-4 bg-white/[0.05] border border-white/10 text-white placeholder:text-white/30 text-sm rounded-xl outline-none focus:border-[#3A6B9C] transition-all" />
              </div>

              <input type="text" placeholder="Zip Code" className="w-full px-5 py-4 bg-white/[0.05] border border-white/10 text-white placeholder:text-white/30 text-sm rounded-xl outline-none focus:border-[#3A6B9C] transition-all" />

              <div className="py-2">
                <p className="text-[#3A6B9C] font-black text-[10px] mb-3 uppercase tracking-[0.2em]">What are you interested in?</p>
                <div className="flex gap-6">
                  {['Windows', 'Doors', 'Siding'].map((item) => (
                    <label key={item} className="flex items-center gap-2 cursor-pointer group">
                      <input type="radio" name="interest" className="accent-[#3A6B9C] w-4 h-4" />
                      <span className="text-white/70 text-xs font-bold uppercase tracking-wider group-hover:text-white transition-colors">{item}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="flex items-start gap-3 pt-4">
                <input type="checkbox" id="consent" className="mt-1 accent-[#3A6B9C]" required />
                <label htmlFor="consent" className="text-[10px] text-white/40 leading-relaxed italic">
                  I agree to be contacted by Amazing Exteriors via phone/SMS/email. We respect your <Link href="/privacy" className="text-[#3A6B9C] hover:text-white font-bold transition-colors">Privacy Policy</Link>.
                </label>
              </div>

              <button type="submit" className="w-full bg-[#3A6B9C] hover:bg-white hover:text-[#3A6B9C] text-white font-black text-xs uppercase tracking-[0.3em] py-5 rounded-full transition-all shadow-2xl transform active:scale-95">
                SEND MESSAGE
              </button>
            </form>
          </div>
        </div>

        {/* Alt Logo Bandı */}
        <div className="relative z-10 bg-white p-8 flex items-center justify-between border-t border-white/10 rounded-b-[2rem]">
          {[
            { src: "/popup/bbb-768x361.png", alt: "BBB" },
            { src: "/popup/qualifiedremodeler.png", alt: "Qualified Remodeler" },
            { src: "/popup/google-768x361.png", alt: "Google" },
            { src: "/popup/facebook-768x361.png", alt: "Facebook" }
          ].map((item, i) => (
            <div key={i} className={`flex-1 px-6 flex justify-center ${i < 3 ? 'border-r border-slate-100' : ''}`}>
              <Image 
                src={item.src} 
                alt={item.alt} 
                width={160} 
                height={70} 
                className="object-contain h-10 hover:scale-110 transition-transform duration-300" 
              />
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
