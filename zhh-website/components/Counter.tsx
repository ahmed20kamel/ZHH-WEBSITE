'use client';

import { useEffect, useRef, useState } from 'react';
import { useInView, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { motion } from 'framer-motion';

interface CounterProps {
  value: string;
  duration?: number;
}

export default function Counter({ value, duration = 2 }: CounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  
  // Extract number from value (e.g., "100M+" -> 100, "20+" -> 20)
  const extractNumber = (val: string): number => {
    const numStr = val.replace(/[^0-9.]/g, '');
    if (val.includes('M') || val.includes('B')) {
      const multiplier = val.includes('B') ? 1000000000 : 1000000;
      return parseFloat(numStr) * multiplier;
    }
    return parseFloat(numStr) || 0;
  };

  const number = extractNumber(value);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 60,
    stiffness: 100,
  });

  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (isInView) {
      motionValue.set(number);
    }
  }, [isInView, number, motionValue]);

  useEffect(() => {
    const unsubscribe = springValue.on('change', (latest) => {
      setDisplayValue(latest);
    });
    return unsubscribe;
  }, [springValue]);

  // Format number back to display format
  const formatValue = (num: number): string => {
    if (value.includes('B+ AED')) {
      return `${(num / 1000000000).toFixed(0)}B+ AED`;
    }
    if (value.includes('M+')) {
      return `${(num / 1000000).toFixed(0)}M+`;
    }
    if (value.includes('Tons')) {
      return `${num.toFixed(1)} Tons`;
    }
    if (value.includes('+')) {
      return `${Math.floor(num)}+`;
    }
    return Math.floor(num).toString();
  };

  return (
    <div ref={ref} style={{ 
      fontSize: 'clamp(32px, 4vw, 48px)',
      marginBottom: '0',
      lineHeight: 1.2,
      fontWeight: 700,
      color: '#01B2B2',
      fontFamily: '"Montserrat", sans-serif'
    }}>
      {formatValue(displayValue)}
    </div>
  );
}

