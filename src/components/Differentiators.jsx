import { useRef, useState, useEffect } from 'react';
import { jenny } from '../data/jenny';
import TextReveal from './TextReveal';

export default function Differentiators({ differentiators }) {
  const items = differentiators || jenny.differentiators;
  const isJdMode = items.length > 0 && items[0].requirement;

  const headerRef = useRef(null);
  const gridRef   = useRef(null);
  const [headerVisible, setHeaderVisible] = useState(false);
  const [gridVisible,   setGridVisible]   = useState(false);

  useEffect(() => {
    const makeObs = (ref, setter) => {
      const el = ref.current;
      if (!el) return () => {};
      const obs = new IntersectionObserver(
        ([e]) => { if (e.isIntersecting) { setter(true); obs.disconnect(); } },
        { threshold: 0.08 }
      );
      obs.observe(el);
      return () => obs.disconnect();
    };
    const cleanups = [
      makeObs(headerRef, setHeaderVisible),
      makeObs(gridRef,   setGridVisible),
    ];
    return () => cleanups.forEach(c => c());
  }, []);

  return (
    <section style={{
      borderTop: '1px solid var(--border)',
      padding: '100px 0',
      position: 'relative',
      background: 'linear-gradient(180deg, var(--bg) 0%, rgba(139,120,255,0.06) 50%, var(--bg) 100%)',
    }}>
      <div className="section-pad" style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 48px' }}>

        {/* Header */}
        <div
          ref={headerRef}
          style={{
            marginBottom: '48px',
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
            {isJdMode ? 'Your requirements. My proof.' : 'Why I\'m different'}
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
              maxWidth: '560px',
            }}>
              {isJdMode
                ? 'Every line from the job description, answered.'
                : 'Five things that set me apart.'}
            </h2>
          </TextReveal>
        </div>

        {/* Card grid */}
        <div
          ref={gridRef}
          className="differentiators-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '12px',
            transition: 'opacity 0.7s ease 0.1s, filter 0.7s ease 0.1s',
            opacity: gridVisible ? 1 : 0,
            filter: gridVisible ? 'blur(0px)' : 'blur(12px)',
          }}
        >
          {items.map((d, i) => (
            <div
              key={d.id || d.number}
              style={{
                backgroundColor: 'var(--glass-bg)',
                backdropFilter: 'blur(var(--glass-blur))',
                WebkitBackdropFilter: 'blur(var(--glass-blur))',
                border: '1px solid var(--glass-stroke)',
                borderRadius: 'var(--radius)',
                padding: '32px',
                display: 'flex',
                flexDirection: 'column',
                gap: '24px',
                boxShadow: 'var(--shadow-glass)',
                // Last item spans full width if odd count
                ...(items.length % 2 !== 0 && i === items.length - 1
                  ? { gridColumn: '1 / -1' }
                  : {}),
              }}
            >
              <span style={{
                color: 'var(--accent)', fontSize: 'var(--type-label)',
                fontWeight: 'var(--weight-bold)', letterSpacing: 'var(--tracking-label)',
              }}>
                {String(i + 1).padStart(2, '0')}
              </span>

              {isJdMode ? (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <p style={{
                    color: 'var(--muted)', fontSize: 'var(--type-small)',
                    lineHeight: 'var(--leading-body)', margin: 0,
                    fontStyle: 'italic',
                  }}>
                    "{d.requirement}"
                  </p>
                  <p style={{
                    color: 'var(--text)', fontSize: 'var(--type-body)',
                    lineHeight: 'var(--leading-body)', margin: 0,
                  }}>
                    {d.proof}
                  </p>
                </div>
              ) : (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <h3 style={{
                    color: 'var(--text)',
                    fontFamily: 'var(--font-sans)',
                    fontSize: 'var(--type-subhead)',
                    fontWeight: 'var(--weight-black)',
                    lineHeight: 'var(--leading-snug)',
                    letterSpacing: 'var(--tracking-snug)',
                    margin: 0,
                  }}>
                    {d.title}
                  </h3>
                  <p style={{
                    color: 'var(--muted)', fontSize: 'var(--type-body)',
                    lineHeight: 'var(--leading-body)', margin: 0,
                  }}>
                    {d.description}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
