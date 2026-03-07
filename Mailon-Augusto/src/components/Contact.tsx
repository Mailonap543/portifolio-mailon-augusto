"use client";

const CONTACT_LINKS = [
  {
    label: "WHATSAPP",
    value: "+55 (18) 99722-4061",
    href: "https://api.whatsapp.com/send?phone=18997224061",
    color: "#25D366",
    icon: "bi-whatsapp",
    description: "Resposta rápida via WhatsApp",
  },
  {
    label: "EMAIL",
    value: "augustomailon4@gmail.com",
    href: "mailto:augustomailon4@gmail.com",
    color: "#00f2ff",
    icon: "bi-envelope-fill",
    description: "Para propostas e projetos",
  },
  {
    label: "GITHUB",
    value: "@Mailonap543",
    href: "https://github.com/Mailonap543",
    color: "#bc13fe",
    icon: "bi-github",
    description: "Veja meus repositórios",
  },
];

const SERVICES = [
  { icon: "bi-cloud-arrow-up-fill", text: "Desenvolvimento de APIs REST" },
  { icon: "bi-layers-fill", text: "Aplicações Full Stack" },
  { icon: "bi-diagram-3-fill", text: "Consultoria em Arquitetura" },
  { icon: "bi-plug-fill", text: "Integração de Sistemas" },
];

export default function Contact() {
  return (
    <section
      id="contato"
      style={{
        paddingTop: "6rem",
        paddingBottom: "6rem",
        background: "linear-gradient(180deg, transparent, rgba(0,242,255,0.02) 50%, transparent)",
      }}
    >
      <div className="container-xl">
        {/* Section header */}
        <div className="mb-5">
          <h2 className="section-title mb-3">INICIAR CONTATO</h2>
          <p className="font-mono-tech" style={{ fontSize: "0.8rem", color: "rgba(150,150,180,0.6)", marginLeft: "2rem" }}>
            <span style={{ color: "var(--cyan)" }}>&gt;</span> Vamos construir algo incrível juntos
          </p>
        </div>

        <div className="row g-5 align-items-center">
          {/* Left: Message card */}
          <div className="col-lg-5">
            <div className="card-system p-4 p-lg-5">
              {/* Status */}
              <div className="d-flex align-items-center gap-2 mb-4">
                <span
                  className="rounded-circle"
                  style={{
                    width: "8px",
                    height: "8px",
                    background: "var(--green)",
                    boxShadow: "0 0 8px var(--green)",
                    animation: "blink 1.5s ease-in-out infinite",
                    display: "inline-block",
                  }}
                />
                <span className="font-mono-tech" style={{ fontSize: "0.7rem", color: "var(--green)", letterSpacing: "0.1em" }}>
                  DISPONÍVEL PARA PROJETOS
                </span>
              </div>

              <h3 className="font-orbitron fw-black mb-3" style={{ fontSize: "1.5rem", color: "white", lineHeight: 1.3 }}>
                Pronto para{" "}
                <span className="glow-cyan">colaborar?</span>
              </h3>

              <p className="font-mono-tech mb-4" style={{ fontSize: "0.8rem", color: "rgba(180,180,200,0.65)", lineHeight: 1.8 }}>
                Estou sempre aberto a novas oportunidades, projetos freelance ou
                simplesmente uma boa conversa sobre tecnologia. Entre em contato
                e vamos criar algo incrível!
              </p>

              {/* Services */}
              <div className="d-flex flex-column gap-2 mb-4">
                {SERVICES.map((service) => (
                  <div key={service.text} className="d-flex align-items-center gap-3">
                    <div
                      className="d-flex align-items-center justify-content-center rounded-2 flex-shrink-0"
                      style={{
                        width: "28px",
                        height: "28px",
                        background: "rgba(0,242,255,0.08)",
                        border: "1px solid rgba(0,242,255,0.15)",
                      }}
                    >
                      <i className={`bi ${service.icon}`} style={{ fontSize: "0.75rem", color: "var(--cyan)" }} />
                    </div>
                    <span className="font-mono-tech" style={{ fontSize: "0.78rem", color: "rgba(180,180,200,0.7)" }}>
                      {service.text}
                    </span>
                  </div>
                ))}
              </div>

              {/* Quick action */}
              <a
                href="https://api.whatsapp.com/send?phone=18997224061"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-system d-inline-flex align-items-center gap-2"
              >
                <i className="bi bi-whatsapp" />
                FALAR AGORA
              </a>
            </div>
          </div>

          {/* Right: Contact cards */}
          <div className="col-lg-7">
            <div className="d-flex flex-column gap-3">
              {CONTACT_LINKS.map((contact) => (
                <a
                  key={contact.label}
                  href={contact.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-link-card"
                  style={{
                    borderColor: `${contact.color}20`,
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = `${contact.color}50`;
                    (e.currentTarget as HTMLElement).style.boxShadow = `0 4px 30px ${contact.color}15`;
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = `${contact.color}20`;
                    (e.currentTarget as HTMLElement).style.boxShadow = "none";
                  }}
                >
                  {/* Icon */}
                  <div
                    className="contact-icon-box"
                    style={{
                      background: `${contact.color}10`,
                      border: `1px solid ${contact.color}30`,
                    }}
                  >
                    <i
                      className={`bi ${contact.icon}`}
                      style={{ color: contact.color, fontSize: "1.3rem", textShadow: `0 0 10px ${contact.color}` }}
                    />
                  </div>

                  {/* Info */}
                  <div className="flex-grow-1 min-w-0">
                    <div
                      className="font-orbitron fw-bold mb-1"
                      style={{ fontSize: "0.65rem", letterSpacing: "0.15em", color: contact.color }}
                    >
                      {contact.label}
                    </div>
                    <div className="font-mono-tech text-truncate" style={{ fontSize: "0.85rem", color: "white" }}>
                      {contact.value}
                    </div>
                    <div className="font-mono-tech" style={{ fontSize: "0.7rem", color: "rgba(120,120,150,0.5)", marginTop: "0.15rem" }}>
                      {contact.description}
                    </div>
                  </div>

                  {/* Arrow */}
                  <i
                    className="bi bi-arrow-right flex-shrink-0"
                    style={{ color: contact.color, fontSize: "1.1rem", opacity: 0.6 }}
                  />
                </a>
              ))}
            </div>

            {/* Bottom note */}
            <div
              className="mt-4 p-3 rounded-3 d-flex align-items-center gap-3"
              style={{
                background: "rgba(0,242,255,0.03)",
                border: "1px solid rgba(0,242,255,0.1)",
              }}
            >
              <i className="bi bi-clock-history" style={{ color: "rgba(0,242,255,0.5)", fontSize: "1.1rem" }} />
              <span className="font-mono-tech" style={{ fontSize: "0.72rem", color: "rgba(150,150,180,0.5)" }}>
                Tempo médio de resposta: <span style={{ color: "var(--cyan)" }}>menos de 24 horas</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
