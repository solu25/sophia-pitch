import { useRef, useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Nav from '../components/Nav';
import Badge from '../components/Badge';
import { jenny } from '../data/jenny';
import { HeroVariantA, HeroVariantB, HeroVariantC } from './ResumeHeroVariants';

function SectionLabel({ children }) {
  return (
    <div style={{
      fontSize: 'var(--type-small)',
      fontFamily: 'var(--font-badge)',
      fontWeight: 'var(--weight-medium)',
      letterSpacing: 'var(--tracking-badge)',
      textTransform: 'uppercase',
      color: 'var(--text)',
      marginBottom: 'var(--space-24)',
    }}>
      {children}
    </div>
  );
}

function useScrollProgress(ref) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onScroll = () => {
      const rect = el.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const totalHeight = rect.height;
      const scrolled = windowHeight - rect.top;
      const p = Math.max(0, Math.min(1, scrolled / (totalHeight + windowHeight * 0.3)));
      setProgress(p);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, [ref]);

  return progress;
}

function TimelineEntry({ exp, isLast, index }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setTimeout(() => setVisible(true), index * 150);
          obs.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [index]);

  return (
    <div
      ref={ref}
      style={{
        position: 'relative',
        paddingBottom: isLast ? 0 : '56px',
      }}
    >
      {/* Dot */}
      <div style={{
        position: 'absolute', left: '-48px', top: '6px',
        width: '12px', height: '12px', borderRadius: '50%',
        border: '2px solid var(--accent-medium)',
        backgroundColor: visible ? 'var(--accent-strong)' : 'var(--dark-bg)',
        transition: 'background-color 0.5s ease, border-color 0.5s ease',
        borderColor: visible ? 'var(--accent-strong)' : 'var(--accent-faded)',
      }} />

      {/* Content */}
      <div className="resume-timeline-entry" style={{
        display: 'flex', gap: '40px', alignItems: 'flex-start',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(20px)',
        transition: 'opacity 0.6s ease, transform 0.6s ease',
      }}>
        {/* Period */}
        <div style={{ flexShrink: 0, width: '120px' }}>
          <p style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 'var(--type-h2)',
            fontWeight: 'var(--weight-medium)',
            lineHeight: 1,
            letterSpacing: 'var(--tracking-h2)',
            color: 'var(--dark-text)',
            margin: 0,
          }}>
            {exp.period.split('–')[0]}
          </p>
          <p style={{
            fontSize: 'var(--type-small)',
            color: 'var(--dark-text-faint)',
            margin: '8px 0 0',
          }}>
            {exp.period}
          </p>
        </div>

        <div style={{ flex: 1, minWidth: 0 }}>
          <p style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 'var(--type-h5)',
            fontWeight: 'var(--weight-medium)',
            lineHeight: 'var(--leading-h5)',
            color: 'var(--dark-text)',
            margin: '0 0 4px',
          }}>
            {exp.role}
          </p>
          <p style={{
            fontSize: 'var(--type-body)',
            fontWeight: 'var(--weight-medium)',
            lineHeight: 'var(--leading-body)',
            color: 'var(--dark-text-muted)',
            margin: '0 0 12px',
          }}>
            {exp.company} · {exp.location}
          </p>
          {exp.highlights.length === 1 ? (
            <p style={{
              fontSize: 'var(--type-body)',
              lineHeight: 'var(--leading-body)',
              color: 'var(--dark-text-muted)',
              margin: '0 0 12px',
            }}>
              {exp.highlights[0]}
            </p>
          ) : (
            <ul style={{
              margin: '0 0 12px', padding: '0 0 0 20px',
              display: 'flex', flexDirection: 'column', gap: '6px',
              listStyleType: 'disc',
            }}>
              {exp.highlights.map((h, hi) => (
                <li key={hi} style={{
                  fontSize: 'var(--type-body)',
                  lineHeight: 'var(--leading-body)',
                  color: 'var(--dark-text-muted)',
                  paddingLeft: '4px',
                }}>
                  {h}
                </li>
              ))}
            </ul>
          )}
          <div style={{ display: 'flex', gap: 'var(--space-6)', flexWrap: 'wrap' }}>
            {exp.tags.map(tag => (
              <span key={tag} style={{
                fontSize: 'var(--type-small)',
                fontFamily: 'var(--font-badge)',
                fontWeight: 'var(--weight-medium)',
                letterSpacing: 'var(--tracking-badge)',
                textTransform: 'uppercase',
                color: 'var(--dark-text-muted)',
                border: '1px solid var(--dark-border)',
                borderRadius: '100px',
                padding: 'var(--space-3) var(--space-12)',
              }}>
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ResumePage() {
  const [searchParams] = useSearchParams();
  const from = searchParams.get('from');
  const projectsHref = from ? `/${from}` : '/';
  const projectsLabel = from ? `Back to ${from.charAt(0).toUpperCase() + from.slice(1)} pitch →` : 'View projects →';

  const headerRef = useRef(null);
  const timelineRef = useRef(null);
  const [headerVisible, setHeaderVisible] = useState(false);
  const timelineProgress = useScrollProgress(timelineRef);

  useEffect(() => {
    const t = setTimeout(() => setHeaderVisible(true), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <div style={{ backgroundColor: 'var(--bg)', minHeight: '100vh' }}>
      <Nav from={from} />

      {/* === HERO === */}
      <div style={{
        background: 'linear-gradient(180deg, rgba(139,120,255,0.35) 0%, rgba(139,120,255,0.18) 40%, rgba(139,120,255,0.06) 65%, var(--bg) 90%)',
        position: 'relative',
      }}>
        {/* Noise */}
        <div style={{
          position: 'absolute', inset: 0, zIndex: 0,
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '200px 200px',
          opacity: 0.25,
          mixBlendMode: 'multiply',
          pointerEvents: 'none',
        }} />
        <div className="resume-hero-inner" style={{ maxWidth: '1000px', margin: '0 auto', padding: '144px 48px 96px', position: 'relative', zIndex: 1 }}>
          <div
            ref={headerRef}
            style={{
              display: 'flex', flexDirection: 'column', alignItems: 'center',
              gap: '72px',
              transition: 'opacity 0.7s ease, filter 0.7s ease',
              opacity: headerVisible ? 1 : 0,
              filter: headerVisible ? 'blur(0px)' : 'blur(12px)',
            }}
          >
            {/* Centered text block */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '36px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
                <div style={{
                  fontSize: 'var(--type-small)',
                  fontFamily: 'var(--font-badge)',
                  fontWeight: 'var(--weight-medium)',
                  letterSpacing: 'var(--tracking-badge)',
                  textTransform: 'uppercase',
                  color: 'var(--muted)',
                }}>
                  Resume
                </div>
                <h1 style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: 'var(--type-h1)',
                  fontWeight: 'var(--weight-medium)',
                  lineHeight: 1.15,
                  letterSpacing: 'var(--tracking-h1)',
                  color: 'var(--text)',
                  margin: 0,
                  textAlign: 'center',
                  maxWidth: '848px',
                }}>
                  {jenny.name}
                </h1>
              </div>
              <p style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 'var(--type-lead)',
                lineHeight: 1.5,
                color: 'var(--text)',
                margin: 0,
                textAlign: 'center',
                maxWidth: '521px',
              }}>
                Research, design systems, and production code across healthcare, fintech, and consumer.
              </p>
            </div>

            {/* Fun fact cards */}
            <div className="resume-facts-row" style={{ display: 'flex', gap: '12px', position: 'relative' }}>
              {[
                { icon: '🍦', value: 'Ice cream\nshop owner', label: 'Since 2023', rotate: '-2deg' },
                { icon: '👩🏻‍💻', value: 'Designer\nwho codes', label: 'Ships production React', rotate: '2deg' },
              ].map((fact, i) => (
                <div key={i} className="fun-fact-card" style={{
                  width: '303px',
                  padding: '18px',
                  backgroundColor: 'var(--glass-bg)',
                  border: '1px solid var(--glass-stroke)',
                  borderRadius: 'var(--radius-card)',
                  boxShadow: 'var(--shadow-glass)',
                  backdropFilter: 'blur(6px)',
                  display: 'flex', flexDirection: 'column', gap: '48px',
                  justifyContent: 'center',
                  transform: `rotate(${fact.rotate})`,
                  transition: 'transform 0.3s ease',
                  cursor: 'default',
                }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'rotate(0deg) scale(1.04)'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = `rotate(${fact.rotate})`; }}
                >
                  <div style={{ fontSize: '48px', lineHeight: 1 }}>{fact.icon}</div>
                  <div>
                    <div style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: 'var(--type-h2)',
                      fontWeight: 'var(--weight-medium)',
                      lineHeight: 1.15,
                      letterSpacing: 'var(--tracking-h2)',
                      color: 'var(--text)',
                      marginBottom: '6px',
                      whiteSpace: 'pre-line',
                    }}>
                      {fact.value}
                    </div>
                    <div style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: 'var(--type-lead)',
                      fontWeight: 'var(--weight-medium)',
                      lineHeight: 1.5,
                      color: 'var(--muted)',
                    }}>
                      {fact.label}
                    </div>
                  </div>
                </div>
              ))}

              {/* Floating emoji badges */}
              <div className="floating-badge" style={{
                position: 'absolute', right: '-48px', top: '-20px',
                transform: 'rotate(4deg)',
                backgroundColor: 'var(--glass-bg)',
                border: '1px solid var(--glass-stroke)',
                borderRadius: 'var(--glass-radius)',
                boxShadow: 'var(--shadow-glass)',
                backdropFilter: 'blur(var(--glass-blur))',
                WebkitBackdropFilter: 'blur(var(--glass-blur))',
                width: 'var(--icon-circle-size)', height: 'var(--icon-circle-size)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                padding: '6px 12px',
                fontSize: '36px',
                zIndex: 1,
              }}>
                🎨
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Experience Timeline — dark section */}
      <section style={{
        backgroundColor: 'var(--dark-bg)',
        padding: '80px 0',
        overflow: 'hidden',
        position: 'relative',
      }}>
        {/* Noise overlay */}
        <div style={{
          position: 'absolute', inset: 0, zIndex: 0,
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '200px 200px',
          opacity: 0.35,
          mixBlendMode: 'soft-light',
          pointerEvents: 'none',
        }} />
        <div className="resume-section-pad" style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 48px', position: 'relative', zIndex: 1 }}>
          <span style={{
            color: 'var(--dark-text-muted)', fontSize: 'var(--type-small)',
            fontFamily: 'var(--font-badge)',
            fontWeight: 'var(--weight-medium)', letterSpacing: 'var(--tracking-badge)',
            textTransform: 'uppercase', lineHeight: 'var(--leading-h5)',
            display: 'block', marginBottom: 'var(--space-24)',
          }}>
            Experience
          </span>
          <p style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 'var(--type-h2)',
            fontWeight: 'var(--weight-medium)',
            lineHeight: 'var(--leading-h2)',
            letterSpacing: 'var(--tracking-h2)',
            color: 'var(--dark-text)',
            margin: '0 0 48px',
            maxWidth: '650px',
          }}>
            Where the work made an impact.
          </p>

          {/* Vertical Timeline */}
          <div ref={timelineRef} style={{ position: 'relative', paddingLeft: '48px' }}>
            {/* Background line (track) */}
            <div style={{
              position: 'absolute', left: '5px', top: '6px', bottom: '0',
              width: '2px',
              backgroundColor: 'var(--dark-dot-inactive)',
            }} />
            {/* Progress line (fills as you scroll) */}
            <div style={{
              position: 'absolute', left: '5px', top: '6px',
              width: '2px',
              height: `${timelineProgress * 100}%`,
              background: 'linear-gradient(to bottom, var(--accent-strong), var(--accent-faded))',
              transition: 'height 0.1s ease-out',
            }} />

            {jenny.experience.map((exp, i) => (
              <TimelineEntry
                key={exp.id}
                exp={exp}
                index={i}
                isLast={i === jenny.experience.length - 1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Recommendations */}
      <section style={{ padding: '80px 0 0' }}>
      <div className="resume-section-pad" style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 48px' }}>
        <span style={{
          color: 'var(--text)', fontSize: 'var(--type-small)',
          fontFamily: 'var(--font-badge)',
          fontWeight: 'var(--weight-medium)', letterSpacing: 'var(--tracking-badge)',
          textTransform: 'uppercase', lineHeight: 'var(--leading-h5)',
          display: 'block', marginBottom: 'var(--space-24)', textAlign: 'center',
        }}>
          What people say
        </span>
        <div style={{ position: 'relative', marginBottom: '24px', maxWidth: '700px', margin: '0 auto 24px' }}>
          <h2 style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 'var(--type-h1)',
            fontWeight: 'var(--weight-medium)',
            lineHeight: 1.15,
            letterSpacing: 'var(--tracking-h1)',
            color: 'var(--text)',
            margin: 0,
            textAlign: 'center',
          }}>
            People love working with Jenny
          </h2>
        </div>
        <div style={{ marginBottom: '48px' }} />
        <div className="resume-testimonials-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }}>
          {jenny.testimonials.slice(0, 4).map((t, i) => (
            <div key={t.id} style={{
              background: i === 0
                ? 'linear-gradient(180deg, var(--dark-bg) 0%, var(--dark-bg-deep) 100%)'
                : 'var(--glass-bg)',
              backdropFilter: i === 0 ? 'none' : 'blur(var(--glass-blur))',
              WebkitBackdropFilter: i === 0 ? 'none' : 'blur(var(--glass-blur))',
              border: i === 0 ? 'none' : '1px solid var(--glass-stroke)',
              boxShadow: i === 0 ? 'none' : 'var(--shadow-glass)',
              borderRadius: 'var(--radius)',
              padding: 'var(--space-24)',
              display: 'flex', flexDirection: 'column',
              justifyContent: 'space-between',
              gap: 'var(--space-24)',
              position: 'relative',
              overflow: 'hidden',
              minHeight: '220px',
            }}>
              {/* Noise on dark card */}
              {i === 0 && (
                <div style={{
                  position: 'absolute', inset: 0, zIndex: 0,
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
                  backgroundRepeat: 'repeat',
                  backgroundSize: '150px 150px',
                  opacity: 0.35,
                  mixBlendMode: 'soft-light',
                  pointerEvents: 'none',
                }} />
              )}
              <p style={{
                fontFamily: 'var(--font-sans)',
                fontSize: i === 0 ? 'var(--type-h4)' : 'var(--type-body)',
                fontWeight: i === 0 ? 'var(--weight-medium)' : 'var(--weight-normal)',
                lineHeight: i === 0 ? 'var(--leading-h4)' : 'var(--leading-body)',
                letterSpacing: i === 0 ? 'var(--tracking-h4)' : 'var(--tracking-normal)',
                color: i === 0 ? 'var(--dark-text)' : 'var(--text)',
                margin: 0,
                fontStyle: i === 0 ? 'normal' : 'italic',
                position: 'relative', zIndex: 1,
              }}>
                "{t.quote}"
              </p>
              <div style={{ position: 'relative', zIndex: 1 }}>
                <div style={{
                  fontSize: 'var(--type-body)',
                  fontWeight: 'var(--weight-medium)',
                  color: i === 0 ? 'var(--dark-text)' : 'var(--text)',
                }}>{t.name}</div>
                {t.title && <div style={{
                  fontSize: 'var(--type-small)',
                  color: i === 0 ? 'var(--dark-text-muted)' : 'var(--muted)',
                  marginTop: '2px',
                }}>{t.title}</div>}
              </div>
            </div>
          ))}
        </div>
      </div>
      </section>

      {/* Skills & Background */}
      <section style={{ padding: '80px 0 0' }}>
      <div className="resume-section-pad" style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 48px' }}>
        <span style={{
          color: 'var(--text)', fontSize: 'var(--type-small)',
          fontFamily: 'var(--font-badge)',
          fontWeight: 'var(--weight-medium)', letterSpacing: 'var(--tracking-badge)',
          textTransform: 'uppercase', lineHeight: 'var(--leading-h5)',
          display: 'block', marginBottom: 'var(--space-24)', textAlign: 'center',
        }}>
          Education & Skills
        </span>
        <p style={{
          fontFamily: 'var(--font-sans)',
          fontSize: 'var(--type-h2)',
          fontWeight: 'var(--weight-medium)',
          lineHeight: 'var(--leading-h2)',
          letterSpacing: 'var(--tracking-h2)',
          color: 'var(--text)',
          margin: '0 auto 48px',
          maxWidth: '650px',
          textAlign: 'center',
        }}>
          The skills, tools, and background behind the work.
        </p>
        <div className="resume-skills-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', alignItems: 'stretch' }}>

          {/* Design Card */}
          <div style={{
            backgroundColor: 'var(--surface)',
            borderRadius: 'var(--radius)',
            overflow: 'hidden',
            display: 'flex', flexDirection: 'column',
          }}>
            <div style={{ padding: 'var(--space-24)', paddingBottom: 0, display: 'flex', alignItems: 'center', gap: 'var(--space-12)' }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--text)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 20h9" /><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
              </svg>
              <p style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 'var(--type-h4)',
                fontWeight: 'var(--weight-medium)',
                lineHeight: 'var(--leading-h4)',
                letterSpacing: 'var(--tracking-h4)',
                color: 'var(--text)',
                margin: '0',
              }}>
                Design
              </p>
            </div>
            <div style={{ padding: 'var(--space-24) var(--space-24) var(--space-24)', flex: 1, display: 'flex', flexDirection: 'column' }}>
              <p style={{ fontSize: 'var(--type-body)', color: 'var(--muted)', lineHeight: 'var(--leading-body)', margin: '0 0 var(--space-36)' }}>
                End-to-end product design from research through shipped UI. I own the full loop — studies, systems, and production code.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-6)' }}>
                {jenny.skills.design.map(s => (
                  <span key={s} style={{
                    backgroundColor: 'var(--bg)',
                    border: '1px solid var(--border)',
                    borderRadius: 'var(--radius-widget)',
                    padding: 'var(--space-6) var(--space-12)',
                    fontSize: 'var(--type-body)',
                    fontWeight: 'var(--weight-medium)',
                    color: 'var(--text)',
                  }}>
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Tools & Domains Card */}
          <div style={{
            backgroundColor: 'var(--surface)',
            borderRadius: 'var(--radius)',
            overflow: 'hidden',
            display: 'flex', flexDirection: 'column',
          }}>
            <div style={{ padding: 'var(--space-24)', paddingBottom: 0, display: 'flex', alignItems: 'center', gap: 'var(--space-12)' }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--text)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
              </svg>
              <p style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 'var(--type-h4)',
                fontWeight: 'var(--weight-medium)',
                lineHeight: 'var(--leading-h4)',
                letterSpacing: 'var(--tracking-h4)',
                color: 'var(--text)',
                margin: '0',
              }}>
                Tools & Domains
              </p>
            </div>
            <div style={{ padding: 'var(--space-24)', flex: 1, display: 'flex', flexDirection: 'column' }}>
              <p style={{ fontSize: 'var(--type-body)', color: 'var(--muted)', lineHeight: 'var(--leading-body)', margin: '0 0 var(--space-36)' }}>
                The stack and industries I work across — from design tools to production frameworks.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-6)', marginBottom: 'var(--space-36)' }}>
                {jenny.skills.tools.map(s => (
                  <span key={s} style={{
                    backgroundColor: 'var(--bg)',
                    border: '1px solid var(--border)',
                    borderRadius: 'var(--radius-widget)',
                    padding: 'var(--space-6) var(--space-12)',
                    fontSize: 'var(--type-body)',
                    fontWeight: 'var(--weight-medium)',
                    color: 'var(--text)',
                  }}>
                    {s}
                  </span>
                ))}
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-6)' }}>
                {jenny.skills.domains.map((s, i) => (
                  <span key={s} style={{
                    fontSize: 'var(--type-small)',
                    color: 'var(--muted)',
                  }}>
                    {i > 0 ? ` · ${s}` : s}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Background — dark card */}
          <div style={{
            background: 'linear-gradient(180deg, var(--dark-bg) 0%, var(--dark-bg-deep) 100%)',
            borderRadius: 'var(--radius)',
            overflow: 'hidden',
            position: 'relative',
            display: 'flex', flexDirection: 'column',
          }}>
            {/* Noise */}
            <div style={{
              position: 'absolute', inset: 0, zIndex: 0,
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
              backgroundRepeat: 'repeat',
              backgroundSize: '150px 150px',
              opacity: 0.35,
              mixBlendMode: 'soft-light',
              pointerEvents: 'none',
            }} />
            <div style={{ padding: 'var(--space-24)', paddingBottom: 0, position: 'relative', zIndex: 1, display: 'flex', alignItems: 'center', gap: 'var(--space-12)' }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 10v6M2 10l10-5 10 5-10 5z" /><path d="M6 12v5c0 1.1 2.7 3 6 3s6-1.9 6-3v-5" />
              </svg>
              <p style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 'var(--type-h4)',
                fontWeight: 'var(--weight-medium)',
                lineHeight: 'var(--leading-h4)',
                letterSpacing: 'var(--tracking-h4)',
                color: 'var(--dark-text)',
                margin: '0',
              }}>
                Background
              </p>
            </div>
            <div style={{ padding: 'var(--space-24)', position: 'relative', zIndex: 1, flex: 1, display: 'flex', flexDirection: 'column' }}>
              <p style={{ fontSize: 'var(--type-body)', color: 'var(--dark-text-muted)', lineHeight: 'var(--leading-body)', margin: '0 0 var(--space-36)' }}>
                Education and leadership beyond design.
              </p>
              {jenny.education.map((ed, i) => (
                <div key={i} style={{ marginBottom: 'var(--space-24)' }}>
                  <div style={{ fontWeight: 'var(--weight-medium)', fontSize: 'var(--type-lead)', color: 'var(--dark-text)' }}>{ed.school}</div>
                  <div style={{ fontSize: 'var(--type-small)', color: 'var(--dark-text-muted)', marginTop: '4px' }}>{ed.degree}</div>
                </div>
              ))}
              {jenny.leadership && jenny.leadership.map((l, i) => (
                <div key={i} style={{ marginTop: 'var(--space-24)', paddingTop: 'var(--space-24)', borderTop: '1px solid var(--dark-border)' }}>
                  <div style={{ fontWeight: 'var(--weight-medium)', fontSize: 'var(--type-lead)', color: 'var(--dark-text)' }}>{l.role}</div>
                  <div style={{ fontSize: 'var(--type-small)', color: 'var(--dark-text-muted)', marginTop: '4px' }}>{l.company} · {l.period}</div>
                  <p style={{ fontSize: 'var(--type-small)', color: 'var(--dark-text-muted)', marginTop: '12px', lineHeight: 'var(--leading-body)' }}>{l.description}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
      </section>

      {/* Bottom CTA */}
      <div style={{
        background: 'linear-gradient(0deg, rgba(139,120,255,0.35) 0%, rgba(139,120,255,0.18) 40%, rgba(139,120,255,0.06) 65%, var(--bg) 90%)',
        position: 'relative',
        marginTop: '48px',
      }}>
        {/* Noise */}
        <div style={{
          position: 'absolute', inset: 0, zIndex: 0,
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '200px 200px',
          opacity: 0.25,
          mixBlendMode: 'multiply',
          pointerEvents: 'none',
        }} />
      <div style={{
        maxWidth: '1000px', margin: '0 auto',
        padding: '80px 48px',
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
        }}>
          See the work behind the resume.
        </p>
        <p style={{
          fontSize: 'var(--type-body)',
          color: 'var(--muted)',
          margin: '0 0 8px', textAlign: 'center',
        }}>
          Full case studies with research, decisions, and outcomes.
        </p>
        <div className="resume-cta-buttons" style={{ display: 'flex', gap: 'var(--space-18)', alignItems: 'center' }}>
          <a
            className="btn-hover"
            href={projectsHref}
            style={{
              backgroundColor: 'var(--btn-primary-bg)', color: 'var(--btn-primary-fg)',
              fontSize: 'var(--type-body)', fontWeight: 'var(--weight-medium)',
              padding: '0 var(--btn-x-padding)', height: 'var(--btn-height)',
              borderRadius: 'var(--btn-radius)',
              textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '8px',
            }}
          >
            {projectsLabel}
          </a>
          <a
            className="btn-hover"
            href="https://cal.com/jennylu98/30"
            target="_blank"
            rel="noopener noreferrer"
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
            <img src="/jenny-avatar.jpg" alt="" style={{ width: '22px', height: '22px', borderRadius: '50%', objectFit: 'cover' }} />
            Schedule a call
          </a>
        </div>
      </div>
      </div>
    </div>
  );
}
