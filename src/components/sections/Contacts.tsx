'use client';
import { motion } from 'framer-motion';
import { Send, ArrowRight } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-white dark:bg-[#0a0a0a] transition-colors duration-500 overflow-hidden">
      <div className="max-w-[100rem] mx-auto px-6 md:px-24">
        
        {/* LARGE EDITORIAL HEADER */}
        <div className="mb-24">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.95 }} 
            whileInView={{ opacity: 1, scale: 1 }} 
            viewport={{ once: true }} 
            className="text-5xl md:text-[12rem] font-black uppercase italic tracking-tighter text-zinc-950 dark:text-white"
          >
            LET'S <span className="text-pink-500 not-italic">TALK.</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* LEFT: IMPACT STATEMENT */}
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="lg:col-span-5 flex flex-col justify-between">
            <p className="text-xl md:text-3xl font-medium text-zinc-950 dark:text-zinc-200 leading-tight">
              Ready to start your next big project? Or just want to exchange ideas? I'm always looking for new opportunities to collaborate.
            </p>
            
            <a href="mailto:catherinem.galang@gmail.com" className="group flex items-center gap-6 mt-12 py-6 border-b border-zinc-200 dark:border-zinc-800 hover:border-pink-500 transition-colors">
              <span className="text-lg font-mono">catherinem.galang@gmail.com</span>
              <div className="p-4 rounded-full bg-zinc-100 dark:bg-zinc-900 group-hover:bg-pink-500 group-hover:text-white transition-all">
                <ArrowRight size={24} />
              </div>
            </a>
          </motion.div>

          {/* RIGHT: INTEGRATED FORM */}
          <motion.form 
            action="https://formspree.io/f/mzdlgqgn" 
            method="POST"
            initial={{ opacity: 0, x: 30 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true }} 
            className="lg:col-span-7 bg-zinc-50 dark:bg-[#111] p-10 md:p-16 rounded-[3rem] border border-zinc-100 dark:border-zinc-900"
          >
            <div className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <input type="text" name="name" placeholder="Your Name" required className="bg-transparent border-b border-zinc-300 dark:border-zinc-700 py-4 outline-none focus:border-pink-500 transition-colors w-full" />
                <input type="email" name="email" placeholder="Your Email" required className="bg-transparent border-b border-zinc-300 dark:border-zinc-700 py-4 outline-none focus:border-pink-500 transition-colors w-full" />
              </div>
              <textarea name="message" placeholder="Tell me about your project..." required rows={4} className="bg-transparent border-b border-zinc-300 dark:border-zinc-700 py-4 outline-none focus:border-pink-500 transition-colors w-full" />
              
              <button type="submit" className="flex items-center gap-3 px-10 py-5 bg-pink-500 text-white font-bold rounded-full hover:bg-zinc-950 dark:hover:bg-white dark:hover:text-zinc-950 transition-all uppercase tracking-widest text-sm">
                Send Message <Send size={16} />
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}