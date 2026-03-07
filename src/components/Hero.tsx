"use client";

import { useEffect, useState } from "react";

const TYPING_TEXTS = [
  "Desenvolvedor Full Stack",
  "Java & Spring Boot Expert",
  "Angular & TypeScript Dev",
  "Arquiteto de Sistemas",
];

export default function Hero() {
  const [displayText, setDisplayText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = TYPING_TEXTS[textIndex];
    const speed = isDeleting ? 45 : 90;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(current.slice(0, charIndex + 1));
        if (charIndex + 1 === current.length) {
          setTimeout(() => setIsDeleting(true), 2200);
        } else {
          setCharIndex((c) => c + 1);
        }
      } else {
        setDisplayText(current.slice(0, charIndex - 1));
        if (charIndex - 1 === 0) {
          setIsDeleting(false);
          setTextIndex((i) => (i + 1) % TYPING_TEXTS.length);
          setCharIndex(0);
        } else {
          setCharIndex((c) => c - 1);
        }
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, textIndex]);

  const stats = [
    { label: "NÍVEL XP", value: "21", icon: "bi-lightning-charge-fill" },
    { label: "CARGO", value: "Full Stack Dev", icon: "bi-person-badge-fill" },
    { label: "COMMITS", value: "1350+", icon: "bi-git" },
    { label: "JAVA %", value: "95%", icon: "bi-cup-hot-fill" },
  ];

  const skillBars = [
    { name: "Java", pct: 95, color: "#b07219" },
    { name: "Spring Boot", pct: 90, color: "#6db33f" },
    { name: "Angular", pct: 80, color: "#dd0031" },
    { name: "TypeScript", pct: 85, color: "#3178c6" },
  ];

  return (
    <section id="sobre" className="hero-section">
      {/* Grid background */}
      <div className="position-absolute inset-0 grid-bg" style={{ opacity: 0.45 }} />

      {/* Gradient overlay */}
      <div
        className="position-absolute inset-0"
        style={{
          background: "linear-gradient(135deg, rgba(6,6,16,0.98) 0%, rgba(6,6,16,0.85) 50%, rgba(6,6,16,0.6) 100%)",
        }}
      />

      {/* Scanline effect */}
      <div
        className="position-absolute inset-0"
        style={{
          background: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.025) 2px, rgba(0,0,0,0.025) 4px)",
          pointerEvents: "none",
        }}
      />

      {/* Ambient glow orbs */}
      <div
        className="position-absolute"
        style={{
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(0,242,255,0.06) 0%, transparent 70%)",
          top: "10%",
          left: "-10%",
          pointerEvents: "none",
        }}
      />
      <div
        className="position-absolute"
        style={{
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(188,19,254,0.06) 0%, transparent 70%)",
          bottom: "10%",
          right: "-5%",
          pointerEvents: "none",
        }}
      />

      <div className="container-xl position-relative" style={{ zIndex: 10, paddingTop: "6rem", paddingBottom: "4rem" }}>
        <div className="row align-items-center g-5">
          {/* Left: Text */}
          <div className="col-lg-6 animate-fade-in-left">
            {/* Status badge */}
            <div className="status-badge mb-4">
              <span className="status-dot" />
              <span>SISTEMA ONLINE — DISPONÍVEL PARA PROJETOS</span>
            </div>

            {/* Name */}
            <h1 className="glitch-text mb-3" style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)", lineHeight: 1.1 }}>
              MAILON
              <br />
              <span style={{ color: "var(--cyan)" }}>AUGUSTO</span>
            </h1>

            {/* Typing effect */}
            <div className="d-flex align-items-center gap-2 mb-4" style={{ minHeight: "2rem" }}>
              <span className="font-mono-tech" style={{ color: "rgba(0,242,255,0.5)", fontSize: "1rem" }}>&gt;</span>
              <span className="glow-cyan font-mono-tech terminal-cursor" style={{ fontSize: "1.1rem" }}>
                {displayText}
              </span>
            </div>

            {/* Description */}
            <p className="font-mono-tech mb-4" style={{ color: "rgba(200,200,220,0.65)", fontSize: "0.85rem", lineHeight: 1.8, maxWidth: "520px" }}>
              Desenvolvedor Full Stack apaixonado por criar soluções robustas e
              escaláveis. Especializado em <span className="glow-cyan">Java</span>,{" "}
              <span style={{ color: "#6db33f", textShadow: "0 0 8px #6db33f" }}>Spring Boot</span> e{" "}
              <span style={{ color: "#dd0031", textShadow: "0 0 8px #dd0031" }}>Angular</span>, com foco
              em arquitetura de sistemas e boas práticas de desenvolvimento.
            </p>

            {/* Tech stack badges */}
            <div className="d-flex flex-wrap gap-2 mb-4">
              {["Java 21", "Spring Boot", "Angular", "TypeScript", "REST APIs", "Docker"].map((tech) => (
                <span key={tech} className="tag-tech">{tech}</span>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="d-flex flex-wrap gap-3">
              <a href="#projetos" className="btn-system">
                <i className="bi bi-folder2-open me-2" />
                VER PROJETOS
              </a>
              <a
                href="https://github.com/Mailonap543"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-system-purple"
              >
                <i className="bi bi-github me-2" />
                GITHUB
              </a>
              <a
                href="mailto:augustomailon4@gmail.com"
                className="btn-system-green"
              >
                <i className="bi bi-envelope-fill me-2" />
                EMAIL
              </a>
            </div>
          </div>

          {/* Right: Status Window */}
          <div className="col-lg-6 d-flex justify-content-center justify-content-lg-end animate-fade-in-right">
            <div className="window-chrome animate-float animate-pulse-glow" style={{ width: "100%", maxWidth: "380px" }}>
              {/* Window titlebar */}
              <div className="window-titlebar">
                <span className="window-dot" style={{ background: "#ff5f57" }} />
                <span className="window-dot" style={{ background: "#febc2e" }} />
                <span className="window-dot" style={{ background: "#28c840" }} />
                <span className="font-orbitron ms-2" style={{ fontSize: "0.65rem", color: "var(--cyan)", letterSpacing: "0.15em" }}>
                  <i className="bi bi-terminal me-1" />
                  PLAYER_STATUS.exe
                </span>
              </div>

              {/* Stats grid */}
              <div className="p-4">
                <div className="row g-3 mb-4">
                  {stats.map((stat) => (
                    <div key={stat.label} className="col-6">
                      <div
                        className="p-3 rounded-2"
                        style={{
                          background: "rgba(0,242,255,0.04)",
                          border: "1px solid rgba(0,242,255,0.1)",
                        }}
                      >
                        <div className="font-orbitron mb-1" style={{ fontSize: "0.55rem", color: "rgba(150,150,180,0.7)", letterSpacing: "0.1em" }}>
                          <i className={`bi ${stat.icon} me-1`} />
                          {stat.label}
                        </div>
                        <div className="font-mono-tech glow-cyan" style={{ fontSize: "0.9rem" }}>
                          {stat.value}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Skill bars */}
                <div className="mb-3">
                  <div className="font-orbitron mb-3" style={{ fontSize: "0.6rem", color: "rgba(0,242,255,0.6)", letterSpacing: "0.15em" }}>
                    [ SKILL LEVELS ]
                  </div>
                  <div className="d-flex flex-column gap-3">
                    {skillBars.map((skill) => (
                      <div key={skill.name}>
                        <div className="d-flex justify-content-between mb-1">
                          <span className="font-mono-tech" style={{ fontSize: "0.75rem", color: "rgba(200,200,220,0.8)" }}>
                            {skill.name}
                          </span>
                          <span className="font-mono-tech" style={{ fontSize: "0.75rem", color: skill.color, textShadow: `0 0 6px ${skill.color}` }}>
                            {skill.pct}%
                          </span>
                        </div>
                        <div className="progress">
                          <div
                            className="progress-bar"
                            style={{
                              width: `${skill.pct}%`,
                              background: `linear-gradient(90deg, ${skill.color}, ${skill.color}aa)`,
                              boxShadow: `0 0 8px ${skill.color}`,
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* GitHub handle */}
                <div className="text-center pt-2" style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
                  <a
                    href="https://github.com/Mailonap543"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono-tech"
                    style={{ fontSize: "0.7rem", color: "rgba(150,150,180,0.5)", textDecoration: "none" }}
                  >
                    <i className="bi bi-github me-1" />
                    @Mailonap543
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="position-absolute d-flex flex-column align-items-center gap-2"
        style={{ bottom: "2rem", left: "50%", transform: "translateX(-50%)", animation: "float 2s ease-in-out infinite" }}
      >
        <span className="font-mono-tech" style={{ fontSize: "0.6rem", color: "rgba(150,150,180,0.4)", letterSpacing: "0.2em" }}>
          SCROLL
        </span>
        <div style={{ width: "1px", height: "2.5rem", background: "linear-gradient(180deg, var(--cyan), transparent)" }} />
        <i className="bi bi-chevron-double-down" style={{ color: "rgba(0,242,255,0.4)", fontSize: "0.7rem" }} />
      </div>
    </section>
  );
}
