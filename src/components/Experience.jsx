import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
  const experiences = [
    {
      company: "Medi-Caps University",
      role: "Student Researcher / Developer",
      period: "2022 - Present",
      description: "Leading research on AI-driven agricultural solutions. Secured government funding for hardware prototypes. Maintained top 5% academic standing."
    },
    {
      company: "GrafikGalore",
      role: "Founder & Lead Developer",
      period: "2024 - 2025",
      description: "Bootstrapped a digital marketplace from 0 to 45k INR revenue. Built the entire stack (MERN), handled deployment, SEO, and payment integration."
    }
  ];

  return (
    <section id="experience" className="py-24 max-w-4xl mx-auto px-4">
      <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Journey</h2>
          <div className="h-1 w-20 bg-white/10 mx-auto rounded-full"></div>
      </div>
      
      <div className="relative space-y-16">
        {/* Vertical Line */}
        <div className="absolute left-[27px] top-4 bottom-4 w-[2px] bg-gradient-to-b from-transparent via-white/20 to-transparent md:left-1/2 md:-ml-[1px]" />

        {experiences.map((exp, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
            className={`relative flex flex-col md:flex-row gap-8 ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
            }`}
          >
            {/* Timeline Node */}
            <div className="absolute left-[19px] md:left-1/2 md:-ml-[9px] top-0 w-4 h-4 rounded-full bg-black border-2 border-white z-10 shadow-[0_0_10px_rgba(255,255,255,0.5)]" />
            
            {/* Content Side */}
            <div className="ml-12 md:ml-0 md:w-1/2 p-6 glass-card rounded-2xl hover:bg-white/5 transition-colors duration-300">
              <span className="inline-block px-3 py-1 rounded-full bg-white/10 text-xs font-mono text-neutral-300 mb-4 border border-white/5">
                  {exp.period}
              </span>
              <h3 className="text-xl font-bold text-white mb-1">{exp.role}</h3>
              <div className="text-emerald-400 font-medium mb-4 text-sm">{exp.company}</div>
              <p className="text-neutral-400 leading-relaxed text-sm">
                {exp.description}
              </p>
            </div>

            {/* Empty Side for Desktop alignment */}
            <div className="hidden md:block md:w-1/2" />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
