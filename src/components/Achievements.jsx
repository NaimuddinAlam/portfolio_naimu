import React from 'react';
import { motion } from 'framer-motion';

const Achievements = ({ data, resume }) => {
  return (
    <section id="achievements" className="relative w-full bg-[#0C0C0C] px-6 sm:px-10 py-16 sm:py-20 border-t border-white/5">
      <div className="flex flex-col md:flex-row justify-between items-center max-w-4xl mx-auto mb-10 sm:mb-14 gap-6">
        <div className="text-center md:text-left">
          <p className="text-xs uppercase tracking-[0.3em] text-amber-400 font-semibold mb-1">Experience & Education</p>
          <h2 className="hero-heading font-black uppercase tracking-tight leading-none" style={{ fontSize: 'clamp(2.2rem, 4vw, 4rem)' }}>
            Organizations
          </h2>
        </div>
      </div>
      
      <div className="mx-auto max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-5">
        {data.items.map((item, idx) => (
          <motion.div 
            key={idx} 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.05 }}
            transition={{ duration: 1.0, ease: [0.25, 1, 0.5, 1], delay: (idx % 2) * 0.15 }}
            className="group flex flex-col justify-between gap-4 rounded-2xl border border-white/10 bg-[#141418] p-6 transition-all duration-300 hover:border-amber-500/50 hover:bg-[#1a1a20]"
          >
            <div>
              <div className="mb-3 text-2xl">{item.icon || '🏆'}</div>
              <h3 className="text-lg font-bold text-white group-hover:text-amber-400 transition-colors">{item.title}</h3>
              <p className="text-xs font-semibold text-amber-500/80 uppercase tracking-widest mt-1 mb-3">{item.organization}</p>
              <p className="text-sm text-neutral-400 font-light leading-relaxed">
                {item.description}
              </p>
            </div>
            {item.year && (
              <div className="text-right">
                <span className="text-[10px] font-bold text-neutral-500 bg-white/5 px-2 py-1 rounded-md border border-white/10">{item.year}</span>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;
