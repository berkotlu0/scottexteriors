import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function ProductCategories() {
  // 3'lü Kart Yapısı için Veriler 
  const productCards = [
    {
      id: 1,
      mainImage: '/add/add1.webp', 
      logoImage: '/logo/new-marvin-logo.png', 
      title: 'Infinity from Marvin Fiberglass Windows',
      description: 'Experience superior performance with Ultrex® fiberglass replacement windows. 8x stronger than vinyl, engineered to resist warping, rotting, or corrosion.',
      link: '/windows'
    },
    {
      id: 2,
      mainImage: '/add/add2.webp', 
      logoImage: '/logo/2000px-james_hardie_logosvg.png', 
      title: 'James Hardie Fiber Cement Siding',
      description: "America's #1 brand of siding. HardiePlank® is engineered to resist fire, insects, moisture, and extreme Texas temperatures with ColorPlus® Technology.",
      link: '/siding'
    },
    {
      id: 3,
      mainImage: '/add/add3.webp', 
      logoImage: '/logo/provia-transparent.png', 
      title: 'ProVia Entry & Patio Doors',
      description: 'Energy-efficient, durable entry and patio doors custom-built for security and style. Tested to withstand hurricane-force winds and severe weather.',
      link: '/doors'
    }
  ];

  return (
    // bg-[#EFF6FC] -> TrustBar'daki o efsanevi mavimsi beyaz geçiş!
    <section className="relative w-full py-24 bg-[#EFF6FC] border-y border-gray-100 shadow-inner">
      <div className="max-w-[1400px] mx-auto px-6">
        
        {/* Giriş Başlığı */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <p className="text-[#3A6B9C] font-black tracking-[0.2em] uppercase mb-4 text-sm">
            What We Do
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#1D3557] leading-tight mb-6 tracking-tight">
            Our Premium Service <br/> Categories
          </h2>
          <p className="text-lg text-slate-600 font-medium leading-relaxed">
            Amazing Exteriors specializes in the highest quality windows, siding, and doors, partnered with industry-leading manufacturers for your Texas home.
          </p>
        </div>

        {/* 3'lü Grid Kart Yapısı */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12">
          {productCards.map((card) => (
            // Kart Container
            <div key={card.id} className="bg-white border border-gray-200 rounded-lg overflow-hidden flex flex-col shadow-sm hover:shadow-xl hover:border-[#3A6B9C]/30 transition-all duration-300 group">
              
              {/* Resim Alanı */}
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src={card.mainImage}
                  alt={card.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />
                
                {/* Logo Overlay */}
                <div className="absolute bottom-4 left-4 bg-white/90 p-3 rounded-md backdrop-blur-sm shadow-md border border-gray-100">
                  <Image
                    src={card.logoImage}
                    alt={`${card.title} Logo`}
                    width={140}
                    height={40}
                    className="w-auto h-10 object-contain"
                  />
                </div>
              </div>

              {/* Metin Alanı */}
              <div className="p-8 md:p-10 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-slate-950 leading-tight mb-4 group-hover:text-[#3A6B9C] transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-slate-600 text-sm md:text-[15px] leading-relaxed mb-8 flex-grow">
                    {card.description}
                  </p>
                </div>

                {/* LEARN MORE Linki */}
                <Link 
                  href={card.link} 
                  className="w-fit text-[#3A6B9C] font-bold text-sm md:text-[15px] flex items-center gap-1.5 uppercase tracking-widest transition-all group-hover:gap-2.5"
                >
                  LEARN MORE 
                  <ArrowRight size={18} strokeWidth={2.5} className="mt-0.5" />
                </Link>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}