import React from 'react';
import Link from 'next/link';

interface NotFoundProps {
  title?: string;
  description?: string;
  homeLinkText?: string;
}

export default function NotFound({
 title = 'Page Not Found',
  description = 'Sorry, the page you are looking for does not exist in our oasis. It might have been moved or deleted.',
  homeLinkText = 'Back to Home',
}: NotFoundProps) {
  return (
    <div className="flex min-h-screen items-center justify-center  p-4 relative overflow-hidden font-sans">
       {/* Background decorations */}
       {/* <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-yellow/10 blur-[100px] pointer-events-none" />
       <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-yellow/10 blur-[100px] pointer-events-none" /> */}

      <div className=" relative z-10 w-full max-w-2xl rounded-3xl bg-white/5 p-8 sm:p-12 backdrop-blur-md shadow-2xl border border-white/10 text-center flex flex-col items-center transform transition-all duration-500 hover:scale-[1.01]">
        
        {/* Animated 404 Graphic */}
        <section className="mb-8 flex items-center justify-center gap-4 font-mono text-[100px] sm:text-[150px] font-extrabold leading-none select-none" dir="ltr">
          {/* First Digit (4) */}
          <span className="animate-color-1 inline-block drop-shadow-[0_0_15px_rgba(209,242,165,0.5)]">
            4
          </span>

          {/* Animated Zero (0) */}
          <div className="relative flex items-center justify-center">
            <span className="animate-shadows-dancing relative inline-block h-[70px] w-[70px] sm:h-[100px] sm:w-[100px] rounded-full" />
            <span className="absolute text-yellow text-4xl sm:text-6xl font-sans drop-shadow-md">0</span>
          </div>

          {/* Third Digit (4) */}
          <span className="animate-color-2 inline-block drop-shadow-[0_0_15px_rgba(245,105,145,0.5)]">
            4
          </span>
        </section>

        {/* Title */}
        <h1 className="mb-4 text-3xl font-bold tracking-tight text-white sm:text-5xl drop-shadow-sm">
          {title}
        </h1>

        {/* Description */}
        <p className="mb-10 max-w-md text-lg text-white/80 leading-relaxed">
          {description}
        </p>

        {/* Navigation Link */}
        <Link
          href="/"
          className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-yellow px-8 py-4 font-semibold text-dark shadow-[0_0_20px_rgba(198,153,99,0.3)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(198,153,99,0.5)] focus:outline-none focus:ring-2 focus:ring-yellow focus:ring-offset-2 focus:ring-offset-dark"
        >
          <span className="relative z-10 text-lg">{homeLinkText}</span>
          <div className="absolute inset-0 z-0 h-full w-full bg-white/30 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-right" />
        </Link>
      </div>
     </div>
  );
}