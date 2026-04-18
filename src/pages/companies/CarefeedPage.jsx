import Nav from '../../components/Nav';
import { carefeed } from './carefeed';
import LLPageHero from '../../components/ll/LLPageHero';
import LLHowIWork from '../../components/ll/LLHowIWork';
import AIProjects from '../../components/AIProjects';
import LLSelectedProjects from '../../components/ll/LLSelectedProjects';
import LLCloseCta from '../../components/ll/LLCloseCta';

export default function CarefeedPage() {
  return (
    <div style={{ backgroundColor: 'var(--bg)', minHeight: '100vh' }}>
      <Nav from="carefeed" />
      <LLPageHero companyName={carefeed.name} role={carefeed.role} oneLiner={carefeed.oneLiner} />
      <LLHowIWork howIWork={carefeed.howIWork} />
      <AIProjects />
      <LLSelectedProjects projectIds={['arenalabs', 'roadrunner', 'designhub', 'myperks']} />
      <LLCloseCta closeText={carefeed.close} from="carefeed" />
    </div>
  );
}
