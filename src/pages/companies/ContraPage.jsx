import Nav from '../../components/Nav';
import { contra } from './contra';
import LLPageHero from '../../components/ll/LLPageHero';
import LLSummary from '../../components/ll/LLSummary';
import LLHowIWork from '../../components/ll/LLHowIWork';
import AIProjects from '../../components/AIProjects';
import LLSelectedProjects from '../../components/ll/LLSelectedProjects';
import LLCloseCta from '../../components/ll/LLCloseCta';

export default function ContraPage() {
  return (
    <div style={{ backgroundColor: 'var(--bg)', minHeight: '100vh' }}>
      <Nav from="contra" />
      <LLPageHero companyName={contra.name} role={contra.role} oneLiner={contra.oneLiner} />
      <LLSummary heading={contra.summaryHeading} rows={contra.summaryRows} />
      <LLHowIWork howIWork={contra.howIWork} />
      <AIProjects />
      <LLSelectedProjects projectIds={['designhub', 'roadrunner', 'arenalabs', 'navigation', 'myperks']} />
      <LLCloseCta closeText={contra.close} from="contra" />
    </div>
  );
}
