import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section id="hero" className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Video Background Placeholder */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-background z-10" />
        <div className="w-full h-full bg-neutral-900 flex items-center justify-center text-neutral-800 text-9xl font-bold opacity-20 select-none">
          CREATE
        </div>
        {/* Replace with actual video tag later
        <video autoPlay loop muted playsInline className="w-full h-full object-cover">
          <source src="/path/to/video.mp4" type="video/mp4" />
        </video>
        */}
      </div>

      <div className="relative z-20 text-center max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-xl md:text-2xl font-medium tracking-widest text-primary-foreground/80 mb-4 uppercase">
            Pranshu Chourasia
          </h2>
          <h1 className="text-5xl md:text-8xl font-display font-bold text-white mb-6 leading-tight">
            Building the <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">Future</span> of AI & Web
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed">
            Full-Stack AI Engineer turning complex problems into elegant, scalable solutions. 
            From Smart Corn Sorters to SaaS platforms.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a 
            href="#projects" 
            className="group relative px-8 py-4 bg-white text-black rounded-full font-semibold text-lg hover:bg-gray-100 transition-all flex items-center gap-2"
          >
            View Work
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <div className="flex items-center gap-4 mt-4 sm:mt-0">
            <SocialLink href="https://github.com/anshc022" icon={<Github className="w-6 h-6" />} />
            <SocialLink href="https://linkedin.com/in/pranshuchourasia" icon={<Linkedin className="w-6 h-6" />} />
            <SocialLink href="mailto:pranshu0983@gmail.com" icon={<Mail className="w-6 h-6" />} />
          </div>
        </motion.div>
      </div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-white/50"
      >
        <span className="text-sm tracking-widest uppercase">Scroll</span>
      </motion.div>
    </section>
  );
};

const SocialLink = ({ href, icon }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer"
    className="p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors backdrop-blur-sm border border-white/10"
  >
    {icon}
  </a>
);

export default Hero;
