"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, X, Calendar, Clock } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    image: '/blog/blog4.webp',
    date: 'April 2, 2026',
    readTime: '4 min read',
    title: 'How Insulated Siding Can Save You Money',
    excerpt: "When you think about improving your home's energy efficiency, your mind might jump to upgrading...",
    fullContent: "When you think about improving your home's energy efficiency, your mind might jump to upgrading your HVAC system or installing new windows. But there's another crucial factor that many Texas homeowners overlook: insulated siding. \n\nPremium fiber cement siding, like James Hardie, combined with high-quality insulation wraps your home in a thermal blanket. This prevents the blazing summer heat from penetrating your walls and keeps the warm air trapped inside during sudden winter freezes. Over a year, this can slash your energy bills by up to 20%, making insulated siding an investment that literally pays for itself over time."
  },
  {
    id: 2,
    image: '/blog/blog5.webp',
    date: 'March 28, 2026',
    readTime: '3 min read',
    title: 'How Window Condensation Occurs and How to Prevent It',
    excerpt: "If you've ever noticed water droplets forming on your windows during cooler months, you're not alone...",
    fullContent: "If you've ever noticed water droplets forming on your windows during cooler months, you're not alone. Window condensation is a common issue for many Texas homeowners, and while it may seem harmless, excessive moisture can damage your sills and promote mold growth. \n\nCondensation happens when warm, moist indoor air hits the cold surface of your window glass. The best prevention? Upgrading to dual or triple-pane fiberglass windows from Infinity by Marvin. These windows feature advanced Argon gas fills between the panes, creating a temperature buffer that virtually eliminates interior condensation while dramatically improving your home's overall insulation."
  },
  {
    id: 3,
    image: '/blog/blog3.webp',
    date: 'March 15, 2026',
    readTime: '5 min read',
    title: 'Protecting Your Home from UV Damage with Low-E Glass',
    excerpt: "The intense Texas sun that makes our state famous also poses significant challenges for homeowners...",
    fullContent: "The intense Texas sun that makes our state famous also poses significant challenges for homeowners. Ultraviolet radiation streaming through your windows doesn't just create uncomfortable hot spots and glare. It actively destroys your home's interior, fading expensive hardwood floors, bleaching furniture fabrics, and damaging artwork. \n\nEnter Low-E (Low-Emissivity) glass technology. This microscopic metallic coating acts like premium sunscreen for your house. It allows natural visible light to pour in while bouncing harmful UV and infrared rays back outside. By upgrading to Low-E windows, you protect your interior investments and significantly reduce the strain on your air conditioning unit."
  },
  {
    id: 4,
    image: '/blog/blog4.webp',
    date: 'March 5, 2026',
    readTime: '4 min read',
    title: 'How to Choose the Best Siding Color for Texas Weather',
    excerpt: "Choosing the right siding color for your Texas home is about more than just curb appeal...",
    fullContent: "Choosing the right siding color for your Texas home is about more than just curb appeal. With intense sun exposure, extreme temperature fluctuations, and unique climate challenges across the Lone Star State, your color choice impacts both maintenance and energy efficiency.\n\nLighter colors reflect solar heat, helping to keep your home cooler, but darker colors offer a dramatic, modern aesthetic. The solution? James Hardie's ColorPlus® Technology. Unlike standard paint that bakes and fades in the Texas sun, ColorPlus finishes are baked-on in a controlled factory environment. This ensures vibrant, fade-resistant color that lasts for years, whether you choose a crisp 'Arctic White' or a deep 'Iron Gray'."
  },
  {
    id: 5,
    image: '/blog/blog2.webp',
    date: 'February 22, 2026',
    readTime: '3 min read',
    title: "How to Choose the Right Door Hardware for Your Home's Style",
    excerpt: "When you invest in beautiful new doors for your San Antonio home, the hardware you choose can make or break...",
    fullContent: "When you invest in beautiful new doors for your San Antonio home, the hardware you choose can make or break the overall aesthetic. Whether you're installing stunning Provia entry doors or elegant fiberglass patio doors, the handles, locks, and hinges are the 'jewelry' of your entryway.\n\nFor a traditional look, oil-rubbed bronze or antique brass offers timeless warmth. Modern and contemporary homes benefit from sleek, matte black or brushed nickel finishes with clean, straight lines. Beyond looks, never compromise on security. We recommend robust, multi-point locking systems that seamlessly integrate with your chosen hardware finish for ultimate peace of mind."
  },
  {
    id: 6,
    image: '/blog/blog6.webp',
    date: 'February 10, 2026',
    readTime: '4 min read',
    title: "What's the Difference Between Single-Hung and Double-Hung Windows?",
    excerpt: "When it comes to window replacement in Texas, homeowners often find themselves weighing the options...",
    fullContent: "When it comes to window replacement in Texas, homeowners often find themselves weighing the options between single-hung and double-hung windows. Both styles offer distinct advantages, and understanding the differences can help you make the best choice for your remodel.\n\nSingle-hung windows have a fixed top sash and a movable bottom sash that slides up to open. They are classic, cost-effective, and highly energy-efficient since the top is permanently sealed. Double-hung windows allow BOTH the top and bottom sashes to move. This provides superior ventilation (hot air escapes the top, cool air enters the bottom) and makes cleaning the exterior glass from inside your home a breeze."
  }
];

export default function RecentPosts() {
  const [selectedPost, setSelectedPost] = useState<typeof blogPosts[0] | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextPost = () => setCurrentIndex((prev) => (prev + 1) % blogPosts.length);
  const prevPost = () => setCurrentIndex((prev) => (prev - 1 + blogPosts.length) % blogPosts.length);

  // Kart Bileşeni (Reusability için)
  const BlogCard = ({ post }: { post: typeof blogPosts[0] }) => (
    <div 
      className="bg-white border border-gray-200 rounded-3xl overflow-hidden flex flex-col group hover:shadow-2xl hover:border-[#087F23]/30 transition-all duration-300 h-full"
      onClick={() => setSelectedPost(post)}
    >
      <div className="relative h-60 w-full overflow-hidden">
        <Image src={post.image} alt={post.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
      </div>
      <div className="p-8 flex flex-col flex-grow">
        <div className="flex items-center gap-4 text-xs text-slate-400 font-medium mb-4">
          <div className="flex items-center gap-1.5"><Calendar size={14} /> {post.date}</div>
          <div className="flex items-center gap-1.5"><Clock size={14} /> {post.readTime}</div>
        </div>
        <h3 className="text-xl font-bold text-slate-900 leading-tight mb-4 group-hover:text-[#087F23] transition-colors line-clamp-2">
          {post.title}
        </h3>
        <p className="text-slate-600 text-sm leading-relaxed mb-6 line-clamp-3">
          {post.excerpt}
        </p>
        <div className="text-[#087F23] font-bold text-[13px] uppercase tracking-widest flex items-center gap-2 mt-auto">
          Read Article <ArrowRight size={16} />
        </div>
      </div>
    </div>
  );

  return (
    <section className="relative w-full py-24 bg-white border-t border-gray-100">
      <div className="max-w-[1400px] mx-auto px-6">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-[#087F23] font-black tracking-[0.2em] uppercase mb-3 text-sm">Insights & Tips</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">RECENT POSTS</h2>
        </div>

        {/* 🔥 CAROUSEL LOGIC 🔥 */}
        <div className="relative">
          
          {/* MASAÜSTÜ: Sabit 3'lü Grid (lg ve üstü) */}
          <div className="hidden lg:grid grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <div key={post.id} className="cursor-pointer">
                <BlogCard post={post} />
              </div>
            ))}
          </div>

          {/* MOBİL: Kaydırılabilir Carousel (lg altı) */}
          <div className="lg:hidden relative overflow-hidden px-2">
            <motion.div 
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              onDragEnd={(e, info) => {
                if (info.offset.x < -50) nextPost();
                if (info.offset.x > 50) prevPost();
              }}
              className="cursor-grab active:cursor-grabbing"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.3 }}
                >
                  <BlogCard post={blogPosts[currentIndex]} />
                </motion.div>
              </AnimatePresence>
            </motion.div>

            {/* Sayfalama Noktaları (Dots) */}
            <div className="flex justify-center gap-2 mt-8">
              {blogPosts.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    currentIndex === idx ? 'w-8 bg-[#087F23]' : 'w-2 bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Modal Ekranı (Değişmedi, Aynı Kalite) */}
      {selectedPost && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          <div className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm" onClick={() => setSelectedPost(null)}></div>
          <div className="relative bg-white w-full max-w-3xl max-h-[90vh] rounded-3xl shadow-2xl overflow-hidden flex flex-col animate-in fade-in zoom-in-95 duration-300">
            <button onClick={() => setSelectedPost(null)} className="absolute top-4 right-4 z-20 bg-black/40 text-white p-2 rounded-full backdrop-blur-md">
              <X size={20} />
            </button>
            <div className="relative w-full h-64 sm:h-80 flex-shrink-0">
              <Image src={selectedPost.image} alt={selectedPost.title} fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
              <div className="absolute bottom-8 left-8 right-8">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight">{selectedPost.title}</h2>
              </div>
            </div>
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