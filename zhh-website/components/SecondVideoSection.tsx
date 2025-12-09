'use client';

import { motion } from 'framer-motion';
import { fadeInUp, slideInLeft, slideInRight } from '@/lib/animations';
import { useEffect, useRef, useState } from 'react';

export default function SecondVideoSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVideoVisible, setIsVideoVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && videoRef.current) {
            setIsVideoVisible(true);
            videoRef.current.play().catch(() => {
              // Handle autoplay restrictions
            });
          } else if (videoRef.current) {
            videoRef.current.pause();
            setIsVideoVisible(false);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  return (
    <section className="section-padding bg-white" style={{ paddingTop: '100px', paddingBottom: '100px' }}>
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Side - Content - Fade-left */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideInLeft}
            className="text-[#0E777F]"
          >
            {/* Content can be added here if needed */}
          </motion.div>

          {/* Right Side - Video - Fade-right */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideInRight}
            className="relative w-full h-[500px] rounded-xl overflow-hidden"
            style={{ borderRadius: '16px' }}
          >
            <div className="absolute inset-0 bg-[#F5F6F7] flex items-center justify-center">
              <div className="text-center text-[#4A4A4A]">
                <div className="text-6xl mb-4">🎥</div>
                <p className="text-lg font-medium">Second Video Placeholder</p>
                <p className="text-sm opacity-70 mt-2">Video will be displayed here</p>
              </div>
            </div>
            {/* Video element with Intersection Observer */}
            <video
              ref={videoRef}
              className="w-full h-full object-cover"
              muted
              loop
              playsInline
              style={{ display: isVideoVisible ? 'block' : 'none' }}
            >
              <source src="/assets/media/hero.mp4" type="video/mp4" />
            </video>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

