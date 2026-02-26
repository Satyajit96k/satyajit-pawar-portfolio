import { useState } from 'react';
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
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import { NAV_ITEMS } from '../../data/profile';

export default function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const scrolled = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          bgcolor: scrolled ? 'rgba(10, 10, 10, 0.95)' : 'transparent',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
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
              }}
            >
              SP<Box component="span" sx={{ color: '#FF4D00' }}>.</Box>
            </Typography>

            {/* Desktop nav */}
            <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 0.5 }}>
              {NAV_ITEMS.map((item) => (
                <Button
                  key={item.label}
                  href={item.href}
                  sx={{
                    color: 'rgba(255,255,255,0.6)',
                    fontSize: '0.8rem',
                    fontWeight: 500,
                    px: 2,
                    letterSpacing: '0.03em',
                    '&:hover': {
                      color: '#FF4D00',
                      bgcolor: 'transparent',
                    },
                  }}
                >
                  {item.label}
                </Button>
              ))}
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

      {/* Mobile drawer — full screen overlay */}
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
        {/* Drawer header */}
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

        {/* Drawer nav links */}
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
            {NAV_ITEMS.map((item) => (
              <ListItemButton
                key={item.label}
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
                    fontSize: '1.8rem',
                    color: '#FFFFFF',
                    letterSpacing: '-0.02em',
                    transition: 'color 0.2s',
                  }}
                />
              </ListItemButton>
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
