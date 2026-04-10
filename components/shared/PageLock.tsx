"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Lock, Construction, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function PageLock({ pageName }: { pageName: string }) {
  return (
    <div className="min-h-[80vh] flex items-center justify-center p-6 bg-[#F8F9FA]">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-2xl w-full text-center"
      >
        {/* Hareketli Kilit İkonu */}
        <div className="relative inline-block mb-8">
          <motion.div
            animate={{ 
              rotate: [0, -10, 10, -10, 0],
              scale: [1, 1.05, 1]
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="bg-[#1D3557] text-white p-8 rounded-[2.5rem] shadow-2xl relative z-10"
          >
            <Lock size={64} strokeWidth={1.5} />
          </motion.div>
          
          {/* Arkadaki Halka Animasyonu */}
          <motion.div 
            animate={{ scale: [1, 1.5], opacity: [0.5, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute inset-0 bg-[#3A6B9C] rounded-[2.5rem] z-0"
          />
        </div>

        {/* Metin Alanı */}
        <h2 className="text-4xl font-black text-[#1D3557] mb-4 tracking-tighter uppercase">
          {pageName} <span className="text-[#3A6B9C]">Under Construction</span>
        </h2>
        
        <p className="text-slate-600 text-lg font-medium leading-relaxed mb-10 max-w-lg mx-auto">
          Our team is currently fine-tuning this section to meet the <span className="text-[#1D3557] font-bold text-lg">Amazing Exteriors</span> premium standards. We want every pixel to be perfect for your brand.
        </p>

        {/* Aksiyon Butonları */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/">
            <button className="flex items-center gap-2 bg-[#1D3557] text-white px-8 py-4 rounded-full font-bold hover:bg-[#3A6B9C] transition-all shadow-xl active:scale-95 group">
              <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
              Back to Home
            </button>
          </Link>
          
          <div className="flex items-center gap-2 text-slate-400 font-bold uppercase text-xs tracking-widest px-8 py-4 border border-slate-200 rounded-full">
            <Construction size={16} />
            ETA: Coming Soon
          </div>
        </div>

        {/* Altta Hafif Branding */}
        <div className="mt-20 opacity-20">
            <p className="text-[10px] font-black tracking-[0.5em] uppercase text-[#1D3557]">System Optimized by B&S Media</p>
        </div>
      </motion.div>
    </div>
  );
}