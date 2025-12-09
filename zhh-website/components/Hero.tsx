'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import HeroSlider from './HeroSlider';

export default function Hero() {
  const stats = [
    { value: 'AED 100M+', label: 'Assets Under Management' },
    { value: '20+', label: 'Years of Growth' },
    { value: '10+', label: 'Countries of Operations' },
  ];

  return (
    <section 
      id="hero-section"
      className="relative w-full flex items-center justify-center overflow-hidden" 
      style={{ 
        height: '100vh',
        minHeight: '600px',
        marginTop: '0', 
        paddingTop: '0', 
        marginBottom: '0' 
      }}
    >
      {/* Logo - Small, Clear, Fixed in Corner (Mubadala Style) */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        style={{
          position: 'absolute',
          top: 'clamp(24px, 3vw, 32px)',
          left: 'clamp(24px, 3vw, 40px)',
          zIndex: 30,
          display: 'flex',
          alignItems: 'center',
          gap: '12px'
        }}
      >
        <Link 
          href="/" 
          className="flex items-center gap-2"
          style={{ textDecoration: 'none' }}
        >
          {/* Logo Icon - Medium for Hero */}
          <div style={{ 
            width: 'clamp(90px, 12vw, 140px)',
            height: 'clamp(90px, 12vw, 140px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <img
              src="/assets/logos/zhh-group-holding-logo.svg"
              alt="ZHH Group Holding"
              style={{ 
                width: '100%',
                height: '100%',
                objectFit: 'contain',
                display: 'block'
              }}
            />
          </div>
          {/* Text */}
          <span 
            style={{
              fontFamily: '"Montserrat", sans-serif',
              fontSize: 'clamp(15px, 1.9vw, 19px)',
              fontWeight: 600,
              letterSpacing: '0.5px',
              color: '#01B2B2',
              textTransform: 'uppercase'
            }}
          >
            ZHH GROUP HOLDING
          </span>
        </Link>
      </motion.div>

      {/* Background Slider */}
      <div className="absolute inset-0 z-0 w-full h-full">
        <HeroSlider />
      </div>

      {/* Minimal Overlay - No heavy effects */}
      <div 
        className="absolute inset-0 z-10 w-full h-full" 
        style={{ 
          background: 'linear-gradient(180deg, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0.02) 100%)' 
        }}
      />

      {/* Hero Text Content - Premium Design */}
      <div className="relative z-20 w-full h-full flex items-center justify-center px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="w-full max-w-[1320px] mx-auto">
          <div className="text-white" style={{ maxWidth: 'min(100%, 800px)' }}>
            {/* Main Title - Fade-in (0.6s) */}
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
              className="font-bold text-white mb-6"
              style={{ 
                fontFamily: 'var(--font-english-heading)',
                fontSize: 'clamp(36px, 5.1vw, 54px)',
                lineHeight: 1.15,
                letterSpacing: '-0.5px',
                fontWeight: 700,
                marginBottom: '20px',
                color: '#FFFFFF',
                textShadow: '0 4px 14px rgba(0, 0, 0, 0.35)'
              }}
            >
              ZHH Group Holding – Building a Legacy of Trust and Growth
            </motion.h1>

            {/* Sub-text - Slide-up (0.5s) */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
              className="text-white mb-12 leading-relaxed"
              style={{ 
                fontSize: 'clamp(15px, 2.1vw, 19px)',
                lineHeight: 1.6,
                fontWeight: 400,
                marginBottom: '41px',
                color: '#FFFFFF',
                textShadow: '0 4px 14px rgba(0, 0, 0, 0.35)'
              }}
            >
              ZHH Group Holding is a sovereign-style Emirati investor managing a diversified portfolio.
            </motion.p>
            
            {/* Stats - Staggered fade-in (0.3s each) */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.2,
                    delayChildren: 0.4
                  }
                }
              }}
              className="grid grid-cols-1 sm:grid-cols-3"
              style={{ gap: 'clamp(20px, 2.6vw, 27px)' }}
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { 
                      opacity: 1, 
                      y: 0,
                      transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] }
                    }
                  }}
                >
                  <div 
                    className="text-white font-bold mb-2" 
                    style={{ 
                      fontSize: 'clamp(27px, 3.4vw, 41px)',
                      lineHeight: 1.2,
                      fontWeight: 700,
                      marginBottom: '7px',
                      color: '#FFFFFF',
                      textShadow: '0 4px 14px rgba(0, 0, 0, 0.35)'
                    }}
                  >
                    {stat.value}
                  </div>
                  <div 
                    className="text-white" 
                    style={{ 
                      fontSize: 'clamp(12px, 1.3vw, 14px)',
                      lineHeight: 1.5,
                      opacity: 0.9,
                      fontWeight: 400,
                      color: '#FFFFFF',
                      textShadow: '0 4px 14px rgba(0, 0, 0, 0.35)'
                    }}
                  >
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

