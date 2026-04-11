"use client";

import React, { useState } from 'react';
import { Plus, Minus, CheckCircle2 } from 'lucide-react';

export default function FAQSection() {
  // Scott Exteriors'a özel SSS metinleri
  const faqs = [
    {
      question: "Do you offer free estimates for roofing and siding projects?",
      answer: "Yes, absolutely! We provide 100% free, no-obligation estimates for all residential and commercial exterior projects in the greater Dallas/Fort Worth area. Our experts will assess your needs, take precise measurements, and give you a transparent quote."
    },
    {
      question: "How long does a typical roof replacement take?",
      answer: "Most residential roof replacements are completed in just 1 to 2 days. Our highly experienced, full-time crews work efficiently without sacrificing quality. We handle everything from tear-off to final cleanup, ensuring your property is spotless before we leave."
    },
    {
      question: "Are you fully insured and licensed in Texas?",
      answer: "Yes. Scott Exteriors is fully insured for your complete protection and peace of mind. We maintain rigorous safety standards and comply with all local building codes and regulations across DFW municipalities."
    },
    {
      question: "What types of materials do you use for siding replacement?",
      answer: "We install only premium, industry-leading siding materials proven to withstand extreme Texas weather. Whether you're looking for durable fiber cement siding, high-quality vinyl, or specialized wood siding, we offer solutions that maximize both curb appeal and energy efficiency."
    },
    {
      question: "Do you help with storm or hail damage insurance claims?",
      answer: "Yes! Living in Texas means dealing with severe weather. Our team has extensive experience working alongside homeowners during the insurance claims process for hail and wind damage, providing accurate documentation and thorough inspections to ensure your home is fully restored."
    }
  ];

  // 🔥 8. MADDE EKLENDİ! ARTIK KUSURSUZ BİR 4x2 GRID OLACAK 🔥
  const credentials = [
    "Family-owned and operated in Dallas since 1997",
    "Multi-year Angie's List Super Service Award Winner",
    "Houzz Award Winner for Excellence in Customer Service",
    "Fully insured and bonded for residential and commercial work",
    "Dedicated, factory-trained installation crews",
    "Premium materials with full manufacturer warranties",
    "Transparent pricing with no hidden fees",
    "A+ Rating with the Better Business Bureau (BBB)" // Eksik olan parça tamamlandı!
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative w-full py-24 bg-emerald-50/50 border-y border-emerald-100/50">
      <div className="max-w-[1000px] mx-auto px-6">
        
        {/* --- 1. BÖLÜM: FAQ --- */}
        <div className="text-center mb-12">
          <p className="text-[#087F23] font-black tracking-[0.2em] uppercase mb-4 text-sm">
            Got Questions?
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Frequently Asked Questions
          </h2>
        </div>

        {/* Akordeon Liste */}
        <div className="flex flex-col gap-4 mb-24">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index} 
                className="group flex flex-col rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-emerald-100/50"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className={`w-full flex items-center justify-between p-5 md:p-6 text-left transition-colors duration-300 ${
                    isOpen ? 'bg-[#087F23] text-white' : 'bg-white text-slate-800 hover:bg-emerald-50'
                  }`}
                >
                  <span className={`font-bold text-lg pr-4 transition-colors ${isOpen ? 'text-white' : 'text-slate-900 group-hover:text-[#087F23]'}`}>
                    {faq.question}
                  </span>
                  <div className={`flex-shrink-0 p-2 rounded-full transition-transform duration-300 ${isOpen ? 'bg-white/20 text-white' : 'bg-gray-100 text-[#087F23]'}`}>
                    {isOpen ? <Minus size={20} strokeWidth={2.5} /> : <Plus size={20} strokeWidth={2.5} />}
                  </div>
                </button>

                <div 
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="p-6 md:p-8 bg-white text-slate-600 leading-relaxed font-medium text-[15px] border-x border-b border-gray-100">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* --- 2. BÖLÜM: TRUSTED PARTNERSHIPS AND CREDENTIALS --- */}
        <div className="bg-white rounded-3xl p-10 md:p-14 shadow-xl border border-gray-100 relative overflow-hidden">
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#087F23] opacity-5 blur-[80px] rounded-full pointer-events-none"></div>

          <div className="text-center mb-10 relative z-10">
            <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">
              Trusted Excellence & Credentials
            </h3>
            <div className="w-16 h-1.5 bg-[#087F23] mx-auto mt-4 rounded-full"></div>
          </div>

          {/* Listeyi jilet gibi 2 kolona bölen grid yapısı (Artık tam 4x2 dengesinde) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-5 relative z-10">
            {credentials.map((item, idx) => (
              <div key={idx} className="flex items-start gap-3 group">
                <CheckCircle2 
                  className="text-[#087F23] flex-shrink-0 mt-0.5 group-hover:scale-110 group-hover:text-[#4ADE80] transition-all duration-300" 
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