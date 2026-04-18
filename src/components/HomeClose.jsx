import { jenny } from '../data/jenny';

export default function HomeClose() {
  return (
    <section
      style={{ borderTop: '1px solid var(--border)' }}
      className="max-w-5xl mx-auto px-6 py-24"
    >
      {/* Section header */}
      <p style={{
        color: 'var(--accent)',
        fontSize: 'var(--type-small)',
        fontFamily: 'var(--font-badge)',
        fontWeight: 'var(--weight-medium)',
        letterSpacing: 'var(--tracking-badge)',
        textTransform: 'uppercase',
        marginBottom: '12px',
      }}>
        Let's talk
      </p>
      <h2 style={{
        color: 'var(--text)',
        fontSize: 'var(--type-belief)',
        fontWeight: 'var(--weight-black)',
        letterSpacing: 'var(--tracking-tight)',
        lineHeight: 'var(--leading-tight)',
        maxWidth: '600px',
        marginBottom: '16px',
      }}>
        One conversation. Thirty minutes.
      </h2>
      <p style={{
        color: 'var(--muted)',
        fontSize: 'var(--type-body)',
        lineHeight: 'var(--leading-body)',
        maxWidth: '480px',
        marginBottom: '40px',
      }}>
        If the work resonates, let's find out if there's a fit. No prep needed.
      </p>

      {/* Availability */}
      <div
        className="inline-flex items-center gap-2"
        style={{
          border: '1px solid var(--border)',
          padding: '8px 16px',
          marginBottom: '32px',
        }}
      >
        <span style={{
          width: '6px',
          height: '6px',
          borderRadius: '50%',
          backgroundColor: '#22c55e',
          display: 'inline-block',
          flexShrink: 0,
        }} />
        <span style={{ color: 'var(--muted)', fontSize: 'var(--type-small)' }}>
          Available for Q2 2026 · 1–2 clients
        </span>
      </div>

      {/* CTAs */}
      <div className="flex flex-wrap gap-4">
        <a
          href="https://cal.com/jennylu98/30"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            backgroundColor: 'var(--btn-primary-bg)',
            color: 'var(--btn-primary-fg)',
            fontSize: 'var(--type-body)',
            fontWeight: 'var(--weight-medium)',
            padding: '0 var(--btn-x-padding)',
            height: 'var(--btn-height)',
            borderRadius: 'var(--btn-radius)',
            display: 'inline-flex',
            alignItems: 'center',
            transition: 'opacity 0.15s ease',
          }}
          onMouseEnter={(e) => e.currentTarget.style.opacity = '0.85'}
          onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
        >
          Schedule 30 min →
        </a>
        <a
          href={`https://${jenny.contact.linkedin}`}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            border: '1px solid var(--border)',
            color: 'var(--muted)',
            fontSize: 'var(--type-small)',
            padding: '14px 28px',
            display: 'inline-block',
            transition: 'border-color 0.15s ease, color 0.15s ease',
          }}
          onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--muted)'; e.currentTarget.style.color = 'var(--text)'; }}
          onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--muted)'; }}
        >
          LinkedIn →
        </a>
        <a
          href="/jenny-lu-resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            border: '1px solid var(--border)',
            color: 'var(--muted)',
            fontSize: 'var(--type-small)',
            padding: '14px 28px',
            display: 'inline-block',
            transition: 'border-color 0.15s ease, color 0.15s ease',
          }}
          onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--muted)'; e.currentTarget.style.color = 'var(--text)'; }}
          onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--muted)'; }}
        >
          Resume ↓
        </a>
      </div>
    </section>
  );
}
