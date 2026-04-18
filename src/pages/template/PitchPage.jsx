import Nav from '../../components/Nav';
import Hero from '../../components/Hero';
import Differentiators from '../../components/Differentiators';
import Testimonials from '../../components/Testimonials';
import Projects from '../../components/Projects';
import ContactSection from '../../components/ContactSection';
import Footer from '../../components/Footer';
import AIProjects from '../../components/AIProjects';
import { jenny } from '../../data/jenny';

export default function PitchPage() {
  return (
    <div style={{ backgroundColor: 'var(--bg)', minHeight: '100vh' }}>
      <Nav />
      <main>
        <Hero />
        <Differentiators />
        <AIProjects />
        <Testimonials />
        <Projects />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
