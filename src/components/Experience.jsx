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
    <section id="experience" className="max-w-4xl mx-auto">
      <h2 className="text-4xl font-display font-bold mb-12 text-center">Experience</h2>
      
      <div className="relative border-l border-border ml-3 md:ml-6 space-y-12">
        {experiences.map((exp, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
            className="relative pl-8 md:pl-12"
          >
            {/* Timeline Dot */}
            <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-primary ring-4 ring-background" />
            
            <div className="bg-secondary/30 rounded-2xl p-6 border border-border">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                <h3 className="text-xl font-bold">{exp.role}</h3>
                <span className="text-sm font-medium text-muted-foreground bg-background px-3 py-1 rounded-full border border-border w-fit mt-2 sm:mt-0">
                  {exp.period}
                </span>
              </div>
              <div className="text-primary font-medium mb-4">{exp.company}</div>
              <p className="text-muted-foreground leading-relaxed">
                {exp.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
