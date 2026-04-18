import Nav from '../../components/Nav';
import { mmc } from './mmc';
import LLPageHero from '../../components/ll/LLPageHero';
import LLSummary from '../../components/ll/LLSummary';
import LLHowIWork from '../../components/ll/LLHowIWork';
import AIProjects from '../../components/AIProjects';
import LLSelectedProjects from '../../components/ll/LLSelectedProjects';
import LLCloseCta from '../../components/ll/LLCloseCta';

export default function MmcPage() {
  return (
    <div style={{ backgroundColor: 'var(--bg)', minHeight: '100vh' }}>
      <Nav from="mmc" />
      <LLPageHero companyName={mmc.name} role={mmc.role} oneLiner={mmc.oneLiner} />
      <LLSummary heading={mmc.summaryHeading} rows={mmc.summaryRows} />
      <LLHowIWork howIWork={mmc.howIWork} />
      <AIProjects />
      <LLSelectedProjects projectIds={['designhub', 'roadrunner', 'arenalabs', 'navigation', 'myperks']} />
      <LLCloseCta closeText={mmc.close} from="mmc" />
    </div>
  );
}
