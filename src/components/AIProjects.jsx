import { useRef, useState, useEffect } from 'react';

const processSteps = [
  { icon: 'fa-light fa-magnifying-glass-chart', label: 'Research', detail: 'Perplexity + NotebookLM', isFA: true },
  { icon: 'fa-light fa-lightbulb', label: 'Brainstorm', detail: 'Gemini + ChatGPT', isFA: true },
  { icon: 'fa-light fa-pencil', label: 'Sketch', detail: 'Pen + paper', isFA: true },
  { icon: 'fa-light fa-code', label: 'Vibe code', detail: 'Live prototype', isFA: true },
  { icon: 'fa-light fa-rocket', label: 'Ship', detail: 'GitHub + Vercel', isFA: true },
];

const shifts = [
  { num: '01', icon: 'fa-light fa-magnifying-glass-chart', label: 'Research & aggregation', detail: 'I drop initial product ideas, competitor data, and user requirements into Perplexity and NotebookLM. I use AI to instantly sort through the noise and isolate the exact information that matters most.' },
  { num: '02', icon: 'fa-light fa-lightbulb', label: 'Brainstorming the core logic', detail: 'I talk through that raw research with Gemini and ChatGPT to ruthlessly cut out product bloat. We bounce ideas back and forth to find the absolute sharpest, highest-leverage user loop, turning scattered data into a tight feature plan.' },
  { num: '03', icon: 'fa-light fa-pencil', label: 'Paper sketching', detail: 'Once the logic makes sense, I get away from the screen. I use a notepad and pencil to rapidly map out the physical wireframes, layouts, and navigation paths so we can align on the core interface structure instantly.' },
  { num: '04', icon: 'fa-light fa-code', label: 'Live vibe coding', detail: 'I skip traditional, static design tools and jump straight into the editor. Using AI-native development workflows, I rapidly translate our paper layouts into a living, clickable browser prototype so we can feel the interactions in real time.' },
  { num: '05', icon: 'fa-light fa-rocket', label: 'Tailwind polish & deployment', detail: 'Once the layout functionality is locked, I use Claude to clean up the frontend architecture—refining the Tailwind styles, perfecting the padding, and fixing dark mode. Then I push the clean code straight to GitHub and deploy it live on Vercel.' },
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
            AI-native design process
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
            An AI-native design process, built for venture speed.
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
                MY WORKFLOW
              </span>
              <p style={{
                color: 'var(--text)', fontSize: 'var(--type-body)',
                lineHeight: 'var(--leading-body)', margin: '0 0 24px',
                fontWeight: 'var(--weight-medium)',
              }}>
                I don't follow the slow, traditional design agency pipeline. Instead, I use an AI-native design thinking process built for venture speed. By leveraging AI to automate the heavy lifting of research, logic mapping, and layout generation, I can compress weeks of static prototyping into hours of real, functional code.
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
                        color: 'var(--text)', display: 'flex', alignItems: 'center', gap: '10px',
                        marginBottom: '4px',
                      }}>
                        <i className={step.icon} style={{ fontSize: '16px', color: 'var(--accent)', width: '20px', textAlign: 'center' }} />
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
