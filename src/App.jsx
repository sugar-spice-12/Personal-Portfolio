import { BrowserRouter } from "react-router-dom";
import React, { useEffect, useRef } from 'react';
import Spline from '@splinetool/react-spline';

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";

// Blobs background component
const BlobsBackground = () => {
  const blob1Ref = useRef(null);
  const blob2Ref = useRef(null);
  const blob3Ref = useRef(null);
  const blob4Ref = useRef(null);
  const blob5Ref = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      if (blob1Ref.current) blob1Ref.current.style.transform = `translateY(${y * 0.15}px) scale(1.05)`;
      if (blob2Ref.current) blob2Ref.current.style.transform = `translateY(${y * 0.25}px) scale(1.1)`;
      if (blob3Ref.current) blob3Ref.current.style.transform = `translateY(${y * 0.18}px) scale(0.95)`;
      if (blob4Ref.current) blob4Ref.current.style.transform = `translateY(${y * 0.12}px) scale(1.2)`;
      if (blob5Ref.current) blob5Ref.current.style.transform = `translateY(${y * 0.22}px) scale(0.85)`;
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      zIndex: -1,
      overflow: 'hidden',
      pointerEvents: 'none',
      background: 'radial-gradient(ellipse at 60% 20%, #23234a 0%, #181824 100%)',
    }}>
      {/* Main blobs with blur and drop-shadow for 3D effect */}
      <svg ref={blob1Ref} style={{ position: 'absolute', top: '-10%', left: '-10%', filter: 'blur(8px) drop-shadow(0 8px 32px #8d5cf6aa)', willChange: 'transform' }} width="500" height="500" viewBox="0 0 500 500">
        <defs>
          <radialGradient id="blob1" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#8d5cf6" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#23234a" stopOpacity="0.1" />
          </radialGradient>
        </defs>
        <ellipse cx="250" cy="250" rx="200" ry="180" fill="url(#blob1)">
          <animate attributeName="rx" values="200;220;200" dur="8s" repeatCount="indefinite" />
          <animate attributeName="ry" values="180;200;180" dur="7s" repeatCount="indefinite" />
        </ellipse>
      </svg>
      <svg ref={blob2Ref} style={{ position: 'absolute', bottom: '-15%', right: '-10%', filter: 'blur(12px) drop-shadow(0 8px 32px #f064a388)', willChange: 'transform' }} width="400" height="400" viewBox="0 0 400 400">
        <defs>
          <radialGradient id="blob2" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#f064a3" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#23234a" stopOpacity="0.1" />
          </radialGradient>
        </defs>
        <ellipse cx="200" cy="200" rx="150" ry="130" fill="url(#blob2)">
          <animate attributeName="rx" values="150;170;150" dur="10s" repeatCount="indefinite" />
          <animate attributeName="ry" values="130;150;130" dur="9s" repeatCount="indefinite" />
        </ellipse>
      </svg>
      <svg ref={blob3Ref} style={{ position: 'absolute', top: '40%', left: '60%', filter: 'blur(10px) drop-shadow(0 8px 32px #a97cdf88)', willChange: 'transform' }} width="300" height="300" viewBox="0 0 300 300">
        <defs>
          <radialGradient id="blob3" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#a97cdf" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#23234a" stopOpacity="0.1" />
          </radialGradient>
        </defs>
        <ellipse cx="150" cy="150" rx="100" ry="90" fill="url(#blob3)">
          <animate attributeName="rx" values="100;120;100" dur="12s" repeatCount="indefinite" />
          <animate attributeName="ry" values="90;110;90" dur="11s" repeatCount="indefinite" />
        </ellipse>
      </svg>
      {/* Extra blobs for more depth */}
      <svg ref={blob4Ref} style={{ position: 'absolute', top: '70%', left: '10%', filter: 'blur(18px) drop-shadow(0 8px 32px #fff8eb44)', opacity: 0.5, willChange: 'transform' }} width="250" height="250" viewBox="0 0 250 250">
        <ellipse cx="125" cy="125" rx="90" ry="80" fill="#fff8eb" />
      </svg>
      <svg ref={blob5Ref} style={{ position: 'absolute', top: '10%', right: '15%', filter: 'blur(14px) drop-shadow(0 8px 32px #8d5cf644)', opacity: 0.4, willChange: 'transform' }} width="180" height="180" viewBox="0 0 180 180">
        <ellipse cx="90" cy="90" rx="70" ry="60" fill="#8d5cf6" />
      </svg>
    </div>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <div
        className="relative z-0 min-h-screen overflow-hidden"
        style={{
          background: "linear-gradient(120deg, #181824 0%, #23234a 60%, #8d5cf6 100%)",
          animation: "gradientBG 10s ease-in-out infinite",
          backgroundSize: "200% 200%",
        }}
      >
        <div className='relative z-0' style={{ minHeight: '100vh' }}>
          <div>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
          {/* Projects Section */}
          <section id="projects" className="relative z-10 rounded-3xl shadow-2xl max-w-7xl mx-auto my-16 px-6 py-12">
        <Works />
          </section>
        <Feedbacks />
        <div className='relative z-0'>
          <Contact />
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
