import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Cpu, Trophy, Rocket, Globe, Zap } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="relative">
      <div className="mb-12">
        <h2 className="text-4xl font-display font-bold mb-4">About & Stats</h2>
        <p className="text-muted-foreground text-lg max-w-2xl">
          I'm a developer who bridges the gap between academic research and real-world impact.
          Here's a snapshot of my journey so far.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(180px,auto)]">
        {/* Main Bio - Spans 2 cols */}
        <motion.div 
          whileHover={{ scale: 1.01 }}
          className="md:col-span-2 row-span-2 p-8 rounded-3xl bg-secondary/50 border border-border backdrop-blur-sm flex flex-col justify-between"
        >
          <div>
            <div className="w-12 h-12 bg-blue-500/10 rounded-2xl flex items-center justify-center mb-6 text-blue-500">
              <Code2 className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Full Stack & AI Engineer</h3>
            <p className="text-muted-foreground leading-relaxed text-lg">
              I specialize in building scalable web applications and integrating cutting-edge AI models. 
              My work ranges from decentralized platforms like <strong>OpenClaw</strong> to hardware-integrated solutions like the <strong>Smart Corn Sorter</strong>.
              I don't just write code; I secure grants, win hackathons, and launch products.
            </p>
          </div>
          <div className="mt-8 flex flex-wrap gap-2">
            {['React', 'Next.js', 'Python', 'TensorFlow', 'AWS', 'Docker'].map((tech) => (
              <span key={tech} className="px-3 py-1 bg-background rounded-full text-sm font-medium border border-border">
                {tech}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Stat 1: Grant */}
        <motion.div 
          whileHover={{ scale: 1.02 }}
          className="p-6 rounded-3xl bg-emerald-500/10 border border-emerald-500/20 flex flex-col justify-center items-start"
        >
          <Trophy className="w-8 h-8 text-emerald-500 mb-4" />
          <h4 className="text-4xl font-bold text-emerald-600 dark:text-emerald-400 mb-1">$5,500</h4>
          <p className="text-sm font-medium text-emerald-700 dark:text-emerald-300">Grant Secured</p>
          <p className="text-xs text-muted-foreground mt-2">NIDHI Prayas (DST, Govt of India)</p>
        </motion.div>

        {/* Stat 2: Revenue */}
        <motion.div 
          whileHover={{ scale: 1.02 }}
          className="p-6 rounded-3xl bg-purple-500/10 border border-purple-500/20 flex flex-col justify-center items-start"
        >
          <Zap className="w-8 h-8 text-purple-500 mb-4" />
          <h4 className="text-4xl font-bold text-purple-600 dark:text-purple-400 mb-1">45k+</h4>
          <p className="text-sm font-medium text-purple-700 dark:text-purple-300">Revenue Generated (INR)</p>
          <p className="text-xs text-muted-foreground mt-2">Via GrafikGalore</p>
        </motion.div>

        {/* Stat 3: Hackathons */}
        <motion.div 
          whileHover={{ scale: 1.02 }}
          className="p-6 rounded-3xl bg-orange-500/10 border border-orange-500/20 flex flex-col justify-center items-start"
        >
          <Rocket className="w-8 h-8 text-orange-500 mb-4" />
          <h4 className="text-4xl font-bold text-orange-600 dark:text-orange-400 mb-1">Top 6</h4>
          <p className="text-sm font-medium text-orange-700 dark:text-orange-300">Smart India Hackathon</p>
          <p className="text-xs text-muted-foreground mt-2">Hardware Edition, 2024</p>
        </motion.div>

        {/* Focus Area */}
        <motion.div 
          whileHover={{ scale: 1.01 }}
          className="md:col-span-2 p-8 rounded-3xl bg-secondary/30 border border-border flex items-center justify-between gap-8"
        >
          <div>
            <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
              <Globe className="w-5 h-5" />
              Current Focus
            </h3>
            <p className="text-muted-foreground">
              Building <strong>Agentic Workflows</strong> and <strong>Decentralized Systems</strong>. 
              Currently exploring Multi-Agent Orchestration and Autonomous Web Navigation.
            </p>
          </div>
          <div className="hidden md:block w-24 h-24 bg-gradient-to-tr from-blue-500 to-cyan-400 rounded-full opacity-20 blur-xl"></div>
        </motion.div>

        {/* Education/Other */}
         <motion.div 
          whileHover={{ scale: 1.02 }}
          className="p-6 rounded-3xl bg-secondary/50 border border-border flex flex-col justify-center"
        >
          <div className="flex items-center gap-3 mb-4">
            <Cpu className="w-6 h-6" />
            <h4 className="font-bold">Education</h4>
          </div>
          <p className="text-sm font-medium">B.Tech in CSE</p>
          <p className="text-xs text-muted-foreground">Medi-Caps University</p>
          <p className="text-xs text-muted-foreground mt-1">2022 - 2026</p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
