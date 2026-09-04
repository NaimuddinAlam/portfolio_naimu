import React from 'react';
import { motion } from 'framer-motion';

const Services = ({ data }) => {
  return (
    <div className="bg-[#0C0C0C]">
      <section id="services" className="relative flex w-full flex-col items-center overflow-hidden bg-white rounded-t-[2rem] md:rounded-t-[3rem] px-6 py-16 sm:px-8 lg:py-20">
      
      <div className="relative z-10 w-full max-w-5xl">
        {/* Section Header */}
        <div className="mb-10 md:mb-12 text-center">
          <p className="mb-2 text-[9px] sm:text-[11px] font-bold uppercase tracking-[0.3em] text-gray-500">
            What I bring to the table
          </p>
          <h2 className="font-black uppercase leading-[0.9] tracking-tighter text-[#0f0f0f]" style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}>
            Services
          </h2>
        </div>
        
        {/* Services List */}
        <div className="flex flex-col w-full">
          {data.items.map((service, index) => (
            <motion.div 
              key={service.id} 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.05 }}
              transition={{ duration: 1.0, ease: [0.25, 1, 0.5, 1], delay: index * 0.1 }}
              className={`flex flex-col md:flex-row md:items-start gap-4 md:gap-10 py-8 md:py-10 ${index === 0 ? 'border-t border-gray-200' : ''} border-b border-gray-200 group hover:bg-gray-50/50 transition-colors`}
            >
              {/* Number */}
              <div className="w-16 md:w-24 shrink-0">
                <span className="text-4xl md:text-5xl font-black text-[#0f0f0f] tracking-tighter transition-transform duration-500 group-hover:scale-105 inline-block origin-left">
                  {service.id}
                </span>
              </div>
              
              {/* Content */}
              <div className="flex flex-col flex-1 max-w-2xl pt-1">
                <div className="mb-3">
                  <h3 className="text-lg md:text-xl font-bold text-[#0f0f0f] uppercase tracking-wide inline-block border-b-[3px] border-amber-500 pb-1">
                    {service.name}
                  </h3>
                </div>
                <p className="text-xs md:text-sm font-medium text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
    </div>
  );
};

export default Services;
