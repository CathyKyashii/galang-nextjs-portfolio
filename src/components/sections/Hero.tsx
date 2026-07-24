'use client';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import SocialIcon from '../ui/SocialIcon';

const MobileStatusBadge = () => (
  <div className="flex items-center gap-3 px-4 py-2 rounded-full border border-zinc-800 bg-zinc-900/50 backdrop-blur-sm shadow-xl w-fit">
    <span className="flex h-2.5 w-2.5 items-center justify-center">
      <span className="inline-flex rounded-full h-2.5 w-2.5 bg-[#FF007F]"></span>
    </span>
    <span className="text-[10px] font-bold uppercase tracking-wider text-white">AVAILABLE</span>
    <span className="text-zinc-600">|</span>
    <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-400">PH BASED</span>
  </div>
);

const StatusBadge = () => (
  <div className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-zinc-200 dark:border-white/10 bg-white dark:bg-[#111] shadow-sm w-fit mb-4">
    <span className="relative flex h-2 w-2">
      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF69B4] opacity-75"></span>
      <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FF69B4]"></span>
    </span>
    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-600 dark:text-zinc-300">
      Open for Opportunities
    </span>
  </div>
);

const ShootingStarGrid = () => (
  <div className="absolute inset-0 z-0 bg-white dark:bg-[#0a0a0a] overflow-hidden transition-colors duration-500">
    <style jsx global>{`
      :root { --track-line-dark: rgba(255, 105, 180, 0.05); --star-color: rgba(255, 105, 180, 0.25); }
      @keyframes streak-v { 0% { transform: translateY(-100%); opacity: 0; } 10% { opacity: 1; } 90% { opacity: 1; } 100% { transform: translateY(100vh); opacity: 0; } }
      @keyframes streak-h { 0% { transform: translateX(-100%); opacity: 0; } 10% { opacity: 1; } 90% { opacity: 1; } 100% { transform: translateX(100vw); opacity: 0; } }
      .star-base { position: absolute; filter: blur(1.5px); opacity: 0; z-index: 1; }
      .track-line { position: absolute; background: var(--track-line-dark); z-index: 0; }
      @keyframes floating-bob { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-6px); } }
      .animate-floating { animation: floating-bob 3s ease-in-out infinite; }
    `}</style>
    {[...Array(20)].map((_, i) => (
      <div key={`grid-${i}`} className="track-line" style={{ width: i % 2 === 0 ? '1px' : '100%', height: i % 2 === 0 ? '100%' : '1px', left: i % 2 === 0 ? `${(i * 5)}%` : '0', top: i % 2 === 0 ? '0' : `${(i * 5)}%` }} />
    ))}
    {[...Array(6)].map((_, i) => (
      <div key={`v-${i}`}><div className="star-base w-[1.5px] h-40" style={{ left: `calc(15% + ${i * 15}%)`, top: '-200px', background: `linear-gradient(to bottom, transparent, var(--star-color), #FF69B4)`, animation: `streak-v ${7+(i%5)}s linear infinite ${i*1.8}s` }} /></div>
    ))}
    {[...Array(6)].map((_, i) => (
      <div key={`h-${i}`}><div className="star-base h-[1.5px] w-40" style={{ top: `calc(15% + ${i * 15}%)`, left: '-200px', background: `linear-gradient(to right, transparent, var(--star-color), #FF69B4)`, animation: `streak-h ${7+(i%5)}s linear infinite ${i*1.8}s` }} /></div>
    ))}
  </div>
);

export default function Hero() {
  const roles = [
    { top: "UI/UX", bottom: "DESIGNER" },
    { top: "PROJECT", bottom: "COORDINATOR" },
    { top: "PRODUCT", bottom: "OWNER" }, 
    { top: "SYSTEMS", bottom: "ANALYST" },
  ];
  const [index, setIndex] = useState(0);
  const [topText, setTopText] = useState("");
  const [bottomText, setBottomText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const { top, bottom } = roles[index];
    const typingSpeed = isDeleting ? 40 : 80;
    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (topText.length < top.length) setTopText(top.substring(0, topText.length + 1));
        else if (bottomText.length < bottom.length) setBottomText(bottom.substring(0, bottomText.length + 1));
        else setTimeout(() => setIsDeleting(true), 2000);
      } else {
        if (bottomText.length > 0) setBottomText(bottomText.substring(0, bottomText.length - 1));
        else if (topText.length > 0) setTopText(topText.substring(0, topText.length - 1));
        else { setIsDeleting(false); setIndex((prev) => (prev + 1) % roles.length); }
      }
    }, typingSpeed);
    return () => clearTimeout(timer);
  }, [topText, bottomText, isDeleting, index]);

  const socials = [
    { name: 'github', url: 'https://github.com/CathyKyashii' },
    { name: 'linkedin', url: 'https://www.linkedin.com/in/catherinemaegalang' },
    { name: 'instagram', url: 'https://www.instagram.com/cathyyshiii/' },
    { name: 'facebook', url: 'https://www.facebook.com/catherine.mae.galang.2025' },
  ];

  const Description = () => (
    <>
      <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1, ease: "easeOut" }} className="text-sm font-medium border-l-2 border-[#FF69B4] pl-4 mb-4 text-zinc-700 dark:text-zinc-300">
        Bridging product ownership, business analysis, and user-centric design to drive impactful solutions.
      </motion.p>
      <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1, delay: 0.3, ease: "easeOut" }} className="text-sm font-medium border-l-2 border-[#FF69B4] pl-4 text-zinc-700 dark:text-zinc-300">
        Transforming data insights and stakeholder requirements into strategic execution.
      </motion.p>
    </>
  );

  return (
    <section id="prologue" className="relative min-h-screen w-full flex items-center justify-center bg-white dark:bg-[#0a0a0a] text-zinc-900 dark:text-white overflow-hidden transition-colors duration-500">
      <ShootingStarGrid />

      {/* DESKTOP VIEW */}
      <div className="hidden lg:flex relative z-20 w-full max-w-[100rem] min-h-screen items-center justify-between px-24 py-20">
        <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none drop-shadow-[0_0_35px_rgba(255,105,180,0.3)]">
          <img src="/portrait.svg" alt="Catherine Mae Galang" className="h-[110vh] w-auto object-cover object-top" />
        </div>
        <div className="flex flex-col justify-center h-full w-full lg:min-w-112.5 z-20">
          <StatusBadge />
          <div className="h-62.5 relative flex flex-col justify-center">
            <h2 className="text-7xl font-black uppercase tracking-tighter leading-[0.9] bg-linear-to-br from-[#FF69B4] via-[#FF1493] to-purple-600 bg-clip-text text-transparent">{topText}</h2>
            <h2 className="text-8xl font-black uppercase tracking-tighter leading-[1.1]">{bottomText}<span className="animate-pulse text-[#FF69B4]">|</span></h2>
          </div>
          <div className="flex flex-col gap-4 mt-16 w-64">
            <button onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })} className="w-full px-10 py-4 rounded-full bg-linear-to-r from-[#FF69B4] to-[#ff85c2] text-white font-bold uppercase tracking-widest shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl">View Projects</button>
            <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="w-full px-10 py-4 rounded-full border border-zinc-900/20 dark:border-white/20 font-bold uppercase tracking-widest transition-all duration-300 hover:bg-zinc-100 dark:hover:bg-white/10 hover:scale-105 text-center">Get in touch</button>
          </div>
        </div>
        <div className="flex flex-col items-start max-w-sm z-20 gap-6">
          <div className="bg-zinc-100/80 dark:bg-black/30 backdrop-blur-md p-8 rounded-3xl border border-zinc-200 dark:border-white/10 w-full shadow-xl">
            <span className="inline-block text-[10px] font-bold uppercase tracking-[0.2em] text-[#FF69B4] border border-[#FF69B4]/30 px-3 py-1 mb-6 bg-white dark:bg-[#FF69B4]/10 rounded-full">Based in Philippines</span>
            <h1 className="text-4xl font-black uppercase mb-6 leading-[1.1] w-70">CATHERINE MAE<br />GALANG</h1>
            <Description />
          </div>
          <div className="flex gap-5 pl-2">{socials.map((s, i) => <div key={s.name} className="animate-floating" style={{ animationDelay: `${i * 0.15}s` }}><SocialIcon name={s.name} url={s.url} /></div>)}</div>
        </div>
      </div>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="lg:hidden relative z-20 w-full min-h-screen flex flex-col items-center justify-center px-6 py-8 text-center gap-6">
        <h1 className="text-xl font-black uppercase whitespace-nowrap">CATHERINE MAE GALANG</h1>
        <div className="relative w-64">
            <img src="/portrait.svg" alt="Catherine Mae Galang" className="w-full h-72 object-cover rounded-[2rem] border border-white/10" />
            <div className="absolute bottom-4 left-0 right-0 flex justify-center"><MobileStatusBadge /></div>
        </div>
        <div className="flex flex-col items-center justify-center h-24">
            <div className="text-3xl font-black uppercase bg-linear-to-br from-[#FF69B4] via-[#FF1493] to-purple-600 bg-clip-text text-transparent">{topText}</div>
            <div className="text-4xl font-black uppercase">{bottomText}<span className="animate-pulse">|</span></div>
        </div>
        <div className="px-6 text-left"><Description /></div>
        <div className="flex flex-col gap-3 w-full max-w-60">
            <button onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })} className="w-full py-3 rounded-full bg-[#FF69B4] text-white font-bold uppercase tracking-widest text-xs transition-transform active:scale-95">View Projects</button>
            <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="w-full py-3 rounded-full border border-zinc-900/20 dark:border-white/20 font-bold uppercase tracking-widest text-xs hover:bg-zinc-100 dark:hover:bg-white/10 transition-transform active:scale-95 text-center">Get in touch</button>
        </div>
        <div className="flex gap-6">{socials.map((s) => <div key={s.name}><SocialIcon name={s.name} url={s.url} /></div>)}</div>
      </motion.div>
    </section>
  );
}