"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#sobre", label: "SOBRE", icon: "bi-person-fill" },
    { href: "#skills", label: "SKILLS", icon: "bi-cpu-fill" },
    { href: "#projetos", label: "PROJETOS", icon: "bi-code-slash" },
    { href: "#certificados", label: "CERTS", icon: "bi-award-fill" },
    { href: "#contato", label: "CONTATO", icon: "bi-send-fill" },
  ];

  return (
    <nav
      className={`navbar navbar-expand-lg fixed-top navbar-cyber ${scrolled ? "scrolled" : ""}`}
      style={{ zIndex: 1050 }}
    >
      <div className="container-xl">
        {/* Brand */}
        <Link
          href="#"
          className="navbar-brand font-orbitron fw-black glow-cyan"
          style={{ fontSize: "1rem", letterSpacing: "0.15em" }}
        >
          <span className="me-1" style={{ color: "var(--cyan)" }}>
            <i className="bi bi-terminal-fill me-2" style={{ fontSize: "0.9rem" }} />
          </span>
          SYSTEM<span className="text-white">.</span>MAILON
        </Link>

        {/* Mobile toggler */}
        <button
          className="navbar-toggler navbar-toggler-cyber"
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          <span style={{ color: "var(--cyan)", fontSize: "1.2rem" }}>
            <i className={`bi ${menuOpen ? "bi-x-lg" : "bi-list"}`} />
          </span>
        </button>

        {/* Nav links */}
        <div className={`collapse navbar-collapse ${menuOpen ? "show" : ""}`}>
          <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-1">
            {navLinks.map((link) => (
              <li className="nav-item" key={link.href}>
                <a
                  href={link.href}
                  className="nav-link nav-link-cyber"
                  onClick={() => setMenuOpen(false)}
                >
                  <i className={`bi ${link.icon} me-1`} style={{ fontSize: "0.75rem" }} />
                  {link.label}
                </a>
              </li>
            ))}
            <li className="nav-item ms-lg-3 mt-2 mt-lg-0">
              <a
                href="https://api.whatsapp.com/send?phone=18997224061"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-system-red"
                style={{ fontSize: "0.65rem" }}
              >
                <i className="bi bi-whatsapp me-1" />
                CONTACT ME
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
