import { Box, Typography, Grid, Paper } from '@mui/material';
import SectionWrapper from '../common/SectionWrapper';
import { ABOUT } from '../../data/profile';

interface AboutProps {
  dark?: boolean;
}

export default function About({ dark = false }: AboutProps) {
  return (
    <SectionWrapper id="about" title="About Me" dark={dark}>
      <Grid container spacing={6}>
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
                  p: 3,
                  bgcolor: dark ? 'rgba(255,255,255,0.04)' : '#F7F7F7',
                  border: '1px solid',
                  borderColor: dark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.08)',
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
