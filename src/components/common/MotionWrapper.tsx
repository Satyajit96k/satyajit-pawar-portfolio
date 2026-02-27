import type { ReactNode } from 'react';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Box, useMediaQuery } from '@mui/material';

const MotionBox = motion.create(Box);

function useResponsiveMargin() {
  const isDesktop = useMediaQuery('(min-width:900px)');
  return isDesktop ? '-80px' : '-40px';
}

interface ScrollRevealProps {
  children: ReactNode;
  delay?: number;
}

export function ScrollReveal({ children, delay = 0 }: ScrollRevealProps) {
  const ref = useRef(null);
  const margin = useResponsiveMargin();
  const inView = useInView(ref, { once: true, margin });

  return (
    <MotionBox
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.5, delay, ease: 'easeOut' }}
    >
      {children}
    </MotionBox>
  );
}

interface StaggerContainerProps {
  children: ReactNode;
  staggerDelay?: number;
}

export function StaggerContainer({ children, staggerDelay = 0.08 }: StaggerContainerProps) {
  const ref = useRef(null);
  const margin = useResponsiveMargin();
  const inView = useInView(ref, { once: true, margin });

  return (
    <MotionBox
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: staggerDelay } },
      }}
    >
      {children}
    </MotionBox>
  );
}

interface StaggerItemProps {
  children: ReactNode;
}

export function StaggerItem({ children }: StaggerItemProps) {
  return (
    <MotionBox
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
      }}
    >
      {children}
    </MotionBox>
  );
}
