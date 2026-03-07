"use client";

import { useEffect, useState } from "react";

interface Project {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  stargazers_count: number;
  updated_at: string;
  topics: string[];
  fork: boolean;
}

const LANG_COLORS: Record<string, string> = {
  Java: "#b07219",
  TypeScript: "#3178c6",
  JavaScript: "#f1e05a",
  Python: "#3572A5",
  HTML: "#e34c26",
  CSS: "#563d7c",
  SCSS: "#c6538c",
  Shell: "#89e051",
};

const LANG_ICONS: Record<string, string> = {
  Java: "bi-cup-hot-fill",
  TypeScript: "bi-filetype-tsx",
  JavaScript: "bi-filetype-js",
  Python: "bi-filetype-py",
  HTML: "bi-filetype-html",
  CSS: "bi-filetype-css",
  SCSS: "bi-filetype-scss",
  Shell: "bi-terminal-fill",
};

function formatDate(dateStr: string) {
  const d = new Date(dateStr);
  return d.toLocaleDateString("pt-BR", { month: "short", year: "numeric" });
}

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch(
      "https://api.github.com/users/Mailonap543/repos?sort=updated&per_page=9&type=owner"
    )
      .then((r) => r.json())
      .then((data: Project[]) => {
        const filtered = data.filter((p) => !p.fork).slice(0, 9);
        setProjects(filtered);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, []);

  return (
    <section
      id="projetos"
      style={{
        paddingTop: "6rem",
        paddingBottom: "6rem",
        background: "linear-gradient(180deg, transparent, rgba(188,19,254,0.02) 50%, transparent)",
      }}
    >
      <div className="container-xl">
        {/* Section header */}
        <div className="mb-5">
          <h2 className="section-title mb-3">QUEST LOG</h2>
          <p className="font-mono-tech" style={{ fontSize: "0.8rem", color: "rgba(150,150,180,0.6)", marginLeft: "2rem" }}>
            <span style={{ color: "var(--cyan)" }}>&gt;</span> Projetos recentes do GitHub
          </p>
        </div>

        {/* Loading */}
        {loading && (
          <div className="d-flex flex-column align-items-center justify-content-center py-5 gap-3">
            <div className="spinner-cyber" />
            <span className="font-mono-tech" style={{ fontSize: "0.75rem", color: "rgba(150,150,180,0.5)", letterSpacing: "0.15em" }}>
              CARREGANDO DADOS...
            </span>
          </div>
        )}

        {/* Error */}
        {error && (
          <div className="text-center py-5">
            <i className="bi bi-exclamation-triangle-fill mb-3 d-block" style={{ fontSize: "2rem", color: "#ff2d55" }} />
            <span className="font-mono-tech" style={{ fontSize: "0.85rem", color: "#ff2d55" }}>
              &gt; ERRO: Falha ao carregar repositórios
            </span>
          </div>
        )}

        {/* Projects grid */}
        {!loading && !error && (
          <>
            <div className="row g-4">
              {projects.map((project, i) => (
                <div key={project.id} className="col-lg-4 col-md-6">
                  <div className="project-card" style={{ animationDelay: `${i * 0.08}s` }}>
                    {/* Card header */}
                    <div
                      className="d-flex align-items-start justify-content-between p-4 pb-3"
                      style={{ borderBottom: "1px solid rgba(0,242,255,0.08)" }}
                    >
                      <div className="d-flex align-items-center gap-2 flex-1 min-w-0">
                        <div
                          className="d-flex align-items-center justify-content-center rounded-2 flex-shrink-0"
                          style={{
                            width: "32px",
                            height: "32px",
                            background: "rgba(0,242,255,0.08)",
                            border: "1px solid rgba(0,242,255,0.15)",
                          }}
                        >
                          <i className="bi bi-code-slash" style={{ color: "var(--cyan)", fontSize: "0.85rem" }} />
                        </div>
                        <h3
                          className="font-orbitron fw-bold mb-0 text-truncate"
                          style={{ fontSize: "0.78rem", color: "white", letterSpacing: "0.05em" }}
                          title={project.name}
                        >
                          {project.name}
                        </h3>
                      </div>
                      {project.stargazers_count > 0 && (
                        <span
                          className="font-mono-tech d-flex align-items-center gap-1 flex-shrink-0 ms-2"
                          style={{ fontSize: "0.72rem", color: "#fbbf24" }}
                        >
                          <i className="bi bi-star-fill" style={{ fontSize: "0.65rem" }} />
                          {project.stargazers_count}
                        </span>
                      )}
                    </div>

                    {/* Description */}
                    <div className="px-4 py-3 flex-grow-1">
                      <p
                        className="font-mono-tech mb-0"
                        style={{
                          fontSize: "0.75rem",
                          color: "rgba(180,180,200,0.65)",
                          lineHeight: 1.7,
                          display: "-webkit-box",
                          WebkitLineClamp: 3,
                          WebkitBoxOrient: "vertical",
                          overflow: "hidden",
                        }}
                      >
                        {project.description || "Sem descrição disponível."}
                      </p>
                    </div>

                    {/* Topics */}
                    {project.topics && project.topics.length > 0 && (
                      <div className="px-4 pb-3 d-flex flex-wrap gap-1">
                        {project.topics.slice(0, 3).map((topic) => (
                          <span key={topic} className="tag-tech" style={{ fontSize: "0.62rem" }}>
                            {topic}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Footer */}
                    <div
                      className="d-flex align-items-center justify-content-between px-4 py-3"
                      style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}
                    >
                      <div className="d-flex align-items-center gap-2">
                        {project.language && (
                          <>
                            <i
                              className={`bi ${LANG_ICONS[project.language] || "bi-file-code"}`}
                              style={{
                                color: LANG_COLORS[project.language] || "#888",
                                fontSize: "0.85rem",
                              }}
                            />
                            <span className="font-mono-tech" style={{ fontSize: "0.7rem", color: "rgba(150,150,180,0.6)" }}>
                              {project.language}
                            </span>
                          </>
                        )}
                      </div>
                      <div className="d-flex align-items-center gap-3">
                        <span className="font-mono-tech" style={{ fontSize: "0.65rem", color: "rgba(120,120,150,0.5)" }}>
                          <i className="bi bi-clock me-1" />
                          {formatDate(project.updated_at)}
                        </span>
                        <a
                          href={project.html_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-system"
                          style={{ padding: "0.3rem 0.75rem", fontSize: "0.6rem" }}
                        >
                          <i className="bi bi-box-arrow-up-right me-1" />
                          VER
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* GitHub CTA */}
            <div className="mt-5 text-center">
              <div
                className="d-inline-flex align-items-center gap-3 p-4 rounded-3"
                style={{
                  background: "rgba(188,19,254,0.05)",
                  border: "1px solid rgba(188,19,254,0.2)",
                }}
              >
                <i className="bi bi-github" style={{ fontSize: "1.5rem", color: "var(--purple)" }} />
                <div className="text-start">
                  <div className="font-orbitron" style={{ fontSize: "0.7rem", color: "var(--purple)", letterSpacing: "0.1em" }}>
                    MAIS PROJETOS DISPONÍVEIS
                  </div>
                  <div className="font-mono-tech" style={{ fontSize: "0.7rem", color: "rgba(150,150,180,0.5)" }}>
                    Veja todos os repositórios no GitHub
                  </div>
                </div>
                <a
                  href="https://github.com/Mailonap543"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-system-purple"
                  style={{ fontSize: "0.65rem" }}
                >
                  <i className="bi bi-github me-1" />
                  VER TODOS →
                </a>
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
