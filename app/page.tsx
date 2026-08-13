const experience = [
  {
    period: "2026 - Present",
    role: "Senior Backend Developer",
    company: "Tahakom",
    focus: "Geospatial surveillance, live telemetry, video streaming, and AI-assisted detection systems.",
  },
  {
    period: "2024 - 2026",
    role: "Senior Backend Developer",
    company: "STC",
    focus: "Inspection workflows, notifications, legal case management, and secure document services.",
  },
  {
    period: "2022 - 2023",
    role: "Senior Software Developer",
    company: "Lagorta",
    focus: "Event-driven advertising and multi-channel communication systems.",
  },
  {
    period: "2020 - 2022",
    role: "Specialist Software Developer",
    company: "Egabi Solutions",
    focus: "Government integrations, digital archiving, and justice platforms.",
  },
  {
    period: "2016 - 2020",
    role: "Software Developer",
    company: "Three Pillars & Suez Canal University",
    focus: "Enterprise reporting, IoT monitoring, mobile, and public-sector applications.",
  },
];

const stackGroups = [
  {
    label: "Frontend",
    items: ["Angular", "TypeScript", "JavaScript", "HTML / CSS", "JSF / ADF", "Flutter"],
  },
  {
    label: "Backend",
    items: ["Java 21", "Spring Boot 3", "Spring Security", "JPA / Hibernate", "REST", "GraphQL"],
  },
  {
    label: "Data & realtime",
    items: ["Kafka", "WebSocket", "PostgreSQL", "PostGIS", "JSONB", "GeoTools"],
  },
  {
    label: "Platform",
    items: ["Docker", "Keycloak", "Flyway", "Temporal", "AWS S3 / GCS", "CI/CD"],
  },
];

const publicLabs = [
  {
    name: "dynamic-query",
    description: "Java experiments around flexible, data-driven query patterns.",
    href: "https://github.com/Belal2/dynamic-query",
  },
  {
    name: "spring-security",
    description: "A practical series exploring Spring Security concepts.",
    href: "https://github.com/Belal2/spring-security",
  },
  {
    name: "AlgorithmsAndPatternsSamples",
    description: "Reference implementations for design patterns and common algorithms.",
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
          <span>Belal Abdalhuk</span>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#work">Work</a>
          <a href="#experience">Experience</a>
          <a href="#stack">Stack</a>
          <a className="nav-cta" href="mailto:belal.ash22@gmail.com">Let&apos;s talk</a>
        </nav>
      </header>

      <div id="top" className="hero-shell">
        <div className="hero-grid" aria-hidden="true" />
        <section className="hero" id="content">
          <div className="hero-copy">
            <p className="eyebrow"><span /> Senior Full-Stack Software Engineer</p>
            <h1>I build products from <em>interface to infrastructure.</em></h1>
            <p className="hero-lede">
              9+ years delivering end-to-end web and enterprise platforms - from user
              experiences and APIs to real-time data, integrations, and cloud delivery.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#work">View case studies <span>↓</span></a>
              <a className="button button-secondary" href="/Belal-Abdalhuk-Resume.pdf" download>
                Download résumé
              </a>
            </div>
            <div className="hero-links" aria-label="Professional profiles">
              <a href="https://github.com/Belal2" target="_blank" rel="noreferrer">GitHub ↗</a>
              <a href="https://www.linkedin.com/in/belal-abdalhuk-1830b0a1/" target="_blank" rel="noreferrer">LinkedIn ↗</a>
              <span>Based in Egypt</span>
            </div>
          </div>

          <aside className="system-card" aria-label="Engineering focus">
            <div className="system-card-top">
              <span>system.profile</span>
              <span className="status"><i /> production-minded</span>
            </div>
            <div className="system-lines">
              <p><span>01</span> useful product experiences</p>
              <p><span>02</span> scalable services and APIs</p>
              <p><span>03</span> reliable data and event flows</p>
              <p><span>04</span> secure, operable delivery</p>
            </div>
            <div className="signal-map">
              <div><b>WEB</b><small>Angular · JSF · Flutter</small></div>
              <span>→</span>
              <div className="signal-core"><b>SERVICES</b><small>Java · Spring · APIs</small></div>
              <span>→</span>
              <div><b>DATA</b><small>Kafka · SQL · cloud</small></div>
            </div>
          </aside>
        </section>
      </div>

      <section className="proof-strip" aria-label="Career highlights">
        <div><strong>9+</strong><span>years building production software</span></div>
        <div><strong>Full-stack</strong><span>web, services, data, and delivery</span></div>
        <div><strong>Real-time</strong><span>telemetry and event pipelines</span></div>
        <div><strong>Enterprise</strong><span>security and workflow systems</span></div>
      </section>

      <section className="section work-section" id="work">
        <div className="section-heading">
          <div>
            <p className="eyebrow"><span /> Selected work</p>
            <h2>Architecture stories,<br />not confidential artifacts.</h2>
          </div>
          <p>
            Production code and client data remain private. These case studies focus on
            my role, the engineering decisions, and the shape of the systems.
          </p>
        </div>

        <article className="case-study case-study-featured">
          <div className="case-index">01</div>
          <div className="case-copy">
            <div className="case-meta">
              <span>Real-time systems</span>
              <span>Sanitized case study</span>
            </div>
            <h3>Geospatial monitoring at the speed of the field.</h3>
            <p className="case-summary">
              A platform combining live device telemetry, video, satellite assets, and
              AI-assisted detections needed one dependable end-to-end foundation.
            </p>
            <div className="case-details">
              <div>
                <h4>My contribution</h4>
                <p>Designed core services and client-facing APIs, built the UDP-to-Kafka ingestion path, delivered live updates for map experiences, and integrated spatial storage and alert workflows.</p>
              </div>
              <div>
                <h4>Key decisions</h4>
                <p>Decoupled ingestion from delivery, used PostGIS for spatial operations, and secured service boundaries with OIDC.</p>
              </div>
            </div>
            <ul className="tech-list" aria-label="Technologies used">
              <li>Java 21</li><li>Spring Boot 3</li><li>Kafka</li><li>WebSocket</li><li>PostGIS</li><li>Keycloak</li>
            </ul>
          </div>
          <div className="architecture-card" aria-label="Simplified telemetry architecture">
            <p className="diagram-label">Simplified architecture</p>
            <div className="architecture-flow">
              <div className="flow-node"><small>SOURCES</small><strong>Devices + models</strong></div>
              <div className="flow-line"><span /></div>
              <div className="flow-node flow-node-accent"><small>INGEST</small><strong>UDP gateway</strong></div>
              <div className="flow-line"><span /></div>
              <div className="flow-node"><small>EVENT BUS</small><strong>Kafka streams</strong></div>
              <div className="flow-split"><span /><span /><span /></div>
              <div className="flow-outputs">
                <span>Live map</span><span>Rules</span><span>Storage</span>
              </div>
            </div>
          </div>
        </article>

        <article className="case-study">
          <div className="case-index">02</div>
          <div className="case-copy case-copy-wide">
            <div className="case-meta">
              <span>Enterprise workflows</span>
              <span>Sanitized case study</span>
            </div>
            <h3>Making complex inspection workflows feel predictable.</h3>
            <p className="case-summary">
              Inspection visits, assignments, teams, checklists, and status histories carry
              dense business rules. The product had to make those rules explicit and reliable across web and mobile workflows.
            </p>
            <div className="case-details three-up">
              <div><h4>Workflow integrity</h4><p>Implemented lifecycle rules, reassignment, history, and team constraints close to the domain.</p></div>
              <div><h4>Search at scale</h4><p>Built dynamic filtering with JPA Specifications and optimized read paths using entity graphs.</p></div>
              <div><h4>Secure delivery</h4><p>Separated web and mobile API concerns, integrated enterprise SSO, and documented the contract with OpenAPI.</p></div>
            </div>
            <ul className="tech-list" aria-label="Technologies used">
              <li>Angular-ready APIs</li><li>Spring Boot</li><li>Hibernate</li><li>PostgreSQL</li><li>JSONB</li><li>OpenAPI</li>
            </ul>
          </div>
        </article>
      </section>

      <section className="section capability-section">
        <div className="section-heading compact-heading">
          <div><p className="eyebrow"><span /> Beyond the case studies</p><h2>Built across the enterprise.</h2></div>
        </div>
        <div className="capability-grid">
          <article><span>01</span><h3>Web & mobile products</h3><p>Delivered user-facing applications and enterprise interfaces with Angular, JavaScript, JSF, ADF, Flutter, and Android.</p></article>
          <article><span>02</span><h3>Secure enterprise services</h3><p>Built APIs and workflows for documents, notifications, inspections, and legal platforms with strong access control.</p></article>
          <article><span>03</span><h3>Integration systems</h3><p>Connected external gateways and public-sector platforms with Apache Camel, Red Hat Fuse, SOAP, REST, and event streams.</p></article>
        </div>
      </section>

      <section className="section experience-section" id="experience">
        <div className="section-heading compact-heading">
          <div><p className="eyebrow"><span /> Experience</p><h2>A decade of systems thinking.</h2></div>
        </div>
        <div className="timeline">
          {experience.map((item) => (
            <article className="timeline-row" key={`${item.company}-${item.period}`}>
              <time>{item.period}</time>
              <div><h3>{item.role}</h3><p>{item.company}</p></div>
              <p className="timeline-focus">{item.focus}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section stack-section" id="stack">
        <div className="stack-intro">
          <p className="eyebrow"><span /> Technical toolkit</p>
          <h2>Tools chosen for the problem, not the résumé.</h2>
          <p>I deliver across interface, services, data, and deployment, with the deepest specialization in the Java ecosystem and production-grade backend architecture.</p>
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

      <section className="section public-work-section">
        <div className="section-heading">
          <div><p className="eyebrow"><span /> Public work</p><h2>The lab is public.<br />Production stays private.</h2></div>
          <p>My GitHub contains learning projects and technical explorations. Client work is represented through the sanitized case studies above.</p>
        </div>
        <div className="labs-list">
          {publicLabs.map((repo) => (
            <a key={repo.name} href={repo.href} target="_blank" rel="noreferrer">
              <div><small>GITHUB REPOSITORY</small><h3>{repo.name}</h3></div>
              <p>{repo.description}</p><span>↗</span>
            </a>
          ))}
        </div>
        <a className="text-link" href="https://github.com/Belal2" target="_blank" rel="noreferrer">Explore all public repositories ↗</a>
      </section>

      <section className="contact-section">
        <p className="eyebrow light"><span /> Start a conversation</p>
        <h2>Have a difficult product or platform problem?</h2>
        <p>I&apos;m always interested in thoughtful engineering conversations around full-stack delivery, distributed systems, real-time data, and enterprise platforms.</p>
        <a className="contact-link" href="mailto:belal.ash22@gmail.com">belal.ash22@gmail.com <span>↗</span></a>
      </section>

      <footer>
        <p>© 2026 Belal Abdalhuk</p>
        <p>Senior Full-Stack Software Engineer · Egypt</p>
        <div><a href="https://github.com/Belal2" target="_blank" rel="noreferrer">GitHub</a><a href="https://www.linkedin.com/in/belal-abdalhuk-1830b0a1/" target="_blank" rel="noreferrer">LinkedIn</a></div>
      </footer>
    </main>
  );
}
