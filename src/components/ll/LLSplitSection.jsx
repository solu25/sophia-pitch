import { useRef, useState, useEffect } from 'react';

/**
 * LLSplitSection — two-column split: content + parallax image
 *
 * Props:
 *   section  — talkiatry section object (tocLabel, title, story, metrics, image, imageAlt)
 *   flip     — (bool) swap image to left column, default false
 */
export default function LLSplitSection({ section, flip = false }) {
  const d = {
    label: section.tocLabel,
    heading: section.title,
    body: section.story[0],
    features: (section.metrics || []).slice(0, 2).map(m => ({
      icon: m.icon,
      title: m.value,
      body: m.label,
    })),
    image: section.image,
    imageAlt: section.imageAlt || '',
  };

  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const contentRef = useRef(null);
  const [contentVisible, setContentVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (!imageRef.current || !sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const progress = -rect.top / window.innerHeight;
      imageRef.current.style.transform = `translateY(${progress * 60}px)`;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const el = contentRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setContentVisible(true); obs.disconnect(); } },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const contentCol = (
    <div
      ref={contentRef}
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '40px',
        transition: 'opacity 0.7s ease, filter 0.7s ease',
        opacity: contentVisible ? 1 : 0,
        filter: contentVisible ? 'blur(0px)' : 'blur(12px)',
      }}
    >
      {/* Label pill */}
      <div style={{
        display: 'inline-flex',
        alignItems: 'center',
        backgroundColor: 'var(--accent-subtle)',
        borderRadius: '24px',
        padding: '4px 12px',
        alignSelf: 'flex-start',
      }}>
        <span style={{
          color: 'var(--accent)',
          fontSize: 'var(--type-small)',
          fontFamily: 'var(--font-badge)',
          fontWeight: 'var(--weight-medium)',
          letterSpacing: 'var(--tracking-badge)',
          textTransform: 'uppercase',
        }}>
          {d.label}
        </span>
      </div>

      {/* Heading + body */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <h2 style={{
          fontFamily: 'var(--font-sans)',
          fontSize: 'var(--type-h3)',
          fontWeight: 'var(--weight-black)',
          lineHeight: 'var(--leading-tight)',
          letterSpacing: 'var(--tracking-tight)',
          color: 'var(--text)',
          margin: 0,
        }}>
          {d.heading}
        </h2>
        <p style={{
          color: 'var(--muted)',
          fontSize: 'var(--type-body)',
          lineHeight: 'var(--leading-body)',
          margin: 0,
        }}>
          {d.body}
        </p>
      </div>

      {/* Feature cards */}
      {d.features.length > 0 && (
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
          {d.features.map((f, i) => (
            <div
              key={i}
              style={{
                backgroundColor: 'var(--surface)',
                borderRadius: 'var(--radius)',
                padding: '24px',
                display: 'flex',
                flexDirection: 'column',
                gap: '32px',
                boxShadow: 'var(--shadow-sm)',
              }}
            >
              <div style={{
                width: '44px',
                height: '44px',
                borderRadius: 'var(--radius-sm)',
                backgroundColor: 'var(--bg)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <i className={f.icon || 'fa-solid fa-circle'} style={{ fontSize: 'var(--type-lead)', color: 'var(--accent)' }} aria-hidden="true" />
              </div>
              <div>
                <div style={{
                  fontWeight: 'var(--weight-bold)',
                  fontSize: 'var(--type-subhead)',
                  color: 'var(--text)',
                  lineHeight: 'var(--leading-snug)',
                  letterSpacing: 'var(--tracking-snug)',
                  marginBottom: '4px',
                }}>
                  {f.title}
                </div>
                <div style={{
                  color: 'var(--muted)',
                  fontSize: 'var(--type-small)',
                  lineHeight: 'var(--leading-body)',
                }}>
                  {f.body}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );

  const imageCol = (
    <div style={{
      position: 'relative',
      borderRadius: 'var(--radius)',
      overflow: 'hidden',
      minHeight: '520px',
    }}>
      {d.image && (
        <img
          ref={imageRef}
          src={d.image}
          alt={d.imageAlt}
          loading="lazy"
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '120%',
            top: '-10%',
            objectFit: 'cover',
            display: 'block',
          }}
        />
      )}
    </div>
  );

  return (
    <section
      ref={sectionRef}
      style={{ backgroundColor: 'var(--bg)', borderTop: '1px solid var(--border)', padding: '120px 0' }}
    >
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 48px' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '64px',
          alignItems: 'center',
        }}>
          {flip ? imageCol : contentCol}
          {flip ? contentCol : imageCol}
        </div>
      </div>
    </section>
  );
}
