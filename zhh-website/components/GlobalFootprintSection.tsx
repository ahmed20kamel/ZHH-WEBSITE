'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { fadeInUp } from '@/lib/animations';
import Counter from './Counter';

const keyHighlights = [
  { 
    value: 'AED 100M+', 
    label: 'Assets Under Management',
    description: 'Strong financial foundation with diversified portfolio'
  },
  { 
    value: '70+', 
    label: 'Completed Projects',
    description: 'Proven track record of successful delivery'
  },
  { 
    value: '12B+ AED', 
    label: 'Total Project Value',
    description: 'Significant investments across all divisions'
  },
  { 
    value: '300+', 
    label: 'Direct Employees',
    subLabel: '1,200+ Indirect',
    description: 'Growing team of professionals'
  },
  { 
    value: '1.2 Tons', 
    label: 'Gold Traded',
    description: 'Ethical sourcing and trading operations'
  },
  { 
    value: '180+', 
    label: 'Trade Contracts Executed',
    description: 'Global trade partnerships'
  },
  { 
    value: '24', 
    label: 'Major Construction Projects',
    description: 'Infrastructure and development excellence'
  },
  { 
    value: '10+', 
    label: 'Presence in Countries',
    description: 'Expanding global footprint'
  },
];

export default function GlobalFootprintSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section 
      ref={sectionRef}
      className="section-unified bg-white relative overflow-hidden"
      style={{
        paddingTop: 'clamp(68px, 8.5vw, 102px)',
        paddingBottom: 'clamp(68px, 8.5vw, 102px)',
        minHeight: '600px'
      }}
    >
      {/* Background Video Container - Fixed Position */}
      <div
        className="numbers-video-wrapper"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          width: '100%',
          height: '100%',
          zIndex: 1,
          overflow: 'hidden',
          pointerEvents: 'none'
        }}
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center',
            opacity: 0.25,
            pointerEvents: 'none',
            zIndex: 1
          }}
        >
          <source src="/assets/videos/global-stats-bg.mp4" type="video/mp4" />
        </video>
        {/* Fallback gradient if video doesn't load - behind video */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            width: '100%',
            height: '100%',
            background: 'linear-gradient(135deg, #F0FDFF 0%, #E5F7FA 50%, #D0F0F5 100%)',
            zIndex: 0
          }}
        />
      </div>

      <div className="container-unified" style={{ position: 'relative', zIndex: 2 }}>
        {/* Section Title - Centered */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeInUp}
          style={{ 
            marginBottom: 'clamp(48px, 6vw, 80px)',
            textAlign: 'center',
            width: '100%',
            maxWidth: '100%',
            marginLeft: 'auto',
            marginRight: 'auto',
            paddingLeft: 0,
            paddingRight: 0
          }}
        >
          <h2
            style={{
              fontFamily: 'var(--font-english-heading)',
              fontSize: 'clamp(36px, 4.7vw, 58px)',
              lineHeight: 1.2,
              fontWeight: 700,
              color: '#032D46',
              marginBottom: 'clamp(20px, 2.6vw, 27px)',
              textAlign: 'center',
              width: '100%',
              marginLeft: 'auto',
              marginRight: 'auto'
            }}
          >
            Our Global Footprint in Numbers
          </h2>
        </motion.div>

        {/* Two Column Layout - Text Left, Numbers Right */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 'clamp(34px, 4.3vw, 68px)',
            alignItems: 'center',
            position: 'relative',
            zIndex: 2
          }}
        >
          {/* Left Column - Description Text */}
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={fadeInUp}
            style={{
              maxWidth: '600px',
              position: 'relative',
              zIndex: 2
            }}
          >
            <p
              style={{
                fontFamily: '"Montserrat", sans-serif',
                fontSize: 'clamp(17px, 2vw, 21px)',
                lineHeight: 1.8,
                color: '#333333',
                fontWeight: 400
              }}
            >
              ZHH Group Holding is a diversified Emirati conglomerate managing a diverse portfolio of assets across construction, real estate, global trading, and precious metals. Our commitment to excellence, innovation, and responsible growth drives our success across the UAE and beyond.
            </p>
        </motion.div>

          {/* Right Column - Large Numbers with Video Background Effect */}
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={fadeInUp}
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 'clamp(27px, 3.4vw, 41px)',
              alignItems: 'flex-end',
              position: 'relative'
            }}
          >
            {/* Main Statistic - Large Number with Video Through Effect */}
            <div
              style={{
                position: 'relative',
                width: '100%',
                maxWidth: '600px',
                textAlign: 'right',
                isolation: 'isolate'
              }}
            >
              {/* Background Video Layer for Number Cutout */}
              <div
                style={{
                  position: 'absolute',
                  top: '-30%',
                  left: '-30%',
                  width: '160%',
                  height: '160%',
                  zIndex: 0,
                  overflow: 'hidden',
                  pointerEvents: 'none',
                  borderRadius: '50%',
                  filter: 'blur(2px) brightness(0.7) contrast(1.3)'
                }}
              >
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transform: 'scale(1.1)'
                  }}
                >
                  <source src="/assets/videos/global-stats-bg.mp4" type="video/mp4" />
                </video>
              </div>

              {/* Large Number with Video Visible Through - Using Mix Blend Mode */}
              <div
                className="big-number"
                style={{
                  position: 'relative',
                  zIndex: 1,
                  fontFamily: 'var(--font-english-heading)',
                  fontSize: 'clamp(102px, 12.8vw, 170px)',
                  fontWeight: 700,
                  lineHeight: 1,
                  textAlign: 'right',
                  marginBottom: 'clamp(7px, 0.9vw, 10px)',
                  mixBlendMode: 'screen',
                  filter: 'drop-shadow(0 4px 20px rgba(1, 178, 178, 0.3))'
                }}
              >
                {/* Video visible through text */}
                <div
                  style={{
                    position: 'absolute',
                    top: '-20%',
                    left: '-20%',
                    width: '140%',
                    height: '140%',
                    zIndex: -1,
                    overflow: 'hidden',
                    pointerEvents: 'none'
                  }}
                >
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      filter: 'brightness(0.7) contrast(1.3) saturate(1.2)'
                    }}
                  >
                    <source src="/assets/videos/global-stats-bg.mp4" type="video/mp4" />
                  </video>
                </div>
                <span style={{ 
                  display: 'inline-block',
                  background: 'linear-gradient(180deg, #01B2B2 0%, #00A0A0 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  position: 'relative',
                  zIndex: 1,
                  mixBlendMode: 'screen'
                }}>
                  <Counter value="12B+" />
                </span>
                <span
                  style={{
                    fontSize: 'clamp(34px, 4.3vw, 51px)',
                    fontWeight: 400,
                    marginLeft: '8px',
                    color: '#01B2B2',
                    position: 'relative',
                    zIndex: 1,
                    mixBlendMode: 'normal'
                  }}
                >
                  AED
                </span>
              </div>

              {/* Label Below Number */}
              <p
                style={{
                  fontFamily: '"Montserrat", sans-serif',
                  fontSize: 'clamp(14px, 1.5vw, 15px)',
                  fontWeight: 400,
                  color: '#666666',
                  textAlign: 'right',
                  marginTop: 'clamp(7px, 0.9vw, 10px)',
                  position: 'relative',
                  zIndex: 2
                }}
              >
                Total Project Value
              </p>

              {/* Secondary Statistic */}
              <p
                style={{
                  fontFamily: '"Montserrat", sans-serif',
                  fontSize: 'clamp(20px, 2.6vw, 27px)',
                  fontWeight: 300,
                  color: '#999999',
                  textAlign: 'right',
                  marginTop: 'clamp(14px, 1.7vw, 20px)',
                  position: 'relative',
                  zIndex: 2
                }}
              >
                AED 100M+ AUM
              </p>
            </div>
          </motion.div>
        </div>

        {/* Additional Stats Grid - Smaller Numbers Below */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeInUp}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: 'clamp(20px, 2.6vw, 34px)',
            marginTop: 'clamp(51px, 6.8vw, 85px)',
            position: 'relative',
            zIndex: 3
          }}
        >
          {keyHighlights.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              style={{
                textAlign: 'left'
              }}
            >
              <div
                style={{
                  fontFamily: 'var(--font-english-heading)',
                  fontSize: 'clamp(41px, 5.1vw, 61px)',
                  fontWeight: 700,
                  lineHeight: 1.2,
                  color: '#01B2B2',
                  marginBottom: 'clamp(7px, 0.9vw, 10px)'
                }}
              >
                <Counter value={stat.value} />
              </div>
              <h3
                style={{
                  fontFamily: '"Montserrat", sans-serif',
                  fontSize: 'clamp(12px, 1.4vw, 14px)',
                  fontWeight: 600,
                  color: '#032D46',
                  marginBottom: 'clamp(3px, 0.4vw, 7px)',
                  lineHeight: 1.4
                }}
              >
                {stat.label}
              </h3>
              {stat.subLabel && (
                <p
                  style={{
                    fontFamily: '"Montserrat", sans-serif',
                    fontSize: 'clamp(10px, 1.2vw, 12px)',
                    color: '#666666',
                    marginBottom: 'clamp(3px, 0.4vw, 7px)'
                  }}
                >
                  {stat.subLabel}
                </p>
              )}
              <p
                style={{
                  fontFamily: '"Montserrat", sans-serif',
                  fontSize: 'clamp(11px, 1.3vw, 13px)',
                  color: '#999999',
                  lineHeight: 1.5,
                  marginTop: 'clamp(3px, 0.4vw, 7px)'
                }}
              >
                {stat.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
