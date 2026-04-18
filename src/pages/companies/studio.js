export const studio = {
  name: "Creative Studio",
  role: "Lead/Senior Product Designer, Freelance",

  subtitle: "20 years building what doesn't exist yet — across consumer products, loyalty, fintech, and healthcare.",

  tags: ["0→1", "Consumer Products", "Design Systems", "Research", "AI Prototyping", "React"],

  sections: [
    {
      id: "zero-to-one",
      tocLabel: "0→1 Product Design",
      requirement: "Demonstrated success driving 0→1 initiatives and launching new products from concept to ship",
      title: "First designer. No playbook. Built the practice, the system, and the product.",
      story: [
        "At Giant Eagle, I was the first UX hire. There was no design team, no research practice, no system. I built all three simultaneously while shipping the product that would reach four million members.",
        "At Arena Labs, I took a $1,000/person coaching program and redesigned it as a $30/month SaaS product. Different business model, different relationship with the app, completely different UX. Three time-aware homepage states, biometric integration, one recommendation per state. From feature library to personalized system.",
        "I built a freelance lead-gen tool with Claude Code — scrapes four sources, scores 405 leads, drafts outreach in one command. Concept to working product in a weekend. That's what 0→1 looks like when you own research, design, and code.",
      ],
      metrics: [
        { value: "4M", label: "Users (Giant Eagle)" },
        { value: "0→1", label: "Design practice built" },
        { value: "$1K→$30", label: "Coaching → SaaS (Arena Labs)" },
        { value: "1 cmd", label: "Lead-gen pipeline" },
      ],
    },
    {
      id: "craft",
      tocLabel: "Craft & Execution",
      requirement: "Exceptional craft across UX and UI — with strong attention to flows, hierarchy, interaction design, motion, and systems thinking",
      title: "I sweat the details because the details are the product.",
      story: [
        "myPerks: Giant Eagle's loyalty program was technically generous. Customers couldn't feel it. The redesign wasn't a new program — it was a new hierarchy. What you see first, what you see next, when you see the reward. Same program, surfaced differently. Spend went up 384%.",
        "MegPrime: A crypto rent-payments app for mainstream users, not crypto natives. USDC, KYC, SEC disclosures, state-by-state licensing underneath. The design challenge wasn't managing that complexity — it was making it disappear. Users see rent payment and a growing balance. Nothing else.",
        "Navigation: Giant Eagle's nav mirrored the org chart, not customer behavior. Rebuilt as a unified flyout from one codebase — analytics-driven IA, top tasks surfaced, 278% increase in cake ordering clicks alone.",
      ],
      metrics: [
        { value: "384%", label: "Spend per member" },
        { value: "20→5", label: "KYC screens (MegPrime)" },
        { value: "278%", label: "Cake ordering clicks" },
        { value: "15%", label: "Conversion lift (Curbside)" },
      ],
      testimonial: {
        quote: "Jenny deeply understands how research and design influence product strategy and flow into achieving measurable objectives. Strong UX leadership.",
        name: "Jeffrey Inscho",
        title: "Product Manager · REI",
      },
    },
    {
      id: "systems",
      tocLabel: "Systems Thinking",
      requirement: "Strong systems thinker who can integrate individual feature needs into a cohesive, scalable experience",
      title: "50+ components at Roadrunner. Unified codebase at Giant Eagle. Systems that outlast the project.",
      story: [
        "At Roadrunner, I built a 50+ component design system alongside the product — not as a separate workstream, but as the foundation everything shipped on. Every new feature used existing patterns. Engineers stopped guessing.",
        "At Giant Eagle, mobile and desktop navigation had drifted into two separate codebases. Every update had to be made twice. I redesigned as a unified flyout from one codebase — fixed the IA and cleared years of engineering debt in the same move.",
        "At Arena Labs, I built a Design Hub — one React app that replaced Figma docs, Notion wikis, Storybook, and PDF specs. Stakeholders tap prototypes. Engineers inspect tokens. Research lives next to the decisions it shaped. One URL for everything.",
      ],
      metrics: [
        { value: "50+", label: "Reusable components" },
        { value: "4", label: "Deliverable systems replaced" },
        { value: "1", label: "Unified codebase" },
        { value: "3", label: "Design system tiers" },
      ],
      testimonial: {
        quote: "Jenny pioneered a design system library that gave our web pages a unified look and feel. She is a force multiplier and could be an asset to any organization.",
        name: "Michael Quintero",
        title: "Software Engineer · Roadrunner Recycling",
      },
    },
    {
      id: "fast-moving",
      tocLabel: "Speed & Ambiguity",
      requirement: "Comfort operating in fast-moving environments with evolving priorities",
      title: "Limited hours. Three industries. I built one system instead of four.",
      story: [
        "As a fractional designer, I work across multiple clients simultaneously — consumer, fintech, healthcare. Priorities shift weekly. The only way to move fast without breaking things is to build systems that absorb change.",
        "At Arena Labs, I was the sole designer on limited contract hours. I couldn't afford four deliverable systems — Figma docs, Notion research, Storybook components, PDF specs. So I built one React app that replaced all of them. ~15K lines. Three Git remotes. 97 usability issues tracked with localStorage.",
        "This portfolio site is a React + Vite app I built with Claude Code. Every case study, metric, and testimonial comes from a single data source. New company page? New data file, same system. I prototype in code because the prototype is the product.",
      ],
      metrics: [
        { value: "~15K", label: "Lines of React (Design Hub)" },
        { value: "97", label: "Usability issues tracked" },
        { value: "3", label: "Industries simultaneously" },
        { value: "405", label: "Leads scored in one command" },
      ],
    },
    {
      id: "communication",
      tocLabel: "Communication & Leadership",
      requirement: "Excellent communication skills with experience presenting to executives and external clients",
      title: "Data to leadership as a choice, not a problem. They chose the overhaul.",
      story: [
        "At Roadrunner, I was hired to fix one billing page. Before I touched a screen, I ran a 142-person usability study. The data told a bigger story — reps bouncing between four apps, 28 clicks per bill, platform crashing weekly.",
        "I presented two paths to leadership: the scoped fix and the full overhaul, with data behind each. No drama, no advocacy. Just options and evidence. They chose the overhaul. Four workstreams. Just engineering and me.",
        "At Giant Eagle, I ran the first unmoderated UserTesting studies the company had ever done. Same-day results. The findings didn't just inform the redesign — they changed how the team thought about testing. Research became a habit, not a phase.",
      ],
      metrics: [
        { value: "142", label: "Person usability study" },
        { value: "28→3", label: "Clicks per bill" },
        { value: "40%", label: "Fewer manual errors" },
        { value: "6→1min", label: "Per entry" },
      ],
    },
  ],

  close:
    "I've spent 20 years building products from nothing — research, design, systems, code. If you need a senior designer who ships, let's talk.",
};
