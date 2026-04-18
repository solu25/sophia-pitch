import { useRef, useState, useEffect } from 'react';
import Nav from '../../components/Nav';
import { everant } from './everant';
import { jenny } from '../../data/jenny';
import LLCaseStudy from '../../components/ll/LLCaseStudy';
import LLHowIWork from '../../components/ll/LLHowIWork';

/* ── Noise overlay SVG (shared) ── */
const NOISE_SVG = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`;

function NoiseOverlay({ light }) {
  return (
    <div aria-hidden="true" style={{
      position: 'absolute', inset: 0, zIndex: 0,
      backgroundImage: NOISE_SVG,
      backgroundRepeat: 'repeat',
      backgroundSize: '200px 200px',
      opacity: light ? 0.25 : 0.35,
      mixBlendMode: light ? 'multiply' : 'soft-light',
      pointerEvents: 'none',
    }} />
  );
}

function useFadeIn(threshold = 0.15) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, visible];
}

function Eyebrow({ children }) {
  return (
    <span style={{
      fontSize: 'var(--type-small)',
      fontFamily: 'var(--font-badge)',
      fontWeight: 'var(--weight-medium)',
      letterSpacing: 'var(--tracking-badge)',
      textTransform: 'uppercase',
      lineHeight: 'var(--leading-h5)',
      display: 'block',
      marginBottom: 'var(--space-24)',
    }}>
      {children}
    </span>
  );
}

function MetricCard({ metric, dark }) {
  return (
    <div style={{
      backgroundColor: dark ? 'rgba(255,255,255,0.08)' : 'var(--glass-bg)',
      border: `1px solid ${dark ? 'var(--dark-border)' : 'var(--glass-stroke)'}`,
      borderRadius: 'var(--radius-card)',
      boxShadow: dark ? 'none' : 'var(--shadow-glass)',
      backdropFilter: dark ? 'none' : 'blur(var(--glass-blur))',
      padding: 'var(--space-24)',
      display: 'flex', flexDirection: 'column', gap: 'var(--space-6)',
    }}>
      <div style={{
        fontFamily: 'var(--font-sans)',
        fontSize: 'var(--type-h2)',
        fontWeight: 'var(--weight-medium)',
        lineHeight: 'var(--leading-h2)',
        letterSpacing: 'var(--tracking-h2)',
        color: dark ? 'var(--dark-text)' : 'var(--text)',
      }}>
        {metric.value}
      </div>
      <div style={{
        fontSize: 'var(--type-body)',
        color: dark ? 'var(--dark-text-muted)' : 'var(--muted)',
        lineHeight: 'var(--leading-body)',
      }}>
        {metric.label}
      </div>
    </div>
  );
}

function CaseStudySection({ section, index }) {
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
        {/* Eyebrow */}
        <Eyebrow>
          <span style={{ color: dark ? 'var(--dark-text-muted)' : 'var(--muted)' }}>
            {String(index + 1).padStart(2, '0')} · {section.tocLabel}
          </span>
        </Eyebrow>

        {/* Requirement */}
        <p style={{
          fontSize: 'var(--type-body)',
          color: dark ? 'var(--dark-text-muted)' : 'var(--muted)',
          lineHeight: 'var(--leading-body)',
          margin: '0 0 var(--space-18)',
          maxWidth: '600px',
        }}>
          {section.requirement}
        </p>

        {/* Title */}
        <h2 style={{
          fontFamily: 'var(--font-sans)',
          fontSize: 'var(--type-h2)',
          fontWeight: 'var(--weight-medium)',
          lineHeight: 'var(--leading-h2)',
          letterSpacing: 'var(--tracking-h2)',
          color: dark ? 'var(--dark-text)' : 'var(--text)',
          margin: '0 0 var(--space-36)',
          maxWidth: '650px',
        }}>
          {section.title}
        </h2>

        {/* Story */}
        <div style={{
          display: 'flex', flexDirection: 'column', gap: 'var(--space-18)',
          maxWidth: '640px',
          margin: '0 0 var(--space-48)',
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

        {/* Metrics */}
        {section.metrics && (
          <div style={{
            display: 'grid', gridTemplateColumns: `repeat(${section.metrics.length}, 1fr)`,
            gap: 'var(--space-12)',
            marginBottom: section.testimonial ? 'var(--space-48)' : 0,
            maxWidth: '480px',
          }}>
            {section.metrics.map((m, i) => (
              <MetricCard key={i} metric={m} dark={dark} />
            ))}
          </div>
        )}

        {/* Testimonial */}
        {section.testimonial && (
          <div style={{
            borderLeft: `3px solid ${dark ? 'var(--accent-strong)' : 'var(--accent)'}`,
            paddingLeft: 'var(--space-24)',
            maxWidth: '540px',
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

export default function EverantPage() {
  const [headerVisible, setHeaderVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setHeaderVisible(true), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <div style={{ backgroundColor: 'var(--bg)', minHeight: '100vh' }}>
      <Nav from="everant" />

      {/* ═══ HERO ═══ */}
      <div style={{
        background: 'linear-gradient(180deg, rgba(139,120,255,0.35) 0%, rgba(139,120,255,0.18) 40%, rgba(139,120,255,0.06) 65%, var(--bg) 90%)',
        position: 'relative',
      }}>
        <NoiseOverlay light />
        <div className="resume-hero-inner" style={{
          maxWidth: '1000px', margin: '0 auto',
          padding: 'var(--space-144) var(--space-48) var(--space-96)',
          position: 'relative', zIndex: 1,
        }}>
          <div style={{
            display: 'flex', flexDirection: 'column', alignItems: 'center',
            gap: 'var(--space-24)',
            opacity: headerVisible ? 1 : 0,
            filter: headerVisible ? 'blur(0px)' : 'blur(12px)',
            transition: 'opacity 0.7s ease, filter 0.7s ease',
          }}>
            {/* Eyebrow */}
            <div style={{
              fontSize: 'var(--type-small)',
              fontFamily: 'var(--font-badge)',
              fontWeight: 'var(--weight-medium)',
              letterSpacing: 'var(--tracking-badge)',
              textTransform: 'uppercase',
              color: 'var(--muted)',
            }}>
              Jenny Lu × {everant.name}
            </div>

            {/* Name */}
            <h1 style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 'var(--type-h1)',
              fontWeight: 'var(--weight-medium)',
              lineHeight: 'var(--leading-h1)',
              letterSpacing: 'var(--tracking-h1)',
              color: 'var(--text)',
              margin: 0,
              textAlign: 'center',
            }}>
              {jenny.name}
            </h1>

            {/* Role */}
            <p style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 'var(--type-h4)',
              fontWeight: 'var(--weight-medium)',
              lineHeight: 'var(--leading-h4)',
              letterSpacing: 'var(--tracking-h4)',
              color: 'var(--text)',
              margin: 0,
              textAlign: 'center',
            }}>
              {everant.role}
            </p>

            {/* One-liner */}
            <p style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 'var(--type-lead)',
              fontWeight: 'var(--weight-medium)',
              lineHeight: 'var(--leading-body)',
              color: 'var(--muted)',
              margin: 0,
              textAlign: 'center',
              maxWidth: '600px',
            }}>
              {everant.oneLiner}
            </p>

            {/* CTA */}
            <div style={{ marginTop: 'var(--space-12)' }}>
              <a
                className="btn-hover"
                href="https://cal.com/jennylu98/30"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  backgroundColor: 'var(--btn-primary-bg)', color: 'var(--btn-primary-fg)',
                  fontSize: 'var(--type-body)', fontWeight: 'var(--weight-medium)',
                  padding: '0 var(--btn-x-padding)', height: 'var(--btn-height)',
                  borderRadius: 'var(--btn-radius)',
                  textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '8px',
                }}
              >
                <img src="/jenny-avatar.jpg" alt="" style={{ width: '22px', height: '22px', borderRadius: '50%', objectFit: 'cover' }} />
                Schedule a call
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ═══ SUMMARY — MATCH ═══ */}
      <section style={{ padding: 'var(--space-96) 0 var(--space-80)' }}>
        <div className="section-pad" style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 var(--space-48)' }}>
          <Eyebrow>
            <span style={{ color: 'var(--muted)', textAlign: 'center', display: 'block' }}>Why me</span>
          </Eyebrow>
          <h2 style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 'var(--type-h2)',
            fontWeight: 'var(--weight-medium)',
            lineHeight: 'var(--leading-h2)',
            letterSpacing: 'var(--tracking-h2)',
            color: 'var(--text)',
            margin: '0 auto var(--space-48)',
            maxWidth: '650px',
            textAlign: 'center',
          }}>
            {everant.summaryHeading}
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-12)' }}>
            {everant.summaryRows.map((row, i) => (
              <div key={i} style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1.4fr',
                gap: 'var(--space-24)',
                backgroundColor: 'var(--glass-bg)',
                border: '1px solid var(--glass-stroke)',
                borderRadius: 'var(--radius-card)',
                padding: 'var(--space-24)',
              }}>
                <div>
                  <span style={{
                    fontSize: 'var(--type-small)',
                    fontFamily: 'var(--font-badge)',
                    fontWeight: 'var(--weight-medium)',
                    letterSpacing: 'var(--tracking-badge)',
                    textTransform: 'uppercase',
                    color: 'var(--accent)',
                    display: 'block',
                    marginBottom: 'var(--space-6)',
                  }}>
                    Your need
                  </span>
                  <span style={{
                    fontSize: 'var(--type-body)',
                    fontWeight: 'var(--weight-medium)',
                    color: 'var(--text)',
                    lineHeight: 'var(--leading-body)',
                  }}>
                    {row.ask}
                  </span>
                </div>
                <div>
                  <span style={{
                    fontSize: 'var(--type-small)',
                    fontFamily: 'var(--font-badge)',
                    fontWeight: 'var(--weight-medium)',
                    letterSpacing: 'var(--tracking-badge)',
                    textTransform: 'uppercase',
                    color: 'var(--accent)',
                    display: 'block',
                    marginBottom: 'var(--space-6)',
                  }}>
                    My proof
                  </span>
                  <span style={{
                    fontSize: 'var(--type-body)',
                    color: 'var(--muted)',
                    lineHeight: 'var(--leading-body)',
                  }}>
                    {row.proof}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ SELECTED PROJECTS ═══ */}
      <section style={{ padding: 'var(--space-96) 0 var(--space-80)', borderTop: '1px solid var(--border)' }}>
        <div className="section-pad" style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 var(--space-48)' }}>
          <Eyebrow>
            <span style={{ color: 'var(--muted)', textAlign: 'center', display: 'block' }}>Selected work</span>
          </Eyebrow>
          <h2 style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 'var(--type-h2)',
            fontWeight: 'var(--weight-medium)',
            lineHeight: 'var(--leading-h2)',
            letterSpacing: 'var(--tracking-h2)',
            color: 'var(--text)',
            margin: '0 auto var(--space-48)',
            maxWidth: '650px',
            textAlign: 'center',
          }}>
            Recent projects
          </h2>
          <div>
            {jenny.selectedProjects
              .filter(p => ['roadrunner', 'arenalabs', 'designhub'].includes(p.id))
              .map((project, i) => (
                <LLCaseStudy key={project.id} project={project} index={i} />
              ))}
          </div>
        </div>
      </section>

      {/* ═══ WHAT I BRING ═══ */}
      <LLHowIWork howIWork={everant.howIWork} />

      {/* ═══ CLOSE CTA ═══ */}
      <div style={{
        background: 'linear-gradient(0deg, rgba(139,120,255,0.35) 0%, rgba(139,120,255,0.18) 40%, rgba(139,120,255,0.06) 65%, var(--bg) 90%)',
        position: 'relative',
      }}>
        <NoiseOverlay light />
        <div className="section-pad" style={{
          maxWidth: '1000px', margin: '0 auto',
          padding: 'var(--space-96) var(--space-48)',
          display: 'flex', flexDirection: 'column', alignItems: 'center',
          gap: 'var(--space-12)',
          position: 'relative', zIndex: 1,
        }}>
          <p style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 'var(--type-h3)',
            fontWeight: 'var(--weight-medium)',
            lineHeight: 'var(--leading-h2)',
            letterSpacing: 'var(--tracking-h3)',
            color: 'var(--text)',
            margin: 0, textAlign: 'center',
            maxWidth: '600px',
          }}>
            {everant.close}
          </p>
          <div className="resume-cta-buttons" style={{ display: 'flex', gap: 'var(--space-18)', alignItems: 'center', marginTop: 'var(--space-24)' }}>
            <a
              className="btn-hover"
              href="https://cal.com/jennylu98/30"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                backgroundColor: 'var(--btn-primary-bg)', color: 'var(--btn-primary-fg)',
                fontSize: 'var(--type-body)', fontWeight: 'var(--weight-medium)',
                padding: '0 var(--btn-x-padding)', height: 'var(--btn-height)',
                borderRadius: 'var(--btn-radius)',
                textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '8px',
              }}
            >
              <img src="/jenny-avatar.jpg" alt="" style={{ width: '22px', height: '22px', borderRadius: '50%', objectFit: 'cover' }} />
              Schedule a call
            </a>
            <a
              className="btn-hover"
              href="/resume?from=everant"
              style={{
                color: 'var(--text)',
                fontSize: 'var(--type-body)', fontWeight: 'var(--weight-medium)',
                textDecoration: 'none',
                border: '1px solid var(--border)',
                padding: '0 var(--btn-x-padding)', height: 'var(--btn-height)',
                borderRadius: 'var(--btn-radius)',
                display: 'inline-flex', alignItems: 'center', gap: '8px',
              }}
            >
              View resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
