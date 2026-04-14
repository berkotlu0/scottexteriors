"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Phone, ChevronDown, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
        className={`fixed top-0 z-40 w-full transition-all duration-500 ease-in-out ${
          isVisible ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        {/* 1. Üst Bar - Siyah kalması asalet verir ama ikonlar yeşil */}
        <div className="hidden lg:block bg-slate-900/95 backdrop-blur-md text-white py-1 border-b border-white/5 relative z-50">
          <div className="max-w-[1600px] mx-auto px-8 flex justify-between items-center text-[10px] font-bold tracking-[0.2em] uppercase">
            <div className="flex items-center gap-6">
              <span className="opacity-50">Serving DFW Since 1997</span>
            </div>
            <div className="flex items-center gap-5">
              <a href="tel:2145037663" className="flex items-center gap-2 hover:text-[#087F23] transition-colors group">
                <Phone size={11} className="text-[#087F23]" />
                <span className="tracking-tight text-[11px]">Dallas: (214) 503-7663</span>
              </a>
              <span className="text-white/20">|</span>
              <a href="tel:8174763600" className="flex items-center gap-2 hover:text-[#087F23] transition-colors group">
                <Phone size={11} className="text-[#087F23]" />
                <span className="tracking-tight text-[11px]">Ft. Worth: (817) 476-3600</span>
              </a>
            </div>
          </div>
        </div>

        {/* 2. ANA NAVBAR */}
        <div className="bg-white/70 backdrop-blur-2xl border-b border-emerald-100/50 relative z-40 shadow-sm">
          
          {/* Mobil Görünüm */}
          <div className="max-w-[1600px] mx-auto px-5 h-16 flex items-center justify-between lg:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Open mobile menu" // 🔥 ERİŞİLEBİLİRLİK (SEO) İÇİN EKLENDİ
              className="text-[#087F23] p-2 -ml-2 focus:outline-none"
            >
              <Menu size={28} />
            </button>
            <Link href="/">
              <Image src="/scott-ext.svg" alt="Logo" width={180} height={60} className="h-9 w-auto object-contain" priority />
            </Link>
            <div className="w-10"></div>
          </div>

          {/* Masaüstü Görünüm */}
          <div className="max-w-[1600px] mx-auto px-8 hidden lg:flex flex-col items-center py-4 relative gap-3">
            
            {/* Sağ Köşe: Financing & Estimate */}
            <div className="absolute right-8 top-1/2 -translate-y-1/2 flex flex-col items-stretch gap-2.5">
              <Link href="/financing">
                <button className="w-full bg-white/50 hover:bg-[#087F23] text-[#087F23] hover:text-white border-2 border-[#087F23]/20 hover:border-[#087F23] px-7 py-2 rounded-full font-black transition-all duration-300 text-[10px] uppercase tracking-[0.2em]">
                  Financing
                </button>
              </Link>
              <button className="bg-[#087F23] hover:bg-slate-900 text-white px-8 py-3.5 rounded-full font-black transition-all duration-500 text-[11px] uppercase tracking-[0.25em] shadow-[0_10px_25px_rgba(8,127,35,0.25)] active:scale-95 border-2 border-[#087F23]">
                FREE ESTIMATE
              </button>
            </div>

            {/* Orta: LOGO */}
            <Link href="/" className="group">
              <Image src="/scott-ext.svg" alt="Logo" width={300} height={100} className="h-16 w-auto object-contain group-hover:scale-105 transition-transform duration-500" priority />
            </Link>

            {/* Orta: MENÜ */}
            <nav className="flex items-center justify-center gap-10">
              {['Home', 'Roofing', 'Siding', 'Windows', 'About Us', 'Contact'].map((item) => (
                <div key={item} className="flex items-center gap-1.5 group cursor-pointer">
                  <Link 
                    href={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`} 
                    className="text-[#087F23] font-black text-[13px] uppercase tracking-[0.15em] hover:text-slate-900 transition-colors"
                  >
                    {item}
                  </Link>
                  {['Roofing', 'Siding', 'Windows'].includes(item) && (
                    <ChevronDown size={14} className="text-[#087F23] group-hover:rotate-180 transition-transform duration-300" />
                  )}
                </div>
              ))}
            </nav>
          </div>
        </div>
      </header>

      {/* 3. MOBİL ÇEKMECE */}
      <div className={`fixed inset-0 z-50 lg:hidden transition-all duration-500 ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" onClick={() => setIsMobileMenuOpen(false)} />
        <div className={`absolute top-0 left-0 w-[85%] max-w-sm h-full bg-emerald-50 shadow-2xl transition-transform duration-500 ease-in-out flex flex-col ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
          
          <div className="flex items-center justify-between p-6 bg-white border-b border-emerald-100">
            <Image src="/scott-ext.svg" alt="Logo" width={160} height={50} className="h-8 w-auto object-contain" />
            <button 
              onClick={() => setIsMobileMenuOpen(false)} 
              aria-label="Close mobile menu" // 🔥 ERİŞİLEBİLİRLİK (SEO) İÇİN EKLENDİ
              className="text-[#087F23] bg-emerald-50 p-2 rounded-full hover:bg-emerald-100 transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          <nav className="flex flex-col flex-grow p-8 gap-7 overflow-y-auto">
            {['Home', 'Roofing', 'Siding', 'Windows', 'About Us', 'Contact'].map((item) => (
              <Link 
                key={item}
                href={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`} 
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-[#087F23] font-black uppercase tracking-[0.2em] text-lg border-b border-emerald-100/50 pb-2 hover:translate-x-2 transition-transform"
              >
                {item}
              </Link>
            ))}
          </nav>

          <div className="p-8 border-t border-emerald-100 flex flex-col gap-4 bg-white">
            <a href="tel:2145037663" className="flex items-center justify-between bg-emerald-50 px-5 py-4 rounded-xl text-[#087F23]">
              <span className="font-bold text-[10px] uppercase tracking-widest opacity-60">Dallas</span>
              <span className="font-black text-sm">(214) 503-7663</span>
            </a>
            <Link href="/financing" onClick={() => setIsMobileMenuOpen(false)} className="w-full">
              <button className="w-full bg-white border-2 border-[#087F23] text-[#087F23] py-4 rounded-xl font-black text-xs uppercase tracking-widest">
                FINANCING
              </button>
            </Link>
            <button className="w-full bg-[#087F23] text-white py-4 rounded-xl font-black text-xs uppercase tracking-widest shadow-lg shadow-emerald-200">
              FREE ESTIMATE
            </button>
          </div>
        </div>
      </div>
    </>
  );
}