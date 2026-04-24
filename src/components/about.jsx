export default function About() {
  const strengths = [
    {
      title: "Fast Learner",
      desc: "Quickly adapts to new technologies, tools, and concepts — turning unfamiliar challenges into opportunities for growth."
    },
    {
      title: "Hardworking",
      desc: "Committed to putting in the effort required to deliver quality results, whether in academic projects or personal pursuits."
    }
  ];

  const interests = [
    "Software Development",
    "Embedded Systems / IoT",
    "AI / Machine Learning",
  ];

  return (
    <>
      <style>{`
        .about {
          padding: 7rem 3rem;
          background: var(--bg);
          position: relative;
        }
        .about-inner {
          max-width: 1060px;
          margin: 0 auto;
        }

        .about-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: start;
        }

        .about-text p {
          font-size: 0.92rem;
          font-weight: 300;
          color: var(--text-secondary);
          line-height: 1.9;
          margin-bottom: 1.25rem;
        }
        .about-text p:last-of-type { margin-bottom: 0; }
        .about-text strong {
          color: var(--text);
          font-weight: 500;
        }

        .about-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-top: 1.75rem;
        }
        .about-tag {
          padding: 0.3rem 0.9rem;
          border: 1px solid var(--border-hover);
          border-radius: 100px;
          font-size: 0.72rem;
          font-weight: 400;
          color: var(--text-secondary);
          background: var(--surface);
        }

        .about-right {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .strength-card {
          background: var(--surface);
          border: 1px solid var(--border);
          border-left: 2px solid var(--accent-border);
          border-radius: var(--radius);
          padding: 1.3rem 1.5rem;
          transition: border-color 0.3s ease;
        }
        .strength-card:hover {
          border-color: var(--border-hover);
          border-left-color: var(--accent);
        }
        .strength-title {
          font-size: 0.88rem;
          font-weight: 500;
          color: var(--text);
          margin-bottom: 0.45rem;
        }
        .strength-desc {
          font-size: 0.8rem;
          font-weight: 300;
          color: var(--text-secondary);
          line-height: 1.7;
        }

        .interests-card {
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: var(--radius);
          padding: 1.3rem 1.5rem;
        }
        .interests-label {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.62rem;
          font-weight: 400;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin-bottom: 0.9rem;
        }
        .interests-list {
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
        }
        .interest-item {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          font-size: 0.84rem;
          font-weight: 400;
          color: var(--text-secondary);
        }
        .interest-dot {
          width: 5px; height: 5px;
          border-radius: 50%;
          background: var(--accent);
          opacity: 0.6;
          flex-shrink: 0;
        }

        .goal-card {
          background: var(--accent-soft);
          border: 1px solid var(--accent-border);
          border-radius: var(--radius);
          padding: 1.1rem 1.4rem;
          display: flex;
          align-items: flex-start;
          gap: 0.85rem;
        }
        .goal-indicator {
          width: 3px;
          min-height: 36px;
          background: var(--accent);
          border-radius: 2px;
          flex-shrink: 0;
          margin-top: 2px;
        }
        .goal-text {
          font-size: 0.82rem;
          font-weight: 300;
          color: var(--text-secondary);
          line-height: 1.65;
        }
        .goal-text strong {
          color: var(--accent);
          font-weight: 500;
        }

        @media (max-width: 768px) {
          .about { padding: 5rem 1.5rem; }
          .about-grid { grid-template-columns: 1fr; gap: 2.5rem; }
        }
      `}</style>

      <section className="about" id="about">
        <div className="about-inner">
          <div className="fade-in">
            <p className="section-label">01 — About Me</p>
            <h2 className="section-heading">Who I <em>Am</em></h2>
            <hr className="section-rule" />
          </div>

          <div className="about-grid">
            <div className="about-text fade-in">
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
                <span className="about-tag">3rd Year CPE Student</span>
                <span className="about-tag">FAITH Colleges</span>
                <span className="about-tag">Philippines</span>
              </div>
            </div>

            <div className="about-right fade-in d1">
              {strengths.map(s => (
                <div className="strength-card" key={s.title}>
                  <div className="strength-title">{s.title}</div>
                  <p className="strength-desc">{s.desc}</p>
                </div>
              ))}

              <div className="interests-card">
                <div className="interests-label">Fields of Interest</div>
                <div className="interests-list">
                  {interests.map(i => (
                    <div className="interest-item" key={i}>
                      <span className="interest-dot" />
                      {i}
                    </div>
                  ))}
                </div>
              </div>

              <div className="goal-card">
                <div className="goal-indicator" />
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