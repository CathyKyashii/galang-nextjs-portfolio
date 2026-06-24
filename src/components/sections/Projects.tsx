'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

// Unified Project Database
const allProjects = [
  // --- WEB DESIGNS ---
  { title: "HANDS Group", date: "2026", desc: "Spearheaded the end-to-end redesign to modernize the brand's digital presence for an architecture portfolio, prioritizing a high-fidelity, accessible solution.", role: "Lead Web Designer", tools: "Figma & Canva", platform: "Architecture Firm", link: "https://hands-redesign.vercel.app/", image: "/handsanimation.svg", cat: "web" },
  { title: "ChronoTask", date: "2024 - 2025", desc: "Architected a scalable frontend using React and Tailwind CSS, implementing optimized state management to handle complex AI-augmented project workflows.", role: "UI/UX Designer, Front-end Developer, Documenter", tools: "Figma & Canva", platform: "SaaS Productivity", link: "https://hands-thesis-prototype.vercel.app/", image: "/chronotask.svg", cat: "web" },
  { title: "TMC Food Hub", date: "2026", desc: "Designed a premier delivery service interface connecting users to local restaurants.", role: "Web Designer", tools: "Figma", platform: "Food Delivery Hub", link: "https://foodhub.tmc-innovations.com/#", image: "/tmcfoodhub.png", cat: "web" },
  
  // --- ACADEMIC DESIGNS ---
  { title: "Priori-App Magazine", date: "2024", desc: "Magazine-style layout for mobile app.", role: "Designer", tools: "Canva", link: "#", image: "/PrioriApp_magazine.png", cat: "academic" },
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
  
  // --- CREATIVE DESIGNS ---
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
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="projects" className="relative min-h-screen w-full bg-white dark:bg-[#0a0a0a] py-24 lg:py-32 overflow-hidden">
      
      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/80 backdrop-blur-md cursor-pointer"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-3xl flex items-center justify-center cursor-default"
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={selectedImage} 
                alt="Full view" 
                className="max-h-[70vh] w-auto object-contain rounded-lg shadow-2xl border border-white/10" 
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative max-w-7xl mx-auto w-full px-6 md:px-12 lg:px-8 z-10">
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-3">
            <div className="h-px w-6 bg-pink-500" />
            <span className="text-pink-500 font-mono text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase">Selected Works</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight uppercase text-zinc-950 dark:text-white">
            Featured <span className="text-pink-500 font-light italic">Projects.</span>
          </h2>

          <div className="mt-10 flex gap-2">
            {(['web', 'academic', 'creative'] as const).map((cat) => (
              <button key={cat} onClick={() => setActiveCategory(cat)} className={`px-6 py-2 rounded-lg text-[10px] font-bold uppercase tracking-widest border transition-all ${activeCategory === cat ? "bg-pink-500 border-pink-500 text-white" : "border-zinc-200 dark:border-zinc-800 text-zinc-500"}`}>
                {cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {allProjects.filter(p => p.cat === activeCategory).map((project) => (
              <motion.div layout initial={{ opacity: 0 }} animate={{ opacity: 1 }} key={project.title} className="group border border-zinc-100 dark:border-zinc-900 rounded-2xl overflow-hidden bg-zinc-50 dark:bg-zinc-900/20 flex flex-col">
                <div className="aspect-[4/3] relative overflow-hidden cursor-pointer" onClick={() => setSelectedImage(project.image)}>
                   <Image src={project.image} alt={project.title} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6 grow">
                  <span className="text-[9px] font-bold text-pink-500 uppercase tracking-widest">{project.date}</span>
                  <h3 className="text-xl font-bold mt-1 mb-3 text-zinc-950 dark:text-white uppercase leading-tight">{project.title}</h3>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-6 leading-relaxed">{project.desc}</p>
                  
                  <div className="border-t border-zinc-200 dark:border-zinc-800 pt-4 text-[11px] space-y-3">
                    <p className="font-bold text-zinc-900 dark:text-zinc-200 uppercase">
                      ROLE: <span className="font-normal text-zinc-600 dark:text-zinc-400 ml-1">{project.role}</span>
                    </p>
                    {project.tools && (
                      <p className="font-bold text-zinc-900 dark:text-zinc-200 uppercase">
                        CREATIVE TOOLKIT: <span className="font-normal text-zinc-600 dark:text-zinc-400 ml-1">{project.tools}</span>
                      </p>
                    )}
                    {project.platform && (
                      <p className="font-bold text-zinc-900 dark:text-zinc-200 uppercase">
                        PLATFORM: <span className="font-normal text-zinc-600 dark:text-zinc-400 ml-1">{project.platform}</span>
                      </p>
                    )}
                  </div>
                </div>
                
                {project.link !== "#" && (
                  <div className="p-6 pt-0">
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 w-full bg-zinc-950 dark:bg-white text-white dark:text-black py-3 rounded-xl font-bold text-[10px] uppercase tracking-widest hover:bg-pink-500 transition-colors">
                      Explore Project <ExternalLink size={11} />
                    </a>
                  </div>
                )}
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}