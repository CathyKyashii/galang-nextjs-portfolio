'use client';
import { motion } from 'framer-motion';
import SocialIcon from '../ui/SocialIcon';

export default function AboutSection() {
  const socials = [
    { name: 'github', url: 'https://github.com/CathyKyashii' },
    { name: 'linkedin', url: 'https://www.linkedin.com/in/catherinemaegalang' },
    { name: 'instagram', url: 'https://www.instagram.com/cathyyshiii/' },
    { name: 'facebook', url: 'https://www.facebook.com/catherine.mae.galang.2025' },
  ];

  return (
    <section id="about" className="relative min-h-screen w-full bg-white dark:bg-[#0a0a0a] overflow-hidden transition-colors duration-500 flex items-center justify-center py-20 lg:py-28">
      
      {/* SUBTLE BACKGROUND TEXT */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none opacity-[0.02] dark:opacity-[0.04]">
        <h2 className="text-[15vw] font-black uppercase tracking-widest text-zinc-900 dark:text-white" 
            style={{ WebkitTextStroke: "1px currentColor", color: "transparent" }}>
          CREATIVE
        </h2>
      </div>

      {/* FIXED CONTAINER */}
      <div className="relative max-w-7xl mx-auto w-full px-6 md:px-12 lg:px-8 z-10">
        
        {/* HEADER */}
        <div className="mb-12 lg:mb-16 text-left">
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-3"
          >
            <div className="h-px w-6 bg-pink-500" />
            <span className="text-pink-500 font-mono text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase">
              Personal Profile
            </span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl lg:text-5xl font-extrabold tracking-tight uppercase text-zinc-950 dark:text-white"
          >
            About <span className="text-pink-500 font-light italic">Myself.</span>
          </motion.h2>
        </div>

        {/* CONTENT GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          {/* IMAGE BLOCK */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-5 relative w-full flex justify-center lg:justify-start group"
          >
            <div className="absolute -inset-4 bg-pink-500/5 dark:bg-pink-500/2 rounded-[32px] lg:rounded-[44px] blur-xl transition-all duration-700 group-hover:scale-105 group-hover:bg-pink-500/10" />
            
            <div className="relative w-full max-w-md aspect-4/5 rounded-[24px] lg:rounded-[36px] overflow-hidden border border-zinc-200 dark:border-white/10 bg-zinc-900 shadow-xl transition-all duration-500 shadow-pink-500/5 group-hover:shadow-pink-500/10 group-hover:border-pink-500/30">
              <img 
                src="AboutImage.JPG" 
                alt="Catherine" 
                className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-102"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
            </div>
          </motion.div>

          {/* DESCRIPTION BLOCK */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-7 flex flex-col space-y-6 pt-2"
          >
            <h3 className="text-xl lg:text-2xl font-bold text-zinc-950 dark:text-white leading-snug tracking-tight text-justify">
              Crafting digital spaces where <span className="text-pink-500">artistic layouts</span> and functional systems align.
            </h3>
            
            <p className="text-sm lg:text-base text-zinc-800 dark:text-zinc-100 leading-relaxed font-normal text-justify">
              Hi! I'm Catherine, but you can call me <strong className="text-zinc-950 dark:text-white font-bold">Cathy</strong>. As a Computer Science student, I specialize in building immersive digital environments through <strong className="text-pink-500 font-bold">UI/UX design</strong> and <strong className="text-pink-500 font-bold">frontend development</strong>. I don't limit myself strictly to engineering layouts and writing clean code; I am also deeply passionate about <strong className="text-zinc-950 dark:text-white font-bold">Graphic Design</strong>. This artistic lens directly fuels my technical approach, helping me transform complex code into clean, stunning user interfaces.
            </p>
            
            <p className="text-sm lg:text-base text-zinc-800 dark:text-zinc-100 leading-relaxed font-normal text-justify">
              My journey as an <span className="italic text-pink-500 font-bold">IT girl</span> thrives on the standard that software shouldn't just run beautifully—it should tell an inspiring visual story the second it hits the screen.
            </p>

            {/* MOTTO SECTION */}
            <div className="pt-6 border-t border-zinc-200 dark:border-white/10 mt-2">
              <p className="text-pink-500 font-mono text-[10px] tracking-widest uppercase mb-2 font-bold">Creative Philosophy</p>
              <p className="text-zinc-900 dark:text-zinc-100 text-sm md:text-base font-medium italic tracking-wide text-justify border-l-2 border-pink-500 pl-4 py-1 bg-zinc-50 dark:bg-white/2 rounded-r-lg">
                "Design sets the stage, code brings it to life, and art gives it a soul."
              </p>
            </div>

            {/* FLOATING SOCIAL LINKS BLOCK */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-zinc-200 dark:border-white/10">
              <span className="text-zinc-500 dark:text-zinc-400 font-mono text-[11px] uppercase tracking-wider w-full text-center sm:text-left font-medium">Find me online:</span>
              <div className="flex gap-5 justify-center sm:justify-end w-full"> 
                {socials.map((social, i) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block animate-floating cursor-pointer hover:opacity-70 transition-opacity"
                    style={{ animationDelay: `${i * 0.15}s` }}
                  >
                    <SocialIcon name={social.name} url={social.url} />
                  </a>
                ))}
              </div>
            </div>

          </motion.div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes floating-bob {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-4px); }
        }
        .animate-floating {
          animation: floating-bob 3s ease-in-out infinite;
        }

        @media (max-width: 1023px) {
          .animate-floating {
            animation: none !important;
          }
        }
      `}</style>
    </section>
  );
}