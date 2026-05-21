import { Link } from 'react-router-dom';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

const stack = ['Figma bypass', 'Next.js', 'Supabase', 'Claude Code', 'Vercel'];

const footprint = [
  { value: '0 → Alpha', label: 'Scaled from a blank script to a live production alpha in days.' },
  { value: '3-step onboarding', label: 'A rapid time-to-value flow that takes under two minutes to initialize.' },
  { value: 'Radical subtraction', label: 'Intentionally shelved 3 major enterprise features (Projects, Settings, Connect) to enforce extreme product focus.' },
  { value: 'Live deployment', label: 'Shifted straight from paper to browser code — currently live at zanshin-seven.vercel.app.' },
];

const dataElements = [
  { num: '01', label: 'One weekly goal', detail: 'What is this week for?' },
  { num: '02', label: 'One daily "thing"', detail: 'The single most important task today.' },
  { num: '03', label: 'Bonuses', detail: "Anything else you'll get to (strictly optional)." },
  { num: '04', label: 'Ships', detail: 'What you actually finished and delivered.' },
];

const iterationQuestions = [
  'Does the layout center on what is planned or what has already been shipped?',
  'Is the day rail vertical or horizontal? Per-day or per-week?',
  'Where does the macro-goal live — as a banner, a card, or a corner anchor?',
];

const cuts = [
  {
    label: 'Archived: Connect Tools',
    detail: 'Onboarding originally had 4 steps, including integrating Slack, Linear, and GitHub. In testing, this step created immediate user drop-off. I archived it to prioritize core product value over premature integration bloat.',
  },
  {
    label: 'Removed: the Settings gear',
    detail: 'A settings icon sat in the sidebar for a week doing nothing. I cut it. For a tiny team, profile management is an afterthought and admin is a quick conversation. Fake interface controls train users to distrust an application.',
  },
  {
    label: 'Shelved: Project sub-views',
    detail: "I mapped out eight card variants and multi-state grouping layouts for Projects. Then I intentionally shelved it. A tiny team doesn't need cross-project organization — they need absolute alignment on the single macro-milestone of the week.",
  },
];

const craftDetails = [
  {
    label: 'Day-list typography',
    detail: 'Eliminated generic checkbox inputs. Active items use an em dash prefix; completed items use a coral check combined with a Unicode stroke (U+0336) for strikethrough. Lowers visual noise and makes the timeline instantly scannable.',
  },
  {
    label: 'Inline day rails',
    detail: 'Tapping a day expands the row inline with a mini input — it never forces a modal overlay. The active "today" layout stays completely clean.',
  },
  {
    label: 'Chromeless goal banners',
    detail: 'The weekly goal banner is editable inline with absolutely no layout chrome at rest. Hovering reveals an underline, and clicking opens a seamless, buttonless state change that saves automatically on click-out.',
  },
];

const impact = [
  {
    label: 'The ritual stays alive',
    detail: 'We have sustained our daily standup rhythm for weeks — longer than any venture-backed enterprise software ever stuck.',
  },
  {
    label: 'The goal drives the output',
    detail: 'Both founders check the interface every morning. The visual layout explicitly reframes "what am I doing today" into "what does today owe to our weekly goal."',
  },
  {
    label: 'The cost of the cuts',
    detail: 'Every deleted mockup (Settings, Projects, Connect) was a real design effort. Logging those decisions as intentional product lessons taught me how to ruthlessly prioritize velocity over feature creep.',
  },
];

const roadmap = [
  {
    label: 'Production auth',
    detail: 'Transitioning from our local development passthrough to a secure multi-tenant production authentication gate.',
  },
  {
    label: 'Stress-testing the loop',
    detail: 'Onboarding an initial test cohort of 3 small internal teams to evaluate real-time data sync latency and whether the weekly check-in flow requires its own standalone layout surface.',
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

function NumberedList({ items }) {
  return (
    <div style={{
      display: 'flex', flexDirection: 'column', gap: '0',
      borderTop: '1px solid var(--border)', marginTop: '24px',
    }}>
      {items.map((step, i) => (
        <div key={step.num || step.label} style={{
          display: 'flex', gap: '20px', alignItems: 'flex-start',
          padding: '20px 0',
          borderBottom: i < items.length - 1 ? '1px solid var(--border)' : 'none',
        }}>
          {step.num && (
            <span style={{
              color: 'var(--accent)', fontSize: 'var(--type-small)',
              fontFamily: 'var(--font-badge)', fontWeight: 'var(--weight-medium)',
              letterSpacing: 'var(--tracking-badge)',
              flexShrink: 0, width: '24px', paddingTop: '2px',
            }}>
              {step.num}
            </span>
          )}
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
  );
}

export default function ZanshinPage() {
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
            <span style={{ ...eyebrow, color: 'var(--accent)' }}>Case study · Zanshin</span>
            <h1 style={{
              fontFamily: 'var(--font-sans)', fontSize: 'var(--type-h1)',
              fontWeight: 'var(--weight-medium)', lineHeight: 'var(--leading-h1)',
              letterSpacing: 'var(--tracking-h1)', color: 'var(--text)',
              margin: '0 0 20px', maxWidth: '820px',
            }}>
              Zanshin — Designing async standup for a team of three.
            </h1>
            <p style={{
              fontSize: 'var(--type-lead)', lineHeight: 'var(--leading-body)',
              color: 'var(--muted)', margin: '0 0 28px', maxWidth: '720px',
            }}>
              A case study in radical subtraction. How I bypassed Figma to conceptualize, iterate, and vibe-code a zero-bloat team execution engine.
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

        {/* ── 01 · EXECUTIVE SUMMARY ── */}
        <section style={sectionPad}>
          <div style={sectionInner}>
            <span style={eyebrow}>01 · Executive summary</span>
            <h2 style={h2}>A high-level overview for fast-moving founders.</h2>

            <div style={{
              display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px',
              marginBottom: '40px',
            }} className="zanshin-two-col">
              <div style={{
                backgroundColor: 'var(--surface)', borderRadius: 'var(--radius)',
                padding: '28px', border: '1px solid var(--border)',
              }}>
                <span style={{ ...eyebrow, color: 'var(--text)', marginBottom: '12px' }}>The problem</span>
                <p style={{ color: 'var(--text)', fontSize: 'var(--type-body)', lineHeight: 'var(--leading-body)', margin: 0 }}>
                  Modern team tools (Geekbot, Range, Standuply) are engineered for enterprise bureaucracy. They require configurations for OKRs, projects, and multi-layered dashboards. They are fundamentally wrong for a close-knit team of three.
                </p>
              </div>
              <div style={{
                backgroundColor: 'var(--surface)', borderRadius: 'var(--radius)',
                padding: '28px', border: '1px solid var(--border)',
              }}>
                <span style={{ ...eyebrow, color: 'var(--accent)', marginBottom: '12px' }}>The solution</span>
                <p style={{ color: 'var(--text)', fontSize: 'var(--type-body)', lineHeight: 'var(--leading-body)', margin: 0 }}>
                  I vibe-coded Zanshin — an opinionated, single-screen async standup application. By stripping the genre down to a flat daily timeline and an automatic weekly compass anchor, we replaced endless Slack link-dumps with a visual rhythm of focus and shipping.
                </p>
              </div>
            </div>

            <span style={{ ...eyebrow, color: 'var(--text)', marginBottom: '12px' }}>The engineering & scoping footprint</span>
            <div style={{
              display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px',
            }} className="zanshin-footprint-grid">
              {footprint.map((f) => (
                <div key={f.value} style={{
                  backgroundColor: 'var(--surface)', borderRadius: 'var(--radius)',
                  padding: '24px', border: '1px solid var(--border)',
                }}>
                  <div style={{
                    fontFamily: 'var(--font-sans)', fontSize: 'var(--type-h4)',
                    fontWeight: 'var(--weight-medium)', lineHeight: 'var(--leading-h2)',
                    letterSpacing: 'var(--tracking-h4)', color: 'var(--text)',
                    marginBottom: '8px',
                  }}>
                    {f.value}
                  </div>
                  <div style={{
                    fontSize: 'var(--type-body)', color: 'var(--muted)',
                    lineHeight: 'var(--leading-body)',
                  }}>
                    {f.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 02 · PRODUCT INSIGHT ── */}
        <section style={sectionPad}>
          <div style={sectionInner}>
            <span style={eyebrow}>02 · The product insight</span>
            <h2 style={h2}>Sizing for velocity.</h2>
            <p style={body}>
              Async standup doesn't exist to satisfy middle management. It exists to make the rhythm of work visible to a small group of people who already trust each other. The ritual matters; the bureaucracy does not.
            </p>
            <p style={body}>
              Before building, our internal standup was a five-message Slack thread that died by Wednesday. The friction wasn't writing the updates — it was that no tool felt sized for us. Slack offered no structure or memory, while enterprise software felt like updating a database matrix.
            </p>
            <p style={{ ...body, fontWeight: 'var(--weight-medium)' }}>
              I used Perplexity and ChatGPT to analyze the market constraints and stripped the entire product footprint down to four specific data elements.
            </p>
            <NumberedList items={dataElements} />
          </div>
        </section>

        {/* ── 03 · STRUCTURAL ITERATION ── */}
        <section style={sectionPad}>
          <div style={sectionInner}>
            <span style={eyebrow}>03 · Structural iteration</span>
            <h2 style={h2}>Designing in volume.</h2>
            <ImagePlaceholder
              caption="Paper wireframes & multi-state iterations — a crisp photograph of notepad sketches showing the structural layout grids and the V1 → V10 progression."
            />
            <p style={{ ...body, marginTop: '32px' }}>
              I designed Zanshin in Pencil first, then jumped straight into code using Next.js, Supabase, and Claude Code.
            </p>
            <p style={body}>
              I intentionally conducted my design exploration in high volume on purpose — generating over ten dashboard variants (V1–V10), four day-rail patterns, and eight daily-state variations before writing frontend components. This iteration cycle wasn't about aesthetics; it was about resolving core product engineering tensions:
            </p>
            <ul style={{
              listStyle: 'none', padding: 0, margin: '8px 0 24px',
              borderLeft: '2px solid var(--accent)', paddingLeft: '20px',
              maxWidth: '760px',
            }}>
              {iterationQuestions.map((q) => (
                <li key={q} style={{
                  fontSize: 'var(--type-body)', color: 'var(--muted)',
                  lineHeight: 'var(--leading-body)', marginBottom: '12px',
                }}>
                  {q}
                </li>
              ))}
            </ul>
            <p style={{ ...body, fontWeight: 'var(--weight-medium)' }}>
              Once V9-C locked, we established our core architectural spine: a 3-column dashboard layout split into <em>LAST WEEK · YOUR WEEK SO FAR · DAYS AHEAD</em>. Every subsequent feature was built into this exact spatial layout rather than spinning up noisy new screens.
            </p>
          </div>
        </section>

        {/* ── 04 · PRODUCT STRATEGY: CUTS ── */}
        <section style={sectionPad}>
          <div style={sectionInner}>
            <span style={eyebrow}>04 · Product strategy</span>
            <h2 style={h2}>The power of the cuts.</h2>
            <p style={body}>
              To a PM or founder, what you don't build is just as important as what you do. In a modern AI workflow, the cuts matter more than the additions.
            </p>

            {/* Flow diagram */}
            <div style={{
              background: 'linear-gradient(180deg, #272727 0%, #1a1a1a 100%)',
              borderRadius: 'var(--radius)',
              padding: '32px',
              margin: '32px 0',
              display: 'flex', flexWrap: 'wrap', alignItems: 'center',
              justifyContent: 'center', gap: '16px',
            }}>
              {['Archived: Connect Tools', 'Removed: Settings section', 'Shelved: Complex Projects'].map((node, i, arr) => (
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

            <NumberedList items={cuts} />
          </div>
        </section>

        {/* ── 05 · TECHNICAL ARCHITECTURE & CRAFT ── */}
        <section style={sectionPad}>
          <div style={sectionInner}>
            <span style={eyebrow}>05 · Technical architecture & craft</span>
            <h2 style={h2}>Built with intention, not assembled.</h2>
            <ImagePlaceholder
              caption="Supabase backend database schema & code snippet — dark-mode screenshot of the Supabase relational environment showing the clean tables (profiles, workspaces, tasks, ships), proving the layouts hook straight to live real-time listeners."
            />
            <p style={{ ...body, marginTop: '32px' }}>
              True craft is found in the micro-interactions that make an interface feel built, not just assembled.
            </p>
            <NumberedList items={craftDetails} />
          </div>
        </section>

        {/* ── 06 · REAL-WORLD IMPACT ── */}
        <section style={sectionPad}>
          <div style={sectionInner}>
            <span style={eyebrow}>06 · Real-world impact</span>
            <h2 style={h2}>Radical honesty.</h2>
            <ImagePlaceholder
              caption='Full desktop viewport of the live Zanshin app dashboard — a premium, high-fidelity screenshot of the working application on Vercel, highlighting the single-screen "Kondo" minimalist layout with zero scrolling.'
            />
            <p style={{ ...body, marginTop: '32px' }}>
              Case studies often manipulate metrics. Today, Zanshin is actively used by exactly two people — myself and my co-founder. There is no inflated retention lift statistic, because there is no massive population to track.
            </p>
            <p style={body}>
              Instead, the impact is operational, behavioral, and highly qualitative.
            </p>
            <NumberedList items={impact} />
          </div>
        </section>

        {/* ── 07 · ROADMAP ── */}
        <section style={sectionPad}>
          <div style={sectionInner}>
            <span style={eyebrow}>07 · The product roadmap</span>
            <h2 style={h2}>What's next.</h2>
            <p style={body}>
              Real product leaders always show their next engineering and UX milestones.
            </p>
            <NumberedList items={roadmap} />
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
