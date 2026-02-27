import { useState, useEffect } from 'react';
import { Box, Container, Typography, Button, Stack, keyframes } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import { HERO, CONTACT } from '../../data/profile';

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
`;

const imageReveal = keyframes`
  from { opacity: 0; transform: scale(0.95) translateY(20px); }
  to { opacity: 1; transform: scale(1) translateY(0); }
`;

const scrollLeft = keyframes`
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
`;

const scrollRight = keyframes`
  from { transform: translateX(-50%); }
  to { transform: translateX(0); }
`;

const glowPulse = keyframes`
  0%, 100% { opacity: 0.6; }
  50% { opacity: 1; }
`;

const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% { transform: translateY(0) translateX(-50%); }
  40% { transform: translateY(-12px) translateX(-50%); }
  60% { transform: translateY(-6px) translateX(-50%); }
`;

const blink = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
`;

const shimmer = keyframes`
  0% { background-position: 200% center; }
  100% { background-position: -200% center; }
`;

const bgLines = [
  { text: 'SATYAJIT PAWAR', direction: 'left' as const, speed: 30, top: '8%' },
  { text: 'VIBE CODER', direction: 'right' as const, speed: 25, top: '30%' },
  { text: 'THINK · BUILD · SHIP', direction: 'left' as const, speed: 35, top: '55%' },
  { text: 'AI DEVELOPER', direction: 'right' as const, speed: 28, top: '78%' },
];

const TYPING_TITLES = [
  'AI Software Developer',
  'Vibe Coder',
  'Full Stack Engineer',
  'Multi-Agent Architect',
];

function useTypingEffect(titles: string[], typingSpeed = 80, deletingSpeed = 40, pauseTime = 2000) {
  const [displayed, setDisplayed] = useState('');
  const [titleIndex, setTitleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = titles[titleIndex];

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayed(current.slice(0, displayed.length + 1));
        if (displayed.length + 1 === current.length) {
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      } else {
        setDisplayed(current.slice(0, displayed.length - 1));
        if (displayed.length - 1 === 0) {
          setIsDeleting(false);
          setTitleIndex((prev) => (prev + 1) % titles.length);
        }
      }
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, titleIndex, titles, typingSpeed, deletingSpeed, pauseTime]);

  return displayed;
}

export default function Hero() {
  const typedText = useTypingEffect(TYPING_TITLES);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  return (
    <Box
      component="section"
      onMouseMove={(e: React.MouseEvent) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
      }}
      sx={{
        minHeight: '100vh',
        position: 'relative',
        bgcolor: '#0A0A0A',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      {/* Animated background text lines */}
      {bgLines.map((line, i) => (
        <Box
          key={i}
          aria-hidden="true"
          sx={{
            position: 'absolute',
            top: line.top,
            left: 0,
            width: '200%',
            overflow: 'hidden',
            zIndex: 1,
            animation: `${glowPulse} ${4 + i}s ease-in-out infinite`,
          }}
        >
          <Typography
            component="div"
            sx={{
              display: 'inline-block',
              whiteSpace: 'nowrap',
              fontWeight: 900,
              fontSize: { xs: '10vw', sm: '8vw', md: '7vw' },
              lineHeight: 1.2,
              letterSpacing: '-0.04em',
              color: 'rgba(255,255,255,0.03)',
              background: 'linear-gradient(180deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.03) 50%, rgba(255,255,255,0.08) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              WebkitTextStroke: {
                xs: '1px rgba(255,255,255,0.06)',
                md: '1.5px rgba(255,255,255,0.05)',
              },
              filter: 'blur(0.3px)',
              textShadow: '0 0 30px rgba(255,255,255,0.03)',
              userSelect: 'none',
              textTransform: 'uppercase',
              animation: `${line.direction === 'left' ? scrollLeft : scrollRight} ${line.speed}s linear infinite`,
            }}
          >
            {`${line.text}   ·   ${line.text}   ·   ${line.text}   ·   ${line.text}   ·   `}
          </Typography>
        </Box>
      ))}

      {/* Gradient overlay for depth */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          zIndex: 1,
          background:
            'radial-gradient(ellipse at 20% 50%, rgba(255,77,0,0.03) 0%, transparent 60%), radial-gradient(ellipse at 80% 80%, rgba(255,77,0,0.02) 0%, transparent 50%)',
          pointerEvents: 'none',
        }}
      />

      {/* Mouse-following glow */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          zIndex: 1,
          background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(255,77,0,0.07), transparent 60%)`,
          pointerEvents: 'none',
          transition: 'background 0.1s ease',
          display: { xs: 'none', md: 'block' },
        }}
      />

      {/* Main content layer */}
      <Container
        sx={{
          position: 'relative',
          zIndex: 2,
          pt: { xs: '72px', md: '80px' },
          pb: { xs: 6, md: 0 },
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: { xs: 'center', md: 'center' },
            justifyContent: 'space-between',
            gap: { xs: 4, md: 6 },
            minHeight: { md: 'calc(100vh - 100px)' },
          }}
        >
          {/* Left column — text */}
          <Box
            sx={{
              flex: 1,
              animation: `${fadeIn} 0.7s ease-out both`,
              order: { xs: 2, md: 1 },
            }}
          >
            <Typography
              sx={{
                color: '#FF4D00',
                fontWeight: 700,
                fontSize: '0.8rem',
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                mb: 3,
              }}
            >
              {HERO.greeting}
            </Typography>

            <Typography
              variant="h1"
              sx={{
                mb: 2.5,
                fontSize: { xs: '2.6rem', sm: '3.5rem', md: '4.5rem' },
                maxWidth: 550,
                background: 'linear-gradient(110deg, #FFFFFF 45%, rgba(255,77,0,0.9) 50%, #FFFFFF 55%)',
                backgroundSize: '200% auto',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                animation: `${shimmer} 5s ease-in-out infinite`,
              }}
            >
              {HERO.name}
              <Box component="span" sx={{ WebkitTextFillColor: '#FF4D00' }}>.</Box>
            </Typography>

            <Typography
              sx={{
                color: 'rgba(255,255,255,0.45)',
                fontWeight: 500,
                mb: 3,
                fontSize: { xs: '1rem', md: '1.2rem' },
                maxWidth: 480,
                letterSpacing: '-0.01em',
                minHeight: { xs: '1.5em', md: '1.8em' },
              }}
            >
              {typedText}
              <Box
                component="span"
                sx={{
                  animation: `${blink} 0.8s step-end infinite`,
                  ml: 0.5,
                  color: '#FF4D00',
                  fontWeight: 300,
                }}
              >
                |
              </Box>
            </Typography>

            <Typography
              variant="body1"
              sx={{
                color: 'rgba(255,255,255,0.55)',
                maxWidth: 460,
                mb: 5,
                fontSize: { xs: '0.9rem', md: '0.95rem' },
                lineHeight: 1.8,
              }}
            >
              {HERO.subtitle}
            </Typography>

            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} alignItems="center">
              <Button
                variant="contained"
                color="primary"
                href="#projects"
                endIcon={<ArrowForwardIcon />}
                sx={{ px: 4 }}
              >
                View Projects
              </Button>
              <Button
                variant="outlined"
                href="#contact"
                sx={{
                  color: '#FFFFFF',
                  borderColor: 'rgba(255,255,255,0.2)',
                  '&:hover': {
                    borderColor: '#FF4D00',
                    color: '#FF4D00',
                    bgcolor: 'transparent',
                  },
                }}
              >
                Get in Touch
              </Button>

              {/* Mobile social icons */}
              <Stack direction="row" spacing={2} sx={{ display: { xs: 'flex', md: 'none' } }}>
                <Box
                  component="a"
                  href={CONTACT.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    color: 'rgba(255,255,255,0.4)',
                    '&:hover': { color: '#FF4D00' },
                    transition: 'color 0.2s',
                    display: 'flex',
                  }}
                >
                  <GitHubIcon sx={{ fontSize: 22 }} />
                </Box>
                <Box
                  component="a"
                  href={CONTACT.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    color: 'rgba(255,255,255,0.4)',
                    '&:hover': { color: '#FF4D00' },
                    transition: 'color 0.2s',
                    display: 'flex',
                  }}
                >
                  <LinkedInIcon sx={{ fontSize: 22 }} />
                </Box>
                <Box
                  component="a"
                  href={`mailto:${CONTACT.email}`}
                  sx={{
                    color: 'rgba(255,255,255,0.4)',
                    '&:hover': { color: '#FF4D00' },
                    transition: 'color 0.2s',
                    display: 'flex',
                  }}
                >
                  <EmailIcon sx={{ fontSize: 22 }} />
                </Box>
              </Stack>
            </Stack>
          </Box>

          {/* Right column — Portrait with hover interaction */}
          <Box
            sx={{
              flexShrink: 0,
              width: { xs: 260, sm: 300, md: 380 },
              order: { xs: 1, md: 2 },
              animation: `${imageReveal} 0.8s ease-out 0.2s both`,
              position: 'relative',
              transition: 'transform 0.4s ease',
              '&:hover': {
                transform: 'perspective(800px) rotateY(-5deg) scale(1.03)',
              },
              '&:hover img': {
                filter: 'drop-shadow(0 0 60px rgba(255,77,0,0.25))',
              },
            }}
          >
            <Box
              component="img"
              src="/hero-portrait.png"
              alt="Satyajit Pawar"
              sx={{
                width: '100%',
                height: 'auto',
                display: 'block',
                filter: 'drop-shadow(0 0 40px rgba(255,77,0,0.1))',
                transition: 'filter 0.4s ease',
              }}
            />
            {/* Bottom fade into background */}
            <Box
              sx={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                height: 80,
                background: 'linear-gradient(to top, #0A0A0A 10%, transparent 100%)',
                pointerEvents: 'none',
              }}
            />
          </Box>
        </Box>
      </Container>

      {/* Scroll-down indicator */}
      <Box
        component="a"
        href="#about"
        sx={{
          position: 'absolute',
          bottom: 32,
          left: '50%',
          zIndex: 3,
          animation: `${bounce} 2s ease infinite`,
          color: 'rgba(255,255,255,0.4)',
          textDecoration: 'none',
          display: { xs: 'none', md: 'flex' },
          flexDirection: 'column',
          alignItems: 'center',
          gap: 0.5,
          '&:hover': { color: '#FF4D00' },
          transition: 'color 0.2s',
        }}
      >
        <Typography sx={{ fontSize: '0.65rem', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
          Scroll
        </Typography>
        <KeyboardArrowDownIcon sx={{ fontSize: 24 }} />
      </Box>
    </Box>
  );
}
