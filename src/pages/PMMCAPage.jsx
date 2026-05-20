import { Link } from 'react-router-dom';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

const metrics = [
  { value: '3', label: 'High-ticket buyers closed, wave 1', detail: 'Optimized pricing psychology' },
  { value: '5,000+', label: 'Active funnel subscribers', detail: 'Natively integrated into the layout' },
  { value: '0', label: 'Developer handoffs', detail: 'Repository delivered production-ready' },
];

const journey = [
  {
    num: '01',
    label: 'Acquisition state',
    detail: 'Public informational pages and structured syllabus previews.',
  },
  {
    num: '02',
    label: 'Transaction state',
    detail: 'Interactive pricing selectors and optimized checkout states.',
  },
  {
    num: '03',
    label: 'Retention state',
    detail: 'A fully customized, branded Circle community space.',
  },
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
const h3 = {
  fontFamily: 'var(--font-sans)', fontSize: 'var(--type-h3)',
  fontWeight: 'var(--weight-medium)', lineHeight: 'var(--leading-h2)',
  letterSpacing: 'var(--tracking-h3)', color: 'var(--text)',
  margin: '0 0 16px',
};
const body = {
  fontSize: 'var(--type-lead)', lineHeight: 'var(--leading-body)',
  color: 'var(--text)', margin: '0 0 16px', maxWidth: '760px',
};

function ImagePlaceholder({ caption }) {
  return (
    <div style={{
      border: '1.5px dashed var(--border)',
      borderRadius: 'var(--radius)',
      padding: '48px 32px',
      backgroundColor: 'var(--surface-alt)',
      display: 'flex', flexDirection: 'column', alignItems: 'center',
      gap: '12px', margin: '24px 0 8px',
    }}>
      <i className="fa-light fa-image" style={{ fontSize: '32px', color: 'var(--muted)' }} />
      <span style={{
        fontSize: 'var(--type-small)', fontFamily: 'var(--font-badge)',
        fontWeight: 'var(--weight-medium)', letterSpacing: 'var(--tracking-badge)',
        textTransform: 'uppercase', color: 'var(--muted)',
      }}>
        Image placeholder
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

export default function PMMCAPage() {
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
            <span style={{ ...eyebrow, color: 'var(--accent)' }}>Case study · PMMCA</span>
            <h1 style={{
              fontFamily: 'var(--font-sans)', fontSize: 'var(--type-h1)',
              fontWeight: 'var(--weight-medium)', lineHeight: 'var(--leading-h1)',
              letterSpacing: 'var(--tracking-h1)', color: 'var(--text)',
              margin: '0 0 20px', maxWidth: '820px',
            }}>
              PMMCA Platform Architecture
            </h1>
            <p style={{
              fontSize: 'var(--type-lead)', lineHeight: 'var(--leading-body)',
              color: 'var(--muted)', margin: 0, maxWidth: '720px',
            }}>
              Compressing an educational ecosystem into an AI-native design system with 0 developer handoffs.
            </p>
          </div>
        </section>

        {/* ── 01 · EXECUTIVE SUMMARY ── */}
        <section style={sectionPad}>
          <div style={sectionInner}>
            <span style={eyebrow}>01 · Executive summary</span>
            <h2 style={h2}>A commercial-validated build, top of page.</h2>

            <div style={{
              display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px',
              marginBottom: '40px',
            }} className="pmmca-two-col">
              <div style={{
                backgroundColor: 'var(--surface)', borderRadius: 'var(--radius)',
                padding: '28px', border: '1px solid var(--border)',
              }}>
                <span style={{ ...eyebrow, color: 'var(--text)', marginBottom: '12px' }}>The problem</span>
                <p style={{ ...body, margin: 0, fontSize: 'var(--type-body)' }}>
                  High-ticket accelerators suffer from heavy drop-off if the onboarding, checkout, and community experiences feel disconnected or clunky. Traditional design-to-development handoffs take months, stalling launch velocity.
                </p>
              </div>
              <div style={{
                backgroundColor: 'var(--surface)', borderRadius: 'var(--radius)',
                padding: '28px', border: '1px solid var(--border)',
              }}>
                <span style={{ ...eyebrow, color: 'var(--accent)', marginBottom: '12px' }}>The solution</span>
                <p style={{ ...body, margin: 0, fontSize: 'var(--type-body)' }}>
                  Sketched the entire architecture on paper, then vibe-coded a unified interface connecting the public frontend, multi-tier pricing blocks, and the Circle community platform into one fluid application layout.
                </p>
              </div>
            </div>

            <span style={{ ...eyebrow, color: 'var(--text)', marginBottom: '12px' }}>The outcomes</span>
            <div style={{
              display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px',
            }} className="pmmca-metrics-grid">
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
          </div>
        </section>

        {/* ── 02 · PLATFORM ARCHITECTURE ── */}
        <section style={sectionPad}>
          <div style={sectionInner}>
            <span style={eyebrow}>02 · Platform architecture</span>
            <h2 style={h2}>The system loop.</h2>
            <p style={body}>
              To justify a premium tier, the user journey had to feel like a single, seamless web application — not a chaotic mix of random third-party links. I used AI-native workflows to map out a data and interaction loop that bridged three distinct user states.
            </p>

            {/* 3 states */}
            <div style={{
              display: 'flex', flexDirection: 'column', gap: '0',
              borderTop: '1px solid var(--border)', marginTop: '32px',
            }}>
              {journey.map((step, i) => (
                <div key={step.num} style={{
                  display: 'flex', gap: '20px', alignItems: 'flex-start',
                  padding: '20px 0',
                  borderBottom: i < journey.length - 1 ? '1px solid var(--border)' : 'none',
                }}>
                  <span style={{
                    color: 'var(--accent)', fontSize: 'var(--type-small)',
                    fontFamily: 'var(--font-badge)', fontWeight: 'var(--weight-medium)',
                    letterSpacing: 'var(--tracking-badge)',
                    flexShrink: 0, width: '24px', paddingTop: '2px',
                  }}>
                    {step.num}
                  </span>
                  <div style={{ flex: 1 }}>
                    <span style={{
                      fontSize: 'var(--type-body)', fontWeight: 'var(--weight-medium)',
                      color: 'var(--text)', display: 'block', marginBottom: '4px',
                    }}>
                      {step.label}
                    </span>
                    <span style={{
                      fontSize: 'var(--type-small)', color: 'var(--muted)',
                      lineHeight: 'var(--leading-body)',
                    }}>
                      {step.detail}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Flow diagram */}
            <div style={{
              background: 'linear-gradient(180deg, #272727 0%, #1a1a1a 100%)',
              borderRadius: 'var(--radius)',
              padding: '32px',
              marginTop: '32px',
              display: 'flex', flexWrap: 'wrap', alignItems: 'center',
              justifyContent: 'center', gap: '16px',
            }}>
              {['Public onboarding engine', 'Interactive pricing matrix', 'Branded Circle platform'].map((node, i, arr) => (
                <div key={node} style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <div style={{
                    backgroundColor: 'rgba(255,255,255,0.06)',
                    border: '1px solid rgba(255,255,255,0.12)',
                    borderRadius: 'var(--radius-widget)',
                    padding: '16px 20px',
                    color: '#ffffff', fontSize: 'var(--type-body)',
                    fontWeight: 'var(--weight-medium)',
                    whiteSpace: 'nowrap',
                  }}>
                    {node}
                  </div>
                  {i < arr.length - 1 && (
                    <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: '20px' }}>→</span>
                  )}
                </div>
              ))}
            </div>

            <ImagePlaceholder
              caption="Architecture flow diagram — a clean user-flow node diagram showing how a user moves from the public site, through the checkout screens, straight into the Circle dashboard. High-level technical map."
            />
          </div>
        </section>

        {/* ── 03 · UX MECHANICS ── */}
        <section style={sectionPad}>
          <div style={sectionInner}>
            <span style={eyebrow}>03 · UX mechanics & information hierarchy</span>
            <h2 style={h2}>Designed for human cognitive load, not just aesthetics.</h2>

            {/* Sub: Course tabs */}
            <h3 style={h3}>Designing for high-ticket trust — course tabs</h3>
            <p style={body}>
              When an educational program costs over $1,000, users experience high friction. If the curriculum looks like a massive wall of text, cognitive load spikes, and users bounce.
            </p>
            <p style={{ ...body, fontWeight: 'var(--weight-medium)' }}>
              I structured a clean, tabbed layout system for the curriculum modules. Users drill into specific weekly lesson scopes interactively without losing their place on the main page — staying engaged while the premium value is explicitly detailed.
            </p>
            <ImagePlaceholder
              caption="Desktop mockup — close-up UI of the responsive course tabs component, highlighting typography and layout structure when showcasing the curriculum."
            />

            {/* Sub: Pricing matrix */}
            <h3 style={{ ...h3, marginTop: '56px' }}>Mitigating checkout friction — the pricing matrix</h3>
            <p style={body}>
              The checkout section had to completely neutralize buyer objections at the exact moment of financial commitment.
            </p>
            <p style={{ ...body, fontWeight: 'var(--weight-medium)' }}>
              I built a clear, vertical pricing structure that maps out the precise ROI of each tier. Key features are prominently tokenized so users can instantly cross-reference what they're paying for, creating a high-trust path to click "Enroll."
            </p>
            <ImagePlaceholder
              caption="Mobile mockup — the $1,497 / $997 / $499 pricing columns. Proves the layout responds perfectly on small screens."
            />
          </div>
        </section>

        {/* ── 04 · ENGINEERING OVERRIDE ── */}
        <section style={sectionPad}>
          <div style={sectionInner}>
            <span style={eyebrow}>04 · The engineering override</span>
            <h2 style={h2}>The branded Circle integration.</h2>
            <p style={body}>
              Most designers leave the Circle forum looking completely default, breaking the premium look of the brand the second a user logs in.
            </p>
            <p style={{ ...body, fontWeight: 'var(--weight-medium)' }}>
              I bypassed the constraints of the standard platform by writing custom CSS layout overrides directly inside the Circle environment. I aligned the typography tokens, refined the padding rules, and styled custom web components inside the forum view. When a user transitions from the main platform into the community dashboard, the visual rhythm remains entirely intact. It feels like an expensive, custom-built application.
            </p>
            <ImagePlaceholder
              caption="Split-screen mockup — public site on the left, logged-in Circle community forum on the right. Visually proves the two platforms match perfectly."
            />
          </div>
        </section>

        {/* ── 05 · TECHNICAL DELIVERY ── */}
        <section style={sectionPad}>
          <div style={sectionInner}>
            <span style={eyebrow}>05 · Technical delivery</span>
            <h2 style={h2}>Zero-handoff vibe coding.</h2>
            <p style={body}>
              Traditional product design drops a static Figma link onto an engineering team, causing layout degradation, broken spacing, and weeks of back-and-forth debugging.
            </p>
            <p style={{ ...body, fontWeight: 'var(--weight-medium)' }}>
              By utilizing Claude and Cursor, I translated the approved paper wireframes directly into live, responsive HTML and Tailwind CSS layout components. The entire design system was handed over as a production-ready repository.
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
