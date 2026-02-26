import { Box, Container, Typography, Button, Stack, keyframes } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { HERO, CONTACT } from '../../data/profile';

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
`;

const imageReveal = keyframes`
  from { opacity: 0; transform: scale(0.95); }
  to { opacity: 1; transform: scale(1); }
`;

export default function Hero() {
  return (
    <Box
      component="section"
      sx={{
        minHeight: '100vh',
        position: 'relative',
        bgcolor: '#0A0A0A',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      {/* ── Giant transparent name — background layer ── */}
      <Typography
        component="div"
        aria-hidden="true"
        sx={{
          position: 'absolute',
          left: '50%',
          bottom: { xs: '12%', md: '8%' },
          transform: 'translateX(-50%)',
          whiteSpace: 'nowrap',
          fontWeight: 900,
          fontSize: { xs: '15vw', sm: '13vw', md: '11vw' },
          lineHeight: 1,
          letterSpacing: '-0.04em',
          color: 'transparent',
          WebkitTextStroke: { xs: '1px rgba(255,255,255,0.06)', md: '2px rgba(255,255,255,0.06)' },
          userSelect: 'none',
          zIndex: 1,
          textTransform: 'uppercase',
        }}
      >
        Satyajit Pawar
      </Typography>

      {/* ── Main content layer ── */}
      <Container
        sx={{
          position: 'relative',
          zIndex: 2,
          pt: { xs: '100px', md: '72px' },
          pb: { xs: 6, md: 0 },
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            flexDirection: { xs: 'column', md: 'row' },
            gap: { xs: 4, md: 0 },
            minHeight: { md: 'calc(100vh - 72px)' },
          }}
        >
          {/* ── Left column — text ── */}
          <Box
            sx={{
              flex: 1,
              pb: { xs: 0, md: 12 },
              animation: `${fadeIn} 0.7s ease-out both`,
              zIndex: 3,
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
                color: '#FFFFFF',
                mb: 2.5,
                fontSize: { xs: '2.6rem', sm: '3.5rem', md: '4.5rem' },
                maxWidth: 550,
              }}
            >
              {HERO.name}
              <Box component="span" sx={{ color: '#FF4D00' }}>.</Box>
            </Typography>

            <Typography
              sx={{
                color: 'rgba(255,255,255,0.45)',
                fontWeight: 500,
                mb: 3,
                fontSize: { xs: '1rem', md: '1.2rem' },
                maxWidth: 450,
                letterSpacing: '-0.01em',
              }}
            >
              {HERO.title}
            </Typography>

            <Typography
              variant="body1"
              sx={{
                color: 'rgba(255,255,255,0.55)',
                maxWidth: 440,
                mb: 5,
                fontSize: { xs: '0.9rem', md: '0.95rem' },
                lineHeight: 1.8,
              }}
            >
              {HERO.subtitle}
            </Typography>

            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ mb: { xs: 4, md: 0 } }}>
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
            </Stack>
          </Box>

          {/* ── Center — Profile cutout (cropped to upper body) ── */}
          <Box
            sx={{
              position: 'relative',
              flexShrink: 0,
              width: { xs: 220, sm: 260, md: 320 },
              height: { xs: 280, sm: 340, md: 420 },
              alignSelf: { xs: 'center', md: 'flex-end' },
              animation: `${imageReveal} 0.8s ease-out 0.2s both`,
              zIndex: 2,
              order: { xs: 1, md: 2 },
              overflow: 'hidden',
            }}
          >
            <Box
              component="img"
              src="/profile.webp"
              alt="Satyajit Pawar"
              sx={{
                width: '100%',
                height: 'auto',
                display: 'block',
                filter: 'drop-shadow(0 8px 30px rgba(0,0,0,0.4))',
              }}
            />
            {/* Bottom fade — blends cropped lower body into hero bg */}
            <Box
              sx={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                height: 100,
                background: 'linear-gradient(to top, #0A0A0A 15%, transparent 100%)',
                pointerEvents: 'none',
              }}
            />
          </Box>

          {/* ── Right column — role + social ── */}
          <Box
            sx={{
              pb: { xs: 0, md: 12 },
              textAlign: { xs: 'center', md: 'right' },
              animation: `${fadeIn} 0.7s ease-out 0.4s both`,
              zIndex: 3,
              order: { xs: 3, md: 3 },
              display: { xs: 'none', md: 'block' },
            }}
          >
            <Typography
              sx={{
                color: '#FFFFFF',
                fontWeight: 700,
                fontSize: '1.3rem',
                lineHeight: 1.4,
                letterSpacing: '-0.02em',
                mb: 4,
              }}
            >
              AI Software
              <br />
              Developer
            </Typography>

            <Stack direction="column" spacing={1.5} alignItems="flex-end">
              <Box
                component="a"
                href={CONTACT.github}
                target="_blank"
                sx={{
                  color: 'rgba(255,255,255,0.4)',
                  '&:hover': { color: '#FF4D00' },
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
                sx={{
                  color: 'rgba(255,255,255,0.4)',
                  '&:hover': { color: '#FF4D00' },
                  transition: 'color 0.2s',
                  display: 'flex',
                }}
              >
                <LinkedInIcon sx={{ fontSize: 20 }} />
              </Box>
            </Stack>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
