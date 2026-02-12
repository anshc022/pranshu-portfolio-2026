import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Tag } from 'lucide-react';

const projects = [
  {
    title: "GrafikGalore",
    description: "A digital assets marketplace connecting creators. Scaled to 45k+ INR revenue. Built with modern web tech stack.",
    tags: ["React", "Node.js", "Stripe", "MongoDB"],
    link: "#",
    github: "#",
    color: "from-purple-500 to-indigo-500",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop" // Placeholder
  },
  {
    title: "Smart Corn Sorter",
    description: "IoT-based agricultural sorting solution. Won ₹5,500 grant from NIDHI Prayas. Uses computer vision for quality control.",
    tags: ["Python", "OpenCV", "IoT", "Raspberry Pi"],
    link: "#",
    github: "#",
    color: "from-yellow-400 to-orange-500",
    image: "https://images.unsplash.com/photo-1551726194-279883505c86?q=80&w=2670&auto=format&fit=crop" // Placeholder
  },
  {
    title: "TrackMine",
    description: "Advanced tracking and analytics dashboard for mining operations. Focuses on efficiency and safety metrics.",
    tags: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
    link: "#",
    github: "#",
    color: "from-emerald-500 to-teal-500",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2670&auto=format&fit=crop" // Placeholder
  }
];

const Projects = () => {
  return (
    <section id="projects">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <h2 className="text-4xl font-display font-bold mb-4">Featured Work</h2>
          <p className="text-muted-foreground text-lg max-w-xl">
            A selection of projects that demonstrate my ability to ship products, solve hardware problems, and build scalable software.
          </p>
        </div>
        <a href="https://github.com/anshc022" target="_blank" rel="noreferrer" className="text-primary font-medium hover:underline flex items-center gap-2">
          View all on GitHub <ExternalLink className="w-4 h-4" />
        </a>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} />
        ))}
      </div>
    </section>
  );
};

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group relative bg-card rounded-3xl overflow-hidden border border-border flex flex-col h-full"
    >
      {/* Image / Gradient Header */}
      <div className="h-48 overflow-hidden relative">
        <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-20 group-hover:opacity-30 transition-opacity z-10`} />
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 filter grayscale group-hover:grayscale-0"
        />
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
        <p className="text-muted-foreground mb-6 flex-grow">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map(tag => (
            <span key={tag} className="text-xs px-2.5 py-1 bg-secondary rounded-md font-medium text-secondary-foreground flex items-center gap-1">
              <Tag className="w-3 h-3" /> {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-4 mt-auto">
          {/* <a href={project.link} className="flex-1 bg-primary text-primary-foreground py-2.5 rounded-xl font-medium text-center hover:bg-primary/90 transition-colors flex items-center justify-center gap-2">
            Live Demo <ExternalLink className="w-4 h-4" />
          </a> */}
          <a href={project.github} className="flex-1 bg-secondary hover:bg-secondary/80 text-secondary-foreground py-2.5 rounded-xl font-medium text-center transition-colors flex items-center justify-center gap-2 border border-border">
            <Github className="w-4 h-4" /> Source
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
