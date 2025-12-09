'use client';

import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '@/lib/animations';
import Card from './ui/Card';

const impactPillars = [
  {
    title: 'Environment',
    icon: '🌱',
    items: [
      'Ethical gold sourcing',
      'ESG-aligned refinery partnerships',
      'Energy-efficient construction',
    ],
    color: '#14A86A',
  },
  {
    title: 'Community',
    icon: '👥',
    items: [
      '300+ Direct Jobs',
      '1,200+ Indirect Jobs',
      'Skill development programs',
    ],
    color: '#0055A4',
  },
  {
    title: 'Responsible Gold',
    icon: '✨',
    items: [
      'Licensed African mines',
      'Traceable supply chain',
      'Community safeguards',
    ],
    color: '#D4AF37',
  },
];

export default function ImpactSection() {
  return (
    <section className="section-padding bg-[#F5F5F5]" style={{ paddingTop: '102px', paddingBottom: '102px' }}>
      <div className="container-custom">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={staggerContainer}
          className="text-center mb-16"
          style={{ marginBottom: '68px' }}
        >
          <motion.h2
            variants={fadeInUp}
            className="text-[48px] font-bold mb-6"
            style={{ 
              lineHeight: '1.2', 
              marginBottom: '24px',
              color: '#1A1A1A',
              fontFamily: 'var(--font-english-heading)'
            }}
          >
            Our Impact
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-lg text-[#4A4A4A] max-w-2xl mx-auto"
            style={{ fontSize: '15px', lineHeight: 1.6 }}
          >
            We create economic, social, and environmental value.
          </motion.p>
        </motion.div>

        {/* Three Pillars */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12"
        >
          {impactPillars.map((pillar, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15, ease: [0.4, 0, 0.2, 1] }}
              className="group"
            >
              <Card className="h-full p-8 relative overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                <div 
                  className="absolute top-0 left-0 w-full h-2 transition-all duration-300"
                  style={{ backgroundColor: pillar.color }}
                />
                <div className="text-center">
                  <div className="text-6xl mb-6">{pillar.icon}</div>
                  <h3 className="text-2xl font-bold mb-6" style={{ color: '#1A1A1A', marginBottom: '24px' }}>
                    {pillar.title}
                  </h3>
                  <ul className="space-y-3 text-left">
                    {pillar.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div 
                          className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                          style={{ backgroundColor: pillar.color }}
                        />
                        <span className="text-[#4A4A4A]" style={{ fontSize: '14px', lineHeight: 1.6 }}>
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
