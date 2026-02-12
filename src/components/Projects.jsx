import React from 'react';
import { motion } from 'framer-motion';
import { Github, ArrowUpRight, FolderGit2 } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: "GrafikGalore",
    category: "Marketplace / E-commerce",
    description: "A complete digital asset marketplace built from scratch. Features secure payment gateways, vendor dashboards, and automated asset delivery.",
    stats: ["45k+ INR Revenue", "300+ Users", "MERN Stack"],
    tech: ["React", "Node.js", "Stripe", "MongoDB"],
    github: "#",
    color: "bg-purple-500",
    image: "https://images.unsplash.com/photo-1614064641938-3bcee5297c1d?q=80&w=2670&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Smart Corn Sorter",
    category: "Hardware / IoT / AI",
    description: "Government-funded IoT solution for agricultural quality control. Uses Computer Vision (OpenCV) to detect defects in real-time and actuate mechanical sorters.",
    stats: ["$5,500 Grant", "NIDHI Prayas", "Hardware Prototype"],
    tech: ["Python", "OpenCV", "Raspberry Pi", "IoT"],
    github: "#",
    color: "bg-yellow-500",
    image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?q=80&w=2670&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "TrackMine",
    category: "Enterprise Dashboard",
    description: "Safety and efficiency analytics dashboard for mining operations. Visualizes complex datasets to prevent accidents and optimize machinery usage.",
    stats: ["Real-time Data", "Next.js", "Enterprise Grade"],
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Prisma"],
    github: "#",
    color: "bg-emerald-500",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-neutral-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">Selected Works</h2>
            <p className="text-neutral-400 text-lg max-w-xl">
                A showcase of technical depth and product thinking.
            </p>
            </div>
            <a href="https://github.com/anshc022" className="text-white border-b border-white/30 hover:border-white pb-1 transition-colors flex items-center gap-2">
                View GitHub <ArrowUpRight className="w-4 h-4" />
            </a>
        </div>

        <div className="space-y-32">
          {projects.map((project, index) => (
            <ProjectRow key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectRow = ({ project, index }) => {
    const isEven = index % 2 === 0;

    return (
        <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}
        >
            {/* Image Side */}
            <div className="w-full lg:w-3/5 group">
                <div className="relative rounded-3xl overflow-hidden aspect-video border border-white/10 bg-neutral-800">
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                    <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out grayscale group-hover:grayscale-0"
                    />
                    
                    {/* Floating Stats Badge */}
                    <div className="absolute bottom-6 left-6 z-20 flex gap-3">
                        {project.stats.map((stat, i) => (
                            <div key={i} className="px-3 py-1.5 bg-black/60 backdrop-blur-md rounded-full border border-white/10 text-xs font-medium text-white">
                                {stat}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Content Side */}
            <div className="w-full lg:w-2/5 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                    <span className={`w-2 h-2 rounded-full ${project.color}`} />
                    <span className="text-sm font-mono text-neutral-400 uppercase tracking-widest">{project.category}</span>
                </div>
                
                <h3 className="text-4xl font-bold text-white mb-6">{project.title}</h3>
                <p className="text-neutral-400 text-lg leading-relaxed mb-8">
                    {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-10">
                    {project.tech.map((t) => (
                        <span key={t} className="text-sm text-neutral-300 px-3 py-1 rounded-md bg-white/5 border border-white/5">
                            {t}
                        </span>
                    ))}
                </div>

                <div className="flex gap-4">
                    <a href={project.github} className="px-6 py-3 rounded-full bg-white text-black font-semibold hover:bg-neutral-200 transition-colors flex items-center gap-2">
                        <Github className="w-5 h-5" /> Source Code
                    </a>
                </div>
            </div>
        </motion.div>
    )
}

export default Projects;
