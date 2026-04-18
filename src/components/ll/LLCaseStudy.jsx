import { useRef, useState, useEffect, useCallback } from 'react';

const toolIcons = {
  'Figma': '/tools/figma.svg',
  'React': '/tools/react.svg',
  'Vite': '/tools/vite.svg',
  'Storybook': '/tools/storybook.svg',
  'Claude Code': '/tools/claude-code.svg',
  'Google Analytics': '/tools/google-analytics.svg',
  'UserTesting': '/tools/usertesting.svg',
  'Qualtrics': '/tools/qualtrics.svg',
  'Pencil.dev': '/tools/pencil.svg',
  'Figma MCP': '/tools/figma-mcp.svg',
  'Whoop API': '/tools/whoop.svg',
  'Maze': '/tools/maze.svg',
  'Dovetail': '/tools/dovetail.svg',
  'Typeform': '/tools/typeform.svg',
  'Miro': '/tools/miro.svg',
};

function ScrollStrip({ children, bg = 'var(--text)' }) {
  const scrollRef = useRef(null);
  const [canScroll, setCanScroll] = useState(false);
  const [atEnd, setAtEnd] = useState(false);

  const checkScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    const hasOverflow = el.scrollWidth > el.clientWidth + 4;
    setCanScroll(hasOverflow);
    setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 4);
  }, []);

  useEffect(() => {
    checkScroll();
    // Recheck after images load
    const timer = setTimeout(checkScroll, 500);
    const timer2 = setTimeout(checkScroll, 1500);
    window.addEventListener('resize', checkScroll);
    // Listen for image loads inside the strip
    const el = scrollRef.current;
    if (el) {
      const imgs = el.querySelectorAll('img');
      imgs.forEach(img => img.addEventListener('load', checkScroll));
    }
    return () => {
      clearTimeout(timer);
      clearTimeout(timer2);
      window.removeEventListener('resize', checkScroll);
    };
  }, [checkScroll]);

  const isDark = bg === 'var(--text)';

  return (
    <div style={{ position: 'relative', borderTop: isDark ? '1px solid rgba(255,255,255,0.06)' : 'none' }}>
      <div
        ref={scrollRef}
        onScroll={checkScroll}
        style={{
          background: isDark
            ? 'linear-gradient(180deg, #272727 0%, #1a1a1a 100%)'
            : bg,
          overflowX: 'auto',
          scrollSnapType: 'x mandatory',
          WebkitOverflowScrolling: 'touch',
          position: 'relative',
        }}
      >
        {isDark && (
          <div style={{
            position: 'absolute', inset: 0, zIndex: 0, pointerEvents: 'none',
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat', backgroundSize: '200px 200px',
            opacity: 0.12, mixBlendMode: 'plus-lighter',
          }} />
        )}
        <div style={{ position: 'relative', zIndex: 1 }}>
          {children}
        </div>
      </div>
      {/* Right fade + scroll hint */}
      {canScroll && !atEnd && (
        <div style={{
          position: 'absolute', right: 0, top: 0, bottom: 0, width: '100px',
          background: `linear-gradient(to right, transparent, ${isDark ? '#1a1a1a' : '#ffffff'})`,
          pointerEvents: 'none',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          zIndex: 2,
        }}>
          <div style={{
            display: 'flex', alignItems: 'center', gap: '4px',
            backgroundColor: 'var(--btn-primary-bg)',
            color: 'var(--btn-primary-fg)',
            borderRadius: '20px',
            padding: '6px 12px',
            fontSize: 'var(--type-small)',
            fontWeight: 'var(--weight-medium)',
          }}>
            Scroll
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </div>
        </div>
      )}
    </div>
  );
}

export default function LLCaseStudy({ project, index }) {
  const { caseStudy } = project;
  const screens = caseStudy.screens || [];
  const hasScreens = screens.length > 0;

  const screensType = caseStudy.screensType || null;
  const isApp          = screensType === 'app';
  const isDashboard    = screensType === 'dashboard';
  const isFlow         = screensType === 'flow';
  const isFull         = screensType === 'full';
  const isBeforeAfter  = screensType === 'before-after';
  const isGallery      = screensType === 'gallery';
  const compareScreens = caseStudy.compareScreens || [];
  const beforeScreen   = caseStudy.beforeScreen || null;

  const cardRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.05 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  /* ── Metrics — plain text row, no boxes ── */
  const metricsBlock = (
    <div className="case-study-metrics" style={{
      display: 'flex',
      gap: '0',
      borderTop: '1px solid var(--border)',
      paddingTop: '24px',
    }}>
      {project.metrics.map((m, i) => (
        <div key={i} style={{
          flex: '1 1 0',
          paddingRight: '24px',
          borderRight: i < project.metrics.length - 1 ? '1px solid var(--border)' : 'none',
          paddingLeft: i > 0 ? '24px' : '0',
        }}>
          <div style={{
            color: 'var(--text)',
            fontSize: 'var(--type-metric)',
            fontWeight: 'var(--weight-black)',
            letterSpacing: 'var(--tracking-snug)',
            lineHeight: 'var(--leading-h1)',
            marginBottom: '4px',
          }}>
            {m.value}
          </div>
          <div style={{ color: 'var(--muted)', fontSize: 'var(--type-label)', fontWeight: 'var(--weight-normal)' }}>
            {m.label}
          </div>
        </div>
      ))}
    </div>
  );

  /* ── Info block — 2 styles only: black title, regular everything else ── */
  const story = caseStudy.story || [];
  const infoBlock = (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>

      {/* Meta row */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
        <span style={{ color: 'var(--muted)', fontSize: 'var(--type-label)', fontWeight: 'var(--weight-normal)' }}>
          {String(index + 1).padStart(2, '0')}
        </span>
        <span style={{ color: 'var(--border)' }}>·</span>
        <span style={{ color: 'var(--muted)', fontSize: 'var(--type-label)', fontWeight: 'var(--weight-normal)' }}>
          {project.company}
        </span>
        <span style={{ color: 'var(--border)' }}>·</span>
        <span style={{ color: 'var(--muted)', fontSize: 'var(--type-label)', fontWeight: 'var(--weight-normal)' }}>
          {project.role}
        </span>
      </div>

      {/* Title — only black weight in the card */}
      <h3 style={{
        fontFamily: 'var(--font-sans)',
        fontSize: 'var(--type-h3)',
        fontWeight: 'var(--weight-black)',
        lineHeight: 'var(--leading-tight)',
        letterSpacing: 'var(--tracking-tight)',
        color: 'var(--text)',
        margin: 0,
      }}>
        {project.title}
      </h3>

      {/* Tool badges */}
      {project.tools && project.tools.length > 0 && (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
          {project.tools.map(tool => (
            <span key={tool} style={{
              display: 'inline-flex', alignItems: 'center', gap: '4px',
              fontSize: '10px',
              fontFamily: 'var(--font-badge)',
              fontWeight: 'var(--weight-medium)',
              letterSpacing: '0.5px',
              textTransform: 'uppercase',
              color: 'var(--muted)',
              backgroundColor: 'var(--bg)',
              border: '1px solid var(--border)',
              borderRadius: '4px',
              padding: '3px 8px',
              lineHeight: 1,
            }}>
              {toolIcons[tool] && (
                <img src={toolIcons[tool]} alt="" style={{ width: '12px', height: '12px', opacity: 0.7 }} />
              )}
              {tool}
            </span>
          ))}
        </div>
      )}

      {/* Headline + story — all same style, regular weight */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {project.headline && (
          <p style={{
            color: 'var(--text)', fontSize: 'var(--type-body)',
            fontWeight: 'var(--weight-normal)', lineHeight: 'var(--leading-body)', margin: 0,
          }}>
            {project.headline}
          </p>
        )}
        {story.map((para, i) => (
          <p key={i} style={{
            color: 'var(--muted)', fontSize: 'var(--type-body)',
            fontWeight: 'var(--weight-normal)', lineHeight: 'var(--leading-body)', margin: 0,
          }}>
            {para}
          </p>
        ))}
      </div>


    </div>
  );

  /* ── Tools ── */
  const toolsBlock = null;

  /* ── Features block ── */
  const featureCount = caseStudy.features?.length || 0;
  const featureCols = featureCount <= 4 ? 2 : 3;
  const featuresBlock = caseStudy.features && featureCount > 0 ? (
    <div>
      <span style={{
        color: 'var(--accent)', fontSize: 'var(--type-label)',
        fontFamily: 'var(--font-badge)',
        fontWeight: 'var(--weight-medium)', letterSpacing: 'var(--tracking-badge)',
        display: 'block', marginBottom: '16px',
      }}>
        {caseStudy.featuresLabel || 'WHAT\'S INSIDE'}
      </span>
      <div className="features-grid" style={{
        display: 'grid', gridTemplateColumns: `repeat(${featureCols}, 1fr)`, gap: '12px',
        alignItems: 'stretch',
      }}>
        {caseStudy.features.map((f, i) => (
          <div key={i} style={{
            backgroundColor: 'var(--bg)', borderRadius: 'var(--radius)',
            padding: '16px',
            display: 'flex', gap: '12px', alignItems: 'flex-start',
          }}>
            <i className={f.icon} style={{ fontSize: '16px', color: 'var(--accent)', marginTop: '2px', flexShrink: 0 }} />
            <div>
              <div style={{ fontSize: 'var(--type-body)', fontWeight: 'var(--weight-medium)', color: 'var(--text)', marginBottom: '2px' }}>
                {f.label}
              </div>
              <div style={{ fontSize: 'var(--type-small)', color: 'var(--muted)', lineHeight: 'var(--leading-body)' }}>
                {f.detail}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  ) : null;

  /* ── Content row — info stacked, features, metrics, tools ── */
  const contentRow = (
    <div style={{ padding: '40px', display: 'flex', flexDirection: 'column', gap: '32px' }}>
      {infoBlock}
      {featuresBlock}
      {metricsBlock}
      {toolsBlock}
    </div>
  );

  return (
    <article style={{ marginBottom: '48px' }}>
      <div
        ref={cardRef}
        style={{
          backgroundColor: 'var(--surface)',
          borderRadius: 'var(--radius)',
          boxShadow: 'var(--shadow-sm)',
          overflow: 'hidden',
          transition: 'opacity 0.7s ease, filter 0.7s ease',
          opacity: visible ? 1 : 0,
          filter: visible ? 'blur(0px)' : 'blur(12px)',
        }}
      >

        {/* ── Video ── */}
        {project.video && (
          <div style={{ borderBottom: '1px solid var(--border)' }}>
            <video
              src={project.video}
              autoPlay
              muted
              loop
              playsInline
              style={{ width: '100%', display: 'block' }}
            />
          </div>
        )}

        {/* ── Hero image (scrollable for detailed images like journey maps) ── */}
        {project.heroImage && (
          <ScrollStrip bg="var(--text)">
            <div style={{ padding: '40px' }}>
              <img src={project.heroImage} alt={project.title} loading="lazy"
                style={{ minWidth: '1200px', maxWidth: '2000px', width: '200%', display: 'block', borderRadius: '8px' }} />
            </div>
          </ScrollStrip>
        )}

        {/* ── App screenshots: horizontal scroll strip ── */}
        {isApp && hasScreens && (
          <ScrollStrip>
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'flex-start',
              gap: '16px',
              padding: '40px',
              minWidth: 'max-content',
            }}>
              {screens.map((screen, i) => (
                <div key={i} style={{
                  width: '240px',
                  flexShrink: 0,
                  scrollSnapAlign: 'start',
                  display: 'flex',
                  flexDirection: 'column',
                }}>
                  <div style={{ height: '450px', overflow: 'hidden', borderRadius: '12px' }}>
                    <img src={screen.src} alt={screen.alt || project.title} loading="lazy"
                      style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top', display: 'block' }} />
                  </div>
                  {screen.caption && (
                    <p style={{
                      color: 'rgba(245,244,242,0.65)', fontSize: 'var(--type-small)',
                      lineHeight: 'var(--leading-h5)', padding: '8px 4px 0', margin: 0, textAlign: 'center',
                    }}>
                      {screen.caption}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </ScrollStrip>
        )}

        {/* ── Dashboard: wide web frame ── */}
        {isDashboard && (
          <div style={{ borderTop: '1px solid var(--border)', backgroundColor: 'var(--bg)' }}>
            {hasScreens ? (
              <img src={screens[0].src} alt={screens[0].alt || project.title} loading="lazy"
                style={{ width: '100%', display: 'block', objectFit: 'cover' }} />
            ) : (
              <div style={{ height: '280px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ color: 'var(--border)', fontSize: 'var(--type-caption)', letterSpacing: 'var(--tracking-label)' }}>
                  Dashboard screenshot
                </span>
              </div>
            )}
          </div>
        )}

        {/* ── Full width: hero image ── */}
        {isFull && (
          <div style={{ backgroundColor: 'var(--bg)', borderTop: '1px solid var(--border)', aspectRatio: '16/7', overflow: 'hidden' }}>
            {hasScreens ? (
              <img src={screens[0].src} alt={screens[0].alt || project.title} loading="lazy"
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
            ) : (
              <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ color: 'var(--border)', fontSize: 'var(--type-caption)', letterSpacing: 'var(--tracking-label)' }}>
                  Case study visuals
                </span>
              </div>
            )}
          </div>
        )}

        {/* ── Before → After: before screen + arrow + after screens ── */}
        {isBeforeAfter && hasScreens && beforeScreen && (
          <ScrollStrip>
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'flex-start',
              gap: '0',
              padding: '40px',
              minWidth: 'max-content',
            }}>
              {/* Before screen */}
              <div style={{ width: '240px', flexShrink: 0, display: 'flex', flexDirection: 'column' }}>
                <div style={{ height: '450px', overflow: 'hidden', borderRadius: '12px' }}>
                  <img src={beforeScreen.src} alt={beforeScreen.alt || 'Before'} loading="lazy"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top', display: 'block' }} />
                </div>
                {beforeScreen.caption && (
                  <p style={{
                    color: 'rgba(245,244,242,0.65)', fontSize: 'var(--type-small)',
                    lineHeight: 'var(--leading-h5)', padding: '8px 4px 0', margin: 0, textAlign: 'center',
                  }}>
                    {beforeScreen.caption}
                  </p>
                )}
              </div>

              {/* Arrow */}
              <div style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                height: '450px', padding: '0 24px', flexShrink: 0,
              }}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="rgba(245,244,242,0.4)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </div>

              {/* After screens */}
              {screens.map((screen, i) => (
                <div key={i} style={{
                  width: '240px', flexShrink: 0,
                  marginLeft: i > 0 ? '16px' : '0',
                  display: 'flex', flexDirection: 'column',
                }}>
                  <div style={{ height: '450px', overflow: 'hidden', borderRadius: '12px' }}>
                    <img src={screen.src} alt={screen.alt || project.title} loading="lazy"
                      style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top', display: 'block' }} />
                  </div>
                  {screen.caption && (
                    <p style={{
                      color: 'rgba(245,244,242,0.65)', fontSize: 'var(--type-small)',
                      lineHeight: 'var(--leading-h5)', padding: '8px 4px 0', margin: 0, textAlign: 'center',
                    }}>
                      {screen.caption}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </ScrollStrip>
        )}

        {/* ── Gallery: horizontal scroll for wide screenshots ── */}
        {isGallery && hasScreens && (
          <ScrollStrip>
            <div style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: '16px',
              padding: '40px',
              minWidth: 'max-content',
            }}>
              {screens.map((screen, i) => (
                <div key={i} style={{
                  width: '500px', flexShrink: 0,
                  display: 'flex', flexDirection: 'column',
                }}>
                  <div style={{ overflow: 'hidden', borderRadius: '8px', border: '1px solid var(--border)' }}>
                    <img src={screen.src} alt={screen.alt || project.title} loading="lazy"
                      style={{ width: '100%', display: 'block' }} />
                  </div>
                  {screen.caption && (
                    <p style={{
                      color: 'var(--muted)', fontSize: 'var(--type-caption)',
                      lineHeight: 'var(--leading-body)', padding: '8px 4px 0', margin: 0, textAlign: 'center',
                    }}>
                      {screen.caption}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </ScrollStrip>
        )}

        {/* ── Compare: full-width scrollable images (above content) ── */}
        {compareScreens.length > 0 && (
          <ScrollStrip bg="var(--text)">
            <div style={{
              display: 'flex', gap: '16px', padding: '40px',
              minWidth: 'max-content',
            }}>
              {compareScreens.map((screen, i) => (
                <div key={i} style={{ width: '700px', flexShrink: 0 }}>
                  <div style={{ overflow: 'hidden', borderRadius: '12px', height: '450px' }}>
                    <img src={screen.src} alt={screen.alt || ''} loading="lazy"
                      style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top', display: 'block' }} />
                  </div>
                  {screen.caption && (
                    <p style={{
                      color: 'rgba(245,244,242,0.65)', fontSize: 'var(--type-small)',
                      lineHeight: 'var(--leading-h5)', padding: '8px 4px 0', margin: 0, textAlign: 'center',
                    }}>
                      {screen.caption}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </ScrollStrip>
        )}

        {/* ── Content ── */}
        {contentRow}


        {/* ── Flow: vertical sequence (below content) ── */}
        {isFlow && (
          <div style={{ padding: '40px', borderTop: '1px solid var(--border)' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              {screens.map((screen, i) => (
                <div key={i}>
                  {screen.caption && (
                    <p style={{ color: 'var(--muted)', fontSize: 'var(--type-caption)', lineHeight: 'var(--leading-body)', margin: '0 0 8px', textAlign: 'center' }}>
                      {screen.caption}
                    </p>
                  )}
                  <div style={{ border: '1px solid var(--border)', borderRadius: '10px', overflow: 'hidden', backgroundColor: 'var(--bg)' }}>
                    <img src={screen.src} alt={screen.alt || ''} loading="lazy"
                      style={{ width: '100%', display: 'block' }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </article>
  );
}
