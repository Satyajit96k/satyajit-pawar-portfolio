import { Box, Typography, Paper } from '@mui/material';
import WorkIcon from '@mui/icons-material/Work';
import SectionWrapper from '../common/SectionWrapper';
import { StaggerContainer, StaggerItem } from '../common/MotionWrapper';
import { EXPERIENCES } from '../../data/profile';

interface ExperienceProps {
  dark?: boolean;
}

export default function Experience({ dark = false }: ExperienceProps) {
  return (
    <SectionWrapper id="experience" title="Experience" dark={dark}>
      <StaggerContainer>
        {/* Timeline container */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 3,
            position: 'relative',
            // Vertical timeline line (desktop only)
            '&::before': {
              content: '""',
              position: 'absolute',
              left: 16,
              top: 0,
              bottom: 0,
              width: 2,
              bgcolor: dark ? 'rgba(255,77,0,0.25)' : 'rgba(255,77,0,0.2)',
              display: { xs: 'none', md: 'block' },
            },
          }}
        >
          {EXPERIENCES.map((exp) => (
            <StaggerItem key={`${exp.company}-${exp.role}`}>
              <Paper
                elevation={0}
                sx={{
                  p: { xs: 2.5, md: 4 },
                  ml: { xs: 0, md: 5 },
                  bgcolor: dark ? 'rgba(255,255,255,0.04)' : '#F7F7F7',
                  border: '1px solid',
                  borderColor: dark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.08)',
                  position: 'relative',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-6px)',
                    boxShadow: '0 16px 40px rgba(255,77,0,0.18)',
                    borderColor: '#FF4D00',
                  },
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    left: 0,
                    top: 0,
                    bottom: 0,
                    width: 4,
                    bgcolor: '#FF4D00',
                  },
                  // Orange dot on timeline (desktop only)
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    left: { xs: 'auto', md: -33 },
                    top: 24,
                    width: 12,
                    height: 12,
                    borderRadius: '50%',
                    bgcolor: '#FF4D00',
                    border: '2px solid',
                    borderColor: dark ? '#0A0A0A' : '#FFFFFF',
                    display: { xs: 'none', md: 'block' },
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
            </StaggerItem>
          ))}
        </Box>
      </StaggerContainer>
    </SectionWrapper>
  );
}
