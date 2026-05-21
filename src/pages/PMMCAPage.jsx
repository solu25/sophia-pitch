import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

const stack = ['Figma', 'Framer', 'Claude Code'];

const researchFindings = [
  "Most coaching pages led with the coach's credentials, not the buyer's problem.",
  'Pricing was usually buried below the fold or behind a "book a call" wall.',
  'Testimonials sat at the top, where they were easy to skim past.',
  "FAQ pages lived on a separate URL, hidden from buyers who didn't think to look.",
  'Segmentation was missing — buyers had to figure out for themselves which tier applied to them.',
];

const pageSections = [
  {
    label: 'Hero',
    tagline: 'open the loop',
    body: '"Stop reacting to your career. Start creating it." The page leads with the buyer\'s fear, not Harvey\'s credential. Harvey appears in the lightning bolt frame as the answer — credentialed without claiming it. "One breakthrough. Three ways to get there." plants the tier system before the buyer sees a price.',
    image: { src: '/pmmca-hero-cover.png', alt: 'PMMCA Overview page — Harvey Lee Coaching Platform, browser mockup.' },
  },
  {
    label: 'Proof',
    tagline: 'clear the believability gate',
    body: "Four stats (80% increased recruiter interest, 100% met career goals, 16-week redundancy to re-employment, 100% recommend) and a logo strip — Amazon, Salesforce, Monday, Frontify, Blink, ProjectWorks, k2view. If the buyer doesn't believe it works, nothing else matters. This section has to clear before the page can do anything.",
    image: { src: '/pmmca-proof.png', alt: 'PMMCA Proof section — four percentage stats and a company logo strip.' },
  },
  {
    label: 'Stories',
    tagline: 'make it real',
    body: 'Four named breakthroughs: Sara promoted in 20 weeks, Kristin secured her role in one month, Amit found his best-fit role after a layoff, Dean placed within 12 weeks. Each tagged by outcome category. The buyer starts seeing themselves on the page.',
    image: { src: '/pmmca-stories.png', alt: 'PMMCA named breakthroughs section — Sara, Kristin, Amit, Dean with outcome tags.' },
  },
  {
    label: 'Segmentation',
    tagline: 'pick your path',
    body: 'Three cards (Earn the Promotion, Secure Your Next Role, Sharpen Your Edge) with their tier badges. This is the self-identification moment. By the end of this section, the buyer has already mentally chosen — pricing later just confirms it.',
    image: { src: '/pmmca-pathways.png', alt: 'PMMCA pathways section — three tier cards: Earn the Promotion, Secure Your Next Role, Sharpen Your Edge.' },
  },
  {
    label: 'Depth on demand',
    tagline: null,
    body: 'The tabbed "Find Your Starting Point" section lets curious buyers dive into the full curriculum without forcing it on everyone. Career Builder opens by default; the other two are one click away. Skim or read — the buyer chooses.',
    screenshot: 'Screenshot 3 — One Program Three Ways In + Find Your Starting Point tabs.',
  },
  {
    label: 'Pricing & Comparison',
    tagline: 'the close + the verifier',
    body: 'Three cards on dark. Career Builder fully filled with the orange accent, the others in white. The full-color treatment isn\'t a "featured" badge — it\'s a visual event. Anchoring at $1,497 makes $997 read as the practical option and $499 read as the easy yes. Founding member bonuses run across all three tiers. The Individual/Teams toggle parks the B2B buyer out of the way of the individual decision.',
    image: { src: '/pmmca-pricing.png', alt: 'PMMCA pricing cards on dark — Career Builder, Job Seeker, Coaching & Community.' },
    bodyExtra: "For the verifiers, the access rows (1:1 strategy, KPI Toolkit, AMAs, masterclasses, Harvey Bot, community) check across all three tiers. Only the courses themselves differentiate. The honest message: the access is the same — the course content is what you're paying more for.",
    screenshot: 'Screenshot — Comparison table (coming soon).',
  },
  {
    label: 'Testimonials',
    tagline: 'handle the last objection',
    body: "After pricing, not before. By this point the buyer isn't asking does this work — they're asking are people like me actually doing this. Ashley, Kristin Howland, and others answer that.",
    image: { src: '/pmmca-testimonials.png', alt: 'PMMCA testimonials section — buyer-perspective quotes after pricing.' },
  },
  {
    label: 'FAQ',
    tagline: 'clear the path to checkout',
    body: "Ten questions handling the practical objections that kill conversions: which path should I choose, can my company pay, how much time per week, what's the money-back guarantee. HTML-rendered answers so Harvey can embed links and lists without coming back to me.",
    image: { src: '/pmmca-faq.png', alt: 'PMMCA FAQ accordion section.' },
  },
];

const outcomes = [
  '3 high-ticket buyers closed in the first launch wave.',
  '5,000+ newsletter subscribers added to the funnel.',
  '[CONFIRM] average engagement on the page — buyers reading deeply, not bouncing.',
  'Premium pricing held — Career Builder closed at $1,497 without discounting.',
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
  fontFamily: 'var(--font-sans)', fontSize: 'var(--type-h4)',
  fontWeight: 'var(--weight-medium)', lineHeight: 'var(--leading-h4)',
  letterSpacing: 'var(--tracking-h4)', color: 'var(--text)',
  margin: '0 0 12px',
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
            boxShadow: 'none',
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
            fontSize: 'var(--type-small)',
            color: 'var(--muted)',
            textAlign: 'center',
            marginTop: '12px',
            lineHeight: 'var(--leading-body)',
            fontStyle: 'italic',
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
            backgroundColor: 'rgba(0,0,0,0.92)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            padding: '40px',
            cursor: 'zoom-out',
            animation: 'pmmca-lightbox-fade 0.18s ease-out',
          }}
        >
          <img
            src={src}
            alt={alt}
            style={{
              maxWidth: '100%', maxHeight: '100%',
              objectFit: 'contain',
              display: 'block',
              boxShadow: '0 24px 64px rgba(0,0,0,0.6)',
              borderRadius: 'var(--radius)',
            }}
          />
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            aria-label="Close zoomed image"
            style={{
              position: 'absolute', top: 24, right: 24,
              width: 40, height: 40, borderRadius: '50%',
              background: 'rgba(255,255,255,0.12)',
              border: '1px solid rgba(255,255,255,0.2)',
              color: '#fff', fontSize: 18,
              cursor: 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}
          >
            ×
          </button>
        </div>
      )}
      <style>{`
        @keyframes pmmca-lightbox-fade {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
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
              PMMCA: A landing page that converts.
            </h1>
            <p style={{
              fontSize: 'var(--type-lead)', lineHeight: 'var(--leading-body)',
              color: 'var(--muted)', margin: '0 0 28px', maxWidth: '720px',
            }}>
              PMMCA's Overview page is the landing page — and it's the engine that converts visitors into buyers. 3 high-ticket buyers closed in the first launch wave. 5,000+ subscribers added to the funnel. Premium pricing held without discounting.
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

        {/* ── Hero screenshot ── */}
        <section style={{ padding: '48px 0 0' }}>
          <div style={sectionInner}>
            <ImageBlock
              src="/pmmca-hero.png"
              alt='PMMCA hero — "Stop reacting. Start creating." with Harvey Lee portrait and lightning bolt.'
              caption="PMMCA Overview — one landing page selling five tiers, designed and shipped without a developer handoff."
            />
          </div>
        </section>

        {/* ── 01 · THE OPPORTUNITY ── */}
        <section style={sectionPad}>
          <div style={sectionInner}>
            <span style={eyebrow}>01 · The opportunity</span>
            <h2 style={h2}>Bundle five offers into one product, sell them on one page.</h2>
            <p style={body}>
              Harvey Lee had the audience, the credibility, and a book. What he didn't have was a way to sell the system. PMMCA bundled five offerings — a $1,497 flagship course, a $997 focused course, a $499/yr coaching and community membership, a Teams program, and founding member perks — into one product. The buyer had to understand all of it quickly enough to commit.
            </p>
            <p style={{ ...body, fontWeight: 'var(--weight-medium)' }}>
              A page that just listed tiers would lose people. A page that buried pricing would lose different people. The Overview needed to do both jobs at once — teach the offering and close the sale.
            </p>
          </div>
        </section>

        {/* ── 02 · RESEARCH ── */}
        <section style={sectionPad}>
          <div style={sectionInner}>
            <span style={eyebrow}>02 · Research</span>
            <h2 style={h2}>How other PMM programs were doing it.</h2>
            <p style={body}>
              Before designing anything, I audited the competitive landscape — Product Marketing Alliance, Reforge, Maven cohorts, and a handful of independent PMM coaches. A pattern emerged fast.
            </p>
            <ul style={{
              listStyle: 'none', padding: 0, margin: '8px 0 24px',
              borderLeft: '2px solid var(--accent)', paddingLeft: '20px',
              maxWidth: '760px',
            }}>
              {researchFindings.map((finding) => (
                <li key={finding} style={{
                  fontSize: 'var(--type-body)', color: 'var(--muted)',
                  lineHeight: 'var(--leading-body)', marginBottom: '12px',
                }}>
                  {finding}
                </li>
              ))}
            </ul>

            <ImageBlock
              src="/pmmca-research-1.png"
              alt="Side-by-side competitive audit of PMM coaching landing pages"
              caption="Competitive landing page audit — scroll order and section structure mapped across the PMM coaching landscape."
            />
            <ImageBlock
              src="/pmmca-research-2.png"
              alt="Overlapping annotated breakdowns of competitor PMM landing pages"
              caption="Per-page annotation work — flagging where competitor pages lead with credentials, bury pricing, or skip segmentation."
            />

            <p style={{ ...body, fontWeight: 'var(--weight-medium)', marginTop: '32px' }}>
              That gave me the brief in reverse. If competitor pages were leaking buyers at each of those points, PMMCA's job was to close every one of those gaps in scroll order, on a single page.
            </p>
          </div>
        </section>

        {/* ── 03 · THE THESIS ── */}
        <section style={sectionPad}>
          <div style={sectionInner}>
            <span style={eyebrow}>03 · The thesis</span>
            <h2 style={h2}>Every section either moves the buyer closer to yes, or eliminates a reason for no.</h2>
            <p style={body}>
              A landing page exists to convert. If a section didn't do one of those two things, it didn't belong on the page.
            </p>
            <p style={body}>
              Most landing pages drift into "let me tell you about us" or "here's our philosophy" — sections that flatter the brand but don't move the buyer. We cut all of that.
            </p>
          </div>
        </section>

        {/* ── 04 · WHAT'S ON THE PAGE, AND WHY ── */}
        <section style={sectionPad}>
          <div style={sectionInner}>
            <span style={eyebrow}>04 · What's on the page, and why</span>
            <h2 style={h2}>A guided tour, top to bottom.</h2>

            <div style={{
              display: 'flex', flexDirection: 'column', gap: '40px',
              marginTop: '32px',
            }}>
              {pageSections.map((s) => (
                <div key={s.label} style={{
                  borderLeft: '2px solid var(--border)',
                  paddingLeft: '24px',
                }}>
                  <h3 style={h3}>
                    {s.label}
                    {s.tagline && (
                      <span style={{
                        color: 'var(--muted)',
                        fontWeight: 'var(--weight-normal)',
                        fontStyle: 'italic',
                      }}>
                        {' '}— {s.tagline}.
                      </span>
                    )}
                  </h3>
                  <p style={{
                    fontSize: 'var(--type-body)', lineHeight: 'var(--leading-body)',
                    color: 'var(--text)', margin: 0, maxWidth: '720px',
                  }}>
                    {s.body}
                  </p>
                  {s.image && (
                    <ImageBlock src={s.image.src} alt={s.image.alt} />
                  )}
                  {s.bodyExtra && (
                    <p style={{
                      fontSize: 'var(--type-body)', lineHeight: 'var(--leading-body)',
                      color: 'var(--text)', margin: '24px 0 0', maxWidth: '720px',
                    }}>
                      {s.bodyExtra}
                    </p>
                  )}
                  {s.screenshot && (
                    <ImagePlaceholder caption={s.screenshot} />
                  )}
                </div>
              ))}
            </div>

            <p style={{
              ...body,
              marginTop: '48px',
              fontWeight: 'var(--weight-medium)',
              fontSize: 'var(--type-lead)',
            }}>
              Every section earns its spot. Nothing flatters the brand. Nothing exists to look complete.
            </p>
          </div>
        </section>

        {/* ── 05 · OUTCOMES ── */}
        <section style={sectionPad}>
          <div style={sectionInner}>
            <span style={eyebrow}>05 · Outcomes</span>
            <h2 style={h2}>What it actually did.</h2>
            <ul style={{
              listStyle: 'none', padding: 0, margin: '8px 0 32px',
              maxWidth: '760px',
            }}>
              {outcomes.map((o) => (
                <li key={o} style={{
                  fontSize: 'var(--type-body)', color: 'var(--text)',
                  lineHeight: 'var(--leading-body)', marginBottom: '12px',
                  paddingLeft: '24px', position: 'relative',
                }}>
                  <span style={{
                    position: 'absolute', left: 0, top: '2px',
                    color: 'var(--accent)', fontFamily: 'var(--font-badge)',
                    fontSize: 'var(--type-small)', fontWeight: 'var(--weight-medium)',
                  }}>
                    ✓
                  </span>
                  {o}
                </li>
              ))}
            </ul>
            <p style={{ ...body, fontWeight: 'var(--weight-medium)' }}>
              One page, no separate funnel. Harvey doesn't need a Pricing page, a Curriculum page, a Testimonials page, or an FAQ page. The Overview is the platform — instrumented with GA4 scroll and CTA tracking, tunable in Framer without a designer.
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
