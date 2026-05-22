import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

const techStack = ['Next.js', 'Supabase', 'Claude Code', 'Vercel'];

const productFeatures = [
  {
    num: '01',
    label: 'One weekly goal',
    tagline: 'what is this week for',
    image: {
      src: '/zanshin-weekly-goal.png',
      alt: 'Zanshin weekly goal banner — annotated horizontal layout.',
    },
    imageCaption: 'Weekly goal banner — chromeless, inline editable.',
  },
  {
    num: '02',
    label: 'One daily thing',
    tagline: 'the most important task today',
    image: {
      src: '/zanshin-daily-thing.gif',
      alt: 'Zanshin daily thing — animated interaction in the daily timeline.',
    },
    imageCaption: "Today's one thing in the daily timeline.",
  },
  {
    num: '03',
    label: 'Ships',
    tagline: 'what actually got finished',
    image: {
      src: '/zanshin-ships.gif',
      alt: 'Zanshin ships rail — coral check + strikethrough animation when an item gets shipped.',
    },
    imageCaption: 'Ships rail with coral check + strikethrough treatment.',
  },
];

const nextQuestions = [
  'Does the weekly check-in need its own screen, or does it work inline?',
  'Where does real-time sync show up as latency in actual use?',
  "What's the first feature you'd quit over not having?",
];

const surveyQuestions = [
  {
    id: 'useful',
    label: 'Which part felt most useful?',
    options: [
      'The weekly goal banner',
      'The "today\'s one thing" focus',
      'The shipped trail across the week',
      'The radical minimalism',
    ],
  },
  {
    id: 'absence',
    label: 'Which absence feels the most refreshing?',
    options: [
      'No projects or kanban columns',
      'No settings page',
      'No integrations (Slack, Linear, GitHub)',
      'No OKR hierarchy',
    ],
  },
  {
    id: 'craft',
    label: 'Which UI detail feels most considered?',
    options: [
      'Em-dash prefix for active items',
      'Coral check + strikethrough when done',
      'Inline day-rail expansion (no modals)',
      'Chromeless inline-edit goal banner',
    ],
  },
  {
    id: 'sized',
    label: 'What signals it was designed for 3 people, not 30?',
    options: [
      'Single-screen layout',
      'Cutting Projects entirely',
      'One weekly goal (not OKRs)',
      "One daily 'thing' focus",
    ],
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

// ── Mini Zanshin dashboard recreation ──
function MiniZanshin() {
  const coral = '#E55C5C';
  const muted = 'rgba(39, 39, 39, 0.4)';
  const lightBorder = 'rgba(39, 39, 39, 0.08)';

  const [goal, setGoal] = useState('');
  const [todayInput, setTodayInput] = useState('');
  const [todayItems, setTodayItems] = useState([]);

  const handleTodayKey = (e) => {
    if (e.key === 'Enter' && todayInput.trim()) {
      e.preventDefault();
      setTodayItems([...todayItems, { text: todayInput.trim(), done: false }]);
      setTodayInput('');
    }
  };

  const toggleItem = (i) => {
    setTodayItems(todayItems.map((item, idx) =>
      idx === i ? { ...item, done: !item.done } : item
    ));
  };

  const inputStyle = {
    width: '100%',
    border: 'none', outline: 'none', background: 'transparent',
    color: 'var(--text)', fontSize: '12px',
    fontFamily: 'var(--font-sans)', padding: 0,
  };

  const badgeStyle = {
    fontFamily: 'var(--font-badge)',
    fontSize: '9px',
    letterSpacing: '0.96px',
    textTransform: 'uppercase',
  };
  const lastWeek = [
    { day: 'FRI', date: 'MAY 15' },
    { day: 'THU', date: 'MAY 14' },
    { day: 'WED', date: 'MAY 13' },
    { day: 'TUE', date: 'MAY 12' },
    { day: 'MON', date: 'MAY 11' },
  ];
  const daysAhead = [
    { day: 'MON', date: 'MAY 25' },
    { day: 'TUE', date: 'MAY 26' },
    { day: 'WED', date: 'MAY 27' },
    { day: 'THU', date: 'MAY 28' },
  ];

  return (
    <div style={{
      backgroundColor: 'var(--surface)',
      borderRadius: '10px',
      border: '1px solid var(--border)',
      padding: '20px',
      marginTop: '40px',
      fontFamily: 'var(--font-sans)',
      fontSize: '12px',
      color: 'var(--text)',
      boxShadow: '0 4px 16px rgba(0,0,0,0.04)',
    }}>
      {/* Top header */}
      <div style={{
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        marginBottom: '14px', fontSize: '11px',
      }}>
        <span>Today · Thursday, May 21 · day 4 · WEEK 21</span>
        <span style={{ fontStyle: 'italic', color: muted }}>fresh — pick one to start</span>
      </div>

      {/* Goal banner */}
      <div style={{
        border: `1.5px solid ${coral}`, borderRadius: '6px',
        padding: '12px 16px', marginBottom: '12px',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        gap: '12px',
      }}>
        <div style={{ minWidth: 0, flex: 1 }}>
          <div style={{ ...badgeStyle, color: coral, marginBottom: '4px' }}>
            This week's goal
          </div>
          <input
            type="text"
            value={goal}
            onChange={(e) => setGoal(e.target.value)}
            placeholder="what's the focus for this week?"
            className="mini-zanshin-input"
            style={inputStyle}
          />
        </div>
        <div style={{ textAlign: 'right', fontSize: '10px', flexShrink: 0 }}>
          <div>day 4 of 5</div>
          <div style={{ ...badgeStyle, color: muted, marginTop: '2px' }}>THU, MAY 21</div>
        </div>
      </div>

      {/* Last Week */}
      <div style={{
        border: `1px solid ${lightBorder}`, borderRadius: '6px',
        padding: '12px', marginBottom: '12px',
      }}>
        <div style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          marginBottom: '8px',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ color: muted }}>—</span>
            <span style={{ ...badgeStyle, color: muted }}>LAST WEEK</span>
            <span style={{ color: muted, fontStyle: 'italic', fontSize: '10px' }}>
              · reminder for Monday morning
            </span>
          </div>
          <span style={{ color: muted, fontStyle: 'italic', fontSize: '10px' }}>no trail yet</span>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '6px' }}>
          {lastWeek.map((d) => (
            <div key={d.date} style={{
              border: `1px solid ${lightBorder}`, borderRadius: '4px', padding: '8px',
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                <span style={{ ...badgeStyle, color: muted }}>{d.day} · {d.date}</span>
                <span style={{ color: muted }}>—</span>
              </div>
              <div style={{ fontStyle: 'italic', color: muted, fontSize: '10px' }}>
                before you started
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Today + Days Ahead */}
      <div className="mini-zanshin-bottom" style={{
        display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '12px',
      }}>
        {/* Today card */}
        <div style={{
          border: `1.5px solid ${coral}`, borderRadius: '6px', padding: '14px',
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ color: coral }}>—</span>
              <span style={{ ...badgeStyle, color: coral }}>THU, MAY 21 · TODAY</span>
            </div>
            <span style={{ color: muted, fontStyle: 'italic', fontSize: '10px' }}>pick one</span>
          </div>
          <div style={{
            fontSize: '18px', fontWeight: 'var(--weight-medium)',
            lineHeight: 1.25, letterSpacing: '-0.4px',
            marginBottom: '12px',
          }}>
            What's the work for today?
          </div>
          {/* Today items */}
          {todayItems.length > 0 && (
            <div style={{
              display: 'flex', flexDirection: 'column', gap: '6px',
              marginBottom: '10px',
            }}>
              {todayItems.map((item, i) => (
                <div
                  key={i}
                  onClick={() => toggleItem(i)}
                  style={{
                    display: 'flex', alignItems: 'center', gap: '8px',
                    cursor: 'pointer', userSelect: 'none',
                  }}
                >
                  <span style={{ color: coral, fontFamily: 'var(--font-sans)', flexShrink: 0 }}>
                    {item.done ? '✓' : '—'}
                  </span>
                  <span style={{
                    color: item.done ? muted : 'var(--text)',
                    textDecoration: item.done ? 'line-through' : 'none',
                    fontSize: '12px',
                  }}>
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          )}

          {/* Today input */}
          <div style={{
            border: `1.5px dashed ${coral}`, borderRadius: '4px',
            padding: '10px 12px',
            display: 'flex', alignItems: 'center', gap: '8px',
          }}>
            <span style={{ color: coral, flexShrink: 0 }}>+</span>
            <input
              type="text"
              value={todayInput}
              onChange={(e) => setTodayInput(e.target.value)}
              onKeyDown={handleTodayKey}
              placeholder={todayItems.length === 0 ? 'log your first thing today' : 'add another'}
              className="mini-zanshin-input"
              style={{ ...inputStyle, flex: 1 }}
            />
            <span style={{ ...badgeStyle, color: muted, flexShrink: 0 }}>⌘ ↵</span>
          </div>
        </div>

        {/* Days Ahead */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
          {daysAhead.map((d) => (
            <div key={d.date} style={{
              border: `1px solid ${lightBorder}`, borderRadius: '4px',
              padding: '10px 12px',
              display: 'flex', justifyContent: 'space-between', alignItems: 'center',
            }}>
              <span style={{ ...badgeStyle, color: muted }}>{d.day} · {d.date}</span>
              <span style={{ color: muted, fontStyle: 'italic', fontSize: '10px' }}>+ add</span>
            </div>
          ))}
        </div>
      </div>

      {/* Tiny caption */}
      <p style={{
        ...badgeStyle, color: muted, textAlign: 'center',
        marginTop: '18px', marginBottom: 0,
      }}>
        Live at zanshin-seven.vercel.app — mini recreation
      </p>
    </div>
  );
}

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
            backgroundColor: 'rgba(0,0,0,0.94)',
            overflowY: 'auto',
            cursor: 'zoom-out',
            padding: '32px 0',
          }}
        >
          <img
            src={src}
            alt={alt}
            style={{
              display: 'block', margin: '0 auto',
              width: 'min(96vw, 1800px)',
              height: 'auto',
              boxShadow: '0 24px 64px rgba(0,0,0,0.6)',
              borderRadius: 'var(--radius)',
              cursor: 'zoom-out',
            }}
          />
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); setIsOpen(false); }}
            aria-label="Close zoomed image"
            style={{
              position: 'fixed', top: 24, right: 24,
              width: 44, height: 44, borderRadius: '50%',
              background: 'rgba(255,255,255,0.14)',
              border: '1px solid rgba(255,255,255,0.22)',
              color: '#fff', fontSize: 20,
              cursor: 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              backdropFilter: 'blur(8px)',
              WebkitBackdropFilter: 'blur(8px)',
            }}
          >
            ×
          </button>
        </div>
      )}
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

function FeedbackSurvey() {
  const [answers, setAnswers] = useState({});
  const coral = '#E55C5C';
  const allAnswered = Object.keys(answers).length === surveyQuestions.length;

  const handleSelect = (qid, option) => {
    setAnswers({ ...answers, [qid]: option });
  };

  return (
    <section style={sectionPad}>
      <div style={sectionInner}>
        <span style={eyebrow}>07 · Feedback</span>
        <h2 style={h2}>What did you think of the mini demo?</h2>
        <p style={body}>
          Quick 4 questions, no submit — just a temperature check.
        </p>

        <div style={{
          display: 'flex', flexDirection: 'column', gap: '40px',
          marginTop: '32px',
        }}>
          {surveyQuestions.map((q, i) => {
            const selected = answers[q.id];
            return (
              <div key={q.id}>
                <div style={{
                  display: 'flex', alignItems: 'baseline', gap: '12px',
                  marginBottom: '16px',
                }}>
                  <span style={{
                    color: 'var(--accent)', fontSize: 'var(--type-small)',
                    fontFamily: 'var(--font-badge)', fontWeight: 'var(--weight-medium)',
                    letterSpacing: 'var(--tracking-badge)',
                    flexShrink: 0,
                  }}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 style={{
                    fontFamily: 'var(--font-sans)', fontSize: 'var(--type-h4)',
                    fontWeight: 'var(--weight-medium)', lineHeight: 'var(--leading-h4)',
                    letterSpacing: 'var(--tracking-h4)', color: 'var(--text)',
                    margin: 0,
                  }}>
                    {q.label}
                  </h3>
                </div>
                <div style={{
                  display: 'flex', flexWrap: 'wrap', gap: '8px',
                  paddingLeft: '32px',
                }}>
                  {q.options.map((opt) => {
                    const isSelected = selected === opt;
                    return (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => handleSelect(q.id, opt)}
                        style={{
                          padding: '10px 16px',
                          borderRadius: '999px',
                          border: `1px solid ${isSelected ? coral : 'var(--border)'}`,
                          backgroundColor: isSelected ? coral : 'var(--surface)',
                          color: isSelected ? '#fff' : 'var(--text)',
                          fontSize: 'var(--type-body)',
                          fontFamily: 'var(--font-sans)',
                          fontWeight: 'var(--weight-medium)',
                          cursor: 'pointer',
                          transition: 'background-color 0.15s ease, border-color 0.15s ease, color 0.15s ease',
                        }}
                      >
                        {opt}
                      </button>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        {allAnswered && (
          <p style={{
            marginTop: '48px',
            textAlign: 'center',
            fontSize: 'var(--type-body)',
            color: 'var(--text)',
            lineHeight: 'var(--leading-body)',
          }}>
            Thanks —{' '}
            <a
              href="mailto:lusophia95@gmail.com?subject=Zanshin%20feedback"
              style={{
                color: 'var(--accent)',
                textDecoration: 'underline',
                textUnderlineOffset: '3px',
              }}
            >
              message me directly
            </a>{' '}
            with anything else.
          </p>
        )}
      </div>
    </section>
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
              Zanshin — async standup for a team of three.
            </h1>
            <p style={{
              fontSize: 'var(--type-lead)', lineHeight: 'var(--leading-body)',
              color: 'var(--muted)', margin: '0 0 12px', maxWidth: '720px',
            }}>
              I skipped Figma and vibe-coded Zanshin straight from paper to production. A single-screen async standup for our team of three at Hema Designs.
            </p>
            <p style={{
              fontSize: 'var(--type-lead)', lineHeight: 'var(--leading-body)',
              color: 'var(--muted)', margin: '0 0 28px', maxWidth: '720px',
            }}>
              Live at{' '}
              <a
                href="https://zanshin-seven.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: 'var(--accent)', textDecoration: 'underline', textUnderlineOffset: '3px' }}
              >
                zanshin-seven.vercel.app
              </a>
              .
            </p>

            {/* Tech stack chips */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {techStack.map((tech) => (
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

            {/* Mini Zanshin recreation */}
            <MiniZanshin />
          </div>
        </section>

        {/* ── 01 · THE PROBLEM ── */}
        <section style={sectionPad}>
          <div style={sectionInner}>
            <span style={eyebrow}>01 · The problem</span>
            <h2 style={h2}>Our standup was a Slack thread that died by Wednesday.</h2>
            <p style={body}>
              We'd tried Geekbot, Range, and Standuply, Kanban, Trello, Notion — but they're all built for big teams. OKRs, project hierarchies, dashboards. The setup was more work than the standup itself.
            </p>
            <p style={{ ...body, fontWeight: 'var(--weight-medium)' }}>
              We needed something sized for three people who already trust each other.
            </p>
          </div>
        </section>

        {/* ── 02 · THE PRODUCT ── */}
        <section style={sectionPad}>
          <div style={sectionInner}>
            <span style={eyebrow}>02 · The product</span>
            <h2 style={h2}>One screen. Three data points.</h2>

            <div style={{
              display: 'flex', flexDirection: 'column', gap: '40px',
              marginTop: '32px',
            }}>
              {productFeatures.map((f) => (
                <div key={f.num} style={{
                  display: 'flex', flexDirection: 'column', gap: '12px',
                }}>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '16px' }}>
                    <span style={{
                      color: 'var(--accent)', fontSize: 'var(--type-small)',
                      fontFamily: 'var(--font-badge)', fontWeight: 'var(--weight-medium)',
                      letterSpacing: 'var(--tracking-badge)',
                      flexShrink: 0,
                    }}>
                      {f.num}
                    </span>
                    <div>
                      <h3 style={{
                        fontFamily: 'var(--font-sans)', fontSize: 'var(--type-h4)',
                        fontWeight: 'var(--weight-medium)', lineHeight: 'var(--leading-h4)',
                        letterSpacing: 'var(--tracking-h4)', color: 'var(--text)',
                        margin: 0,
                      }}>
                        {f.label}
                        <span style={{
                          color: 'var(--muted)',
                          fontWeight: 'var(--weight-normal)',
                          fontStyle: 'italic',
                        }}>
                          {' '}— {f.tagline}.
                        </span>
                      </h3>
                    </div>
                  </div>
                  {f.image ? (
                    <ImageBlock src={f.image.src} alt={f.image.alt} caption={f.imageCaption} />
                  ) : (
                    <ImagePlaceholder caption={f.imageCaption} />
                  )}
                </div>
              ))}
            </div>

            <p style={{
              ...body, marginTop: '48px',
              fontWeight: 'var(--weight-medium)',
            }}>
              That's it. No projects, no settings, no integrations. Just the rhythm.
            </p>
          </div>
        </section>

        {/* ── 03 · HOW I BUILT IT ── */}
        <section style={sectionPad}>
          <div style={sectionInner}>
            <span style={eyebrow}>03 · How I built it</span>
            <h2 style={h2}>Sketched in Pencil. Skipped Figma. Went straight to code.</h2>
            <p style={body}>
              Live on Vercel in a few days with Claude Code, Next.js, and Supabase.
            </p>
            <p style={body}>
              I did the design exploration in volume on paper first — ten dashboard variants, four day-rail patterns, eight daily-state versions — before writing any code. Faster to throw away a sketch than a built component.
            </p>
            <ImageBlock
              src="/zanshin-design-system.png"
              alt="Zanshin design system in dark mode — typography, color tokens, and components."
              caption="Design system foundation — typography, color tokens, and components."
            />
            <ImagePlaceholder caption="Paper sketches of the dashboard variants." />
          </div>
        </section>

        {/* ── 04 · WHY SHIPPING MATTERS ── */}
        <section style={sectionPad}>
          <div style={sectionInner}>
            <span style={eyebrow}>04 · Why shipping matters</span>
            <h2 style={h2}>Working-on is a feeling. Shipped is a fact.</h2>
            <p style={body}>
              Most standup tools ask "what are you working on today?" Zanshin also asks "what did you actually finish?"
            </p>
            <p style={body}>
              That second question is the one that changes behavior. By making ships a first-class data point — visible across LAST WEEK, YOUR WEEK SO FAR, and DAYS AHEAD — the dashboard shows the week as a trail of finished things, not a list of intentions.
            </p>
            <p style={{ ...body, fontWeight: 'var(--weight-medium)' }}>
              For a small team, this is the actual rhythm. Daily intentions are easy. Weekly delivery is the thing that compounds.
            </p>
            <ImageBlock
              src="/zanshin-ships.gif"
              alt="Zanshin ships rail — animated coral check + strikethrough when a task ships."
              caption="Shipped is a fact — what that fact looks like, animated."
            />
          </div>
        </section>

        {/* ── 05 · WHAT WE'VE LEARNED USING IT ── */}
        <section style={sectionPad}>
          <div style={sectionInner}>
            <span style={eyebrow}>05 · What we've learned using it</span>
            <h2 style={h2}>The weekly goal does more than the daily task.</h2>
            <p style={body}>
              Two users so far — me and my co-founder. But weeks in, the most surprising thing isn't that we keep showing up. It's which part of the screen we look at first.
            </p>
            <p style={body}>
              The weekly goal — the one anchor at the top of the dashboard — has done more behavior change than the daily task field. Every morning, the question shifts from "what am I doing today" to "what does today owe to the week."
            </p>
            <p style={{ ...body, fontWeight: 'var(--weight-medium)' }}>
              That's the design insight I'm taking into v2.
            </p>
            <ImageBlock
              src="/zanshin-bold-accent.png"
              alt="Zanshin in bold accent — the weekly goal anchor at the top of the dashboard."
              caption="The weekly goal anchor — the line we read first every morning."
            />
          </div>
        </section>

        {/* ── 06 · WHAT'S NEXT ── */}
        <section style={sectionPad}>
          <div style={sectionInner}>
            <span style={eyebrow}>06 · What's next</span>
            <h2 style={h2}>Looking for 3 small teams to try v1.</h2>
            <p style={body}>
              Tell me where it breaks. Specifically:
            </p>
            <BulletList items={nextQuestions} />
            <p style={{ ...body, fontWeight: 'var(--weight-medium)' }}>
              After that: production auth, then iterate based on what the test teams say.
            </p>

            {/* CTAs */}
            <div style={{
              display: 'flex', flexWrap: 'wrap', gap: '12px',
              marginTop: '32px',
            }}>
              <a
                href="https://zanshin-seven.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
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
                Try it
                <i className="fa-light fa-arrow-up-right-from-square" />
              </a>
              <a
                href="mailto:lusophia95@gmail.com?subject=Zanshin%20feedback"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '8px',
                  backgroundColor: 'var(--surface)',
                  color: 'var(--text)',
                  border: '1px solid var(--border)',
                  fontSize: 'var(--type-body)',
                  fontWeight: 'var(--weight-medium)',
                  padding: '12px 22px',
                  borderRadius: 'var(--radius-btn)',
                  textDecoration: 'none',
                  cursor: 'pointer',
                }}
              >
                Send feedback
                <i className="fa-light fa-envelope" />
              </a>
            </div>
          </div>
        </section>

        {/* ── 07 · FEEDBACK ── */}
        <FeedbackSurvey />

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
