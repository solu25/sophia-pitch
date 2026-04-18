import { useRef, useState, useEffect } from 'react';

export default function LLWhyMe({ company }) {
  const sections = company.sections || [];

  const headingRef = useRef(null);
  const [headingVisible, setHeadingVisible] = useState(false);

  const cardRefs = useRef([]);
  const [cardsVisible, setCardsVisible] = useState(sections.map(() => false));

  useEffect(() => {
    const el = headingRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setHeadingVisible(true); obs.disconnect(); } },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    const observers = [];
    cardRefs.current.forEach((el, i) => {
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setCardsVisible((prev) => { const next = [...prev]; next[i] = true; return next; });
            obs.disconnect();
          }
        },
        { threshold: 0.1 }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((obs) => obs.disconnect());
  }, []);

  return (
    <section style={{ backgroundColor: 'var(--bg)', borderTop: '1px solid var(--border)' }}>
      <div className="w-full mx-auto px-12 max-w-5xl py-20">

        {/* Headline block */}
        <div className="flex flex-col items-start gap-4 mb-12">
          <span style={{
            color: 'var(--accent)',
            fontSize: 'var(--type-small)',
            fontFamily: 'var(--font-badge)',
            fontWeight: 'var(--weight-medium)',
            letterSpacing: 'var(--tracking-badge)',
            textTransform: 'uppercase',
          }}>
            Why I'd be a good fit
          </span>

          <h2
            ref={headingRef}
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'var(--type-belief)',
              fontWeight: 'var(--weight-normal)',
              lineHeight: 'var(--leading-tight)',
              letterSpacing: 'var(--tracking-tight)',
              color: 'var(--text)',
              margin: 0,
              maxWidth: '560px',
              transition: 'opacity 0.7s ease, filter 0.7s ease',
              opacity: headingVisible ? 1 : 0,
              filter: headingVisible ? 'blur(0px)' : 'blur(20px)',
            }}
          >
            I've done this before.
          </h2>
        </div>

        {/* Cards — 1 col → 2 col sm → 3 col md → 5 col xl */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-2">
          {sections.map((section, i) => (
            <div
              key={section.id}
              ref={(el) => { cardRefs.current[i] = el; }}
              style={{
                backgroundColor: 'var(--surface)',
                borderRadius: 'var(--radius)',
                padding: '24px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                minHeight: '220px',
                transition: `opacity 0.6s ease ${i * 80}ms, transform 0.6s ease ${i * 80}ms`,
                opacity: cardsVisible[i] ? 1 : 0,
                transform: cardsVisible[i] ? 'translateY(0)' : 'translateY(24px)',
              }}
            >
              {/* Number */}
              <span style={{
                color: 'var(--accent)',
                fontSize: 'var(--type-label)',
                fontWeight: 'var(--weight-black)',
                letterSpacing: 'var(--tracking-label)',
                display: 'block',
                marginBottom: '12px',
              }}>
                {String(i + 1).padStart(2, '0')}
              </span>

              {/* Title */}
              <div style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'var(--type-subhead)',
                fontWeight: 'var(--weight-normal)',
                lineHeight: 'var(--leading-snug)',
                letterSpacing: 'var(--tracking-snug)',
                color: 'var(--text)',
                flexGrow: 1,
                marginBottom: '12px',
              }}>
                {section.tocLabel}
              </div>

              {/* Body */}
              <div style={{
                color: 'var(--muted)',
                fontSize: 'var(--type-small)',
                lineHeight: 'var(--leading-body)',
              }}>
                {section.requirement}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
