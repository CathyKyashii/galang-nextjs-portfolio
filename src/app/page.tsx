'use client';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import PreLoader from '@/components/sections/PreLoader';
import Splash from '@/components/sections/Splash';
import Hero from '@/components/sections/Hero';
import Navbar from '@/components/sections/Navbar';
import About from '@/components/sections/About';
import Education from '@/components/sections/Education';
import Competencies from '@/components/sections/Competencies'; 
// IMPORT PROJECTS HERE:
import Projects from '@/components/sections/Projects';

export default function Home() {
  const [stage, setStage] = useState<'loading' | 'splash' | 'home'>('loading');

  return (
    <main className="bg-black min-h-screen selection:bg-pink-500/30">
      <AnimatePresence mode="wait">
        
        {stage === 'loading' && (
          <PreLoader 
            key="loader" 
            onCompleteAction={() => setStage('splash')} 
          />
        )}

        {stage === 'splash' && (
          <Splash 
            key="splash" 
            onFinishAction={() => setStage('home')} 
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
              <Education />
              <Competencies />
              {/* ADD PROJECTS HERE: */}
              <Projects />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}