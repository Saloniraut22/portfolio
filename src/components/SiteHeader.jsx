import { useEffect, useState } from "react";
import { profile } from "../data/projects";

export default function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: scrolled ? "1.5rem 5%" : "2rem 5%",
        background: scrolled ? "rgba(10,10,10,0.95)" : "transparent",
        backdropFilter: scrolled ? "blur(10px)" : "none",
        transition: "all 0.4s cubic-bezier(0.4,0,0.2,1)",
      }}
    >
      <a
        href="#home"
        style={{
          fontFamily: "var(--font-sans)",
          fontSize: "1.2rem",
          fontWeight: "700",
          color: "#fff",
          letterSpacing: "4px",
          textDecoration: "none",
          textTransform: "uppercase",
        }}
      >
        SALONI
      </a>

      {/* Desktop nav */}
      <nav
        style={{
          display: "flex",
          gap: "3rem",
          alignItems: "center",
        }}
        className="desktop-nav"
      >
        {[
          { href: "#works", label: "Works" },
          { href: profile.resume, label: "Resume", external: true },
          { href: "#about", label: "About" },
          { href: "#contact", label: "Contact" },
        ].map((link) => (
          <a
            key={link.label}
            href={link.href}
            target={link.external ? "_blank" : undefined}
            rel={link.external ? "noopener noreferrer" : undefined}
            style={{
              color: "#999",
              textDecoration: "none",
              fontSize: "0.9rem",
              textTransform: "uppercase",
              letterSpacing: "1px",
              transition: "color 0.4s",
            }}
            onMouseEnter={(e) => (e.target.style.color = "#fff")}
            onMouseLeave={(e) => (e.target.style.color = "#999")}
          >
            {link.label}
          </a>
        ))}
      </nav>

      {/* Hamburger */}
      <button
        onClick={() => setMenuOpen((v) => !v)}
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        style={{
          display: "none",
          flexDirection: "column",
          gap: "5px",
          cursor: "pointer",
          background: "none",
          border: "none",
          padding: 0,
        }}
        className="menu-toggle-btn"
      >
        <span
          style={{
            width: 25,
            height: 2,
            background: "#fff",
            display: "block",
            transition: "all 0.4s",
            transform: menuOpen ? "rotate(45deg) translate(5px,5px)" : "none",
          }}
        />
        <span
          style={{
            width: 25,
            height: 2,
            background: "#fff",
            display: "block",
            transition: "all 0.4s",
            opacity: menuOpen ? 0 : 1,
          }}
        />
        <span
          style={{
            width: 25,
            height: 2,
            background: "#fff",
            display: "block",
            transition: "all 0.4s",
            transform: menuOpen ? "rotate(-45deg) translate(5px,-5px)" : "none",
          }}
        />
      </button>

      {/* Mobile drawer */}
      {menuOpen && (
        <nav
          style={{
            position: "fixed",
            top: 0,
            right: 0,
            height: "100vh",
            width: 300,
            background: "#0a0a0a",
            display: "flex",
            flexDirection: "column",
            padding: "6rem 3rem",
            gap: "2rem",
            boxShadow: "-5px 0 30px rgba(0,0,0,0.5)",
            zIndex: 999,
          }}
        >
          {[
            { href: "#works", label: "Works" },
            { href: profile.resume, label: "Resume", external: true },
            { href: "#about", label: "About" },
            { href: "#contact", label: "Contact" },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
              onClick={() => setMenuOpen(false)}
              style={{
                color: "#999",
                textDecoration: "none",
                fontSize: "1.1rem",
                textTransform: "uppercase",
                letterSpacing: "1px",
              }}
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
