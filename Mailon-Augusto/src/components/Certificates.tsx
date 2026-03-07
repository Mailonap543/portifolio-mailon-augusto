const CERTIFICATES = [
  {
    nome: "Java Fullstack",
    instituicao: "Oracle",
    dataEmissao: "2024",
    urlCertificado: "#",
    descricao: "Desenvolvimento completo com Java, Spring Boot e boas práticas de arquitetura.",
    badge: "☕",
    badgeColor: "#b07219",
    tags: ["Java", "Spring Boot", "REST"],
  },
  {
    nome: "Angular Developer",
    instituicao: "Google / Udemy",
    dataEmissao: "2024",
    urlCertificado: "#",
    descricao: "Desenvolvimento de SPAs com Angular, TypeScript, RxJS e Angular Material.",
    badge: "🅰",
    badgeColor: "#dd0031",
    tags: ["Angular", "TypeScript", "RxJS"],
  },
  {
    nome: "Spring Boot Avançado",
    instituicao: "Alura",
    dataEmissao: "2023",
    urlCertificado: "#",
    descricao: "APIs RESTful com Spring Boot, segurança, testes e deploy em produção.",
    badge: "🍃",
    badgeColor: "#6db33f",
    tags: ["Spring Boot", "Security", "Deploy"],
  },
];

export default function Certificates() {
  return (
    <section
      id="certificados"
      style={{
        paddingTop: "6rem",
        paddingBottom: "6rem",
        background: "linear-gradient(180deg, transparent, rgba(188,19,254,0.03) 50%, transparent)",
      }}
    >
      <div className="container-xl">
        {/* Section header */}
        <div className="mb-5">
          <h2 className="section-title mb-3">ACHIEVEMENTS</h2>
          <p className="font-mono-tech" style={{ fontSize: "0.8rem", color: "rgba(150,150,180,0.6)", marginLeft: "2rem" }}>
            <span style={{ color: "var(--purple)" }}>&gt;</span> Certificações e conquistas desbloqueadas
          </p>
        </div>

        <div className="row g-4">
          {CERTIFICATES.map((cert, i) => (
            <div key={i} className="col-lg-4 col-md-6">
              <div className="achievement-card h-100">
                {/* Top row: badge + unlock label */}
                <div className="d-flex align-items-start justify-content-between mb-4">
                  <div
                    className="achievement-badge"
                    style={{
                      borderColor: `${cert.badgeColor}40`,
                      background: `${cert.badgeColor}10`,
                    }}
                  >
                    {cert.badge}
                  </div>
                  <div className="text-end">
                    <div
                      className="d-inline-flex align-items-center gap-1 px-2 py-1 rounded-2"
                      style={{
                        background: "rgba(251,191,36,0.08)",
                        border: "1px solid rgba(251,191,36,0.25)",
                      }}
                    >
                      <i className="bi bi-trophy-fill" style={{ fontSize: "0.6rem", color: "#fbbf24" }} />
                      <span className="font-mono-tech" style={{ fontSize: "0.6rem", color: "#fbbf24", letterSpacing: "0.08em" }}>
                        ACHIEVEMENT UNLOCKED
                      </span>
                    </div>
                    <div className="font-mono-tech mt-1" style={{ fontSize: "0.65rem", color: "rgba(120,120,150,0.5)" }}>
                      {cert.dataEmissao}
                    </div>
                  </div>
                </div>

                {/* Title */}
                <h3
                  className="font-orbitron fw-bold mb-1"
                  style={{ fontSize: "0.95rem", color: "white", letterSpacing: "0.05em" }}
                >
                  {cert.nome}
                </h3>

                {/* Institution */}
                <div className="d-flex align-items-center gap-2 mb-3">
                  <i className="bi bi-building" style={{ fontSize: "0.75rem", color: "var(--purple)" }} />
                  <span className="font-mono-tech" style={{ fontSize: "0.75rem", color: "var(--purple)", textShadow: "0 0 8px var(--purple)" }}>
                    {cert.instituicao}
                  </span>
                </div>

                {/* Description */}
                <p className="font-mono-tech mb-4" style={{ fontSize: "0.78rem", color: "rgba(180,180,200,0.65)", lineHeight: 1.7 }}>
                  {cert.descricao}
                </p>

                {/* Tags */}
                <div className="d-flex flex-wrap gap-2 mb-4">
                  {cert.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono-tech px-2 py-1 rounded-2"
                      style={{
                        fontSize: "0.62rem",
                        color: cert.badgeColor,
                        background: `${cert.badgeColor}10`,
                        border: `1px solid ${cert.badgeColor}30`,
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Link */}
                {cert.urlCertificado !== "#" ? (
                  <a
                    href={cert.urlCertificado}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-system-purple"
                    style={{ fontSize: "0.65rem" }}
                  >
                    <i className="bi bi-patch-check-fill me-1" />
                    VER CERTIFICADO
                  </a>
                ) : (
                  <span
                    className="font-mono-tech d-inline-flex align-items-center gap-1"
                    style={{ fontSize: "0.65rem", color: "rgba(120,120,150,0.4)" }}
                  >
                    <i className="bi bi-lock-fill" />
                    CERTIFICADO PRIVADO
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Stats row */}
        <div className="mt-5">
          <div className="row g-3 justify-content-center">
            {[
              { value: "3+", label: "Certificações", icon: "bi-award-fill", color: "var(--cyan)" },
              { value: "2+", label: "Anos de Experiência", icon: "bi-calendar-check-fill", color: "var(--purple)" },
              { value: "1350+", label: "Commits no GitHub", icon: "bi-git", color: "var(--green)" },
            ].map((stat) => (
              <div key={stat.label} className="col-md-4 col-sm-6">
                <div
                  className="text-center p-4 rounded-3"
                  style={{
                    background: "rgba(10,10,26,0.8)",
                    border: `1px solid ${stat.color}20`,
                  }}
                >
                  <i
                    className={`bi ${stat.icon} d-block mb-2`}
                    style={{ fontSize: "1.5rem", color: stat.color, textShadow: `0 0 10px ${stat.color}` }}
                  />
                  <div
                    className="font-orbitron fw-black mb-1"
                    style={{ fontSize: "1.8rem", color: stat.color, textShadow: `0 0 15px ${stat.color}` }}
                  >
                    {stat.value}
                  </div>
                  <div className="font-mono-tech" style={{ fontSize: "0.7rem", color: "rgba(150,150,180,0.6)" }}>
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
