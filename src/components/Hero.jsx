import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Avatar3D from './Avatar3D';

const Hero = () => {
  const containerRef = useRef(null);
  
  // Mouse tracking for subtle parallax
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    setMousePosition({
      x: (clientX / innerWidth - 0.5) * 20,
      y: (clientY / innerHeight - 0.5) * 20,
    });
  };

  return (
    <section 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-black selection:bg-white/30"
    >
      {/* Background Gradients/Spotlights */}
      <div className="absolute inset-0 w-full h-full bg-black pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-purple-900/20 rounded-full blur-[120px] mix-blend-screen" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-900/10 rounded-full blur-[120px] mix-blend-screen" />
      </div>

      {/* 3D Avatar Background */}
      <Avatar3D />

      <div className="z-10 text-center space-y-8 px-4 relative">
        {/* Available Badge */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mx-auto"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="text-xs font-medium text-white/70 tracking-wide uppercase">Available for hire</span>
        </motion.div>

        {/* Main Title */}
        <motion.h1 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          style={{ x: mousePosition.x, y: mousePosition.y }}
          className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/40 leading-[1.1] sm:leading-tight"
        >
          Pranshu<br />Chourasia
        </motion.h1>

        {/* Subtitle */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-lg md:text-xl text-neutral-400 max-w-xl mx-auto font-light leading-relaxed"
        >
          Full Stack Engineer & Hardware Hacker. <br/>
          Turning <span className="text-white font-medium">chaos</span> into <span className="text-white font-medium">structure</span>.
        </motion.p>

        {/* CTAs */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex items-center justify-center gap-6 mt-8"
        >
          <a 
            href="#projects" 
            className="group relative px-8 py-3.5 rounded-full bg-white text-black font-semibold text-sm transition-transform active:scale-95 hover:shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)]"
          >
            View Work
          </a>
          <a 
            href="mailto:pranshu0983@gmail.com"
            className="group flex items-center gap-2 text-neutral-400 hover:text-white transition-colors text-sm font-medium"
          >
            Contact Me <ArrowUpRight className="w-4 h-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </motion.div>
      </div>

      {/* Footer Text */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1.5 }}
        className="absolute bottom-8 text-neutral-600 text-xs tracking-[0.2em] uppercase font-mono"
      >
        Based in India • Global Reach
      </motion.div>
    </section>
  );
};

export default Hero;
