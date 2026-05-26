import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

const stack = ['Figma', 'Pencil', 'Claude', 'Claude Code'];

const metrics = [
  { value: '12', label: 'Strategy deck sections', detail: 'Persona, JTBD, six principles, conversion map, retention model, open questions.' },
  { value: '6', label: 'Decision principles', detail: 'Applied to every design tradeoff — onboarding, copy, layout.' },
  { value: '1', label: 'Designer doing strategy + design', detail: 'No PM, no researcher — full ownership end-to-end.' },
];

// ── shared style fragments ──
const sectionPad = { padding: '80px 0', borderTop: '1px solid var(--border)' };
const sectionInner = { maxWidth: '1000px', margin: '0 auto', padding: '0 48px' };
const eyebrow = {
  color: 'var(--accent)', fontSize: 'var(--type-small)',
  fontFamily: 'var(--font-badge)', fontWeight: 'var(--weight-medium)',
  letterSpacing: 'var(--tracking-badge)', textTransform: 'uppercase',
  display: 'block', marginBottom: '16px',
};
const h2 = {
  fontFamily: 'var(--font-sans)', fontSize: 'var(--type-h2)',
  fontWeight: 'var(--weight-medium)', lineHeight: 'var(--leading-h2)',
  letterSpacing: 'var(--tracking-h2)', color: 'var(--text)',
  margin: '0 0 24px', maxWidth: '760px',
};
const body = {
  fontSize: 'var(--type-lead)', lineHeight: 'var(--leading-body)',
  color: 'var(--text)', margin: '0 0 16px', maxWidth: '760px',
};

function ImageBlock({ src, alt, caption }) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e) => { if (e.key === 'Escape') setIsOpen(false); };
    document.addEventListener('keydown', onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [isOpen]);

  return (
    <>
      <figure style={{ margin: '20px 0 8px' }}>
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          aria-label={`Zoom into image: ${alt}`}
          style={{
            display: 'block', width: '100%',
            padding: 0, border: 'none', background: 'none',
            cursor: 'zoom-in',
            borderRadius: 'var(--radius)',
            overflow: 'hidden',
          }}
        >
          <div style={{
            borderRadius: 'var(--radius)',
            overflow: 'hidden',
            border: '1px solid var(--border)',
          }}>
            <img
              src={src}
              alt={alt}
              loading="lazy"
              style={{ width: '100%', height: 'auto', display: 'block' }}
            />
          </div>
        </button>
        {caption && (
          <figcaption style={{
            fontSize: 'var(--type-small)', color: 'var(--muted)',
            textAlign: 'center', marginTop: '12px',
            lineHeight: 'var(--leading-body)', fontStyle: 'italic',
          }}>
            {caption}
          </figcaption>
        )}
      </figure>

      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          onClick={() => setIsOpen(false)}
          style={{
            position: 'fixed', inset: 0, zIndex: 1000,
            backgroundColor: 'rgba(0,0,0,0.94)',
            overflowY: 'auto', cursor: 'zoom-out',
            padding: '32px 0',
          }}
        >
          <img
            src={src}
            alt={alt}
            style={{
              display: 'block', margin: '0 auto',
              width: 'min(96vw, 1800px)',
              height: 'auto',
              boxShadow: '0 24px 64px rgba(0,0,0,0.6)',
              borderRadius: 'var(--radius)',
              cursor: 'zoom-out',
            }}
          />
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); setIsOpen(false); }}
            aria-label="Close zoomed image"
            style={{
              position: 'fixed', top: 24, right: 24,
              width: 44, height: 44, borderRadius: '50%',
              background: 'rgba(255,255,255,0.14)',
              border: '1px solid rgba(255,255,255,0.22)',
              color: '#fff', fontSize: 20,
              cursor: 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              backdropFilter: 'blur(8px)',
              WebkitBackdropFilter: 'blur(8px)',
            }}
          >
            ×
          </button>
        </div>
      )}
    </>
  );
}

function ImagePlaceholder({ caption }) {
  return (
    <div style={{
      border: '1.5px dashed var(--border)',
      borderRadius: 'var(--radius)',
      padding: '48px 32px',
      backgroundColor: 'var(--surface-alt)',
      display: 'flex', flexDirection: 'column', alignItems: 'center',
      gap: '12px', margin: '20px 0 8px',
    }}>
      <i className="fa-light fa-image" style={{ fontSize: '32px', color: 'var(--muted)' }} />
      <span style={{
        fontSize: 'var(--type-small)', fontFamily: 'var(--font-badge)',
        fontWeight: 'var(--weight-medium)', letterSpacing: 'var(--tracking-badge)',
        textTransform: 'uppercase', color: 'var(--muted)',
      }}>
        Screenshot placeholder
      </span>
      <p style={{
        fontSize: 'var(--type-body)', color: 'var(--muted)',
        margin: 0, textAlign: 'center', maxWidth: '520px',
        lineHeight: 'var(--leading-body)',
      }}>
        {caption}
      </p>
    </div>
  );
}

export default function MegPrimePage() {
  return (
    <div style={{ backgroundColor: 'var(--bg)', minHeight: '100vh' }}>
      <Nav />
      <main>

        {/* ── HERO ── */}
        <section style={{
          padding: 'calc(56px + 64px) 0 64px',
          background: 'linear-gradient(180deg, rgba(139,120,255,0.18) 0%, rgba(139,120,255,0.04) 60%, var(--bg) 100%)',
        }}>
          <div style={sectionInner}>
            <Link
              to="/"
              style={{
                fontSize: 'var(--type-small)', fontFamily: 'var(--font-badge)',
                fontWeight: 'var(--weight-medium)', letterSpacing: 'var(--tracking-badge)',
                textTransform: 'uppercase', color: 'var(--muted)',
                textDecoration: 'none', display: 'inline-flex', alignItems: 'center',
                gap: '6px', marginBottom: '32px',
              }}
            >
              <i className="fa-light fa-arrow-left" /> Back to portfolio
            </Link>
            <span style={{ ...eyebrow, color: 'var(--accent)' }}>Case study · MegPrime Pay</span>
            <h1 style={{
              fontFamily: 'var(--font-sans)', fontSize: 'var(--type-h1)',
              fontWeight: 'var(--weight-medium)', lineHeight: 'var(--leading-h1)',
              letterSpacing: 'var(--tracking-h1)', color: 'var(--text)',
              margin: '0 0 20px', maxWidth: '820px',
            }}>
              Strategy and design for a brand new crypto bill-pay product.
            </h1>
            <p style={{
              fontSize: 'var(--type-lead)', lineHeight: 'var(--leading-body)',
              color: 'var(--muted)', margin: '0 0 28px', maxWidth: '720px',
            }}>
              A crypto-backed bill-pay startup needed a designer who could do both the strategy and the screens. I built the product foundation — persona, principles, JTBD, conversion mapping — and designed the onboarding flow for rent, mortgage, and ACH, all in three months.
            </p>

            {/* Tech stack chips */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {stack.map((tech) => (
                <span key={tech} style={{
                  display: 'inline-flex', alignItems: 'center',
                  fontSize: '10px', fontFamily: 'var(--font-badge)',
                  fontWeight: 'var(--weight-medium)', letterSpacing: '0.5px',
                  textTransform: 'uppercase', color: 'var(--text)',
                  backgroundColor: 'var(--surface)',
                  border: '1px solid var(--border)',
                  borderRadius: '4px', padding: '5px 10px', lineHeight: 1,
                }}>
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ── 01 · THE OPPORTUNITY ── */}
        <section style={sectionPad}>
          <div style={sectionInner}>
            <span style={eyebrow}>01 · The opportunity</span>
            <h2 style={h2}>A brand new product with no precedent.</h2>
            <p style={body}>
              MegPrime Pay was a brand new product with no precedent. Think Bilt Rewards, but powered by the company's own crypto token instead of a credit card.
            </p>
            <p style={{ ...body, fontWeight: 'var(--weight-medium)' }}>
              The team had a business model and a Jira backlog, but no shared foundation: no persona, no decision rules, no design language for explaining unfamiliar rails to a skeptical user. Every design conversation could be re-litigated.
            </p>
          </div>
        </section>

        {/* ── 02 · THE FOUNDATION ── */}
        <section style={sectionPad}>
          <div style={sectionInner}>
            <span style={eyebrow}>02 · The foundation</span>
            <h2 style={h2}>Built the foundation the team did not have.</h2>
            <p style={body}>
              I built the foundation first. A strategy deck pulled from Jira, competitive research, and market data, synthesized with Claude. Then designed on top of it — a value-prop-led onboarding, dual flows for rent and mortgage, and an alternate ACH path for users without landlord portals.
            </p>
            <p style={{ ...body, fontWeight: 'var(--weight-medium)' }}>
              Each screen ties back to one of six principles. With no precedent to copy, principles became the operating system for every design tradeoff.
            </p>
            <ImagePlaceholder caption="Strategy deck — persona, JTBD, principles, conversion map. Pending real assets." />
          </div>
        </section>

        {/* ── 03 · THE DESIGN ── */}
        <section style={sectionPad}>
          <div style={sectionInner}>
            <span style={eyebrow}>03 · The design</span>
            <h2 style={h2}>Onboarding for rent, mortgage, and ACH.</h2>
            <p style={body}>
              Three onboarding paths. Two primary flows for rent and mortgage payments, both anchored on the value prop before asking for credentials. A separate ACH path for users without landlord portals — same product, different entry.
            </p>
            <p style={{ ...body, fontWeight: 'var(--weight-medium)' }}>
              Full screens and decision rationale coming next — pending fuller copy.
            </p>
            <ImagePlaceholder caption="MegPrime onboarding screens. Pending real assets." />
          </div>
        </section>

        {/* ── 04 · OUTCOMES ── */}
        <section style={sectionPad}>
          <div style={sectionInner}>
            <span style={eyebrow}>04 · Outcomes</span>
            <h2 style={h2}>Strategy + design shipped in 3 months.</h2>
            <p style={body}>
              Turning a Jira backlog into a coherent product with persona, principles, and dual onboarding flows.
            </p>

            <div style={{
              display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px',
              marginTop: '32px',
            }} className="megprime-metrics-grid">
              {metrics.map((m) => (
                <div key={m.label} style={{
                  backgroundColor: 'var(--surface)', borderRadius: 'var(--radius)',
                  padding: '24px', border: '1px solid var(--border)',
                }}>
                  <div style={{
                    fontFamily: 'var(--font-sans)', fontSize: 'var(--type-h2)',
                    fontWeight: 'var(--weight-medium)', lineHeight: 'var(--leading-h2)',
                    letterSpacing: 'var(--tracking-h2)', color: 'var(--text)',
                    marginBottom: '8px',
                  }}>
                    {m.value}
                  </div>
                  <div style={{
                    fontSize: 'var(--type-body)', fontWeight: 'var(--weight-medium)',
                    color: 'var(--text)', marginBottom: '4px',
                  }}>
                    {m.label}
                  </div>
                  <div style={{
                    fontSize: 'var(--type-small)', color: 'var(--muted)',
                    lineHeight: 'var(--leading-body)',
                  }}>
                    {m.detail}
                  </div>
                </div>
              ))}
            </div>

            <p style={{ ...body, marginTop: '40px', fontStyle: 'italic', color: 'var(--muted)' }}>
              Pending: full retention model and post-launch behavioral analytics.
            </p>
          </div>
        </section>

        {/* ── Bottom back link ── */}
        <section style={{ padding: '64px 0 80px', borderTop: '1px solid var(--border)' }}>
          <div style={{ ...sectionInner, display: 'flex', justifyContent: 'center' }}>
            <Link
              to="/"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                backgroundColor: 'var(--accent)',
                color: 'var(--accent-fg)',
                fontSize: 'var(--type-body)',
                fontWeight: 'var(--weight-medium)',
                padding: '12px 22px',
                borderRadius: 'var(--radius-btn)',
                textDecoration: 'none',
                cursor: 'pointer',
              }}
            >
              <i className="fa-light fa-arrow-left" />
              Back to portfolio
            </Link>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
