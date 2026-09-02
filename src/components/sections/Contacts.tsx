'use client';
import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, Send, Globe } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-28 bg-white dark:bg-[#050505] text-zinc-900 dark:text-white relative overflow-hidden transition-colors duration-500">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-pink-500/5 dark:bg-pink-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[100rem] mx-auto px-6 md:px-24 relative z-10">
        
        {/* Main Card Container */}
        <div className="bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800/80 rounded-[2.5rem] p-8 md:p-16 shadow-lg shadow-zinc-200/50 dark:shadow-none">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* LEFT COLUMN: Info & Direct Contacts */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }} 
              whileInView={{ opacity: 1, x: 0 }} 
              viewport={{ once: true }} 
              className="lg:col-span-5 flex flex-col justify-between space-y-10"
            >
              <div>
                <motion.div 
                  initial={{ opacity: 0, y: -10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3 mb-3"
                >
                  <div className="h-px w-6 bg-pink-500" />
                  <span className="text-pink-600 dark:text-pink-500 font-mono text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase">
                    Get in Touch
                  </span>
                </motion.div>

                <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight mb-4">
                  Let’s discuss your <span className="text-pink-600 dark:text-pink-500 font-light italic">Project</span>
                </h2>
                <p className="text-sm md:text-base text-zinc-600 dark:text-zinc-400 font-light leading-relaxed">
                  I&apos;d love to hear about your vision! Whether you have an exciting freelance project or a creative collaboration in mind, let&apos;s build something exceptional together.
                </p>
              </div>

              {/* Contact Details List */}
              <div className="space-y-6">
                
                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="p-3.5 bg-pink-500/10 text-pink-600 dark:text-pink-400 rounded-2xl shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider block mb-1">Address:</span>
                    <p className="text-sm md:text-base font-medium text-zinc-900 dark:text-zinc-200">
                      Binangonan, Rizal
                    </p>
                  </div>
                </div>

                {/* Email */}
                <a href="mailto:catherinem.galang@gmail.com" className="flex items-start gap-4 group cursor-pointer">
                  <div className="p-3.5 bg-pink-500/10 text-pink-600 dark:text-pink-400 rounded-2xl shrink-0 group-hover:bg-pink-500 group-hover:text-white transition-all">
                    <Mail size={20} />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider block mb-1">My Email:</span>
                    <p className="text-sm md:text-base font-medium text-zinc-900 dark:text-zinc-200 group-hover:text-pink-500 transition-colors">
                      catherinem.galang@gmail.com
                    </p>
                  </div>
                </a>

                {/* Phone */}
                <a href="tel:+639499673244" className="flex items-start gap-4 group cursor-pointer">
                  <div className="p-3.5 bg-pink-500/10 text-pink-600 dark:text-pink-400 rounded-2xl shrink-0 group-hover:bg-pink-500 group-hover:text-white transition-all">
                    <Phone size={20} />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider block mb-1">Call Me Now:</span>
                    <p className="text-sm md:text-base font-medium text-zinc-900 dark:text-zinc-200 group-hover:text-pink-500 transition-colors">
                      +63 9696477014
                    </p>
                  </div>
                </a>

              </div>

              {/* Social Links */}
              <div className="flex items-center gap-3 pt-4 border-t border-zinc-200 dark:border-zinc-800">
                {/* LinkedIn */}
                <a href="https://www.linkedin.com/in/catherinemaeg/" target="_blank" rel="noopener noreferrer" className="p-3 bg-white dark:bg-black/40 border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 hover:text-pink-500 dark:hover:text-pink-400 hover:border-pink-500/50 rounded-xl transition-all shadow-xs" aria-label="LinkedIn">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
                {/* GitHub */}
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="p-3 bg-white dark:bg-black/40 border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 hover:text-pink-500 dark:hover:text-pink-400 hover:border-pink-500/50 rounded-xl transition-all shadow-xs" aria-label="GitHub">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
                {/* Facebook */}
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="p-3 bg-white dark:bg-black/40 border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 hover:text-pink-500 dark:hover:text-pink-400 hover:border-pink-500/50 rounded-xl transition-all shadow-xs" aria-label="Facebook">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.378 14.5 5 15.5 5H18V0h-3.808C10.59 0 9 1.588 9 4.71V8z"/>
                  </svg>
                </a>
                {/* Globe / Website */}
                <a href="https://catherinemelang.com" target="_blank" rel="noopener noreferrer" className="p-3 bg-white dark:bg-black/40 border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 hover:text-pink-500 dark:hover:text-pink-400 hover:border-pink-500/50 rounded-xl transition-all shadow-xs" aria-label="Website">
                  <Globe size={18} />
                </a>
              </div>

            </motion.div>

            {/* RIGHT COLUMN: Formspree Form */}
            <motion.form 
              action="https://formspree.io/f/mzdlgqgn" 
              method="POST"
              initial={{ opacity: 0, x: 20 }} 
              whileInView={{ opacity: 1, x: 0 }} 
              viewport={{ once: true }} 
              className="lg:col-span-7 bg-white dark:bg-[#121212] p-8 md:p-12 rounded-3xl border border-zinc-200 dark:border-zinc-800/80 shadow-sm"
            >
              <p className="text-sm text-zinc-600 dark:text-zinc-400 font-light mb-8">
                I&apos;m always open to discussing product design work or partnership opportunities.
              </p>

              <div className="space-y-6">
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <input 
                      type="text" 
                      name="name" 
                      placeholder="Name*" 
                      required 
                      className="bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 px-4 py-3.5 rounded-xl outline-none focus:border-pink-500 transition-colors w-full text-sm" 
                    />
                  </div>
                  <div>
                    <input 
                      type="email" 
                      name="email" 
                      placeholder="Email*" 
                      required 
                      className="bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 px-4 py-3.5 rounded-xl outline-none focus:border-pink-500 transition-colors w-full text-sm" 
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <input 
                      type="text" 
                      name="location" 
                      placeholder="Location*" 
                      className="bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 px-4 py-3.5 rounded-xl outline-none focus:border-pink-500 transition-colors w-full text-sm" 
                    />
                  </div>
                  <div>
                    <input 
                      type="text" 
                      name="budget" 
                      placeholder="Budget*" 
                      className="bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 px-4 py-3.5 rounded-xl outline-none focus:border-pink-500 transition-colors w-full text-sm" 
                    />
                  </div>
                </div>

                <div>
                  <input 
                    type="text" 
                    name="subject" 
                    placeholder="Subject*" 
                    required 
                    className="bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 px-4 py-3.5 rounded-xl outline-none focus:border-pink-500 transition-colors w-full text-sm" 
                  />
                </div>

                <div>
                  <textarea 
                    name="message" 
                    placeholder="Message*" 
                    required 
                    rows={4} 
                    className="bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 px-4 py-3.5 rounded-xl outline-none focus:border-pink-500 transition-colors w-full text-sm resize-none" 
                  />
                </div>
                
                <button 
                  type="submit" 
                  className="inline-flex items-center gap-3 px-8 py-4 bg-pink-600 hover:bg-pink-500 text-white font-bold rounded-xl transition-all uppercase tracking-widest text-xs shadow-md cursor-pointer"
                >
                  Submit <Send size={14} />
                </button>
              </div>
            </motion.form>

          </div>
        </div>

      </div>
    </section>
  );
}