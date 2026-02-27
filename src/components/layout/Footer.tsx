import { useState, useEffect } from 'react';
import { Box, Container, Typography, Stack, Fade, IconButton } from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

export default function Footer() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > window.innerHeight);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <Box
        component="footer"
        sx={{
          py: { xs: 3, md: 5 },
          bgcolor: '#050505',
          borderTop: '1px solid rgba(255,255,255,0.06)',
        }}
      >
        <Container>
          <Stack alignItems="center" spacing={1.5}>
            <Typography
              sx={{
                color: '#FFFFFF',
                fontWeight: 700,
                fontSize: '1.1rem',
              }}
            >
              Satyajit Pawar<Box component="span" sx={{ color: '#FF4D00' }}>.</Box>
            </Typography>
            <Typography
              sx={{
                color: 'rgba(255,255,255,0.35)',
                fontSize: '0.8rem',
              }}
            >
              Built with passion &amp; code
            </Typography>
            <Typography
              sx={{
                color: 'rgba(255,255,255,0.25)',
                fontSize: '0.75rem',
              }}
            >
              &copy; {new Date().getFullYear()} Satyajit Pawar. All rights reserved.
            </Typography>
          </Stack>
        </Container>
      </Box>

      {/* Back-to-top button */}
      <Fade in={showTop}>
        <IconButton
          onClick={scrollToTop}
          aria-label="Back to top"
          sx={{
            position: 'fixed',
            bottom: { xs: 16, md: 32 },
            right: { xs: 16, md: 32 },
            zIndex: 10,
            bgcolor: '#FF4D00',
            color: '#FFFFFF',
            borderRadius: 1,
            width: 44,
            height: 44,
            '&:hover': {
              bgcolor: '#e64400',
            },
            boxShadow: '0 4px 20px rgba(255,77,0,0.3)',
          }}
        >
          <KeyboardArrowUpIcon />
        </IconButton>
      </Fade>
    </>
  );
}
