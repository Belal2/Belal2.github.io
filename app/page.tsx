const proofPoints = [
  { value: "9+", label: "years shipping production systems" },
  { value: "15+", label: "enterprise platforms and products" },
  { value: "9", label: "industries across regulated and digital sectors" },
  { value: "EG · KSA", label: "delivery experience across Egypt and Saudi Arabia" },
];

const caseStudies = [
  {
    index: "01",
    size: "wide",
    sector: "Geospatial · AI · Real-time",
    title: "Remote sensing operations, from airborne signal to live decision.",
    summary:
      "A unified operations platform for drone telemetry, satellite imagery, live video and AI-assisted detections — designed for the speed and reliability of field work.",
    contribution:
      "Architected core services and client-facing APIs; built the UDP-to-Kafka telemetry path, real-time WebSocket delivery, spatial services and secure platform boundaries.",
    outcome: "One dependable operating picture across maps, models, media and alerts.",
    stack: ["Java 21", "Spring Boot 3", "Kafka", "WebSocket", "PostGIS", "Keycloak", "GCS / S3"],
    visual: ["AIR", "INGEST", "EVENTS", "OPS"],
  },
  {
    index: "02",
    size: "standard",
    sector: "Field operations · Enterprise",
    title: "An inspection platform built from zero around real workflows.",
    summary:
      "Visits, inspectors, teams, facilities, checklists, assignments and history brought into a coherent web and mobile operating model.",
    contribution:
      "Owned the backend foundation from scratch, shaped Angular-ready contracts, encoded lifecycle rules, search, analytics, SSO and secure delivery.",
    outcome: "Complex policy became a predictable, traceable workflow.",
    stack: ["Angular-ready APIs", "Spring Boot", "PostgreSQL", "JSONB", "OpenAPI", "SSO"],
  },
  {
    index: "03",
    size: "standard",
    sector: "AI product · Collaboration",
    title: "Board meetings turned into structured institutional intelligence.",
    summary:
      "A boardroom product that records meetings, organizes agendas and files, identifies participation patterns and uses AI to surface summaries and analysis.",
    contribution:
      "Contributed across the product stack and platform capabilities, connecting meeting workflows, files, live summaries and AI-assisted analysis.",
    outcome: "Decisions, context and participation become searchable and useful after the room clears.",
    stack: ["Spring Boot", "React", "AI workflows", "File analysis", "Live summary"],
  },
  {
    index: "04",
    size: "standard",
    sector: "Logistics · B2B commerce",
    title: "A shipment portal spanning customer experience and operations.",
    summary:
      "A B2B logistics platform for shipment workflows, customer operations, rates, tracking and external carrier integrations.",
    contribution:
      "Delivered across the Angular frontend and Spring backend, integrating product workflows with operational and partner services.",
    outcome: "A single digital journey from commercial request to shipment visibility.",
    stack: ["Angular", "TypeScript", "Spring", "REST APIs", "AWS", "CI/CD"],
  },
  {
    index: "05",
    size: "standard",
    sector: "Justice · Middleware integration",
    title: "Integration infrastructure for prosecution and criminal justice.",
    summary:
      "Middleware connecting prosecution, criminal justice, digital archiving and external government systems across complex institutional boundaries.",
    contribution:
      "Built integration services and backend modules for implementation and claims workflows, gateway contracts and dependable cross-system exchange.",
    outcome: "Disconnected systems could participate in one governed justice workflow.",
    stack: ["Red Hat Fuse", "Apache Camel", "SOAP / REST", "Spring Boot", "Oracle", "PostgreSQL"],
  },
  {
    index: "06",
    size: "standard",
    sector: "Telecom · Corporate operations",
    title: "A suite of systems behind enterprise operations.",
    summary:
      "Document management, legal case operations, company-wide notifications and inspection workflows delivered for a major telecom environment.",
    contribution:
      "Built APIs and domain modules for secure files, litigation, judgments, fines, dashboards and multi-channel email and WhatsApp delivery.",
    outcome: "Critical corporate work moved from fragmented processes to managed digital services.",
    stack: ["Spring Boot", "GraphQL", "Kafka", "AWS S3", "PostgreSQL", "WhatsApp"],
  },
  {
    index: "07",
    size: "standard",
    sector: "Agritech · ERP · Multi-tenant SaaS",
    title: "An operating system for agricultural chemical businesses.",
    summary:
      "A full-stack ERP that connects inventory, customers, suppliers, invoicing, payments, returns, expenses and sales operations in one product.",
    contribution:
      "Designed and built the product across Angular and Spring Boot, including tenant isolation, secure access, transactional workflows, dashboards and production-ready infrastructure.",
    outcome: "Distributors gain one reliable view of stock, cash flow and day-to-day commercial operations.",
    stack: ["Angular 19", "Spring Boot 3", "Java 21", "PostgreSQL", "JWT", "Flyway", "Docker"],
  },
];

const sectors = [
  { number: "01", name: "Public safety", detail: "Saudi operational systems" },
  { number: "02", name: "Justice", detail: "Prosecution, claims and criminal justice" },
  { number: "03", name: "Telecommunications", detail: "Documents, legal, notifications and inspections" },
  { number: "04", name: "Logistics", detail: "B2B shipment and partner integration" },
  { number: "05", name: "Healthcare", detail: "Hospital booking and medical workflows" },
  { number: "06", name: "Insurance", detail: "ARIMA enterprise insurance platform" },
  { number: "07", name: "Education", detail: "University systems and student engagement" },
  { number: "08", name: "Commerce & advertising", detail: "Customer analytics and dynamic campaigns" },
  { number: "09", name: "Agricultural commerce", detail: "Multi-tenant ERP, inventory and financial operations" },
];

const experience = [
  {
    period: "2026 — Present",
    role: "Senior Backend Developer",
    company: "Tahakom",
    focus: "Remote sensing, geospatial intelligence, real-time telemetry, video and AI detections.",
  },
  {
    period: "2024 — 2026",
    role: "Senior Backend Developer",
    company: "STC",
    focus: "Inspection, legal case, notification and secure document platforms.",
  },
  {
    period: "2022 — 2023",
    role: "Senior Software Developer",
    company: "Lagorta",
    focus: "Angular-enabled advertising, analytics, messaging and event-driven systems.",
  },
  {
    period: "2020 — 2022",
    role: "Specialist Software Developer",
    company: "Egabi Solutions",
    focus: "Justice platforms, digital archiving, road-gateway subscriptions and middleware integration.",
  },
  {
    period: "2016 — 2020",
    role: "Software Developer",
    company: "Three Pillars & Suez Canal University",
    focus: "Insurance, Saudi public-sector, university, healthcare, reporting, mobile and IoT products.",
  },
];

const stackGroups = [
  { label: "Experience", items: ["Angular", "TypeScript", "JavaScript", "HTML / CSS", "React", "JSF / ADF", "Flutter"] },
  { label: "Services", items: ["Java 21", "Spring Boot 3", "Spring Security", "JPA / Hibernate", "REST", "GraphQL"] },
  { label: "Data & realtime", items: ["Kafka", "WebSocket", "PostgreSQL", "PostGIS", "Oracle", "MongoDB", "Elasticsearch"] },
  { label: "Integration", items: ["Apache Camel", "Red Hat Fuse", "WSO2", "SOAP", "BPM", "Event-driven architecture"] },
  { label: "Platform", items: ["Docker", "Kubernetes", "Keycloak", "AWS / GCS", "Flyway", "Jenkins", "CI/CD"] },
];

const publicLabs = [
  {
    name: "dynamic-query",
    description: "Flexible, data-driven query patterns in Java.",
    href: "https://github.com/Belal2/dynamic-query",
  },
  {
    name: "spring-security",
    description: "Practical explorations of Spring Security concepts.",
    href: "https://github.com/Belal2/spring-security",
  },
  {
    name: "AlgorithmsAndPatternsSamples",
    description: "Reference implementations for patterns and algorithms.",
    href: "https://github.com/Belal2/AlgorithmsAndPatternsSamples",
  },
];

export default function Home() {
  return (
    <main>
      <a className="skip-link" href="#content">Skip to content</a>

      <header className="site-header">
        <a className="brand" href="#top" aria-label="Belal Abdalhuk, home">
          <span className="brand-mark">BA</span>
          <span className="brand-copy"><b>Belal Abdalhuk</b><small>Product & Platform Engineering</small></span>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#work">Work</a>
          <a href="#services">Services</a>
          <a href="#experience">Experience</a>
          <a className="nav-cta" href="mailto:belal.ash22@gmail.com?subject=Let%27s%20work%20together">Start a conversation <span>↗</span></a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-orbit hero-orbit-one" aria-hidden="true" />
        <div className="hero-orbit hero-orbit-two" aria-hidden="true" />
        <div className="hero-content" id="content">
          <div className="hero-kicker">
            <span className="live-dot" />
            Senior Full-Stack Engineer · Independent Engineering Practice
          </div>
          <h1>Complex software.<br /><em>Clear systems.</em><br />Real outcomes.</h1>
          <div className="hero-lower">
            <p>
              I design and ship enterprise products across interfaces, APIs,
              integrations, data and AI — with deep Java architecture experience
              and full-stack ownership from discovery to production.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#work">Explore selected work <span>↓</span></a>
              <a className="button button-quiet" href="/Belal-Abdalhuk-Resume.pdf" download>Download résumé <span>↗</span></a>
            </div>
          </div>
        </div>
        <div className="hero-rail" aria-label="Current focus">
          <span>Available for</span>
          <p>Senior engineering roles</p><i />
          <p>Product partnerships</p><i />
          <p>Architecture & delivery</p>
        </div>
      </section>

      <section className="proof-strip" aria-label="Career highlights">
        {proofPoints.map((item) => (
          <div key={item.value}><strong>{item.value}</strong><span>{item.label}</span></div>
        ))}
      </section>

      <section className="section work-section" id="work">
        <div className="section-intro">
          <div>
            <p className="eyebrow">Selected work / 01—07</p>
            <h2>Systems that carry<br />real operational weight.</h2>
          </div>
          <div className="section-note">
            <p>Production code and client data stay private. These sanitized case studies show the problem, my contribution and the system shape.</p>
            <span>Confidentiality by design</span>
          </div>
        </div>

        <div className="case-grid">
          {caseStudies.map((study) => (
            <article className={`case-card ${study.size === "wide" ? "case-card-wide" : ""}`} key={study.index}>
              <div className="case-topline"><span>{study.index}</span><p>{study.sector}</p><i /></div>
              <h3>{study.title}</h3>
              <p className="case-summary">{study.summary}</p>
              {study.visual && (
                <div className="signal-path" aria-label="Simplified system path">
                  {study.visual.map((node, index) => (
                    <div className="signal-item" key={node}>
                      <span>{node}</span>{index < study.visual!.length - 1 && <i />}
                    </div>
                  ))}
                </div>
              )}
              <div className="case-facts">
                <div><small>CONTRIBUTION</small><p>{study.contribution}</p></div>
                <div><small>VALUE</small><p>{study.outcome}</p></div>
              </div>
              <ul className="tag-list" aria-label="Technologies used">
                {study.stack.map((item) => <li key={item}>{item}</li>)}
              </ul>
              <div className="case-corner" aria-hidden="true">↗</div>
            </article>
          ))}
        </div>
      </section>

      <section className="sector-section">
        <div className="sector-heading">
          <p className="eyebrow eyebrow-dark">Delivery range</p>
          <h2>Built where complexity<br />meets consequence.</h2>
          <p>Experience spanning regulated institutions, national-scale integrations, enterprise operations and digital products.</p>
        </div>
        <div className="sector-list">
          {sectors.map((sector) => (
            <article key={sector.number}>
              <span>{sector.number}</span><h3>{sector.name}</h3><p>{sector.detail}</p><i>↗</i>
            </article>
          ))}
        </div>
      </section>

      <section className="section services-section" id="services">
        <div className="section-intro services-intro">
          <div><p className="eyebrow">How I can help</p><h2>Senior ownership.<br />Flexible engagement.</h2></div>
          <p>One engineering profile for two conversations: joining a strong product organization, or helping an ambitious team turn a difficult idea into dependable software.</p>
        </div>
        <div className="engagement-grid">
          <article className="engagement-card engagement-primary">
            <span className="engagement-number">01</span>
            <p className="engagement-label">FOR ENGINEERING LEADERS</p>
            <h3>Hire a senior full-stack engineer with backend depth.</h3>
            <p>End-to-end delivery, architectural judgment and the ability to make complex domain rules understandable across product and engineering teams.</p>
            <ul><li>Technical ownership</li><li>System design & delivery</li><li>Mentoring & code quality</li><li>Cross-functional execution</li></ul>
            <a href="mailto:belal.ash22@gmail.com?subject=Senior%20engineering%20opportunity">Discuss a role <span>↗</span></a>
          </article>
          <article className="engagement-card">
            <span className="engagement-number">02</span>
            <p className="engagement-label">FOR FOUNDERS & OPERATORS</p>
            <h3>Build a product or rescue a platform that matters.</h3>
            <p>Focused engineering partnership from architecture and UX flows through APIs, integrations, data and production readiness.</p>
            <ul><li>Product engineering</li><li>Enterprise integrations</li><li>Platform modernization</li><li>Technical discovery</li></ul>
            <a href="mailto:belal.ash22@gmail.com?subject=Product%20engineering%20project">Start a project <span>↗</span></a>
          </article>
        </div>
      </section>

      <section className="section experience-section" id="experience">
        <div className="section-intro compact-intro">
          <div><p className="eyebrow">Experience</p><h2>One career, many layers of the stack.</h2></div>
          <p>Official titles reflect the role. The work has consistently crossed frontend, backend, data, integration and platform boundaries.</p>
        </div>
        <div className="timeline">
          {experience.map((item, index) => (
            <article className="timeline-row" key={`${item.company}-${item.period}`}>
              <span className="timeline-index">0{index + 1}</span>
              <time>{item.period}</time>
              <div className="timeline-role"><h3>{item.role}</h3><p>{item.company}</p></div>
              <p className="timeline-focus">{item.focus}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="stack-section" id="stack">
        <div className="stack-copy">
          <p className="eyebrow eyebrow-dark">Technical range</p>
          <h2>Backend depth.<br /><em>Full-stack ownership.</em></h2>
          <p>I choose tools for longevity, operability and the business problem — not for a fashionable technology list.</p>
        </div>
        <div className="stack-groups">
          {stackGroups.map((group) => (
            <div className="stack-group" key={group.label}>
              <h3>{group.label}</h3>
              <ul>{group.items.map((item) => <li key={item}>{item}</li>)}</ul>
            </div>
          ))}
        </div>
      </section>

     

      <section className="contact-section" id="contact">
        <div className="contact-glow" aria-hidden="true" />
        <p className="eyebrow eyebrow-light">The next difficult system</p>
        <h2>Let&apos;s make it<br /><em>work beautifully.</em></h2>
        <div className="contact-bottom">
          <p>Open to senior full-stack opportunities and selected product engineering partnerships across Egypt, Saudi Arabia and remote teams.</p>
          <a href="mailto:belal.ash22@gmail.com">belal.ash22@gmail.com <span>↗</span></a>
        </div>
      </section>

      <footer>
        <div className="footer-brand"><span className="brand-mark">BA</span><p><b>Belal Abdalhuk</b><small>Product & Platform Engineering</small></p></div>
        <p>© 2026 · Built with care for systems and the people who use them.</p>
        <div className="footer-links"><a href="https://github.com/Belal2" target="_blank" rel="noreferrer">GitHub</a><a href="https://www.linkedin.com/in/belal-abdalhuk-1830b0a1/" target="_blank" rel="noreferrer">LinkedIn</a><a href="#top">Top ↑</a></div>
      </footer>
    </main>
  );
}
