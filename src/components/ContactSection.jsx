import { useRef, useState, useEffect } from 'react';
import { jenny } from '../data/jenny';

const cards = [
  {
    href: 'https://cal.com/jennylu98/30',
    external: true,
    label: 'Book a 30-min call',
    body: "Come with questions — I'll come with answers. No prep needed.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2"/>
        <line x1="16" y1="2" x2="16" y2="6"/>
        <line x1="8" y1="2" x2="8" y2="6"/>
        <line x1="3" y1="10" x2="21" y2="10"/>
      </svg>
    ),
  },
  {
    href: `https://${jenny.contact.linkedin}`,
    external: true,
    label: 'Connect on LinkedIn',
    body: "Full work history, endorsements, and recommendations from people I've shipped with.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
        <rect x="2" y="9" width="4" height="12"/>
        <circle cx="4" cy="4" r="2"/>
      </svg>
    ),
  },
  {
    href: '/resume',
    external: false,
    label: 'View resume',
    body: 'Case studies, experience, skills, and the tools I actually use every day.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
        <polyline points="14 2 14 8 20 8"/>
        <line x1="16" y1="13" x2="8" y2="13"/>
        <line x1="16" y1="17" x2="8" y2="17"/>
        <polyline points="10 9 9 9 8 9"/>
      </svg>
    ),
  },
];


export default function ContactSection() {
  const headlineRef = useRef(null);
  const [headlineVisible, setHeadlineVisible] = useState(false);

  const cardRefs = useRef([]);
  const [cardsVisible, setCardsVisible] = useState([false, false, false]);

  const logosRef = useRef(null);
  const [logosVisible, setLogosVisible] = useState(false);

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

    const cleanups = [
      makeObserver(headlineRef, setHeadlineVisible),
      makeObserver(logosRef, setLogosVisible),
    ];

    cardRefs.current.forEach((el, i) => {
      if (!el) return;
      const obs = new IntersectionObserver(
        ([e]) => {
          if (e.isIntersecting) {
            setCardsVisible(prev => { const next = [...prev]; next[i] = true; return next; });
            obs.disconnect();
          }
        },
        { threshold: 0.1 }
      );
      obs.observe(el);
      cleanups.push(() => obs.disconnect());
    });

    return () => cleanups.forEach(c => c());
  }, []);

  return (
    <section style={{
      padding: '100px 0 0',
      overflow: 'hidden',
      position: 'relative',
      background: 'linear-gradient(180deg, var(--bg) 25%, rgba(139,120,255,0.04) 55%, rgba(139,120,255,0.13) 100%)',
    }}>

      {/* Noise overlay */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 1,
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
        backgroundRepeat: 'repeat',
        backgroundSize: '200px 200px',
        opacity: 0.18,
        mixBlendMode: 'overlay',
        pointerEvents: 'none',
      }} />

      {/* ── Headline block — sits at top on light-to-mid bg ── */}
      <div
        ref={headlineRef}
        className="section-pad"
        style={{
          maxWidth: '1000px',
          margin: '0 auto',
          padding: '0 48px',
          textAlign: 'center',
          marginBottom: '56px',
          position: 'relative',
          zIndex: 2,
          transition: 'opacity 0.7s ease, filter 0.7s ease',
          opacity: headlineVisible ? 1 : 0,
          filter: headlineVisible ? 'blur(0px)' : 'blur(12px)',
        }}
      >
        {/* Availability badge — glass style */}
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          backgroundColor: 'var(--glass-bg)',
          backdropFilter: 'blur(var(--glass-blur))',
          WebkitBackdropFilter: 'blur(var(--glass-blur))',
          border: '1px solid var(--glass-stroke)',
          borderRadius: '100px',
          padding: '6px 16px',
          boxShadow: 'var(--shadow-glass)',
          marginBottom: '24px',
        }}>
          <span style={{
            width: '7px', height: '7px',
            borderRadius: '50%',
            backgroundColor: '#22c55e',
            flexShrink: 0,
            display: 'inline-block',
          }} />
          <span style={{ color: 'var(--text)', fontSize: 'var(--type-small)', fontWeight: 'var(--weight-medium)' }}>
            Available for Q2 2026 · 1–2 clients
          </span>
        </div>

        <h2 style={{
          fontFamily: 'var(--font-sans)',
          fontSize: 'var(--type-h1)',
          fontWeight: 'var(--weight-black)',
          lineHeight: 'var(--leading-tight)',
          letterSpacing: 'var(--tracking-tight)',
          color: 'var(--text)',
          margin: '0 0 20px',
        }}>
          One conversation.<br />Thirty minutes.
        </h2>

        <p style={{
          color: 'var(--muted)',
          fontSize: 'var(--type-body)',
          lineHeight: 'var(--leading-body)',
          maxWidth: '400px',
          margin: '0 auto 0',
        }}>
          If the work resonates, let's find out if there's a fit. No prep needed.
        </p>
      </div>

      {/* ── Cards — mid-section, gradient is deepening ── */}
      <div className="contact-grid section-pad" style={{
        maxWidth: '1000px',
        margin: '0 auto',
        padding: '0 48px',
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '16px',
        marginBottom: '80px',
        position: 'relative',
        zIndex: 2,
      }}>
        {cards.map((card, i) => (
          <a
            className="btn-hover"
            key={card.label}
            ref={el => { cardRefs.current[i] = el; }}
            href={card.href}
            target={card.external ? '_blank' : undefined}
            rel={card.external ? 'noopener noreferrer' : undefined}
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
              textDecoration: 'none',
              boxShadow: 'var(--shadow-glass)',
              opacity: cardsVisible[i] ? 1 : 0,
            }}
          >
            <div style={{ color: 'var(--accent)' }}>
              {card.icon}
            </div>
            <div>
              <div style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 'var(--type-body)',
                fontWeight: 'var(--weight-semibold)',
                color: 'var(--text)',
                marginBottom: '8px',
                lineHeight: 'var(--leading-snug)',
              }}>
                {card.label}
              </div>
              <div style={{
                color: 'var(--muted)',
                fontSize: 'var(--type-small)',
                lineHeight: 'var(--leading-body)',
              }}>
                {card.body}
              </div>
            </div>
          </a>
        ))}
      </div>


    </section>
  );
}
