'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const isDark = document.documentElement.classList.contains('dark') || !document.documentElement.classList.contains('light');
    setIsDarkMode(isDark);
    if (isDark) {
      document.documentElement.classList.add('dark');
    }
    
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    if (newMode) {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
    }
  };

  const navItems = [
    { name: 'About', id: 'about', href: '#about', num: '01' },
    { name: 'Mastery', id: 'mastery', href: '#mastery', num: '02' },
    { name: 'Process', id: 'process', href: '#process', num: '03' },
    { name: 'Portfolio', id: 'portfolio', href: '#portfolio', num: '04' },
    { name: 'Experiences', id: 'experiences', href: '#experiences', num: '05' },
    { name: 'Services', id: 'services', href: '#services', num: '06' },
    { name: 'Contact', id: 'contact', href: '#contact', num: '07' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 w-full z-100 h-16 flex items-center justify-center">
      <div className={`absolute inset-0 transition-all duration-300 border-b ${isScrolled || isMenuOpen ? 'bg-white/95 dark:bg-zinc-950/95 backdrop-blur-md border-zinc-200 dark:border-zinc-800' : 'bg-transparent border-transparent'}`} />

      <div className="w-full max-w-[100rem] px-6 md:px-24 h-full flex justify-between items-center relative z-110">
        <motion.div onClick={() => { setIsMenuOpen(false); document.getElementById('prologue')?.scrollIntoView({ behavior: 'smooth' }); }} className="cursor-pointer">
          <h1 className="text-[18px] font-black tracking-[0.3em] uppercase bg-clip-text text-transparent bg-linear-to-r from-zinc-900 via-pink-500 to-pink-600 dark:from-white dark:via-pink-300 dark:to-pink-500">CG</h1>
        </motion.div>

        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <a key={item.name} href={item.href} className="px-3 py-2 text-[11px] tracking-[0.2em] uppercase font-bold text-zinc-600 dark:text-zinc-400 hover:text-pink-600 dark:hover:text-pink-400 transition-colors">
              {item.name}
            </a>
          ))}
          <button onClick={toggleTheme} className="ml-2 p-2 rounded-full hover:bg-pink-500/10 cursor-pointer">
            {isDarkMode ? <Sun size={18} className="text-yellow-400" /> : <Moon size={18} className="text-zinc-900" />}
          </button>
        </nav>

        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden w-8 h-8 flex flex-col items-center justify-center relative z-120 gap-1.5 cursor-pointer">
          <motion.span animate={isMenuOpen ? { rotate: 45, y: 7, backgroundColor: "#db2777" } : { rotate: 0, y: 0, backgroundColor: isDarkMode ? "#ffffff" : "#000000" }} className="w-6 h-0.5" />
          <motion.span animate={isMenuOpen ? { opacity: 0 } : { opacity: 1, backgroundColor: isDarkMode ? "#ffffff" : "#000000" }} className="w-6 h-0.5" />
          <motion.span animate={isMenuOpen ? { rotate: -45, y: -7, backgroundColor: "#db2777" } : { rotate: 0, y: 0, backgroundColor: isDarkMode ? "#ffffff" : "#000000" }} className="w-6 h-0.5" />
        </button>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 bg-white dark:bg-zinc-950 z-105 flex flex-col items-center justify-center p-8">
            <div className="flex flex-col w-full max-w-sm">
              {navItems.map((item) => (
                <a key={item.name} href={item.href} onClick={() => setIsMenuOpen(false)} className="flex items-center gap-6 py-4 border-b border-zinc-100 dark:border-zinc-900 group">
                  <span className="text-pink-600 font-mono text-[11px] font-medium">{item.num}</span>
                  <span className="text-2xl font-semibold text-zinc-900 dark:text-white group-hover:text-pink-500 transition-colors">
                    {item.name}
                  </span>
                </a>
              ))}
              
              <button onClick={toggleTheme} className="mt-8 flex items-center justify-center gap-3 border border-zinc-200 dark:border-zinc-800 rounded-full py-3.5 px-8 text-zinc-900 dark:text-white uppercase tracking-widest text-xs font-bold hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-all cursor-pointer">
                {isDarkMode ? <Sun size={16} className="text-yellow-400" /> : <Moon size={16} className="text-zinc-600" />} 
                {isDarkMode ? 'Light Mode' : 'Dark Mode'}
              </button>
            </div>
            
            <p className="absolute bottom-8 text-zinc-400 dark:text-zinc-600 text-[9px] tracking-[0.25em] uppercase font-medium">Catherine Mae Galang</p>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}