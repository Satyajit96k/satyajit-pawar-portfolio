import { useRef, useState, useEffect } from 'react';
import { Box, Typography, Grid, Paper } from '@mui/material';
import { useInView } from 'framer-motion';
import SectionWrapper from '../common/SectionWrapper';
import { ABOUT, STATS } from '../../data/profile';

function CountUp({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 2000;
    const start = Date.now();
    const timer = setInterval(() => {
      const elapsed = Date.now() - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * value));
      if (progress >= 1) {
        setCount(value);
        clearInterval(timer);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, value]);

  return (
    <Typography
      ref={ref}
      variant="h2"
      sx={{ color: '#FF4D00', fontWeight: 800, fontSize: { xs: '2rem', md: '3rem' } }}
    >
      {count}{suffix}
    </Typography>
  );
}

interface AboutProps {
  dark?: boolean;
}

export default function About({ dark = false }: AboutProps) {
  return (
    <SectionWrapper id="about" title="About Me" dark={dark}>
      <Box sx={{ display: 'flex', justifyContent: 'center', gap: { xs: 3, sm: 5, md: 8 }, mb: { xs: 5, md: 8 }, flexWrap: 'wrap' }}>
        {STATS.map((stat) => (
          <Box key={stat.label} sx={{ textAlign: 'center', minWidth: 80 }}>
            <CountUp value={stat.value} suffix={stat.suffix} />
            <Typography
              variant="body2"
              sx={{
                mt: 1,
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                fontSize: '0.7rem',
                color: dark ? 'rgba(255,255,255,0.5)' : '#777',
              }}
            >
              {stat.label}
            </Typography>
          </Box>
        ))}
      </Box>

      <Grid container spacing={{ xs: 4, md: 6 }}>
        <Grid size={{ xs: 12, md: 7 }}>
          {ABOUT.paragraphs.map((para, i) => (
            <Typography key={i} variant="body1" sx={{ mb: 2.5, lineHeight: 1.8 }}>
              {para}
            </Typography>
          ))}
        </Grid>

        <Grid size={{ xs: 12, md: 5 }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            {ABOUT.highlights.map((item) => (
              <Paper
                key={item.label}
                elevation={0}
                sx={{
                  p: { xs: 2.5, md: 3 },
                  bgcolor: dark ? 'rgba(255,255,255,0.04)' : '#F7F7F7',
                  border: '1px solid',
                  borderColor: dark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.08)',
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: 3,
                    background: 'linear-gradient(90deg, transparent, #FF4D00, transparent)',
                    transform: 'translateX(-100%)',
                    transition: 'transform 0.5s ease',
                  },
                  '&:hover': {
                    transform: 'translateY(-6px)',
                    boxShadow: '0 16px 40px rgba(255,77,0,0.18)',
                    borderColor: '#FF4D00',
                    '&::before': {
                      transform: 'translateX(0)',
                    },
                  },
                }}
              >
                <Typography
                  variant="body2"
                  sx={{
                    color: '#FF4D00',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    fontSize: '0.7rem',
                    mb: 0.5,
                  }}
                >
                  {item.label}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: dark ? '#FFFFFF' : '#0A0A0A',
                    fontWeight: 600,
                  }}
                >
                  {item.value}
                </Typography>
              </Paper>
            ))}
          </Box>
        </Grid>
      </Grid>
    </SectionWrapper>
  );
}
