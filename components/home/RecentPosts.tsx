"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { ArrowRight, X, Calendar, Clock } from 'lucide-react';

// Blog verileri (Attığın görseldeki gerçek başlıklar ve SEO uyumlu içeriklerle dolduruldu)
const blogPosts = [
  {
    id: 1,
    image: '/blog/blog1.webp',
    category: 'Siding',
    date: 'April 2, 2026',
    readTime: '4 min read',
    title: 'How Insulated Siding Can Save You Money',
    excerpt: "When you think about improving your home's energy efficiency, your mind might jump to upgrading your HVAC system or installing new windows. But there's another crucial factor...",
    fullContent: "When you think about improving your home's energy efficiency, your mind might jump to upgrading your HVAC system or installing new windows. But there's another crucial factor that many Texas homeowners overlook: insulated siding. \n\nPremium fiber cement siding, like James Hardie, combined with high-quality insulation wraps your home in a thermal blanket. This prevents the blazing summer heat from penetrating your walls and keeps the warm air trapped inside during sudden winter freezes. Over a year, this can slash your energy bills by up to 20%, making insulated siding an investment that literally pays for itself over time."
  },
  {
    id: 2,
    image: '/blog/blog2.webp',
    category: 'Windows',
    date: 'March 28, 2026',
    readTime: '3 min read',
    title: 'How Window Condensation Occurs and How to Prevent It',
    excerpt: "If you've ever noticed water droplets forming on your windows during cooler months, you're not alone. Window condensation is a common issue for many Texas homeowners...",
    fullContent: "If you've ever noticed water droplets forming on your windows during cooler months, you're not alone. Window condensation is a common issue for many Texas homeowners, and while it may seem harmless, excessive moisture can damage your sills and promote mold growth. \n\nCondensation happens when warm, moist indoor air hits the cold surface of your window glass. The best prevention? Upgrading to dual or triple-pane fiberglass windows from Infinity by Marvin. These windows feature advanced Argon gas fills between the panes, creating a temperature buffer that virtually eliminates interior condensation while dramatically improving your home's overall insulation."
  },
  {
    id: 3,
    image: '/blog/blog3.webp',
    category: 'Windows',
    date: 'March 15, 2026',
    readTime: '5 min read',
    title: 'Protecting Your Home from UV Damage with Low-E Glass',
    excerpt: "The intense Texas sun that makes our state famous also poses significant challenges for homeowners. Ultraviolet radiation streaming through your windows doesn't just create uncomfortable hot spots...",
    fullContent: "The intense Texas sun that makes our state famous also poses significant challenges for homeowners. Ultraviolet radiation streaming through your windows doesn't just create uncomfortable hot spots and glare. It actively destroys your home's interior, fading expensive hardwood floors, bleaching furniture fabrics, and damaging artwork. \n\nEnter Low-E (Low-Emissivity) glass technology. This microscopic metallic coating acts like premium sunscreen for your house. It allows natural visible light to pour in while bouncing harmful UV and infrared rays back outside. By upgrading to Low-E windows, you protect your interior investments and significantly reduce the strain on your air conditioning unit."
  },
  {
    id: 4,
    image: '/blog/blog4.webp',
    category: 'Design',
    date: 'March 5, 2026',
    readTime: '4 min read',
    title: 'How to Choose the Best Siding Color for Texas Weather',
    excerpt: "Choosing the right siding color for your Texas home is about more than just curb appeal. With intense sun exposure, extreme temperature fluctuations, and unique climate challenges...",
    fullContent: "Choosing the right siding color for your Texas home is about more than just curb appeal. With intense sun exposure, extreme temperature fluctuations, and unique climate challenges across the Lone Star State, your color choice impacts both maintenance and energy efficiency.\n\nLighter colors reflect solar heat, helping to keep your home cooler, but darker colors offer a dramatic, modern aesthetic. The solution? James Hardie's ColorPlus® Technology. Unlike standard paint that bakes and fades in the Texas sun, ColorPlus finishes are baked-on in a controlled factory environment. This ensures vibrant, fade-resistant color that lasts for years, whether you choose a crisp 'Arctic White' or a deep 'Iron Gray'."
  },
  {
    id: 5,
    image: '/blog/blog5.webp',
    category: 'Doors',
    date: 'February 22, 2026',
    readTime: '3 min read',
    title: "How to Choose the Right Door Hardware for Your Home's Style",
    excerpt: "When you invest in beautiful new doors for your San Antonio home, the hardware you choose can make or break the overall aesthetic. Whether you're installing stunning Provia entry doors...",
    fullContent: "When you invest in beautiful new doors for your San Antonio home, the hardware you choose can make or break the overall aesthetic. Whether you're installing stunning Provia entry doors or elegant fiberglass patio doors, the handles, locks, and hinges are the 'jewelry' of your entryway.\n\nFor a traditional look, oil-rubbed bronze or antique brass offers timeless warmth. Modern and contemporary homes benefit from sleek, matte black or brushed nickel finishes with clean, straight lines. Beyond looks, never compromise on security. We recommend robust, multi-point locking systems that seamlessly integrate with your chosen hardware finish for ultimate peace of mind."
  },
  {
    id: 6,
    image: '/blog/blog6.webp',
    category: 'Windows',
    date: 'February 10, 2026',
    readTime: '4 min read',
    title: "What's the Difference Between Single-Hung and Double-Hung Windows?",
    excerpt: "When it comes to window replacement in Texas, homeowners often find themselves weighing the options between single-hung and double-hung windows. Both styles offer distinct advantages...",
    fullContent: "When it comes to window replacement in Texas, homeowners often find themselves weighing the options between single-hung and double-hung windows. Both styles offer distinct advantages, and understanding the differences can help you make the best choice for your remodel.\n\nSingle-hung windows have a fixed top sash and a movable bottom sash that slides up to open. They are classic, cost-effective, and highly energy-efficient since the top is permanently sealed. Double-hung windows allow BOTH the top and bottom sashes to move. This provides superior ventilation (hot air escapes the top, cool air enters the bottom) and makes cleaning the exterior glass from inside your home a breeze."
  }
];

export default function RecentPosts() {
  const [selectedPost, setSelectedPost] = useState<typeof blogPosts[0] | null>(null);

  return (
    // Önceki bölüm mavimsi beyazdı, şimdi tekrar temiz beyaza dönüp geçiş yapıyoruz
    <section className="relative w-full py-24 bg-white border-t border-gray-100">
      <div className="max-w-[1400px] mx-auto px-6">
        
        {/* Başlık */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-[#3A6B9C] font-black tracking-[0.2em] uppercase mb-3 text-sm">
            Insights & Tips
          </p>
          <h2 className="text-4xl font-extrabold text-[#1D3557] tracking-tight">
            RECENT POSTS
          </h2>
        </div>

        {/* Blog Grid (3 Kolonlu Yapı) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div 
              key={post.id} 
              className="bg-white border border-gray-200 rounded-xl overflow-hidden flex flex-col group hover:shadow-2xl transition-all duration-300 hover:-translate-y-1.5 cursor-pointer"
              onClick={() => setSelectedPost(post)}
            >
              {/* Resim Kısmı */}
              <div className="relative h-60 w-full overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Kategori Etiketi */}
                <div className="absolute top-4 left-4 bg-[#3A6B9C] text-white text-[11px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-sm">
                  {post.category}
                </div>
              </div>

              {/* Metin Kısmı */}
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center gap-4 text-xs text-slate-400 font-medium mb-4">
                  <div className="flex items-center gap-1.5"><Calendar size={14} /> {post.date}</div>
                  <div className="flex items-center gap-1.5"><Clock size={14} /> {post.readTime}</div>
                </div>
                
                <h3 className="text-xl font-bold text-slate-900 leading-tight mb-4 group-hover:text-[#3A6B9C] transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow">
                  {post.excerpt}
                </p>

                <div className="text-[#3A6B9C] font-bold text-[13px] uppercase tracking-widest flex items-center gap-2 group-hover:gap-3 transition-all">
                  Read Article <ArrowRight size={16} />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Tıklanınca Açılan Okuma Ekranı (Modal) */}
      {selectedPost && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          {/* Arka planı bulanıklaştıran siyah overlay */}
          <div 
            className="absolute inset-0 bg-[#0B1221]/80 backdrop-blur-sm transition-opacity"
            onClick={() => setSelectedPost(null)}
          ></div>
          
          {/* Modal İçeriği */}
          <div className="relative bg-white w-full max-w-3xl max-h-[90vh] rounded-2xl shadow-2xl overflow-hidden flex flex-col animate-in fade-in zoom-in-95 duration-300">
            
            {/* Kapat Butonu */}
            <button 
              onClick={() => setSelectedPost(null)}
              className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/80 text-white p-2 rounded-full transition-colors"
            >
              <X size={20} />
            </button>

            {/* Modal Kapak Resmi */}
            <div className="relative w-full h-64 sm:h-80 flex-shrink-0">
              <Image src={selectedPost.image} alt={selectedPost.title} fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className="absolute bottom-6 left-8 right-8">
                <span className="bg-[#DE5D5D] text-white text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-sm mb-3 inline-block">
                  {selectedPost.category}
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-white leading-tight">
                  {selectedPost.title}
                </h2>
              </div>
            </div>

            {/* Modal Yazı Alanı (Scroll edilebilir) */}
            <div className="p-8 sm:p-10 overflow-y-auto custom-scrollbar">
              <div className="flex items-center gap-6 text-sm text-slate-500 font-medium border-b border-gray-100 pb-6 mb-6">
                <div className="flex items-center gap-2"><Calendar size={16} /> {selectedPost.date}</div>
                <div className="flex items-center gap-2"><Clock size={16} /> {selectedPost.readTime}</div>
              </div>
              
              <div className="prose prose-lg text-slate-700 leading-relaxed max-w-none whitespace-pre-line">
                {selectedPost.fullContent}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}