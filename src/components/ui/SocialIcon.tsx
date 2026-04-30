'use client';
import { motion, useSpring, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';

interface SocialIconProps {
  name: string;
  url: string;
}

export default function SocialIcon({ name, url }: SocialIconProps) {
  const ref = useRef<HTMLAnchorElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // High-response springs for a "weightless" feel
  const x = useSpring(0, { stiffness: 150, damping: 15 });
  const y = useSpring(0, { stiffness: 150, damping: 15 });

  // 3D Rotation based on mouse position
  // When mouse is at -40px (left), rotateY is -25 degrees
  const rotateX = useTransform(y, [-40, 40], [25, -25]);
  const rotateY = useTransform(x, [-40, 40], [-25, 25]);

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!ref.current) return;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    
    // Calculate distance from center
    const mouseX = e.clientX - (left + width / 2);
    const mouseY = e.clientY - (top + height / 2);

    x.set(mouseX);
    y.set(mouseY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  };

  return (
    <motion.a
      ref={ref}
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={() => setIsHovered(true)}
      className="relative flex items-center justify-center w-16 h-16 group"
      style={{ perspective: '600px' }} // Critical for the 3D tilt effect
    >
      {/* 1. THE 3D ICON - NO BACKGROUND DESIGN */}
      <motion.div
        className="relative z-10 w-full h-full p-2"
        style={{ 
          x, 
          y, 
          rotateX, 
          rotateY,
          transformStyle: "preserve-3d" 
        }}
        animate={isHovered ? { 
          scale: 1.3,
          filter: "drop-shadow(0 25px 35px rgba(236, 72, 153, 0.5))" 
        } : { 
          scale: 1,
          filter: "drop-shadow(0 0px 0px rgba(0,0,0,0))" 
        }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
      >
        <img 
          src={`/icons/${name}.png`} 
          alt={name} 
          className="w-full h-full object-contain select-none"
        />
      </motion.div>

      {/* 2. MINIMALIST TRACE (Optional) */}
      {/* A very faint glow that appears ONLY under the icon to keep it clean */}
      <motion.div 
        className="absolute inset-0 bg-pink-500/10 rounded-full blur-2xl -z-10"
        style={{ x: x, y: y }}
        animate={isHovered ? { opacity: 1, scale: 1.2 } : { opacity: 0, scale: 0.8 }}
      />
    </motion.a>
  );
}