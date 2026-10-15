// ---------------------------------------------------------------------------
// All site content lives here. Edit this file to update the portfolio.
// ---------------------------------------------------------------------------

export const profile = {
  name: "Anderson Nascimento",
  handle: "anderson", // used in the terminal-style prompt in the hero
  title: "Senior Full-Stack Engineer",
  focus: "AI / LLM · Payments Infrastructure",
  location: "Minas Gerais, Brazil",
  remote: true,
  email: "andersonsantss99@gmail.com",
  linkedin: "https://www.linkedin.com/in/anderson-nascimento-b47255438/",
  github: "", // add your GitHub URL here to show the link
  resumeUrl: "/Anderson_Nascimento.pdf",
  tagline:
    "Nine years building backends in Python, Go, and Java and frontends in React and TypeScript. Lately: payments infrastructure and LLM features.",
  summary: [
    "Full-stack engineer, nine years, working in Python with Go and Java on the server and React and TypeScript on the front.",
    "Recent work is payments infrastructure: cross-border disbursements, an event-sourced ledger, and provider integrations on Postgres, Redis, and Kafka in AWS.",
    "Before that, four years contracting with Thoughtworks on commerce services, and a first job on clinical scheduling.",
  ],
  stats: [
    { value: "9+", label: "years shipping" },
    { value: "4", label: "payment providers unified" },
    { value: "85%+", label: "test coverage, up from 45%" },
    { value: "<2 min", label: "onboarding, down from ~9" },
  ],
};

export type Experience = {
  company: string;
  role: string;
  start: string;
  end: string;
  location: string;
  bullets: string[];
  tech: string[];
};

export const experience: Experience[] = [
  {
    company: "Infisical",
    role: "Senior Full-Stack Engineer",
    start: "Aug 2023",
    end: "Present",
    location: "San Francisco, US · Remote",
    tech: ["Python", "Go", "React", "TypeScript", "Postgres", "Redis", "Kafka", "AWS"],
    bullets: [
      "Designed a cross-border contractor payout platform on idempotent state machines and the outbox pattern. Disbursements cross provider boundaries where a timeout tells you nothing about whether money moved, so every transition had to be replayable without double-paying, across multiple currencies and payout corridors.",
      "Rebuilt contractor onboarding as an event-driven Kafka pipeline, replacing blocking third-party KYC/KYB calls that held a request open for the length of the slowest vendor. Completion went from about 9 minutes to under 2.",
      "Ran payment workloads on multi-region Postgres and Redis (RDS, ElastiCache) with PgBouncer in transaction mode, which kept connection counts flat as traffic grew.",
      "Wrote an internal provider SDK wrapping Stripe, Wise, Adyen, and Brex behind one interface, collapsing four retry semantics and four failure vocabularies into shared circuit-breaker and tracing behavior. Adding the next provider took days instead of weeks.",
      "Rebuilt the payment ledger as append-only Postgres with event sourcing, making it the system of record for SOC 2 audit evidence.",
      "Built the product's LLM features end to end: provider API integration, RAG over internal docs with vector search, and the React interface consuming streamed responses.",
      "Carried on-call for the payments services and fixed the recurring pages rather than re-triaging them.",
    ],
  },
  {
    company: "Freelance",
    role: "AI Trainer / LLM Evaluator",
    start: "May 2023",
    end: "Present",
    location: "Remote",
    tech: ["Python", "Go", "Java", "API design", "Code review"],
    bullets: [
      "Evaluate model output on software-engineering tasks, ranking correctness, edge-case handling, and maintainability, and documenting recurring failure patterns.",
      "Run prompt-based testing and model comparison on backend architecture, debugging, and code-quality scenarios.",
      "Support training workflows through data annotation, preference labeling, and human-feedback processes.",
    ],
  },
  {
    company: "Thoughtworks",
    role: "Full-Stack Developer",
    start: "Jun 2019",
    end: "Jul 2023",
    location: "Chicago, US · Remote",
    tech: ["Python", "Flask", "Celery", "React", "TypeScript", "Postgres", "Redis", "GitLab CI"],
    bullets: [
      "Built REST APIs and Celery background jobs in Flask for a client's catalog and merchandising services, backed by Postgres and Redis, on a distributed squad pairing daily with the US team.",
      "Built the React and TypeScript catalog management screens, including long-running job views that let merchandisers track operations without blocking on them.",
      "Took test coverage on two recommendation services from 45% to over 85% with pytest and HTTPX, which surfaced bugs in code paths nobody had exercised since launch and made daily deploys safe.",
      "Tracked down a production cache stampede where every expiry flooded Postgres, and fixed it with staggered TTLs and single-flight locking.",
      "Moved the team's CI from Jenkins to GitLab CI so every service on the team built the same way.",
    ],
  },
  {
    company: "CI&T",
    role: "Junior Full-Stack Developer",
    start: "Aug 2017",
    end: "May 2019",
    location: "São Paulo, Brazil · Onsite",
    tech: ["Python", "Postgres", "Redis", "React"],
    bullets: [
      "Built booking and availability APIs for a clinic appointment-scheduling service in Python, backed by Postgres and Redis.",
      "Fixed double-booking under concurrent reservations using Postgres row locks with short-lived Redis holds on a slot while the booking was in flight.",
      "Built the patient-facing booking and availability screens, including the error states around reservation conflicts.",
    ],
  },
];

export type Work = {
  title: string;
  problem: string;
  solution: string;
  outcome: string;
  tech: string[];
  link?: string; // optional: repo, write-up, or demo
};

export const selectedWork: Work[] = [
  {
    title: "Cross-border payout platform",
    problem:
      "Disbursements cross provider boundaries where a timeout tells you nothing about whether money moved.",
    solution:
      "Idempotent state machines plus the outbox pattern, so every transition is replayable without double-paying across currencies and corridors.",
    outcome: "Safe retries on every transition; no duplicate payouts.",
    tech: ["Python", "Postgres", "Kafka", "AWS"],
  },
  {
    title: "Event-driven onboarding pipeline",
    problem:
      "Blocking KYC/KYB calls held each request open for the length of the slowest vendor.",
    solution: "Rebuilt onboarding as an event-driven Kafka pipeline.",
    outcome: "Completion dropped from ~9 minutes to under 2.",
    tech: ["Kafka", "Python", "Postgres"],
  },
  {
    title: "Unified payment provider SDK",
    problem:
      "Stripe, Wise, Adyen, and Brex each had their own retry semantics and failure vocabulary.",
    solution:
      "One internal SDK with a single interface, shared circuit-breaker, and tracing behavior.",
    outcome: "Adding a provider went from weeks to days.",
    tech: ["Python", "OpenTelemetry", "Datadog"],
  },
  {
    title: "Event-sourced payment ledger",
    problem: "Mutable balance rows made reconciliation guesswork.",
    solution: "Append-only Postgres ledger with event sourcing.",
    outcome: "System of record for SOC 2 audit evidence.",
    tech: ["Postgres", "Python", "SOC 2"],
  },
  {
    title: "LLM features, end to end",
    problem: "Product needed answers grounded in internal docs, streamed to the UI.",
    solution:
      "Provider API integration, RAG over internal docs with vector search, and a React interface consuming streamed responses.",
    outcome: "Shipped from retrieval layer to streamed React UI.",
    tech: ["Claude API", "OpenAI API", "RAG", "Pinecone", "React"],
  },
  {
    title: "Cache stampede fix",
    problem:
      "Every cache expiry sent the same flood of requests to Postgres in production.",
    solution: "Staggered TTLs and single-flight locking.",
    outcome: "Eliminated the periodic load spikes.",
    tech: ["Redis", "Postgres", "Python"],
  },
];

export const skills: { group: string; items: string[] }[] = [
  { group: "Languages", items: ["Python", "Go", "Java", "TypeScript", "JavaScript", "SQL"] },
  { group: "Frontend", items: ["React", "TypeScript", "HTML", "CSS"] },
  { group: "Backend", items: ["FastAPI", "Django", "Flask", "Spring Boot", "REST", "gRPC", "GraphQL"] },
  { group: "AI / LLM", items: ["OpenAI API", "Claude API", "RAG", "Pinecone", "Weaviate"] },
  { group: "Data & Messaging", items: ["PostgreSQL", "MongoDB", "Redis", "Kafka", "Celery", "SQS"] },
  { group: "Cloud & Infra", items: ["AWS", "Docker", "Kubernetes", "Terraform"] },
  { group: "Observability & SRE", items: ["Datadog APM", "OpenTelemetry", "PagerDuty", "k6"] },
  { group: "Security", items: ["SOC 2", "AWS KMS", "OAuth"] },
];

export const education = [
  {
    school: "University of Toronto",
    location: "Toronto, Canada",
    degree: "Master's degree in Computer Science",
    start: "Sep 2015",
    end: "Jul 2017",
  },
  {
    school: "University of Toronto",
    location: "Toronto, Canada",
    degree: "Bachelor's degree in Computer Science",
    start: "Sep 2011",
    end: "Jun 2015",
  },
];

export const certificates = [
  { name: "AWS Certified Developer", issuer: "AWS", date: "Aug 2025" },
  { name: "Certified Kubernetes Application Developer", issuer: "CNCF", date: "Jan 2026" },
];

export const languages = [
  { name: "Portuguese", level: "Native" },
  { name: "English", level: "C2" },
];

export const nav = [
  { href: "#about", label: "about" },
  { href: "#work", label: "work" },
  { href: "#experience", label: "experience" },
  { href: "#skills", label: "skills" },
  { href: "#contact", label: "contact" },
];
