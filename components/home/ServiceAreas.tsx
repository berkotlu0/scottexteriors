"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, CheckCircle, ChevronLeft, ChevronRight } from "lucide-react";

// Orijinal Renkli Google "G" Logosu
const GoogleIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-1 .67-2.28 1.07-3.71 1.07-2.85 0-5.27-1.92-6.13-4.51H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.87 14.13c-.22-.67-.35-1.39-.35-2.13s.13-1.46.35-2.13V7.03H2.18C1.43 8.52 1 10.21 1 12s.43 3.48 1.18 4.97l3.69-2.84z" fill="#FBBC05"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.66l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.03l3.69 2.84c.86-2.59 3.28-4.51 6.13-4.51z" fill="#EA4335"/>
  </svg>
);

const GOOGLE_REVIEW_LINK = "https://www.google.com/search?q=Scott+Exteriors+Reviews...";

const reviews = [
  {
    name: "Christina Hargrove",
    role: "Local Guide",
    date: "2 months ago",
    stars: 5,
    text: "I work at an insurance agency in Dallas and I know a lot of roofers. For the last 12 years, Doug Moon with Scott Exteriors has been MY GUY. He's our office's first and best recommendation for all things exteriors...",
    color: "bg-red-500" 
  },
  {
    name: "Frankie Nuccio",
    role: "Local Guide",
    date: "7 months ago",
    stars: 5,
    text: "Super fast installation with great attention to detail. Alex is an excellent salesperson, when I buy another house in Dallas, and need roof work, they'll be doing it! Very happy",
    color: "bg-blue-500" 
  },
  {
    name: "Austin Chaney",
    role: "Customer",
    date: "3 years ago",
    stars: 5,
    text: "Scott exteriors did an excellent job and had even better customer service. Owner of the company actually came out to check on the job and suggested additional molding to make the door look better.",
    color: "bg-teal-500" 
  },
  {
    name: "Philip Muscat",
    role: "Local Guide",
    date: "2 years ago",
    stars: 5,
    text: "Scott Exteriors is highly recommended by our family. Very honest and ethical company that does what is right for each customer. We have used Scott Exteriors for our roof and siding. All looks fantastic.",
    color: "bg-green-600" 
  },
  {
    name: "Matt Guidotti",
    role: "Local Guide",
    date: "a year ago",
    stars: 5,
    text: "I have had the pleasure seeing Scott Exteriors 1st class work on multiple job sites. They have great crews, very knowledgeable, fair priced, and provide great quality. Tony and Jeremiah are both easy to work with.",
    color: "bg-purple-500" 
  },
  {
    name: "John H",
    role: "Local Guide",
    date: "a year ago",
    stars: 5,
    text: "He just completed another home inspection before my Ins deductible doubles and with supporting Drone photos he reported no Hail/ Wind or flaws to warrant repairs. Honest and complete service company !!!",
    color: "bg-orange-500" 
  }
];

export default function Reviews() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextReview = () => setCurrentIndex((prev) => (prev + 1) % reviews.length);
  const prevReview = () => setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);

  // Kart Bileşeni (Tekrarı önlemek için)
  const ReviewCard = ({ review }: { review: typeof reviews[0] }) => (
    <div className="bg-gray-50 border border-gray-200 p-7 md:p-8 rounded-3xl relative h-full flex flex-col group hover:border-[#087F23]/40 transition-all duration-500 shadow-sm hover:shadow-xl">
      <div className="absolute top-6 right-6 z-20">
        <GoogleIcon />
      </div>
      
      <div className="flex items-center gap-4 mb-6 relative z-10">
        <div className={`w-12 h-12 ${review.color} rounded-full flex items-center justify-center text-white font-black text-lg shadow-md`}>
          {review.name.charAt(0)}
        </div>
        <div>
          <h4 className="text-slate-900 font-bold tracking-wide text-sm md:text-base">{review.name}</h4>
          <p className="text-slate-500 text-[10px] font-medium">{review.date}</p>
        </div>
      </div>

      <div className="flex text-[#FBBC04] mb-4 relative z-10">
        {[...Array(review.stars)].map((_, i) => <Star key={i} size={14} fill="currentColor" stroke="none" />)}
      </div>

      <p className="text-slate-700 text-sm md:text-[15px] leading-relaxed mb-8 font-medium italic relative z-10 flex-grow">
        "{review.text}"
      </p>

      <div className="flex items-center gap-2 text-[#087F23] text-[10px] font-bold uppercase tracking-widest border-t border-gray-200 pt-5 mt-auto relative z-10">
        <CheckCircle size={12} strokeWidth={2.5} /> Verified Google Review
      </div>
    </div>
  );

  return (
    <section className="bg-white py-24 px-6 relative overflow-hidden border-t border-gray-100">
      <div className="max-w-[1400px] mx-auto relative z-10">
        
        {/* HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-10 mb-16 border-b border-gray-100 pb-10">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <GoogleIcon />
              <span className="text-slate-900 font-bold text-lg tracking-tight">Google Reviews</span>
              <div className="flex text-[#FBBC04] ml-1">
                {[...Array(4)].map((_, i) => <Star key={i} size={16} fill="currentColor" stroke="none" />)}
                <Star size={16} fill="currentColor" stroke="none" className="opacity-40" />
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 tracking-tighter">
              WHAT THE <span className="text-[#087F23]">NEIGHBORS</span> SAY
            </h2>
          </div>
          
          <div className="bg-gray-50 border border-gray-200 px-8 py-5 rounded-2xl flex items-center gap-6 shadow-sm w-fit">
            <div className="text-center">
              <p className="text-slate-900 text-5xl font-black leading-none">4.3</p>
              <div className="flex text-[#FBBC04] mt-2 justify-center">
                {[...Array(4)].map((_, i) => <Star key={i} size={12} fill="currentColor" stroke="none" />)}
                <Star size={12} fill="currentColor" stroke="none" className="opacity-40" />
              </div>
            </div>
            <div className="w-px h-14 bg-gray-200"></div>
            <div>
              <p className="text-slate-800 font-bold text-sm">Excellent</p>
              <p className="text-slate-500 text-xs font-medium mt-0.5">Based on real DFW homeowners</p>
            </div>
          </div>
        </div>

        {/* 🔥 CAROUSEL & GRID LOGIC 🔥 */}
        <div className="relative">
          
          {/* MASAÜSTÜ: Sabit 3'lü Grid (lg ekranlar) */}
          <div className="hidden lg:grid grid-cols-3 gap-8">
            {reviews.map((review, idx) => (
              <ReviewCard key={idx} review={review} />
            ))}
          </div>

          {/* MOBİL: Kaydırılabilir Carousel (lg altı) */}
          <div className="lg:hidden relative overflow-hidden px-2 py-4">
            <motion.div 
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              onDragEnd={(e, info) => {
                if (info.offset.x < -50) nextReview();
                if (info.offset.x > 50) prevReview();
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
                  <ReviewCard review={reviews[currentIndex]} />
                </motion.div>
              </AnimatePresence>
            </motion.div>

            {/* Mobil Navigasyon Noktaları */}
            <div className="flex justify-center gap-2 mt-8">
              {reviews.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    currentIndex === idx ? 'w-8 bg-[#087F23]' : 'w-2 bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* ALT BUTONLAR */}
        <div className="mt-16 flex flex-wrap justify-center gap-4">
          <motion.a 
            href={GOOGLE_REVIEW_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-transparent hover:bg-gray-50 text-slate-700 px-8 py-4 rounded-xl font-bold border border-gray-300 transition-all text-xs uppercase tracking-widest"
          >
            See all reviews
          </motion.a>
          
          <motion.a 
            href={GOOGLE_REVIEW_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 bg-[#087F23] hover:bg-[#06681B] text-white px-8 py-4 rounded-xl font-bold transition-all text-xs uppercase tracking-widest shadow-lg shadow-[#087F23]/20"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-1 .67-2.28 1.07-3.71 1.07-2.85 0-5.27-1.92-6.13-4.51H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
              <path d="M5.87 14.13c-.22-.67-.35-1.39-.35-2.13s.13-1.46.35-2.13V7.03H2.18C1.43 8.52 1 10.21 1 12s.43 3.48 1.18 4.97l3.69-2.84z" />
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.66l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.03l3.69 2.84c.86-2.59 3.28-4.51 6.13-4.51z" />
            </svg>
            Leave us a review
          </motion.a>
        </div>
      </div>
    </section>
  );
}