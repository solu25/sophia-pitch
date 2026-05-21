import { Link } from 'react-router-dom';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

const stack = ['OpenClaw', 'Railway', 'Telegram', 'Tavily', 'Firecrawl', 'Claude API'];

const icpRules = [
  'Seed to Series A founders, where design quality is a real differentiator.',
  'Strong founder presence on LinkedIn or in product communities.',
  'Existing website that we can actually evaluate (no stealth-mode shells).',
  'Industries where good UX is a competitive moat, not a checkbox.',
  'Red flags around personal surveillance, unconnected individuals, and confidence claims that don\'t match source quality.',
];

const stackList = [
  { name: 'OpenClaw', detail: 'as the agent framework.' },
  { name: 'Railway', detail: 'for cloud hosting so Scout runs whether my laptop is open or not.' },
  { name: 'Telegram', detail: 'as the interface — I can talk to Scout from my phone, my desk, the ice cream shop.' },
  { name: 'Tavily + Firecrawl', detail: 'Tavily for web search, Firecrawl for deeper page crawling.' },
  { name: 'Claude', detail: 'as the model under the hood.' },
];

const architecture = [
  { file: 'SOUL.md', detail: "Scout's personality and tone." },
  { file: 'IDENTITY.md', detail: 'Who Scout is and what role she plays.' },
  { file: 'BOOTSTRAP.md', detail: 'Session startup logic.' },
  { file: 'USER.md', detail: 'Who I am, how I work, what I care about.' },
  { file: 'AGENTS.md', detail: 'The ICP, the scoring criteria, the red lines, the workflow.' },
  { file: 'TOOLS.md', detail: 'How Scout uses Tavily and Firecrawl.' },
  { file: 'HEARTBEAT.md', detail: 'The scheduled tasks that run without me asking.' },
  { file: 'BRIEFING_TEMPLATE.md', detail: 'The exact format every research output follows.' },
];

const heartbeatRules = [
  'Pulls from four sources — Tavily x2, Firecrawl on TechCrunch with Tavily fallback, Twitter signals.',
  "72-hour announcement window so I'm catching news fresh.",
  '10 startups maximum per digest so it stays scannable.',
  "30-day no-repeat rule logged to memory so the same founder doesn't get re-surfaced.",
];

const outcomes = [
  '8 hours → 20 minutes per research session.',
  '4x more founders qualified per week — capacity went from 10 to 40+.',
  '100% consistent scoring — every founder evaluated against the same criteria, every time.',
  'Zero manual tab-switching — Scout handles Sales Navigator, websites, LinkedIn, news, funding announcements.',
  'Built and deployed in one day — OpenClaw to Railway to Telegram, no infrastructure team.',
  "Personalized to Hema — Scout doesn't just retrieve, she reasons the way we reason.",
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
  margin: '32px 0 12px',
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

function BulletList({ items }) {
  return (
    <ul style={{
      listStyle: 'none', padding: 0, margin: '8px 0 24px',
      borderLeft: '2px solid var(--accent)', paddingLeft: '20px',
      maxWidth: '760px',
    }}>
      {items.map((item) => (
        <li key={item} style={{
          fontSize: 'var(--type-body)', color: 'var(--muted)',
          lineHeight: 'var(--leading-body)', marginBottom: '12px',
        }}>
          {item}
        </li>
      ))}
    </ul>
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
            <span style={{ ...eyebrow, color: 'var(--accent)' }}>Case study · Scout AI</span>
            <h1 style={{
              fontFamily: 'var(--font-sans)', fontSize: 'var(--type-h1)',
              fontWeight: 'var(--weight-medium)', lineHeight: 'var(--leading-h1)',
              letterSpacing: 'var(--tracking-h1)', color: 'var(--text)',
              margin: '0 0 20px', maxWidth: '820px',
            }}>
              Scout AI: The research agent that does in 20 minutes what used to take a full day.
            </h1>
            <p style={{
              fontSize: 'var(--type-lead)', lineHeight: 'var(--leading-body)',
              color: 'var(--muted)', margin: '0 0 28px', maxWidth: '720px',
            }}>
              Scout is a hyper-personalized AI research agent I built to vet startup founders for Hema Designs' outreach pipeline. Built in a day. Live on Telegram. Cut research time from 8 hours to 20 minutes. 4x more founders qualified per week.
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
            <ImagePlaceholder
              caption="Screenshot 1 — Telegram conversation with Scout delivering a research briefing."
            />
          </div>
        </section>

        {/* ── 01 · THE PROBLEM ── */}
        <section style={sectionPad}>
          <div style={sectionInner}>
            <span style={eyebrow}>01 · The problem</span>
            <h2 style={h2}>Biz dev research was killing momentum.</h2>
            <p style={body}>
              Every lead meant opening Sales Navigator, clicking through the founder's profile, pulling up their website, evaluating whether the design was strong or weak, checking ICP fit, ranking the lead, and deciding whether to reach out. For ten founders, that ate a full day. Clicking, scrolling, tab switching, copy-pasting, ranking — and at the end of it, not a single message had gone out.
            </p>
            <p style={{ ...body, fontWeight: 'var(--weight-medium)' }}>
              The bottleneck wasn't outreach. It was the research happening before the outreach.
            </p>
          </div>
        </section>

        {/* ── 02 · THE INSIGHT ── */}
        <section style={sectionPad}>
          <div style={sectionInner}>
            <span style={eyebrow}>02 · The insight</span>
            <h2 style={h2}>Two jobs collapsed into one — and research was crowding everything else out.</h2>
            <p style={body}>
              If something could handle the research completely, the human time could go entirely to conversations. That's the job an agent could actually do.
            </p>
            <p style={{ ...body, fontWeight: 'var(--weight-medium)' }}>
              But only if it was tuned to us. Generic research tools spit out generic summaries. What Hema Designs needed was a research agent that thought about leads the way we think about leads.
            </p>
          </div>
        </section>

        {/* ── 03 · WHY HYPER-PERSONALIZATION ── */}
        <section style={sectionPad}>
          <div style={sectionInner}>
            <span style={eyebrow}>03 · Why hyper-personalization mattered</span>
            <h2 style={h2}>Scout knows exactly what we are looking for.</h2>
            <p style={body}>
              The thing that makes Scout different from any off-the-shelf AI research tool is that Scout knows exactly what we are looking for. Not what a generic SDR would want. Not what a recruiter would want. What Hema specifically needs to evaluate a founder.
            </p>
            <p style={body}>
              That meant encoding our ICP into the agent itself.
            </p>
            <BulletList items={icpRules} />
            <p style={body}>
              And it meant encoding <em>how</em> we score, not just what we look for. Scout doesn't just retrieve information — it pressure-tests every founder against the same criteria every time. The output is a briefing that maps directly to whether Sophia should reach out, in what tone, with what hook.
            </p>

            {/* Comparison block: Generic vs Scout */}
            <div style={{
              display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px',
              marginTop: '24px',
            }} className="scout-compare-grid">
              <div style={{
                backgroundColor: 'var(--surface)', borderRadius: 'var(--radius)',
                padding: '24px', border: '1px solid var(--border)',
              }}>
                <span style={{ ...eyebrow, color: 'var(--muted)', marginBottom: '12px' }}>Generic agent</span>
                <p style={{
                  color: 'var(--muted)', fontSize: 'var(--type-body)',
                  lineHeight: 'var(--leading-body)', margin: 0, fontStyle: 'italic',
                }}>
                  "This founder raised $3M from Sequoia."
                </p>
              </div>
              <div style={{
                backgroundColor: 'var(--surface)', borderRadius: 'var(--radius)',
                padding: '24px', border: '1px solid var(--accent)',
              }}>
                <span style={{ ...eyebrow, color: 'var(--accent)', marginBottom: '12px' }}>Scout</span>
                <p style={{
                  color: 'var(--text)', fontSize: 'var(--type-body)',
                  lineHeight: 'var(--leading-body)', margin: 0, fontStyle: 'italic',
                }}>
                  "Raised $3M from Sequoia, website is a templated Webflow build with weak hierarchy, LinkedIn shows active product thinking, design is the obvious wedge — score: high."
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── 04 · THE BUILD ── */}
        <section style={sectionPad}>
          <div style={sectionInner}>
            <span style={eyebrow}>04 · The build</span>
            <h2 style={h2}>One day, eight files, end-to-end.</h2>

            <h3 style={h3}>The stack</h3>
            <div style={{
              display: 'flex', flexDirection: 'column',
              borderTop: '1px solid var(--border)', marginTop: '16px',
            }}>
              {stackList.map((s, i) => (
                <div key={s.name} style={{
                  display: 'flex', gap: '24px', alignItems: 'baseline',
                  padding: '16px 0',
                  borderBottom: i < stackList.length - 1 ? '1px solid var(--border)' : 'none',
                }}>
                  <span style={{
                    flexShrink: 0, minWidth: '160px',
                    fontFamily: 'var(--font-badge)', fontSize: 'var(--type-body)',
                    fontWeight: 'var(--weight-medium)', color: 'var(--text)',
                  }}>
                    {s.name}
                  </span>
                  <span style={{
                    fontSize: 'var(--type-body)', color: 'var(--muted)',
                    lineHeight: 'var(--leading-body)',
                  }}>
                    {s.detail}
                  </span>
                </div>
              ))}
            </div>

            <h3 style={h3}>The architecture</h3>
            <p style={body}>
              Eight markdown configuration files, each doing one job.
            </p>
            <div style={{
              display: 'flex', flexDirection: 'column',
              borderTop: '1px solid var(--border)', marginTop: '16px',
            }}>
              {architecture.map((a, i) => (
                <div key={a.file} style={{
                  display: 'flex', gap: '24px', alignItems: 'baseline',
                  padding: '14px 0',
                  borderBottom: i < architecture.length - 1 ? '1px solid var(--border)' : 'none',
                }}>
                  <span style={{
                    flexShrink: 0, minWidth: '200px',
                    fontFamily: 'var(--font-badge)', fontSize: 'var(--type-body)',
                    fontWeight: 'var(--weight-medium)', color: 'var(--accent)',
                  }}>
                    {a.file}
                  </span>
                  <span style={{
                    fontSize: 'var(--type-body)', color: 'var(--text)',
                    lineHeight: 'var(--leading-body)',
                  }}>
                    {a.detail}
                  </span>
                </div>
              ))}
            </div>

            <p style={{ ...body, marginTop: '32px', fontWeight: 'var(--weight-medium)' }}>
              The USER.md/AGENTS.md split is the architectural decision that makes Scout work. USER.md is about me. AGENTS.md is about how Scout reasons. Separating them means I can change how I work without retraining Scout, and I can refine Scout's reasoning without rewriting my own context.
            </p>
          </div>
        </section>

        {/* ── 05 · THE HEARTBEAT ── */}
        <section style={sectionPad}>
          <div style={sectionInner}>
            <span style={eyebrow}>05 · The heartbeat</span>
            <h2 style={h2}>Research that comes to me.</h2>
            <p style={body}>
              The most powerful piece of Scout isn't on-demand research. It's the Daily Funding Digest — a heartbeat that runs at 8am ET every morning and delivers ten freshly-funded startups directly to Telegram, already filtered against the ICP.
            </p>
            <h3 style={h3}>How it works</h3>
            <BulletList items={heartbeatRules} />
            <p style={{ ...body, fontWeight: 'var(--weight-medium)' }}>
              The shift is that I'm no longer chasing leads. Leads show up. The first thing I see when I open my phone in the morning is ten founders I should consider reaching out to today, each already scored.
            </p>
            <ImagePlaceholder
              caption="Screenshot 2 — A morning Daily Funding Digest in Telegram."
            />
          </div>
        </section>

        {/* ── 06 · OUTCOMES ── */}
        <section style={sectionPad}>
          <div style={sectionInner}>
            <span style={eyebrow}>06 · The outcomes</span>
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
            <ImagePlaceholder
              caption="Screenshot 3 — Architecture diagram or file structure (sketch placeholder)."
            />
          </div>
        </section>

        {/* ── 07 · WHY THIS MATTERS ── */}
        <section style={sectionPad}>
          <div style={sectionInner}>
            <span style={eyebrow}>07 · Why this matters</span>
            <h2 style={h2}>Most AI agents are built to be useful to everyone — that's why they're useful to no one in particular.</h2>
            <p style={body}>
              Scout is built to be useful to exactly one business — mine — and the entire architecture is the difference.
            </p>
            <p style={{ ...body, fontWeight: 'var(--weight-medium)' }}>
              The skill isn't getting an agent to retrieve information. The skill is encoding how you think into a system that thinks for you while you're doing something else. That's what makes a tool actually save time instead of just looking like it does.
            </p>

            <div style={{
              marginTop: '40px', padding: '32px',
              backgroundColor: 'var(--surface)',
              borderRadius: 'var(--radius)',
              border: '1px solid var(--border)',
              borderLeft: '3px solid var(--accent)',
            }}>
              <span style={{ ...eyebrow, marginBottom: '12px' }}>What this proves</span>
              <p style={{
                fontSize: 'var(--type-body)', color: 'var(--text)',
                lineHeight: 'var(--leading-body)', margin: 0,
              }}>
                Most designers stop at the design. I built the infrastructure underneath my own business, the way I'd build it for a client. Scout is one node in a broader agent system I architected for Hema Designs — proof that the "design → code → ship" pitch isn't theoretical. I run my own operations on it.
              </p>
            </div>
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
