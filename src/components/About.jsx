import React from 'react';
import { motion } from 'framer-motion';

const About = ({ data }) => {
  return (
    <section id="about" className="relative flex w-full flex-col items-center justify-center overflow-hidden bg-[#0C0C0C] px-6 py-12 sm:px-8 sm:py-16">
      {/* Background glow effects */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute left-[-10%] top-1/4 h-96 w-96 rounded-full bg-amber-500/5 blur-[150px]"></div>
        <div className="absolute right-[-10%] bottom-1/4 h-96 w-96 rounded-full bg-orange-500/5 blur-[150px]"></div>
      </div>
      
      <div className="relative z-10 w-full max-w-6xl">
        {/* Section Header */}
        <div className="mb-8 text-center">
          <p className="mb-2 text-[9px] sm:text-[11px] font-black uppercase tracking-[0.35em] text-amber-500">
            Get to know me
          </p>
          <h2 className="font-black uppercase leading-none tracking-tight text-white drop-shadow-lg" style={{ fontSize: 'clamp(2rem, 5vw, 4.5rem)' }}>
            {data.title || "About Me"}
          </h2>
        </div>
        
        {/* Two Column Layout */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.3fr] lg:gap-16 items-center justify-items-center lg:justify-items-start">
          
          {/* LEFT COLUMN: Profile Card */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.05 }}
            transition={{ duration: 1.0, ease: [0.25, 1, 0.5, 1] }}
            className="flex w-full justify-center lg:justify-end"
          >
            <div className="group relative w-full max-w-[320px] cursor-pointer transition-transform duration-500 hover:-translate-y-2">
              {/* Subtle Orange Glow Behind Card */}
              <div className="absolute inset-0 rounded-[2rem] bg-amber-500/10 blur-xl transition-all duration-500 group-hover:bg-amber-500/30 group-hover:blur-2xl shadow-[0_0_30px_rgba(245,158,11,0.15)]"></div>
              
              {/* Card Container */}
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-white/5 bg-black shadow-2xl">
                <img 
                  src={data.photo} 
                  alt={data.name} 
                  className="h-full w-full object-cover transition-transform duration-700 scale-x-[-1] group-hover:scale-x-[-1.1] group-hover:scale-y-[1.1]" 
                />
                
                {/* Gradient Overlay for Text */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
                
                {/* Name & Title inside card */}
                <div className="absolute bottom-0 left-0 w-full p-6 sm:p-8">
                  <h3 className="text-2xl sm:text-3xl font-black text-white mb-1 tracking-tight">
                    {data.name}
                  </h3>
                  <p className="text-xs sm:text-sm font-bold tracking-wide text-amber-500">
                    {data.education}
                  </p>
                </div>
              </div>
            </div>
            
          </motion.div>
          
          {/* RIGHT COLUMN: Bio & Stats */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.05 }}
            transition={{ duration: 1.0, ease: [0.25, 1, 0.5, 1], delay: 0.15 }}
            className="flex flex-col justify-center w-full max-w-2xl"
          >
            {/* Bio Paragraph */}
            <div className="text-xs sm:text-sm lg:text-base font-medium leading-relaxed text-white/90">
              <p>{data.bio}</p>
            </div>
            
            {/* Pill Badges */}
            <div className="mt-6 flex flex-wrap gap-2.5">
              {data.tags.map((tag, i) => (
                <span 
                  key={i} 
                  className="rounded-full border border-amber-500/40 bg-amber-500/5 px-4 py-2 text-xs font-bold tracking-wide text-amber-400 transition-colors hover:bg-amber-500/10"
                >
                  {tag}
                </span>
              ))}
            </div>
            
            {/* Stats Row */}
            <div className="mt-8 sm:mt-12 flex flex-wrap items-center gap-10 sm:gap-16 border-t border-white/10 pt-6 sm:pt-8">
              {data.stats.map((stat, i) => (
                <div key={i} className="flex flex-col">
                  <span className="text-3xl sm:text-4xl font-black text-amber-500 mb-1.5">
                    {stat.value}
                  </span>
                  <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.2em] text-white/50">
                    {stat.label}
                  </span>
                </div>
              ))}
              
              {data.resume && (
                <div className="flex flex-col sm:ml-auto mt-4 sm:mt-0">
                  <a href={data.resume} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 rounded-full border-2 border-amber-500/60 bg-amber-500/10 px-8 py-4 sm:px-10 sm:py-5 text-sm sm:text-base font-black uppercase tracking-[0.2em] text-amber-400 hover:bg-amber-500/20 hover:text-amber-300 hover:scale-105 hover:border-amber-400 transition-all shadow-[0_0_20px_rgba(245,158,11,0.25)]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12h20"/><path d="M12 2v20"/></svg>
                    View Resume
                  </a>
                </div>
              )}
            </div>
            
          </motion.div>
        </div>

        {/* Technical Skill Matrix */}
        <div className="mt-12 sm:mt-16 w-full max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-6">
            <h3 className="text-[9px] sm:text-[10px] font-black uppercase tracking-[0.35em] text-amber-500">
              Technical Skill Matrix
            </h3>
          </div>
          
          {/* Skills Table */}
          <div className="flex flex-col">
            {data.skills?.map((skillGroup, index) => (
              <div key={index} className="flex flex-col md:flex-row md:items-center border-b border-white/5 py-3 sm:py-4 gap-3 md:gap-10 hover:bg-white/[0.02] transition-colors px-2 -mx-2 rounded-lg">
                <div className="w-40 sm:w-48 shrink-0">
                  <h4 className="text-[9px] sm:text-[10px] font-extrabold tracking-[0.25em] text-white/50 uppercase">
                    {skillGroup.category}
                  </h4>
                </div>
                <div className="flex flex-wrap gap-2 sm:gap-2.5">
                  {skillGroup.items.map((item, i) => (
                    <span key={i} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 sm:px-4 sm:py-1.5 text-[9px] sm:text-[10.5px] font-bold tracking-wide text-white/80">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          {/* CTA Button */}
          <div className="mt-10 sm:mt-12 text-center">
            <a href="#contact" className="inline-block rounded-full border border-white/10 bg-[#161616] px-8 py-2.5 text-[9px] sm:text-[10px] font-black uppercase tracking-[0.25em] text-white hover:bg-white/10 hover:scale-105 transition-all shadow-xl">
              Let's Build Together
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
