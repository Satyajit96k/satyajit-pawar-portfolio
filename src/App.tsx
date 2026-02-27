import { useEffect, useState, useCallback } from 'react';
import { Box, Stack, keyframes } from '@mui/material';
import { motion, useScroll, useSpring } from 'framer-motion';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Experience from './components/sections/Experience';
import Contact from './components/sections/Contact';
import Footer from './components/layout/Footer';
import Preloader from './components/common/Preloader';
import { CONTACT } from './data/profile';

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
`;

function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  return (
    <motion.div
      style={{
        scaleX,
        transformOrigin: '0%',
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: 3,
        background: '#FF4D00',
        zIndex: 9999,
      }}
    />
  );
}

function SocialStrip() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const contactEl = document.getElementById('contact');
      if (contactEl) {
        const rect = contactEl.getBoundingClientRect();
        setVisible(rect.top > window.innerHeight);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Stack
      spacing={2}
      sx={{
        position: 'fixed',
        left: { xs: 16, md: 32 },
        bottom: { xs: 16, md: 32 },
        zIndex: 10,
        display: { xs: 'none', md: 'flex' },
        animation: `${fadeIn} 0.7s ease-out 0.6s both`,
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(20px)',
        transition: 'opacity 0.3s ease, transform 0.3s ease',
        pointerEvents: visible ? 'auto' : 'none',
      }}
    >
      <Box
        component="a"
        href={CONTACT.github}
        target="_blank"
        rel="noopener noreferrer"
        sx={{
          color: '#FF4D00',
          '&:hover': { color: '#ff7033' },
          transition: 'color 0.2s',
          display: 'flex',
        }}
      >
        <GitHubIcon sx={{ fontSize: 20 }} />
      </Box>
      <Box
        component="a"
        href={CONTACT.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        sx={{
          color: '#FF4D00',
          '&:hover': { color: '#ff7033' },
          transition: 'color 0.2s',
          display: 'flex',
        }}
      >
        <LinkedInIcon sx={{ fontSize: 20 }} />
      </Box>
      <Box
        component="a"
        href={`mailto:${CONTACT.email}`}
        sx={{
          color: '#FF4D00',
          '&:hover': { color: '#ff7033' },
          transition: 'color 0.2s',
          display: 'flex',
        }}
      >
        <EmailIcon sx={{ fontSize: 20 }} />
      </Box>
    </Stack>
  );
}

function AngleDivider({ fromDark }: { fromDark: boolean }) {
  const bg = fromDark ? '#0A0A0A' : '#FFFFFF';
  const fill = fromDark ? '#FFFFFF' : '#0A0A0A';
  return (
    <Box sx={{ bgcolor: bg, lineHeight: 0 }}>
      <svg viewBox="0 0 1440 32" preserveAspectRatio="none"
           style={{ display: 'block', width: '100%', height: 'clamp(16px, 2vw, 32px)' }}>
        <polygon points="0,32 1440,0 1440,32" fill={fill} />
      </svg>
    </Box>
  );
}

export default function App() {
  const [loading, setLoading] = useState(true);
  const handleLoaded = useCallback(() => setLoading(false), []);

  return (
    <Box sx={{ minHeight: '100vh' }}>
      {loading && <Preloader onComplete={handleLoaded} />}
      <ScrollProgressBar />
      <Navbar />
      <SocialStrip />
      <Hero />
      <AngleDivider fromDark />
      <About dark={false} />
      <AngleDivider fromDark={false} />
      <Skills dark />
      <AngleDivider fromDark />
      <Projects dark={false} />
      <AngleDivider fromDark={false} />
      <Experience dark />
      <AngleDivider fromDark />
      <Contact dark={false} />
      <Footer />
    </Box>
  );
}
