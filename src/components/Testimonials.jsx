import { useRef, useState, useEffect } from 'react';
import { jenny } from '../data/jenny';
import TextReveal from './TextReveal';

export default function Testimonials({ testimonials }) {
  const items = testimonials || jenny.testimonials;

  const headerRef = useRef(null);
  const cardsRef = useRef(null);
  const [headerVisible, setHeaderVisible] = useState(false);
  const [cardsVisible, setCardsVisible] = useState(false);

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
    const c2 = makeObserver(cardsRef, setCardsVisible);
    return () => { c1(); c2(); };
  }, []);

  return (
    <section style={{ borderTop: '1px solid var(--border)', padding: '100px 0' }}>
      <div className="section-pad" style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 48px' }}>

        {/* Header */}
        <div
          ref={headerRef}
          style={{
            marginBottom: '56px',
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
            What people say
          </span>
          <TextReveal>
            <h2 style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 'var(--type-h2)',
              fontWeight: 'var(--weight-medium)',
              lineHeight: 'var(--leading-h2)',
              letterSpacing: 'var(--tracking-h2)',
              color: 'var(--text)',
              margin: 0,
              maxWidth: '480px',
            }}>
              People I've worked with
            </h2>
          </TextReveal>
        </div>

        {/* Cards */}
        <div
          ref={cardsRef}
          className="testimonials-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '16px',
            transition: 'opacity 0.7s ease 0.1s, filter 0.7s ease 0.1s',
            opacity: cardsVisible ? 1 : 0,
            filter: cardsVisible ? 'blur(0px)' : 'blur(12px)',
          }}
        >
          {items.map((t, i) => (
            <div
              key={t.id || i}
              style={{
                backgroundColor: 'var(--surface)',
                borderRadius: 'var(--radius)',
                padding: '40px',
                display: 'flex',
                flexDirection: 'column',
                gap: '24px',
              }}
            >
              {/* Avatar — hidden for now */}

              {/* Quote */}
              <p style={{
                fontFamily: 'var(--font-sans)',
                color: 'var(--text)',
                fontSize: 'var(--type-body)',
                lineHeight: 'var(--leading-body)',
                fontWeight: 'var(--weight-normal)',
                margin: 0,
                flex: 1,
              }}>
                "{t.quote}"
              </p>

              {/* Attribution */}
              <div>
                <p style={{
                  color: 'var(--text)',
                  fontSize: 'var(--type-body)',
                  fontWeight: 'var(--weight-medium)',
                  margin: 0,
                }}>
                  {t.name}
                </p>
                <p style={{
                  color: 'var(--muted)',
                  fontSize: 'var(--type-small)',
                  marginTop: '2px',
                }}>
                  {t.title}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
