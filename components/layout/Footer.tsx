"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Phone, Mail } from "lucide-react";

export default function Footer() {
  // B&S Media İmza
  const BSLogo = () => (
    <a 
      href="https://bnsmedia.co" 
      target="_blank" 
      rel="noopener noreferrer" 
      className="group flex flex-col items-end gap-0.5 relative no-underline"
    >
      <span className="text-[7px] tracking-[0.4em] text-slate-400 uppercase font-sans group-hover:text-[#087F23] transition-colors duration-700">
        Digital Architecture by
      </span>
      <div className="flex items-center gap-3">
        <div className="hidden md:block w-0 h-[1px] bg-[#087F23] transition-all duration-700 ease-in-out group-hover:w-12" />
        <span className="font-serif text-sm md:text-base text-slate-500 group-hover:text-slate-900 transition-all duration-700 tracking-[0.05em] uppercase italic font-light">
          B&S <span className="group-hover:text-[#087F23] transition-colors duration-700">Media</span>
        </span>
      </div>
    </a>
  );

  const socialLinks = {
    facebook: "https://www.facebook.com/scottexteriors",
    twitter: "https://twitter.com/scottexteriors",
    youtube: "https://www.youtube.com/channel/UCaLvHQeIUsUbj1zqZht8HNw"
  };

  const NavListItem = ({ label, href }: { label: string; href: string }) => (
    <motion.li
      whileHover={{ x: 8 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <Link 
        href={href} 
        className="text-[12px] text-slate-500 hover:text-[#087F23] transition-colors flex items-center gap-2.5 group font-bold"
      >
        <span className="relative flex h-1.5 w-1.5 items-center justify-center">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-300 opacity-0 group-hover:opacity-75 duration-1000"></span>
          <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-200 group-hover:bg-[#087F23] transition-colors"></span>
        </span>
        {label}
      </Link>
    </motion.li>
  );

  return (
    <footer className="relative bg-[#f4faf7] border-t border-emerald-100 overflow-hidden text-slate-700">
      
      {/* ARKA PLANDA HAREKETLİ KOYU YEŞİL DALGA */}
      <div className="absolute bottom-0 left-0 w-full h-32 pointer-events-none opacity-[0.15] z-0">
        <svg className="w-full h-full" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <motion.path
            initial={{ d: "M0,160L48,176C96,192,192,224,288,213.3C384,203,480,149,576,149.3C672,149,768,203,864,213.3C960,224,1056,192,1152,165.3C1248,139,1344,117,1392,106.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" }}
            animate={{ 
              d: [
                "M0,160L48,176C96,192,192,224,288,213.3C384,203,480,149,576,149.3C672,149,768,203,864,213.3C960,224,1056,192,1152,165.3C1248,139,1344,117,1392,106.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
                "M0,128L48,144C96,160,192,192,288,208C384,224,480,224,576,202.7C672,181,768,139,864,133.3C960,128,1056,160,1152,170.7C1248,181,1344,171,1392,165.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
                "M0,160L48,176C96,192,192,224,288,213.3C384,203,480,149,576,149.3C672,149,768,203,864,213.3C960,224,1056,192,1152,165.3C1248,139,1344,117,1392,106.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              ]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            fill="#047857"
          />
        </svg>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 py-8 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-8 border-b border-emerald-100 pb-10">
          
          <div className="flex flex-col space-y-4">
            <div className="w-fit transition-transform duration-500 hover:scale-105">
              <Image src="/scott-ext.svg" alt="Scott Exteriors" width={170} height={55} className="object-contain" />
            </div>
            <p className="text-[11px] text-slate-500 leading-relaxed max-w-[240px] font-medium">
              Family-owned DFW experts since 1997. Premium roofing, windows, and siding with award-winning quality.
            </p>
            
            <div className="flex gap-2">
              <a href={socialLinks.facebook} target="_blank" className="p-2 rounded-lg bg-white border border-emerald-50 text-[#087F23] hover:bg-[#087F23] hover:text-white transition-all shadow-sm">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a href={socialLinks.twitter} target="_blank" className="p-2 rounded-lg bg-white border border-emerald-50 text-[#087F23] hover:bg-[#087F23] hover:text-white transition-all shadow-sm">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
              </a>
              <a href={socialLinks.youtube} target="_blank" className="p-2 rounded-lg bg-white border border-emerald-50 text-[#087F23] hover:bg-[#087F23] hover:text-white transition-all shadow-sm">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.42a2.78 2.78 0 0 0-1.94 2C1 8.14 1 12 1 12s0 3.86.42 5.58a2.78 2.78 0 0 0 1.94 2c1.71.42 8.6.42 8.6.42s6.88 0 8.6-.42a2.78 2.78 0 0 0 1.94-2C23 15.86 23 12 23 12s0-3.86-.42-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/></svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-[#087F23] font-black tracking-widest uppercase text-[9px] mb-5">Services</h4>
            <ul className="flex flex-col gap-3">
              <NavListItem label="Roofing" href="/roofing" />
              <NavListItem label="Roof Repair" href="/roof-repair" />
              <NavListItem label="Siding" href="/siding" />
              <NavListItem label="Windows" href="/windows" />
              <NavListItem label="Gutters" href="/gutters" />
            </ul>
          </div>

          <div>
            <h4 className="text-[#087F23] font-black tracking-widest uppercase text-[9px] mb-5">Quick Access</h4>
            <ul className="flex flex-col gap-3">
              <NavListItem label="About Us" href="/about" />
              <NavListItem label="Financing" href="/financing" />
              <NavListItem label="Blog" href="/blog" />
              <NavListItem label="Contact" href="/contact" />
              <NavListItem label="Privacy Policy" href="/privacy" />
            </ul>
          </div>

          <div className="flex flex-col space-y-4">
            <h4 className="text-[#087F23] font-black tracking-widest uppercase text-[9px] mb-1">Contact</h4>
            <a href="tel:2145037663" className="flex items-center gap-3 text-[12px] text-slate-600 hover:text-[#087F23] transition-all group font-black">
              <div className="p-2 rounded-lg bg-white border border-emerald-50 text-emerald-400 group-hover:text-[#087F23] transition-all shadow-sm">
                <Phone size={14} />
              </div>
              (214) 503-7663
            </a>
            <a href="mailto:info@scottexteriors.com" className="flex items-center gap-3 text-[12px] text-slate-600 hover:text-[#087F23] transition-all group font-black">
              <div className="p-2 rounded-lg bg-white border border-emerald-50 text-emerald-400 group-hover:text-[#087F23] transition-all shadow-sm">
                <Mail size={14} />
              </div>
              info@scottexteriors.com
            </a>
          </div>

        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">
              © {new Date().getFullYear()} Scott Exteriors. All rights reserved.
            </p>
            {/* 🔥 ROZETLER SİYAHLARI KUŞANDI! 🔥 */}
            <div className="opacity-80 hover:opacity-100 transition-opacity duration-500">
               <Image 
                src="/logs12.webp" 
                alt="Scott Exteriors Awards" 
                width={280} 
                height={40} 
                // grayscale brightness-0 ile resmi simsiyah yaptık
                className="object-contain h-8 w-auto grayscale brightness-0 opacity-80"
              />
            </div>
          </div>
          <BSLogo />
        </div>

      </div>
    </footer>
  );
}