"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/home/HeroSection';
import SpecialOffers from '@/components/home/SpecialOffers';
import TrustBar from '@/components/home/TrustBar';
import AmazingDifference from '@/components/home/AmazingDifference';
import ProductCategories from '@/components/home/ProductCategories';
import RecentPosts from '@/components/home/RecentPosts';
import WhyTrustUs from '@/components/home/WhyTrustUs';
import ServiceAreas from '@/components/home/ServiceAreas';
import FAQSection from '@/components/home/FAQSection';

// Operasyonel Bileşenler
import LeadPopup from '@/components/home/LeadPopup';
import FloatingWidget from '@/components/home/FloatingWidget';

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

        {/* 5. Ürün Kategorileri */}
        <ScrollReveal>
          <ProductCategories />
        </ScrollReveal>

      

        {/* 4. Marka Farkı */}
        <ScrollReveal>
          <AmazingDifference />
        </ScrollReveal>


        {/* 6. Blog & İçerik */}
        <ScrollReveal>
          <RecentPosts />
        </ScrollReveal>

        {/* 7. Neden Biz */}
        <ScrollReveal>
          <WhyTrustUs />
        </ScrollReveal>

        {/* 8. Hizmet Bölgeleri */}
        <ScrollReveal>
          <ServiceAreas />
        </ScrollReveal>

        {/* 9. FAQ Bölümü */}
        <ScrollReveal>
          <FAQSection />
        </ScrollReveal>
      </main>

      {/* 10. Footer (Bu da süzülerek gelebilir ama genelde sabit kalması daha asil durur) */}
      <Footer />

      {/* --- ARKA PLAN OPERASYONLARI --- */}
      <LeadPopup />
      <FloatingWidget />
      
    </div>
  );
}