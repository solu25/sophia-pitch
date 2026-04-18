import NoiseOverlay from './NoiseOverlay';
import MetricCard from './MetricCard';
import Eyebrow from './Eyebrow';
import useFadeIn from './useFadeIn';

export default function LLJdSection({ section, index }) {
  const [ref, visible] = useFadeIn(0.1);
  const dark = index % 2 === 0;

  return (
    <section
      ref={ref}
      style={{
        backgroundColor: dark ? 'var(--dark-bg)' : 'var(--bg)',
        padding: 'var(--space-96) 0',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {dark && <NoiseOverlay />}
      <div className="section-pad" style={{
        maxWidth: '1000px', margin: '0 auto', padding: '0 var(--space-48)',
        position: 'relative', zIndex: 1,
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(24px)',
        transition: 'opacity 0.7s ease, transform 0.7s ease',
      }}>
        <Eyebrow>
          <span style={{ color: dark ? 'var(--dark-text-muted)' : 'var(--muted)', textAlign: 'center', display: 'block' }}>
            {String(index + 1).padStart(2, '0')} · {section.tocLabel}
          </span>
        </Eyebrow>

        <p style={{
          fontSize: 'var(--type-body)',
          color: dark ? 'var(--dark-text-muted)' : 'var(--muted)',
          lineHeight: 'var(--leading-body)',
          margin: '0 auto var(--space-18)',
          maxWidth: '600px',
          textAlign: 'center',
        }}>
          {section.requirement}
        </p>

        <h2 style={{
          fontFamily: 'var(--font-sans)',
          fontSize: 'var(--type-h2)',
          fontWeight: 'var(--weight-medium)',
          lineHeight: 'var(--leading-h2)',
          letterSpacing: 'var(--tracking-h2)',
          color: dark ? 'var(--dark-text)' : 'var(--text)',
          margin: '0 auto var(--space-36)',
          maxWidth: '650px',
          textAlign: 'center',
        }}>
          {section.title}
        </h2>

        <div style={{
          display: 'flex', flexDirection: 'column', gap: 'var(--space-18)',
          maxWidth: '640px',
          margin: '0 auto var(--space-48)',
          textAlign: 'left',
        }}>
          {section.story.map((p, i) => (
            <p key={i} style={{
              fontSize: 'var(--type-body)',
              lineHeight: 'var(--leading-body)',
              color: dark ? 'var(--dark-text-muted)' : 'var(--muted)',
              margin: 0,
            }}>
              {p}
            </p>
          ))}
        </div>

        {section.metrics && (
          <div style={{
            display: 'grid', gridTemplateColumns: `repeat(${section.metrics.length}, 1fr)`,
            gap: 'var(--space-12)',
            marginBottom: section.testimonial ? 'var(--space-48)' : 0,
            maxWidth: '480px',
            marginLeft: 'auto', marginRight: 'auto',
          }}>
            {section.metrics.map((m, i) => (
              <MetricCard key={i} metric={m} dark={dark} />
            ))}
          </div>
        )}

        {section.testimonial && (
          <div style={{
            borderLeft: `3px solid ${dark ? 'var(--accent-strong)' : 'var(--accent)'}`,
            paddingLeft: 'var(--space-24)',
            maxWidth: '540px',
            marginLeft: 'auto', marginRight: 'auto',
          }}>
            <p style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 'var(--type-lead)',
              fontWeight: 'var(--weight-medium)',
              lineHeight: 'var(--leading-body)',
              color: dark ? 'var(--dark-text)' : 'var(--text)',
              margin: '0 0 var(--space-12)',
              fontStyle: 'italic',
            }}>
              "{section.testimonial.quote}"
            </p>
            <div style={{
              fontSize: 'var(--type-body)',
              fontWeight: 'var(--weight-medium)',
              color: dark ? 'var(--dark-text)' : 'var(--text)',
            }}>
              {section.testimonial.name}
            </div>
            <div style={{
              fontSize: 'var(--type-small)',
              color: dark ? 'var(--dark-text-muted)' : 'var(--muted)',
              marginTop: '2px',
            }}>
              {section.testimonial.title}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
