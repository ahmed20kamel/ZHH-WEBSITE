'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { projects } from '@/data/projects';
import { fadeInUp, staggerContainer } from '@/lib/animations';
import Card from './ui/Card';

export default function ProjectsSection() {
  const featuredProjects = projects.slice(0, 3);

  return (
    <section className="section-padding bg-[#F5F6F7]">
      <div className="container-custom">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-[40px] font-semibold text-[#003057] mb-4"
            style={{ lineHeight: '1.2' }}
          >
            Our Projects
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-lg text-[#4A4A4A] max-w-2xl mx-auto"
          >
            Showcasing excellence across all our divisions
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {featuredProjects.map((project) => (
            <motion.div key={project.id} variants={fadeInUp}>
              <Link href={`/projects#${project.id}`}>
                <Card className="h-full overflow-hidden cursor-pointer">
                  <div className="h-48 bg-gradient-to-br from-[#CBA65B]/20 to-[#003057] flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-4xl mb-2">🏗️</div>
                      <p className="text-gray-600 text-sm">{project.category}</p>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-semibold text-[#CBA65B] uppercase tracking-wide">
                        {project.category}
                      </span>
                      <span className="text-xs text-[#4A4A4A]">{project.year}</span>
                    </div>
                    <h3 className="text-[22px] font-medium text-[#003057] mb-2">
                      {project.title}
                    </h3>
                    <p className="text-[#4A4A4A] text-base leading-relaxed mb-4">
                      {project.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-[#4A4A4A]">{project.location}</span>
                      <span className="text-[#003057] text-sm font-medium">
                        View Details →
                      </span>
                    </div>
                  </div>
                </Card>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link
            href="/projects"
            className="inline-block text-[#003057] font-medium hover:text-[#2E6FAF] transition-colors duration-250"
          >
            View All Projects →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

