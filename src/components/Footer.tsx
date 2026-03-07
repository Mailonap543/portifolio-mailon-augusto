"use client";

export default function Footer() {
  const year = new Date().getFullYear();

  const socialLinks = [
    { href: "https://github.com/Mailonap543", icon: "bi-github", label: "GitHub", color: "var(--purple)" },
    { href: "mailto:augustomailon4@gmail.com", icon: "bi-envelope-fill", label: "Email", color: "var(--cyan)" },
    { href: "https://api.whatsapp.com/send?phone=18997224061", icon: "bi-whatsapp", label: "WhatsApp", color: "#25D366" },
  ];

  const navLinks = [
    { href: "#sobre", label: "Sobre" },
    { href: "#skills", label: "Skills" },
    { href: "#projetos", label: "Projetos" },
    { href: "#certificados", label: "Certificados" },
    { href: "#contato", label: "Contato" },
  ];

  return (
    <footer className="footer-cyber">
      {/* Top divider */}
      <div className="cyber-divider" />

      <div className="container-xl py-5">
        <div className="row g-4 align-items-start">
          {/* Brand */}
          <div className="col-lg-4">
            <div className="font-orbitron fw-black glow-cyan mb-3" style={{ fontSize: "1.1rem", letterSpacing: "0.15em" }}>
              <i className="bi bi-terminal-fill me-2" style={{ fontSize: "0.9rem" }} />
              SYSTEM<span className="text-white">.</span>MAILON
            </div>
            <p className="font-mono-tech mb-4" style={{ fontSize: "0.75rem", color: "rgba(150,150,180,0.5)", lineHeight: 1.7, maxWidth: "280px" }}>
              Desenvolvedor Full Stack especializado em Java, Spring Boot e Angular.
              Construindo soluções robustas e escaláveis.
            </p>
            {/* Social links */}
            <div className="d-flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={social.label}
                  className="d-flex align-items-center justify-content-center rounded-2"
                  style={{
                    width: "38px",
                    height: "38px",
                    background: "rgba(255,255,255,0.04)",
                    border: `1px solid ${social.color}25`,
                    color: social.color,
                    fontSize: "1rem",
                    textDecoration: "none",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.background = `${social.color}15`;
                    (e.currentTarget as HTMLElement).style.borderColor = `${social.color}60`;
                    (e.currentTarget as HTMLElement).style.boxShadow = `0 0 15px ${social.color}30`;
                    (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.04)";
                    (e.currentTarget as HTMLElement).style.borderColor = `${social.color}25`;
                    (e.currentTarget as HTMLElement).style.boxShadow = "none";
                    (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                  }}
                >
                  <i className={`bi ${social.icon}`} />
                </a>
              ))}
            </div>
          </div>

          {/* Nav links */}
          <div className="col-lg-4 col-md-6">
            <div className="font-orbitron fw-bold mb-3" style={{ fontSize: "0.65rem", color: "var(--cyan)", letterSpacing: "0.2em" }}>
              {"// NAVEGAÇÃO"}
            </div>
            <div className="d-flex flex-column gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="font-mono-tech d-flex align-items-center gap-2"
                  style={{
                    fontSize: "0.78rem",
                    color: "rgba(150,150,180,0.55)",
                    textDecoration: "none",
                    transition: "all 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.color = "var(--cyan)";
                    (e.currentTarget as HTMLElement).style.paddingLeft = "6px";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.color = "rgba(150,150,180,0.55)";
                    (e.currentTarget as HTMLElement).style.paddingLeft = "0";
                  }}
                >
                  <i className="bi bi-chevron-right" style={{ fontSize: "0.6rem", color: "rgba(0,242,255,0.3)" }} />
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Tech stack */}
          <div className="col-lg-4 col-md-6">
            <div className="font-orbitron fw-bold mb-3" style={{ fontSize: "0.65rem", color: "var(--purple)", letterSpacing: "0.2em" }}>
              {"// TECH STACK"}
            </div>
            <div className="d-flex flex-wrap gap-2">
              {["Java", "Spring Boot", "Angular", "TypeScript", "REST", "Docker", "Git", "SQL"].map((tech) => (
                <span
                  key={tech}
                  className="font-mono-tech px-2 py-1 rounded-2"
                  style={{
                    fontSize: "0.62rem",
                    color: "rgba(150,150,180,0.5)",
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.06)",
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="cyber-divider" />
      <div className="container-xl py-3">
        <div className="d-flex flex-column flex-md-row align-items-center justify-content-between gap-2">
          <span className="font-mono-tech" style={{ fontSize: "0.7rem", color: "rgba(100,100,130,0.5)" }}>
            &copy; {year} Mailon Augusto — Todos os direitos reservados
          </span>
          <span className="font-mono-tech d-flex align-items-center gap-2" style={{ fontSize: "0.65rem", color: "rgba(100,100,130,0.4)" }}>
            <i className="bi bi-lightning-charge-fill" style={{ color: "rgba(0,242,255,0.3)" }} />
            Built with Next.js · Bootstrap 5 · Deployed on Vercel
          </span>
        </div>
      </div>
    </footer>
  );
}
