// Page.tsx
'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, X } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

const allPortfolio = [
  { 
    title: "HANDS Group", 
    date: "2026", 
    desc: "Spearheaded the end-to-end redesign for an architecture firm, transforming a sluggish, misaligned digital presence into an elite, responsive platform.", 
    role: "Lead UI/UX Designer & Project Coordinator", 
    tools: "Figma & Agile & Backlog Management & Prototyping", 
    platform: "WEBSITE | ARCHITECTURE FIRM", 
    link: "https://handsgrp.com/", 
    image: "/HANDSLogo.png", 
    cat: "web",
    problem: "The legacy website suffered from slow project load times, inconsistent UI alignment and content structure, overly simplistic layouts that looked unengaging, and a general failure to reflect the sophisticated aesthetic of an architecture firm.",
    process: "Conducted stakeholder interviews to define architectural branding goals, mapped clean user flows, prioritized the product backlog to tackle critical performance and layout flaws first, and managed continuous iteration sprints alongside engineering leads.",
    impact: "Delivered a modern, lightning-fast digital experience that elevated user engagement, boosted task efficiency by 20%, and authentically represented the firm's architectural expertise."
  },
  { 
    title: "ChronoTask", 
    date: "2024 - 2025", 
    desc: "Architected a scalable productivity platform by transforming quantitative user research and backlog specs into optimized code implementations.", 
    role: "Web Designer, Documenter & Front-end Developer", 
    tools: "User Research & Backlog Management & Wireframing & React & Tailwind CSS", 
    platform: "SAAS PRODUCTIVITY | ARCHITECTURE FIRM", 
    link: "https://hands-thesis-prototype.vercel.app/", 
    image: "/ChronoTask.png", 
    cat: "web",
    problem: "Users struggled to manage fragmented tasks efficiently without a unified platform consolidating tracking and technical specifications.",
    process: "Conducted user research to gather requirements, created structured epics and user stories, tracked database bugs, and built out the frontend specs.",
    impact: "Delivered a fully validated MVP platform that met rigorous academic and functional acceptance standards."
  },
  { 
    title: "TMC Food Hub", 
    date: "2026", 
    desc: "Designed an accessible multi-vendor delivery service interface connecting consumers directly to local dining options.", 
    role: "Lead Product Designer", 
    tools: "Figma & Wireframing & Prototyping & Usability Testing", 
    platform: "MOBILE AND WEB APP | FOOD DELIVERY APP", 
    link: "https://foodhub.tmc-innovations.com/#", 
    image: "/TMC.png", 
    cat: "web",
    problem: "Local restaurants lacked a unified digital storefront to capture mobile-first customers smoothly.",
    process: "Mapped out core merchant-to-customer user journeys, ran wireframe testing, and refined UI components for rapid vendor onboarding.",
    impact: "Improved navigation intuitiveness and decreased drop-off points during the checkout simulation."
  },
  { 
    title: "GymFlow", 
    date: "2026", 
    desc: "Developed a comprehensive fitness management platform designed to streamline gym operations, member tracking, and workflows.", 
    role: "Lead Product Designer & Researcher", 
    tools: "User Research & Wireframing & Prototyping & Usability Testing", 
    platform: "SAAS MOBILE AND WEB APP | FITNESS ACTIVITY TRACKER", 
    link: "https://gymflow.autopilotvirtual.com/", 
    image: "/Gymflow.png", 
    cat: "web",
    problem: "Fitness centers experienced administrative drag due to disjointed tracking tools for memberships and scheduling.",
    process: "Executed deep user research with gym administrators, structured feature prioritization matrices, and designed task-oriented prototypes.",
    impact: "Streamlined operational workflows and minimized manual tracking overhead for facility staff."
  },
  
  { 
    title: "Priori-App Magazine", 
    date: "2024", 
    desc: "Magazine-style layout for mobile app focusing on accessibility and visual hierarchy.", 
    role: "DESIGNER | CANVA", 
    tools: "Canva", 
    link: "https://www.canva.com/design/DAG-9c74E0k/-X2HDBkjMjzMSeBfbzO5BA/view", 
    image: "/PrioriApp_magazine.png", 
    cat: "academic", 
    platform: "INCLUSIVE RIDES",
    problem: "Needed a comprehensive magazine presentation layout highlighting inclusive design parameters.",
    process: "Designed multi-page editorial spreads on Canva focusing on typography scaling and accessible layouts.",
    impact: "Provided reviewers with a clear, engaging narrative of the mobile application's vision."
  },
  { title: "ChronoTask Tarpaulin", date: "2025", desc: "Tarpaulin layout for final defense.", role: "DESIGNER | CANVA", tools: "Canva & Photoshop", link: "#", image: "/ChronoTaskTarpaulin.png", cat: "academic", platform: "SAAS PRODUCTIVITY" },
  { title: "ChronoTask Brochure front", date: "2025", desc: "Front Brochure layout.", role: "DESIGNER | CANVA", tools: "Canva & Figma", link: "#", image: "/ChronoTaskBrochurefront.png", cat: "academic", platform: "MARKETING COLLATERAL" },
  { title: "ChronoTask Certificate", date: "2025", desc: "ChronoTask certificate of completion.", role: "DESIGNER | CANVA", tools: "Canva", link: "#", image: "/CertofCompletion.png", cat: "academic", platform: "OFFICIAL CERTIFICATION" },
  { title: "National Heroes Day", date: "2025", desc: "Social media promotional graphic for Holiday.", role: "DESIGNER | CANVA", tools: "Canva", link: "#", image: "/HeroesDay.png", cat: "academic", platform: "PROMOTIONAL GRAPHIC" },
  { title: "Thesis Writing", date: "2025", desc: "Social media promotional graphic for Holiday.", role: "DESIGNER | CANVA", tools: "Canva", link: "#", image: "/ThesisWriting.png", cat: "academic", platform: "PROMOTIONAL GRAPHIC" },
  { title: "Halloween Day", date: "2025", desc: " Social media / promotional graphic for Halloween Day.", role: "DESIGNER | CANVA", tools: "Canva & Photoshop", link: "#", image: "/HalloweenDay.png", cat: "academic", platform: "PROMOTIONAL GRAPHIC" },
  { title: "Ticket Registration Design", date: "2025", desc: "Social media promotional graphic for ICT Week Ticket registration.", role: "DESIGNER | CANVA", tools: "Canva & Photoshop", link: "#", image: "/TicketRegistration.png", cat: "academic", platform: "PROMOTIONAL GRAPHIC" },
  { title: "Tekken finals Design", date: "2025", desc: "Social media promotional graphic for game poster.", role: "DESIGNER | CANVA", tools: "Canva", link: "#", image: "/TekkenFinals.png", cat: "academic", platform: "PROMOTIONAL GRAPHIC" },
  { title: "Thank you Design", date: "2025", desc: "Social media promotional graphic for ICT Week thank you post appreciation.", role: "DESIGNER | CANVA", tools: "Canva", link: "#", image: "/ThankYou.png", cat: "academic", platform: "PROMOTIONAL GRAPHIC" },
  { title: "E-SPORTS Closed Design", date: "2025", desc: "Social media promotional graphic for ICT Week registration closed.", role: "DESIGNER | CANVA", tools: "Canva", link: "#", image: "/E-SPORTSClosed.png", cat: "academic", platform: "PROMOTIONAL GRAPHIC" },
  { title: "MerkaGo App Launch", date: "2025", desc: "Social media / promotional app launching for MerkaGo.", role: "DESIGNER | CANVA", tools: "Canva & Photoshop", link: "#", image: "/MerkaGoAppLaunch.png", cat: "academic", platform: "MARKETING LAUNCH" },
  { title: "MerkaGo App Reminder", date: "2025", desc: "Social media / promotional app reminder for MerkaGo.", role: "DESIGNER | CANVA", tools: "Canva", link: "#", image: "/MerkaGoReminder.png", cat: "academic", platform: "MARKETING LAUNCH" },
  { title: "MerkaGo App Final Launch", date: "2025", desc: "Social media / promotional app final launching for MerkaGo.", role: "DESIGNER | CANVA", tools: "Canva & Figma", link: "#", image: "/MerkaGoFinalLaunch.png", cat: "academic", platform: "MARKETING LAUNCH" },
  { title: "MerkaGo Team", date: "2025", desc: "Social promotional graphic for MerkaGo's team behind the application.", role: "DESIGNER | CANVA", tools: "Canva", link: "#", image: "/MerkaGoTeam.png", cat: "academic", platform: "MARKETING LAUNCH" },
  { title: "MerkaGo Shopping Appreciation", date: "2025", desc: "Social promotional graphic for MerkaGo shipping.", role: "DESIGNER | CANVA", tools: "Canva", link: "#", image: "/MerkaGoShoppingAppreciation.png", cat: "academic", platform: "MARKETING LAUNCH" },
  { title: "MerkaGo Freshness", date: "2025", desc: "Social promotional graphic for MerkaGo convenience.", role: "DESIGNER | CANVA", tools: "Canva", link: "#", image: "/MerkaGoFreshness.png", cat: "academic", platform: "MARKETING LAUNCH" },
  { title: "MerkaGo Flyer 1", date: "2025", desc: "Social media / promotional flyer for MerkaGo.", role: "DESIGNER | CANVA", tools: "Canva & Figma", link: "#", image: "/MerkaGoFlyer1.png", cat: "academic", platform: "FLYER DESIGN" },
  { title: "MerkaGo Flyer 2", date: "2025", desc: "Social media / promotional flyer for MerkaGo.", role: "DESIGNER | CANVA", tools: "Canva & Figma", link: "#", image: "/MerkaGoFlyer2.png", cat: "academic", platform: "FLYER DESIGN" },
  { title: "MerkaGo Flyer 3", date: "2025", desc: "Social media / promotional flyer for MerkaGo.", role: "DESIGNER | CANVA", tools: "Canva & Figma", link: "#", image: "/MerkaGoFlyer3.png", cat: "academic", platform: "FLYER DESIGN" },
  { title: "MerkaGo Flyer 4", date: "2025", desc: "Social media / promotional flyer for MerkaGo.", role: "DESIGNER | CANVA", tools: "Canva & Figma", link: "#", image: "/MerkaGoFlyer4.png", cat: "academic", platform: "FLYER DESIGN" },
  { title: "MerkaGo Flyer 5", date: "2025", desc: "Social media / promotional flyer for MerkaGo.", role: "DESIGNER | CANVA", tools: "Canva & Figma", link: "#", image: "/MerkaGoFlyer5.png", cat: "academic", platform: "FLYER DESIGN" },
  { title: "MerkaGo Flyer 6", date: "2025", desc: "Social media / promotional flyer for MerkaGo.", role: "DESIGNER | CANVA", tools: "Canva & Figma", link: "#", image: "/MerkaGoFlyer6.png", cat: "academic", platform: "FLYER DESIGN" },
  { title: "MerkaGo Poster 1", date: "2025", desc: "Social media / promotional poster for MerkaGo.", role: "DESIGNER | CANVA", tools: "Canva & Photoshop", link: "#", image: "/MerkaGoPoster1.png", cat: "academic", platform: "POSTER DESIGN" },
  { title: "MerkaGo Poster 2", date: "2025", desc: "Social media / promotional poster for MerkaGo.", role: "DESIGNER | CANVA", tools: "Canva & Photoshop", link: "#", image: "/MerkaGoPoster2.png", cat: "academic", platform: "POSTER DESIGN" },
  { title: "MerkaGo Poster 3", date: "2025", desc: "Social media / promotional poster for MerkaGo.", role: "DESIGNER | CANVA", tools: "Canva & Photoshop", link: "#", image: "/MerkaGoPoster3.png", cat: "academic", platform: "POSTER DESIGN" },
  { title: "MerkaGo Infographics", date: "2025", desc: "Social media / promotional app launching for MerkaGo.", role: "DESIGNER | CANVA", tools: "Canva & Figma", link: "#", image: "/MerkaGoInfographics.png", cat: "academic", platform: "DATA VISUALIZATION" },
  
  { title: "Ramen Advertisement 1", date: "2026", desc: "Social media / promotional graphic for Ramen.", role: "DESIGNER", tools: "Canva & Photoshop", link: "#", image: "/RamenAdvertisement1.png", cat: "creative", platform: "GRAPHIC DESIGN PRACTICE" },
  { title: "Burger Advertisement 2", date: "2026", desc: "Social media / promotional graphic for Burger.", role: "DESIGNER", tools: "Canva & Photoshop", link: "#", image: "/BurgerAdvertisement2.png", cat: "creative", platform: "GRAPHIC DESIGN PRACTICE" },
  { title: "Smoothie Advertisement 3", date: "2026", desc: "Social media / promotional graphic for Strawberry smoothie.", role: "DESIGNER", tools: "Canva & Photoshop", link: "#", image: "/SmoothieAdvertisement3.png", cat: "creative", platform: "GRAPHIC DESIGN PRACTICE" },
  { title: "Chicken Inasal Advertisement 4", date: "2026", desc: "Social media / promotional graphic for Chicken.", role: "DESIGNER", tools: "Canva", link: "#", image: "/ChickenAdvertisement4.png", cat: "creative", platform: "GRAPHIC DESIGN PRACTICE" },
  { title: "Matcha Advertisement 5", date: "2026", desc: "Social media / promotional graphic for Matcha drink.", role: "DESIGNER", tools: "Canva & Figma", link: "#", image: "/MatchaAdvertisement5.png", cat: "creative", platform: "GRAPHIC DESIGN PRACTICE" },
  { title: "Pizza Advertisement 6", date: "2026", desc: "Social media / promotional graphic for Pizza.", role: "DESIGNER", tools: "Canva & Figma", link: "#", image: "/PizzaAdvertisement6.png", cat: "creative", platform: "GRAPHIC DESIGN PRACTICE" },
  { title: "Sprite drink Advertisement 7", date: "2026", desc: "Social media / promotional graphic for Sprite drink.", role: "DESIGNER", tools: "Canva", link: "#", image: "/SpritedrinkAdvertisement 7.png", cat: "creative", platform: "GRAPHIC DESIGN PRACTICE" },
  { title: "Orange drink Advertisement 8", date: "2026", desc: "Social media / promotional graphic for Orange drink.", role: "DESIGNER", tools: "Canva", link: "#", image: "/OrangedrinkAdvertisement8.png", cat: "creative", platform: "GRAPHIC DESIGN PRACTICE" },
  { title: "Pringles Advertisement 9", date: "2026", desc: "Social media / promotional graphic for Pringles.", role: "DESIGNER", tools: "Canva & Photoshop", link: "#", image: "/PringlesAdvertisement9.png", cat: "creative", platform: "GRAPHIC DESIGN PRACTICE" },
  { title: "Lays Advertisement 10", date: "2026", desc: "Social media / promotional graphic for Lays chips.", role: "DESIGNER", tools: "Canva", link: "#", image: "/LaysAdvertisement10.png", cat: "creative", platform: "GRAPHIC DESIGN PRACTICE" },
  { title: "Infographics about Poverty", date: "2026", desc: "Social media / promotional graphic for Ramen.", role: "DESIGNER", tools: "Canva & Photoshop", link: "#", image: "/InfographicsPoverty.png", cat: "creative", platform: "GRAPHIC DESIGN PRACTICE" },
  { title: "Infographics about Immigration", date: "2026", desc: "Social media / promotional graphic for Ramen.", role: "DESIGNER", tools: "Canva & Photoshop", link: "#", image: "/InfographicsImmigration.png", cat: "creative", platform: "GRAPHIC DESIGN PRACTICE" },
  { title: "Infographics about Corruption", date: "2026", desc: "Social media / promotional graphic for Ramen.", role: "DESIGNER", tools: "Canva & Photoshop", link: "#", image: "/InfographicsCorruption.png", cat: "creative", platform: "GRAPHIC DESIGN PRACTICE" },

  { 
    title: "Priori-App Presentation Deck", 
    date: "2024", 
    desc: "Comprehensive pitch and presentation deck designed on Canva highlighting app features, user flows, and project value.", 
    role: "Designer, Presenter & Documenter", 
    tools: "Canva & Presentation Design", 
    platform: "Pitch Deck",
    link: "https://www.canva.com/design/DAHTf4LK8JI/XrgyR2pZB7g1i-0aSOq-Fw/view", 
    image: "/PrioriApp_Cover.png", 
    cat: "presentations",
    problem: "Stakeholders and reviewers needed an interactive, accessible walk-through of the mobile application specs and structural framework.",
    process: "Designed multi-slide decks in Canva aligning with branding requirements, structured component overviews, and formatted high-impact layouts.",
    impact: "Delivered a clean, clickable presentation deck providing immediate clarity on core product workflows."
  },
  { 
    title: "Netflix Inspiration Presentation", 
    date: "2026", 
    desc: "Inspirational presentation deck analyzing streaming layouts, content presentation, and cinematic visual structures.", 
    role: "Designer, Presenter & Documenter", 
    tools: "Canva & Presentation Design", 
    platform: "Pitch Deck",
    link: "https://www.canva.com/design/DAHTf-uJG1g/PVK1gF6pfz5H7hmT6TckaA/view", 
    image: "/NetflixInsp_Cover.png", 
    cat: "presentations",
    problem: "Needed a comprehensive deck analyzing entertainment media presentation layers and structural templates.",
    process: "Researched media workflows, structured high-impact visual slides, and documented core layout presentation standards.",
    impact: "Delivered an engaging presentation deck aligning cinematic branding with structured design methodologies."
  },
  { 
    title: "Jose Rizal Presentation Deck", 
    date: "2026", 
    desc: "Comprehensive presentation deck highlighting historical contexts, biographical milestones, and structured informational frameworks.", 
    role: "Designer, Presenter & Documenter", 
    tools: "Canva & Presentation Design", 
    platform: "Pitch Deck",
    link: "https://www.canva.com/design/DAHTf3Cbzzc/7uCzkYGo0oOgKSTAbsXNbw/view", 
    image: "/JoseRizal_Cover.png", 
    cat: "presentations",
    problem: "Required an engaging and structured visual narrative to effectively communicate complex historical information during presentations.",
    process: "Designed layout structures, curated visual hierarchies, and formatted multi-slide layouts on Canva for seamless viewing.",
    impact: "Delivered an impactful presentation deck that enhanced audience retention and clearly structured the historical data."
  },
];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState<'web' | 'academic' | 'creative' | 'presentations'>('web');
  const [selectedProject, setSelectedProject] = useState<typeof allPortfolio[0] | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const currentFiltered = allPortfolio.filter(p => p.cat === activeCategory);
  const selectedIndex = currentFiltered.findIndex(p => p.title === selectedProject?.title);

  return (
    <section id="portfolio" className="relative min-h-screen w-full bg-zinc-50 dark:bg-zinc-950 py-24 transition-colors duration-500 text-zinc-900 dark:text-white">
      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-white/90 dark:bg-black/90 backdrop-blur-md overflow-y-auto"
            onClick={() => setSelectedProject(null)}
          >
            {activeCategory === 'web' ? (
              <motion.div 
                initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.95, opacity: 0 }}
                className="bg-white dark:bg-black border border-zinc-200 dark:border-white/10 w-full max-w-5xl flex flex-col md:flex-row shadow-2xl relative overflow-hidden my-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <button onClick={() => setSelectedProject(null)} className="absolute top-4 right-4 z-10 text-zinc-900 dark:text-white hover:text-pink-500"><X size={24} /></button>
                
                <div className="w-full md:w-1/2 bg-zinc-900 relative min-h-75 md:min-h-125">
                  <Image src={selectedProject.image} alt={selectedProject.title} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover object-top" />
                  <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent pointer-events-none md:hidden" />
                </div>

                <div className="w-full md:w-1/2 p-8 md:p-10 flex flex-col justify-between max-h-[85vh] overflow-y-auto">
                  <div>
                    <span className="text-pink-500 font-bold text-[10px] tracking-[0.2em] uppercase mb-2 block">{`0${selectedIndex + 1} | ${selectedProject.role.toUpperCase()}`}</span>
                    <h2 className="text-3xl md:text-4xl font-black uppercase mb-4 leading-tight text-pink-500">{selectedProject.title.toUpperCase()}</h2>
                    <p className="text-zinc-600 dark:text-zinc-300 mb-6 leading-relaxed text-sm">{selectedProject.desc}</p>
                    
                    {selectedProject.problem && (
                      <div className="space-y-4 mb-6 border-l-2 border-pink-500 pl-4 py-1 text-xs">
                        <div>
                          <strong className="text-zinc-950 dark:text-white uppercase tracking-wider block mb-1">The Problem (Why):</strong>
                          <p className="text-zinc-600 dark:text-zinc-400">{selectedProject.problem}</p>
                        </div>
                        <div>
                          <strong className="text-zinc-950 dark:text-white uppercase tracking-wider block mb-1">The Process:</strong>
                          <p className="text-zinc-600 dark:text-zinc-400">{selectedProject.process}</p>
                        </div>
                        <div>
                          <strong className="text-zinc-950 dark:text-white uppercase tracking-wider block mb-1">Business Impact Metrics:</strong>
                          <p className="text-zinc-600 dark:text-zinc-400">{selectedProject.impact}</p>
                        </div>
                      </div>
                    )}

                    <div className="flex flex-wrap gap-2 mb-6">
                      {selectedProject.tools.split('&').map((tool) => (
                        <span key={tool} className="px-3 py-1 border border-zinc-200 dark:border-white/20 text-xs text-zinc-900 dark:text-white uppercase tracking-widest">{tool.trim()}</span>
                      ))}
                    </div>
                  </div>

                  <a href={selectedProject.link} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-pink-500 text-white py-4 font-bold uppercase tracking-widest hover:bg-pink-600 transition-colors">
                    EXPLORE PROJECT <ExternalLink size={16} />
                  </a>
                </div>
              </motion.div>
            ) : activeCategory === 'presentations' ? (
              <motion.div 
                initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.95, opacity: 0 }}
                className="bg-white dark:bg-black border border-zinc-200 dark:border-white/10 w-full max-w-5xl flex flex-col md:flex-row shadow-2xl relative overflow-hidden my-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <button onClick={() => setSelectedProject(null)} className="absolute top-4 right-4 z-10 text-zinc-900 dark:text-white hover:text-pink-500"><X size={24} /></button>
                
                <div className="w-full md:w-1/2 bg-zinc-900 relative min-h-75 md:min-h-125">
                  <Image src={selectedProject.image} alt={selectedProject.title} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover object-center" />
                  <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent pointer-events-none md:hidden" />
                </div>

                <div className="w-full md:w-1/2 p-8 md:p-10 flex flex-col justify-between max-h-[85vh] overflow-y-auto">
                  <div>
                    <span className="text-pink-500 font-bold text-[10px] tracking-[0.2em] uppercase mb-2 block">{`0${selectedIndex + 1} | ${selectedProject.role.toUpperCase()}`}</span>
                    <h2 className="text-3xl md:text-4xl font-black uppercase mb-4 leading-tight text-pink-500">{selectedProject.title.toUpperCase()}</h2>
                    <p className="text-zinc-600 dark:text-zinc-300 mb-6 leading-relaxed text-sm">{selectedProject.desc}</p>
                    
                    {selectedProject.problem && (
                      <div className="space-y-4 mb-6 border-l-2 border-pink-500 pl-4 py-1 text-xs">
                        <div>
                          <strong className="text-zinc-950 dark:text-white uppercase tracking-wider block mb-1">The Objective:</strong>
                          <p className="text-zinc-600 dark:text-zinc-400">{selectedProject.problem}</p>
                        </div>
                        <div>
                          <strong className="text-zinc-950 dark:text-white uppercase tracking-wider block mb-1">The Process:</strong>
                          <p className="text-zinc-600 dark:text-zinc-400">{selectedProject.process}</p>
                        </div>
                        <div>
                          <strong className="text-zinc-950 dark:text-white uppercase tracking-wider block mb-1">Impact:</strong>
                          <p className="text-zinc-600 dark:text-zinc-400">{selectedProject.impact}</p>
                        </div>
                      </div>
                    )}

                    <div className="flex flex-wrap gap-2 mb-6">
                      {selectedProject.tools.split('&').map((tool) => (
                        <span key={tool} className="px-3 py-1 border border-zinc-200 dark:border-white/20 text-xs text-zinc-900 dark:text-white uppercase tracking-widest">{tool.trim()}</span>
                      ))}
                    </div>
                  </div>

                  <a href={selectedProject.link} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-pink-500 text-white py-4 font-bold uppercase tracking-widest hover:bg-pink-600 transition-colors">
                    OPEN MAGAZINE <ExternalLink size={16} />
                  </a>
                </div>
              </motion.div>
            ) : activeCategory === 'academic' && selectedProject?.title === 'Priori-App Magazine' ? (
              <motion.div 
                initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.95, opacity: 0 }}
                className="bg-white dark:bg-black border border-zinc-200 dark:border-white/10 w-full max-w-5xl flex flex-col md:flex-row shadow-2xl relative overflow-hidden my-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <button onClick={() => setSelectedProject(null)} className="absolute top-4 right-4 z-10 text-zinc-900 dark:text-white hover:text-pink-500"><X size={24} /></button>
                
                <div className="w-full md:w-1/2 bg-zinc-900 relative min-h-75 md:min-h-125">
                  <Image src={selectedProject.image} alt={selectedProject.title} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover object-top" />
                  <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent pointer-events-none md:hidden" />
                </div>

                <div className="w-full md:w-1/2 p-8 md:p-10 flex flex-col justify-between max-h-[85vh] overflow-y-auto">
                  <div>
                    <span className="text-pink-500 font-bold text-[10px] tracking-[0.2em] uppercase mb-2 block">{`0${selectedIndex + 1} | ${selectedProject.role.toUpperCase()}`}</span>
                    <h2 className="text-3xl md:text-4xl font-black uppercase mb-4 leading-tight text-pink-500">{selectedProject.title.toUpperCase()}</h2>
                    <p className="text-zinc-600 dark:text-zinc-300 mb-6 leading-relaxed text-sm">{selectedProject.desc}</p>
                    
                    {selectedProject.problem && (
                      <div className="space-y-4 mb-6 border-l-2 border-pink-500 pl-4 py-1 text-xs">
                        <div>
                          <strong className="text-zinc-950 dark:text-white uppercase tracking-wider block mb-1">The Objective:</strong>
                          <p className="text-zinc-600 dark:text-zinc-400">{selectedProject.problem}</p>
                        </div>
                        <div>
                          <strong className="text-zinc-950 dark:text-white uppercase tracking-wider block mb-1">The Process:</strong>
                          <p className="text-zinc-600 dark:text-zinc-400">{selectedProject.process}</p>
                        </div>
                        <div>
                          <strong className="text-zinc-950 dark:text-white uppercase tracking-wider block mb-1">Impact:</strong>
                          <p className="text-zinc-600 dark:text-zinc-400">{selectedProject.impact}</p>
                        </div>
                      </div>
                    )}

                    <div className="flex flex-wrap gap-2 mb-6">
                      {selectedProject.tools.split('&').map((tool) => (
                        <span key={tool} className="px-3 py-1 border border-zinc-200 dark:border-white/20 text-xs text-zinc-900 dark:text-white uppercase tracking-widest">{tool.trim()}</span>
                      ))}
                    </div>
                  </div>

                  <a href={selectedProject.link} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-pink-500 text-white py-4 font-bold uppercase tracking-widest hover:bg-pink-600 transition-colors">
                    OPEN MAGAZINE <ExternalLink size={16} />
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
        <div className="mb-8 text-left">
          <motion.div initial={{ opacity: 0, y: -10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex items-center gap-3 mb-3">
            <div className="h-px w-6 bg-pink-500" />
            <span className="text-pink-500 font-mono text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase">Portfolio</span>
          </motion.div>
          <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl md:text-5xl lg:text-5xl font-extrabold tracking-tight uppercase text-zinc-950 dark:text-white mb-4">
            Project <span className="text-pink-500 font-light italic">Gallery.</span>
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-zinc-600 dark:text-zinc-400 text-sm md:text-base max-w-2xl leading-relaxed">
            Here&apos;s a selection of my recent work, showcasing my passion and skills in crafting seamless, user-centric, and visually compelling digital interfaces.
          </motion.p>
        </div>
        
        <div className="flex flex-wrap gap-4 mb-12">
          {(['web', 'academic', 'creative', 'presentations'] as const).map((cat) => (
            <button key={cat} onClick={() => setActiveCategory(cat)} className={`px-8 py-3 rounded-full text-[10px] font-bold uppercase tracking-widest border transition-all ${activeCategory === cat ? "bg-pink-500 border-pink-500 text-white" : "border-zinc-200 dark:border-zinc-800 text-zinc-500 hover:border-zinc-600"}`}>
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {currentFiltered.map((project) => (
            <motion.div 
              key={project.title}
              whileHover={{ scale: 1.01 }}
              onClick={() => setSelectedProject(project)}
              onMouseMove={(e) => {
                if (window.innerWidth >= 768) {
                  const rect = e.currentTarget.getBoundingClientRect();
                  setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
                }
              }}
              className="group relative bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              <div className={`relative w-full ${activeCategory === 'presentations' ? 'aspect-16/10' : 'aspect-4/3'} overflow-hidden bg-zinc-100 dark:bg-zinc-950`}>
                <div className="absolute inset-0 grayscale blur-xs md:grayscale md:blur-xs group-hover:grayscale-0 group-hover:blur-0 transition-all duration-500">
                  <Image src={project.image} alt={project.title} fill sizes="(max-width: 768px) 100vw, 33vw" className={activeCategory === 'presentations' ? "object-cover object-top" : "object-cover object-center"} />
                </div>

                <div 
                  className="hidden md:block absolute inset-0 transition-opacity duration-300 opacity-0 group-hover:opacity-100"
                  style={{
                    WebkitMaskImage: `radial-gradient(circle 100px at ${mousePos.x}px ${mousePos.y}px, black, transparent)`,
                    maskImage: `radial-gradient(circle 100px at ${mousePos.x}px ${mousePos.y}px, black, transparent)`,
                  }}
                >
                  <Image src={project.image} alt={project.title} fill sizes="33vw" className={activeCategory === 'presentations' ? "object-cover object-top" : "object-cover object-center"} />
                </div>
              </div>

              <div className="p-6 flex flex-col grow justify-between">
                <div>
                  <span className="text-zinc-500 dark:text-zinc-400 text-[10px] font-bold tracking-widest uppercase mb-1.5 block">{project.platform || "Mobile App"}</span>
                  <h3 className="text-xl font-bold text-pink-500 tracking-tight mb-2 transition-colors">{project.title}</h3>
                  <p className="text-xs text-zinc-600 dark:text-zinc-400 line-clamp-2 leading-relaxed">{project.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}