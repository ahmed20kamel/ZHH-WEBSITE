'use client';

import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '@/lib/animations';
import Card from './ui/Card';

const highlights = [
  { value: 'AED 100M+', label: 'AUM', description: 'Assets Under Management' },
  { value: '12B+ AED', label: 'Project Value', description: 'Total Project Value' },
  { value: '70+', label: 'Completed Projects', description: 'Across all divisions' },
  { value: '1.2 Tons', label: 'Gold Traded', description: 'Ethical sourcing' },
  { value: '3', label: 'Licensed Mines', description: 'Under active development' },
  { value: '0', label: 'Compliance Violations', description: 'Zero violations' },
];

export default function InvestmentHighlightsSection() {
  return (
    <section className="section-padding bg-white" style={{ paddingTop: '102px', paddingBottom: '102px' }}>
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
            Investment Highlights
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-lg text-[#4A4A4A] max-w-2xl mx-auto mb-8"
            style={{ fontSize: '15px', lineHeight: 1.6 }}
          >
            Diversified portfolio across construction, real estate, gold, and trading.
            <br />
            Strong governance & sustainable returns.
          </motion.p>
        </motion.div>

        {/* Highlights Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {highlights.map((highlight, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: [0.4, 0, 0.2, 1] }}
              className="group"
            >
              <Card className="h-full p-8 relative overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                <div className="absolute top-0 left-0 w-full h-1 bg-transparent group-hover:bg-[#D4AF37] transition-all duration-300" />
                <div className="text-center">
                  <div className="text-5xl font-bold mb-4" style={{ color: '#0055A4', fontSize: 'clamp(36px, 4vw, 48px)' }}>
                    {highlight.value}
                  </div>
                  <h3 className="text-xl font-semibold mb-2" style={{ color: '#1A1A1A', marginBottom: '8px' }}>
                    {highlight.label}
                  </h3>
                  <p className="text-sm" style={{ color: '#666666', fontSize: '14px' }}>
                    {highlight.description}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Chart Placeholder */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="mt-20 relative h-[300px] rounded-xl overflow-hidden bg-[#F5F5F5] flex items-center justify-center"
          style={{ marginTop: '68px', borderRadius: '16px' }}
        >
          <div className="text-center text-[#4A4A4A]">
            <div className="text-5xl mb-4">📊</div>
            <p className="text-lg font-semibold mb-2">Portfolio Distribution Chart</p>
            <p className="text-sm opacity-70">Interactive chart showing portfolio allocation</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

