"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Calendar, Mail, X, Send, MessageCircle, CheckCircle2 } from "lucide-react";

export default function FloatingWidget() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeTab, setActiveTab] = useState<string | null>(null);
  
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
  const [lastSentTime, setLastSentTime] = useState<number>(0);

  const phoneNum = "210-796-4624";

  const handleSubmit = async (type: "Consultation" | "SMS") => {
    const now = Date.now();
    if (now - lastSentTime < 60000) {
      alert("Please wait a minute before sending another message.");
      return;
    }

    setLoading(true);

    // --- FAKE (SAHTE) YÜKLEME ---
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setSuccess(true);
    setLastSentTime(now);
    setLoading(false);
  };

  return (
    <div className="fixed bottom-8 right-8 z-[110] flex flex-col items-end gap-4 max-md:bottom-4 max-md:right-4">
      <AnimatePresence>
        {activeTab && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="w-[380px] bg-[#0a0a0a] border border-white/10 rounded-[2rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] mb-2 backdrop-blur-xl max-sm:w-[320px]"
          >
            <div className="p-6 pb-2 flex justify-between items-center">
              <span className="text-[9px] tracking-[0.3em] uppercase text-white/40 font-black">Amazing Exteriors</span>
              <button onClick={() => setActiveTab(null)} className="text-white/20 hover:text-[#3A6B9C] transition-colors p-1">
                <X size={20} />
              </button>
            </div>

            <div className="p-8 pt-2">
              {success ? (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-12">
                  <CheckCircle2 size={48} className="text-[#3A6B9C] mx-auto mb-4" />
                  <h3 className="font-bold text-2xl text-white italic">Received</h3>
                  <p className="text-white/40 text-sm mt-2">We will get back to you shortly.</p>
                </motion.div>
              ) : (
                <>
                  {activeTab === "call" && (
                    <div className="text-center">
                      <h3 className="font-bold text-2xl text-white mb-6 italic">Give Us a Call</h3>
                      <div className="bg-white/95 p-4 rounded-3xl inline-block mb-6 shadow-xl">
                        <img src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=tel:${phoneNum}`} alt="QR" className="w-28 h-28" />
                      </div>
                      <a href={`tel:${phoneNum}`} className="w-full bg-[#3A6B9C] text-white py-4 rounded-xl font-black flex items-center justify-center gap-3 transition-all hover:bg-[#2B5278]">
                        {phoneNum}
                      </a>
                    </div>
                  )}

                  {activeTab === "book" && (
                    <form className="flex flex-col gap-4">
                      <h3 className="font-bold text-2xl text-white mb-2 italic">Free Quote</h3>
                      <input type="text" placeholder="Full Name" value={formData.name} onChange={(e)=>setFormData({...formData, name:e.target.value})} className="w-full bg-white/[0.03] border border-white/10 rounded-xl py-4 px-4 text-white focus:border-[#3A6B9C] outline-none" />
                      <input type="tel" placeholder="Phone Number" value={formData.phone} onChange={(e)=>setFormData({...formData, phone:e.target.value})} className="w-full bg-white/[0.03] border border-white/10 rounded-xl py-4 px-4 text-white focus:border-[#3A6B9C] outline-none" />
                      <button type="button" onClick={()=>handleSubmit("Consultation")} className="bg-[#3A6B9C] text-white py-4 rounded-xl font-black tracking-widest uppercase text-xs">{loading ? "SENDING..." : "GET QUOTE"}</button>
                    </form>
                  )}

                  {activeTab === "text" && (
                    <form className="flex flex-col gap-4">
                      <h3 className="font-bold text-2xl text-white mb-2 italic">Quick Message</h3>
                      <textarea rows={3} placeholder="Project details..." value={formData.message} onChange={(e)=>setFormData({...formData, message:e.target.value})} className="w-full bg-white/[0.03] border border-white/10 rounded-xl p-4 text-white focus:border-[#3A6B9C] outline-none resize-none" />
                      <button type="button" onClick={()=>handleSubmit("SMS")} className="bg-[#3A6B9C] text-white py-4 rounded-xl font-black tracking-widest uppercase text-xs">{loading ? "SENDING..." : "SEND MESSAGE"}</button>
                    </form>
                  )}

                  {activeTab === "email" && (
                    <div className="text-center py-4">
                      <h3 className="font-bold text-2xl text-white mb-4 italic">Email Support</h3>
                      <div className="bg-white/[0.02] p-6 rounded-2xl border border-white/10">
                        <span className="text-white font-medium text-lg">info@amazingexteriors.com</span>
                      </div>
                    </div>
                  )}
                </>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex items-center gap-3">
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ width: 0, opacity: 0, x: 20 }}
              animate={{ width: "auto", opacity: 1, x: 0 }}
              exit={{ width: 0, opacity: 0, x: 20 }}
              className="relative p-[1px] overflow-hidden rounded-full shadow-[0_0_40px_rgba(58,107,156,0.3)]"
            >
              <motion.div
                initial={{ rotate: 0 }}
                animate={{ rotate: 360 }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                style={{ background: "conic-gradient(from 0deg, transparent 0%, #3A6B9C 50%, transparent 100%)" }}
                className="absolute inset-[-200%] z-0"
              />
              <div className="relative z-10 bg-[#050505]/95 backdrop-blur-3xl flex items-center p-1.5 rounded-full whitespace-nowrap">
                {[
                  { id: "call", icon: Phone, label: "Call" },
                  { id: "book", icon: Calendar, label: "Quote" },
                  { id: "text", icon: MessageCircle, label: "Text" },
                  { id: "email", icon: Mail, label: "Email" },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      setActiveTab(activeTab === item.id ? null : item.id);
                      setSuccess(false);
                    }}
                    className={`flex items-center gap-2 px-5 py-3 rounded-full transition-all duration-500 ${activeTab === item.id ? 'bg-[#3A6B9C] text-white' : 'text-white/40 hover:text-[#3A6B9C]'}`}
                  >
                    <item.icon size={15} />
                    <span className="text-[10px] font-black uppercase tracking-widest">{item.label}</span>
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.button
          onClick={() => setIsExpanded(!isExpanded)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="relative w-16 h-16 flex items-center justify-center rounded-full bg-[#050505] border border-white/10 hover:border-[#3A6B9C]/50 shadow-[0_15px_40px_rgba(0,0,0,0.4)] group overflow-hidden"
        >
          <motion.div
            initial={{ rotate: 0 }} 
            animate={{ rotate: 360 }} 
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            style={{ background: "conic-gradient(from 0deg, transparent 0%, #3A6B9C 50%, transparent 100%)" }}
            className="absolute inset-[-100%] z-0 opacity-40 group-hover:opacity-100 transition-opacity"
          />
          <div className="absolute inset-[1px] bg-[#050505] rounded-full z-1" />
          <div className="relative z-10 transform group-hover:-translate-y-1 transition-transform duration-500">
            {isExpanded ? (
              <X size={24} className="text-[#3A6B9C]" />
            ) : (
              <motion.div animate={{ y: [0, -3, 0] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}>
                <Send size={24} className="rotate-[-45deg] text-[#3A6B9C]" strokeWidth={1.5} />
              </motion.div>
            )}
          </div>
        </motion.button>
      </div>
    </div>
  );
}