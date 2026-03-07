const SKILLS = [
  {
    category: "BACKEND",
    color: "#00f2ff",
    icon: "bi-server",
    items: [
      { name: "Java 21", level: 95 },
      { name: "Spring Boot", level: 90 },
      { name: "Spring WebFlux", level: 80 },
      { name: "Spring Security", level: 75 },
      { name: "Maven", level: 85 },
      { name: "REST APIs", level: 92 },
    ],
  },
  {
    category: "FRONTEND",
    color: "#bc13fe",
    icon: "bi-layout-text-window-reverse",
    items: [
      { name: "Angular", level: 80 },
      { name: "TypeScript", level: 85 },
      { name: "HTML5 / CSS3", level: 90 },
      { name: "SCSS", level: 80 },
      { name: "RxJS", level: 70 },
      { name: "Bootstrap", level: 85 },
    ],
  },
  {
    category: "DEVOPS & TOOLS",
    color: "#39ff14",
    icon: "bi-tools",
    items: [
      { name: "Git / GitHub", level: 90 },
      { name: "Docker", level: 65 },
      { name: "Linux", level: 70 },
      { name: "IntelliJ IDEA", level: 95 },
      { name: "Postman", level: 88 },
      { name: "SQL / JPA", level: 80 },
    ],
  },
];

const TECH_TAGS = [
  "Java", "Spring Boot", "Angular", "TypeScript", "WebFlux",
  "Lombok", "JPA", "REST", "Git", "Docker", "Linux", "Maven",
  "RxJS", "SCSS", "Postman", "IntelliJ",
];

export default function Skills() {
  return (
    <section id="skills" className="py-5" style={{ paddingTop: "6rem !important", paddingBottom: "6rem !important" }}>
      <div
        className="position-absolute w-100"
        style={{
          height: "100%",
          top: 0,
          left: 0,
          background: "linear-gradient(180deg, transparent, rgba(0,242,255,0.02) 50%, transparent)",
          pointerEvents: "none",
        }}
      />

      <div className="container-xl position-relative" style={{ zIndex: 1, paddingTop: "3rem", paddingBottom: "3rem" }}>
        {/* Section header */}
        <div className="mb-5">
          <h2 className="section-title mb-3">SKILL TREE</h2>
          <p className="font-mono-tech" style={{ fontSize: "0.8rem", color: "rgba(150,150,180,0.6)", marginLeft: "2rem" }}>
            <span style={{ color: "var(--cyan)" }}>&gt;</span> Tecnologias e ferramentas dominadas
          </p>
        </div>

        <div className="row g-4">
          {SKILLS.map((group) => (
            <div key={group.category} className="col-lg-4 col-md-6">
              <div className="card-system h-100 p-4">
                {/* Category header */}
                <div className="d-flex align-items-center gap-2 mb-4 pb-3" style={{ borderBottom: `1px solid ${group.color}25` }}>
                  <div
                    className="d-flex align-items-center justify-content-center rounded-2"
                    style={{
                      width: "36px",
                      height: "36px",
                      background: `${group.color}12`,
                      border: `1px solid ${group.color}30`,
                    }}
                  >
                    <i
                      className={`bi ${group.icon}`}
                      style={{ color: group.color, fontSize: "1rem", textShadow: `0 0 8px ${group.color}` }}
                    />
                  </div>
                  <span
                    className="font-orbitron fw-bold"
                    style={{
                      fontSize: "0.7rem",
                      letterSpacing: "0.15em",
                      color: group.color,
                      textShadow: `0 0 8px ${group.color}`,
                    }}
                  >
                    [ {group.category} ]
                  </span>
                </div>

                {/* Skills */}
                <div className="d-flex flex-column gap-3">
                  {group.items.map((skill) => (
                    <div key={skill.name}>
                      <div className="d-flex justify-content-between align-items-center mb-1">
                        <span className="font-mono-tech" style={{ fontSize: "0.78rem", color: "rgba(200,200,220,0.85)" }}>
                          {skill.name}
                        </span>
                        <span
                          className="font-mono-tech"
                          style={{ fontSize: "0.72rem", color: group.color, textShadow: `0 0 6px ${group.color}` }}
                        >
                          {skill.level}%
                        </span>
                      </div>
                      <div className="progress">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          style={{
                            width: `${skill.level}%`,
                            background: `linear-gradient(90deg, ${group.color}, ${group.color}80)`,
                            boxShadow: `0 0 8px ${group.color}60`,
                          }}
                          aria-valuenow={skill.level}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Tech tags */}
        <div className="mt-5 pt-3">
          <div className="text-center mb-3">
            <span className="font-orbitron" style={{ fontSize: "0.6rem", color: "rgba(0,242,255,0.4)", letterSpacing: "0.2em" }}>
              {"// STACK COMPLETA"}
            </span>
          </div>
          <div className="d-flex flex-wrap gap-2 justify-content-center">
            {TECH_TAGS.map((tag) => (
              <span key={tag} className="tag-tech">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
