import React, { useState, useEffect } from 'react';

const Hero = ({ data }) => {
  const [userInteracted, setUserInteracted] = useState(false);
  const [paused, setPaused] = useState(false);
  const [muted, setMuted] = useState(true);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [speaking, setSpeaking] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [showTapPrompt, setShowTapPrompt] = useState(true);
  
  const videoRef = React.useRef(null);
  const bgVideoRef = React.useRef(null);
  const heroRef = React.useRef(null);
  const lastTime = React.useRef(0);
  const userInteractedWithAudio = React.useRef(false);

  useEffect(() => {
    // Hide the "TAP FOR SOUND" prompt after 10 seconds if they ignore it
    const timer = setTimeout(() => setShowTapPrompt(false), 10000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible(entry.isIntersecting);
    }, { threshold: 0.1 });

    if (heroRef.current) observer.observe(heroRef.current);
    return () => observer.disconnect();
  }, []);

  const previousVisible = React.useRef(true);

  useEffect(() => {
    // If scrolling back up to the home page, restart the video from the beginning and mute it!
    if (isVisible && !previousVisible.current) {
      if (videoRef.current) videoRef.current.currentTime = 0;
      if (bgVideoRef.current) bgVideoRef.current.currentTime = 0;
      setMuted(true);
      setUserInteracted(false);
      userInteractedWithAudio.current = false;
    }
    previousVisible.current = isVisible;

    // Always play visually unless the user explicitly clicked the pause button
    if (!paused) {
      videoRef.current?.play().catch(e => console.log("Autoplay prevented:", e));
      bgVideoRef.current?.play().catch(e => console.log("Autoplay prevented:", e));
    } else {
      videoRef.current?.pause();
      bgVideoRef.current?.pause();
    }

    // Auto-mute when scrolled out of view, and restore original audio state when scrolling back
    if (videoRef.current) {
      videoRef.current.muted = !isVisible ? true : muted;
    }
  }, [paused, isVisible, muted]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      setMousePos({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const playGreeting = () => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const text = "Hello! My name is Naimuddin Alam. I am a Senior Java developer, and I am building scalable and reliable software. Welcome to my portfolio.";
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 0.9;
      utterance.pitch = 1;
      
      utterance.onstart = () => setSpeaking(true);
      utterance.onend = () => setSpeaking(false);
      utterance.onerror = () => setSpeaking(false);
      
      window.speechSynthesis.speak(utterance);
    }
  };

  const handleTimeUpdate = () => {
    if (!videoRef.current) return;
    const currentTime = videoRef.current.currentTime;
    // Detect when video loops (time jumps backward)
    if (currentTime < lastTime.current - 1) {
      // ONLY auto-mute if the user hasn't explicitly chosen to unmute it!
      if (!userInteractedWithAudio.current) {
        setMuted(true); 
      }
    }
    lastTime.current = currentTime;
  };

  const handleToggleMute = () => {
    userInteractedWithAudio.current = true;
    setUserInteracted(true);
    setMuted(!muted);
  };

  return (
    <section ref={heroRef} className="relative h-screen w-full overflow-hidden bg-black" id="hero">
      {data.video ? (
        <>
          {/* Blurred background image for mobile to prevent massive lag from dual video rendering */}
          <div 
            className="md:hidden pointer-events-none absolute inset-0 h-full w-full opacity-40 blur-[40px] scale-110"
            style={{ backgroundImage: `url(${data.bgImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
          ></div>
          {/* Blurred background video MUST always be muted to prevent audio echo - Hidden on mobile for performance */}
          <video 
            ref={bgVideoRef}
            loop 
            playsInline 
            muted={true}
            preload="auto" 
            className="hidden md:block pointer-events-none absolute inset-0 h-full w-full object-cover scale-110 blur-3xl opacity-40 transition-opacity duration-1000"
          >
            <source src={data.video} type="video/mp4" />
          </video>
          {/* Foreground video controls the actual audio */}
          <video 
            ref={videoRef}
            onTimeUpdate={handleTimeUpdate}
            loop 
            playsInline 
            muted={muted}
            preload="auto" 
            className={`absolute inset-0 h-full w-full object-cover opacity-90 transition-opacity duration-700 ${paused ? 'opacity-50 grayscale blur-sm' : ''}`}
          >
            <source src={data.video} type="video/mp4" />
          </video>
        </>
      ) : (
        <>
          <div 
            className="pointer-events-none absolute inset-0 h-full w-full blur-[40px] opacity-40 transition-transform duration-500 ease-out"
            style={{ 
              backgroundImage: `url(${data.bgImage})`, 
              backgroundSize: 'cover', 
              backgroundPosition: 'center',
              transform: `perspective(1000px) scale(1.2) rotateX(${-mousePos.y * 6}deg) rotateY(${mousePos.x * 6}deg) translate3d(${mousePos.x * -20}px, ${mousePos.y * -20}px, -50px)`
            }}
          ></div>
          <div 
            className={`absolute inset-0 h-full w-full opacity-60 transition-transform duration-200 ease-out`}
            style={{ 
              backgroundImage: `url(${data.bgImage})`, 
              backgroundSize: 'cover', 
              backgroundPosition: 'center',
              transform: `perspective(1000px) scale(1.1) rotateX(${-mousePos.y * 3}deg) rotateY(${mousePos.x * 3}deg) translate3d(${mousePos.x * -10}px, ${mousePos.y * -10}px, 0)`
            }}
          ></div>
        </>
      )}
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-black/60 z-[1]"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/90 z-[1]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-500/10 via-transparent to-black/70 z-[1]"></div>
      
      <div className="relative z-20 flex h-full flex-col justify-between">
        <div className="pt-24"></div>
        <div className="flex flex-1 items-center px-6 md:px-12">
          <div className="w-full max-w-7xl">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-1.5 backdrop-blur-md">
                <span className="h-2 w-2 rounded-full bg-amber-400 animate-pulse"></span>
                <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.3em] text-amber-300">{data.badge}</span>
              </div>
            </div>
            <div>
              <h1 className="font-black uppercase leading-[0.9] tracking-tight text-white drop-shadow-2xl" style={{ fontSize: 'clamp(2.5rem, 7vw, 5.5rem)' }}>
                {data.firstName}<br />
                <span className="hero-heading">{data.lastName}</span>
              </h1>
            </div>
            <div>
              <p className="mt-6 max-w-2xl text-xs sm:text-sm md:text-base font-medium uppercase tracking-[0.25em] text-amber-100/90 leading-relaxed">
                {data.subtitle}
              </p>
            </div>
          </div>
        </div>
        
        <div className="flex items-end justify-between px-6 md:px-12 pb-8 md:pb-12">
          <div>
            <a href="#about" aria-label="Scroll to about section" className="group flex flex-col items-center gap-3">
              <span className="text-[10px] font-semibold uppercase tracking-[0.35em] text-white/70 transition-colors group-hover:text-amber-400">Scroll</span>
              <div className="relative h-12 w-0.5 overflow-hidden bg-white/20">
                <span className="absolute inset-x-0 top-0 h-1/2 w-full bg-amber-400" style={{ animation: '2s ease-in-out 0s infinite normal none running scrollPulse' }}></span>
              </div>
            </a>
          </div>
          <div>
            <div className="flex items-center gap-3">
              {data.video ? (
                <>
                  {muted && !userInteracted && showTapPrompt && (
                    <button 
                      onClick={handleToggleMute}
                      className="mr-2 animate-pulse flex items-center gap-2 rounded-full border border-amber-500/50 bg-black/60 px-4 py-2 sm:px-5 sm:py-2.5 backdrop-blur-md transition-all hover:bg-amber-500/20 active:scale-95"
                    >
                      <span className="text-[9px] sm:text-[10px] font-extrabold uppercase tracking-[0.2em] text-amber-500">Tap for sound</span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-amber-500"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path><path d="M19.07 4.93a10 10 0 0 1 0 14.14"></path></svg>
                    </button>
                  )}
                  <button aria-label="Pause video" onClick={() => setPaused(!paused)} className="flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-md transition-all hover:bg-amber-500/20 hover:border-amber-400 hover:scale-110 active:scale-95">
                    {paused ? (
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-play"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-pause"><rect x="14" y="4" width="4" height="16" rx="1"></rect><rect x="6" y="4" width="4" height="16" rx="1"></rect></svg>
                    )}
                  </button>
                  <button aria-label="Unmute video" onClick={handleToggleMute} className="flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-md transition-all hover:bg-amber-500/20 hover:border-amber-400 hover:scale-110 active:scale-95">
                    {muted ? (
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-volume-x"><path d="M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z"></path><line x1="22" x2="16" y1="9" y2="15"></line><line x1="16" x2="22" y1="9" y2="15"></line></svg>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-volume-2"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path><path d="M19.07 4.93a10 10 0 0 1 0 14.14"></path></svg>
                    )}
                  </button>
                </>
              ) : (
                <button 
                  aria-label="Play AI Greeting" 
                  onClick={playGreeting} 
                  className={`flex items-center gap-2 px-4 h-11 sm:h-12 rounded-full border backdrop-blur-md transition-all active:scale-95 ${speaking ? 'border-amber-400 bg-amber-500/20 text-amber-300' : 'border-white/20 bg-white/10 text-white hover:bg-amber-500/20 hover:border-amber-400'}`}
                >
                  {speaking ? (
                    <>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="animate-pulse"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path><path d="M19.07 4.93a10 10 0 0 1 0 14.14"></path></svg>
                      <span className="text-xs font-bold tracking-wider uppercase">Speaking...</span>
                    </>
                  ) : (
                    <>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><line x1="12" x2="12" y1="19" y2="22"></line></svg>
                      <span className="text-xs font-bold tracking-wider uppercase">Play Intro</span>
                    </>
                  )}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
      <style>
        {`
          @keyframes scrollPulse {
            0% { transform: translateY(-100%); }
            100% { transform: translateY(200%); }
          }
        `}
      </style>
    </section>
  );
};

export default Hero;
