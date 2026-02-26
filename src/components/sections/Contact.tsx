import { Box, Typography, Button, Stack, Paper } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import SectionWrapper from '../common/SectionWrapper';
import { CONTACT } from '../../data/profile';

interface ContactProps {
  dark?: boolean;
}

export default function Contact({ dark = false }: ContactProps) {
  return (
    <SectionWrapper id="contact" dark={dark}>
      <Paper
        elevation={0}
        sx={{
          p: { xs: 5, md: 8 },
          textAlign: 'center',
          bgcolor: dark ? 'rgba(255,255,255,0.04)' : '#F7F7F7',
          border: '1px solid',
          borderColor: dark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.08)',
        }}
      >
        <Typography
          variant="h2"
          sx={{ color: dark ? '#FFFFFF' : '#0A0A0A', mb: 2 }}
        >
          {CONTACT.heading}
        </Typography>

        <Typography
          variant="body1"
          sx={{
            maxWidth: 520,
            mx: 'auto',
            mb: 5,
            fontSize: '1.05rem',
            color: dark ? 'rgba(255,255,255,0.6)' : '#555555',
          }}
        >
          {CONTACT.description}
        </Typography>

        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={2}
          justifyContent="center"
        >
          <Button
            variant="contained"
            color="primary"
            startIcon={<EmailIcon />}
            href={`mailto:${CONTACT.email}`}
            sx={{ px: 4 }}
          >
            Send Email
          </Button>
          <Button
            variant="outlined"
            startIcon={<GitHubIcon />}
            href={CONTACT.github}
            target="_blank"
            sx={{
              color: dark ? '#FFFFFF' : '#0A0A0A',
              borderColor: dark ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.2)',
              '&:hover': {
                borderColor: '#FF4D00',
                color: '#FF4D00',
              },
            }}
          >
            GitHub
          </Button>
          <Button
            variant="outlined"
            startIcon={<LinkedInIcon />}
            href={CONTACT.linkedin}
            target="_blank"
            sx={{
              color: dark ? '#FFFFFF' : '#0A0A0A',
              borderColor: dark ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.2)',
              '&:hover': {
                borderColor: '#FF4D00',
                color: '#FF4D00',
              },
            }}
          >
            LinkedIn
          </Button>
        </Stack>
      </Paper>
    </SectionWrapper>
  );
}
