import Nav from '../../components/Nav';
import { kovo } from './kovo';
import LLPageHero from '../../components/ll/LLPageHero';
import LLSummary from '../../components/ll/LLSummary';
import LLHowIWork from '../../components/ll/LLHowIWork';
import AIProjects from '../../components/AIProjects';
import LLSelectedProjects from '../../components/ll/LLSelectedProjects';
import LLCloseCta from '../../components/ll/LLCloseCta';

export default function KovoPage() {
  return (
    <div style={{ backgroundColor: 'var(--bg)', minHeight: '100vh' }}>
      <Nav from="kovo" />
      <LLPageHero companyName={kovo.name} role={kovo.role} oneLiner={kovo.oneLiner} />
      <LLSummary heading={kovo.summaryHeading} rows={kovo.summaryRows} />
      <LLHowIWork howIWork={kovo.howIWork} />
      <AIProjects />
      <LLSelectedProjects projectIds={['designhub', 'roadrunner', 'megprime', 'arenalabs', 'myperks']} />
      <LLCloseCta closeText={kovo.close} from="kovo" />
    </div>
  );
}
