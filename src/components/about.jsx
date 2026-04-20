export default function About() {
  const strengths = [
    {
      icon: "⚡",
      title: "Fast Learner",
      desc: "Quickly adapts to new technologies, tools, and concepts — turning unfamiliar challenges into opportunities for growth."
    },
    {
      icon: "🔩",
      title: "Hardworking",
      desc: "Committed to putting in the effort required to deliver quality results, whether in academic projects or personal pursuits."
    }
  ];

  const interests = [
    { label: "Software Development", icon: "💻" },
    { label: "Embedded Systems / IoT", icon: "🔌" },
    { label: "AI / Machine Learning", icon: "🤖" },
  ];

  return (
    <>
      <style>{`
        /* ── ABOUT SECTION ── */
        .about {
          padding: 7rem 3rem;
          background: var(--navy);
          position: relative;
          overflow: hidden;
        }

        /* Subtle side accent */
        .about::before {
          content: '';
          position: absolute;
          left: 0; top: 10%; bottom: 10%;
          width: 1px;
          background: linear-gradient(to bottom, transparent, var(--blue-light), transparent);
          opacity: 0.2;
        }

        .about-inner {
          max-width: 1020px;
          margin: 0 auto;
        }

        /* Section label */
        .section-eyebrow {
          font-family: 'DM Mono', monospace;
          font-size: 0.7rem;
          font-weight: 300;
          color: var(--blue-light);
          letter-spacing: 0.14em;
          text-transform: uppercase;
          margin-bottom: 0.6rem;
        }

        .section-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(1.8rem, 4vw, 2.8rem);
          font-weight: 700;
          color: var(--white);
          margin-bottom: 0.5rem;
          line-height: 1.15;
        }

        .section-title span {
          color: var(--blue-light);
          font-style: italic;
        }

        .section-divider {
          width: 36px;
          height: 1px;
          background: var(--blue-light);
          opacity: 0.4;
          margin-bottom: 3rem;
        }

        /* Two-column layout */
        .about-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: start;
        }

        /* Left — text */
        .about-text p {
          font-size: 0.92rem;
          font-weight: 300;
          color: var(--gray);
          line-height: 1.9;
          margin-bottom: 1.25rem;
        }

        .about-text p:last-child { margin-bottom: 0; }

        .about-text strong {
          color: var(--white-dim);
          font-weight: 500;
        }

        /* Why CPE tag row */
        .about-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-top: 1.75rem;
        }
        .about-tag {
          padding: 0.3rem 0.85rem;
          border: 1px solid var(--border);
          border-radius: 100px;
          font-size: 0.7rem;
          font-weight: 400;
          color: var(--blue-light);
          background: var(--blue-muted);
          letter-spacing: 0.03em;
          font-family: 'DM Sans', sans-serif;
        }

        /* Right — cards */
        .about-right {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        /* Strengths */
        .about-card {
          background: var(--navy-card);
          border: 1px solid var(--border-dim);
          border-radius: 10px;
          padding: 1.25rem 1.4rem;
          position: relative;
          overflow: hidden;
        }
        .about-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 1px;
          background: linear-gradient(90deg, var(--blue-light), transparent);
          opacity: 0.25;
        }
        .about-card-header {
          display: flex;
          align-items: center;
          gap: 0.65rem;
          margin-bottom: 0.5rem;
        }
        .about-card-icon {
          font-size: 1.1rem;
          line-height: 1;
        }
        .about-card-title {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.88rem;
          font-weight: 500;
          color: var(--white);
          letter-spacing: 0.01em;
        }
        .about-card-desc {
          font-size: 0.8rem;
          font-weight: 300;
          color: var(--gray);
          line-height: 1.7;
        }

        /* Interests block */
        .interests-block {
          background: var(--navy-card);
          border: 1px solid var(--border-dim);
          border-radius: 10px;
          padding: 1.25rem 1.4rem;
          position: relative;
          overflow: hidden;
        }
        .interests-block::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 1px;
          background: linear-gradient(90deg, var(--blue-light), transparent);
          opacity: 0.25;
        }
        .interests-label {
          font-size: 0.62rem;
          font-weight: 400;
          color: var(--gray);
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin-bottom: 0.85rem;
          font-family: 'DM Mono', monospace;
        }
        .interests-list {
          display: flex;
          flex-direction: column;
          gap: 0.55rem;
        }
        .interest-item {
          display: flex;
          align-items: center;
          gap: 0.65rem;
          font-size: 0.84rem;
          font-weight: 400;
          color: var(--white-dim);
        }
        .interest-icon {
          font-size: 1rem;
          width: 24px;
          text-align: center;
        }
        .interest-dot {
          width: 4px; height: 4px;
          border-radius: 50%;
          background: var(--blue-light);
          opacity: 0.6;
          margin-left: auto;
        }

        /* Goal banner */
        .goal-banner {
          background: var(--blue-muted);
          border: 1px solid var(--border);
          border-radius: 10px;
          padding: 1.1rem 1.4rem;
          display: flex;
          align-items: center;
          gap: 0.85rem;
        }
        .goal-icon {
          font-size: 1.3rem;
          flex-shrink: 0;
        }
        .goal-text {
          font-size: 0.8rem;
          font-weight: 300;
          color: var(--white-dim);
          line-height: 1.6;
        }
        .goal-text strong {
          color: var(--blue-light);
          font-weight: 500;
        }

        /* Responsive */
        @media (max-width: 768px) {
          .about { padding: 5rem 1.5rem; }
          .about-grid { grid-template-columns: 1fr; gap: 2.5rem; }
          .about::before { display: none; }
        }
      `}</style>

      <section className="about" id="about">
        <div className="about-inner">

          <p className="section-eyebrow">01 — About Me</p>
          <h2 className="section-title">Who I <span>Am</span></h2>
          <div className="section-divider" />

          <div className="about-grid">

            {/* LEFT — Bio */}
            <div className="about-text">
              <p>
                I'm <strong>John Lemset S. Burgos</strong>, a third-year Computer Engineering
                student at <strong>FAITH Colleges</strong>. I'm driven by a genuine curiosity
                for how technology works — from the circuits and microcontrollers at the hardware
                level, all the way up to the software that brings them to life.
              </p>
              <p>
                I chose Computer Engineering because it sits at the intersection of two worlds
                I find equally fascinating: <strong>hardware and software</strong>. The field
                also opens doors to a wide range of career paths, and I believe that versatility
                is one of the most valuable things an engineer can have.
              </p>
              <p>
                I'm the kind of person who doesn't shy away from difficult problems. Whether
                it's a new programming language, an unfamiliar tool, or a complex circuit — I
                approach it with patience, consistency, and a willingness to put in the work.
              </p>

              <div className="about-tags">
                <span className="about-tag">🎓 3rd Year CPE Student</span>
                <span className="about-tag">🏫 FAITH Colleges</span>
                <span className="about-tag">🇵🇭 Philippines</span>
              </div>
            </div>

            {/* RIGHT — Cards */}
            <div className="about-right">

              {strengths.map(s => (
                <div className="about-card" key={s.title}>
                  <div className="about-card-header">
                    <span className="about-card-icon">{s.icon}</span>
                    <span className="about-card-title">{s.title}</span>
                  </div>
                  <p className="about-card-desc">{s.desc}</p>
                </div>
              ))}

              <div className="interests-block">
                <div className="interests-label">Fields of Interest</div>
                <div className="interests-list">
                  {interests.map(i => (
                    <div className="interest-item" key={i.label}>
                      <span className="interest-icon">{i.icon}</span>
                      {i.label}
                      <span className="interest-dot" />
                    </div>
                  ))}
                </div>
              </div>

              <div className="goal-banner">
                <span className="goal-icon">🎯</span>
                <p className="goal-text">
                  Aspiring to become a <strong>Software Engineer</strong> — building
                  reliable, efficient systems that make a real-world impact.
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
}