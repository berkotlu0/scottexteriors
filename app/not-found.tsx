"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Lock, Construction, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAF9] overflow-hidden">
      {/* 1. NAVIGASYON */}
      <Navbar />
      
      {/* ANA İÇERİK ALANI */}
      <main className="flex-grow flex flex-col items-center justify-center px-6 pt-[180px] pb-20 relative">
        {/* Arka Plan Hafif Yeşil Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#087F23] opacity-[0.03] blur-[120px] rounded-full pointer-events-none" />

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="w-full max-w-4xl flex flex-col items-center text-center relative z-10"
        >
          {/* HEYBETLİ KİLİT - SCOTT GREEN DOKUNUŞU 🔥 */}
          <div className="relative mb-14">
            <motion.div
              animate={{ 
                y: [0, -12, 0],
                rotate: [0, -2, 2, 0]
              }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="bg-[#087F23] text-white p-14 lg:p-20 rounded-[4rem] shadow-[0_60px_120px_rgba(8,127,35,0.25)] relative z-10 border border-white/10"
            >
              <Lock size={120} strokeWidth={1} className="max-sm:w-20 max-sm:h-20" />
            </motion.div>
            
            {/* Arka Plan Pulse (Aura) - Yeşil Tonu */}
            <motion.div 
              animate={{ scale: [1, 1.6], opacity: [0.2, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute inset-0 bg-[#4ADE80] rounded-[4rem] z-0"
            />
          </div>

          {/* BAŞLIK: Scott Exteriors Tarzı Agresif ve Şık 🔥 */}
          <h2 className="text-5xl md:text-8xl font-black text-slate-900 mb-6 tracking-tighter uppercase leading-[0.9]">
            PAGE UNDER <br />
            <span className="text-[#087F23]">CONSTRUCTION</span>
          </h2>
          
          <p className="text-slate-500 text-lg md:text-xl font-medium leading-relaxed mb-14 max-w-2xl mx-auto italic">
            "Optimizing the <span className="text-[#087F23] font-extrabold not-italic">Scott Exteriors</span> digital experience. Professionalism in every pixel."
          </p>

          {/* BUTONLAR: Modern ve Kompakt */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full sm:w-auto">
            <Link href="/" className="w-full sm:w-auto">
              <button className="w-full sm:w-72 flex items-center justify-center gap-4 bg-[#087F23] text-white px-10 py-5 rounded-full font-black text-sm uppercase tracking-[0.2em] hover:bg-slate-900 transition-all shadow-xl active:scale-95 group border-2 border-[#087F23]">
                <ArrowLeft size={18} className="group-hover:-translate-x-2 transition-transform" />
                Return Home
              </button>
            </Link>
            
            <div className="flex items-center gap-3 text-slate-400 font-black uppercase text-[10px] tracking-[0.3em] px-8 py-5 border border-emerald-100 rounded-full bg-white/80 backdrop-blur-md shadow-sm">
              <Construction size={18} className="text-[#087F23]" />
              Status: <span className="text-slate-600">Building Quality</span>
            </div>
          </div>

          {/* ALT İMZA */}
          <div className="mt-20 pt-8 border-t border-emerald-100/50 w-full max-w-xs opacity-40">
              <p className="text-[9px] font-black tracking-[0.6em] uppercase text-slate-400">
                Architected by B&S Media
              </p>
          </div>
        </motion.div>
      </main>

      {/* 3. FOOTER */}
      <Footer />
    </div>
  );
}