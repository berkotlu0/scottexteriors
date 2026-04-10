"use client";

import React, { useState } from 'react';
import { Plus, Minus, CheckCircle2 } from 'lucide-react';

export default function FAQSection() {
  // Senin attığın görsellerdeki orijinal FAQ metinleri (SEO uyumlu ve eksiksiz)
  const faqs = [
    {
      question: "What makes Infinity by Marvin windows better than vinyl?",
      answer: "Infinity by Marvin windows use Ultrex fiberglass, which is significantly stronger and more durable than vinyl. Fiberglass won't warp, sag, or become brittle in extreme temperatures. It provides superior insulation, maintains structural integrity for decades, and offers better energy efficiency than vinyl alternatives."
    },
    {
      question: "How long does James Hardie fiber cement siding last?",
      answer: "James Hardie siding is designed to last 50 years or more with minimal maintenance. Fiber cement resists rot, warping, and insect damage that destroy wood siding, and is far more durable than vinyl. James Hardie backs their products with a 30-year non-prorated warranty, and Amazing Exteriors adds our own Lifetime Limited Warranty."
    },
    {
      question: "Can you install windows and siding at the same time?",
      answer: "Yes, coordinating Infinity by Marvin window replacement with James Hardie siding installation is often the most efficient approach. This allows for proper integration of both systems, better weatherproofing, and a cohesive finished appearance. Our project managers coordinate all phases for minimal disruption to your daily routine."
    },
    {
      question: "What is the ROI on new windows and siding?",
      answer: "According to Remodeling Magazine's Cost vs. Value Report, window replacement and siding installation consistently rank among the top home improvements for return on investment, typically recouping 70-80% of costs at resale. Energy savings and reduced maintenance also provide ongoing financial benefits."
    },
    {
      question: "Do you offer financing options?",
      answer: "Yes, Amazing Exteriors provides flexible financing options for qualified homeowners. Contact us to discuss available programs for your window and siding project, including promotional offers and payment plans to fit your budget."
    }
  ];

  // Alt kısımdaki sertifikalar ve güven maddeleri
  const credentials = [
    "Elite Preferred James Hardie Contractor status",
    "Authorized Infinity by Marvin Certified Installer",
    "BBB Accredited Business",
    "Qualified Remodeler Top 500",
    "Nearly 200,000 homes successfully remodeled since 1989",
    "Family-owned and operated for over 35 years",
    "Comprehensive warranty protection on all installations"
  ];

  // Accordion (Açılır/Kapanır) menü için state. İlk soru varsayılan olarak açık gelsin (0).
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    // bg-[#EFF6FC] -> Renkli arka plan (Premium geçiş)
    <section className="relative w-full py-24 bg-[#EFF6FC] border-y border-gray-100">
      <div className="max-w-[1000px] mx-auto px-6">
        
        {/* --- 1. BÖLÜM: FAQ (Sıkça Sorulan Sorular) --- */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#1D3557] tracking-tight uppercase">
            Frequently Asked Questions
          </h2>
          <div className="w-20 h-1.5 bg-[#DE5D5D] mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Akordeon Liste */}
        <div className="flex flex-col gap-4 mb-24">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index} 
                className="group flex flex-col rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                {/* Soru Başlığı (Tıklanabilir Alan) - Lacivert Arkaplan */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className={`w-full flex items-center justify-between p-5 md:p-6 text-left transition-colors duration-300 ${
                    isOpen ? 'bg-[#1D3557] text-white' : 'bg-[#1D3557]/95 text-white hover:bg-[#1D3557]'
                  }`}
                >
                  <span className="font-bold text-lg md:text-xl pr-4">
                    {faq.question}
                  </span>
                  <div className="flex-shrink-0 bg-white/10 p-2 rounded-full transition-transform duration-300">
                    {isOpen ? <Minus size={20} strokeWidth={2.5} /> : <Plus size={20} strokeWidth={2.5} />}
                  </div>
                </button>

                {/* Cevap Alanı (Yağ gibi kayan animasyon) */}
                <div 
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="p-6 md:p-8 bg-white text-slate-600 leading-relaxed font-medium text-[15px] border-x border-b border-gray-200">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* --- 2. BÖLÜM: TRUSTED PARTNERSHIPS AND CREDENTIALS --- */}
        <div className="bg-white rounded-3xl p-10 md:p-14 shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-gray-100">
          <div className="text-center mb-10">
            <h3 className="text-2xl md:text-3xl font-extrabold text-[#1D3557] tracking-tight uppercase">
              Trusted Partnerships and Credentials
            </h3>
          </div>

          {/* Listeyi jilet gibi 2 kolona bölen grid yapısı */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-5">
            {credentials.map((item, idx) => (
              <div key={idx} className="flex items-start gap-3 group">
                <CheckCircle2 
                  className="text-[#3A6B9C] flex-shrink-0 mt-0.5 group-hover:scale-110 group-hover:text-[#DE5D5D] transition-all duration-300" 
                  size={22} 
                  strokeWidth={2.5} 
                />
                <span className="text-slate-700 font-medium leading-relaxed group-hover:text-slate-900 transition-colors">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}