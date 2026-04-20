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
    }, 60);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const cursorBlink = setInterval(() => setShowCursor(v => !v), 500);
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
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=DM+Sans:wght@300;400;500&family=DM+Mono:wght@300;400&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        :root {
          --navy:       #07101f;
          --navy-mid:   #0c1a2e;
          --navy-card:  #101f35;
          --blue:       #2563eb;
          --blue-light: #5b8dee;
          --blue-muted: rgba(91,141,238,0.12);
          --white:      #edf2fb;
          --white-dim:  #c8d6ed;
          --gray:       #6d87a8;
          --border:     rgba(91,141,238,0.14);
          --border-dim: rgba(255,255,255,0.06);
        }

        body {
          background: var(--navy);
          font-family: 'DM Sans', sans-serif;
          color: var(--white);
          overflow-x: hidden;
        }

        /* ── NAVBAR ── */
        .navbar {
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 100;
          padding: 0 3rem;
          height: 62px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          transition: background 0.4s, border-bottom 0.4s;
        }
        .navbar.scrolled {
          background: rgba(7,16,31,0.92);
          backdrop-filter: blur(18px);
          border-bottom: 1px solid var(--border-dim);
        }

        .nav-logo {
          font-family: 'Playfair Display', serif;
          font-weight: 700;
          font-size: 1.1rem;
          color: var(--white);
          text-decoration: none;
          letter-spacing: 0.01em;
        }
        .nav-logo span { color: var(--blue-light); }

        .nav-links {
          display: flex;
          gap: 0.1rem;
          list-style: none;
        }
        .nav-links a {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.78rem;
          font-weight: 400;
          color: var(--gray);
          text-decoration: none;
          padding: 0.3rem 0.7rem;
          border-radius: 4px;
          transition: color 0.2s, background 0.2s;
          letter-spacing: 0.01em;
        }
        .nav-links a:hover {
          color: var(--white-dim);
          background: var(--blue-muted);
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
          width: 22px;
          height: 1.5px;
          background: var(--white-dim);
          border-radius: 2px;
          transition: transform 0.3s, opacity 0.3s;
        }
        .hamburger.open span:nth-child(1) { transform: translateY(6.5px) rotate(45deg); }
        .hamburger.open span:nth-child(2) { opacity: 0; }
        .hamburger.open span:nth-child(3) { transform: translateY(-6.5px) rotate(-45deg); }

        .mobile-menu {
          display: none;
          position: fixed;
          top: 62px; left: 0; right: 0;
          background: rgba(7,16,31,0.98);
          backdrop-filter: blur(20px);
          border-bottom: 1px solid var(--border-dim);
          padding: 1.5rem 2.5rem;
          z-index: 99;
          flex-direction: column;
          gap: 0.25rem;
        }
        .mobile-menu.open { display: flex; }
        .mobile-menu a {
          font-size: 0.88rem;
          color: var(--gray);
          text-decoration: none;
          padding: 0.55rem 0;
          border-bottom: 1px solid var(--border-dim);
          transition: color 0.2s;
          letter-spacing: 0.01em;
        }
        .mobile-menu a:hover { color: var(--white); }

        /* ── HERO ── */
        .hero {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 100px 3rem 5rem;
          position: relative;
          overflow: hidden;
        }

        /* Subtle dot grid */
        .hero::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image: radial-gradient(rgba(91,141,238,0.12) 1px, transparent 1px);
          background-size: 36px 36px;
          mask-image: radial-gradient(ellipse 70% 70% at 50% 50%, black 20%, transparent 100%);
        }

        /* Subtle top accent line */
        .hero::after {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 2px;
          background: linear-gradient(90deg, transparent, var(--blue-light), transparent);
          opacity: 0.4;
        }

        .hero-inner {
          position: relative;
          z-index: 2;
          max-width: 1020px;
          width: 100%;
          display: flex;
          align-items: center;
          gap: 5rem;
        }

        .hero-content { flex: 1; }

        /* Status chip */
        .status-chip {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.3rem 0.85rem;
          border: 1px solid var(--border);
          border-radius: 100px;
          font-size: 0.7rem;
          font-weight: 400;
          color: var(--blue-light);
          background: var(--blue-muted);
          margin-bottom: 1.75rem;
          letter-spacing: 0.04em;
          animation: fadeUp 0.5s ease both;
        }
        .status-dot {
          width: 6px; height: 6px;
          border-radius: 50%;
          background: #4ade80;
          animation: pulse 2.5s infinite;
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.35; }
        }

        .hero-eyebrow {
          font-family: 'DM Mono', monospace;
          font-size: 0.72rem;
          font-weight: 300;
          color: var(--gray);
          letter-spacing: 0.12em;
          text-transform: uppercase;
          margin-bottom: 0.75rem;
          animation: fadeUp 0.5s 0.05s ease both;
        }

        .hero-name {
          font-family: 'Playfair Display', serif;
          font-size: clamp(2.4rem, 6vw, 4.6rem);
          font-weight: 700;
          line-height: 1.1;
          letter-spacing: -0.01em;
          color: var(--white);
          margin-bottom: 1.1rem;
          animation: fadeUp 0.5s 0.1s ease both;
        }
        .hero-name .accent {
          color: var(--blue-light);
          font-style: italic;
        }

        .hero-role {
          font-family: 'DM Mono', monospace;
          font-size: 0.82rem;
          font-weight: 300;
          color: var(--blue-light);
          margin-bottom: 1.5rem;
          letter-spacing: 0.05em;
          animation: fadeUp 0.5s 0.15s ease both;
        }
        .cursor {
          display: inline-block;
          width: 1.5px;
          height: 0.9em;
          background: var(--blue-light);
          margin-left: 1px;
          vertical-align: text-bottom;
        }

        .hero-divider {
          width: 40px;
          height: 1px;
          background: var(--blue-light);
          opacity: 0.4;
          margin-bottom: 1.5rem;
          animation: fadeUp 0.5s 0.18s ease both;
        }

        .hero-desc {
          font-size: 0.92rem;
          font-weight: 300;
          color: var(--gray);
          line-height: 1.85;
          max-width: 460px;
          margin-bottom: 2.25rem;
          animation: fadeUp 0.5s 0.2s ease both;
        }

        .hero-ctas {
          display: flex;
          gap: 0.85rem;
          flex-wrap: wrap;
          animation: fadeUp 0.5s 0.25s ease both;
        }
        .btn-primary {
          padding: 0.7rem 1.6rem;
          background: var(--blue);
          color: #fff;
          border: 1px solid transparent;
          border-radius: 6px;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.8rem;
          font-weight: 500;
          cursor: pointer;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          transition: background 0.2s, transform 0.2s;
          letter-spacing: 0.02em;
        }
        .btn-primary:hover {
          background: var(--blue-light);
          transform: translateY(-1px);
        }
        .btn-secondary {
          padding: 0.7rem 1.6rem;
          background: transparent;
          color: var(--white-dim);
          border: 1px solid var(--border);
          border-radius: 6px;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.8rem;
          font-weight: 400;
          cursor: pointer;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          transition: border-color 0.2s, color 0.2s, transform 0.2s;
          letter-spacing: 0.02em;
        }
        .btn-secondary:hover {
          border-color: var(--blue-light);
          color: var(--white);
          transform: translateY(-1px);
        }

        /* ── PHOTO ── */
        .hero-photo-wrap {
          flex-shrink: 0;
          position: relative;
          animation: fadeUp 0.6s 0.3s ease both;
        }
        .hero-photo-wrap::before {
          content: '';
          position: absolute;
          top: -10px; right: -10px;
          width: 55px; height: 55px;
          border-top: 1.5px solid var(--blue-light);
          border-right: 1.5px solid var(--blue-light);
          opacity: 0.35;
          border-radius: 0 6px 0 0;
        }
        .hero-photo-wrap::after {
          content: '';
          position: absolute;
          bottom: -10px; left: -10px;
          width: 55px; height: 55px;
          border-bottom: 1.5px solid var(--blue-light);
          border-left: 1.5px solid var(--blue-light);
          opacity: 0.35;
          border-radius: 0 0 0 6px;
        }
        .hero-photo {
        width: 300px;
        height: 350px;
        border-radius: 10px;
        border: 1px solid var(--border);
        object-fit: cover;
        object-position: center; 
        scale: 1.5;                  
        display: block;
        background: var(--navy-card);
}

        /* Floating info cards */
        .hero-cards {
          position: absolute;
          right: 1rem;
          top: 50%;
          transform: translateY(-50%);
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
          z-index: 2;
          animation: fadeLeft 0.6s 0.4s ease both;
        }
        .info-card {
          background: var(--navy-card);
          border: 1px solid var(--border-dim);
          border-radius: 8px;
          padding: 0.85rem 1.1rem;
          min-width: 165px;
        }
        .info-card-top {
          width: 100%;
          height: 1px;
          background: linear-gradient(90deg, var(--blue-light), transparent);
          opacity: 0.25;
          margin-bottom: 0.75rem;
        }
        .card-label {
          font-size: 0.62rem;
          font-weight: 400;
          color: var(--gray);
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin-bottom: 0.25rem;
        }
        .card-value {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.95rem;
          font-weight: 500;
          color: var(--white);
          line-height: 1.4;
        }
        .card-value span { color: var(--blue-light); }
        .card-sub {
          font-size: 0.62rem;
          color: var(--gray);
          margin-top: 0.2rem;
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
          color: var(--gray);
          font-size: 0.62rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          animation: fadeUp 1s 1s ease both;
          z-index: 2;
          font-family: 'DM Mono', monospace;
        }
        .scroll-line {
          width: 1px;
          height: 36px;
          background: linear-gradient(to bottom, var(--gray), transparent);
          animation: scrollDrop 2s infinite;
        }
        @keyframes scrollDrop {
          0%   { opacity: 0; transform: scaleY(0); transform-origin: top; }
          50%  { opacity: 0.6; transform: scaleY(1); }
          100% { opacity: 0; transform: scaleY(1); transform-origin: bottom; }
        }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeLeft {
          from { opacity: 0; transform: translate(16px, -50%); }
          to   { opacity: 1; transform: translate(0, -50%); }
        }

        @media (max-width: 960px) {
          .nav-links  { display: none; }
          .hamburger  { display: flex; }
          .hero-cards { display: none; }
          .hero-inner { flex-direction: column-reverse; gap: 2.5rem; }
          .hero-content { text-align: center; }
          .hero-desc  { margin: 0 auto 2.25rem; }
          .hero-ctas  { justify-content: center; }
          .status-chip { margin-left: auto; margin-right: auto; }
          .hero-divider { margin-left: auto; margin-right: auto; }
          .hero-photo { width: 170px; height: 210px; }
          .hero { padding: 90px 1.5rem 4rem; }
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

            <p className="hero-eyebrow">Hello, I'm</p>

            <h1 className="hero-name">
              John Lemset S.<br />
              <span className="accent">Burgos</span>
            </h1>

            <p className="hero-role">
              &gt;_ {typedText}
              <span className="cursor" style={{ opacity: showCursor ? 1 : 0 }} />
            </p>

            <div className="hero-divider" />

            <p className="hero-desc">
              Passionate about building systems that bridge hardware and software.
              Crafting reliable, efficient, and meaningful technology — one line of code at a time.
            </p>

            <div className="hero-ctas">
              <a href="#projects" className="btn-primary">View Projects →</a>
              <a href="#resume" className="btn-secondary">Download Resume ↓</a>
              <a href="#contact" className="btn-secondary">Contact Me</a>
            </div>

          </div>

          {/* PHOTO — replace src with your actual image path */}
          <div className="hero-photo-wrap">
            <img
              src={pfp}
              alt="John Lemset S. Burgos"
              className="hero-photo"
            />
          </div>
        </div>

        {/* Floating info cards */}
        <div className="hero-cards">
          <div className="info-card">
            <div className="info-card-top" />
            <div className="card-label">Program</div>
            <div className="card-value">BS Computer<br />Engineering</div>
          </div>
          <div className="info-card">
            <div className="info-card-top" />
            <div className="card-label">Status</div>
            <div className="card-value"><span>Active</span></div>
            <div className="card-sub">Currently enrolled</div>
          </div>
          <div className="info-card">
            <div className="info-card-top" />
            <div className="card-label">Based in</div>
            <div className="card-value">Philippines</div>
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