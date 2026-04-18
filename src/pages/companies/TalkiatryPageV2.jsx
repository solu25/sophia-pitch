import Nav from '../../components/Nav';
import { talkiatry } from './talkiatry';
import LLPageHero from '../../components/ll/LLPageHero';
import LLSummary from '../../components/ll/LLSummary';
import LLJdSection from '../../components/ll/LLJdSection';
import LLHowIWork from '../../components/ll/LLHowIWork';
import AIProjects from '../../components/AIProjects';
import LLSelectedProjects from '../../components/ll/LLSelectedProjects';
import LLCloseCta from '../../components/ll/LLCloseCta';

export default function TalkiatryPageV2() {
  return (
    <div style={{ backgroundColor: 'var(--bg)', minHeight: '100vh' }}>
      <Nav from="talkiatry" />
      <LLPageHero companyName={talkiatry.name} role={talkiatry.role} oneLiner={talkiatry.oneLiner} />
      <LLSummary heading={talkiatry.summaryHeading} rows={talkiatry.summaryRows} />

      {/* JD-mapped sections */}
      {talkiatry.sections.map((section, i) => (
        <LLJdSection key={section.id} section={section} index={i} />
      ))}

      <LLHowIWork howIWork={talkiatry.howIWork} />
      <AIProjects />
      <LLSelectedProjects projectIds={['roadrunner', 'megprime', 'arenalabs']} />
      <LLCloseCta closeText={talkiatry.close} from="talkiatry" />
    </div>
  );
}
