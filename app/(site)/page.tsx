"use client";

import React from 'react';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic'; // 🔥 SİHİRLİ PERFORMANS DOKUNUŞU 🔥

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/home/HeroSection';
// import SpecialOffers from '@/components/home/SpecialOffers'; // (Kullanmıyorsan sil veya yorumda kalsın)
// import TrustBar from '@/components/home/TrustBar';
import AmazingDifference from '@/components/home/AmazingDifference';
import ProductCategories from '@/components/home/ProductCategories';
import RecentPosts from '@/components/home/RecentPosts';
import WhyTrustUs from '@/components/home/WhyTrustUs';
import ServiceAreas from '@/components/home/ServiceAreas';
import FAQSection from '@/components/home/FAQSection';

// 🔥 OPERASYONEL BİLEŞENLER (LAZY LOAD / TEMBEL YÜKLEME) 🔥
// Bunlar sayfanın ilk yüklenmesini bloklamaz, arka planda usulca indirilir.
// Bu sayede Total Blocking Time (TBT) ve Kullanılmayan JS hataları tarihe karışır!
const LeadPopup = dynamic(() => import('@/components/home/LeadPopup'), { ssr: false });
const FloatingWidget = dynamic(() => import('@/components/home/FloatingWidget'), { ssr: false });

// --- SEKSİ KAYDIRMA WRAPPER'I ---
// Her section'ı bu arkadaşla sarıyoruz ki süzülerek gelsinler
const ScrollReveal = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }} // Başlangıçta 50px aşağıda ve şeffaf
    whileInView={{ opacity: 1, y: 0 }} // Görüş alanına girince yerine otur ve görünür ol
    viewport={{ once: true, margin: "-100px" }} // Sadece bir kere tetiklensin, biraz erken başlasın
    transition={{ duration: 0.8, ease: "easeOut" }} // Yağ gibi aksın
  >
    {children}
  </motion.div>
);

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F8F9FA] overflow-x-hidden">
      
      <Navbar />
      
      <main className="flex-grow">
        {/* 1. HeroSection (Buna Reveal koymuyoruz ki sayfa açılır açılmaz görünsün) */}
        <HeroSection />

        {/* 2. Ürün Kategorileri */}
        <ScrollReveal>
          <ProductCategories />
        </ScrollReveal>

        {/* 3. Marka Farkı */}
        <ScrollReveal>
          <AmazingDifference />
        </ScrollReveal>

        {/* 4. Blog & İçerik */}
        <ScrollReveal>
          <RecentPosts />
        </ScrollReveal>

        {/* 5. Neden Biz */}
        <ScrollReveal>
          <WhyTrustUs />
        </ScrollReveal>

        {/* 6. Hizmet Bölgeleri */}
        <ScrollReveal>
          <ServiceAreas />
        </ScrollReveal>

        {/* 7. FAQ Bölümü */}
        <ScrollReveal>
          <FAQSection />
        </ScrollReveal>
      </main>

      {/* 8. Footer (Sabit kalması asil durur) */}
      <Footer />

      {/* --- ARKA PLAN OPERASYONLARI --- */}
      {/* Artık sayfayı kastırmayacaklar, çünkü dynamic olarak yüklendiler */}
      <FloatingWidget />
      <LeadPopup />
      
    </div>
  );
}