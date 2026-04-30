import Image from 'next/image';

export const Logo = () => (
  /* We wrap it in a div so we can keep your hover animation.
     'group-hover:rotate-12' will work when you hover over the logo 
     or its parent container in the Navbar.
  */
  <div className="relative w-8 h-8 group-hover:rotate-12 transition-transform duration-300 ease-in-out">
    <Image 
      src="/portfoliologo.svg" 
      alt="Catherine Mae Galang Logo"
      fill // This makes the image fill the 8x8 (32px) container
      className="object-contain"
      priority // Ensures the logo loads immediately
    />
  </div>
);