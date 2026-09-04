import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Projects = ({ data }) => {
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = ['All', ...new Set(data.items.map(item => item.category))];
  const categoryCounts = categories.map(cat => ({
    name: cat,
    count: cat === 'All' ? data.items.length : data.items.filter(item => item.category === cat).length
  }));

  const filteredItems = activeFilter === 'All' 
    ? data.items 
    : data.items.filter(item => item.category === activeFilter);

  return (
    <section id="projects" className="relative flex min-h-screen w-full flex-col items-center bg-[#0C0C0C] px-6 py-16 sm:px-8 lg:py-20">
      
      <div className="relative z-10 w-full max-w-7xl">
        
        {/* Section Header */}
        <div className="mb-8 text-center flex flex-col items-center">
          <p className="mb-2 text-[9px] sm:text-[10px] font-black uppercase tracking-[0.3em] text-amber-500">
            Engineered Solutions & Applications
          </p>
          <h2 className="font-black uppercase leading-[0.9] tracking-tighter text-white drop-shadow-xl" style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}>
            Projects
          </h2>
        </div>

        {/* Filter Bar */}
        <div className="mb-10 flex justify-center">
          <div className="flex flex-wrap items-center justify-center gap-2 rounded-full border border-white/10 bg-[#161616] p-2 shadow-2xl">
            {categoryCounts.map((cat, idx) => (
              <button
                key={idx}
                onClick={() => setActiveFilter(cat.name)}
                className={`flex items-center gap-1.5 rounded-full px-4 py-1.5 text-[9px] sm:text-[10px] font-black uppercase tracking-wider transition-all duration-300 ${
                  activeFilter === cat.name 
                    ? 'bg-amber-500 text-black shadow-lg shadow-amber-500/25' 
                    : 'text-white/60 hover:text-white hover:bg-white/5'
                }`}
              >
                {cat.name === 'All' ? 'ALL PROJECTS' : cat.name}
                <span className={`flex h-4 w-4 items-center justify-center rounded-full text-[8px] ${
                  activeFilter === cat.name ? 'bg-black/20 text-black' : 'bg-white/10 text-white/80'
                }`}>
                  {cat.count}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {filteredItems.map((project, idx) => (
            <motion.div 
              key={project.id || idx}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.05 }}
              transition={{ duration: 1.0, ease: [0.25, 1, 0.5, 1], delay: (idx % 2) * 0.15 }}
              className="group flex flex-col overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#161616] transition-transform duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(245,158,11,0.1)] p-4 sm:p-6"
            >
              {/* Media Placeholder (No Photo, just Icon and Label) */}
              <div className="relative aspect-[16/9] w-full overflow-hidden rounded-[1rem] bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] border border-white/5 mb-5 flex flex-col items-center justify-center gap-3 transition-colors duration-500 group-hover:from-[#222] group-hover:to-[#1a1a1a]">
                
                {/* Large Emoji/Icon */}
                <span className="text-4xl sm:text-5xl filter drop-shadow-xl transition-transform duration-500 group-hover:scale-110 group-hover:-translate-y-2">
                  {project.emoji || '🚀'}
                </span>

                {/* Center Label Pill */}
                <div className="rounded-full bg-black/40 backdrop-blur-md border border-white/10 px-5 py-2.5 shadow-2xl transition-transform duration-500 group-hover:-translate-y-1">
                  <span className="text-[9px] sm:text-[10px] font-black uppercase tracking-[0.2em] text-white">
                    {project.thumbLabel || project.title}
                  </span>
                </div>

                {/* Top Right Category Badge */}
                <div className="absolute top-4 right-4 rounded-full bg-black/50 backdrop-blur-md px-4 py-1.5 border border-white/10">
                  <span className="text-[9px] font-black uppercase tracking-widest text-amber-500">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Card Text Content */}
              <div className="flex flex-col flex-1">
                <h3 className="mb-2 text-lg sm:text-xl font-black uppercase tracking-tight text-white group-hover:text-amber-500 transition-colors">
                  {project.title}
                </h3>
                <p className="mb-6 text-xs sm:text-sm leading-relaxed text-white/70">
                  {project.description}
                </p>

                {/* Problem Statement Box */}
                {project.problem && (
                  <div className="mt-auto rounded-xl border border-amber-500/20 bg-amber-500/5 p-4">
                    <div className="mb-1.5 flex items-center gap-1.5">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 text-amber-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"></path><path d="M12 9v4"></path><path d="M12 17h.01"></path></svg>
                      <span className="text-[9px] font-black uppercase tracking-widest text-amber-500">
                        Problem Statement
                      </span>
                    </div>
                    <p className="text-[10px] sm:text-[11px] font-medium leading-relaxed text-white/60">
                      {project.problem}
                    </p>
                  </div>
                )}
                
                {/* Actions / Links */}
                <div className="mt-5 flex flex-wrap items-center gap-3">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-4 py-2 text-[9px] font-bold uppercase tracking-wider text-white hover:bg-white/10 transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3-.3 6-1.5 6-6.5a5.4 5.4 0 0 0-1.5-3.8 5.4 5.4 0 0 0-.1-3.7s-1.2-.4-3.9 1.4a13.3 13.3 0 0 0-7 0c-2.7-1.8-3.9-1.4-3.9-1.4a5.4 5.4 0 0 0-.1 3.7 5.4 5.4 0 0 0-1.5 3.8c0 5 3 6.2 6 6.5a4.8 4.8 0 0 0-1 3.2v4"></path></svg>
                      Source Code
                    </a>
                  )}
                  {project.demo && project.demo !== '#' && (
                    <a href={project.demo} target="_blank" rel="noreferrer" className="flex items-center gap-2 rounded-full bg-amber-500/10 border border-amber-500/20 px-4 py-2 text-[9px] font-bold uppercase tracking-wider text-amber-500 hover:bg-amber-500/20 transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                      Live Demo
                    </a>
                  )}
                </div>

              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;
