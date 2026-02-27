import type { ReactNode } from 'react';
import { Box, Container, Typography } from '@mui/material';
import { ScrollReveal } from './MotionWrapper';

interface SectionWrapperProps {
  id: string;
  title?: string;
  subtitle?: string;
  children: ReactNode;
  dark?: boolean;
}

export default function SectionWrapper({ id, title, subtitle, children, dark = false }: SectionWrapperProps) {
  const bg = dark ? '#0A0A0A' : '#FFFFFF';
  const textPrimary = dark ? '#FFFFFF' : '#0A0A0A';
  const textSecondary = dark ? 'rgba(255,255,255,0.55)' : '#555555';

  return (
    <Box
      component="section"
      id={id}
      sx={{
        py: { xs: 6, sm: 8, md: 14 },
        bgcolor: bg,
        color: textSecondary,
        '& .MuiTypography-body1': dark ? { color: 'rgba(255,255,255,0.75)' } : {},
        '& .MuiTypography-body2': dark ? { color: 'rgba(255,255,255,0.6)' } : {},
      }}
    >
      <Container>
        {title && (
          <ScrollReveal>
            <Box sx={{ mb: { xs: 5, md: 8 } }}>
              <Typography
                variant="h5"
                sx={{
                  color: '#FF4D00',
                  mb: 2,
                }}
              >
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </Typography>
              <Typography
                variant="h2"
                sx={{
                  color: textPrimary,
                  '&::after': {
                    content: '""',
                    display: 'block',
                    width: 40,
                    height: 4,
                    bgcolor: '#FF4D00',
                    mt: 3,
                  },
                }}
              >
                {title}
              </Typography>
              {subtitle && (
                <Typography
                  variant="body1"
                  sx={{ mt: 2.5, maxWidth: 550 }}
                >
                  {subtitle}
                </Typography>
              )}
            </Box>
          </ScrollReveal>
        )}
        <ScrollReveal delay={0.15}>
          {children}
        </ScrollReveal>
      </Container>
    </Box>
  );
}
