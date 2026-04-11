"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function ProductCategories() {
  // Scott Exteriors 3'lü Hizmet Kartları (Görsel yolları senin ayarladığın gibi sabit bırakıldı)
  const serviceCards = [
    {
      id: 1,
      mainImage: '/add/add1.webp', 
      title: 'Roofing & Repair',
      subtitle: 'Residential & Commercial',
      description: 'Expert roofing services for the greater Dallas area. From storm damage and leak repairs to complete roof replacements, our crews deliver uncompromising quality and protection.',
      link: '/roofing'
    },
    {
      id: 2,
      mainImage: '/add/add2.webp', 
      title: 'Premium Siding',
      subtitle: 'Residential',
      description: "Upgrade your home's exterior with high-performance siding. Built to withstand extreme Texas weather while providing undeniable curb appeal and long-lasting durability.",
      link: '/siding'
    },
    {
      id: 3,
      mainImage: '/add/add3.webp', 
      title: 'Replacement Windows',
      subtitle: 'Residential',
      description: 'Transform your home with custom replacement windows. Reduce your energy bills and enhance your interior comfort with our professional, weather-tight installations.',
      link: '/windows'
    }
  ];

  return (
    <section className="relative w-full py-24 bg-gray-50 border-y border-gray-100 shadow-inner">
      <div className="max-w-[1400px] mx-auto px-6">
        
        {/* Giriş Başlığı */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <p className="text-[#087F23] font-black tracking-[0.2em] uppercase mb-4 text-sm">
            What We Do
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight mb-6 tracking-tight">
            Our Premium Exterior <br/> Services
          </h2>
          <p className="text-lg text-slate-600 font-medium leading-relaxed">
            Scott Exteriors takes pride in providing Dallas and Fort Worth homeowners with top-tier roofing, siding, and window solutions built to last.
          </p>
        </div>

        {/* 3'lü Grid Kart Yapısı */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12">
          {serviceCards.map((card) => (
            <div key={card.id} className="bg-white border border-gray-200 rounded-2xl overflow-hidden flex flex-col shadow-sm hover:shadow-2xl hover:border-[#087F23]/40 transition-all duration-500 group transform hover:-translate-y-2">
              
              {/* Resim Alanı */}
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src={card.mainImage}
                  alt={card.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-6">
                  <span className="bg-[#087F23] text-white text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-sm shadow-md">
                    {card.subtitle}
                  </span>
                </div>
              </div>

              {/* Metin Alanı */}
              <div className="p-8 md:p-10 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-slate-950 leading-tight mb-4 group-hover:text-[#087F23] transition-colors duration-300">
                    {card.title}
                  </h3>
                  <p className="text-slate-600 text-[15px] leading-relaxed mb-8 flex-grow">
                    {card.description}
                  </p>
                </div>

                <Link 
                  href={card.link} 
                  className="w-fit text-[#087F23] font-bold text-[13px] flex items-center gap-2 uppercase tracking-[0.15em] transition-all group-hover:gap-3"
                >
                  LEARN MORE 
                  <ArrowRight size={16} strokeWidth={3} className="mt-0.5" />
                </Link>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}