import React from 'react';
import Image from 'next/image';

export default function SpecialOffers() {
  return (
    // bg-[#F8F9FA] -> Temiz, kırık beyaz taban
    <section className="relative w-full py-24 bg-[#F8F9FA]">
      <div className="max-w-[1200px] mx-auto px-6">
        
        {/* SEO Uyumlu Premium Metin Alanı */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <p className="text-[#3A6B9C] font-bold tracking-[0.2em] uppercase mb-4 text-sm">
            Welcome to Amazing Exteriors
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight mb-8 tracking-tight">
            The Very Best Windows <br/> and Siding for Your Home
          </h2>
          
          <p className="text-lg text-slate-600 font-medium leading-relaxed mb-6">
            Since 1989, we have transformed nearly <strong className="text-slate-900">200,000 homes</strong> across Texas, Oklahoma, Idaho, and Utah. As the premier experts in exterior remodeling, we deliver custom-built solutions engineered specifically for extreme regional climates.
          </p>
          
          <div className="flex flex-col md:flex-row gap-6 text-left bg-white p-8 rounded-xl shadow-sm border border-gray-100">
            <div className="flex-1 border-b md:border-b-0 md:border-r border-gray-100 pb-6 md:pb-0 md:pr-6">
              <h4 className="font-bold text-slate-900 mb-2">Infinity by Marvin Windows</h4>
              <p className="text-sm text-slate-500 leading-relaxed">
                Featuring Ultrex fiberglass construction that is 8x stronger than vinyl. Custom-built for perfect fit, superior insulation, and zero warping or rotting.
              </p>
            </div>
            <div className="flex-1 pt-6 md:pt-0 md:pl-6">
              <h4 className="font-bold text-slate-900 mb-2">James Hardie Siding</h4>
              <p className="text-sm text-slate-500 leading-relaxed">
                Elite Preferred contractor installing HardiePlank lap siding. Resists fire, insects, and moisture with ColorPlus fade-resistant technology.
              </p>
            </div>
          </div>
        </div>

        {/* Teklif Kartları (Görsellerin Birebir Klonu) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 items-center">
          
          {/* Infinity by Marvin Kartı */}
          <div className="flex flex-col rounded shadow-2xl overflow-hidden transform hover:-translate-y-2 transition-transform duration-300">
            <div className="bg-[#2B5E93] py-6 flex items-center justify-center h-[130px]">
              <Image 
                src="/Infinity_Logo_CMYK_WHITE.svg" // Düzeltilmiş uzantı
                alt="Infinity by Marvin"
                width={220}
                height={80}
                className="w-auto h-16 object-contain"
              />
            </div>
            <div className="bg-[#3A3A3A] p-8 text-center flex flex-col items-center">
              <h3 className="text-white text-2xl font-bold tracking-wide mb-3">SPRING SALE</h3>
              <p className="text-white text-lg font-bold leading-snug mb-4">
                Save $325 each Window, <br/> $775 each Patio Door
              </p>
              <p className="text-gray-300 text-[15px] mb-8">
                Plus, NO Payments, NO Interest, for 2 Years@
              </p>
              <button className="bg-[#427BB8] hover:bg-[#346293] text-white font-bold text-[15px] px-8 py-3 rounded transition-colors shadow-lg mb-6">
                FIND OUT MORE
              </button>
              <p className="text-gray-400 text-xs font-medium">Now through April 30th.</p>
            </div>
          </div>

          {/* James Hardie Kartı */}
          <div className="flex flex-col rounded shadow-2xl overflow-hidden transform hover:-translate-y-2 transition-transform duration-300">
            <div className="bg-[#FDB913] py-6 flex items-center justify-center h-[130px]">
              <Image 
                src="/James_Hardie_logo.webp" // Düzeltilmiş uzantı
                alt="James Hardie"
                width={220}
                height={80}
                className="w-auto h-16 object-contain"
              />
            </div>
            <div className="bg-[#3A3A3A] p-8 text-center flex flex-col items-center">
              <h3 className="text-white text-2xl font-bold tracking-wide mb-3">SPRING SALE</h3>
              <p className="text-white text-lg font-bold leading-snug mb-4">
                50% OFF Siding Materials
              </p>
              <p className="text-transparent text-[15px] mb-8 select-none">Spacer text line</p>
              
              <button className="bg-[#FDB913] hover:bg-[#e0a410] text-black font-bold text-[15px] px-8 py-3 rounded transition-colors shadow-lg mb-6">
                FIND OUT MORE
              </button>
              <p className="text-gray-400 text-xs font-medium">Now through April 30th.</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}