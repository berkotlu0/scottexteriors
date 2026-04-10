"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Lock, Construction, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F8F9FA] overflow-hidden">
      {/* 1. NAVIGASYON (Fixed olduğu için yer kaplamaz, padding ile yer açacağız) */}
      <Navbar />
      
      {/* ANA İÇERİK ALANI:
          - pt-[180px]: Navbar'ın (iki katlı bar) altında kalmaması için net bir üst boşluk.
          - flex-grow: Sayfanın kalan tüm boşluğunu kaplar.
          - justify-center: Kalan boşlukta içeriği dikeyde TAM MERKEZE alır.
      */}
      <main className="flex-grow flex flex-col items-center justify-center px-6 pt-[180px] pb-20">
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="w-full max-w-4xl flex flex-col items-center text-center"
        >
          {/* HEYBETLİ KİLİT: Artık Navbar'ın altında değil, tam merkezde parlıyor */}
          <div className="relative mb-14">
            <motion.div
              animate={{ 
                y: [0, -12, 0],
                rotate: [0, -3, 3, 0]
              }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="bg-[#1D3557] text-white p-14 lg:p-20 rounded-[4rem] shadow-[0_60px_120px_rgba(29,53,87,0.35)] relative z-10 border border-white/10"
            >
              <Lock size={130} strokeWidth={1} className="max-sm:w-24 max-sm:h-24" />
            </motion.div>
            
            {/* Arka Plan Pulse (Aura) */}
            <motion.div 
              animate={{ scale: [1, 1.7], opacity: [0.25, 0] }}
              transition={{ duration: 2.5, repeat: Infinity }}
              className="absolute inset-0 bg-[#3A6B9C] rounded-[4rem] z-0"
            />
          </div>

          {/* BAŞLIK: leading-tight ile daha sıkı ve kurumsal duruş */}
          <h2 className="text-5xl md:text-8xl font-black text-[#1D3557] mb-6 tracking-tighter uppercase leading-[0.9]">
            PAGE UNDER <br />
            <span className="text-[#3A6B9C]">CONSTRUCTION</span>
          </h2>
          
          <p className="text-slate-500 text-lg md:text-2xl font-medium leading-relaxed mb-14 max-w-2xl mx-auto italic opacity-80">
            "Optimizing the <span className="text-[#1D3557] font-extrabold not-italic">Amazing Exteriors</span> digital experience. Professionalism in every pixel."
          </p>

          {/* BUTONLAR: Geniş, ferah ve orantılı */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full sm:w-auto">
            <Link href="/" className="w-full sm:w-auto">
              <button className="w-full sm:w-80 flex items-center justify-center gap-4 bg-[#1D3557] text-white px-12 py-6 rounded-full font-black text-sm uppercase tracking-[0.25em] hover:bg-[#3A6B9C] transition-all shadow-2xl active:scale-95 group">
                <ArrowLeft size={20} className="group-hover:-translate-x-2 transition-transform" />
                Return Home
              </button>
            </Link>
            
            <div className="flex items-center gap-3 text-slate-400 font-black uppercase text-[11px] tracking-[0.35em] px-10 py-6 border border-slate-200 rounded-full bg-white/50 backdrop-blur-md shadow-sm">
              <Construction size={20} className="text-[#3A6B9C]" />
              Status: Optimizing
            </div>
          </div>

          {/* ALT İMZA: Sayfa dengesini korumak için mt-24 */}
          <div className="mt-24 pt-8 border-t border-slate-200/50 w-full max-w-xs opacity-40">
              <p className="text-[9px] font-black tracking-[0.8em] uppercase text-[#1D3557]">
                Managed by B&S Media
              </p>
          </div>
        </motion.div>
      </main>

      {/* 3. FOOTER */}
      <Footer />
    </div>
  );
}