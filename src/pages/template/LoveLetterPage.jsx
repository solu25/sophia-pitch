import Nav from '../../components/Nav';
import Footer from '../../components/Footer';
import LLHero from '../../components/ll/LLHero';
import LLWhyMe from '../../components/ll/LLWhyMe';
import LLBento from '../../components/ll/LLBento';
import ContactSection from '../../components/ContactSection';
import LLSplitSection from '../../components/ll/LLSplitSection';
import LLHowIWork from '../../components/ll/LLHowIWork';

export default function LoveLetterPage({ company, slug }) {
  const sections = company.sections || [];

  return (
    <div style={{ backgroundColor: 'var(--bg)', minHeight: '100vh' }}>
      <Nav from={slug} />
      <main>
        <LLHero company={company} />
        <LLWhyMe company={company} />
        <LLBento company={company} />

        {sections.map((section, i) => (
          <LLSplitSection
            key={section.id}
            section={section}
            flip={i % 2 !== 0}
          />
        ))}

        {company.howIWork && <LLHowIWork howIWork={company.howIWork} />}
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
