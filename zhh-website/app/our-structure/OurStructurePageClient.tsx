'use client';

import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '@/lib/animations';
import OrgChart from '@/components/OrgChart';

export default function OurStructurePageClient() {
  return (
    <div style={{ paddingTop: '80px' }}>
      {/* Hero Section */}
      <section className="section-unified bg-unified-dark text-white">
        <div className="container-unified">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="section-title-wrapper"
            style={{ width: '100%' }}
          >
            <motion.h1 variants={fadeInUp} className="h1-unified text-white">
              Our Structure
            </motion.h1>
            <motion.p variants={fadeInUp} className="body-large-unified text-white/80">
              Our organizational structure reflects our commitment to excellence, innovation, and strategic leadership across all divisions.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Org Chart Section */}
      <section className="section-unified bg-unified-white">
        <div className="container-unified">
          <OrgChart />
        </div>
      </section>
    </div>
  );
}
