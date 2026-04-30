'use client';
import { motion, useScroll, useSpring, useTransform, AnimatePresence } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('prologue');
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const { scrollYProgress, scrollY } = useScroll();
  
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const navBgOpacity = useTransform(scrollY, [0, 100], [0, 0.9]);
  const borderVisibility = useTransform(scrollY, [0, 50], [0, 1]);
  const navHeight = useTransform(scrollY, [0, 100], ["100px", "80px"]);

  useEffect(() => {
    const isDark = document.documentElement.classList.contains('dark');
    setIsDarkMode(isDark);
  }, []);

  const toggleTheme = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    document.documentElement.classList.toggle('dark', newMode);
  };

  const navItems = [
    { name: 'PROFILE', href: '#about', id: 'about' },
    { name: 'MASTERY', href: '#mastery', id: 'mastery' },
    { name: 'PROJECTS', href: '#projects', id: 'projects' },
    { name: 'CONTACT', href: '#contact', id: 'contact' },
  ];

  useEffect(() => {
    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          if (id === 'education') setActiveSection('about');
          else setActiveSection(id);
        }
      });
    };
    const observer = new IntersectionObserver(handleIntersect, { rootMargin: '-45% 0px -45% 0px' });
    ['prologue', 'about', 'education', 'mastery', 'projects', 'contact'].forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <motion.nav 
      style={{ 
        backgroundColor: useTransform(navBgOpacity, (o) => isDarkMode ? `rgba(5, 5, 5, ${o})` : `rgba(255, 255, 255, ${o})`),
        height: navHeight 
      }}
      className="fixed top-0 left-0 w-full z-50 flex items-center backdrop-blur-md"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex justify-between items-center w-full relative">
        
        <a href="#prologue" className={`text-[14px] font-black tracking-[0.4em] uppercase transition-colors ${isDarkMode ? 'text-white' : 'text-zinc-900'}`}>
          CG<span className="text-pink-500">.</span>
        </a>

        <div className="flex items-center gap-6 lg:gap-8">
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onMouseEnter={() => setHoveredItem(item.id)}
                onMouseLeave={() => setHoveredItem(null)}
                className="group px-5 py-2.5 text-[10px] tracking-[0.2em] uppercase relative"
              >
                {/* Active Text Style */}
                <span className={`relative z-10 transition-colors duration-300 font-bold ${
                  activeSection === item.id 
                    ? 'text-pink-500' 
                    : isDarkMode ? 'text-zinc-400 group-hover:text-white' : 'text-zinc-600 group-hover:text-zinc-900'
                }`}>
                  {item.name}
                </span>

                {/* --- INDEPENDENT HOVER EFFECT --- */}
                <AnimatePresence>
                  {hoveredItem === item.id && (
                    <motion.div 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="absolute inset-0 z-0 overflow-hidden"
                    >
                      {/* Background Capsule - Fixed position */}
                      <div className="absolute inset-0 bg-zinc-100 dark:bg-zinc-800/60 rounded-lg" />
                      
                      {/* Dynamic Line - Drawing from left to right */}
                      <motion.div 
                        initial={{ x: "-100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ type: "tween", ease: "easeInOut", duration: 0.3 }}
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-pink-500"
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
              </a>
            ))}
          </div>

          <button onClick={toggleTheme} className="p-2 transition-all duration-300 rounded-full hover:bg-pink-500/10">
            {isDarkMode ? <Sun size={18} className="text-white" /> : <Moon size={18} className="text-zinc-900" />}
          </button>
        </div>
      </div>

      {/* Static Track + Dynamic Scroll Progress Runner */}
      <motion.div 
        style={{ opacity: borderVisibility }}
        className="absolute bottom-0 left-0 right-0 w-full"
      >
        <div className={`h-0.5 w-full ${isDarkMode ? 'bg-zinc-800/40' : 'bg-zinc-200'}`} />
        <motion.div 
          style={{ scaleX }}
          className="absolute top-0 left-0 right-0 h-0.5 bg-pink-500 origin-left"
        />
      </motion.div>
    </motion.nav>
  );
}