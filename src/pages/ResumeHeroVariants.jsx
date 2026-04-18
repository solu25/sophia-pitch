import { jenny } from '../data/jenny';

const headline = "I research it, design it, and ship it.";
const subtitle = "Senior Product Designer \u00B7 10+ years \u00B7 Pittsburgh, PA";

const stats = [
  { value: "10+", label: "Years" },
  { value: "4M", label: "Users" },
  { value: "384%", label: "Lift" },
];

/* ─── Variant A — No avatar, left-aligned pitch ─── */

export function HeroVariantA() {
  return (
    <div style={{ textAlign: 'left' }}>
      {/* Headline */}
      <h1 style={{
        fontFamily: 'var(--font-sans)',
        fontSize: 'var(--type-h1)',
        fontWeight: 'var(--weight-medium)',
        lineHeight: 'var(--leading-h1)',
        letterSpacing: 'var(--tracking-h1)',
        color: 'var(--text)',
        margin: 0,
      }}>
        {headline}
      </h1>

      {/* Subtitle */}
      <p style={{
        fontFamily: 'var(--font-sans)',
        fontSize: 'var(--type-lead)',
        fontWeight: 'var(--weight-normal)',
        lineHeight: 'var(--leading-body)',
        color: 'var(--muted)',
        margin: 'var(--space-12) 0 0 0',
      }}>
        {subtitle}
      </p>

      {/* Summary */}
      <p style={{
        fontFamily: 'var(--font-sans)',
        fontSize: 'var(--type-body)',
        fontWeight: 'var(--weight-normal)',
        lineHeight: 'var(--leading-body)',
        color: 'var(--muted)',
        margin: 'var(--space-18) 0 0 0',
        maxWidth: '640px',
      }}>
        {jenny.summary}
      </p>

      {/* Contact row */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: 'var(--space-18)',
        marginTop: 'var(--space-24)',
        flexWrap: 'wrap',
      }}>
        <a href={`mailto:${jenny.contact.email}`} style={{
          fontFamily: 'var(--font-sans)',
          fontSize: 'var(--type-small)',
          color: 'var(--muted)',
          textDecoration: 'none',
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
        }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="4" width="20" height="16" rx="2" />
            <path d="M22 4L12 13L2 4" />
          </svg>
          {jenny.contact.email}
        </a>

        <a href={`https://${jenny.contact.linkedin}`} target="_blank" rel="noopener noreferrer" style={{
          fontFamily: 'var(--font-sans)',
          fontSize: 'var(--type-small)',
          color: 'var(--muted)',
          textDecoration: 'none',
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
        }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
          </svg>
          LinkedIn
        </a>

        <span style={{
          fontFamily: 'var(--font-sans)',
          fontSize: 'var(--type-small)',
          color: 'var(--muted)',
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
        }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
            <circle cx="12" cy="10" r="3" />
          </svg>
          Pittsburgh, PA
        </span>
      </div>

      {/* Download PDF button */}
      <div style={{ marginTop: 'var(--space-18)' }}>
        <button style={{
          fontFamily: 'var(--font-sans)',
          fontSize: 'var(--type-small)',
          fontWeight: 'var(--weight-medium)',
          color: 'var(--btn-primary-fg)',
          backgroundColor: 'var(--btn-primary-bg)',
          border: 'none',
          borderRadius: 'var(--btn-radius)',
          height: 'var(--btn-height-sm)',
          padding: '0 20px',
          cursor: 'pointer',
        }}>
          Download PDF
        </button>
      </div>

      {/* Stats row */}
      <div style={{
        display: 'flex',
        gap: 'var(--space-24)',
        marginTop: 'var(--space-24)',
      }}>
        {stats.map((s) => (
          <div key={s.label}>
            <div style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 'var(--type-h2)',
              fontWeight: 'var(--weight-medium)',
              letterSpacing: 'var(--tracking-h2)',
              lineHeight: 'var(--leading-h2)',
              color: 'var(--text)',
            }}>
              {s.value}
            </div>
            <div style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 'var(--type-small)',
              fontWeight: 'var(--weight-normal)',
              color: 'var(--muted)',
              marginTop: '2px',
            }}>
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── Variant B — Split layout ─── */

export function HeroVariantB() {
  return (
    <div style={{
      display: 'flex',
      gap: 'var(--space-24)',
      alignItems: 'flex-start',
    }}>
      {/* Left column — 60% */}
      <div style={{ flex: '0 0 60%' }}>
        <h1 style={{
          fontFamily: 'var(--font-sans)',
          fontSize: 'var(--type-h1)',
          fontWeight: 'var(--weight-medium)',
          lineHeight: 'var(--leading-h1)',
          letterSpacing: 'var(--tracking-h1)',
          color: 'var(--text)',
          margin: 0,
        }}>
          {headline}
        </h1>

        <p style={{
          fontFamily: 'var(--font-sans)',
          fontSize: 'var(--type-body)',
          fontWeight: 'var(--weight-normal)',
          lineHeight: 'var(--leading-body)',
          color: 'var(--muted)',
          margin: 'var(--space-18) 0 0 0',
        }}>
          {jenny.summary}
        </p>

        {/* Contact row */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: 'var(--space-18)',
          marginTop: 'var(--space-24)',
          flexWrap: 'wrap',
        }}>
          <a href={`mailto:${jenny.contact.email}`} style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 'var(--type-small)',
            color: 'var(--muted)',
            textDecoration: 'none',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
          }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <path d="M22 4L12 13L2 4" />
            </svg>
            {jenny.contact.email}
          </a>

          <a href={`https://${jenny.contact.linkedin}`} target="_blank" rel="noopener noreferrer" style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 'var(--type-small)',
            color: 'var(--muted)',
            textDecoration: 'none',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
          }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
            LinkedIn
          </a>
        </div>

        {/* Download PDF button */}
        <div style={{ marginTop: 'var(--space-18)' }}>
          <button style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 'var(--type-small)',
            fontWeight: 'var(--weight-medium)',
            color: 'var(--btn-primary-fg)',
            backgroundColor: 'var(--btn-primary-bg)',
            border: 'none',
            borderRadius: 'var(--btn-radius)',
            height: 'var(--btn-height-sm)',
            padding: '0 20px',
            cursor: 'pointer',
          }}>
            Download PDF
          </button>
        </div>
      </div>

      {/* Right column — 40%, compact card */}
      <div style={{
        flex: '0 0 40%',
        backgroundColor: 'var(--surface)',
        borderRadius: 'var(--radius)',
        boxShadow: 'var(--shadow-widget)',
        padding: 'var(--space-24)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 'var(--space-12)',
      }}>
        {/* Avatar */}
        <div style={{
          width: '72px',
          height: '72px',
          borderRadius: '50%',
          backgroundColor: 'var(--border)',
          backgroundImage: 'url(/avatar.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }} />

        <div style={{
          fontFamily: 'var(--font-sans)',
          fontSize: 'var(--type-lead)',
          fontWeight: 'var(--weight-medium)',
          color: 'var(--text)',
          textAlign: 'center',
        }}>
          {jenny.name}
        </div>

        <div style={{
          fontFamily: 'var(--font-sans)',
          fontSize: 'var(--type-small)',
          fontWeight: 'var(--weight-normal)',
          color: 'var(--muted)',
          textAlign: 'center',
        }}>
          Senior Product Designer
        </div>

        {/* Mini stats stacked */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 'var(--space-12)',
          width: '100%',
          marginTop: 'var(--space-6)',
        }}>
          {stats.map((s) => (
            <div key={s.label} style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '0 var(--space-6)',
            }}>
              <span style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 'var(--type-small)',
                color: 'var(--muted)',
              }}>
                {s.label}
              </span>
              <span style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 'var(--type-body)',
                fontWeight: 'var(--weight-medium)',
                color: 'var(--text)',
              }}>
                {s.value}
              </span>
            </div>
          ))}
        </div>

        {/* Location */}
        <div style={{
          fontFamily: 'var(--font-sans)',
          fontSize: 'var(--type-small)',
          color: 'var(--muted)',
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
          marginTop: 'var(--space-6)',
        }}>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
            <circle cx="12" cy="10" r="3" />
          </svg>
          Pittsburgh, PA
        </div>
      </div>
    </div>
  );
}

/* ─── Variant C — No hero, straight to content ─── */

export function HeroVariantC() {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '16px 0',
      flexWrap: 'wrap',
      gap: 'var(--space-12)',
    }}>
      {/* Left: info */}
      <span style={{
        fontFamily: 'var(--font-sans)',
        fontSize: 'var(--type-body)',
        fontWeight: 'var(--weight-medium)',
        color: 'var(--text)',
      }}>
        {jenny.name} &middot; Senior Product Designer &middot; 10+ years
      </span>

      {/* Right: actions */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: 'var(--space-12)',
      }}>
        <a href={`mailto:${jenny.contact.email}`} style={{
          fontFamily: 'var(--font-sans)',
          fontSize: 'var(--type-small)',
          color: 'var(--muted)',
          textDecoration: 'none',
        }}>
          {jenny.contact.email}
        </a>

        <button style={{
          fontFamily: 'var(--font-sans)',
          fontSize: 'var(--type-small)',
          fontWeight: 'var(--weight-medium)',
          color: 'var(--btn-primary-fg)',
          backgroundColor: 'var(--btn-primary-bg)',
          border: 'none',
          borderRadius: 'var(--btn-radius)',
          height: 'var(--btn-height-sm)',
          padding: '0 20px',
          cursor: 'pointer',
        }}>
          Download PDF
        </button>
      </div>
    </div>
  );
}
