import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Linkedin, Github, Mail } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Construct mailto link
    const subject = `Portfolio Contact from ${formData.name}`;
    const body = `Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0A%0D%0A${formData.message}`;
    window.location.href = `mailto:pranshu0983@gmail.com?subject=${subject}&body=${body}`;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
        >
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">Let's Talk</h2>
            <p className="text-xl text-neutral-400 max-w-2xl mx-auto">
                Have a project in mind? Let's turn that idea into reality.
            </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Contact Info Side */}
            <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="space-y-8"
            >
                <div className="glass-card p-8 rounded-3xl border border-white/5 bg-white/[0.02]">
                    <h3 className="text-2xl font-bold text-white mb-6">Connect</h3>
                    <div className="flex flex-col gap-6">
                        <SocialRow href="https://github.com/anshc022" icon={<Github />} label="GitHub" handle="@anshc022" />
                        <SocialRow href="https://linkedin.com/in/pranshuchourasia" icon={<Linkedin />} label="LinkedIn" handle="Pranshu Chourasia" />
                        <SocialRow href="mailto:pranshu0983@gmail.com" icon={<Mail />} label="Email" handle="pranshu0983@gmail.com" />
                    </div>
                </div>
            </motion.div>

            {/* Form Side */}
            <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
            >
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium text-neutral-400 ml-1">Name</label>
                        <input 
                            type="text" 
                            id="name" 
                            name="name" 
                            required
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white/40 transition-colors placeholder:text-neutral-600"
                            placeholder="John Doe"
                        />
                    </div>
                    
                    <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium text-neutral-400 ml-1">Email</label>
                        <input 
                            type="email" 
                            id="email" 
                            name="email" 
                            required
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white/40 transition-colors placeholder:text-neutral-600"
                            placeholder="john@example.com"
                        />
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="message" className="text-sm font-medium text-neutral-400 ml-1">Message</label>
                        <textarea 
                            id="message" 
                            name="message" 
                            required
                            rows={4}
                            value={formData.message}
                            onChange={handleChange}
                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white/40 transition-colors placeholder:text-neutral-600 resize-none"
                            placeholder="Tell me about your project..."
                        />
                    </div>

                    <button 
                        type="submit" 
                        className="w-full bg-white text-black font-bold text-lg rounded-xl py-4 hover:bg-neutral-200 transition-all flex items-center justify-center gap-2 group mt-4"
                    >
                        Send Message 
                        <Send className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </button>
                </form>
            </motion.div>
        </div>
      </div>
    </section>
  );
};

const SocialRow = ({ href, icon, label, handle }) => (
    <a 
        href={href}
        target="_blank" 
        rel="noopener noreferrer"
        className="flex items-center gap-4 text-neutral-400 hover:text-white transition-colors group"
    >
        <div className="p-3 rounded-full bg-white/5 border border-white/5 group-hover:bg-white/10 transition-colors">
            {icon}
        </div>
        <div>
            <div className="text-xs font-medium uppercase tracking-wider opacity-50">{label}</div>
            <div className="font-mono text-sm">{handle}</div>
        </div>
    </a>
)

export default Contact;
