import React from 'react';
import { Mail, ArrowUpRight } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/5 -z-10 pointer-events-none" />

        <div className="max-w-4xl mx-auto text-center px-4">
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">Let's build something extraordinary.</h2>
            <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
                Whether you have a project in mind, a role to fill, or just want to chat about AI agents—I'm always open to new opportunities.
            </p>

            <a 
                href="mailto:pranshu0983@gmail.com" 
                className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 rounded-full text-lg font-semibold hover:opacity-90 transition-opacity"
            >
                <Mail className="w-5 h-5" />
                Say Hello
            </a>

            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 text-left">
                {[
                    { label: "Email", value: "pranshu0983@gmail.com", href: "mailto:pranshu0983@gmail.com" },
                    { label: "LinkedIn", value: "/in/pranshuchourasia", href: "https://linkedin.com/in/pranshuchourasia" },
                    { label: "GitHub", value: "@anshc022", href: "https://github.com/anshc022" },
                    { label: "Twitter", value: "@anshc022", href: "https://twitter.com/anshc022" },
                ].map((item, i) => (
                    <a 
                        key={i} 
                        href={item.href}
                        target="_blank"
                        rel="noreferrer"
                        className="p-4 rounded-2xl bg-secondary/50 hover:bg-secondary border border-border transition-colors group"
                    >
                        <div className="text-sm text-muted-foreground mb-1">{item.label}</div>
                        <div className="font-medium flex items-center gap-1 group-hover:text-primary transition-colors">
                            {item.value}
                            <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                    </a>
                ))}
            </div>
        </div>
    </section>
  );
};

export default Contact;
