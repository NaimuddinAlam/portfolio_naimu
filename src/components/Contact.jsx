import React from 'react';
import { motion } from 'framer-motion';

const Contact = ({ data }) => {
  return (
    <section id="contact" className="relative flex w-full flex-col items-center overflow-hidden bg-[#0a0a0c] px-6 sm:px-10 py-20 border-t border-white/5">
      
      {/* Background Glow */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,_var(--tw-gradient-stops))] from-amber-500/10 via-transparent to-transparent blur-3xl"></div>
      </div>
      
      <div className="relative z-10 w-full max-w-4xl">
        
        {/* Header */}
        <div className="mb-14 text-center flex flex-col items-center">
          <p className="mb-2.5 text-[9px] font-black uppercase tracking-[0.4em] text-amber-500">
            Let's connect & build
          </p>
          <h2 className="font-black uppercase leading-[0.9] tracking-tighter text-white drop-shadow-xl" style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)' }}>
            Get in Touch
          </h2>
        </div>
        
        {/* Contact Bento Grid */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={{
            visible: { transition: { staggerChildren: 0.1 } }
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          
          {/* Email Card (Col 1, Row 1) */}
          <motion.a 
            variants={{ hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0, transition: { duration: 1.0, ease: [0.25, 1, 0.5, 1] } } }}
            href={`mailto:${data.email}`} 
            className="group relative flex flex-col justify-between rounded-2xl border border-white/5 bg-[#141416] p-5 sm:p-6 transition-all duration-300 hover:border-amber-500/30 hover:bg-[#1a1a1d] min-h-[140px]">
            <div className="flex justify-between items-start">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-amber-500/20 text-amber-500 transition-transform group-hover:scale-110 group-hover:bg-amber-500/10">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white/20 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-amber-500"><path d="M7 17L17 7"></path><path d="M7 7h10v10"></path></svg>
            </div>
            <div className="mt-6">
              <p className="text-[9px] font-bold uppercase tracking-widest text-neutral-500 mb-1">Email</p>
              <p className="text-xs sm:text-sm font-bold text-white transition-colors group-hover:text-amber-400">{data.email}</p>
            </div>
          </motion.a>

          {/* WhatsApp Card (Col 2, Row 1) */}
          <motion.a 
            variants={{ hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0, transition: { duration: 1.0, ease: [0.25, 1, 0.5, 1] } } }}
            href={`https://wa.me/${data.phone.replace(/[^0-9]/g, '')}`} target="_blank" rel="noopener noreferrer" className="group relative flex flex-col justify-between rounded-2xl border border-white/5 bg-[#141416] p-5 sm:p-6 transition-all duration-300 hover:border-amber-500/30 hover:bg-[#1a1a1d] min-h-[140px]">
            <div className="flex justify-between items-start">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-amber-500/20 text-amber-500 transition-transform group-hover:scale-110 group-hover:bg-amber-500/10">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white/20 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-amber-500"><path d="M7 17L17 7"></path><path d="M7 7h10v10"></path></svg>
            </div>
            <div className="mt-6">
              <p className="text-[9px] font-bold uppercase tracking-widest text-neutral-500 mb-1">WhatsApp / Phone</p>
              <p className="text-xs sm:text-sm font-bold text-white transition-colors group-hover:text-amber-400">{data.phone}</p>
            </div>
          </motion.a>

          {/* LinkedIn Card (Col 3, Row Span 2) */}
          <motion.a 
            variants={{ hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0, transition: { duration: 1.0, ease: [0.25, 1, 0.5, 1] } } }}
            href={data.socials[0].link} target="_blank" rel="noopener noreferrer" className="group relative flex flex-col justify-between rounded-2xl border border-amber-500/50 bg-[#1a150e] p-5 sm:p-6 transition-all duration-300 hover:border-amber-400 hover:bg-[#201910] min-h-[140px] lg:row-span-2 lg:h-full">
            <div className="flex justify-between items-start">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-amber-500/40 bg-amber-500/10 text-amber-500 transition-transform group-hover:scale-110 group-hover:bg-amber-500/20">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-amber-500/50 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-amber-400"><path d="M7 17L17 7"></path><path d="M7 7h10v10"></path></svg>
            </div>
            <div className="mt-6 lg:mt-auto">
              <p className="text-[9px] font-bold uppercase tracking-widest text-amber-500/70 mb-1">LinkedIn</p>
              <p className="text-base sm:text-lg font-black text-amber-500 transition-colors group-hover:text-amber-400">{data.socials[0].handle}</p>
            </div>
          </motion.a>

          {/* GitHub Card (Col 1, Row 2) */}
          <motion.a 
            variants={{ hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0, transition: { duration: 1.0, ease: [0.25, 1, 0.5, 1] } } }}
            href={data.socials[1].link} target="_blank" rel="noopener noreferrer" className="group relative flex flex-col justify-between rounded-2xl border border-white/5 bg-[#141416] p-5 sm:p-6 transition-all duration-300 hover:border-amber-500/30 hover:bg-[#1a1a1d] min-h-[140px]">
            <div className="flex justify-between items-start">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-amber-500/20 text-amber-500 transition-transform group-hover:scale-110 group-hover:bg-amber-500/10">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white/20 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-amber-500"><path d="M7 17L17 7"></path><path d="M7 7h10v10"></path></svg>
            </div>
            <div className="mt-6">
              <p className="text-[9px] font-bold uppercase tracking-widest text-neutral-500 mb-1">GitHub</p>
              <p className="text-xs sm:text-sm font-bold text-white transition-colors group-hover:text-amber-400">{data.socials[1].handle}</p>
            </div>
          </motion.a>

          {/* Instagram Card (Col 2, Row 2) */}
          <motion.a 
            variants={{ hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0, transition: { duration: 1.0, ease: [0.25, 1, 0.5, 1] } } }}
            href={data.socials[2].link} target="_blank" rel="noopener noreferrer" className="group relative flex flex-col justify-between rounded-2xl border border-white/5 bg-[#141416] p-5 sm:p-6 transition-all duration-300 hover:border-amber-500/30 hover:bg-[#1a1a1d] min-h-[140px]">
            <div className="flex justify-between items-start">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-amber-500/20 text-amber-500 transition-transform group-hover:scale-110 group-hover:bg-amber-500/10">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white/20 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-amber-500"><path d="M7 17L17 7"></path><path d="M7 7h10v10"></path></svg>
            </div>
            <div className="mt-6">
              <p className="text-[9px] font-bold uppercase tracking-widest text-neutral-500 mb-1">Instagram</p>
              <p className="text-xs sm:text-sm font-bold text-white transition-colors group-hover:text-amber-400">{data.socials[2].handle}</p>
            </div>
          </motion.a>

        </motion.div>
        
        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[9px] font-bold uppercase tracking-widest text-neutral-600">
            © {new Date().getFullYear()} NAIMUDDIN ALAM
          </p>
          <p className="text-[9px] font-bold uppercase tracking-widest text-neutral-600">
            Design and build by <span className="text-amber-500">Naimu</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
