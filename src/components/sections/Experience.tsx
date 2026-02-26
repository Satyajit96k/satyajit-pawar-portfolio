import { Box, Typography, Paper } from '@mui/material';
import WorkIcon from '@mui/icons-material/Work';
import SectionWrapper from '../common/SectionWrapper';
import { EXPERIENCES } from '../../data/profile';

interface ExperienceProps {
  dark?: boolean;
}

export default function Experience({ dark = false }: ExperienceProps) {
  return (
    <SectionWrapper id="experience" title="Experience" dark={dark}>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
        {EXPERIENCES.map((exp) => (
          <Paper
            key={`${exp.company}-${exp.role}`}
            elevation={0}
            sx={{
              p: { xs: 3, md: 4 },
              bgcolor: dark ? 'rgba(255,255,255,0.04)' : '#F7F7F7',
              border: '1px solid',
              borderColor: dark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.08)',
              position: 'relative',
              '&::before': {
                content: '""',
                position: 'absolute',
                left: 0,
                top: 0,
                bottom: 0,
                width: 4,
                bgcolor: '#FF4D00',
              },
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2, mb: 2 }}>
              <Box
                sx={{
                  p: 1,
                  bgcolor: dark ? 'rgba(255, 77, 0, 0.15)' : 'rgba(255, 77, 0, 0.08)',
                  display: { xs: 'none', sm: 'flex' },
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <WorkIcon sx={{ color: '#FF4D00', fontSize: 20 }} />
              </Box>
              <Box sx={{ flexGrow: 1 }}>
                <Typography
                  variant="h4"
                  sx={{ color: dark ? '#FFFFFF' : '#0A0A0A' }}
                >
                  {exp.role}
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mt: 0.5 }}>
                  <Typography
                    variant="body2"
                    sx={{ color: '#FF4D00', fontWeight: 700 }}
                  >
                    {exp.company}
                  </Typography>
                  <Box
                    sx={{
                      width: 4,
                      height: 4,
                      borderRadius: '50%',
                      bgcolor: dark ? 'rgba(255,255,255,0.3)' : '#999',
                    }}
                  />
                  <Typography variant="body2">
                    {exp.period}
                  </Typography>
                </Box>
              </Box>
            </Box>

            <Typography variant="body1" sx={{ mb: 2 }}>
              {exp.description}
            </Typography>

            <Box component="ul" sx={{ pl: 2, m: 0 }}>
              {exp.responsibilities.map((item) => (
                <Box
                  component="li"
                  key={item}
                  sx={{
                    fontSize: '0.875rem',
                    lineHeight: 1.8,
                    mb: 0.5,
                    color: dark ? 'rgba(255,255,255,0.75)' : '#444444',
                    '&::marker': {
                      color: '#FF4D00',
                    },
                  }}
                >
                  {item}
                </Box>
              ))}
            </Box>
          </Paper>
        ))}
      </Box>
    </SectionWrapper>
  );
}
