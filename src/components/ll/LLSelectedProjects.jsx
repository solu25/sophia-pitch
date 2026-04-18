import { jenny } from '../../data/jenny';
import LLCaseStudy from './LLCaseStudy';
import Eyebrow from './Eyebrow';

export default function LLSelectedProjects({ projectIds }) {
  const projects = jenny.selectedProjects
    .filter(p => projectIds.includes(p.id))
    .sort((a, b) => projectIds.indexOf(a.id) - projectIds.indexOf(b.id));

  return (
    <section style={{ padding: 'var(--space-96) 0 var(--space-80)' }}>
      <div className="section-pad" style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 var(--space-48)' }}>
        <Eyebrow>
          <span style={{ color: 'var(--muted)', textAlign: 'center', display: 'block' }}>Selected work</span>
        </Eyebrow>
        <h2 style={{
          fontFamily: 'var(--font-sans)', fontSize: 'var(--type-h2)', fontWeight: 'var(--weight-medium)',
          lineHeight: 'var(--leading-h2)', letterSpacing: 'var(--tracking-h2)',
          color: 'var(--text)', margin: '0 auto var(--space-48)', maxWidth: '650px', textAlign: 'center',
        }}>
          Recent projects
        </h2>
        <div>
          {projects.map((project, i) => (
            <LLCaseStudy key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
