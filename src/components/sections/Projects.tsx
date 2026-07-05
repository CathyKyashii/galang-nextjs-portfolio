'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, X } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

const allProjects = [
  { title: "HANDS Group", date: "2026", desc: "Spearheaded the end-to-end redesign to modernize the brand's digital presence, prioritizing a high-fidelity, accessible solution.", role: "Lead UI/UX Designer", tools: "Figma & UI Design & Prototyping", platform: "Architecture Firm", link: "https://hands-redesign.vercel.app/", image: "/HANDSLogo.png", cat: "web" },
  { title: "ChronoTask", date: "2024 - 2025", desc: "Architected a scalable frontend using React and Tailwind CSS implementing optimized state management to...", role: "UI/UX Designer, Front-end Developer, Documenter", tools: "Documentation & User Research & Wireframing & Prototyping & React & Tailwind CSS", platform: "SaaS Productivity", link: "https://hands-thesis-prototype.vercel.app/", image: "/ChronoTask.png", cat: "web" },
  { title: "TMC Food Hub", date: "2026", desc: "Designed a premier delivery service interface connecting users to local restaurants.", role: "Web Designer", tools: "Figma & Wireframing & Prototyping", platform: "Food Delivery Hub", link: "https://foodhub.tmc-innovations.com/#", image: "/TMC.png", cat: "web" },
  { title: "GymFlow", date: "2026", desc: "Developed a comprehensive fitness management platform designed to streamline gym operations, member tracking, and personalized training workflows.", role: "Lead Designer & Researcher", tools: "User Research & Wireframing & Prototyping & Usability Testing", platform: "Fitness SaaS", link: "https://gymflow.autopilotvirtual.com/", image: "/Gymflow.png", cat: "web" },
  
  { title: "Priori-App Magazine", date: "2024", desc: "Magazine-style layout for mobile app focusing on accessibility and visual hierarchy.", role: "Designer", tools: "Canva", link: "#", image: "/PrioriApp_magazine.png", cat: "academic" },
  { title: "Priori-App Features", date: "2024", desc: "Detailed product/service feature mapping.", role: "Designer", tools: "Canva & Figma", link: "#", image: "/PrioriAppfeatures.png", cat: "academic" },
  { title: "ChronoTask Tarpaulin", date: "2025", desc: "Tarpaulin layout for final defense.", role: "Designer", tools: "Canva & Photoshop", link: "#", image: "/ChronoTaskTarpaulin.png", cat: "academic" },
  { title: "ChronoTask Brochure front", date: "2025", desc: "Front Brochure layout.", role: "Designer", tools: "Canva & Figma", link: "#", image: "/ChronoTaskBrochurefront.png", cat: "academic" },
  { title: "ChronoTask Brochure back", date: "2025", desc: "Back Brochure layout.", role: "Designer", tools: "Canva & Figma", link: "#", image: "/ChronoTaskBrochureback.png", cat: "academic" },
  { title: "ChronoTask Certificate", date: "2025", desc: "ChronoTask certificate of completion.", role: "Designer", tools: "Canva", link: "#", image: "/CertofCompletion.png", cat: "academic" },
  { title: "National Heroes Day", date: "2025", desc: "Social media promotional graphic for Holiday.", role: "Designer", tools: "Canva", link: "#", image: "/HeroesDay.png", cat: "academic" },
  { title: "Thesis Writing", date: "2025", desc: "Social media promotional graphic for Holiday.", role: "Designer", tools: "Canva", link: "#", image: "/ThesisWriting.png", cat: "academic" },
  { title: "Halloween Day", date: "2025", desc: " Social media / promotional graphic for Halloween Day.", role: "Designer", tools: "Canva & Photoshop", link: "#", image: "/HalloweenDay.png", cat: "academic" },
  { title: "Ticket Registration Design", date: "2025", desc: "Social media promotional graphic for ICT Week Ticket registration.", role: "Designer", tools: "Canva & Photoshop", link: "#", image: "/TicketRegistration.png", cat: "academic" },
  { title: "Tekken finals Design", date: "2025", desc: "Social media promotional graphic for game poster.", role: "Designer", tools: "Canva", link: "#", image: "/TekkenFinals.png", cat: "academic" },
  { title: "Thank you Design", date: "2025", desc: "Social media promotional graphic for ICT Week thank you post appreciation.", role: "Designer", tools: "Canva", link: "#", image: "/ThankYou.png", cat: "academic" },
  { title: "E-SPORTS Closed Design", date: "2025", desc: "Social media promotional graphic for ICT Week registration closed.", role: "Designer", tools: "Canva", link: "#", image: "/E-SPORTSClosed.png", cat: "academic" },
  { title: "MerkaGo App Launch", date: "2025", desc: "Social media / promotional app launching for MerkaGo.", role: "Lead Designer & Marketing", tools: "Canva & Photoshop", link: "#", image: "/MerkaGoAppLaunch.png", cat: "academic" },
  { title: "MerkaGo App Reminder", date: "2025", desc: "Social media / promotional app reminder for MerkaGo.", role: "Lead Designer & Marketing", tools: "Canva", link: "#", image: "/MerkaGoReminder.png", cat: "academic" },
  { title: "MerkaGo App Final Launch", date: "2025", desc: "Social media / promotional app final launching for MerkaGo.", role: "Lead Designer & Marketing", tools: "Canva & Figma", link: "#", image: "/MerkaGoFinalLaunch.png", cat: "academic" },
  { title: "MerkaGo Team", date: "2025", desc: "Social promotional graphic for MerkaGo's team behind the application.", role: "Lead Designer & Marketing", tools: "Canva", link: "#", image: "/MerkaGoTeam.png", cat: "academic" },
  { title: "MerkaGo Shopping Appreciation", date: "2025", desc: "Social promotional graphic for MerkaGo shipping.", role: "Lead Designer & Marketing", tools: "Canva", link: "#", image: "/MerkaGoShoppingAppreciation.png", cat: "academic" },
  { title: "MerkaGo Freshness", date: "2025", desc: "Social promotional graphic for MerkaGo convenience.", role: "Lead Designer & Marketing", tools: "Canva", link: "#", image: "/MerkaGoFreshness.png", cat: "academic" },
  { title: "MerkaGo Flyer 1", date: "2025", desc: "Social media / promotional flyer for MerkaGo.", role: "Lead Designer & Marketing", tools: "Canva & Figma", link: "#", image: "/MerkaGoFlyer1.png", cat: "academic" },
  { title: "MerkaGo Flyer 2", date: "2025", desc: "Social media / promotional flyer for MerkaGo.", role: "Lead Designer & Marketing", tools: "Canva & Figma", link: "#", image: "/MerkaGoFlyer2.png", cat: "academic" },
  { title: "MerkaGo Flyer 3", date: "2025", desc: "Social media / promotional flyer for MerkaGo.", role: "Lead Designer & Marketing", tools: "Canva & Figma", link: "#", image: "/MerkaGoFlyer3.png", cat: "academic" },
  { title: "MerkaGo Flyer 4", date: "2025", desc: "Social media / promotional flyer for MerkaGo.", role: "Lead Designer & Marketing", tools: "Canva & Figma", link: "#", image: "/MerkaGoFlyer4.png", cat: "academic" },
  { title: "MerkaGo Flyer 5", date: "2025", desc: "Social media / promotional flyer for MerkaGo.", role: "Lead Designer & Marketing", tools: "Canva & Figma", link: "#", image: "/MerkaGoFlyer5.png", cat: "academic" },
  { title: "MerkaGo Flyer 6", date: "2025", desc: "Social media / promotional flyer for MerkaGo.", role: "Lead Designer & Marketing", tools: "Canva & Figma", link: "#", image: "/MerkaGoFlyer6.png", cat: "academic" },
  { title: "MerkaGo Poster 1", date: "2025", desc: "Social media / promotional poster for MerkaGo.", role: "Lead Designer & Marketing", tools: "Canva & Photoshop", link: "#", image: "/MerkaGoPoster1.png", cat: "academic" },
  { title: "MerkaGo Poster 2", date: "2025", desc: "Social media / promotional poster for MerkaGo.", role: "Lead Designer & Marketing", tools: "Canva & Photoshop", link: "#", image: "/MerkaGoPoster2.png", cat: "academic" },
  { title: "MerkaGo Poster 3", date: "2025", desc: "Social media / promotional poster for MerkaGo.", role: "Lead Designer & Marketing", tools: "Canva & Photoshop", link: "#", image: "/MerkaGoPoster3.png", cat: "academic" },
  { title: "MerkaGo Infographics", date: "2025", desc: "Social media / promotional app launching for MerkaGo.", role: "Lead Designer & Marketing", tools: "Canva & Figma", link: "#", image: "/MerkaGoInfographics.png", cat: "academic" },
  
  { title: "Ramen Advertisement 1", date: "2026", desc: "Social media / promotional graphic for Ramen.", role: "Designer", tools: "Canva & Photoshop", link: "#", image: "/RamenAdvertisement1.png", cat: "creative" },
  { title: "Burger Advertisement 2", date: "2026", desc: "Social media / promotional graphic for Burger.", role: "Designer", tools: "Canva & Photoshop", link: "#", image: "/BurgerAdvertisement2.png", cat: "creative" },
  { title: "Smoothie Advertisement 3", date: "2026", desc: "Social media / promotional graphic for Strawberry smoothie.", role: "Designer", tools: "Canva & Photoshop", link: "#", image: "/SmoothieAdvertisement3.png", cat: "creative" },
  { title: "Chicken Inasal Advertisement 4", date: "2026", desc: "Social media / promotional graphic for Chicken.", role: "Designer", tools: "Canva", link: "#", image: "/ChickenAdvertisement4.png", cat: "creative" },
  { title: "Matcha Advertisement 5", date: "2026", desc: "Social media / promotional graphic for Matcha drink.", role: "Designer", tools: "Canva & Figma", link: "#", image: "/MatchaAdvertisement5.png", cat: "creative" },
  { title: "Pizza Advertisement 6", date: "2026", desc: "Social media / promotional graphic for Pizza.", role: "Designer", tools: "Canva & Figma", link: "#", image: "/PizzaAdvertisement6.png", cat: "creative" },
  { title: "Sprite drink Advertisement 7", date: "2026", desc: "Social media / promotional graphic for Sprite drink.", role: "Designer", tools: "Canva", link: "#", image: "/SpritedrinkAdvertisement 7.png", cat: "creative" },
  { title: "Orange drink Advertisement 8", date: "2026", desc: "Social media / promotional graphic for Orange drink.", role: "Designer", tools: "Canva", link: "#", image: "/OrangedrinkAdvertisement8.png", cat: "creative" },
  { title: "Pringles Advertisement 9", date: "2026", desc: "Social media / promotional graphic for Pringles.", role: "Designer", tools: "Canva & Photoshop", link: "#", image: "/PringlesAdvertisement9.png", cat: "creative" },
  { title: "Lays Advertisement 10", date: "2026", desc: "Social media / promotional graphic for Lays chips.", role: "Designer", tools: "Canva", link: "#", image: "/LaysAdvertisement10.png", cat: "creative" },
  { title: "Infographics about Poverty", date: "2026", desc: "Social media / promotional graphic for Ramen.", role: "Designer", tools: "Canva & Photoshop", link: "#", image: "/InfographicsPoverty.png", cat: "creative" },
  { title: "Infographics about Immigration", date: "2026", desc: "Social media / promotional graphic for Ramen.", role: "Designer", tools: "Canva & Photoshop", link: "#", image: "/InfographicsImmigration.png", cat: "creative" },
  { title: "Infographics about Corruption", date: "2026", desc: "Social media / promotional graphic for Ramen.", role: "Designer", tools: "Canva & Photoshop", link: "#", image: "/InfographicsCorruption.png", cat: "creative" },
];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<'web' | 'academic' | 'creative'>('web');
  const [selectedProject, setSelectedProject] = useState<typeof allProjects[0] | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const currentFiltered = allProjects.filter(p => p.cat === activeCategory);
  const selectedIndex = currentFiltered.findIndex(p => p.title === selectedProject?.title);

  return (
    <section id="projects" className="relative min-h-screen w-full bg-white dark:bg-[#0a0a0a] py-24 transition-colors duration-500 text-zinc-900 dark:text-white">
      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-white/90 dark:bg-black/90 backdrop-blur-md"
            onClick={() => setSelectedProject(null)}
          >
            {activeCategory === 'web' ? (
              <motion.div 
                initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.95, opacity: 0 }}
                className="bg-white dark:bg-black border border-zinc-200 dark:border-white/10 w-full max-w-4xl flex flex-col md:flex-row shadow-2xl relative overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                <button onClick={() => setSelectedProject(null)} className="absolute top-4 right-4 z-10 text-zinc-900 dark:text-white hover:text-pink-500"><X size={24} /></button>
                <div className="w-full md:w-1/2 bg-zinc-100 dark:bg-white flex items-center justify-center p-12">
                  <div className="relative w-full aspect-square">
                    <Image src={selectedProject.image} alt={selectedProject.title} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-contain" />
                  </div>
                </div>
                <div className="w-full md:w-1/2 p-10 flex flex-col justify-center">
                  <span className="text-pink-500 font-bold text-[10px] tracking-[0.2em] uppercase mb-2">{`0${selectedIndex + 1} | ${selectedProject.role.toUpperCase()}`}</span>
                  <h2 className="text-4xl font-black uppercase mb-6 leading-tight text-zinc-950 dark:text-white">{selectedProject.title.toUpperCase()}</h2>
                  <p className="text-zinc-600 dark:text-zinc-300 mb-8 leading-relaxed text-sm">{selectedProject.desc}</p>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {selectedProject.tools.split('&').map((tool) => (
                      <span key={tool} className="px-3 py-1 border border-zinc-200 dark:border-white/20 text-xs text-zinc-900 dark:text-white uppercase tracking-widest">{tool.trim()}</span>
                    ))}
                  </div>
                  <a href={selectedProject.link} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-pink-500 text-white py-4 font-bold uppercase tracking-widest hover:bg-pink-600 transition-colors">
                    EXPLORE PROJECT <ExternalLink size={16} />
                  </a>
                </div>
              </motion.div>
            ) : (
              <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }} className="relative w-full max-w-3xl aspect-4/3 flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
                <Image src={selectedProject.image} alt={selectedProject.title} fill sizes="80vw" className="object-contain" />
              </motion.div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="w-full max-w-[100rem] mx-auto px-6 md:px-24">
        <div className="mb-12 lg:mb-16 text-left">
          <motion.div initial={{ opacity: 0, y: -10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex items-center gap-3 mb-3">
            <div className="h-px w-6 bg-pink-500" />
            <span className="text-pink-500 font-mono text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase">Portfolio</span>
          </motion.div>
          <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl md:text-5xl lg:text-5xl font-extrabold tracking-tight uppercase text-zinc-950 dark:text-white">
            Project <span className="text-pink-500 font-light italic">Gallery.</span>
          </motion.h2>
        </div>
        
        <div className="flex gap-4 mb-12">
          {(['web', 'academic', 'creative'] as const).map((cat) => (
            <button key={cat} onClick={() => setActiveCategory(cat)} className={`px-8 py-3 rounded-full text-[10px] font-bold uppercase tracking-widest border transition-all ${activeCategory === cat ? "bg-pink-500 border-pink-500 text-white" : "border-zinc-200 dark:border-zinc-800 text-zinc-500 hover:border-zinc-600"}`}>
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {currentFiltered.map((project, i) => (
            <motion.div 
              key={project.title}
              whileHover={{ scale: 1.02 }}
              onClick={() => setSelectedProject(project)}
              onMouseMove={(e) => {
                if (window.innerWidth >= 768) {
                  const rect = e.currentTarget.getBoundingClientRect();
                  setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
                }
              }}
              className="group relative aspect-square overflow-hidden rounded-2xl cursor-pointer border border-zinc-200 dark:border-zinc-800 shadow-[0_0_20px_rgba(236,72,153,0.15)] hover:shadow-[0_0_30px_rgba(236,72,153,0.3)] transition-all duration-300"
            >
              <div className="absolute inset-0 grayscale blur-xs md:grayscale md:blur-xs group-hover:grayscale-0 group-hover:blur-0 transition-all duration-500">
                <Image src={project.image} alt={project.title} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" />
              </div>

              <div 
                className="hidden md:block absolute inset-0 transition-opacity duration-300 opacity-0 group-hover:opacity-100"
                style={{
                  WebkitMaskImage: `radial-gradient(circle 100px at ${mousePos.x}px ${mousePos.y}px, black, transparent)`,
                  maskImage: `radial-gradient(circle 100px at ${mousePos.x}px ${mousePos.y}px, black, transparent)`,
                }}
              >
                <Image src={project.image} alt={project.title} fill sizes="33vw" className="object-cover" />
              </div>
              
              <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-transparent opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 p-8 flex flex-col justify-end">
                <span className="text-white/60 text-[10px] font-bold tracking-widest uppercase mb-1">{`0${i + 1} | ${project.role.toUpperCase()}`}</span>
                <h3 className="text-2xl font-black text-white uppercase leading-tight mb-2">{project.title.toUpperCase()}</h3>
                <p className="text-xs text-zinc-300 line-clamp-2">{project.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}