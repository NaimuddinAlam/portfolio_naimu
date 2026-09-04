import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [active, setActive] = useState('hero');
  const [scrolled, setScrolled] = useState(false);
  const dragConstraintsRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const targetId = entry.target.id;
          setActive(targetId === 'achievements' ? 'projects' : targetId);
        }
      });
    }, { 
      threshold: 0, 
      rootMargin: "-40% 0px -40% 0px" 
    }); 

    ['hero', 'about', 'services', 'projects', 'achievements', 'contact'].forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  const navItems = [
    { id: 'hero', label: 'Home', color: '#d4ff36', icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
    )},
    { id: 'about', label: 'About', color: '#f59e0b', icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
    )},
    { id: 'services', label: 'Services', color: '#3b82f6', icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
    )},
    { id: 'projects', label: 'Projects', color: '#a855f7', icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="7" height="7" x="3" y="3" rx="1"></rect><rect width="7" height="7" x="14" y="3" rx="1"></rect><rect width="7" height="7" x="14" y="14" rx="1"></rect><rect width="7" height="7" x="3" y="14" rx="1"></rect></svg>
    )},
    { id: 'contact', label: 'Contact', color: '#ec4899', icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path></svg>
    )}
  ];

  let activeIndex = navItems.findIndex(i => i.id === active);
  if (activeIndex === -1) activeIndex = 0;

  return (
    <>
      {/* Invisible container for drag bounds so it doesn't leave the screen */}
      <div ref={dragConstraintsRef} className="fixed inset-0 z-0 pointer-events-none" />
      
      <motion.div 
        drag
        dragConstraints={dragConstraintsRef}
        dragElastic={0.1}
        className={`fixed left-1/2 -translate-x-1/2 sm:left-auto sm:transform-none sm:right-8 md:right-12 top-6 z-[100] cursor-grab active:cursor-grabbing transition-transform duration-700 ${scrolled ? 'translate-y-0' : 'translate-y-2'}`}
      >
        <nav className="relative flex items-center gap-8 rounded-2xl border border-[#2a2a35] bg-[#16161e]/90 px-6 h-[60px] backdrop-blur-xl shadow-2xl pointer-events-auto">
        
        {/* The smooth sliding dynamic color indicator */}
        <div 
          className="absolute top-0 w-8 h-full pointer-events-none transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]"
          style={{ left: `calc(1.5rem + ${activeIndex * 4}rem)` }}
          id="nav-indicator"
        >
          <div 
            className="absolute top-[36px] left-1/2 -translate-x-1/2 h-[42px] w-[42px] rounded-full blur-[6px] opacity-80 transition-colors duration-500"
            style={{ backgroundColor: navItems[activeIndex].color }}
          ></div>
          <div 
            className="absolute top-[38px] left-1/2 -translate-x-1/2 h-[38px] w-[38px] rounded-full transition-colors duration-500"
            style={{ 
              backgroundColor: navItems[activeIndex].color,
              boxShadow: `0 0 15px ${navItems[activeIndex].color}80` 
            }}
          ></div>
          <span 
            className="absolute top-[82px] left-1/2 -translate-x-1/2 text-[10px] font-extrabold tracking-wider uppercase whitespace-nowrap transition-colors duration-500"
            style={{ color: navItems[activeIndex].color }}
          >
            {navItems[activeIndex].label}
          </span>
        </div>

        {/* The navigation icons */}
        {navItems.map((item) => {
          const isActive = active === item.id;
          return (
            <a 
              key={item.id} 
              href={`#${item.id}`}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' });
                setActive(item.id);
              }}
              className="relative z-10 flex items-center justify-center w-8 h-full group cursor-pointer"
            >
              <div 
                className={`transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${
                  isActive 
                    ? 'translate-y-[24px] text-black scale-110' 
                    : 'translate-y-0 text-neutral-400 group-hover:text-white group-hover:scale-110'
                }`}
              >
                {item.icon}
              </div>
            </a>
          );
        })}
    </nav>
    </motion.div>
    </>
  );
};

export default Navbar;
