import { jenny } from '../../data/jenny';

export default function LLClose({ company }) {
  return (
    <section
      style={{ borderTop: '1px solid var(--border)' }}
      className="max-w-5xl mx-auto px-12 py-20"
    >
      <p
        style={{ color: 'var(--accent)', fontSize: 'var(--type-small)', fontFamily: 'var(--font-badge)', fontWeight: 'var(--weight-medium)', letterSpacing: 'var(--tracking-badge)', marginBottom: '32px' }}
        className="uppercase"
      >
        Let's talk
      </p>

      <p
        style={{
          fontSize: 'var(--type-subhead)',
          fontWeight: 'var(--weight-medium)',
          lineHeight: 'var(--leading-body)',
          letterSpacing: 'var(--tracking-snug)',
          color: 'var(--text)',
          maxWidth: '680px',
          marginBottom: '48px',
        }}
      >
        {company.close}
      </p>

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
            padding: '12px 24px',
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
            padding: '12px 24px',
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
