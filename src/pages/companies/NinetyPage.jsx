import Nav from '../../components/Nav';
import { ninety } from './ninety';
import LLPageHero from '../../components/ll/LLPageHero';
import LLSummary from '../../components/ll/LLSummary';
import LLHowIWork from '../../components/ll/LLHowIWork';
import AIProjects from '../../components/AIProjects';
import LLSelectedProjects from '../../components/ll/LLSelectedProjects';
import LLCloseCta from '../../components/ll/LLCloseCta';

export default function NinetyPage() {
  return (
    <div style={{ backgroundColor: 'var(--bg)', minHeight: '100vh' }}>
      <Nav from="ninety" />
      <LLPageHero companyName={ninety.name} role={ninety.role} oneLiner={ninety.oneLiner} />
      <LLSummary heading={ninety.summaryHeading} rows={ninety.summaryRows} />
      <LLHowIWork howIWork={ninety.howIWork} />
      <AIProjects />
      <LLSelectedProjects projectIds={['designhub', 'roadrunner', 'arenalabs', 'navigation', 'myperks']} />
      <LLCloseCta closeText={ninety.close} from="ninety" />
    </div>
  );
}
