'use client';

import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '@/lib/animations';
import Counter from './Counter';

const highlights = [
  { value: 'AED 100M+', label: 'AUM' },
  { value: '70+', label: 'Completed Projects' },
  { value: '12B+ AED', label: 'Total Project Value' },
  { value: '300+', label: 'Direct Employees / 1,200+ Indirect' },
  { value: '1.2 Tons', label: 'Gold Traded' },
  { value: '180+', label: 'Trade Contracts Executed' },
  { value: '24', label: 'Major Construction Projects' },
  { value: '10+', label: 'Presence in Countries' },
];

export default function StatsSection() {
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
            Key Highlights
          </motion.h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={staggerContainer}
          className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-8 lg:gap-12"
          style={{ gap: '48px' }}
        >
          {highlights.map((stat, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: [0.4, 0, 0.2, 1] }}
            >
              <Counter value={stat.value} />
              <h3 className="text-base font-medium" style={{ color: '#4A4A4A', fontSize: '16px', lineHeight: 1.4, fontWeight: 400 }}>
                {stat.label}
              </h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

