export const talkiatry = {
  name: "Talkiatry",
  role: "Senior Design Manager, Product Design",

  // Hero one-liner
  oneLiner: "10 years across healthcare, fintech, and consumer. Player-coach who still ships.",

  // Summary section — JD requirements mapped to proof
  summaryHeading: "What you need. What I've done.",
  summaryRows: [
    {
      ask: "Player-coach — hands-on design + team leadership",
      proof: "Promoted to Sr. Manager at Giant Eagle, leading 5+ designers across US and India. Still owned myPerks end-to-end — research through shipped product — while managing the team.",
    },
    {
      ask: "Patient & provider surfaces — booking flows, portals, provider tools, internal ops",
      proof: "Designed patient-facing and provider-facing products at Highmark Health and Arena Labs.",
    },
    {
      ask: "Articulate tradeoffs — explain design choices, influence cross-functional stakeholders",
      proof: "Hired to fix one billing page at Roadrunner. Ran a usability study, presented two options with data. Leadership chose the full platform overhaul.",
    },
    {
      ask: "Design systems in Figma — consistency and scalability across all products",
      proof: "50+ component Figma library at Roadrunner, consolidated 4 deliverable systems into one React-based Design Hub at Arena Labs.",
    },
    {
      ask: "AI to accelerate design — improve the design and development process",
      proof: "Built this portfolio and a lead-gen pipeline with Claude Code. It's how I prototype, synthesize research, and ship.",
    },
    {
      ask: "7+ years product design",
      proof: "10+ years across healthcare, fintech, consumer, and B2B SaaS.",
    },
    {
      ask: "2+ years people management",
      proof: "4+ years managing designers — hired, mentored, and grew a distributed team at Giant Eagle.",
    },
  ],

  sections: [
    {
      id: "player-coach",
      tocLabel: "Player-Coach Leadership",
      requirement: "Serve as both a hands-on designer and team leader — contributing directly to design work while setting vision and direction",
      title: "Promoted from designer to Sr. Manager — still hands-on",
      story: [
        "At Giant Eagle, I was promoted to Sr. Manager leading a team of 5+ designers distributed across the US and India — visual design, product design, design systems, and accessibility.",
        "Owned the myPerks loyalty redesign end-to-end — ran the usability study across 4M members, shipped the product. Directed Scan Pay & Go across mobile, web, and in-store. Established WCAG standards adopted org-wide. All while managing the team.",
      ],
      metrics: [
        { value: "384%", label: "Spend per member lift" },
        { value: "4M", label: "Members impacted" },
      ],
      testimonial: {
        quote: "Jenny deeply understands how research and design influence product strategy and flow into achieving measurable objectives. Strong UX leadership.",
        name: "Jeffrey Inscho",
        title: "Senior Product Manager · Giant Eagle",
      },
    },
    {
      id: "patient-provider",
      tocLabel: "Patient & Provider Design",
      requirement: "Own end-to-end design for patient booking flows, patient portal, provider software, and internal operations tools",
      title: "Designed for patients and the systems behind them",
      story: [
        "At Highmark Health, I designed and built UI components for member-facing insurance products. Healthcare UX has its own rules — HIPAA constraints, users in stressful moments, and interfaces where confusion means someone gives up on getting care.",
        "At Arena Labs, I designed Strive — a performance app for surgeons, ER nurses, and trauma teams. I owned both sides: patient-facing check-ins and biometric recommendations, plus provider-facing coaching dashboards and progress tracking. One design system across both.",
        "Designing for two stakeholders with competing needs is familiar. Patients seeking care. Clinicians managing workload. I've navigated this across healthcare, fintech, and consumer.",
      ],
      metrics: [
        { value: "97", label: "Usability issues identified" },
        { value: "3", label: "Time-aware states" },
      ],
    },
    {
      id: "tradeoffs",
      tocLabel: "Articulating Tradeoffs",
      requirement: "Speak to the impact of designs, explain design choices and tradeoffs — influence stakeholders across disciplines",
      title: "Hired to fix one billing page — made the case for a full platform overhaul",
      story: [
        "At Roadrunner, the brief was a single billing page. I started with research — usability study, stakeholder interviews, competitor benchmarking against Bill.com and Stripe. What I found went beyond one page: 4 applications, 28+ clicks per bill, 75% of bills identical to the previous month yet entered from scratch. The platform went down 1–2 times per week.",
        "I mapped the full workflow and brought two options to leadership. Option A: fix the one page — fast, low risk. Option B: full overhaul — slower, but eliminates the root cause. I showed the data behind each. They chose the overhaul.",
      ],
      metrics: [
        { value: "28→3", label: "Clicks per bill" },
        { value: "~6→1", label: "Minutes per bill" },
      ],
      testimonial: {
        quote: "Jenny pioneered a design system library that gave our web pages a unified look and feel. She is a force multiplier and could be an asset to any organization.",
        name: "Michael Quintero",
        title: "Software Engineer · Roadrunner Recycling",
      },
    },
    {
      id: "design-systems",
      tocLabel: "Design Systems at Scale",
      requirement: "Establish and maintain design systems in Figma for consistency and scalability across all products",
      title: "I build the system alongside the product — not after",
      story: [
        "At Roadrunner, I built a 50+ component Figma system with tokens, reusable components, and documentation — alongside the product, not as a separate workstream. Every new feature used existing patterns from day one.",
        "At Arena Labs, design was scattered across Figma docs, Notion, Storybook, and PDFs. I built a Design Hub — one React app that replaced all four. Stakeholders tap prototypes. Engineers inspect tokens. Research sits next to the design decisions it informed.",
      ],
      metrics: [
        { value: "50+", label: "Reusable components" },
        { value: "4→1", label: "Deliverable systems consolidated" },
      ],
    },
    {
      id: "ai-design",
      tocLabel: "AI-Accelerated Design",
      requirement: "Leverage AI to improve and accelerate product design and development — shape new ways of working across the design team",
      title: "I ship with AI",
      story: [
        "This portfolio is a React app I built with Claude Code — not a template, a working product.",
        "I also built a lead-generation pipeline that scrapes YC, Reddit, and Hacker News for buying signals — scores 405 leads, drafts personalized outreach, and runs the full pipeline in one command.",
        "For a design team, this means: research synthesis in hours instead of days, interactive prototypes instead of static mocks, and design-to-code with no handoff gap.",
      ],
      metrics: [
        { value: "405", label: "Leads scored in one command" },
      ],
    },
  ],

  howIWork: {
    eyebrow: "What I bring",
    heading: "What sets me apart",
    subheading: "",
    tiles: [
      {
        icon: "fa-light fa-rocket",
        heading: "0→1 experience",
        body: "First designer at Giant Eagle, sole designer at Arena Labs. Built the practice, the system, and the product at the same time.",
      },
      {
        icon: "fa-light fa-arrows-spin",
        heading: "Research → design → ship",
        body: "One person, no handoff gaps. I run my own studies, own the design system, and ship production code.",
      },
      {
        icon: "fa-light fa-chart-line",
        heading: "Business-first design",
        body: "Every design decision tied to conversion, retention, or revenue. The 384% lift at Giant Eagle started with a question about perceived value, not a redesign brief.",
      },
      {
        icon: "fa-light fa-wand-magic-sparkles",
        heading: "Vibe coding",
        body: "I build production React with Claude Code. Design and implementation in the same hands — no dev handoff.",
      },
    ],
  },

  close:
    "I'd love to talk about what I can bring to Talkiatry.",
};
