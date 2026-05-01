'use client';
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('prologue');
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  useEffect(() => {
    const isDark = document.documentElement.classList.contains('dark');
    setIsDarkMode(isDark);
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isMenuOpen]);

  const toggleTheme = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    document.documentElement.classList.toggle('dark', newMode);
  };

  const navItems = [
    { name: 'HOME', href: '#prologue', id: 'prologue' },
    { name: 'ABOUT', href: '#about', id: 'about' },
    { name: 'MASTERY', href: '#mastery', id: 'mastery' },
    { name: 'EXPERIENCES', href: '#experiences', id: 'experiences' },
    { name: 'PROJECTS', href: '#projects', id: 'projects' },
    { name: 'CONTACT', href: '#contact', id: 'contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 w-full z-100 h-16 flex items-center">
      <div className={`absolute inset-0 transition-all duration-300 border-b ${isScrolled || isMenuOpen ? 'bg-white/95 dark:bg-zinc-950/95 backdrop-blur-md border-zinc-200 dark:border-zinc-800' : 'bg-transparent border-transparent'}`} />

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-8 h-full flex justify-between items-center w-full relative z-110">
        <motion.a 
          animate={{ opacity: isMenuOpen ? 0 : 1, pointerEvents: isMenuOpen ? 'none' : 'auto' }}
          href="#prologue" 
          className="group relative flex items-center gap-1"
        >
          <h1 className="text-[18px] font-black tracking-[0.3em] uppercase bg-clip-text text-transparent bg-linear-to-r from-zinc-900 via-pink-500 to-pink-600 dark:from-white dark:via-pink-300 dark:to-pink-500">
            CG
          </h1>
          <span className="w-1.5 h-1.5 rounded-full bg-pink-500 mt-1 shadow-[0_0_8px_#ec4899]" />
        </motion.a>

        <div className="flex items-center gap-4">
          <nav className="hidden md:flex items-center gap-1">
            {navItems.filter(item => item.id !== 'prologue').map((item) => (
              <a 
                key={item.name} 
                href={item.href} 
                onMouseEnter={() => setHoveredItem(item.id)} 
                onMouseLeave={() => setHoveredItem(null)} 
                className="group px-4 py-2 text-[11px] tracking-[0.2em] uppercase relative"
              >
                <span className={`relative z-10 transition-colors duration-300 font-bold ${activeSection === item.id ? 'text-pink-600 dark:text-pink-400' : isDarkMode ? 'text-zinc-400 group-hover:text-white' : 'text-zinc-600 group-hover:text-zinc-900'}`}>{item.name}</span>
                <AnimatePresence>
                  {hoveredItem === item.id && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0 z-0">
                      <div className="absolute inset-0 bg-pink-50/50 dark:bg-zinc-800/60 rounded-lg" />
                      <motion.div layoutId="nav-underline" className="absolute bottom-0 left-0 right-0 h-0.5 bg-pink-500" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </a>
            ))}
            
            <button onClick={toggleTheme} className="ml-2 p-2 transition-all rounded-full hover:bg-pink-500/10 active:scale-90">
              {isDarkMode ? <Sun size={18} className="text-white" /> : <Moon size={18} className="text-zinc-900" />}
            </button>
          </nav>

          {/* FIXED ANIMATED TOGGLE */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            className="md:hidden flex flex-col items-center justify-center w-10 h-10 relative z-120 focus:outline-none"
          >
            <div className="relative w-6 h-5">
              <motion.span
                animate={isMenuOpen ? { rotate: 45, y: 8, backgroundColor: "#ec4899" } : { rotate: 0, y: 0, backgroundColor: isDarkMode ? "#ffffff" : "#000000" }}
                className="absolute block h-0.5 w-6 rounded-full origin-center"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
              {/* Middle line now scales down and fades quickly to prevent "ghosting" */}
              <motion.span
                animate={isMenuOpen ? { opacity: 0, scaleX: 0, x: 10 } : { opacity: 1, scaleX: 1, x: 0, backgroundColor: isDarkMode ? "#ffffff" : "#000000" }}
                className="absolute block h-0.5 w-6 rounded-full top-2"
                transition={{ duration: 0.2 }}
              />
              <motion.span
                animate={isMenuOpen ? { rotate: -45, y: -8, backgroundColor: "#ec4899" } : { rotate: 0, y: 0, backgroundColor: isDarkMode ? "#ffffff" : "#000000" }}
                className="absolute block h-0.5 w-6 rounded-full top-4 origin-center"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            </div>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }} 
            className="fixed inset-0 bg-white dark:bg-zinc-950 z-105 md:hidden flex flex-col pt-24"
          >
            <div className="flex flex-col w-full px-8">
              {navItems.map((item, idx) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.08 }}
                  className="w-full border-b border-zinc-100 dark:border-zinc-900"
                >
                  <a 
                    href={item.href} 
                    onClick={() => setIsMenuOpen(false)} 
                    className="flex items-baseline gap-6 py-6 group"
                  >
                    <span className="text-[10px] font-bold text-pink-500/60 font-mono">0{idx + 1}</span>
                    <span className={`text-3xl font-medium tracking-tight transition-all duration-300 ${activeSection === item.id ? 'text-pink-500 pl-4' : 'text-zinc-900 dark:text-zinc-100 group-hover:text-pink-500 group-hover:pl-4'}`}>
                      {item.name.charAt(0) + item.name.slice(1).toLowerCase()}
                    </span>
                  </a>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-auto p-12 flex flex-col items-center gap-4">
               <div className="w-12 h-px bg-pink-500/30" />
               <p className="text-[10px] tracking-[0.3em] text-zinc-500 uppercase">Catherine Mae Galang</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden">
        <motion.div style={{ scaleX }} className={`h-0.5 bg-pink-500 origin-left w-full transition-opacity ${isScrolled ? 'opacity-100' : 'opacity-0'}`} />
      </div>
    </header>
  );
}