import { useRef, useState, useEffect } from 'react';
import { jenny } from '../../data/jenny';

const cards = [
  {
    href: '/jenny-lu-resume.pdf',
    external: true,
    label: 'View Resume',
    body: 'Download my full resume — case studies, experience, and skills.',
    icon: 'fa-regular fa-file',
  },
  {
    href: `https://${jenny.contact.linkedin}`,
    external: true,
    label: 'LinkedIn',
    body: 'See my full work history, recommendations, and professional profile.',
    icon: 'fa-brands fa-linkedin',
  },
  {
    href: 'https://cal.com/jennylu98/30',
    external: true,
    label: 'Book a Call',
    body: "30 minutes. Come with questions — I'll come with answers.",
    icon: 'fa-regular fa-calendar',
  },
];

export default function LLContact() {
  const titleRef = useRef(null);
  const [titleVisible, setTitleVisible] = useState(false);
  const cardRefs = useRef([]);
  const [cardsVisible, setCardsVisible] = useState([false, false, false]);

  useEffect(() => {
    const el = titleRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setTitleVisible(true); obs.disconnect(); } },
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
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <section style={{ backgroundColor: 'var(--text)', position: 'relative', paddingTop: '120px', paddingBottom: '80px' }}>

      <div style={{ position: 'relative', zIndex: 2, maxWidth: '1100px', margin: '0 auto', padding: '0 48px' }}>

        {/* Heading */}
        <div
          ref={titleRef}
          style={{
            textAlign: 'center',
            marginBottom: '56px',
            transition: 'opacity 0.7s ease, transform 0.7s ease',
            opacity: titleVisible ? 1 : 0,
            transform: titleVisible ? 'translateY(0)' : 'translateY(24px)',
          }}
        >
          <h2 style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 'var(--type-h1)',
            fontWeight: 'var(--weight-black)',
            lineHeight: 'var(--leading-h1)',
            letterSpacing: 'var(--tracking-tight)',
            color: 'var(--accent-subtle)',
            margin: 0,
          }}>
            Let's talk
          </h2>
        </div>

        {/* Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
          {cards.map((card, i) => (
            <a
              key={card.label}
              ref={(el) => { cardRefs.current[i] = el; }}
              href={card.href}
              target={card.external ? '_blank' : undefined}
              rel={card.external ? 'noopener noreferrer' : undefined}
              style={{
                backgroundColor: 'var(--surface)',
                borderRadius: 'var(--radius)',
                padding: '48px 32px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                gap: '40px',
                textDecoration: 'none',
                color: 'var(--text)',
                transitionProperty: 'transform, opacity',
                transitionDuration: `0.2s, 0.7s`,
                transitionTimingFunction: 'ease, ease-out',
                transitionDelay: `0ms, ${i * 100}ms`,
                opacity: cardsVisible[i] ? 1 : 0,
                transform: cardsVisible[i] ? 'translateY(0)' : 'translateY(32px)',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-4px)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = cardsVisible[i] ? 'translateY(0)' : 'translateY(32px)'; }}
            >
              <i className={card.icon} style={{ fontSize: '48px', color: 'var(--text)' }} aria-hidden="true" />
              <div style={{ width: '100%', height: '1px', backgroundColor: 'var(--border)' }} />
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px' }}>
                <div style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: 'var(--type-subhead)',
                  fontWeight: 'var(--weight-bold)',
                  color: 'var(--text)',
                  lineHeight: 'var(--leading-snug)',
                }}>
                  {card.label}
                </div>
                <div style={{
                  color: 'var(--muted)',
                  fontSize: 'var(--type-body)',
                  lineHeight: 'var(--leading-body)',
                }}>
                  {card.body}
                </div>
              </div>
            </a>
          ))}
        </div>

      </div>

      {/* Light bottom fill */}
      <div style={{
        position: 'absolute',
        left: 0, right: 0, bottom: 0,
        height: '230px',
        backgroundColor: 'var(--bg)',
        zIndex: 1,
      }} />
    </section>
  );
}
