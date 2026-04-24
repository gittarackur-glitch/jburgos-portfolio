import { useState, useEffect } from "react";
import pfp from '../assets/pfp.jpeg';

const NAV_LINKS = [
  "Home", "About", "Education", "Skills", "Projects", "Certificates", "Resume", "Contact"
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [typedText, setTypedText] = useState("");
  const [showCursor, setShowCursor] = useState(true);

  const fullText = "Computer Engineering Student";

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i < fullText.length) {
        setTypedText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(interval);
      }
    }, 55);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const cursorBlink = setInterval(() => setShowCursor(v => !v), 530);
    return () => clearInterval(cursorBlink);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <style>{`
        /* ── NAVBAR ── */
        .navbar {
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 100;
          padding: 0 3rem;
          height: 64px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          transition: background 0.4s ease, border-color 0.4s ease;
          border-bottom: 1px solid transparent;
        }
        .navbar.scrolled {
          background: rgba(10, 10, 10, 0.88);
          backdrop-filter: blur(20px) saturate(1.2);
          -webkit-backdrop-filter: blur(20px) saturate(1.2);
          border-bottom-color: var(--border);
        }

        .nav-logo {
          font-family: 'Playfair Display', serif;
          font-weight: 600;
          font-size: 1.15rem;
          color: var(--text);
          text-decoration: none;
          letter-spacing: -0.01em;
        }
        .nav-logo span { color: var(--accent); }

        .nav-links {
          display: flex;
          gap: 0;
          list-style: none;
        }
        .nav-links a {
          font-family: 'Inter', sans-serif;
          font-size: 0.78rem;
          font-weight: 400;
          color: var(--text-secondary);
          text-decoration: none;
          padding: 0.35rem 0.75rem;
          border-radius: var(--radius-sm);
          transition: color 0.3s ease, background 0.3s ease;
          letter-spacing: 0.01em;
        }
        .nav-links a:hover {
          color: var(--text);
          background: var(--border);
        }

        .hamburger {
          display: none;
          flex-direction: column;
          gap: 5px;
          cursor: pointer;
          background: none;
          border: none;
          padding: 4px;
        }
        .hamburger span {
          display: block;
          width: 20px;
          height: 1.5px;
          background: var(--text-secondary);
          border-radius: 2px;
          transition: transform 0.3s ease, opacity 0.3s ease;
        }
        .hamburger.open span:nth-child(1) { transform: translateY(6.5px) rotate(45deg); }
        .hamburger.open span:nth-child(2) { opacity: 0; }
        .hamburger.open span:nth-child(3) { transform: translateY(-6.5px) rotate(-45deg); }

        .mobile-menu {
          display: none;
          position: fixed;
          top: 64px; left: 0; right: 0;
          background: rgba(10, 10, 10, 0.96);
          backdrop-filter: blur(24px);
          border-bottom: 1px solid var(--border);
          padding: 1.5rem 2.5rem;
          z-index: 99;
          flex-direction: column;
          gap: 0.3rem;
        }
        .mobile-menu.open { display: flex; }
        .mobile-menu a {
          font-size: 0.88rem;
          color: var(--text-secondary);
          text-decoration: none;
          padding: 0.6rem 0;
          border-bottom: 1px solid var(--border);
          transition: color 0.2s ease;
        }
        .mobile-menu a:hover { color: var(--text); }

        /* ── HERO ── */
        .hero {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 100px 3rem 4rem;
          position: relative;
          overflow: hidden;
          background: var(--bg);
        }

        .hero::before {
          content: '';
          position: absolute;
          top: -20%;
          right: -10%;
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, rgba(196, 162, 101, 0.03) 0%, transparent 70%);
          pointer-events: none;
        }

        .hero-inner {
          position: relative;
          z-index: 2;
          max-width: 1060px;
          width: 100%;
          display: flex;
          align-items: center;
          gap: 5rem;
        }

        .hero-content { flex: 1; }

        .hero-greeting {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.75rem;
          font-weight: 400;
          color: var(--text-secondary);
          letter-spacing: 0.1em;
          text-transform: uppercase;
          margin-bottom: 1rem;
          opacity: 0;
          animation: heroFadeUp 0.6s 0.1s ease forwards;
        }

        .hero-name {
          font-family: 'Playfair Display', serif;
          font-size: clamp(2.6rem, 6vw, 4.2rem);
          font-weight: 700;
          line-height: 1.08;
          letter-spacing: -0.02em;
          color: var(--text);
          margin-bottom: 1rem;
          opacity: 0;
          animation: heroFadeUp 0.6s 0.2s ease forwards;
        }
        .hero-name .accent {
          color: var(--accent);
          font-style: italic;
        }

        .hero-role {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.82rem;
          font-weight: 400;
          color: var(--accent);
          margin-bottom: 1.75rem;
          letter-spacing: 0.03em;
          opacity: 0;
          animation: heroFadeUp 0.6s 0.3s ease forwards;
        }
        .cursor-blink {
          display: inline-block;
          width: 1.5px;
          height: 0.85em;
          background: var(--accent);
          margin-left: 2px;
          vertical-align: text-bottom;
        }

        .hero-rule {
          width: 40px;
          height: 1px;
          background: rgba(196, 162, 101, 0.35);
          margin-bottom: 1.5rem;
          opacity: 0;
          animation: heroFadeUp 0.6s 0.35s ease forwards;
        }

        .hero-desc {
          font-size: 0.95rem;
          font-weight: 300;
          color: var(--text-secondary);
          line-height: 1.85;
          max-width: 480px;
          margin-bottom: 2.5rem;
          opacity: 0;
          animation: heroFadeUp 0.6s 0.4s ease forwards;
        }

        .hero-ctas {
          display: flex;
          gap: 0.85rem;
          flex-wrap: wrap;
          opacity: 0;
          animation: heroFadeUp 0.6s 0.5s ease forwards;
        }

        /* ── PHOTO ── */
        .hero-photo-wrap {
          flex-shrink: 0;
          opacity: 0;
          animation: heroFadeUp 0.7s 0.4s ease forwards;
        }
        .hero-photo {
          width: 280px;
          height: 340px;
          border-radius: var(--radius);
          border: 1px solid var(--border);
          object-fit: cover;
          object-position: center top;
          display: block;
          background: var(--surface);
          filter: grayscale(0.12);
          transition: filter 0.4s ease, border-color 0.4s ease;
        }
        .hero-photo:hover {
          filter: grayscale(0);
          border-color: var(--accent-border);
        }

        /* Scroll hint */
        .scroll-hint {
          position: absolute;
          bottom: 2.5rem;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
          color: var(--text-muted);
          font-size: 0.6rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          z-index: 2;
          font-family: 'JetBrains Mono', monospace;
          opacity: 0;
          animation: heroFadeUp 1s 1.2s ease forwards;
        }
        .scroll-line {
          width: 1px;
          height: 32px;
          background: linear-gradient(to bottom, var(--text-muted), transparent);
          animation: scrollPulse 2.5s infinite;
        }
        @keyframes scrollPulse {
          0%   { opacity: 0; transform: scaleY(0); transform-origin: top; }
          50%  { opacity: 0.5; transform: scaleY(1); }
          100% { opacity: 0; transform: scaleY(1); transform-origin: bottom; }
        }

        @keyframes heroFadeUp {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        @media (max-width: 960px) {
          .nav-links  { display: none; }
          .hamburger  { display: flex; }
          .hero-inner { flex-direction: column-reverse; gap: 2.5rem; }
          .hero-content { text-align: center; }
          .hero-desc  { margin: 0 auto 2.5rem; }
          .hero-ctas  { justify-content: center; }
          .hero-photo { width: 180px; height: 220px; }
          .hero { padding: 90px 1.5rem 4rem; }
          .navbar { padding: 0 1.5rem; }
        }
      `}</style>

      {/* NAVBAR */}
      <nav className={`navbar${scrolled ? " scrolled" : ""}`}>
        <a href="#home" className="nav-logo">
          JL<span>.</span>Burgos
        </a>
        <ul className="nav-links">
          {NAV_LINKS.map(link => (
            <li key={link}>
              <a href={`#${link.toLowerCase()}`}>{link}</a>
            </li>
          ))}
        </ul>
        <button
          className={`hamburger${menuOpen ? " open" : ""}`}
          onClick={() => setMenuOpen(v => !v)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </nav>

      {/* MOBILE MENU */}
      <div className={`mobile-menu${menuOpen ? " open" : ""}`}>
        {NAV_LINKS.map(link => (
          <a key={link} href={`#${link.toLowerCase()}`} onClick={() => setMenuOpen(false)}>
            {link}
          </a>
        ))}
      </div>

      {/* HERO */}
      <section className="hero" id="home">
        <div className="hero-inner">
          <div className="hero-content">
            <p className="hero-greeting">Hello, I'm</p>

            <h1 className="hero-name">
              John Lemset S.<br />
              <span className="accent">Burgos</span>
            </h1>

            <p className="hero-role">
              &gt;_ {typedText}
              <span className="cursor-blink" style={{ opacity: showCursor ? 1 : 0 }} />
            </p>

            <div className="hero-rule" />

            <p className="hero-desc">
              Passionate about building systems that bridge hardware and software.
              Crafting reliable, efficient, and meaningful technology — one line of code at a time.
            </p>

            <div className="hero-ctas">
              <a href="#projects" className="btn-primary">View Projects →</a>
              <a href="#resume" className="btn-outline">Download Resume ↓</a>
              <a href="#contact" className="btn-outline">Contact Me</a>
            </div>
          </div>

          <div className="hero-photo-wrap">
            <img
              src={pfp}
              alt="John Lemset S. Burgos"
              className="hero-photo"
            />
          </div>
        </div>

        <div className="scroll-hint">
          <div className="scroll-line" />
          scroll
        </div>
      </section>
    </>
  );
}