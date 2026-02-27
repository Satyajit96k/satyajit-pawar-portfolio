import {
  Box,
  Typography,
  Card,
  CardContent,
  Chip,
  Grid,
  Button,
  Stack,
} from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
import SectionWrapper from '../common/SectionWrapper';
import { StaggerContainer, StaggerItem } from '../common/MotionWrapper';
import { PROJECTS } from '../../data/profile';

interface ProjectsProps {
  dark?: boolean;
}

export default function Projects({ dark = false }: ProjectsProps) {
  return (
    <SectionWrapper
      id="projects"
      title="Projects"
      subtitle="Systems and applications I've designed and built."
      dark={dark}
    >
      <StaggerContainer>
        <Grid container spacing={3}>
          {PROJECTS.map((project) => (
            <Grid key={project.title} size={{ xs: 12, md: 6 }}>
              <StaggerItem>
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    bgcolor: dark ? 'rgba(255,255,255,0.04)' : '#F7F7F7',
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
                  <CardContent sx={{ p: { xs: 2.5, sm: 3, md: 3.5 }, flexGrow: 1 }}>
                    <Typography
                      variant="h4"
                      sx={{ color: dark ? '#FFFFFF' : '#0A0A0A', mb: 1.5 }}
                    >
                      {project.title}
                    </Typography>

                    <Typography variant="body1" sx={{ mb: 2.5 }}>
                      {project.description}
                    </Typography>

                    <Box component="ul" sx={{ pl: 2, mb: 2.5, mt: 0 }}>
                      {project.highlights.map((item) => (
                        <Box
                          component="li"
                          key={item}
                          sx={{
                            fontSize: '0.875rem',
                            lineHeight: 1.7,
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

                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.75, mb: 2.5 }}>
                      {project.tags.map((tag) => (
                        <Chip
                          key={tag}
                          label={tag}
                          size="small"
                          variant="outlined"
                          sx={{
                            fontSize: '0.7rem',
                            borderColor: dark ? 'rgba(255,255,255,0.15)' : 'rgba(0,0,0,0.12)',
                            color: dark ? 'rgba(255,255,255,0.5)' : '#555555',
                          }}
                        />
                      ))}
                    </Box>

                    <Stack direction="row" spacing={1.5}>
                      {project.github && (
                        <Button
                          size="small"
                          startIcon={<GitHubIcon />}
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          sx={{
                            color: dark ? 'rgba(255,255,255,0.5)' : '#555555',
                            '&:hover': { color: '#FF4D00' },
                          }}
                        >
                          Code
                        </Button>
                      )}
                      {project.link && (
                        <Button
                          size="small"
                          startIcon={<LaunchIcon />}
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          sx={{
                            color: dark ? 'rgba(255,255,255,0.5)' : '#555555',
                            '&:hover': { color: '#FF4D00' },
                          }}
                        >
                          Live Demo
                        </Button>
                      )}
                    </Stack>
                  </CardContent>
                </Card>
              </StaggerItem>
            </Grid>
          ))}
        </Grid>
      </StaggerContainer>
    </SectionWrapper>
  );
}
