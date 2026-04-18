import { useRef, useState, useEffect } from 'react';
import TextReveal from './TextReveal';

const steps = [
  {
    number: '01',
    title: 'Research first',
    body: "Studies, interviews, analytics — every decision traces to evidence.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="7"/>
        <line x1="16.5" y1="16.5" x2="22" y2="22"/>
      </svg>
    ),
  },
  {
    number: '02',
    title: 'Frame the right problem',
    body: "Most briefs describe symptoms. I trace back to root cause — then align stakeholders on what we're actually solving.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2"/>
        <line x1="9" y1="3" x2="9" y2="21"/>
        <line x1="3" y1="9" x2="9" y2="9"/>
      </svg>
    ),
  },
  {
    number: '03',
    title: 'Design in code',
    body: 'I prototype in React — faster iteration, real interactions, no handoff gap.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6"/>
        <polyline points="8 6 2 12 8 18"/>
      </svg>
    ),
  },
  {
    number: '04',
    title: 'Ship and measure',
    body: 'Every project ends with metrics. Decisions tied to conversion, retention, or revenue.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/>
        <polyline points="16 7 22 7 22 13"/>
      </svg>
    ),
  },
];

export default function ProcessSection() {
  const headerRef = useRef(null);
  const stepsRef = useRef(null);
  const [headerVisible, setHeaderVisible] = useState(false);
  const [stepsVisible, setStepsVisible] = useState(false);

  useEffect(() => {
    const makeObserver = (ref, setter) => {
      const el = ref.current;
      if (!el) return () => {};
      const obs = new IntersectionObserver(
        ([e]) => { if (e.isIntersecting) { setter(true); obs.disconnect(); } },
        { threshold: 0.1 }
      );
      obs.observe(el);
      return () => obs.disconnect();
    };
    const c1 = makeObserver(headerRef, setHeaderVisible);
    const c2 = makeObserver(stepsRef, setStepsVisible);
    return () => { c1(); c2(); };
  }, []);

  return (
    <section style={{
      padding: '100px 0',
      position: 'relative',
      overflow: 'hidden',
      background: 'var(--bg)',
    }}>
      {/* Noise overlay */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 0,
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
        backgroundRepeat: 'repeat',
        backgroundSize: '200px 200px',
        opacity: 0.06,
        mixBlendMode: 'multiply',
        pointerEvents: 'none',
      }} />

      <div className="section-pad" style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 48px', position: 'relative', zIndex: 1 }}>

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
            How I work
          </span>
          <TextReveal>
            <h2 style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 'var(--type-h2)',
              fontWeight: 'var(--weight-black)',
              lineHeight: 'var(--leading-tight)',
              letterSpacing: 'var(--tracking-tight)',
              color: 'var(--text)',
              margin: 0,
              maxWidth: '480px',
            }}>
              Research first. Then I build.
            </h2>
          </TextReveal>
        </div>

        {/* Horizontal timeline */}
        <div
          ref={stepsRef}
          style={{
            position: 'relative',
            transition: 'opacity 0.7s ease 0.1s, filter 0.7s ease 0.1s',
            opacity: stepsVisible ? 1 : 0,
            filter: stepsVisible ? 'blur(0px)' : 'blur(12px)',
          }}
        >
          <div className="process-grid" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '24px',
          }}>
            {steps.map((step) => (
              <div
                key={step.number}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '20px',
                }}
              >
                {/* Icon box */}
                <div style={{ position: 'relative', zIndex: 1 }}>
                  <div style={{
                    background: 'linear-gradient(180deg, #a89fef 0%, #cfc9f5 65%, #eae8fb 100%)',
                    borderRadius: 'var(--radius)',
                    padding: '6px',
                    width: '72px',
                    height: '72px',
                    flexShrink: 0,
                    overflow: 'hidden',
                    position: 'relative',
                  }}>
                    <div style={{
                      backdropFilter: 'blur(3px)',
                      WebkitBackdropFilter: 'blur(3px)',
                      background: 'rgba(255,255,255,0.75)',
                      border: '1px solid var(--glass-stroke)',
                      borderRadius: '9px',
                      boxShadow: 'var(--shadow-glass)',
                      width: '100%',
                      height: '100%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#6b55e8',
                    }}>
                      {step.icon}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <span style={{
                    fontSize: 'var(--type-small)',
                    fontFamily: 'var(--font-badge)',
                    fontWeight: 'var(--weight-medium)',
                    letterSpacing: 'var(--tracking-badge)',
                    color: 'var(--accent)',
                  }}>
                    {step.number}
                  </span>
                  <h3 style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: 'var(--type-subhead)',
                    fontWeight: 'var(--weight-black)',
                    lineHeight: 'var(--leading-snug)',
                    letterSpacing: 'var(--tracking-snug)',
                    color: 'var(--text)',
                    margin: 0,
                  }}>
                    {step.title}
                  </h3>
                  <p style={{
                    fontSize: 'var(--type-body)',
                    lineHeight: 'var(--leading-body)',
                    color: 'var(--muted)',
                    margin: 0,
                  }}>
                    {step.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
