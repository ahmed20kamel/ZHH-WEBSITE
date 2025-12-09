'use client';

import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '@/lib/animations';

export default function PrivateEquitySection() {
  return (
    <section className="section-unified bg-white">
      <div className="container-unified">
        {/* Section Title */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={staggerContainer}
          className="text-center mb-16"
          style={{ marginBottom: '64px' }}
        >
          <motion.h2
            variants={fadeInUp}
            className="h2-unified"
            style={{
              fontFamily: 'var(--font-english-heading)',
              fontSize: 'clamp(31px, 3.8vw, 48px)',
              lineHeight: 1.2,
              fontWeight: 700,
              color: '#1A1A1A',
              marginBottom: '16px'
            }}
          >
            Private Equity
          </motion.h2>
        </motion.div>

        {/* Three Cards Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
          style={{
            gap: 'clamp(14px, 1.7vw, 20px)',
            maxWidth: '100%',
            margin: '0 auto',
            width: '100%'
          }}
        >
          {/* Card 1 - Private Equity Overview */}
          <motion.div
            variants={fadeInUp}
            className="group flex"
            style={{ height: '100%' }}
          >
            <div
              className="w-full h-full flex flex-col relative overflow-hidden transition-all duration-300"
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '12px',
                padding: '27px',
                boxShadow: '0 6px 20px rgba(0,0,0,0.06)',
                border: '2px solid transparent',
                minHeight: '320px'
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
              {/* Title */}
              <h3
                style={{
                  fontFamily: '"Montserrat", sans-serif',
                  fontSize: '24px',
                  fontWeight: 600,
                  lineHeight: 1.3,
                  color: '#01B2B2',
                  marginBottom: '17px'
                }}
              >
                Private Equity Overview
              </h3>
              
              {/* Description */}
              <p
                style={{
                  fontFamily: '"Montserrat", sans-serif',
                  fontSize: '15px',
                  fontWeight: 400,
                  lineHeight: 1.6,
                  color: '#333333',
                  marginBottom: '20px'
                }}
              >
                Strategic investments in UAE and global markets.
              </p>

              {/* Focus Areas */}
              <div style={{ marginTop: 'auto' }}>
                <h4
                  style={{
                    fontFamily: '"Montserrat", sans-serif',
                    fontSize: '16px',
                    fontWeight: 600,
                    lineHeight: 1.5,
                    color: '#01B2B2',
                    marginBottom: '10px'
                  }}
                >
                  Focus Areas:
                </h4>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '8px'
                  }}
                >
                  {['Real Estate', 'Gold Mining', 'Global Trading'].map((area, index) => (
                    <div
                      key={index}
                      style={{
                        fontFamily: '"Montserrat", sans-serif',
                        fontSize: '16px',
                        fontWeight: 400,
                        lineHeight: 1.6,
                        color: '#333333'
                      }}
                    >
                      {area}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 2 - Investment Strategy */}
          <motion.div
            variants={fadeInUp}
            className="group flex"
            style={{ height: '100%' }}
          >
            <div
              className="w-full h-full flex flex-col relative overflow-hidden transition-all duration-300"
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '12px',
                padding: '27px',
                boxShadow: '0 6px 20px rgba(0,0,0,0.06)',
                border: '2px solid transparent',
                minHeight: '320px'
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
              {/* Title */}
              <h3
                style={{
                  fontFamily: '"Montserrat", sans-serif',
                  fontSize: '24px',
                  fontWeight: 600,
                  lineHeight: 1.3,
                  color: '#01B2B2',
                  marginBottom: '20px'
                }}
              >
                Our Investment Strategy
              </h3>
              
              {/* Strategy Items */}
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px'
                }}
              >
                {[
                  'Target high-growth sectors',
                  'Governance & transparency',
                  'Regional expansion',
                  'Responsible, long-term value creation'
                ].map((item, index) => (
                  <div
                    key={index}
                    style={{
                      fontFamily: '"Montserrat", sans-serif',
                      fontSize: '16px',
                      fontWeight: 400,
                      lineHeight: 1.6,
                      color: '#333333'
                    }}
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Card 3 - UAE Investments */}
          <motion.div
            variants={fadeInUp}
            className="group flex"
            style={{ height: '100%' }}
          >
            <div
              className="w-full h-full flex flex-col relative overflow-hidden transition-all duration-300"
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '12px',
                padding: '27px',
                boxShadow: '0 6px 20px rgba(0,0,0,0.06)',
                border: '2px solid transparent',
                minHeight: '320px'
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
              {/* Title */}
              <h3
                style={{
                  fontFamily: '"Montserrat", sans-serif',
                  fontSize: '24px',
                  fontWeight: 600,
                  lineHeight: 1.3,
                  color: '#01B2B2',
                  marginBottom: '20px'
                }}
              >
                UAE Investments
              </h3>
              
              {/* Investment Items */}
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px'
                }}
              >
                {[
                  'Premium residential & commercial',
                  'Dubai gold ecosystem'
                ].map((item, index) => (
                  <div
                    key={index}
                    style={{
                      fontFamily: '"Montserrat", sans-serif',
                      fontSize: '16px',
                      fontWeight: 400,
                      lineHeight: 1.6,
                      color: '#333333'
                    }}
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

