import { useRef, useState, useEffect } from 'react';

const processSteps = [
  { icon: '/tools/figma.svg', label: 'Figma', detail: 'Design system source of truth' },
  { icon: 'fa-light fa-link', label: 'Figma MCP', detail: 'Extract tokens as structured data', isFA: true },
  { icon: '/tools/pencil.svg', label: 'Pencil.dev', detail: 'Sketch layouts + talk to Claude' },
  { icon: 'fa-light fa-code', label: 'Claude Code', detail: 'Generate production React', isFA: true },
  { icon: '/tools/react.svg', label: 'React App', detail: 'Ship from one URL' },
];

const shifts = [
  { num: '01', label: 'More time thinking, less time pushing pixels', detail: 'I iterate on solutions, not fidelity. The system handles the polish — I focus on whether I\'m solving the right problem.' },
  { num: '02', label: 'Research synthesis in hours, not days', detail: 'Survey data, interview transcripts, analytics — synthesized in Claude. More time finding insights, less time formatting.' },
  { num: '03', label: 'Stakeholders react to real products', detail: 'Functional prototypes, not static screens. Feedback shifts from "move this left" to "does this actually work?"' },
  { num: '04', label: 'Engineers copy code, not interpret specs', detail: 'Tokens go from Figma MCP to production. The conversation shifts to "does this interaction solve the problem."' },
  { num: '05', label: 'Holistic decisions from one source of truth', detail: 'Research, prototype, design system, usability issues — all in one place. I see patterns I\'d miss across 4 separate tools.' },
];

export default function AIProjects() {
  const headerRef = useRef(null);
  const contentRef = useRef(null);
  const [headerVisible, setHeaderVisible] = useState(false);
  const [contentVisible, setContentVisible] = useState(false);

  useEffect(() => {
    const makeObserver = (ref, setter) => {
      const el = ref.current;
      if (!el) return () => {};
      const obs = new IntersectionObserver(
        ([e]) => { if (e.isIntersecting) { setter(true); obs.disconnect(); } },
        { threshold: 0.08 }
      );
      obs.observe(el);
      return () => obs.disconnect();
    };
    const c1 = makeObserver(headerRef, setHeaderVisible);
    const c2 = makeObserver(contentRef, setContentVisible);
    return () => { c1(); c2(); };
  }, []);

  return (
    <section style={{
      padding: '100px 0',
      position: 'relative',
      background: 'linear-gradient(180deg, var(--bg) 0%, rgba(139,120,255,0.06) 50%, var(--bg) 100%)',
    }}>
      <div className="section-pad" style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 48px' }}>

        {/* Header */}
        <div
          ref={headerRef}
          style={{
            marginBottom: '48px',
            textAlign: 'center',
            transition: 'opacity 0.7s ease, filter 0.7s ease',
            opacity: headerVisible ? 1 : 0,
            filter: headerVisible ? 'blur(0px)' : 'blur(12px)',
          }}
        >
          <span style={{
            color: 'var(--text)', fontSize: 'var(--type-small)',
            fontFamily: 'var(--font-badge)',
            fontWeight: 'var(--weight-medium)', letterSpacing: 'var(--tracking-badge)',
            textTransform: 'uppercase', lineHeight: 'var(--leading-h5)',
            marginBottom: '24px', display: 'block',
          }}>
            AI-first design process
          </span>
          <h2 style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 'var(--type-h2)',
            fontWeight: 'var(--weight-medium)',
            lineHeight: 'var(--leading-h2)',
            letterSpacing: 'var(--tracking-h2)',
            color: 'var(--text)',
            margin: '0 auto',
            maxWidth: '650px',
          }}>
            AI changed how I think, not just how fast I move
          </h2>
        </div>

        {/* Content */}
        <div
          ref={contentRef}
          style={{
            display: 'flex', flexDirection: 'column', gap: '0',
            transition: 'opacity 0.7s ease 0.1s, filter 0.7s ease 0.1s',
            opacity: contentVisible ? 1 : 0,
            filter: contentVisible ? 'blur(0px)' : 'blur(12px)',
          }}
        >
          <div style={{
            backgroundColor: 'var(--glass-bg)',
            backdropFilter: 'blur(var(--glass-blur))',
            WebkitBackdropFilter: 'blur(var(--glass-blur))',
            border: '1px solid var(--glass-stroke)',
            borderRadius: 'var(--radius)',
            boxShadow: 'var(--shadow-glass)',
            overflow: 'hidden',
          }}>

            {/* ── THE WORKFLOW (visual process map) ── */}
            <div style={{
              background: 'linear-gradient(180deg, #272727 0%, #1a1a1a 100%)',
              padding: '40px',
              position: 'relative',
            }}>
              <div style={{
                position: 'absolute', inset: 0, zIndex: 0, pointerEvents: 'none',
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
                backgroundRepeat: 'repeat', backgroundSize: '200px 200px',
                opacity: 0.12, mixBlendMode: 'plus-lighter',
              }} />
              <div style={{ position: 'relative', zIndex: 1 }}>
                <span style={{
                  color: 'var(--dark-text-muted)', fontSize: 'var(--type-label)',
                  fontFamily: 'var(--font-badge)',
                  fontWeight: 'var(--weight-medium)', letterSpacing: 'var(--tracking-badge)',
                  display: 'block', marginBottom: '24px',
                }}>
                  THE WORKFLOW
                </span>
                <div className="ai-workflow-steps" style={{
                  display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between',
                  gap: '8px',
                }}>
                  {processSteps.map((step, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', flex: '1 1 0', minWidth: '100px' }}>
                      <div style={{
                        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px',
                        flex: 1,
                      }}>
                        <div style={{
                          background: 'linear-gradient(180deg, #a89fef 0%, #cfc9f5 65%, #eae8fb 100%)',
                          borderRadius: 'var(--radius)', padding: '4px',
                          width: '44px', height: '44px',
                        }}>
                          <div style={{
                            background: 'rgba(255,255,255,0.85)',
                            borderRadius: '8px', width: '100%', height: '100%',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                          }}>
                            {step.isFA
                              ? <i className={step.icon} style={{ fontSize: '18px', color: '#181818' }} />
                              : <img src={step.icon} alt="" style={{ width: '20px', height: '20px' }} />
                            }
                          </div>
                        </div>
                        <span style={{
                          fontSize: 'var(--type-small)', fontWeight: 'var(--weight-medium)',
                          color: 'var(--dark-text)', textAlign: 'center',
                        }}>
                          {step.label}
                        </span>
                        <span style={{
                          fontSize: '10px', color: 'var(--dark-text-muted)',
                          textAlign: 'center', lineHeight: '1.3',
                        }}>
                          {step.detail}
                        </span>
                      </div>
                      {i < processSteps.length - 1 && (
                        <span style={{
                          color: 'var(--dark-text-muted)', fontSize: '14px',
                          flexShrink: 0, marginBottom: '32px',
                        }}>→</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* ── THE SHIFT ── */}
            <div style={{ padding: '40px' }}>
              <span style={{
                color: 'var(--accent)', fontSize: 'var(--type-label)',
                fontFamily: 'var(--font-badge)',
                fontWeight: 'var(--weight-medium)', letterSpacing: 'var(--tracking-badge)',
                display: 'block', marginBottom: '16px',
              }}>
                WHAT ACTUALLY CHANGES
              </span>
              <p style={{
                color: 'var(--text)', fontSize: 'var(--type-body)',
                lineHeight: 'var(--leading-body)', margin: '0 0 24px', maxWidth: '640px',
                fontWeight: 'var(--weight-medium)',
              }}>
                Starting in Claude changed how I think. Less time formatting, more time finding insights. Less time on fidelity, more time on whether I'm solving the right problem.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                {shifts.map((step, i) => (
                  <div key={i} style={{
                    display: 'flex', gap: '20px', alignItems: 'flex-start',
                    padding: '20px 0',
                    borderBottom: i < shifts.length - 1 ? '1px solid var(--border)' : 'none',
                  }}>
                    <span style={{
                      color: 'var(--accent)', fontSize: 'var(--type-label)',
                      fontFamily: 'var(--font-badge)',
                      fontWeight: 'var(--weight-medium)', letterSpacing: 'var(--tracking-badge)',
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
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
