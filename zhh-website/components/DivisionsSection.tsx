'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { divisions } from '@/data/divisions';
import { fadeInUp, staggerContainer } from '@/lib/animations';
import Card from './ui/Card';

export default function DivisionsSection() {
  return (
    <section className="section-unified bg-unified-white">
      <div className="container-unified">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={staggerContainer}
          className="section-title-wrapper"
        >
          <motion.h2
            variants={fadeInUp}
            className="h2-unified text-primary"
          >
            Core Businesses
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="body-large-unified text-secondary"
          >
            Building value across construction, real estate, trading, and precious metals
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-6"
          style={{ 
            maxWidth: '100%',
            margin: '0 auto',
            justifyContent: 'center',
            width: '100%',
            gap: 'clamp(14px, 1.7vw, 20px)'
          }}
        >
          {/* ZHH Construction */}
          <motion.div 
            variants={fadeInUp}
            className="group flex"
            style={{ height: '100%' }}
          >
            <Link href="/divisions#construction" className="flex w-full h-full">
              <div
                className="w-full h-full flex flex-col relative overflow-hidden cursor-pointer transition-all duration-300"
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: '12px',
                  padding: '32px',
                  boxShadow: '0 6px 20px rgba(0,0,0,0.06)',
                  border: '2px solid transparent',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 12px 28px rgba(0,0,0,0.12)';
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.borderColor = '#D4AF37';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = '0 6px 20px rgba(0,0,0,0.06)';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderColor = 'transparent';
                }}
              >
                {/* Logo */}
                <div className="flex items-center justify-center mb-6" style={{ 
                  height: '100px', 
                  minHeight: '100px',
                  maxHeight: '100px',
                  width: '100%',
                  marginBottom: '24px'
                }}>
                  <img
                    src="/assets/logos/zhh-construction-logo.svg"
                    alt="ZHH Construction Logo"
                    className="h-full w-auto object-contain"
                    style={{ 
                      maxWidth: 'min(180px, 100%)', 
                      width: 'auto',
                      height: '100%',
                      objectFit: 'contain'
                    }}
                  />
                </div>
                
                {/* Title */}
                <h3 
                  className="mb-4"
                  style={{
                    fontFamily: '"Montserrat", sans-serif',
                    fontSize: '24px',
                    fontWeight: 600,
                    lineHeight: 1.3,
                    color: '#01B2B2',
                    marginBottom: '16px',
                    marginTop: '0',
                    minHeight: 'auto',
                    display: 'block'
                  }}
                >
                  Construction
                </h3>
                
                {/* Description */}
                <p 
                  className="flex-grow mb-6"
                  style={{
                    fontFamily: '"Montserrat", sans-serif',
                    fontSize: '16px',
                    fontWeight: 400,
                    lineHeight: 1.6,
                    color: '#333333',
                    marginBottom: '24px',
                    minHeight: '48px'
                  }}
                >
                  Delivering sustainable, world-class infrastructure.
                </p>
                
                {/* Learn More - Fixed at bottom */}
                <div 
                  className="mt-auto pt-4 border-t flex items-center justify-between"
                  style={{
                    borderTopColor: '#E0E0E0',
                    paddingTop: '16px',
                    marginTop: 'auto'
                  }}
                >
                  <span 
                    style={{
                      fontFamily: '"Montserrat", sans-serif',
                      fontSize: '14px',
                      fontWeight: 600,
                      color: '#01B2B2'
                    }}
                  >
                    Learn More
                  </span>
                  <span style={{ color: '#D4AF37', fontSize: '18px' }}>→</span>
                </div>
              </div>
            </Link>
          </motion.div>

          {/* ZHH Real Estate */}
          <motion.div 
            variants={fadeInUp}
            className="group flex"
            style={{ height: '100%' }}
          >
            <Link href="/divisions#real-estate" className="flex w-full h-full">
              <div
                className="w-full h-full flex flex-col relative overflow-hidden cursor-pointer transition-all duration-300"
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: '12px',
                  padding: '32px',
                  boxShadow: '0 6px 20px rgba(0,0,0,0.06)',
                  border: '2px solid transparent',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 12px 28px rgba(0,0,0,0.12)';
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.borderColor = '#D4AF37';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = '0 6px 20px rgba(0,0,0,0.06)';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderColor = 'transparent';
                }}
              >
                {/* Logo */}
                <div className="flex items-center justify-center mb-6" style={{ 
                  height: '100px', 
                  minHeight: '100px',
                  maxHeight: '100px',
                  width: '100%',
                  marginBottom: '24px'
                }}>
                  <img
                    src="/assets/logos/zhh-real-estate-logo.svg"
                    alt="ZHH Real Estate Logo"
                    className="h-full w-auto object-contain"
                    style={{ 
                      maxWidth: 'min(180px, 100%)', 
                      width: 'auto',
                      height: '100%',
                      objectFit: 'contain'
                    }}
                  />
                </div>
                
                {/* Title */}
                <h3 
                  className="mb-4"
                  style={{
                    fontFamily: '"Montserrat", sans-serif',
                    fontSize: '24px',
                    fontWeight: 600,
                    lineHeight: 1.3,
                    color: '#01B2B2',
                    marginBottom: '16px',
                    marginTop: '0',
                    minHeight: 'auto',
                    display: 'block'
                  }}
                >
                  Real Estate
                </h3>
                
                {/* Description */}
                <p 
                  className="flex-grow mb-6"
                  style={{
                    fontFamily: '"Montserrat", sans-serif',
                    fontSize: '16px',
                    fontWeight: 400,
                    lineHeight: 1.6,
                    color: '#333333',
                    marginBottom: '24px',
                    minHeight: '48px'
                  }}
                >
                  Creating long-term value through visionary real-estate projects.
                </p>
                
                {/* Learn More - Fixed at bottom */}
                <div 
                  className="mt-auto pt-4 border-t flex items-center justify-between"
                  style={{
                    borderTopColor: '#E0E0E0',
                    paddingTop: '16px',
                    marginTop: 'auto'
                  }}
                >
                  <span 
                    style={{
                      fontFamily: '"Montserrat", sans-serif',
                      fontSize: '14px',
                      fontWeight: 600,
                      color: '#01B2B2'
                    }}
                  >
                    Learn More
                  </span>
                  <span style={{ color: '#D4AF37', fontSize: '18px' }}>→</span>
                </div>
              </div>
            </Link>
          </motion.div>

          {/* ZHH General Trading */}
          <motion.div 
            variants={fadeInUp}
            className="group flex"
            style={{ height: '100%' }}
          >
            <Link href="/divisions#trading" className="flex w-full h-full">
              <div
                className="w-full h-full flex flex-col relative overflow-hidden cursor-pointer transition-all duration-300"
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: '12px',
                  padding: '32px',
                  boxShadow: '0 6px 20px rgba(0,0,0,0.06)',
                  border: '2px solid transparent',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 12px 28px rgba(0,0,0,0.12)';
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.borderColor = '#D4AF37';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = '0 6px 20px rgba(0,0,0,0.06)';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderColor = 'transparent';
                }}
              >
                {/* Logo */}
                <div className="flex items-center justify-center mb-6" style={{ 
                  height: '100px', 
                  minHeight: '100px',
                  maxHeight: '100px',
                  width: '100%',
                  marginBottom: '24px'
                }}>
                  <img
                    src="/assets/logos/zhh-general-trading-logo.svg"
                    alt="ZHH General Trading Logo"
                    className="h-full w-auto object-contain"
                    style={{ 
                      maxWidth: 'min(180px, 100%)', 
                      width: 'auto',
                      height: '100%',
                      objectFit: 'contain'
                    }}
                  />
                </div>
                
                {/* Title */}
                <h3 
                  className="mb-4"
                  style={{
                    fontFamily: '"Montserrat", sans-serif',
                    fontSize: '24px',
                    fontWeight: 600,
                    lineHeight: 1.3,
                    color: '#01B2B2',
                    marginBottom: '16px',
                    marginTop: '0',
                    minHeight: 'auto',
                    display: 'block'
                  }}
                >
                  General Trading
                </h3>
                
                {/* Description */}
                <p 
                  className="flex-grow mb-6"
                  style={{
                    fontFamily: '"Montserrat", sans-serif',
                    fontSize: '16px',
                    fontWeight: 400,
                    lineHeight: 1.6,
                    color: '#333333',
                    marginBottom: '24px',
                    minHeight: '48px'
                  }}
                >
                  Connecting markets with transparency and compliance.
                </p>
                
                {/* Learn More - Fixed at bottom */}
                <div 
                  className="mt-auto pt-4 border-t flex items-center justify-between"
                  style={{
                    borderTopColor: '#E0E0E0',
                    paddingTop: '16px',
                    marginTop: 'auto'
                  }}
                >
                  <span 
                    style={{
                      fontFamily: '"Montserrat", sans-serif',
                      fontSize: '14px',
                      fontWeight: 600,
                      color: '#01B2B2'
                    }}
                  >
                    Learn More
                  </span>
                  <span style={{ color: '#D4AF37', fontSize: '18px' }}>→</span>
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Jewelust */}
          <motion.div 
            variants={fadeInUp}
            className="group flex"
            style={{ height: '100%' }}
          >
            <Link href="/divisions#jewelust" className="flex w-full h-full">
              <div
                className="w-full h-full flex flex-col relative overflow-hidden cursor-pointer transition-all duration-300"
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: '12px',
                  padding: '32px',
                  boxShadow: '0 6px 20px rgba(0,0,0,0.06)',
                  border: '2px solid transparent',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 12px 28px rgba(0,0,0,0.12)';
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.borderColor = '#D4AF37';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = '0 6px 20px rgba(0,0,0,0.06)';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderColor = 'transparent';
                }}
              >
                {/* Logo */}
                <div className="flex items-center justify-center mb-6" style={{ 
                  height: '100px', 
                  minHeight: '100px',
                  maxHeight: '100px',
                  width: '100%',
                  marginBottom: '24px'
                }}>
                  <img
                    src="/assets/logos/jewelust-logo.svg"
                    alt="Jewelust Logo"
                    className="h-full w-auto object-contain"
                    style={{ 
                      maxWidth: 'min(180px, 100%)', 
                      width: 'auto',
                      height: '100%',
                      objectFit: 'contain'
                    }}
                  />
                </div>
                
                {/* Title */}
                <h3 
                  className="mb-4"
                  style={{
                    fontFamily: '"Montserrat", sans-serif',
                    fontSize: '24px',
                    fontWeight: 600,
                    lineHeight: 1.3,
                    color: '#01B2B2',
                    marginBottom: '16px',
                    marginTop: '0',
                    minHeight: 'auto',
                    display: 'block'
                  }}
                >
                  Gold & Bullion Trading
                </h3>
                
                {/* Description */}
                <p 
                  className="flex-grow mb-6"
                  style={{
                    fontFamily: '"Montserrat", sans-serif',
                    fontSize: '16px',
                    fontWeight: 400,
                    lineHeight: 1.6,
                    color: '#333333',
                    marginBottom: '24px',
                    minHeight: '48px'
                  }}
                >
                  Where wealth becomes legacy. Responsible, transparent gold trading.
                </p>
                
                {/* Learn More - Fixed at bottom */}
                <div 
                  className="mt-auto pt-4 border-t flex items-center justify-between"
                  style={{
                    borderTopColor: '#E0E0E0',
                    paddingTop: '16px',
                    marginTop: 'auto'
                  }}
                >
                  <span 
                    style={{
                      fontFamily: '"Montserrat", sans-serif',
                      fontSize: '14px',
                      fontWeight: 600,
                      color: '#01B2B2'
                    }}
                  >
                    Learn More
                  </span>
                  <span style={{ color: '#D4AF37', fontSize: '18px' }}>→</span>
                </div>
              </div>
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex justify-center items-center"
          style={{
            marginTop: 'clamp(34px, 4.3vw, 48px)',
            paddingTop: '24px',
            borderTop: '1px solid #E5E5E5'
          }}
        >
          <div style={{ 
            maxWidth: 'fit-content',
            width: '100%',
            display: 'flex',
            justifyContent: 'center'
          }}>
          <Link
            href="/divisions"
              className="inline-flex items-center gap-2"
              style={{
                fontFamily: '"Montserrat", sans-serif',
                fontSize: 'clamp(12px, 1.4vw, 14px)',
                fontWeight: 600,
                color: '#01B2B2',
                textDecoration: 'none',
                padding: '10px 20px',
                border: '1px solid #E5E5E5',
                borderRadius: '4px',
                backgroundColor: 'transparent',
                transition: 'all 0.3s ease',
                position: 'relative',
                overflow: 'hidden'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#01B2B2';
                e.currentTarget.style.backgroundColor = '#F0FDFF';
                const arrow = e.currentTarget.querySelector('.arrow-icon');
                if (arrow) {
                  arrow.style.transform = 'translateX(4px)';
                }
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '#E5E5E5';
                e.currentTarget.style.backgroundColor = 'transparent';
                const arrow = e.currentTarget.querySelector('.arrow-icon');
                if (arrow) {
                  arrow.style.transform = 'translateX(0)';
                }
              }}
            >
              <span>View All Divisions</span>
              <span 
                className="arrow-icon"
                style={{ 
                  fontSize: '16px',
                  color: '#01B2B2',
                  transition: 'transform 0.3s ease',
                  display: 'inline-block',
                  lineHeight: '1'
                }}
              >
                →
              </span>
          </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

