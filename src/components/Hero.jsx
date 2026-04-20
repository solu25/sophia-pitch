import { useEffect, useState, useRef } from 'react';
import gsap from 'gsap';
import { sophia } from '../data/sophia';

const stats = [
  { verb: 'Grew', value: '5,000+', label: 'Subscribers grown', source: 'Harvey PMMCA · newsletter funnel' },
  { verb: 'Reached', value: '36K+', label: 'Impressions on one post', source: 'LinkedIn · vibe coding for designers' },
  { verb: 'Shipped', value: '20×', label: 'Faster biz dev research', source: 'Scout · AI research agent' },
];

export default function Hero() {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);
  const spotlightRef = useRef(null);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 80);
    return () => clearTimeout(t);
  }, []);

  // GSAP spotlight that follows mouse
  useEffect(() => {
    const el = sectionRef.current;
    const spotlight = spotlightRef.current;
    if (!el || !spotlight) return;

    const xTo = gsap.quickTo(spotlight, 'left', { duration: 0.6, ease: 'power2.out' });
    const yTo = gsap.quickTo(spotlight, 'top', { duration: 0.6, ease: 'power2.out' });

    const handleMouseMove = (e) => {
      const rect = el.getBoundingClientRect();
      xTo(e.clientX - rect.left);
      yTo(e.clientY - rect.top);
      spotlight.style.opacity = '1';
    };

    const handleMouseLeave = () => {
      spotlight.style.opacity = '0';
    };

    el.addEventListener('mousemove', handleMouseMove);
    el.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      el.removeEventListener('mousemove', handleMouseMove);
      el.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      style={{
        background: 'linear-gradient(180deg, rgba(139,120,255,0.35) 0%, rgba(139,120,255,0.18) 40%, rgba(139,120,255,0.06) 65%, var(--bg) 90%)',
        paddingTop: 'calc(56px + 64px)',
        paddingBottom: '64px',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      {/* GSAP spotlight — follows mouse */}
      <div ref={spotlightRef} style={{
        position: 'absolute', zIndex: 0, pointerEvents: 'none',
        width: '900px', height: '900px',
        marginLeft: '-450px', marginTop: '-450px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(139,120,255,0.2) 0%, rgba(139,120,255,0.08) 30%, transparent 65%)',
        filter: 'blur(20px)',
        opacity: 0,
        transition: 'opacity 0.4s ease',
        willChange: 'left, top',
      }} />
      {/* Noise overlay */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 0,
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
        backgroundRepeat: 'repeat',
        backgroundSize: '200px 200px',
        opacity: 0.25,
        mixBlendMode: 'multiply',
        pointerEvents: 'none',
      }} />

      <div className="hero-container" style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 48px', position: 'relative', zIndex: 1 }}>

        {/* Top block */}
        <div style={{
          maxWidth: '680px',
          margin: '0 auto 56px',
          display: 'flex', flexDirection: 'column', alignItems: 'center',
          textAlign: 'center', gap: '20px',
          transition: 'opacity 0.7s ease, filter 0.7s ease',
          opacity: visible ? 1 : 0,
          filter: visible ? 'blur(0px)' : 'blur(12px)',
        }}>
          {/* Eyebrow */}
          <div style={{
            fontSize: 'var(--type-small)', fontFamily: 'var(--font-badge)', fontWeight: 'var(--weight-medium)',
            letterSpacing: 'var(--tracking-badge)', textTransform: 'uppercase', color: 'var(--text)',
            backgroundColor: 'var(--glass-bg)', backdropFilter: 'blur(var(--glass-blur))',
            WebkitBackdropFilter: 'blur(var(--glass-blur))',
            border: '1px solid var(--glass-stroke)', borderRadius: '100px',
            padding: '6px 16px', boxShadow: 'var(--shadow-glass)',
          }}>
            {sophia.title}
          </div>

          {/* Headline — pulls from sophia.tagline, renders line breaks */}
          <h1 style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 'var(--type-h1)',
            fontWeight: 'var(--weight-medium)',
            lineHeight: 'var(--leading-h1)',
            letterSpacing: 'var(--tracking-h1)',
            color: 'var(--text)',
            margin: 0,
            whiteSpace: 'pre-line',
          }}>
            {sophia.tagline}
          </h1>

          {/* Subtitle — pulls from sophia.summary */}
          <p style={{
            color: 'var(--muted)', fontSize: 'var(--type-lead)',
            lineHeight: 'var(--leading-body)', margin: 0,
            whiteSpace: 'nowrap',
          }}>
            {sophia.summary}
          </p>

        </div>

        {/* Stats row */}
        <div className="hero-stats-grid" style={{
          display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'var(--space-18)',
          marginBottom: '48px',
          transition: 'opacity 0.7s ease 0.2s, filter 0.7s ease 0.2s',
          opacity: visible ? 1 : 0,
          filter: visible ? 'blur(0px)' : 'blur(12px)',
        }}>
          {stats.map((s, i) => (
            <div key={i} style={{
              backgroundColor: 'var(--surface)',
              borderRadius: 'var(--radius)',
              boxShadow: 'var(--shadow-widget)',
              padding: 'var(--space-24)',
              display: 'flex', flexDirection: 'column', gap: '4px',
            }}>
              {s.verb && (
                <div style={{
                  fontSize: 'var(--type-small)',
                  fontFamily: 'var(--font-badge)',
                  fontWeight: 'var(--weight-medium)',
                  letterSpacing: 'var(--tracking-badge)',
                  textTransform: 'uppercase',
                  color: 'var(--muted)',
                  lineHeight: 'var(--leading-h5)',
                  marginBottom: '4px',
                }}>
                  {s.verb}
                </div>
              )}
              <div style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 'var(--type-h2)',
                fontWeight: 'var(--weight-medium)',
                lineHeight: 'var(--leading-h2)',
                letterSpacing: 'var(--tracking-h2)',
                color: 'var(--text)',
              }}>
                {s.value}
              </div>
              <div style={{
                fontSize: 'var(--type-body)',
                color: 'var(--text)',
                fontWeight: 'var(--weight-medium)',
                lineHeight: 'var(--leading-body)',
              }}>
                {s.label}
              </div>
              <div style={{
                fontSize: 'var(--type-small)',
                color: 'var(--muted)',
                lineHeight: 'var(--leading-body)',
              }}>
                {s.source}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
