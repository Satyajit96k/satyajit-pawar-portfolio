import { useState, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Container,
  IconButton,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  useScrollTrigger,
  keyframes,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import { NAV_ITEMS } from '../../data/profile';

const SECTION_IDS = NAV_ITEMS.map((item) => item.href.replace('#', ''));

const slideInLeft = keyframes`
  from { opacity: 0; transform: translateX(-30px); }
  to { opacity: 1; transform: translateX(0); }
`;

export default function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const scrolled = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-30% 0px -60% 0px', threshold: 0 }
    );

    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          top: 0,
          bgcolor: scrolled ? 'rgba(10, 10, 10, 0.4)' : 'transparent',
          backdropFilter: 'blur(12px)',
          borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : 'none',
          transition: 'all 0.3s ease',
          zIndex: 10,
        }}
      >
        <Container>
          <Toolbar disableGutters sx={{ height: { xs: 64, md: 72 } }}>
            {/* Logo */}
            <Typography
              component="a"
              href="#"
              sx={{
                color: '#FFFFFF',
                textDecoration: 'none',
                fontWeight: 800,
                letterSpacing: '-0.03em',
                flexGrow: 1,
                fontSize: '1.4rem',
                transition: 'transform 0.2s ease',
                display: 'inline-block',
                '&:hover': { transform: 'scale(1.08)' },
              }}
            >
              SP<Box component="span" sx={{ color: '#FF4D00' }}>.</Box>
            </Typography>

            {/* Desktop nav */}
            <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 0.5 }}>
              {NAV_ITEMS.map((item) => {
                const sectionId = item.href.replace('#', '');
                const isActive = activeSection === sectionId;
                return (
                  <Button
                    key={item.label}
                    href={item.href}
                    sx={{
                      color: isActive ? '#FF4D00' : 'rgba(255,255,255,0.6)',
                      fontSize: '0.8rem',
                      fontWeight: isActive ? 600 : 500,
                      px: 2,
                      letterSpacing: '0.03em',
                      position: 'relative',
                      '&:hover': {
                        color: '#FF4D00',
                        bgcolor: 'transparent',
                      },
                      '&::after': isActive
                        ? {
                            content: '""',
                            position: 'absolute',
                            bottom: 6,
                            left: '50%',
                            transform: 'translateX(-50%)',
                            width: 5,
                            height: 5,
                            borderRadius: '50%',
                            bgcolor: '#FF4D00',
                          }
                        : {},
                    }}
                  >
                    {item.label}
                  </Button>
                );
              })}
              <Button
                href="/resume.pdf"
                download="Satyajit_Pawar_Resume.pdf"
                startIcon={<FileDownloadIcon sx={{ fontSize: 16 }} />}
                sx={{
                  color: '#FF4D00',
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  px: 2,
                  ml: 1,
                  border: '1.5px solid #FF4D00',
                  '&:hover': {
                    bgcolor: '#FF4D00',
                    color: '#FFFFFF',
                  },
                }}
              >
                Resume
              </Button>
            </Box>

            {/* Mobile hamburger */}
            <IconButton
              onClick={() => setDrawerOpen(true)}
              sx={{ display: { md: 'none' }, color: '#FFFFFF' }}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile drawer */}
      <Drawer
        anchor="top"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        PaperProps={{
          sx: {
            width: '100%',
            height: '100vh',
            bgcolor: '#0A0A0A',
          },
        }}
      >
        <Container>
          <Toolbar disableGutters sx={{ height: 64, justifyContent: 'space-between' }}>
            <Typography
              sx={{
                color: '#FFFFFF',
                fontWeight: 800,
                fontSize: '1.4rem',
                letterSpacing: '-0.03em',
              }}
            >
              SP<Box component="span" sx={{ color: '#FF4D00' }}>.</Box>
            </Typography>
            <IconButton onClick={() => setDrawerOpen(false)} sx={{ color: '#FFFFFF' }}>
              <CloseIcon />
            </IconButton>
          </Toolbar>
        </Container>

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            flexGrow: 1,
            px: 4,
          }}
        >
          <List disablePadding>
            {NAV_ITEMS.map((item, i) => (
              <Box
                key={item.label}
                sx={{
                  animation: drawerOpen
                    ? `${slideInLeft} 0.4s ease-out ${i * 0.08}s both`
                    : 'none',
                }}
              >
                <ListItemButton
                  component="a"
                  href={item.href}
                  onClick={() => setDrawerOpen(false)}
                  sx={{
                    py: 2,
                    borderBottom: '1px solid rgba(255,255,255,0.06)',
                    '&:hover': {
                      bgcolor: 'transparent',
                      '& .MuiTypography-root': { color: '#FF4D00' },
                    },
                  }}
                >
                  <ListItemText
                    primary={item.label}
                    primaryTypographyProps={{
                      fontWeight: 700,
                      fontSize: { xs: '1.5rem', sm: '1.8rem' },
                      color: '#FFFFFF',
                      letterSpacing: '-0.02em',
                      sx: { transition: 'color 0.2s' },
                    }}
                  />
                </ListItemButton>
              </Box>
            ))}
          </List>

          <Button
            fullWidth
            href="/resume.pdf"
            download="Satyajit_Pawar_Resume.pdf"
            startIcon={<FileDownloadIcon />}
            onClick={() => setDrawerOpen(false)}
            sx={{
              mt: 4,
              color: '#FF4D00',
              fontWeight: 700,
              fontSize: '1rem',
              py: 1.5,
              border: '2px solid #FF4D00',
              '&:hover': {
                bgcolor: '#FF4D00',
                color: '#FFFFFF',
              },
            }}
          >
            Download Resume
          </Button>
        </Box>
      </Drawer>
    </>
  );
}
