export const gcai = {
  name: "GC AI",
  role: "Principal Product Designer",

  oneLiner: "10 years across enterprise, healthcare, and fintech. First designer who builds the practice, the system, and the product at the same time.",

  summaryHeading: "What you need. What I've done.",
  summaryRows: [
    {
      ask: "First designer — build the design org from scratch",
      proof: "First UX hire at Giant Eagle. Sole designer at Arena Labs. Built the practice, design system, and product simultaneously — no playbook.",
    },
    {
      ask: "End-to-end ownership — concepts through pixel-perfect execution",
      proof: "Every project: research, design, system, and production code. Roadrunner: usability study → full platform overhaul. Arena Labs: research → prototype → design hub.",
    },
    {
      ask: "Design system in Figma — scalable, accelerates engineering",
      proof: "50+ component Figma library at Roadrunner. Consolidated 4 systems into 1 React-based Design Hub at Arena Labs — engineers copy code directly.",
    },
    {
      ask: "AI-native product design — agents, chat, trust signals",
      proof: "Arena Strive: 3 contextual states surfacing AI-driven recommendations. This portfolio: built with Claude Code. Proposed decision queue + confidence threshold UX for AI agents.",
    },
    {
      ask: "User research with enterprise users",
      proof: "Ran usability studies at Roadrunner (billing ops teams) and Giant Eagle (4M members). Research-first — every design decision traces to evidence.",
    },
    {
      ask: "Enterprise / B2B / regulated industries",
      proof: "Healthcare (Highmark, Arena Labs), fintech (MegPrime — SEC compliance, KYC), B2B SaaS (Roadrunner billing platform).",
    },
    {
      ask: "Code-based prototyping",
      proof: "I ship production React with Claude Code. The prototype is the product — no handoff gap.",
    },
    {
      ask: "5-10 years product design",
      proof: "10+ years. Giant Eagle (2013-2022), Highmark Health, Roadrunner, Arena Labs, MegPrime.",
    },
  ],

  sections: [
    {
      id: "first-designer",
      tocLabel: "First Designer",
      requirement: "Set the foundation for the design organization — influencing team culture, processes, and long-term vision",
      title: "First designer — built the practice and the product at the same time",
      story: [
        "At Giant Eagle, I was the first UX hire at the company. No design practice, no system, no research process. Built all three while shipping myPerks (384% spend per member lift) and Scan Pay & Go across mobile, web, and in-store.",
        "At Arena Labs, sole designer on limited hours. Built an AI-powered prototyping workflow with Claude Code to move 10x faster. Shipped onboarding flows, a design system, and a single-URL design hub that replaced Figma, Notion, Storybook, and PDF specs.",
      ],
      metrics: [
        { value: "384%", label: "Spend per member lift" },
        { value: "4→1", label: "Systems consolidated" },
      ],
      testimonial: {
        quote: "Jenny deeply understands how research and design influence product strategy and flow into achieving measurable objectives.",
        name: "Jeffrey Inscho",
        title: "Senior Product Manager · Giant Eagle",
      },
    },
    {
      id: "ai-design",
      tocLabel: "AI Product Design",
      requirement: "Define interaction patterns for novel AI experiences — chat, agents, document editing, search, and beyond",
      title: "I've designed AI experiences where the system thinks for the user",
      story: [
        "At Arena Labs, clinicians don't have time to browse a feature library during 12-hour shifts. I redesigned the homepage around 3 time-aware states — pre-shift, mid-shift, post-shift — each surfacing one recommendation based on Whoop biometric data. The app decides what to show, not the user.",
        "For an AI startup (Everant AI), I proposed 3 UX layers for long-running agent tasks: a decision queue to batch edge cases, a confidence threshold so the agent handles what it can and escalates what it can't, and a job dashboard so users check in on their terms.",
      ],
      metrics: [
        { value: "3", label: "Time-aware states" },
        { value: "97", label: "Usability issues identified" },
      ],
    },
    {
      id: "enterprise-trust",
      tocLabel: "Enterprise & Trust",
      requirement: "Create clarity from complexity — translating dense workflows into intuitive interfaces with trust signals",
      title: "Enterprise users need to trust the tool before they'll use it",
      story: [
        "At Roadrunner, billing reps bounced between 4 apps per invoice. 28+ clicks per bill. 75% of bills identical to last month — entered from scratch every time. The platform went down 1-2 times per week. Trust was broken.",
        "I started with research — usability study, stakeholder interviews, competitor benchmarking against Bill.com and Stripe. Then brought two options to leadership. They chose the full overhaul. Consistent patterns, predictable behavior, and a 50+ component library that enforced quality across every screen.",
      ],
      metrics: [
        { value: "28→3", label: "Clicks per bill" },
        { value: "~6→1", label: "Minutes per bill" },
      ],
      testimonial: {
        quote: "Jenny pioneered a design system library that gave our web pages a unified look and feel. She is a force multiplier.",
        name: "Michael Quintero",
        title: "Software Engineer · Roadrunner Recycling",
      },
    },
    {
      id: "design-systems",
      tocLabel: "Design Systems",
      requirement: "Build and maintain a scalable design system that accelerates engineering velocity",
      title: "I build the system alongside the product — not after",
      story: [
        "At Roadrunner, 50+ component Figma system with tokens, documentation, and patterns — built alongside the product. Every new feature used existing patterns from day one. 3x faster to build every page after.",
        "At Arena Labs, I built a Design Hub — one React app, one URL. Stakeholders tap through prototypes on their phone. Engineers hover over components and copy the code. Research sits next to the design decisions it informed.",
      ],
      metrics: [
        { value: "50+", label: "Reusable components" },
        { value: "3×", label: "Faster dev cycles" },
      ],
    },
    {
      id: "ships-code",
      tocLabel: "Ships Code",
      requirement: "Strong prototyping skills — comfort with code-based prototypes",
      title: "I ship with AI",
      story: [
        "This portfolio is a React app built with Claude Code. Data-driven — every case study pulls from one file. New company-specific pages take 30 minutes to create and deploy.",
        "At Arena Labs, I built the entire design hub in React + Vite with Claude Code. Functional prototype, token inspector, 97 usability issues tracked. What used to take weeks took days.",
      ],
      metrics: [
        { value: "30min", label: "Per new company page" },
        { value: "10×", label: "Faster design iteration" },
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
        icon: "fa-light fa-shield-check",
        heading: "Regulated industries",
        body: "Healthcare (HIPAA), fintech (SEC/KYC), enterprise ops. Complex compliance that users never see.",
      },
      {
        icon: "fa-light fa-robot",
        heading: "Vibe coding",
        body: "I build production React with Claude Code. Design and implementation in the same hands.",
      },
    ],
  },

  close:
    "First designer at Giant Eagle. Sole designer at Arena Labs. I'm ready to build GC AI's design practice from scratch.",
};
