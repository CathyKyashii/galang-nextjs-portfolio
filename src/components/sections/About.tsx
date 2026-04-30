'use client';
import { motion, useMotionValue, useSpring, useTransform, useScroll } from 'framer-motion';
import { useRef } from 'react';
import { Download, Cpu, Briefcase, Zap } from 'lucide-react';

const recruiterDescription = [
    "I am Catherine Mae Galang, a graduating Computer Science student specializing in UI/UX Design and Frontend Development. I leverage technical logic and creative execution to turn complex problems into robust, user-focused digital experiences that harmonize aesthetics with intuitive functional performance.",
    "Driven by continuous learning, I aim to be a versatile 'IT girl' and logic-driven professional dedicated to bridging the gap between design and code. My goal is to build purposeful, high-impact digital products that effortlessly elevate the human experience through technology."
];

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageScrollRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: imageScrollRef,
    offset: ["start end", "center center"]
  });

  const mobileScale = useTransform(scrollYProgress, [0, 1], [0.7, 1]);
  const mobileOpacity = useTransform(scrollYProgress, [0, 1], [0.5, 1]);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 });
  
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["6deg", "-6deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-8deg", "8deg"]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (rect) {
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;
      x.set(mouseX / rect.width - 0.5);
      y.set(mouseY / rect.height - 0.5);
    }
  };

  return (
    <section id="about" className="min-h-screen w-full bg-background relative overflow-hidden flex flex-col pt-24 pb-12">
      <div className="max-w-7xl mx-auto w-full px-6 md:px-12 lg:px-8 flex flex-col justify-center relative">
        
        <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="relative z-30 mb-8 text-center lg:text-left">
          <span className="text-pink-500 text-[11px] uppercase tracking-[0.8em] font-black block mb-2">Profile — 01</span>
          <h2 className="text-4xl md:text-7xl lg:text-9xl font-extrabold text-foreground tracking-tighter leading-[0.8] uppercase">
            Digital <span className="text-zinc-500 italic font-light">Alchemy.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative">
          <motion.div ref={containerRef} onMouseMove={handleMouseMove} onMouseLeave={() => { x.set(0); y.set(0); }} style={{ rotateX, rotateY, perspective: 1000 }} className="lg:col-span-5 relative z-20 flex justify-center lg:justify-start">
            <motion.div ref={imageScrollRef} style={{ scale: mobileScale, opacity: mobileOpacity }} className="relative w-full h-[40vh] md:h-[50vh] lg:h-[70vh] flex items-center justify-center">
              <img src="/portrait.svg" alt="Catherine Mae Galang" className="h-full w-full object-contain opacity-95" />
            </motion.div>
          </motion.div>

          <div className="lg:col-span-7 flex flex-col gap-8 h-full z-10 lg:pl-6 text-center lg:text-left">
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-8">
              <div className="space-y-6 max-w-2xl mx-auto lg:mx-0 text-justify text-foreground/90">
                {recruiterDescription.map((text, i) => (
                  <p key={i} className="text-base md:text-xl font-light tracking-tight">{text}</p>
                ))}
              </div>

              {/* UPDATED LINK SECTION */}
              <div className="relative group w-fit mx-auto lg:mx-0">
                <div className="absolute inset-0 bg-pink-600 rounded-full blur-[2px] opacity-60 group-hover:opacity-100 transition-all duration-700" />
                <a 
                  href="/cv.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="relative z-20 inline-flex items-center gap-3 px-8 md:px-12 py-4 md:py-5 bg-card text-foreground rounded-full transition-all group duration-500 text-[10px] md:text-[12px] uppercase tracking-widest font-black border border-white/10 cursor-pointer" 
                >
                    Download CV
                    <Download size={16} className="group-hover:scale-110 transition-transform"/>
                </a>
              </div>
            </motion.div>

            <div className="grid grid-cols-3 gap-2 md:gap-8 border-t border-zinc-200 dark:border-zinc-800 pt-8 max-w-xl mx-auto lg:mx-0">
              {[ 
                { icon: <Cpu size={18}/>, val: "4", label: "Projects" }, 
                { icon: <Zap size={18}/>, val: "7", label: "Certs" }, 
                { icon: <Briefcase size={18}/>, val: "4", label: "Experience" }, 
              ].map((stat, i) => (
                <div key={i} className="flex flex-col items-center lg:items-start group">
                  <div className="flex items-center gap-2 text-pink-500 mb-1">
                    {stat.icon}
                    <span className="hidden md:inline text-[9px] text-muted-foreground font-black uppercase">{stat.label}</span>
                  </div>
                  <h4 className="text-2xl md:text-5xl font-black text-foreground group-hover:text-pink-500 transition-colors">{stat.val}</h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}