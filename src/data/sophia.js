// Single source of truth for Sophia's portfolio content.
// Every field is a TODO placeholder — fill in your own values.
// Keep the shape (keys / nesting) identical; components rely on it.
// For arrays (selectedProjects, experience, testimonials, etc.), duplicate
// the single template entry to add more items.

export const sophia = {
  name: "Sophia Lu",
  title: "Sophia's Product Interface LAB",
  tagline: "Welcome to the execution lab.",
  summary:
    "Where design systems meet AI engineering. Testing interface ideas, building frontends, and deploying autonomous workflows in real-time.",
  contact: {
    email: "lusophia95@gmail.com",
    linkedin: "linkedin.com/in/sophialu520",
    portfolio: "sophialu.me",
  },
  differentiators: [
    {
      id: "ai-agents",
      number: "01",
      icon: "fa-light fa-bolt",
      title: "Turning AI concepts into working layouts, fast.",
      description:
        "You don't have time for slow, theoretical wireframes. I specialize in taking raw AI features and quickly translating them into clean, usable layouts. I help you get new ideas out of Figma and onto the screen in days, not months.",
    },
    {
      id: "designer-sells",
      number: "02",
      icon: "fa-light fa-chart-line",
      title: "Business and growth strategy.",
      description:
        "I don't just focus on how an app looks; I focus on how a business runs. I help founders map out pricing pages, find friction points where users get confused, and design the product to drive actual retention and cash flow.",
    },
    {
      id: "production-code",
      number: "03",
      icon: "fa-light fa-code",
      title: "Clean layout code, no dev handoff.",
      description:
        "I don't just hand over a static picture of a design and leave the hard work to your developers. I turn my layouts into clean, responsive HTML and Tailwind components that are ready to drop straight into your team's repository.",
    },
    {
      id: "content-closes",
      number: "04",
      icon: "fa-light fa-tower-broadcast",
      title: "Building an audience and distribution.",
      description:
        "A beautiful product is useless if nobody knows it exists. I know how to get eyes on a project. I write newsletters, create content that drives real traffic, and build automated systems to help attract and onboard your users.",
    },
  ],
  selectedProjects: [
    {
      id: "harvey-pmmca",
      company: "Harvey Lee / PMMCA",
      title: "PMMCA: A platform that converted, a community that grew",
      role: "Lead Product Designer + Frontend",
      tags: ["Marketing Site", "Design System", "Framer", "Animation", "Solo Build"],
      tools: ["Figma", "Framer", "Claude Code"],
      heroImage: "/PMMCA.png",
      caseStudyPage: "/pmmca",
      headline:
        "Product Marketing Manager Career Accelerator needed branding and strategy help. I designed and shipped the full site — pricing, course tabs, testimonials, FAQ, analytics — with a custom design system and animations, no dev handoff.",
      outcome:
        "Shipped solo in weeks. 3 high-ticket buyers in the first wave. 5,000+ newsletter subscribers. Harvey now extends the platform himself.",
      metrics: [
        { value: "5,000+", label: "Newsletter subscribers" },
        { value: "3", label: "High-ticket buyers, first wave" },
        { value: "0", label: "Developer handoffs" },
      ],
      caseStudy: {
        insight: "PMMCA didn't need a marketing page — it needed a conversion engine that could justify a high-ticket investment and scale without me.",
        story: [
          "Harvey Lee was launching PMMCA (Product Marketing Manager Career Accelerator) and needed a conversion engine, not a marketing page. The site had to do real work: communicate pricing tiers clearly enough to justify a high-ticket investment, structure the course content so it felt premium and earned, close objections through testimonials and FAQ, and anchor a growing community of founding members. Everything had to ship fast enough to capture early launch momentum — and polished enough to signal the caliber of what buyers were paying for.",
          "Shipped solo in weeks, not months. The landing page converted 3 high-ticket buyers in its first wave, and the newsletter funnel I helped design and grow added 5,000+ subscribers — turning the site into a real top-of-funnel engine, not just a checkout page. Harvey now extends the platform himself using the documented design system, no designer bottleneck as the business scales.",
        ],
        featuresLabel: "KEY INSIGHTS",
        features: [
          { icon: "fa-light fa-envelope-open-text", label: "5,000+ newsletter subscribers", detail: "Turned the site into a top-of-funnel growth engine, not just a checkout page." },
          { icon: "fa-light fa-circle-dollar", label: "Converted 3 high-ticket buyers", detail: "The landing page didn't just look good — it closed in its first wave." },
          { icon: "fa-light fa-infinity", label: "Built to scale without me", detail: "Harvey extends the platform himself with the documented design system. No ongoing designer dependency." },
        ],
        screens: [],
      },
    },
    {
      id: "scout",
      company: "Hema Designs (internal)",
      title: "Scout — an AI agent that turned 10 hours of research into 30 minutes",
      role: "Founder + Builder",
      tags: ["AI Agent", "Internal Tool", "Sales Ops", "Automation", "0→1"],
      tools: ["Claude Code", "Railway", "Telegram", "MCP", "Python", "OpenClaw"],
      heroImage: "/ScoutImage.png",
      caseStudyPage: "/scout",
      headline:
        "Finding the right startups to pitch was eating a full day every week. I built Scout — an AI research agent — to do it in minutes and flag only the founders worth a real conversation.",
      outcome:
        "Research dropped from 8–10 hours a week to under 30 minutes. From \"50 maybes\" to \"5 strong fits, ranked — with reasons.\"",
      metrics: [
        { value: "10 hrs → 30 min", label: "Weekly research time" },
        { value: "~500 hrs", label: "Reclaimed per year" },
        { value: "50 → 5", label: "Maybes to strong fits" },
      ],
      caseStudy: {
        insight: "The work wasn't designing pitches — it was the 8–10 hours of weekly research that came before. Automate the research, and the sales calls get sharper too.",
        story: [
          "Hema Designs targets seed-to-Series A founders in underserved US markets. The research to find them is brutal — pulling funding announcements, cross-referencing locations, checking team size, reading between the lines of LinkedIn bios to figure out who actually needs product design help. Biz dev was eating 8–10 hours every week. The work wasn't scaling.",
          "Research dropped from 8–10 hours a week to under 30 minutes. Went from \"50 maybes\" to \"5 strong fits, ranked — with reasons.\" The real unlock wasn't time saved; it was better pitch conversations, because every call started with why the founder would care.",
        ],
        featuresLabel: "KEY INSIGHTS",
        features: [
          { icon: "fa-light fa-screwdriver-wrench", label: "Designers don't wait for engineers anymore", detail: "No VA, no data service. I designed, built, and shipped Scout myself in a week." },
          { icon: "fa-light fa-clock-rotate-left", label: "10 hours → 30 minutes per week", detail: "Reclaimed ~500 hours a year." },
          { icon: "fa-light fa-bolt", label: "The agent is the multiplier, not the work", detail: "Scout doesn't replace sales calls. It replaces the research that made them inefficient." },
        ],
        screens: [],
      },
    },
    {
      id: "zanshin",
      company: "Hema Designs / Zanshin",
      title: "Zanshin — The Anti-Kanban team execution engine.",
      role: "Founder · Full-Stack Design + Code",
      tags: ["Micro-SaaS", "Anti-Kanban", "Solo Build", "0→1"],
      tools: ["Vibe Code", "Wardian", "Supabase", "Gemini", "ChatGPT", "Perplexity", "Vercel"],
      headline:
        "Traditional project management tools are where shipping momentum goes to die. I built Zanshin to completely replace messy Kanban columns with a dead-simple daily execution timeline. It strips out the bloat and locks teams onto three things: a flat daily checklist, an integrated feed to instantly showcase shipped code, and a weekly macro-alignment anchor.",
      outcome: "",
      metrics: [
        { value: "100% Native", label: "Designed & coded in-browser" },
        { value: "Real-Time", label: "Supabase data listeners" },
        { value: "0 to Alpha", label: "Shipped solo in days" },
      ],
      caseStudy: {
        insight: "",
        story: [],
        featuresLabel: "KEY INSIGHTS",
        features: [],
        screens: [],
      },
    },
  ],
  experience: [
    {
      id: "jointley",
      company: "Jointley",
      role: "Design Partnerships Manager",
      type: "Full-time",
      period: "Jan 2026–Present",
      location: "Remote / NYC",
      highlights: [
        "Drove client acquisition alongside design work — sales calls, biz dev, and partner pipeline for the studio.",
      ],
      tags: ["Venture Studio", "Fintech", "Crypto", "Design System", "Partnerships"],
    },
    {
      id: "hema",
      company: "Hema Designs",
      role: "Co-Founder",
      type: "Full-time",
      period: "Dec 2024–Present",
      location: "Pittsburgh, PA (remote-friendly)",
      highlights: [
        "Run the full stack of a fractional product design consultancy helping seed and Series A startups launch or redesign their products — shipping production-ready React and Framer components with no developer handoff.",
        "Shipped OpenClaw, an AI agent platform with 2 production agents in active use by clients for research and content creation.",
        "Drove growth through LinkedIn content (top post hit 36K+ impressions) and 10 long-form Substack articles teaching designers how to vibe code — roughly half of new clients now come through inbound.",
      ],
      tags: ["0→1", "Founder", "AI Agents", "Product Strategy", "GTM", "Content"],
    },
    {
      id: "tutorme",
      company: "TutorMe (Techstars F24)",
      role: "Founding Designer",
      type: "Full-time",
      period: "Feb 2024 – Jan 2025",
      location: "Remote",
      highlights: [
        "Founding designer for a Techstars Fall '24 accelerator company connecting high schoolers with on-demand tutoring — solving the gap between the help students need and what their schools can provide.",
        "Shipped the first live version of the platform and designed the end-to-end onboarding flow.",
        "Supported Demo Day pitch materials during the 3-month accelerator.",
      ],
      tags: ["EdTech", "Generative AI", "LLM", "Techstars", "0→1"],
    },
    {
      id: "cotiviti",
      company: "Cotiviti",
      role: "Product Designer",
      type: "Full-time",
      period: "Jan 2021 – Jun 2023",
      location: "Remote, Utah",
      highlights: [
        "Directed end-to-end development of a subrogation initiative projected to generate $400M in annual revenue — 45% increase in overall company revenue.",
        "Spearheaded a healthcare policy application projected to reduce client onboarding costs by 20%, policy maintenance costs by 30%, and time spent adopting new policies by 35%.",
        "Led the expansion of the design system to prioritize accessibility and usability — 25% increase in user satisfaction ratings.",
      ],
      tags: ["Healthcare", "B2B SaaS", "Design System", "Accessibility"],
    },
    {
      id: "hyperflyer",
      company: "Hyper Flyer",
      role: "Product Designer",
      type: "Contract",
      period: "Aug 2020 – Nov 2020",
      location: "Remote, CA",
      highlights: [
        "Streamlined online food ordering by designing a cross-platform consumer product integrated with major delivery services — 15% increase in orders for local small businesses.",
        "Conducted user research and interviews to inform design decisions — 25% increase in active users on the platform.",
      ],
      tags: ["Consumer", "Food Delivery", "Cross-platform", "Research"],
    },
    {
      id: "aires",
      company: "Aires",
      role: "Associate Product Designer",
      type: "Full-time",
      period: "Jan 2020 – Apr 2020",
      location: "Pittsburgh, PA",
      highlights: [
        "Improved user experience by 30% by revamping client software with new features and reducing loading times — driving customer satisfaction and repeat business.",
        "Collaborated with stakeholders to gather feedback and identify improvements, producing detailed design change requests used as living documents to guide product development.",
      ],
      tags: ["B2B", "Enterprise Software", "UX Research"],
    },
    {
      id: "involvemint",
      company: "Involvemint",
      role: "UX Designer Intern",
      type: "Internship",
      period: "Jun 2019 – Dec 2019",
      location: "Pittsburgh, PA",
      highlights: [
        "Created an engaging, user-friendly online brochure — 20% increase in investment year-over-year.",
        "Revamped onboarding for an iOS app using user research and feedback — 60% reduction in sign-up drop-off.",
        "Shipped a progress-tracking feature for earning social currency — 35% increase in positive user feedback within the first month.",
      ],
      tags: ["Mobile", "Onboarding", "Consumer", "Research"],
    },
  ],

  skills: {
    design: ["Design Thinking", "Wireframing", "Prototyping", "Storyboards", "Personas", "User Flows", "Interaction Design", "UX Research"],
    tools: ["Figma", "Miro", "Adobe Creative Cloud", "Webflow", "Notion", "Claude Code", "ChatGPT", "Midjourney"],
    domains: ["Healthcare / Insurance", "Fintech / Subrogation", "EdTech (AI)", "Consumer Apps", "Design Systems", "Accessibility"],
    growth: ["Sales Calls", "Client Vetting", "Scoping & Pricing", "LinkedIn Content", "Long-Form Writing", "Personal Branding", "Inbound Marketing", "Positioning"],
    aiAgents: ["AI Agent Development", "Prompt Engineering", "Claude Code", "MCP Integration", "Vibe Coding", "Research Automation", "Content Automation"],
  },

  education: [
    {
      school: "University of Pittsburgh — Dietrich School of Arts and Sciences",
      degree: "B.S. Psychology",
      period: "2019 · Pittsburgh, PA",
    },
  ],

  leadership: [
    {
      role: "Network Builder",
      company: "Fuzhou America",
      period: "Dec 2021–Present",
      location: "New York City, NY",
      description: "Planned and executed a community outreach campaign that grew the Fuzhou America Facebook Group by 50% (500+ new members). Developed partnerships with local businesses and organizations to bring in 100+ new attendees. Executed a 200+ attendee conference educating and empowering activism around intersectional Asian American issues.",
    },
  ],

  testimonials: [
    {
      id: "james",
      quote:
        "Sophia was my first hire when I built Cotiviti's UX department. She's exceptional across the full UX discipline — not just one or two areas — and balances business needs with real user advocacy.",
      name: "James Bowman, CUA",
      title: "UX Leader · Cotiviti (former)",
      avatar: null, // TODO: add LinkedIn avatar
    },
    {
      id: "dal",
      quote:
        "Sophia is user-obsessed. She translates complex requirements into simple, intuitive designs — and brings diverse teams together around a shared goal.",
      name: "Dal Price",
      title: "Former Manager · Cotiviti",
      avatar: null, // TODO: add LinkedIn avatar
    },
  ],
};
