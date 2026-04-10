import React from "react";
import Link from "next/link";
import Image from "next/image";
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
      <span className="text-[7px] tracking-[0.4em] text-white/20 uppercase font-sans group-hover:text-[#3A6B9C] transition-colors duration-700">
        Digital Architecture by
      </span>
      <div className="flex items-center gap-3">
        <div className="hidden md:block w-0 h-[1px] bg-[#3A6B9C] transition-all duration-700 ease-in-out group-hover:w-16" />
        <span className="font-serif text-lg md:text-xl text-white/30 group-hover:text-white transition-all duration-700 tracking-[0.05em] uppercase italic font-light">
          B&S <span className="group-hover:text-[#3A6B9C] transition-colors duration-700">Media</span>
        </span>
      </div>
      <div className="overflow-hidden h-3">
        <span className="block text-[7px] tracking-[0.6em] text-white/0 uppercase font-sans translate-y-full group-hover:translate-y-0 group-hover:text-white/20 transition-all duration-1000 ease-out">
          Designed to Define
        </span>
      </div>
    </a>
  );

  return (
    <footer className="bg-[#0B1221] border-t-2 border-[#3A6B9C] text-slate-300">
      <div className="max-w-[1400px] mx-auto px-6 py-14">
        
        {/* --- GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* 1. Brand & Socials */}
          <div className="flex flex-col space-y-6">
            <div className="w-fit p-1 group">
              <Image 
                // KANKA DİKKAT: Buraya logonun BEYAZ versiyonunu koyman gerekiyor. (Örn: amazing-exteriors-logo-white.svg)
                src="/amazing-exteriors-logo-black.svg" 
                alt="Amazing Exteriors" 
                width={200} 
                height={50} 
                // 'brightness-0 invert' class'ları SİLİNDİ!
                className="object-contain transition-transform duration-500 group-hover:scale-105" 
              />
            </div>
            <p className="text-xs text-slate-400 leading-relaxed max-w-[260px]">
              Top-quality replacement windows, siding, and entry doors since 1989. Professional remodeling excellence across Texas.
            </p>
            
            {/* Sosyal Medya */}
            <div className="flex gap-4">
              {[
                { name: "Facebook", path: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" },
                { name: "Instagram", path: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z M17.5 6.5h.01" },
                { name: "X", path: "M4 4l11.733 16h4.267l-11.733 -16zM4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" }
              ].map((social, i) => (
                <a 
                  key={i} 
                  href="#" 
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:bg-[#3A6B9C] hover:border-[#3A6B9C] hover:-translate-y-1 transition-all duration-300 shadow-lg"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    {social.name === "Instagram" && <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>}
                    <path d={social.path}></path>
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* 2. Windows */}
          <div>
            <h4 className="text-white font-bold tracking-[0.2em] uppercase text-[10px] mb-6 opacity-30">Windows</h4>
            <ul className="flex flex-col gap-3">
              {["Marvin Windows", "Round Top", "Double Hung", "Casement", "Awning", "Glider"].map((item, i) => (
                <li key={i}>
                  <Link href="#" className="text-[12px] text-slate-400 hover:text-[#3A6B9C] hover:translate-x-2 transition-all duration-300 flex items-center gap-2 group">
                    <span className="w-0 h-[1px] bg-[#3A6B9C] group-hover:w-3 transition-all"></span>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. Doors */}
          <div>
            <h4 className="text-white font-bold tracking-[0.2em] uppercase text-[10px] mb-6 opacity-30">Doors</h4>
            <ul className="flex flex-col gap-3">
              {["Entry Doors", "Storm Doors", "Patio Doors", "Legacy", "Signet", "Heritage"].map((item, i) => (
                <li key={i}>
                  <Link href="#" className="text-[12px] text-slate-400 hover:text-[#3A6B9C] hover:translate-x-2 transition-all duration-300 flex items-center gap-2 group">
                    <span className="w-0 h-[1px] bg-[#3A6B9C] group-hover:w-3 transition-all"></span>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 4. Contact */}
          <div className="flex flex-col space-y-6">
            <h4 className="text-white font-bold tracking-[0.2em] uppercase text-[10px] mb-2 opacity-30">Get In Touch</h4>
            <a href="tel:18001234567" className="group flex items-center gap-4 text-xs text-slate-400 hover:text-white transition-all">
              <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-[#3A6B9C] transition-all">
                <Phone size={16} className="text-[#3A6B9C] group-hover:text-white" />
              </div>
              <span className="font-bold tracking-wider">1-800-123-4567</span>
            </a>
            <a href="mailto:info@amazingexteriors.com" className="group flex items-center gap-4 text-xs text-slate-400 hover:text-white transition-all">
              <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-[#3A6B9C] transition-all">
                <Mail size={16} className="text-[#3A6B9C] group-hover:text-white" />
              </div>
              <span className="font-bold tracking-wider">info@amazingexteriors.com</span>
            </a>
          </div>
        </div>

        {/* --- BOTTOM BAR --- */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex flex-col gap-1">
            <p className="text-[10px] text-slate-600 font-bold uppercase tracking-widest">
              © {new Date().getFullYear()} Amazing Exteriors.
            </p>
            <Link href="#" className="text-[9px] text-slate-700 hover:text-[#3A6B9C] transition-colors uppercase tracking-[0.3em] font-black">
              Privacy Policy
            </Link>
          </div>
          
          <BSLogo />
        </div>

      </div>
    </footer>
  );
}