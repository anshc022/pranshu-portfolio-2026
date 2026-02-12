import React from 'react';

const Footer = () => {
  return (
    <footer className="py-8 border-t border-border mt-12 bg-background">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Pranshu Chourasia. All rights reserved.
        </div>
        <div className="flex items-center gap-6">
            <span className="text-sm text-muted-foreground flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                Open to Work
            </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
