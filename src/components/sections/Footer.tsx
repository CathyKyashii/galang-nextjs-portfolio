'use client';
export default function Footer() {
  const footerNavItems = [
    { name: 'About', href: '#about' },
    { name: 'Mastery', href: '#mastery' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experiences', href: '#experiences' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-zinc-950 text-white py-12 border-t border-zinc-900">
      <div className="max-w-[100rem] mx-auto px-6 md:px-24 flex flex-col md:flex-row items-center justify-between gap-8">
        
        {/* Left: Brand / Logo */}
        <a 
          href="#prologue" 
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="cursor-pointer flex items-center gap-3 group"
        >
          <div className="w-10 h-10 rounded-xl bg-linear-to-br from-pink-500 to-pink-700 flex items-center justify-center font-black text-white text-lg tracking-wider shadow-md group-hover:scale-105 transition-transform">
            CG
          </div>
          <span className="text-lg font-black tracking-[0.2em] uppercase text-white">
            Cathy.Dev
          </span>
        </a>

        {/* Center: Clickable Navigation Links */}
        <nav className="flex flex-wrap items-center justify-center gap-6 md:gap-8">
          {footerNavItems.map((item) => (
            <a 
              key={item.name} 
              href={item.href}
              className="text-xs uppercase tracking-[0.2em] font-bold text-zinc-400 hover:text-pink-500 transition-colors"
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Right: Copyright & Developer Info */}
        <div className="flex flex-col md:items-end text-center md:text-right gap-1">
          <p className="text-xs text-zinc-400 tracking-wider font-medium">
            Copyright © {new Date().getFullYear()} Catherine Mae.
          </p>
          <a 
            href="#contact" 
            className="text-[11px] text-pink-500 hover:text-pink-400 font-mono tracking-widest uppercase transition-colors"
          >
            Developed by Catherine Mae Galang
          </a>
        </div>

      </div>
    </footer>
  );
}