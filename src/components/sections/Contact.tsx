import { Typography, Button, Stack, Paper } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
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
          p: { xs: 3, sm: 4, md: 8 },
          textAlign: 'center',
          bgcolor: dark ? 'rgba(255,255,255,0.04)' : '#F7F7F7',
          border: '1px solid',
          borderColor: dark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.08)',
          position: 'relative',
          overflow: 'hidden',
          transition: 'transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease',
          '&::before': {
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
            '&::before': {
              transform: 'translateX(0)',
            },
          },
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
            mb: { xs: 3, md: 5 },
            fontSize: '1.05rem',
            color: dark ? 'rgba(255,255,255,0.6)' : '#555555',
          }}
        >
          {CONTACT.description}
        </Typography>

        <Stack
          direction={{ xs: 'column', md: 'row' }}
          spacing={2}
          justifyContent="center"
          flexWrap="wrap"
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
            variant="contained"
            startIcon={<WhatsAppIcon />}
            href={`https://wa.me/91${CONTACT.phone}`}
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              px: 4,
              bgcolor: '#25D366',
              '&:hover': { bgcolor: '#1DA851' },
            }}
          >
            WhatsApp
          </Button>
          <Button
            variant="outlined"
            startIcon={<PhoneIcon />}
            href={`tel:+91${CONTACT.phone}`}
            sx={{
              color: dark ? '#FFFFFF' : '#0A0A0A',
              borderColor: dark ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.2)',
              '&:hover': {
                borderColor: '#FF4D00',
                color: '#FF4D00',
              },
            }}
          >
            Call
          </Button>
          <Button
            variant="outlined"
            startIcon={<GitHubIcon />}
            href={CONTACT.github}
            target="_blank"
            rel="noopener noreferrer"
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
            rel="noopener noreferrer"
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
