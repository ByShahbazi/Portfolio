import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'glass shadow-lg py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo / Name */}
        <a href="#" className="flex flex-col leading-none font-bold font-mono tracking-tight group">
          <span className="text-xl text-white group-hover:text-emerald-400 transition-colors">Mohammad Mahdi</span>
          <span className="text-xl text-emerald-500 group-hover:text-white transition-colors">Shahbazi</span>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;