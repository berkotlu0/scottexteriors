"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { CheckCircle2, ArrowRight, X } from 'lucide-react'; 

export default function ScottDifference() {
  // --- MEVCUT SLIDER VE LİSTE KODLARI ---
  const sliderImages = [
    '/lux1.webp',
    '/lux2.webp',
    '/lux3.webp'
  ];

  const [currentImg, setCurrentImg] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImg((prev) => (prev === sliderImages.length - 1 ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(timer);
  }, [sliderImages.length]);

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isModalOpen]);

  const features = [
    "Family-owned and operated, proudly serving the Dallas area since 1997",
    "Multi-year Angie's List Super Service & Houzz Award winner",
    "Fully insured and committed to uncompromising quality and safety",
    "Talented, factory-trained installation crews and dedicated full-time office staff",
    "Premium, energy-efficient materials built to withstand brutal Texas weather",
    "Turnkey residential and commercial service from inspection to final cleanup"
  ];

  const partnerLogos = [
    { src: '/logo/new-marvin-logo.png', alt: 'Marvin' },
    { src: '/logo/2000px-james_hardie_logosvg.png', alt: 'James Hardie' },
    { src: '/logo/provia-transparent.png', alt: 'ProVia' },
    { src: '/logo/GIF-Infinity_Digital_Logo_RGB.gif', alt: 'Infinity by Marvin' },
    { src: '/logo/goodcontractorslogo.jpg', alt: 'Good Contractors' },
  ];

  const duplicatedLogos = [...partnerLogos, ...partnerLogos];

  return (
    <>
      <section className="relative w-full py-24 bg-emerald-50/50 border-y border-emerald-100/50 overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6">
          
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24 mb-24">
            
            {/* Sol Taraf: Slider */}
            <div className="w-full lg:w-1/2 relative h-[450px] md:h-[600px] rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.15)] group border border-white/50">
              {sliderImages.map((src, index) => (
                <Image
                  key={index}
                  src={src}
                  alt={`Premium Dallas Installation ${index + 1}`}
                  fill
                  className={`object-cover transition-all duration-1000 ease-in-out ${
                    index === currentImg ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
                  }`}
                  priority={index === 0}
                />
              ))}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-3 z-10">
                {sliderImages.map((_, index) => (
                  <div 
                    key={index} 
                    className={`h-1.5 rounded-full transition-all duration-500 ${
                      index === currentImg ? 'w-8 bg-[#087F23]' : 'w-2 bg-white/60'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Sağ Taraf: Metinler */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center">
              <h4 className="text-[#087F23] font-black tracking-[0.2em] uppercase mb-4 text-sm text-center lg:text-left">
                The Scott Difference
              </h4>
              <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight mb-6 tracking-tight text-center lg:text-left">
                Complete Dallas Exterior <br className="hidden lg:block"/> Transformations
              </h2>
              <p className="text-lg text-slate-600 mb-10 leading-relaxed font-medium text-center lg:text-left">
                Scott Exteriors has built a flawless reputation in DFW by partnering with the industry’s best manufacturers and delivering unmatched craftsmanship. When you choose us, you receive:
              </p>
              
              <ul className="space-y-5">
                {features.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-4 group">
                    <CheckCircle2 className="text-[#087F23] w-6 h-6 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" strokeWidth={2.5} />
                    <span className="text-slate-700 font-medium leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA Butonu */}
              <div className="mt-14 w-full flex justify-center lg:justify-start">
                <div className="relative group cursor-pointer" onClick={() => setIsModalOpen(true)}>
                  <div className="absolute -inset-1.5 bg-gradient-to-r from-[#087F23] via-[#4ADE80] to-[#087F23] rounded-full blur opacity-40 group-hover:opacity-100 transition duration-500 animate-pulse"></div>
                  <button className="relative flex items-center gap-3 bg-slate-900 group-hover:bg-[#087F23] text-white font-black text-[15px] px-12 py-5 rounded-full transition-all duration-300 shadow-[0_10px_30px_rgba(8,127,35,0.3)] tracking-[0.2em] uppercase transform group-hover:-translate-y-1 active:scale-95 border border-slate-800 group-hover:border-[#087F23]">
                    <span>Get Free Estimate</span>
                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" strokeWidth={2.5} />
                  </button>
                </div>
              </div>
              
            </div>

          </div>

          {/* Alt Kısım: Logolar */}
          <div className="pt-16 border-t border-emerald-100/60">
            <p className="text-center text-sm font-bold text-slate-400 uppercase tracking-widest mb-10">
              Trusted by the Industry's Best
            </p>
            <div className="w-full overflow-hidden relative">
              <div className="animate-infinite-scroll flex items-center gap-16 md:gap-20">
                {duplicatedLogos.map((logo, index) => (
                  <div key={index} className="relative flex-shrink-0 h-12 w-32 md:h-16 md:w-40 grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100">
                    <Image src={logo.src} alt={logo.alt} fill className="object-contain" />
                  </div>
                ))}
              </div>
              <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#ecfdf5] to-transparent z-10"></div>
              <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#ecfdf5] to-transparent z-10"></div>
            </div>
          </div>

        </div>
      </section>

      {/* 🔥 FULL-STACK FREE ESTIMATE POPUP (MODAL) 🔥 */}
      <div 
        className={`fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 transition-all duration-500 ${
          isModalOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div 
          className={`absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity duration-500 ${
            isModalOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setIsModalOpen(false)}
        ></div>

        <div 
          className={`relative bg-white w-full max-w-lg rounded-3xl shadow-2xl overflow-hidden transition-all duration-500 transform ${
            isModalOpen ? 'scale-100 translate-y-0' : 'scale-95 translate-y-8'
          } max-h-[95vh] flex flex-col`}
        >
          <button 
            onClick={() => setIsModalOpen(false)}
            className="absolute top-4 right-4 z-20 bg-white/20 hover:bg-white/40 p-2 rounded-full text-white transition-colors backdrop-blur-md"
          >
            <X size={20} strokeWidth={2.5} />
          </button>

          <div className="bg-[#087F23] pt-8 pb-6 px-8 text-center relative overflow-hidden flex-shrink-0">
            <div className="absolute inset-0 bg-[url('/hero1.webp')] opacity-10 bg-cover bg-center mix-blend-overlay"></div>
            <h3 className="relative z-10 text-2xl font-black text-white tracking-tight mb-2">
              Request Your Estimate
            </h3>
            <p className="relative z-10 text-emerald-100 text-xs font-medium">
              Fill out the form below and our DFW experts will contact you shortly.
            </p>
          </div>

          {/* Form Alanı (Taşarsa kaydırılabilir) */}
          <div className="p-6 overflow-y-auto flex-grow">
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">First Name</label>
                  <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2.5 text-sm text-slate-800 outline-none focus:ring-2 focus:ring-[#087F23]/20 focus:border-[#087F23] transition-all" placeholder="Alex" />
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Last Name</label>
                  <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2.5 text-sm text-slate-800 outline-none focus:ring-2 focus:ring-[#087F23]/20 focus:border-[#087F23] transition-all" placeholder="Jones" />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Email Address</label>
                  <input type="email" className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2.5 text-sm text-slate-800 outline-none focus:ring-2 focus:ring-[#087F23]/20 focus:border-[#087F23] transition-all" placeholder="Alex@example.com" />
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Phone Number</label>
                  <input type="tel" className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2.5 text-sm text-slate-800 outline-none focus:ring-2 focus:ring-[#087F23]/20 focus:border-[#087F23] transition-all" placeholder="(214) 555-0123" />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Service Needed</label>
                <select className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2.5 text-sm text-slate-800 outline-none focus:ring-2 focus:ring-[#087F23]/20 focus:border-[#087F23] transition-all appearance-none">
                  <option value="">Select a service...</option>
                  <option value="roofing">Roofing & Repair</option>
                  <option value="siding">Siding Installation</option>
                  <option value="windows">Replacement Windows</option>
                  <option value="other">Other / Multiple</option>
                </select>
              </div>

              {/* 🔥 YORUM/MESAJ ALANI 🔥 */}
              <div className="space-y-1">
                <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Project Details / Comments</label>
                <textarea 
                  rows={3}
                  className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2.5 text-sm text-slate-800 outline-none focus:ring-2 focus:ring-[#087F23]/20 focus:border-[#087F23] transition-all resize-none" 
                  placeholder="Tell us a bit about what you're looking for (e.g., roof leak, need 5 new windows)..." 
                ></textarea>
              </div>

              <button className="w-full mt-2 bg-[#087F23] hover:bg-[#06681B] text-white font-black text-[13px] px-8 py-3.5 rounded-lg transition-all duration-300 shadow-lg hover:shadow-[#087F23]/30 tracking-widest uppercase active:scale-[0.98]">
                Get My Free Estimate
              </button>
              <p className="text-center text-[10px] text-slate-400 font-medium mt-2">
                No pressure, no obligation. 100% free consultation.
              </p>
            </form>
          </div>

        </div>
      </div>
    </>
  );
}