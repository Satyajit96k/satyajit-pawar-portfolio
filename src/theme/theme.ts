import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#FF4D00',
      light: '#FF6B2B',
      dark: '#CC3D00',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#0A0A0A',
      light: '#333333',
      dark: '#000000',
    },
    background: {
      default: '#FFFFFF',
      paper: '#F7F7F7',
    },
    text: {
      primary: '#0A0A0A',
      secondary: '#555555',
    },
    divider: 'rgba(0, 0, 0, 0.08)',
  },
  typography: {
    fontFamily: '"Inter", "Helvetica Neue", Arial, sans-serif',
    h1: {
      fontSize: '5.5rem',
      fontWeight: 800,
      lineHeight: 0.95,
      letterSpacing: '-0.04em',
    },
    h2: {
      fontSize: '3rem',
      fontWeight: 800,
      lineHeight: 1.05,
      letterSpacing: '-0.03em',
    },
    h3: {
      fontSize: '1.5rem',
      fontWeight: 500,
      lineHeight: 1.3,
      letterSpacing: '-0.01em',
    },
    h4: {
      fontSize: '1.25rem',
      fontWeight: 700,
      lineHeight: 1.3,
      letterSpacing: '-0.01em',
    },
    h5: {
      fontSize: '0.85rem',
      fontWeight: 700,
      lineHeight: 1.4,
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
    },
    body1: {
      fontSize: '1.05rem',
      lineHeight: 1.75,
    },
    body2: {
      fontSize: '0.9rem',
      lineHeight: 1.6,
    },
    button: {
      textTransform: 'none',
      fontWeight: 600,
      letterSpacing: '0.01em',
    },
  },
  shape: {
    borderRadius: 0,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: {
          scrollBehavior: 'smooth',
        },
        body: {
          backgroundColor: '#FFFFFF',
        },
        '::selection': {
          backgroundColor: '#FF4D00',
          color: '#FFFFFF',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 0,
          padding: '12px 28px',
          fontSize: '0.9rem',
        },
        contained: {
          boxShadow: 'none',
          '&:hover': {
            boxShadow: 'none',
          },
        },
        outlined: {
          borderWidth: 2,
          '&:hover': {
            borderWidth: 2,
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
          boxShadow: 'none',
          borderRadius: 0,
          border: '1px solid rgba(0, 0, 0, 0.08)',
          transition: 'border-color 0.2s ease',
          '&:hover': {
            borderColor: '#FF4D00',
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 0,
          fontWeight: 600,
          fontSize: '0.75rem',
          letterSpacing: '0.02em',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
          borderRadius: 0,
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          '@media (min-width: 1200px)': {
            maxWidth: 1100,
          },
        },
      },
    },
  },
});

export default theme;
