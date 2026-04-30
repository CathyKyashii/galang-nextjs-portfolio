'use client';
import { motion } from 'framer-motion';

export default function Splash({ onFinishAction }: { onFinishAction: () => void }) {
  return (
    <motion.div 
      onClick={onFinishAction} 
      className="fixed inset-0 z-100 bg-black flex flex-col items-center justify-center cursor-pointer"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, filter: "blur(10px)" }}
      transition={{ duration: 0.8 }}
    >
      <div className="text-center space-y-2">
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-zinc-500 text-sm tracking-widest uppercase"
        >
          Hello, I'm
        </motion.p>
        
        {/* Updated with the premium pink gradient */}
        <motion.h1 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="bg-linear-to-r from-white via-pink-200 to-pink-400 bg-clip-text text-transparent text-4xl md:text-6xl font-bold tracking-tight px-4 drop-shadow-[0_0_15px_rgba(236,72,153,0.3)]"
        >
          CATHERINE MAE GALANG
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-zinc-400 text-sm italic"
        >
          Welcome to my Portfolio Website
        </motion.p>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.3, 1, 0.3] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 text-pink-300/60 text-[10px] uppercase tracking-[0.4em] font-medium"
      >
        Click anywhere to enter
      </motion.div>
    </motion.div>
  );
}