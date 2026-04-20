export default function Skills() {
    const technical = [
        { name: "Python", icon: "🐍", level: 70 },
        { name: "HDL (Hardware Description Language)", icon: "🔲", level: 60 },
        { name: "MicroPython", icon: "🔌", level: 65 },
    ];

    const tools = [
        { name: "VS Code", icon: "💻" },
        { name: "Xilinx Vivado", icon: "⚡" },
        { name: "Quartus Prime", icon: "🔧" },
        { name: "EDA Playground", icon: "🧪" },
        { name: "Antigravity", icon: "🚀" },
    ];

    const soft = [
        { name: "Programming", icon: "💻" },
        { name: "Problem Solving", icon: "🧩" },
        { name: "Proofreading", icon: "✍️" },
        { name: "Basic Photo Editing", icon: "🖼️" },
        { name: "Fast Learner", icon: "⚡" },
        { name: "Hardworking", icon: "🔩" },
    ];

    return (
        <>
            <style>{`
        .skills {
          padding: 7rem 3rem;
          background: var(--navy-mid);
          position: relative;
          overflow: hidden;
        }
        .skills::before {
          content: '';
          position: absolute;
          right: 0; top: 10%; bottom: 10%;
          width: 1px;
          background: linear-gradient(to bottom, transparent, var(--blue-light), transparent);
          opacity: 0.2;
        }
        .skills-inner {
          max-width: 1020px;
          margin: 0 auto;
        }

        .skills-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
        }

        .skills-card {
          background: var(--navy-card);
          border: 1px solid var(--border-dim);
          border-radius: 12px;
          padding: 1.5rem 1.75rem;
          position: relative;
          overflow: hidden;
        }
        .skills-card-top {
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 1px;
          background: linear-gradient(90deg, var(--blue-light), transparent);
          opacity: 0.25;
        }
        .skills-card-title {
          font-family: 'DM Mono', monospace;
          font-size: 0.65rem;
          font-weight: 300;
          color: var(--gray);
          text-transform: uppercase;
          letter-spacing: 0.12em;
          margin-bottom: 1.25rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        .skills-card-title::after {
          content: '';
          flex: 1;
          height: 1px;
          background: var(--border-dim);
        }

        /* Technical skill bars */
        .skill-bar-item {
          margin-bottom: 1.1rem;
        }
        .skill-bar-item:last-child { margin-bottom: 0; }
        .skill-bar-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 0.4rem;
        }
        .skill-bar-name {
          font-size: 0.8rem;
          font-weight: 400;
          color: var(--white-dim);
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        .skill-bar-pct {
          font-family: 'DM Mono', monospace;
          font-size: 0.65rem;
          color: var(--blue-light);
        }
        .skill-bar-track {
          height: 4px;
          background: var(--border-dim);
          border-radius: 100px;
          overflow: hidden;
        }
        .skill-bar-fill {
          height: 100%;
          background: linear-gradient(90deg, var(--blue), var(--blue-light));
          border-radius: 100px;
        }

        /* Tools grid */
        .tools-grid {
          display: flex;
          flex-direction: column;
          gap: 0.55rem;
        }
        .tool-item {
          display: flex;
          align-items: center;
          gap: 0.65rem;
          padding: 0.55rem 0.75rem;
          background: var(--blue-muted);
          border: 1px solid var(--border);
          border-radius: 6px;
          font-size: 0.8rem;
          font-weight: 400;
          color: var(--white-dim);
          transition: border-color 0.2s;
        }
        .tool-item:hover { border-color: var(--blue-light); }

        /* Soft skills */
        .soft-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0.55rem;
        }
        .soft-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 0.7rem;
          background: var(--navy);
          border: 1px solid var(--border-dim);
          border-radius: 6px;
          font-size: 0.76rem;
          font-weight: 300;
          color: var(--white-dim);
        }

        .skills-card.wide {
          grid-column: span 2;
        }

        @media (max-width: 768px) {
          .skills { padding: 5rem 1.5rem; }
          .skills-grid { grid-template-columns: 1fr; }
          .skills-card.wide { grid-column: span 1; }
          .soft-grid { grid-template-columns: 1fr; }
        }
      `}</style>

            <section className="skills" id="skills">
                <div className="skills-inner">
                    <p className="section-eyebrow">04 — Skills</p>
                    <h2 className="section-title">Technical <span>Skills</span></h2>
                    <div className="section-divider" />

                    <div className="skills-grid">

                        {/* Programming Languages */}
                        <div className="skills-card">
                            <div className="skills-card-top" />
                            <div className="skills-card-title">Programming Languages</div>
                            {technical.map(s => (
                                <div className="skill-bar-item" key={s.name}>
                                    <div className="skill-bar-header">
                                        <span className="skill-bar-name">{s.icon} {s.name}</span>
                                        <span className="skill-bar-pct">{s.level}%</span>
                                    </div>
                                    <div className="skill-bar-track">
                                        <div className="skill-bar-fill" style={{ width: `${s.level}%` }} />
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Tools */}
                        <div className="skills-card">
                            <div className="skills-card-top" />
                            <div className="skills-card-title">Tools & Software</div>
                            <div className="tools-grid">
                                {tools.map(t => (
                                    <div className="tool-item" key={t.name}>
                                        <span>{t.icon}</span> {t.name}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Soft Skills */}
                        <div className="skills-card wide">
                            <div className="skills-card-top" />
                            <div className="skills-card-title">Other Skills</div>
                            <div className="soft-grid">
                                {soft.map(s => (
                                    <div className="soft-item" key={s.name}>
                                        <span>{s.icon}</span> {s.name}
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