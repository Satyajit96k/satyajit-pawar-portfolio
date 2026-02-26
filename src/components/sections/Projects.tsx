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
      <Grid container spacing={3}>
        {PROJECTS.map((project) => (
          <Grid key={project.title} size={{ xs: 12, md: 6 }}>
            <Card
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                bgcolor: dark ? 'rgba(255,255,255,0.04)' : '#F7F7F7',
                borderColor: dark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.08)',
              }}
            >
              <CardContent sx={{ p: 3.5, flexGrow: 1 }}>
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
          </Grid>
        ))}
      </Grid>
    </SectionWrapper>
  );
}
