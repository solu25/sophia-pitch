import { Link } from 'react-router-dom';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

const impactCards = [
  {
    label: 'The stack',
    detail: 'OpenClaw framework, Python, Railway environment, Claude Code, Telegram webhooks.',
  },
  {
    label: 'The UX focus',
    detail: 'Information design, prompt layout tokenization, cognitive load reduction.',
  },
  {
    label: 'The outcome',
    detail: 'Shifted from evaluating "50 unorganized startup links" to reading "5 hyper-niche, ranked product briefs" directly on a mobile screen.',
  },
];

const metrics = [
  { value: '10 hrs → 30 min', label: 'Weekly research time', detail: 'Reclaimed deep work block' },
  { value: '~500 hrs', label: 'Reclaimed per year', detail: 'Compound time savings' },
  { value: '50 → 5', label: 'Maybes to strong fits', detail: 'Ranked, with reasons' },
];

const logicTree = [
  {
    num: '01',
    label: 'Crawl',
    detail: 'Defined seed-funding API endpoints to pull the latest venture announcements.',
  },
  {
    num: '02',
    label: 'Filter',
    detail: 'Companies sorted by precise parameters — team sizes under 20, non-technical founders, missing design architecture.',
  },
  {
    num: '03',
    label: 'Query',
    detail: 'Secondary data layers to pull founder background details and public tech stacks.',
  },
];

const tokens = [
  {
    label: 'The title block',
    detail: 'Company name + funding tier + immediate link.',
  },
  {
    label: 'The signal metric',
    detail: 'A single line explaining the exact design vulnerability — e.g. "Onboarding drop-off point detected."',
  },
  {
    label: 'The contextual bullet',
    detail: 'A maximum of two highly targeted, data-backed reasons why this founder needs execution help right now.',
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

export default function ScoutPage() {
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
            <span style={{ ...eyebrow, color: 'var(--accent)' }}>Case study · Scout</span>
            <h1 style={{
              fontFamily: 'var(--font-sans)', fontSize: 'var(--type-h1)',
              fontWeight: 'var(--weight-medium)', lineHeight: 'var(--leading-h1)',
              letterSpacing: 'var(--tracking-h1)', color: 'var(--text)',
              margin: '0 0 20px', maxWidth: '820px',
            }}>
              Scout: Designing the UX of autonomous AI pipelines.
            </h1>
            <p style={{
              fontSize: 'var(--type-lead)', lineHeight: 'var(--leading-body)',
              color: 'var(--muted)', margin: 0, maxWidth: '720px',
            }}>
              How I used OpenClaw, Python, and information design to compress 10 hours of manual research into a beautiful 30-minute notification stream.
            </p>
          </div>
        </section>

        {/* ── 01 · ENGINEERING & DESIGN IMPACT ── */}
        <section style={sectionPad}>
          <div style={sectionInner}>
            <span style={eyebrow}>01 · Engineering & design impact</span>
            <h2 style={h2}>An autonomous pipeline, designed end to end.</h2>

            <div style={{
              display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px',
              marginBottom: '40px',
            }} className="scout-impact-grid">
              {impactCards.map((c) => (
                <div key={c.label} style={{
                  backgroundColor: 'var(--surface)', borderRadius: 'var(--radius)',
                  padding: '24px', border: '1px solid var(--border)',
                }}>
                  <span style={{ ...eyebrow, color: 'var(--accent)', marginBottom: '12px' }}>{c.label}</span>
                  <p style={{
                    color: 'var(--text)', fontSize: 'var(--type-body)',
                    lineHeight: 'var(--leading-body)', margin: 0,
                  }}>
                    {c.detail}
                  </p>
                </div>
              ))}
            </div>

            <span style={{ ...eyebrow, color: 'var(--text)', marginBottom: '12px' }}>The metrics</span>
            <div style={{
              display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px',
            }} className="scout-metrics-grid">
              {metrics.map((m) => (
                <div key={m.label} style={{
                  backgroundColor: 'var(--surface)', borderRadius: 'var(--radius)',
                  padding: '24px', border: '1px solid var(--border)',
                }}>
                  <div style={{
                    fontFamily: 'var(--font-sans)', fontSize: 'var(--type-h3)',
                    fontWeight: 'var(--weight-medium)', lineHeight: 'var(--leading-h2)',
                    letterSpacing: 'var(--tracking-h3)', color: 'var(--text)',
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

        {/* ── 02 · THE PRODUCT PROBLEM ── */}
        <section style={sectionPad}>
          <div style={sectionInner}>
            <span style={eyebrow}>02 · The product problem</span>
            <h2 style={h2}>The "wall of text" friction.</h2>
            <p style={body}>
              Every product designer knows that user experience isn't just about buttons — it's about data consumption. My personal workflow bottleneck was tracking early-stage startups that needed immediate UX/UI design system support.
            </p>
            <p style={body}>
              Manually parsing venture funding feeds, cross-referencing engineering team counts on LinkedIn, and scanning founder bios was eating a full day of deep work every single week. When I tried to automate this using basic AI scripts, the outcome was unreadable. The script spat out long, unstructured paragraphs of raw text. The cognitive load was just as high as doing the manual research.
            </p>
            <p style={{ ...body, fontWeight: 'var(--weight-medium)' }}>
              I needed to engineer a tool that solved the data pipe and the visual layout simultaneously.
            </p>
          </div>
        </section>

        {/* ── 03 · ENGINEERING THE BACKEND ── */}
        <section style={sectionPad}>
          <div style={sectionInner}>
            <span style={eyebrow}>03 · Engineering the agent backend</span>
            <h2 style={h2}>The logic pipe.</h2>
            <p style={body}>
              Before styling the data, I built the engine. Using Claude Code and the OpenClaw framework, I scripted an autonomous background worker written in Python and deployed it to Railway to run on a weekly cron schedule.
            </p>
            <p style={{ ...body, fontWeight: 'var(--weight-medium)' }}>
              The backend algorithm follows a highly structured logic tree.
            </p>
            <NumberedList items={logicTree} />

            <ImagePlaceholder
              caption="Backend architecture map — a premium dark-mode system flowchart showing the pipeline from raw data feeds → OpenClaw parsing → Python sorting modules → the scoring engine."
            />
          </div>
        </section>

        {/* ── 04 · INFORMATION ARCHITECTURE ── */}
        <section style={sectionPad}>
          <div style={sectionInner}>
            <span style={eyebrow}>04 · Information architecture</span>
            <h2 style={h2}>Prompting as a layout system.</h2>
            <p style={body}>
              This is where the UX strategy took over. I treated the LLM's final processing layer exactly like a UI component library.
            </p>
            <p style={body}>
              Instead of letting the model output freeform prose, I structured its prompt parameters using markdown design rules. I tokenized the output fields so the agent was forced to sort its findings into rigid visual hierarchies.
            </p>
            <NumberedList items={tokens} />

            <ImagePlaceholder
              caption='Prompt engineering layout comparison — split-screen graphic. Left: messy, default, unreadable AI paragraph labeled "Standard AI output." Right: clean, beautifully tabbed, structured markdown labeled "Engineered information architecture."'
            />
          </div>
        </section>

        {/* ── 05 · DELIVERING THE INTERFACE ── */}
        <section style={sectionPad}>
          <div style={sectionInner}>
            <span style={eyebrow}>05 · Delivering the interface</span>
            <h2 style={h2}>The Telegram webhook.</h2>
            <p style={body}>
              A tool is only useful if it fits into your natural daily habit. I didn't want to log into another custom dashboard or web app just to check data.
            </p>
            <p style={body}>
              I set up an automated webhook connection to pipe the styled markdown briefs directly into a private Telegram channel. By leveraging Telegram's native UI rendering, the final output feels like a custom-designed mobile app feed.
            </p>
            <p style={{ ...body, fontWeight: 'var(--weight-medium)' }}>
              Every Wednesday morning, Scout delivers exactly 5 premium, ranked, scannable cards straight to my phone. I can review an entire week's worth of market activity, understand the design context of 5 different companies, and make high-level strategic decisions during a single 30-minute morning routine.
            </p>

            <ImagePlaceholder
              caption="Mobile UI mockup — close-up of the Telegram live feed showing Scout's actual ranked briefs. Emphasizes how clean, bulleted, and instantly readable the text looks on a real phone screen."
            />
          </div>
        </section>

        {/* ── 06 · THE TAKEAWAY ── */}
        <section style={sectionPad}>
          <div style={sectionInner}>
            <span style={eyebrow}>06 · The takeaway</span>
            <h2 style={h2}>Full-stack product thinker.</h2>
            <p style={body}>
              Scout proves that a modern product designer shouldn't stop at drawing layouts in Figma. By blending autonomous AI engineering with strict information architecture principles, I built a high-value tool that directly multiplies my operational velocity.
            </p>
            <p style={{ ...body, fontWeight: 'var(--weight-medium)' }}>
              I design the workflows. I write the code. I optimize the data experiences end to end.
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
