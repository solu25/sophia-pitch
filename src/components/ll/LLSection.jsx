export default function LLSection({ section, index }) {
  const isEven = index % 2 === 0;

  return (
    <section
      style={{
        backgroundColor: isEven ? 'var(--bg)' : 'var(--surface)',
        borderTop: '1px solid var(--border)',
      }}
    >
      <div className="max-w-5xl mx-auto px-12 py-20">

        {/* Index + requirement */}
        <div className="flex items-start gap-4 mb-8">
          <span style={{
            color: 'var(--accent)',
            fontSize: 'var(--type-label)',
            fontWeight: 'var(--weight-black)',
            letterSpacing: 'var(--tracking-label)',
            paddingTop: '3px',
            flexShrink: 0,
          }}>
            {String(index + 1).padStart(2, '0')}
          </span>
          <p style={{
            color: 'var(--muted)',
            fontSize: 'var(--type-small)',
            fontFamily: 'var(--font-badge)',
            fontWeight: 'var(--weight-medium)',
            letterSpacing: 'var(--tracking-badge)',
            textTransform: 'uppercase',
            lineHeight: 'var(--leading-body)',
          }}>
            {section.requirement}
          </p>
        </div>

        {/* Title */}
        <h2 style={{
          fontFamily: 'var(--font-serif)',
          color: 'var(--text)',
          fontSize: 'var(--type-heading)',
          fontWeight: 'var(--weight-normal)',
          letterSpacing: 'var(--tracking-snug)',
          lineHeight: 'var(--leading-snug)',
          maxWidth: '600px',
          marginBottom: '32px',
        }}>
          {section.title}
        </h2>

        {/* Story */}
        <div style={{ maxWidth: '640px', marginBottom: section.metrics ? '40px' : '0' }}>
          {section.story.map((para, i) => (
            <p key={i} style={{
              color: 'var(--muted)',
              fontSize: 'var(--type-body)',
              lineHeight: 'var(--leading-loose)',
              marginBottom: i < section.story.length - 1 ? '18px' : '0',
            }}>
              {para}
            </p>
          ))}
        </div>

        {/* Metrics */}
        {section.metrics && section.metrics.length > 0 && (
          <div
            className="flex flex-wrap"
            style={{
              border: '1px solid var(--border)',
              marginTop: '40px',
              marginBottom: section.testimonial ? '40px' : '0',
            }}
          >
            {section.metrics.map((m, i) => (
              <div key={i} style={{
                backgroundColor: isEven ? 'var(--bg)' : 'var(--surface)',
                padding: '20px 28px',
                flex: '1 1 auto',
                minWidth: '100px',
                borderRight: i < section.metrics.length - 1 ? '1px solid var(--border)' : 'none',
              }}>
                <div style={{
                  color: 'var(--accent)',
                  fontSize: 'var(--type-metric)',
                  fontWeight: 'var(--weight-black)',
                  letterSpacing: 'var(--tracking-snug)',
                  lineHeight: 'var(--leading-tight)',
                  marginBottom: '4px',
                }}>
                  {m.value}
                </div>
                <div style={{ color: 'var(--muted)', fontSize: 'var(--type-label)', letterSpacing: 'var(--tracking-wide)' }}>
                  {m.label}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Testimonial */}
        {section.testimonial && (
          <div style={{
            marginTop: section.metrics ? '0' : '40px',
            maxWidth: '560px',
            borderLeft: '2px solid var(--accent)',
            paddingLeft: '24px',
          }}>
            <p style={{
              fontFamily: 'var(--font-serif)',
              
              fontWeight: 'var(--weight-normal)',
              color: 'var(--text)',
              fontSize: 'var(--type-accent)',
              lineHeight: 'var(--leading-h5)',
              marginBottom: '12px',
            }}>
              "{section.testimonial.quote}"
            </p>
            <p style={{ color: 'var(--accent)', fontSize: 'var(--type-small)', fontWeight: 'var(--weight-semibold)' }}>
              {section.testimonial.name}
            </p>
            <p style={{ color: 'var(--muted)', fontSize: 'var(--type-caption)', marginTop: '2px' }}>
              {section.testimonial.title}
            </p>
          </div>
        )}

      </div>
    </section>
  );
}
