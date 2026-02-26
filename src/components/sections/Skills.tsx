import { Box, Typography, Chip, Grid, Paper } from '@mui/material';
import SectionWrapper from '../common/SectionWrapper';
import { SKILL_CATEGORIES } from '../../data/profile';

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
      <Grid container spacing={3}>
        {SKILL_CATEGORIES.map((category) => (
          <Grid key={category.title} size={{ xs: 12, sm: 6 }}>
            <Paper
              elevation={0}
              sx={{
                p: 3.5,
                height: '100%',
                bgcolor: dark ? 'rgba(255,255,255,0.04)' : '#F7F7F7',
                border: '1px solid',
                borderColor: dark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.08)',
              }}
            >
              <Typography
                variant="h4"
                sx={{ color: dark ? '#FFFFFF' : '#0A0A0A', mb: 2.5 }}
              >
                {category.title}
              </Typography>
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
                    }}
                  />
                ))}
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </SectionWrapper>
  );
}
