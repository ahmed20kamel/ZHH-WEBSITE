'use client';

import { motion } from 'framer-motion';
import { fadeInUp } from '@/lib/animations';
import Button from './ui/Button';

export default function AboutGroupSection() {
  return (
    <section className="section-padding bg-white" style={{ paddingTop: '100px', paddingBottom: '100px' }}>
      <div className="container-custom">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.p
            variants={fadeInUp}
            className="text-lg text-[#4A4A4A] mb-8 leading-relaxed"
            style={{ fontSize: '18px', lineHeight: 1.7 }}
          >
            ZHH Group Holding is a diversified Emirati conglomerate investing in construction, real estate, global trading, and precious metals — driven by governance, innovation, and responsible growth.
          </motion.p>
          <motion.div
            variants={fadeInUp}
            transition={{ delay: 0.2 }}
            className="mt-8"
          >
            <Button href="/about" size="lg">
              Learn More About Us
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

