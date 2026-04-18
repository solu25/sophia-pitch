import { useRef, useState, useEffect } from 'react';
import { jenny } from '../data/jenny';
import LLCaseStudy from './ll/LLCaseStudy';
import TextReveal from './TextReveal';

export default function Projects({ projects }) {
  const displayProjects = projects || jenny.selectedProjects;

  const headerRef = useRef(null);
  const [headerVisible, setHeaderVisible] = useState(false);

  useEffect(() => {
    const el = headerRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setHeaderVisible(true); obs.disconnect(); } },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      id="projects"
      style={{ borderTop: '1px solid var(--border)', padding: '100px 0 80px' }}
    >
      <div className="section-pad" style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 48px' }}>

        {/* Header */}
        <div
          ref={headerRef}
          style={{
            marginBottom: '64px',
            transition: 'opacity 0.7s ease, filter 0.7s ease',
            opacity: headerVisible ? 1 : 0,
            filter: headerVisible ? 'blur(0px)' : 'blur(12px)',
          }}
        >
          <span style={{
            color: 'var(--text)', fontSize: 'var(--type-small)',
            fontFamily: 'var(--font-badge)',
            fontWeight: 'var(--weight-medium)', letterSpacing: 'var(--tracking-badge)',
            textTransform: 'uppercase', lineHeight: 'var(--leading-h5)',
            marginBottom: '24px', display: 'block',
          }}>
            Selected work
          </span>
          <TextReveal>
            <h2 style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 'var(--type-h2)',
              fontWeight: 'var(--weight-black)',
              lineHeight: 'var(--leading-tight)',
              letterSpacing: 'var(--tracking-tight)',
              color: 'var(--text)',
              margin: '0 0 12px',
              maxWidth: '560px',
            }}>
              Full case studies. Every decision explained.
            </h2>
          </TextReveal>
          <p style={{ color: 'var(--muted)', fontSize: 'var(--type-small)' }}>
            {displayProjects.length} projects
          </p>
        </div>

        {/* Case studies */}
        <div>
          {displayProjects.map((project, i) => (
            <LLCaseStudy key={project.id} project={project} index={i} />
          ))}
        </div>

      </div>
    </section>
  );
}
