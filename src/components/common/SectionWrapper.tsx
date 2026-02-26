import type { ReactNode } from 'react';
import { Box, Container, Typography } from '@mui/material';

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
        py: { xs: 10, md: 14 },
        bgcolor: bg,
        color: textSecondary,
        // Override nested MUI Typography colors within dark sections
        '& .MuiTypography-body1': dark ? { color: 'rgba(255,255,255,0.75)' } : {},
        '& .MuiTypography-body2': dark ? { color: 'rgba(255,255,255,0.6)' } : {},
      }}
    >
      <Container>
        {title && (
          <Box sx={{ mb: 8 }}>
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
        )}
        {children}
      </Container>
    </Box>
  );
}
