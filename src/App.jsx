import React, { useEffect } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  // Smooth scroll handling for anchor links
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="min-h-screen bg-black text-white selection:bg-white/20 selection:text-white">
      {/* Navbar Overlay - Simple floating pill */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
        <div className="bg-black/50 backdrop-blur-md border border-white/10 rounded-full px-6 py-3 flex gap-6 text-sm font-medium text-neutral-300 shadow-xl">
          <a href="#about" className="hover:text-white transition-colors">About</a>
          <a href="#projects" className="hover:text-white transition-colors">Work</a>
          <a href="#experience" className="hover:text-white transition-colors">Journey</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </div>
      </nav>

      <main className="relative z-10">
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
