'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import Card from './ui/Card';

const leadershipQuotes = [
  {
    name: 'Mohamed Al Hammadi',
    role: 'Founder, Owner & Chairman',
    quote: 'ZHH Group stands as a proud symbol of Emirati ambition and excellence.',
    image: '👔',
  },
  {
    name: 'Najeeb PK',
    role: 'Chief Financial Officer (CFO)',
    quote: 'Strong financial management is the backbone of our success.',
    image: '💼',
  },
  {
    name: 'Shamma Al Amri',
    role: 'Chief Marketing Officer (CMO)',
    quote: "ZHH's strength lies in its diversity and global presence.",
    image: '🎯',
  },
];

export default function LeadershipTeaserSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % leadershipQuotes.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="section-unified bg-white" style={{ paddingTop: '80px', paddingBottom: '80px' }}>
      <div className="container-unified">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
          }}
          className="text-center mb-12"
          style={{ marginBottom: '48px' }}
        >
          <h2
            className="h2-unified"
            style={{ 
              lineHeight: '1.2', 
              marginBottom: '16px',
              color: '#1A1A1A',
              fontFamily: 'var(--font-english-heading)',
              fontSize: 'clamp(31px, 3.8vw, 41px)',
              fontWeight: 700
            }}
          >
            Leadership
          </h2>
          <p
            className="body-large-unified"
            style={{ 
              fontSize: 'clamp(14px, 1.5vw, 15px)', 
              lineHeight: 1.6,
              color: '#4A4A4A',
              maxWidth: '600px',
              margin: '0 auto'
            }}
          >
            Visionary leaders driving Emirati excellence
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="relative max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.4 }}
            >
              <Card className="p-8 lg:p-10 text-center" style={{ 
                backgroundColor: '#FFFFFF',
                borderRadius: '12px',
                boxShadow: '0 4px 20px rgba(0,0,0,0.08)'
              }}>
                <blockquote 
                  className="mb-6" 
                  style={{ 
                    fontFamily: '"Montserrat", sans-serif',
                    fontSize: 'clamp(18px, 2vw, 22px)', 
                    fontWeight: 400,
                    lineHeight: 1.6,
                    color: '#1A1A1A',
                    marginBottom: '32px'
                  }}
                >
                  "{leadershipQuotes[currentIndex].quote}"
                </blockquote>
                <div>
                  <h3 
                    className="mb-2" 
                    style={{ 
                      fontFamily: '"Montserrat", sans-serif',
                      fontSize: 'clamp(15px, 1.7vw, 17px)', 
                      fontWeight: 600,
                      color: '#01B2B2',
                      marginBottom: '8px'
                    }}
                  >
                    {leadershipQuotes[currentIndex].name}
                  </h3>
                  <p 
                    style={{ 
                      fontFamily: '"Montserrat", sans-serif',
                      fontSize: 'clamp(12px, 1.3vw, 14px)', 
                      color: '#666666',
                      fontWeight: 400
                    }}
                  >
                    {leadershipQuotes[currentIndex].role}
                  </p>
                </div>
              </Card>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {leadershipQuotes.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-[#01B2B2] w-8' : 'bg-[#E0E0E0]'
                }`}
                style={{
                  width: index === currentIndex ? '32px' : '8px',
                  height: '8px',
                  border: 'none',
                  cursor: 'pointer',
                  padding: 0
                }}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

