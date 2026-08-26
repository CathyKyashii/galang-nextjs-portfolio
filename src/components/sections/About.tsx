'use client';
import { motion } from 'framer-motion';
import { ArrowRight, Quote } from 'lucide-react';
import SocialIcon from '../ui/SocialIcon';

export default function AboutSection() {
  const socials = [
    { name: 'github', url: 'https://github.com/CathyKyashii' },
    { name: 'linkedin', url: 'https://www.linkedin.com/in/catherinemaegalang' },
    { name: 'instagram', url: 'https://www.instagram.com/cathyyshiii/' },
    { name: 'facebook', url: 'https://www.facebook.com/catherine.mae.galang.2025' },
  ];

  return (
    <section id="about" className="relative min-h-screen w-full bg-[#f8f9fa] dark:bg-[#0a0a0a] text-zinc-900 dark:text-white overflow-hidden py-24 transition-colors duration-300 flex items-center">
      <div className="relative w-full max-w-352 mx-auto px-6 md:px-12 z-10">
        
        <div className="mb-12 text-left">
          <div className="flex items-center gap-3 mb-2">
            <div className="h-px w-6 bg-[#FF69B4]" />
            <span className="text-[#FF69B4] font-mono text-xs font-bold tracking-[0.3em] uppercase">
              Personal Profile
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight uppercase">
            About <span className="text-[#FF69B4] font-light italic">Myself.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-5 relative w-full flex flex-col items-center"
          >
            <div className="relative w-full max-w-md aspect-4/5 rounded-3xl overflow-hidden border border-zinc-300 dark:border-white/10 bg-white dark:bg-zinc-900 shadow-2xl">
              <img 
                src="AboutImage.png" 
                alt="Catherine Mae Galang" 
                className="w-full h-full object-cover object-top"
              />
            </div>

            <style jsx global>{`
              @keyframes floating-bob { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-6px); } }
              .animate-floating { animation: floating-bob 3s ease-in-out infinite; }
            `}</style>
            <div className="flex gap-5 mt-6">
              {socials.map((s, i) => (
                <div key={s.name} className="animate-floating" style={{ animationDelay: `${i * 0.15}s` }}>
                  <SocialIcon name={s.name} url={s.url} />
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 flex flex-col space-y-6"
          >
            <h3 className="text-2xl lg:text-3xl font-bold leading-snug">
              I'm a <span className="text-[#FF69B4]">UI/UX Designer, Graphic Designer & Project Coordinator</span>.
            </h3>
            
            <div className="space-y-5 text-sm lg:text-base text-zinc-700 dark:text-zinc-300 leading-relaxed font-normal text-justify">
              <p>
                Hi! I'm Catherine but you can call me Cathy. I specialize in bridging the critical gaps between product ownership, graphics design trends, and user-centered design principles to engineer high-impact digital solutions and structured project workflows.
              </p>
              
              <p>
                With over 3 years of hands-on experience in design, my core strength lies in transforming complex analytical data insights and dynamic stakeholder requirements into intuitive, elegant digital environments and scalable applications. I thrive on leading multidisciplinary teams from the initial ideation phase all the way through to deployment and lifecycle management.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white/50 dark:bg-zinc-900/50 backdrop-blur-sm border border-[#FF69B4]/30 shadow-[0_0_30px_rgba(255,105,180,0.12)] space-y-2">
              <div className="flex items-center gap-2">
                <Quote className="w-4 h-4 text-[#FF69B4]" />
                <span className="text-[#FF69B4] font-mono text-[10px] font-bold tracking-[0.25em] uppercase">
                  Design Philosophy
                </span>
              </div>
              <p className="text-xs lg:text-sm italic text-zinc-600 dark:text-zinc-300 leading-relaxed">
                &ldquo;Great design is not just what it looks like and feels like. Design is how it works, empowering users seamlessly while bridging creativity with structured execution.&rdquo;
              </p>
            </div>

            <div className="pt-2">
              <button
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center gap-3 px-8 py-3.5 rounded-xl bg-[#FF69B4] hover:bg-[#ff52aa] text-white font-bold uppercase tracking-wider text-xs shadow-lg shadow-[#FF69B4]/30 transition-all duration-300 cursor-pointer"
              >
                <span>My Projects</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}