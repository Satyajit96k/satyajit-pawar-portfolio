import { Box } from '@mui/material';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Experience from './components/sections/Experience';
import Contact from './components/sections/Contact';
import Footer from './components/layout/Footer';

export default function App() {
  return (
    <Box sx={{ minHeight: '100vh' }}>
      <Navbar />
      <Hero />
      <About dark={false} />
      <Skills dark />
      <Projects dark={false} />
      <Experience dark />
      <Contact dark={false} />
      <Footer />
    </Box>
  );
}
