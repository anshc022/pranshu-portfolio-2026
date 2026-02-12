import React from 'react';

const Footer = () => {
  return (
    <footer className="py-8 border-t border-white/10 bg-black">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-neutral-500">
        <p>© {new Date().getFullYear()} Pranshu Chourasia. All rights reserved.</p>
        <div className="flex gap-6">
            <span>Built with React & Vite</span>
            <span>Designed in Indore</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
