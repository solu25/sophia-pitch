import { useRef, useState, useEffect } from 'react';

export default function LLHero({ company }) {
  const sections = company.sections || [];
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.05 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const wordStyle = {
    fontFamily: 'var(--font-sans)',
    fontSize: 'clamp(56px, 9vw, 112px)',
    fontWeight: 'var(--weight-black)',
    lineHeight: 'var(--leading-h1)',
    letterSpacing: 'var(--tracking-tight)',
    color: 'var(--text)',
    margin: 0,
  };

  const serifWordStyle = {
    fontFamily: 'var(--font-serif)',
    fontSize: 'clamp(56px, 9vw, 112px)',
    fontWeight: 'var(--weight-normal)',
    
    lineHeight: 'var(--leading-h1)',
    letterSpacing: 'var(--tracking-tight)',
    color: 'var(--accent)',
    margin: 0,
  };

  return (
    <section
      ref={sectionRef}
      style={{
        backgroundColor: 'var(--surface)',
        paddingTop: 'calc(56px + 100px)',
        paddingBottom: '80px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >

      {/* ── Decorative layer ── */}
      {/* Large dashed circle — top left */}
      <div style={{
        position: 'absolute', top: '120px', left: '-60px',
        width: '220px', height: '220px', borderRadius: '50%',
        border: '1.5px dashed var(--border)',
        pointerEvents: 'none',
      }} />

      {/* Medium dashed circle — top right */}
      <div style={{
        position: 'absolute', top: '80px', right: '-40px',
        width: '160px', height: '160px', borderRadius: '50%',
        border: '1.5px dashed var(--border)',
        pointerEvents: 'none',
      }} />

      {/* Small dashed circle — mid left ~30% */}
      <div style={{
        position: 'absolute', top: '180px', left: '28%',
        width: '48px', height: '48px', borderRadius: '50%',
        border: '1.5px dashed var(--muted)',
        opacity: 0.35,
        pointerEvents: 'none',
      }} />

      {/* Small dashed circle — upper right ~35% */}
      <div style={{
        position: 'absolute', top: '100px', right: '32%',
        width: '40px', height: '40px', borderRadius: '50%',
        border: '1.5px dashed var(--muted)',
        opacity: 0.35,
        pointerEvents: 'none',
      }} />

      {/* Solid accent dot — right edge */}
      <div style={{
        position: 'absolute', top: '240px', right: '52px',
        width: '14px', height: '14px', borderRadius: '50%',
        backgroundColor: 'var(--accent)',
        pointerEvents: 'none',
      }} />

      {/* Solid muted dot — bottom center */}
      <div style={{
        position: 'absolute', bottom: '140px', left: '50%',
        width: '10px', height: '10px', borderRadius: '50%',
        backgroundColor: 'var(--border)',
        pointerEvents: 'none',
      }} />

      {/* Tiny accent dot — left 20%, top */}
      <div style={{
        position: 'absolute', top: '60px', left: '20%',
        width: '8px', height: '8px', borderRadius: '50%',
        backgroundColor: 'var(--accent)',
        opacity: 0.4,
        pointerEvents: 'none',
      }} />

      {/* ── Main content ── */}
      <div className="max-w-5xl mx-auto px-12" style={{ position: 'relative', zIndex: 2 }}>

        {/* Label */}
        <p style={{
          color: 'var(--accent)',
          fontSize: 'var(--type-small)',
          fontFamily: 'var(--font-badge)',
          fontWeight: 'var(--weight-medium)',
          letterSpacing: 'var(--tracking-badge)',
          textTransform: 'uppercase',
          textAlign: 'center',
          marginBottom: '36px',
          transition: 'opacity 0.7s ease, transform 0.7s ease',
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(16px)',
        }}>
          Application — {company.role}
        </p>

        {/* Flex-wrap word block */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '8px 20px',
            textAlign: 'center',
            marginBottom: '40px',
            transition: 'opacity 0.7s ease 100ms, transform 0.7s ease 100ms',
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(32px)',
          }}
        >
          <span style={wordStyle}>Hello,</span>

          {/* Inline icon — small asterisk/star between words */}
          <svg
            width="40" height="40" viewBox="0 0 40 40" fill="none"
            style={{ flexShrink: 0, marginBottom: '4px' }}
            aria-hidden="true"
          >
            <circle cx="20" cy="20" r="19" stroke="var(--border)" strokeWidth="1.5" strokeDasharray="4 3" />
            <circle cx="20" cy="20" r="4" fill="var(--accent)" />
          </svg>

          <span style={wordStyle}>I'm</span>

          {/* Line break hint — full width invisible element */}
          <span style={{ width: '100%', height: 0, display: 'block' }} aria-hidden="true" />

          <span style={serifWordStyle}>Jenny.</span>
        </div>

        {/* Subtitle */}
        <p style={{
          color: 'var(--muted)',
          fontSize: 'var(--type-body)',
          lineHeight: 'var(--leading-body)',
          maxWidth: '480px',
          margin: '0 auto 36px',
          textAlign: 'center',
          transition: 'opacity 0.7s ease 200ms, transform 0.7s ease 200ms',
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(24px)',
        }}>
          {company.subtitle}
        </p>

        {/* Tags */}
        {company.tags && (
          <div
            className="flex flex-wrap justify-center gap-2"
            style={{
              marginBottom: '64px',
              transition: 'opacity 0.7s ease 300ms',
              opacity: visible ? 1 : 0,
            }}
          >
            {company.tags.map((tag) => (
              <span key={tag} style={{
                border: '1px solid var(--border)',
                color: 'var(--muted)',
                fontSize: 'var(--type-label)',
                letterSpacing: 'var(--tracking-wide)',
                padding: '5px 12px',
              }}>
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* TOC */}
        {sections.length > 0 && (
          <div style={{
            borderTop: '1px solid var(--border)',
            paddingTop: '28px',
            transition: 'opacity 0.7s ease 400ms',
            opacity: visible ? 1 : 0,
          }}>
            <p style={{
              color: 'var(--muted)',
              fontSize: 'var(--type-small)',
              fontFamily: 'var(--font-badge)',
              fontWeight: 'var(--weight-medium)',
              letterSpacing: 'var(--tracking-badge)',
              textTransform: 'uppercase',
              marginBottom: '16px',
              textAlign: 'center',
            }}>
              What's inside
            </p>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-x-6 gap-y-3">
              {sections.map((s, i) => (
                <div key={s.id} className="flex items-start gap-2">
                  <span style={{
                    color: 'var(--accent)',
                    fontSize: 'var(--type-label)',
                    fontWeight: 'var(--weight-black)',
                    letterSpacing: 'var(--tracking-wide)',
                    paddingTop: '1px',
                    flexShrink: 0,
                  }}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span style={{
                    color: 'var(--muted)',
                    fontSize: 'var(--type-small)',
                    lineHeight: 'var(--leading-h5)',
                  }}>
                    {s.tocLabel}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
