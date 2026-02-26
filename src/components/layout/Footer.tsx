import { Box, Container, Typography } from '@mui/material';

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        py: 5,
        bgcolor: '#0A0A0A',
        borderTop: '1px solid rgba(255,255,255,0.06)',
      }}
    >
      <Container>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexDirection: { xs: 'column', sm: 'row' },
            gap: 1,
          }}
        >
          <Typography
            sx={{
              color: 'rgba(255,255,255,0.4)',
              fontSize: '0.85rem',
            }}
          >
            Designed & built by Satyajit Pawar
          </Typography>
          <Typography
            sx={{
              color: 'rgba(255,255,255,0.25)',
              fontSize: '0.75rem',
              letterSpacing: '0.04em',
            }}
          >
            React + TypeScript + Material UI
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
