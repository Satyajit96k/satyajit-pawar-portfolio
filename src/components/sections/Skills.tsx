import { Box, Typography, Chip, Grid, Paper } from '@mui/material';
import PsychologyIcon from '@mui/icons-material/Psychology';
import WebIcon from '@mui/icons-material/Web';
import StorageIcon from '@mui/icons-material/Storage';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import SectionWrapper from '../common/SectionWrapper';
import { StaggerContainer, StaggerItem } from '../common/MotionWrapper';
import { SKILL_CATEGORIES } from '../../data/profile';

const CATEGORY_ICONS: Record<string, React.ReactNode> = {
  'AI & Machine Learning': <PsychologyIcon sx={{ color: '#FF4D00', fontSize: 22 }} />,
  'Frontend': <WebIcon sx={{ color: '#FF4D00', fontSize: 22 }} />,
  'Backend & Databases': <StorageIcon sx={{ color: '#FF4D00', fontSize: 22 }} />,
  'AI-Powered Dev Tools': <SmartToyIcon sx={{ color: '#FF4D00', fontSize: 22 }} />,
  'Automation & Tools': <AutoFixHighIcon sx={{ color: '#FF4D00', fontSize: 22 }} />,
};

interface SkillsProps {
  dark?: boolean;
}

export default function Skills({ dark = false }: SkillsProps) {
  return (
    <SectionWrapper
      id="skills"
      title="Skills & Expertise"
      subtitle="Technologies and domains I work with regularly."
      dark={dark}
    >
      <StaggerContainer>
        <Grid container spacing={3}>
          {SKILL_CATEGORIES.map((category) => (
            <Grid key={category.title} size={{ xs: 12, sm: 6 }}>
              <StaggerItem>
                <Paper
                  elevation={0}
                  sx={{
                    p: { xs: 2.5, sm: 3, md: 3.5 },
                    height: '100%',
                    bgcolor: dark ? 'rgba(255,255,255,0.04)' : '#F7F7F7',
                    border: '1px solid',
                    borderColor: dark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.08)',
                    position: 'relative',
                    overflow: 'hidden',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease',
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      height: 3,
                      background: 'linear-gradient(90deg, transparent, #FF4D00, transparent)',
                      transform: 'translateX(-100%)',
                      transition: 'transform 0.5s ease',
                    },
                    '&:hover': {
                      transform: 'translateY(-6px)',
                      boxShadow: '0 16px 40px rgba(255,77,0,0.18)',
                      borderColor: '#FF4D00',
                      '&::after': {
                        transform: 'translateX(0)',
                      },
                    },
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2.5 }}>
                    <Box
                      sx={{
                        p: 1,
                        bgcolor: dark ? 'rgba(255,77,0,0.12)' : 'rgba(255,77,0,0.08)',
                        borderRadius: 1,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      {CATEGORY_ICONS[category.title]}
                    </Box>
                    <Typography
                      variant="h4"
                      sx={{ color: dark ? '#FFFFFF' : '#0A0A0A' }}
                    >
                      {category.title}
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                    {category.skills.map((skill) => (
                      <Chip
                        key={skill}
                        label={skill}
                        size="small"
                        sx={{
                          bgcolor: dark ? 'rgba(255, 77, 0, 0.12)' : 'rgba(255, 77, 0, 0.06)',
                          color: dark ? '#FF6B2B' : '#CC3D00',
                          border: '1px solid',
                          borderColor: dark ? 'rgba(255, 77, 0, 0.2)' : 'rgba(255, 77, 0, 0.15)',
                          transition: 'transform 0.2s ease, background-color 0.2s ease',
                          '&:hover': {
                            transform: 'translateY(-2px)',
                            bgcolor: dark ? 'rgba(255, 77, 0, 0.2)' : 'rgba(255, 77, 0, 0.12)',
                          },
                        }}
                      />
                    ))}
                  </Box>
                </Paper>
              </StaggerItem>
            </Grid>
          ))}
        </Grid>
      </StaggerContainer>
    </SectionWrapper>
  );
}
