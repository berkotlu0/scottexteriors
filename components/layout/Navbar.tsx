"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Phone, ChevronDown, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Kaydırma Takip Mekanizması (Sadece masaüstünde menü gizle/göster yapsın, mobilde menü açıksa gizlemesin)
  useEffect(() => {
    const controlNavbar = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    if (!isMobileMenuOpen) {
      window.addEventListener('scroll', controlNavbar);
    }
    return () => window.removeEventListener('scroll', controlNavbar);
  }, [lastScrollY, isMobileMenuOpen]);

  // Mobil menü açıkken arka plan kaymasını (scroll) engelle
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  return (
    <>
      <header 
        className={`fixed top-0 z-40 w-full transition-transform duration-500 ease-in-out ${
          isVisible ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        {/* 1. Üst Bar - MOBİLDE GİZLENDİ (hidden lg:block) */}
        <div className="hidden lg:block bg-black/40 backdrop-blur-sm text-white py-1.5 border-b border-white/5">
          <div className="max-w-[1600px] mx-auto px-8 flex justify-between items-center text-[11px] font-bold tracking-[0.2em] uppercase">
            
            <div className="flex items-center gap-6">
              <span className="opacity-50">Follow Us</span>
              <div className="flex gap-4 opacity-80">
                <a href="#" className="hover:text-[#DE5D5D] transition-colors">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                </a>
                <a href="#" className="hover:text-[#DE5D5D] transition-colors">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                </a>
                <a href="#" className="hover:text-[#DE5D5D] transition-colors">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.42a2.78 2.78 0 0 0-1.94 2C1 8.14 1 12 1 12s0 3.86.42 5.58a2.78 2.78 0 0 0 1.94 2c1.71.42 8.6.42 8.6.42s6.88 0 8.6-.42a2.78 2.78 0 0 0 1.94-2C23 15.86 23 12 23 12s0-3.86-.42-5.58z"></path><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"></polygon></svg>
                </a>
              </div>
            </div>
            
            <a href="tel:2107964624" className="flex items-center gap-2.5 bg-white/5 hover:bg-white/10 px-4 py-1 rounded-full border border-white/10 transition-all group">
              <Phone size={12} className="text-[#DE5D5D] fill-[#DE5D5D]" />
              <span className="font-bold tracking-tight text-[13px]">(210) 796-4624</span>
            </a>
          </div>
        </div>

        {/* 2. Ana Navbar - Mobilde yüksekliği kısıldı (h-16 lg:h-20) */}
        <div className="bg-slate-900/50 lg:bg-slate-900/30 backdrop-blur-xl border-b border-white/5">
          <div className="max-w-[1600px] mx-auto px-5 lg:px-8 h-16 lg:h-20 flex items-center justify-between">
            
            {/* Sol: Logo */}
            <div className="flex-shrink-0 z-50">
              <Link href="/">
                <Image
                  src="/amazing-exteriors-logo-black.svg" 
                  alt="Amazing Exteriors Logo"
                  width={200}
                  height={60}
                  className="w-auto h-8 lg:h-11 object-contain" 
                  priority
                />
              </Link>
            </div>

            {/* Orta: Masaüstü Menü (Mobilde gizli) */}
            <nav className="hidden lg:flex items-center justify-center gap-10">
              <Link href="/" className="text-white font-bold text-[15px] hover:text-[#DE5D5D] transition-colors tracking-wide underline underline-offset-8 decoration-[#3A6B9C] decoration-2">Home</Link>
              <Link href="/about" className="text-white font-medium text-[15px] hover:text-[#DE5D5D] transition-colors tracking-wide">About</Link>
              <div className="flex items-center gap-1 text-white font-medium text-[15px] hover:text-[#DE5D5D] cursor-pointer transition-colors group">
                <span>Services</span>
                <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-300" />
              </div>
              <Link href="/projects" className="text-white font-medium text-[15px] hover:text-[#DE5D5D] transition-colors tracking-wide">Projects</Link>
              <Link href="/blog" className="text-white font-medium text-[15px] hover:text-[#DE5D5D] transition-colors tracking-wide">Blog</Link>
              <Link href="/contact" className="text-white font-medium text-[15px] hover:text-[#DE5D5D] transition-colors tracking-wide">Contact</Link>
            </nav>

            {/* Sağ: Masaüstü Buton (Mobilde gizli) */}
            <div className="hidden lg:block flex-shrink-0">
              <button className="bg-zinc-800/60 hover:bg-[#DE5D5D] border border-white/10 text-white px-9 py-2.5 rounded-full font-bold transition-all duration-500 text-[13px] uppercase tracking-widest shadow-2xl active:scale-95">
                Get A Quote
              </button>
            </div>

            {/* Sağ: Mobil Hamburger Butonu (Masaüstünde gizli) */}
            <button 
              onClick={() => setIsMobileMenuOpen(true)}
              className="lg:hidden text-white p-2 focus:outline-none"
            >
              <Menu size={28} />
            </button>
            
          </div>
        </div>
      </header>

      {/* 3. MOBİL ÇEKMECE MENÜ (Drawer) */}
      <div 
        className={`fixed inset-0 z-50 lg:hidden transition-all duration-500 ${
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Arka plan karartması */}
        <div 
          className="absolute inset-0 bg-black/70 backdrop-blur-sm" 
          onClick={() => setIsMobileMenuOpen(false)}
        />
        
        {/* Sağdan kayarak gelen panel */}
        <div 
          className={`absolute top-0 right-0 w-[80%] max-w-sm h-full bg-[#0B1221] border-l border-white/10 shadow-2xl transition-transform duration-500 ease-in-out flex flex-col ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          {/* Çekmece Üst Kısım (Logo ve Kapatma Butonu) */}
          <div className="flex items-center justify-between p-5 border-b border-white/10">
             <Image
                src="/amazing-exteriors-logo-black.svg" 
                alt="Amazing Exteriors Logo"
                width={120}
                height={40}
                className="w-auto h-6 object-contain" 
             />
             <button 
               onClick={() => setIsMobileMenuOpen(false)}
               className="text-white/60 hover:text-white bg-white/5 p-2 rounded-full transition-colors"
             >
               <X size={20} />
             </button>
          </div>

          {/* Çekmece Linkleri */}
          <nav className="flex flex-col flex-grow p-6 gap-6 overflow-y-auto">
            <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="text-white font-bold text-lg hover:text-[#DE5D5D] transition-colors border-l-2 border-[#3A6B9C] pl-4">Home</Link>
            <Link href="/about" onClick={() => setIsMobileMenuOpen(false)} className="text-white/80 font-medium text-lg hover:text-[#DE5D5D] transition-colors pl-4">About</Link>
            
            {/* Services (Mobilde basit liste görünümü) */}
            <div className="flex flex-col gap-4 pl-4">
               <span className="text-white/80 font-medium text-lg">Services</span>
               <div className="flex flex-col gap-3 pl-4 border-l border-white/10">
                  <Link href="#" onClick={() => setIsMobileMenuOpen(false)} className="text-white/50 text-sm hover:text-white">Windows</Link>
                  <Link href="#" onClick={() => setIsMobileMenuOpen(false)} className="text-white/50 text-sm hover:text-white">Doors</Link>
                  <Link href="#" onClick={() => setIsMobileMenuOpen(false)} className="text-white/50 text-sm hover:text-white">Siding</Link>
               </div>
            </div>

            <Link href="/projects" onClick={() => setIsMobileMenuOpen(false)} className="text-white/80 font-medium text-lg hover:text-[#DE5D5D] transition-colors pl-4">Projects</Link>
            <Link href="/blog" onClick={() => setIsMobileMenuOpen(false)} className="text-white/80 font-medium text-lg hover:text-[#DE5D5D] transition-colors pl-4">Blog</Link>
            <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)} className="text-white/80 font-medium text-lg hover:text-[#DE5D5D] transition-colors pl-4">Contact</Link>
          </nav>

          {/* Çekmece Alt Kısım (Buton ve İletişim) */}
          <div className="p-6 border-t border-white/10 flex flex-col gap-4">
             <a href="tel:2107964624" className="flex items-center justify-center gap-2 bg-white/5 py-3 rounded-xl border border-white/10 text-white group">
                <Phone size={14} className="text-[#DE5D5D] group-hover:scale-110 transition-transform" />
                <span className="font-bold tracking-wider text-sm">(210) 796-4624</span>
             </a>
             <button className="w-full bg-[#3A6B9C] text-white py-4 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-white hover:text-[#3A6B9C] transition-colors">
               Get A Quote
             </button>
          </div>
        </div>
      </div>
    </>
  );
}