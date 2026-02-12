import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Trophy, Zap, Rocket, Globe, Cpu, MapPin, Database, Layers } from 'lucide-react';

const BentoCard = ({ children, className, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.5, delay }}
    className={`glass-card rounded-3xl p-6 md:p-8 flex flex-col justify-between overflow-hidden relative group ${className}`}
  >
    <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    {children}
  </motion.div>
);

const About = () => {
  return (
    <section id="about" className="py-24 max-w-7xl mx-auto px-4 sm:px-6">
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white tracking-tight">
          Beyond the Code
        </h2>
        <p className="text-xl text-neutral-400 max-w-2xl leading-relaxed">
          I don't just build apps; I engineer ecosystems. From hardware-integrated IoT solutions to high-scale decentralized web platforms.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-auto gap-4 md:gap-6">
        
        {/* Main Focus - Large Card */}
        <BentoCard className="md:col-span-2 md:row-span-2 min-h-[400px]">
          <div className="z-10">
            <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-6 backdrop-blur-md border border-white/5">
              <Cpu className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-3xl font-bold text-white mb-4">Full Stack & AI</h3>
            <p className="text-neutral-400 text-lg leading-relaxed mb-6">
              Specializing in the intersection of React, Python, and Edge AI. 
              Currently exploring Multi-Agent Orchestration and Autonomous Web Navigation using <span className="text-white font-medium">OpenClaw</span>.
            </p>
            <div className="flex flex-wrap gap-2 mt-auto">
              {['React', 'Next.js', 'Python', 'Torch', 'AWS', 'Docker'].map((tech) => (
                <span key={tech} className="px-3 py-1 bg-white/5 rounded-full text-xs font-mono text-neutral-300 border border-white/5">
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <div className="absolute right-0 bottom-0 w-64 h-64 bg-gradient-to-tl from-purple-500/20 to-transparent blur-[80px]" />
        </BentoCard>

        {/* Stats: Grant */}
        <BentoCard className="md:col-span-1 min-h-[200px]" delay={0.1}>
          <div>
            <Trophy className="w-8 h-8 text-emerald-400 mb-4" />
            <h4 className="text-4xl font-bold text-white mb-1">$5,500</h4>
            <p className="text-xs font-medium text-emerald-400/80 uppercase tracking-wider">Grant Secured</p>
            <p className="text-xs text-neutral-500 mt-2">NIDHI Prayas (Govt of India)</p>
          </div>
        </BentoCard>

        {/* Stats: Revenue */}
        <BentoCard className="md:col-span-1 min-h-[200px]" delay={0.2}>
          <div>
            <Zap className="w-8 h-8 text-yellow-400 mb-4" />
            <h4 className="text-4xl font-bold text-white mb-1">45k+</h4>
            <p className="text-xs font-medium text-yellow-400/80 uppercase tracking-wider">Revenue (INR)</p>
            <p className="text-xs text-neutral-500 mt-2">Bootstrapped Marketplace</p>
          </div>
        </BentoCard>

        {/* Location / Availability */}
        <BentoCard className="md:col-span-1 min-h-[200px] justify-center items-center text-center" delay={0.3}>
          <div className="relative w-full h-full flex flex-col items-center justify-center">
             <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=500&auto=format&fit=crop')] bg-cover bg-center opacity-20 mix-blend-overlay" />
             <MapPin className="w-8 h-8 text-white mb-2 z-10" />
             <h4 className="text-lg font-semibold text-white z-10">Indore, India</h4>
             <p className="text-xs text-neutral-400 z-10">Remote Ready</p>
          </div>
        </BentoCard>

        {/* Education */}
        <BentoCard className="md:col-span-1 min-h-[200px]" delay={0.4}>
          <div className="flex flex-col h-full justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-white/5 rounded-lg">
                <Globe className="w-5 h-5 text-blue-400" />
              </div>
              <h4 className="font-semibold text-white">Education</h4>
            </div>
            <div>
              <p className="text-sm text-white">B.Tech CSE</p>
              <p className="text-xs text-neutral-500">Medi-Caps University</p>
              <p className="text-xs text-neutral-600 mt-1">2022 - 2026</p>
            </div>
          </div>
        </BentoCard>

         {/* Hackathon */}
         <BentoCard className="md:col-span-2 min-h-[180px] flex-row items-center gap-6" delay={0.5}>
           <div className="flex-1">
             <div className="flex items-center gap-2 mb-2">
                <Rocket className="w-5 h-5 text-orange-500" />
                <span className="text-xs font-bold text-orange-500 uppercase tracking-wider">Achievement</span>
             </div>
             <h3 className="text-2xl font-bold text-white mb-2">Smart India Hackathon</h3>
             <p className="text-neutral-400 text-sm">
               Top 6 Finalist in the Hardware Edition (2024). Built a real-time IoT monitoring system for industrial safety.
             </p>
           </div>
           <div className="hidden md:flex h-24 w-24 bg-gradient-to-r from-orange-500 to-red-600 rounded-2xl items-center justify-center shrink-0 shadow-lg shadow-orange-900/20">
              <span className="text-3xl font-bold text-white">Top 6</span>
           </div>
         </BentoCard>

      </div>
    </section>
  );
};

export default About;
