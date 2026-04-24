export default function Skills() {
  const technical = [
    { name: "Python", level: 70 },
    { name: "HDL (Hardware Description Language)", level: 60 },
    { name: "MicroPython", level: 65 },
  ];

  const tools = [
    "VS Code",
    "Xilinx Vivado",
    "Quartus Prime",
    "EDA Playground",
    "Antigravity",
  ];

  const soft = [
    "Programming",
    "Problem Solving",
    "Proofreading",
    "Basic Photo Editing",
    "Fast Learner",
    "Hardworking",
  ];

  return (
    <>
      <style>{`
        .skills {
          padding: 7rem 3rem;
          background: var(--bg);
          position: relative;
        }
        .skills-inner {
          max-width: 1060px;
          margin: 0 auto;
        }

        .skills-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
        }

        .skill-card {
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: var(--radius);
          padding: 1.5rem 1.75rem;
          transition: border-color 0.3s ease;
        }
        .skill-card:hover { border-color: var(--border-hover); }

        .skill-card-header {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.65rem;
          font-weight: 400;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin-bottom: 1.25rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        .skill-card-header::after {
          content: '';
          flex: 1;
          height: 1px;
          background: var(--border);
        }

        .bar-item {
          margin-bottom: 1.1rem;
        }
        .bar-item:last-child { margin-bottom: 0; }
        .bar-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 0.45rem;
        }
        .bar-name {
          font-size: 0.82rem;
          font-weight: 400;
          color: var(--text-secondary);
        }
        .bar-pct {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.65rem;
          color: var(--accent);
        }
        .bar-track {
          height: 3px;
          background: var(--border);
          border-radius: 100px;
          overflow: hidden;
        }
        .bar-fill {
          height: 100%;
          background: linear-gradient(90deg, var(--accent), rgba(196, 162, 101, 0.45));
          border-radius: 100px;
        }

        .tools-list {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        .tool-chip {
          display: flex;
          align-items: center;
          gap: 0.65rem;
          padding: 0.5rem 0.75rem;
          background: var(--accent-soft);
          border: 1px solid var(--accent-border);
          border-radius: var(--radius-sm);
          font-size: 0.8rem;
          font-weight: 400;
          color: var(--text-secondary);
          transition: border-color 0.3s ease;
        }
        .tool-chip:hover { border-color: var(--accent); }
        .tool-dot {
          width: 4px; height: 4px;
          border-radius: 50%;
          background: var(--accent);
          opacity: 0.7;
        }

        .soft-list {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0.5rem;
        }
        .soft-chip {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 0.7rem;
          background: var(--bg);
          border: 1px solid var(--border);
          border-radius: var(--radius-sm);
          font-size: 0.78rem;
          font-weight: 300;
          color: var(--text-secondary);
        }
        .soft-dash {
          color: var(--text-muted);
          font-size: 0.65rem;
        }

        .skill-card.wide {
          grid-column: span 2;
        }

        @media (max-width: 768px) {
          .skills { padding: 5rem 1.5rem; }
          .skills-grid { grid-template-columns: 1fr; }
          .skill-card.wide { grid-column: span 1; }
          .soft-list { grid-template-columns: 1fr; }
        }
      `}</style>

      <section className="skills" id="skills">
        <div className="skills-inner">
          <div className="fade-in">
            <p className="section-label">03 — Skills</p>
            <h2 className="section-heading">Technical <em>Skills</em></h2>
            <hr className="section-rule" />
          </div>

          <div className="skills-grid fade-in">
            <div className="skill-card">
              <div className="skill-card-header">Programming Languages</div>
              {technical.map(s => (
                <div className="bar-item" key={s.name}>
                  <div className="bar-top">
                    <span className="bar-name">{s.name}</span>
                    <span className="bar-pct">{s.level}%</span>
                  </div>
                  <div className="bar-track">
                    <div className="bar-fill" style={{ width: `${s.level}%` }} />
                  </div>
                </div>
              ))}
            </div>

            <div className="skill-card">
              <div className="skill-card-header">Tools & Software</div>
              <div className="tools-list">
                {tools.map(t => (
                  <div className="tool-chip" key={t}>
                    <span className="tool-dot" />
                    {t}
                  </div>
                ))}
              </div>
            </div>

            <div className="skill-card wide">
              <div className="skill-card-header">Other Skills</div>
              <div className="soft-list">
                {soft.map(s => (
                  <div className="soft-chip" key={s}>
                    <span className="soft-dash">—</span>
                    {s}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}