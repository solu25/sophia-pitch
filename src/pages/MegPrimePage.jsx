import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

const techStack = ['Pencil', 'Figma', 'Claude Code', 'Claude'];

const metrics = [
  { value: '12', label: 'Strategy deck sections', detail: 'Persona, JTBD, principles, conversion map, retention model, open questions.' },
  { value: '6', label: 'Decision principles', detail: 'Applied to every design tradeoff — onboarding, copy, layout.' },
  { value: '1', label: 'Designer doing strategy + design', detail: 'No PM, no researcher — full ownership end-to-end.' },
];

const jobs = [
  {
    num: '01',
    label: 'Pay my bills without thinking',
    dimensions: [
      { type: 'Functional', text: 'Landlord gets exact $2,500, on time, every month. I get confirmation.' },
      { type: 'Emotional', text: 'Feel responsible, avoid late fees stress, not worry if "crypto thing" will work.' },
      { type: 'Social', text: "Maintain good tenant reputation. Don't look foolish if payment fails." },
    ],
  },
  {
    num: '02',
    label: 'Maximize value from an unavoidable expense',
    dimensions: [
      { type: 'Functional', text: "Earn $250–500/month in rewards. Track annual savings. Know it's real money." },
      { type: 'Emotional', text: 'Feel smart for finding this. Sense of "beating the system" legally.' },
      { type: 'Social', text: 'Tell friends. Be the person who discovered the life hack.' },
    ],
  },
];

const principles = [
  { num: '01', label: 'Bill Pay First, Crypto Second', detail: 'Users come to pay bills. Crypto is the rails, not the destination. USD-first interface always.' },
  { num: '02', label: 'Familiar Beats Novel',          detail: 'Match Venmo/Zelle patterns. Introduce crypto concepts only after core task succeeds.' },
  { num: '03', label: 'Clarity Over Surprise',         detail: 'High rewards trigger skepticism. Over-communicate: fees, timing, constraints, upfront.' },
  { num: '04', label: 'Reliability > Features',        detail: '1 payment type that works >> 5 payment types with bugs. Ship slow, earn trust.' },
  { num: '05', label: 'Optimize for 2nd Payment',      detail: "First payment proves it works. Second payment proves we've earned their habit." },
  { num: '06', label: 'Constraints Are Product',       detail: 'NYC/CA exclusion, $5K limits — surface early, explain why, set expectations.' },
];

const journey = [
  { num: '01', label: 'Awareness', detail: 'Needs trust signals.' },
  { num: '02', label: 'Consideration', detail: 'Needs proof.' },
  { num: '03', label: 'First Use', detail: 'Needs control.' },
  { num: '04', label: 'Validation', detail: 'Needs confirmation.' },
  { num: '05', label: 'Habit', detail: 'Needs reinforcement.' },
];

const testNext = [
  'Does the value-prop-first opening actually convert skeptics? Or do they want the catch explained before they will engage with the calculator? Five-user usability tests would answer this quickly.',
  'Is the 30-day reward delay tolerable? Or does the gap between paying and earning erode trust before the user gets to month two? Prototype test with a pending rewards dashboard.',
  "Does the ACH path's \"How it works\" screen do enough? Or do users still abandon when asked to gather landlord bank details? Funnel measurement on the explainer-to-completion drop.",
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
  margin: '40px 0 12px',
};
const body = {
  fontSize: 'var(--type-lead)', lineHeight: 'var(--leading-body)',
  color: 'var(--text)', margin: '0 0 16px', maxWidth: '760px',
};
const principleCallout = {
  display: 'inline-block',
  fontSize: 'var(--type-small)', fontFamily: 'var(--font-badge)',
  fontWeight: 'var(--weight-medium)', letterSpacing: 'var(--tracking-badge)',
  textTransform: 'uppercase',
  color: 'var(--accent)',
  borderLeft: '2px solid var(--accent)',
  paddingLeft: '12px',
  marginTop: '8px',
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
            fontSize: 'var(--type-small)', color: 'var(--muted)',
            textAlign: 'center', marginTop: '12px',
            lineHeight: 'var(--leading-body)', fontStyle: 'italic',
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
            overflowY: 'auto', cursor: 'zoom-out',
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

function ImagePlaceholder({ caption, slot }) {
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
        {slot ? `Screenshot ${slot}` : 'Screenshot placeholder'}
      </span>
      <p style={{
        fontSize: 'var(--type-body)', color: 'var(--muted)',
        margin: 0, textAlign: 'center', maxWidth: '560px',
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
      display: 'flex', flexDirection: 'column',
      borderTop: '1px solid var(--border)', marginTop: '16px',
    }}>
      {items.map((step, i) => (
        <div key={step.num || step.label} style={{
          display: 'flex', gap: '20px', alignItems: 'flex-start',
          padding: '16px 0',
          borderBottom: i < items.length - 1 ? '1px solid var(--border)' : 'none',
        }}>
          {step.num && (
            <span style={{
              color: 'var(--accent)', fontSize: 'var(--type-small)',
              fontFamily: 'var(--font-badge)', fontWeight: 'var(--weight-medium)',
              letterSpacing: 'var(--tracking-badge)',
              flexShrink: 0, minWidth: '40px', paddingTop: '2px',
            }}>
              {step.num}
            </span>
          )}
          <div style={{ flex: 1 }}>
            <span style={{
              fontSize: 'var(--type-lead)', fontWeight: 'var(--weight-medium)',
              color: 'var(--text)', display: 'block', marginBottom: '6px',
            }}>
              {step.label}
            </span>
            <span style={{
              fontSize: 'var(--type-body)', color: 'var(--muted)',
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

export default function MegPrimePage() {
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
            <span style={{ ...eyebrow, color: 'var(--accent)' }}>Case study · MegPrime Pay</span>
            <h1 style={{
              fontFamily: 'var(--font-sans)', fontSize: 'var(--type-h1)',
              fontWeight: 'var(--weight-medium)', lineHeight: 'var(--leading-h1)',
              letterSpacing: 'var(--tracking-h1)', color: 'var(--text)',
              margin: '0 0 20px', maxWidth: '820px',
            }}>
              Designing the onboarding for a crypto bill-pay product.
            </h1>
            <p style={{
              fontSize: 'var(--type-lead)', lineHeight: 'var(--leading-body)',
              color: 'var(--muted)', margin: '0 0 16px', maxWidth: '720px',
            }}>
              A new crypto-backed bill-pay startup asked me to design the onboarding flow for paying rent and mortgage. The hard part wasn't the design itself — it was helping a skeptical user feel comfortable with a payment method she had never used before, and building the strategic foundation the team did not yet have.
            </p>

            {/* Meta line */}
            <div style={{
              display: 'flex', flexWrap: 'wrap', gap: '6px',
              fontSize: 'var(--type-small)', fontFamily: 'var(--font-badge)',
              fontWeight: 'var(--weight-medium)', letterSpacing: 'var(--tracking-badge)',
              textTransform: 'uppercase', color: 'var(--muted)',
              marginBottom: '24px',
            }}>
              <span>Lead Designer · via Jointley</span>
              <span style={{ color: 'var(--border)' }}>·</span>
              <span>3 months</span>
              <span style={{ color: 'var(--border)' }}>·</span>
              <span>Foundational design phase</span>
            </div>

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
          </div>
        </section>

        {/* ── SUMMARY (no number, sits directly under the hero) ── */}
        <section style={sectionPad}>
          <div style={sectionInner}>
            <span style={eyebrow}>Summary</span>
            <p style={body}>
              A new crypto-backed bill-pay startup asked me to design the onboarding flow for paying rent and mortgage. Think Bilt Rewards, but powered by the company's own token instead of a credit card.
            </p>
            <p style={{ ...body, fontWeight: 'var(--weight-medium)' }}>
              The hard part was not the design itself. It was helping a skeptical user feel comfortable with a payment method she had never used before, and building the strategic foundation the team did not yet have. This case study walks through the research, principles, and design decisions behind that work.
            </p>
          </div>
        </section>

        {/* ── 01 · THE PRODUCT ── */}
        <section style={sectionPad}>
          <div style={sectionInner}>
            <span style={eyebrow}>01 · The product</span>
            <h2 style={h2}>Pay rent using crypto and earn rewards</h2>
            <p style={body}>
              MegPrime Pay is a rewards program built around the biggest recurring payments people make. Rent, mortgage, and eventually home purchases.
            </p>
            <p style={body}>
              The closest comparison is Bilt Rewards. Bilt lets you pay rent with a credit card and earn points. MegPrime is broader. You pay your rent and mortgage using MP tokens (MegPrime's own crypto), and earn cashback-style rewards every month at rates from 2 percent up to 20 percent at partner properties.
            </p>
            <p style={body}>
              Behind the scenes, the user funds their MegPrime account from a regular bank, dollars convert into MP tokens, MP tokens convert back into dollars when the landlord or mortgage company gets paid, and the user receives their reward 30 days later. The user never has to think about any of it. They just see "pay rent, earn rewards."
            </p>
            <p style={{ ...body, fontWeight: 'var(--weight-medium)' }}>
              The team was racing toward a super-MVP launch. Everything had to support shipping fast, not perfectly.
            </p>
            <ImagePlaceholder
              slot="1"
              caption='"Current MegPrime Offers" rewards page — the reward structure: 2% on standard rent, up to 20% at partner properties, mortgage rebates, and home purchase rewards.'
            />
          </div>
        </section>

        {/* ── 03 · THE DESIGN PROBLEM ── */}
        <section style={sectionPad}>
          <div style={sectionInner}>
            <span style={eyebrow}>02 · The design problem</span>
            <h2 style={h2}>The Design Problem</h2>
            <p style={body}>
              When you use Venmo, you already know how it works. Pick a person, enter an amount, tap send. Same with Bilt — connect a credit card, set your rent amount, done.
            </p>
            <p style={body}>
              MegPrime is different because money moves through more steps before reaching the landlord:
            </p>
            <p style={{
              ...body,
              fontFamily: 'var(--font-badge)',
              fontSize: 'var(--type-body)',
              padding: '16px 20px',
              backgroundColor: 'var(--surface)',
              border: '1px solid var(--border)',
              borderRadius: 'var(--radius)',
            }}>
              Your bank → MegPrime account → converted into MP tokens → converted back into dollars → sent to landlord
            </p>
            <p style={body}>
              Each of those steps is a place a user might pause, get nervous, or back out. And the user we were designing for is not a crypto enthusiast looking for a new toy. She is a renter or homeowner who saw a 10 percent reward and immediately thought:
            </p>
            <p style={{
              ...body,
              fontStyle: 'italic',
              borderLeft: '2px solid var(--accent)',
              paddingLeft: '20px',
              color: 'var(--muted)',
            }}>
              "This sounds too good to be true. What's the catch?"
            </p>
            <p style={{ ...body, fontWeight: 'var(--weight-medium)' }}>
              So the design problem: how do you onboard a skeptical user into a brand new kind of bill-pay product, without making her learn anything complicated before she sees the value? That question shaped every decision over the next three months.
            </p>
          </div>
        </section>

        {/* ── 04 · BUILDING THE FOUNDATION ── */}
        <section style={sectionPad}>
          <div style={sectionInner}>
            <span style={eyebrow}>03 · Building the foundation</span>
            <h2 style={h2}>Building the Foundation</h2>
            <p style={body}>
              When I joined MegPrime, the team had a business model and a Jira backlog, but no shared foundation. No persona, no principles, no decision framework. Every design conversation could be re-litigated by the loudest voice in the room.
            </p>
            <p style={{ ...body, fontWeight: 'var(--weight-medium)' }}>
              So before I designed a single screen, I built the foundation the team would use to make decisions. It took the form of a Product Strategy and UX Foundation deck, pulled from Jira, internal docs, competitor research, and market data, synthesized with Claude. The deck became the reference point for every design decision that followed.
            </p>

            {/* Foundation metrics */}
            <div style={{
              display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px',
              marginTop: '32px',
            }} className="megprime-metrics-grid">
              {metrics.map((m) => (
                <div key={m.label} style={{
                  backgroundColor: 'var(--surface)', borderRadius: 'var(--radius)',
                  padding: '24px', border: '1px solid var(--border)',
                }}>
                  <div style={{
                    fontFamily: 'var(--font-sans)', fontSize: 'var(--type-h2)',
                    fontWeight: 'var(--weight-medium)', lineHeight: 'var(--leading-h2)',
                    letterSpacing: 'var(--tracking-h2)', color: 'var(--text)',
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

            {/* Sub: Competitor research */}
            <h3 style={h3}>Competitor research: what to borrow and what to build new</h3>
            <p style={body}>
              I focused on Bilt Rewards — MegPrime's closest analog. The point wasn't to copy. It was to figure out what to borrow and what to build new.
            </p>
            <p style={body}>
              Reverse-engineering Bilt's three BillPay paths revealed the mechanic: a virtual ACH pass-through that instantly charges the user's credit card when the landlord's portal pulls. The account is always empty.
            </p>
            <p style={body}>
              <strong style={{ fontWeight: 'var(--weight-medium)' }}>What we borrowed:</strong> the virtual account pattern. The user adds MegPrime's routing + account number to her landlord's portal once; from there, the portal pulls automatically.
            </p>
            <p style={body}>
              <strong style={{ fontWeight: 'var(--weight-medium)' }}>What we built new:</strong> Bilt's instant settlement doesn't work on crypto rails. MegPrime's conversion chain (USD → MP → USDC → USD) takes days, so funds have to sit in the account before the portal pulls. That timing gap drove three design responses — a funding deadline, an "always target next month" rule, and a safety-net pattern where the user's old payment method stays active until MegPrime is fully funded.
            </p>
            <ImageBlock
              src="/megprime-bilt-ux.png"
              alt="Bilt UX competitor research — three rent payment paths mapped at user-facing and backend levels."
              caption="Bilt UX research — three BillPay paths mapped at user-facing and backend levels. The virtual-account pattern was borrowable; the instant-settlement timing was not."
            />

            {/* Sub: The Value Optimizer */}
            <h3 style={h3}>The Value Optimizer</h3>
            <p style={body}>
              Our primary persona is the Value Optimizer.
            </p>
            <p style={{ ...body, fontWeight: 'var(--weight-medium)' }}>
              When she sees a 10 percent cashback offer on her rent, her first thought is suspicion: <em>"What's the catch?"</em>
            </p>
            <ImageBlock
              src="/megprime-persona.png"
              alt="The Value Optimizer — primary persona block."
              caption={`"Who We're Building For" — primary persona designed to receive 100 percent of design attention.`}
            />

            {/* Sub: Two JTBD */}
            <h3 style={h3}>Two Jobs to be Done</h3>
            <p style={body}>
              Users "hire" the product to do a job. Understand the job, not just the feature request.
            </p>
            <div style={{
              display: 'flex', flexDirection: 'column',
              borderTop: '1px solid var(--border)', marginTop: '16px',
            }}>
              {jobs.map((job, i) => (
                <div key={job.num} style={{
                  padding: '20px 0',
                  borderBottom: i < jobs.length - 1 ? '1px solid var(--border)' : 'none',
                }}>
                  {/* Job header */}
                  <div style={{
                    display: 'flex', gap: '20px', alignItems: 'baseline',
                    marginBottom: '16px',
                  }}>
                    <span style={{
                      color: 'var(--accent)', fontSize: 'var(--type-small)',
                      fontFamily: 'var(--font-badge)', fontWeight: 'var(--weight-medium)',
                      letterSpacing: 'var(--tracking-badge)',
                      flexShrink: 0, minWidth: '40px',
                    }}>
                      {job.num}
                    </span>
                    <span style={{
                      fontSize: 'var(--type-lead)', fontWeight: 'var(--weight-medium)',
                      color: 'var(--text)',
                    }}>
                      {job.label}
                    </span>
                  </div>
                  {/* Dimensions */}
                  <div style={{
                    paddingLeft: '60px',
                    display: 'flex', flexDirection: 'column', gap: '10px',
                  }}>
                    {job.dimensions.map((dim) => (
                      <div key={dim.type} style={{
                        display: 'flex', gap: '16px', alignItems: 'flex-start',
                      }}>
                        <span style={{
                          color: 'var(--accent)', fontSize: 'var(--type-small)',
                          fontFamily: 'var(--font-badge)', fontWeight: 'var(--weight-medium)',
                          letterSpacing: 'var(--tracking-badge)',
                          textTransform: 'uppercase',
                          flexShrink: 0, minWidth: '90px',
                          paddingTop: '2px',
                        }}>
                          {dim.type}
                        </span>
                        <span style={{
                          fontSize: 'var(--type-body)', color: 'var(--muted)',
                          lineHeight: 'var(--leading-body)',
                        }}>
                          {dim.text}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <p style={{ ...body, marginTop: '24px', fontWeight: 'var(--weight-medium)' }}>
              The insight: Job 1 has to be solved before Job 2 can sell. If the user is afraid her rent will fail, no reward will get her to try. The onboarding had to lead with reliability, not rewards.
            </p>

            {/* Sub: Six principles */}
            <h3 style={h3}>Six principles as decision rules</h3>
            <p style={body}>
              When the team disagreed, we argued principles, not opinions.
            </p>
            <NumberedList items={principles} />
            <ImagePlaceholder
              slot="4"
              caption='"Product & UX Principles" — six rules used to settle design tradeoffs. When the team disagreed, we argued principles, not opinions.'
            />

            {/* Sub: User journey */}
            <h3 style={h3}>The user journey</h3>
            <p style={body}>
              The first rent payment moves through five emotional states. Each state has its own design needs.
            </p>
            <NumberedList items={journey} />
            <ImagePlaceholder
              slot="5"
              caption='"End-to-End Core User Journey" — five emotional states from Awareness to Habit.'
            />
            <ImagePlaceholder
              slot="6"
              caption='"Bill Pay Rewards User Journey" — deeper four-phase research artifact (Discovery, Consideration, Activation, Retention) with user quotes and success metrics per phase.'
            />

            {/* Sub: What I did not know */}
            <h3 style={h3}>What I did not know</h3>
            <p style={body}>
              The last section of the foundation was a list of open questions and alignment risks. User research gaps, technical unknowns, business model risks, team alignment risks.
            </p>
            <p style={{ ...body, fontWeight: 'var(--weight-medium)' }}>
              Naming these out loud was uncomfortable. It would have been easier to pretend we had it all figured out. But the team did not need a confident deck. It needed an honest one. Every confident claim in the foundation was paired with an admission of what was still unknown.
            </p>
          </div>
        </section>

        {/* ── 05 · DESIGNING ON TOP OF THE FOUNDATION ── */}
        <section style={sectionPad}>
          <div style={sectionInner}>
            <span style={eyebrow}>04 · Designing on top of the foundation</span>
            <h2 style={h2}>Designing on Top of the Foundation</h2>
            <p style={body}>
              The bill-pay onboarding had to take a skeptical user from "what's the catch?" to a scheduled payment, without asking her to learn how crypto works. Every step ties back to one of the six principles.
            </p>

            {/* Sub: Value prop */}
            <h3 style={h3}>1. Value prop and reward calculation</h3>
            <p style={body}>
              The first screen leads with the reward, not account creation. The user picks her property type (owner, renter, partner property), each showing the reward rate up front. Then she calculates her own reward based on her actual rent.
            </p>
            <span style={principleCallout}>Principle · Bill Pay First, Crypto Second</span>
            <p style={{ ...body, marginTop: '12px' }}>
              No mention of crypto, tokens, or conversion. She is paying her rent and earning rewards. That is the whole frame.
            </p>
            <ImagePlaceholder
              slot="7"
              caption='"Value Prop → Calculate Rewards" — the flow opens with the reward, not the sign-up. Property type sets eligibility up front, and the calculator turns an abstract promise into a personal one.'
            />

            {/* Sub: Gather bill data */}
            <h3 style={h3}>2. Gather bill data</h3>
            <p style={body}>
              Bills look simple from the outside. In practice, the user could be paying a small landlord or a large management company, through a portal, cash, check, Zelle, or Venmo. Each combination produces a different path for getting the data we need. I mapped the decision space before designing the screens. The flow stays simple. The complexity lives in the logic underneath.
            </p>
            <span style={principleCallout}>Principle · Familiar Beats Novel</span>
            <p style={{ ...body, marginTop: '12px' }}>
              The user does not see the matrix. She sees a three-step add-a-bill flow.
            </p>
            <ImagePlaceholder
              slot="8"
              caption='"Gather Bill Data" — decision matrix mapping the full space of how users actually pay their bills today, with the simple add-a-bill flow that resulted.'
            />

            {/* Sub: Add mortgage */}
            <h3 style={h3}>3.1 Add mortgage bill</h3>
            <p style={body}>
              Mortgage setup runs four steps: property address, lender info, bank details, and payment schedule, with a final review. The review screen carries the most weight. Every detail is shown back to the user, including the full fee structure (swap fee, conversion fee, who pays what) and the reward projection.
            </p>
            <span style={principleCallout}>Principle · Clarity Over Surprise</span>
            <p style={{ ...body, marginTop: '12px' }}>
              Fees, timing, and math are visible before she confirms.
            </p>
            <ImagePlaceholder
              slot="9"
              caption='"Add Mortgage Bill" — four steps to set up a mortgage. The review screen reveals the full fee structure and reward projection before the user commits.'
            />

            {/* Sub: Add rent */}
            <h3 style={h3}>3.2 Add rent</h3>
            <p style={body}>
              Rent setup uses the same flow shape as mortgage. Address, payee, bank details, schedule, review. The eligibility logic and recipient differ, but the path she walks through is identical.
            </p>
            <span style={principleCallout}>Principle · Reliability Beats Features</span>
            <p style={{ ...body, marginTop: '12px' }}>
              One flow that handles both bills correctly beats two parallel flows that drift apart.
            </p>
            <ImagePlaceholder
              slot="10"
              caption='"Add Rent" — rent setup mirrors mortgage. The user is using one product, not two.'
            />

            {/* Sub: ACH path */}
            <h3 style={h3}>The ACH path</h3>
            <p style={body}>
              For users whose landlords do not use a payment portal, MegPrime needs the landlord's bank details to push payment directly via ACH. Most users have never had to ask their landlord for that information, so the flow opens with a "How it works" explainer. Scenario states handle edge cases: insufficient MP balance, unlinked bank, auto-fund toggle.
            </p>
            <span style={principleCallout}>Principle · Constraints Are Product</span>
            <p style={{ ...body, marginTop: '12px' }}>
              The harder path is acknowledged and designed for, not hidden.
            </p>
            <ImagePlaceholder
              slot="11"
              caption='"ACH Path" — alternate path for users without landlord portals. The "How it works" screen opens the flow so the user understands what she is being asked to do before she does it.'
            />
          </div>
        </section>

        {/* ── 06 · AI AS THE FORCE MULTIPLIER ── */}
        <section style={sectionPad}>
          <div style={sectionInner}>
            <span style={eyebrow}>05 · AI as the force multiplier</span>
            <h2 style={h2}>AI as the Force Multiplier</h2>
            <p style={body}>
              A 3-month engagement to build the strategic foundation, design the onboarding flow, and explore the ACH path would normally take a product manager, a researcher, and a designer working together. I did it solo. AI is how.
            </p>

            <h3 style={h3}>Claude for strategy and synthesis</h3>
            <p style={body}>
              The strategy deck pulled from Jira tickets, internal docs, market data, and competitor research. Sorting through that by hand would have taken weeks. Claude helped me synthesize it in days.
            </p>
            <p style={{ ...body, fontWeight: 'var(--weight-medium)' }}>
              I used it to find patterns in the Jira backlog, draft the first version of the persona, structure the JTBD framing, and pressure-test the six principles. Claude did not invent the thinking. It absorbed the grunt work so the thinking could happen faster.
            </p>

            <h3 style={h3}>Claude Code and Pencil for design iteration</h3>
            <p style={body}>
              For the design work, I moved between Pencil and Claude Code. Pencil for laying out the flow and exploring screen-level decisions. Claude Code for turning sketches into working components when I needed to feel the interaction, not just draw it.
            </p>
            <p style={{ ...body, fontWeight: 'var(--weight-medium)' }}>
              This collapsed the design-to-prototype loop from days to hours. When the team needed to see a flow, I could ship a working version instead of a static mockup. When a decision was hard, I could test it interactively before committing.
            </p>

            <h3 style={h3}>What this enabled</h3>
            <p style={body}>
              The real win was not speed for its own sake. It was the ability to operate at strategy depth and shipping speed at the same time.
            </p>
            <p style={{ ...body, fontWeight: 'var(--weight-medium)' }}>
              In a traditional team setup, the strategy work happens first and the design work happens after. The two functions trade off against each other. With AI as infrastructure, that tradeoff disappears. The strategy deck and the screens were built in parallel, each informing the other.
            </p>

            <h3 style={h3}>A note on this being a first</h3>
            <p style={body}>
              This was the first engagement where I leaned this heavily on AI. Pencil for design exploration, Claude for research synthesis and strategy drafting, Perplexity for market and competitor scans. I came out of corporate, where the pace is structured and the timelines are months. Startups care about speed, and the gap between "we should test this" and "we shipped this" has to be days, not quarters.
            </p>
            <p style={body}>
              What surprised me was how much heavy lifting Claude could absorb. The synthesis, the first drafts, the iteration cycles. My job was the 20 to 30 percent on top: knowing what to ask, judging which outputs were useful, connecting the dots between research and design, and holding the line on the principles when the easy answer was a generic pattern.
            </p>
            <p style={{ ...body, fontWeight: 'var(--weight-medium)' }}>
              That smaller percentage is not less work. It is the whole job. AI does not replace it. Without it, the output is noise. This engagement was the start of a different relationship with the work. I do not design the way I did in corporate anymore.
            </p>
          </div>
        </section>

        {/* ── 07 · WHAT SHIPPED AND WHAT'S NEXT ── */}
        <section style={sectionPad}>
          <div style={sectionInner}>
            <span style={eyebrow}>06 · What shipped and what's next</span>
            <h2 style={h2}>What Shipped and What's Next</h2>

            <h3 style={h3}>What shipped</h3>
            <p style={body}>
              Three months of work produced a strategic foundation, a designed onboarding flow for rent and mortgage, an alternate ACH path, and the supporting documentation for engineering and product to pick up after the engagement closed.
            </p>
            <p style={{ ...body, fontWeight: 'var(--weight-medium)' }}>
              What did not happen was launch. The contract ended before the product reached real users, so there are no conversion metrics, retention numbers, or NPS scores to point to. The case study you just read is about the work itself, not the outcome. That is an honest limitation. I would rather show real work without manufactured results than borrow numbers I cannot defend.
            </p>

            <h3 style={h3}>What I would test next</h3>
            <p style={body}>
              The strategy deck included a list of open questions. The ones I would prioritize testing first:
            </p>
            <ul style={{
              listStyle: 'none', padding: 0, margin: '8px 0 16px',
              borderLeft: '2px solid var(--accent)', paddingLeft: '20px',
              maxWidth: '760px',
            }}>
              {testNext.map((q) => (
                <li key={q} style={{
                  fontSize: 'var(--type-body)', color: 'var(--muted)',
                  lineHeight: 'var(--leading-body)', marginBottom: '14px',
                }}>
                  {q}
                </li>
              ))}
            </ul>
            <p style={{ ...body, fontWeight: 'var(--weight-medium)' }}>
              These are the questions I left on the table. They are also the questions I would want a senior designer at the next company to be asking on day one.
            </p>

            <h3 style={h3}>Two lessons</h3>
            <p style={{ ...body, fontWeight: 'var(--weight-medium)' }}>
              When there is no precedent, principles do the work patterns can't.
            </p>
            <p style={body}>
              Most product design borrows established patterns. Venmo for payments, Stripe for checkout, Linear for productivity. When you are designing for rails that do not exist anywhere else, there is nothing to copy. The only thing that holds the work together is a set of decision rules everyone on the team agrees to. The six principles were not decoration on a slide. They were the operating system for every screen, every flow, and every disagreement. Without them, this product would have been re-litigated weekly.
            </p>

            <p style={{ ...body, marginTop: '32px', fontWeight: 'var(--weight-medium)' }}>
              Strategy depth and shipping speed are no longer tradeoffs.
            </p>
            <p style={body}>
              Traditional product design assumed you either went deep on research and shipped slowly, or you shipped fast and skipped the foundation. AI tooling collapses that tradeoff. One designer with Claude, Pencil, and Claude Code can do strategy work that used to require a team, then ship it into screens in the same cycle. This case study is itself an example. The strategic foundation and the design work were not sequential. They informed each other in real time, and the engagement produced both within the same three months.
            </p>
            <p style={{ ...body, fontStyle: 'italic', color: 'var(--muted)' }}>
              That is the kind of work I want to keep doing.
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
