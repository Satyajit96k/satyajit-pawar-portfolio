import { useState, useEffect } from 'react';
import { Box, keyframes } from '@mui/material';

const pulse = keyframes`
  0% { opacity: 0; transform: scale(0.85); }
  50% { opacity: 1; transform: scale(1); }
  100% { opacity: 1; transform: scale(1); }
`;

const slideUp = keyframes`
  to { transform: translateY(-100%); }
`;

interface PreloaderProps {
  onComplete: () => void;
}

export default function Preloader({ onComplete }: PreloaderProps) {
  const [exit, setExit] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setExit(true), 1400);
    const t2 = setTimeout(onComplete, 2100);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, [onComplete]);

  return (
    <Box
      sx={{
        position: 'fixed',
        inset: 0,
        bgcolor: '#0A0A0A',
        zIndex: 99999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        animation: exit ? `${slideUp} 0.7s cubic-bezier(0.76, 0, 0.24, 1) forwards` : 'none',
      }}
    >
      <Box
        sx={{
          animation: `${pulse} 1s ease-out both`,
          fontSize: { xs: '2.5rem', md: '3.5rem' },
          fontWeight: 800,
          color: '#FFFFFF',
          letterSpacing: '-0.03em',
          fontFamily: '"Inter", sans-serif',
        }}
      >
        SP<Box component="span" sx={{ color: '#FF4D00' }}>.</Box>
      </Box>
    </Box>
  );
}
