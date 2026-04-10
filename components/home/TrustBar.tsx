import React from 'react';
import Image from 'next/image';

export default function TrustBar() {
  // Google ve Facebook altındaki siyah/gri 5 yıldız için ufak bir bileşen, renk prop'u alır
  const FiveStars = ({ color = "#333333" }: { color?: string }) => (
    <div className="flex gap-1.5 mt-3 justify-center">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg key={star} width="22" height="22" viewBox="0 0 24 24" fill={color} xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
        </svg>
      ))}
    </div>
  );

  return (
    // bg-[#EFF6FC] -> Ultra-açık, elite mavi ton
    // border-y border-gray-100 -> Bölümü netleştirir
    <section className="relative w-full py-24 bg-[#EFF6FC] border-y border-gray-100 shadow-inner">
      <div className="max-w-[1400px] mx-auto px-6">
        
        {/* Başlık ve Metin - görseldeki gibi */}
        <div className="text-center max-w-5xl mx-auto mb-16">
          <h2 className="text-3xl md:text-[40px] font-bold text-[#1D3557] mb-6 tracking-tight">
            Here’s why you can put your trust in us...
          </h2>
          <p className="text-[17px] text-slate-600 leading-relaxed font-medium">
            Our customer reviews are consistently excellent across the board. Homeowners just like you cite the excellence of our work, the quality of the products we install, and the promptness with which we respond. But most of all, we keep hearing from customers who simply loved their entire experience with Amazing Exteriors, from start to finish. Click on a link below to read for yourself the kind words written by people who are enjoying the beautiful work we have done on their homes.
          </p>
        </div>

        {/* 4'lü Logo ve İnceleme Grid'i - görseldeki düzen */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* 1. Google Kartı - Resmi renkli logo ve siyah yıldızlar */}
          <a href="#" className="bg-white border border-gray-200 shadow-sm rounded-xl p-8 flex flex-col items-center justify-center hover:border-[#3A6B9C] hover:shadow-xl transition-all duration-300 group cursor-pointer">
            <Image 
              src="/Google_2015_logo.svg.png" // Public klasörüne resmi renkli Google logo SVG'si koyulmalı
              alt="Google Logo" 
              width={180} 
              height={50} 
              className="w-auto h-12 object-contain mb-2"
            />
            {/* Siyah yıldızlar için #000000 kullanıyoruz */}
            <FiveStars color="#000000" />
          </a>

          {/* 2. Facebook Kartı - Görseldeki gibi mavi 'f' ve gri metin/yıldızlar */}
          <a href="#" className="bg-white border border-gray-200 shadow-sm rounded-xl p-8 flex flex-col items-center justify-center hover:border-[#3A6B9C] hover:shadow-xl transition-all duration-300 group cursor-pointer">
            <div className="flex items-center gap-2 mb-2">
              {/* Resmi Facebook mavi rengi: #1877F2 */}
              <span className="bg-[#1877F2] text-white font-bold text-4xl w-10 h-10 flex items-center justify-center rounded-sm">f</span>
              <span className="text-4xl font-bold text-[#333333] tracking-tighter">facebook</span>
            </div>
            {/* Görseldeki gibi gri yıldızlar için varsayılan rengi kullanıyoruz */}
            <FiveStars />
          </a>

          {/* 3. James Hardie Elite Preferred Kartı - Görseldeki altın plaket */}
          <a href="#" className="bg-white border border-gray-200 shadow-sm rounded-xl p-4 flex flex-col items-center justify-center hover:border-[#3A6B9C] hover:shadow-xl transition-all duration-300 cursor-pointer">
            <Image 
              src="/elite.jpg" // Public klasörüne image_14.png (altın plaket) koyulmalı
              alt="James Hardie Elite Preferred" 
              width={250} 
              height={100} 
              className="w-full h-auto object-contain"
            />
          </a>

          {/* 4. GuildQuality Kartı - Görseldeki renkli logo, grayscale efekti kaldırıldı */}
          <a href="#" className="bg-white border border-gray-200 shadow-sm rounded-xl p-6 flex flex-col items-center justify-center hover:border-[#3A6B9C] hover:shadow-xl transition-all duration-300 cursor-pointer">
            <Image 
              src="/guild-quality.jpg" // Public klasörüne image_13.png (renkli logo) koyulmalı
              alt="Guild Quality Customer Reviews" 
              width={220} 
              height={90} 
              className="w-full h-auto object-contain"
            />
          </a>

        </div>

      </div>
    </section>
  );
}