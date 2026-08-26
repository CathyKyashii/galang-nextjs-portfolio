'use client';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import PreLoader from '@/components/sections/PreLoader';
import Hero from '@/components/sections/Hero';
import Navbar from '@/components/sections/Navbar';
import About from '@/components/sections/About';
import Competencies from '@/components/sections/Competencies';
import Projects from '@/components/sections/Projects';
import Experiences from '@/components/sections/Experiences';
import Services from '@/components/sections/Services';
import Contacts from '@/components/sections/Contacts';
import Footer from '@/components/sections/Footer';

export default function Home() {
  const [stage, setStage] = useState<'loading' | 'home'>('loading');

  return (
    <main className="bg-black min-h-screen selection:bg-pink-500/30">
      <AnimatePresence mode="wait">
        
        {stage === 'loading' && (
          <PreLoader 
            key="loader" 
            onCompleteAction={() => setStage('home')} 
          />
        )}

        {stage === 'home' && (
          <motion.div 
            key="main-content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="flex flex-col overflow-x-hidden"
          >
            <Navbar />
            
            <div className="flex flex-col">
              <Hero />
              <About />
              <Competencies />
              <Projects />
              <Experiences />
              <Services />
              <Contacts />
              <Footer />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}