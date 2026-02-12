import React, { useState } from 'react';
import { Github, Linkedin, Mail, Copy, Check } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  const [copied, setCopied] = useState(false);
  const email = "pranshu0983@gmail.com"; // Replace with real email if known, or prompt user

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer className="py-20 border-t border-white/10 bg-black/50 backdrop-blur-xl relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12">
          
          {/* Brand / Headline */}
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-bold text-white mb-2 tracking-tight">Let's build something impossible.</h2>
            <p className="text-neutral-400">Open for high-impact collaborations.</p>
          </div>

          {/* Actions */}
          <div className="flex flex-col items-center md:items-end gap-6">
             {/* Copy Email Button */}
            <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleCopy}
                className="flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group"
            >
                <Mail className="w-4 h-4 text-white" />
                <span className="text-neutral-300 font-mono text-sm">{email}</span>
                {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-neutral-500 group-hover:text-white transition-colors" />}
            </motion.button>

            {/* Social Links */}
            <div className="flex gap-6">
                <SocialLink href="https://github.com/anshc022" icon={<Github className="w-5 h-5" />} label="GitHub" />
                <SocialLink href="https://linkedin.com/in/pranshuchourasia" icon={<Linkedin className="w-5 h-5" />} label="LinkedIn" />
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-xs text-neutral-600 font-mono uppercase tracking-widest">
            <span>© {new Date().getFullYear()} Pranshu Chourasia</span>
            <span className="mt-2 md:mt-0">Designed by OpenClaw</span>
        </div>
      </div>
      
      {/* Background Glow */}
      <div className="absolute bottom-[-20%] left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-white/5 blur-[120px] rounded-full pointer-events-none" />
    </footer>
  );
};

const SocialLink = ({ href, icon, label }) => (
    <a 
        href={href} 
        target="_blank" 
        rel="noopener noreferrer"
        className="p-3 rounded-full bg-white/5 border border-white/5 hover:bg-white hover:text-black hover:border-white transition-all duration-300 group"
        aria-label={label}
    >
        <span className="text-neutral-400 group-hover:text-black transition-colors">{icon}</span>
    </a>
)

export default Footer;