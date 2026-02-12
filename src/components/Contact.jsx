import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Twitter } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-32 relative overflow-hidden">
        {/* Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-900/20 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
            <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight"
            >
                Let's Build Together
            </motion.h2>
            <p className="text-xl text-neutral-400 mb-12 max-w-2xl mx-auto">
                Whether you have a project in mind, a question about my work, or just want to connect — I'm all ears.
            </p>

            <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="flex flex-col items-center gap-6"
            >
                <a 
                    href="mailto:pranshu0983@gmail.com" 
                    className="px-10 py-5 bg-white text-black text-xl font-bold rounded-full hover:scale-105 hover:shadow-[0_0_40px_-5px_rgba(255,255,255,0.4)] transition-all duration-300"
                >
                    Say Hello
                </a>

                <div className="flex gap-6 mt-8">
                    <SocialIcon href="https://github.com/anshc022" icon={<Github />} label="GitHub" />
                    <SocialIcon href="https://linkedin.com/in/pranshuchourasia" icon={<Linkedin />} label="LinkedIn" />
                    <SocialIcon href="mailto:pranshu0983@gmail.com" icon={<Mail />} label="Email" />
                </div>
            </motion.div>
        </div>
    </section>
  );
};

const SocialIcon = ({ href, icon, label }) => (
    <a 
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="p-4 rounded-full bg-white/5 text-neutral-400 hover:text-white hover:bg-white/10 transition-all border border-white/5"
        aria-label={label}
    >
        {icon}
    </a>
);

export default Contact;
