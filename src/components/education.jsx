export default function Education() {
  const education = [
    {
      period: "2023 — Present",
      school: "First Asia Institute of Technology and Humanities",
      short: "FAITH",
      level: "College",
      program: "Bachelor of Science in Computer Engineering",
      address: "Pres. JP Laurel Highway, Darasa, Tanauan City, Batangas",
      current: true,
    },
    {
      period: "2021 — 2023",
      school: "Tanauan Institute, Inc.",
      short: "TII",
      level: "Senior High School",
      program: "Science, Technology, Engineering, and Mathematics",
      address: "J. Gonzales Street, Barangay 4, Tanauan City, Batangas",
      current: false,
    },
    {
      period: "2017 — 2021",
      school: "Tanauan Institute, Inc.",
      short: "TII",
      level: "Junior High School",
      program: null,
      address: "J. Gonzales Street, Barangay 4, Tanauan City, Batangas",
      current: false,
    },
    {
      period: "2011 — 2017",
      school: "Master Creator's Learning Center, Inc.",
      short: "MCLC",
      level: "Primary School",
      program: null,
      address: "Barangay Gonzales, Tanauan City, Batangas",
      current: false,
    },
  ];

  return (
    <>
      <style>{`
        .education {
          padding: 7rem 3rem;
          background: var(--bg-alt);
          position: relative;
        }
        .education-inner {
          max-width: 1060px;
          margin: 0 auto;
        }

        .edu-timeline {
          position: relative;
          padding-left: 2rem;
        }
        .edu-timeline::before {
          content: '';
          position: absolute;
          left: 3px;
          top: 8px;
          bottom: 8px;
          width: 1px;
          background: linear-gradient(to bottom, var(--accent), var(--border));
        }

        .edu-entry {
          position: relative;
          padding-bottom: 2.5rem;
        }
        .edu-entry:last-child { padding-bottom: 0; }

        .edu-dot {
          position: absolute;
          left: -2rem;
          top: 6px;
          width: 7px;
          height: 7px;
          border-radius: 50%;
          border: 1.5px solid var(--accent);
          background: var(--bg-alt);
        }
        .edu-entry.current .edu-dot {
          background: var(--accent);
          box-shadow: 0 0 0 3px var(--accent-soft);
        }

        .edu-header {
          display: flex;
          align-items: center;
          gap: 0.85rem;
          margin-bottom: 0.6rem;
        }
        .edu-period {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.68rem;
          font-weight: 400;
          color: var(--accent);
          letter-spacing: 0.04em;
        }
        .edu-badge {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.6rem;
          font-weight: 400;
          padding: 0.15rem 0.5rem;
          border-radius: 100px;
          letter-spacing: 0.04em;
        }
        .edu-badge.active {
          background: var(--green-bg);
          border: 1px solid var(--green-border);
          color: var(--green);
        }
        .edu-badge.completed {
          background: var(--surface);
          border: 1px solid var(--border);
          color: var(--text-muted);
        }

        .edu-school {
          font-size: 0.95rem;
          font-weight: 500;
          color: var(--text);
          margin-bottom: 0.3rem;
          line-height: 1.3;
        }
        .edu-level-tag {
          display: inline-block;
          font-size: 0.68rem;
          font-weight: 400;
          color: var(--accent);
          margin-bottom: 0.3rem;
        }
        .edu-program-text {
          font-size: 0.8rem;
          font-weight: 300;
          color: var(--text-secondary);
          margin-bottom: 0.3rem;
          line-height: 1.4;
        }
        .edu-address {
          font-size: 0.72rem;
          font-weight: 300;
          color: var(--text-muted);
          line-height: 1.5;
        }

        @media (max-width: 768px) {
          .education { padding: 5rem 1.5rem; }
        }
      `}</style>

      <section className="education" id="education">
        <div className="education-inner">
          <div className="fade-in">
            <p className="section-label">02 — Education</p>
            <h2 className="section-heading">Academic <em>Background</em></h2>
            <hr className="section-rule" />
          </div>

          <div className="edu-timeline fade-in">
            {education.map((e, i) => (
              <div className={`edu-entry${e.current ? " current" : ""}`} key={i}>
                <div className="edu-dot" />
                <div className="edu-header">
                  <span className="edu-period">{e.period}</span>
                  <span className={`edu-badge ${e.current ? "active" : "completed"}`}>
                    {e.current ? "Current" : "Completed"}
                  </span>
                </div>
                <div className="edu-school">{e.school}</div>
                <div className="edu-level-tag">{e.level}</div>
                {e.program && <div className="edu-program-text">{e.program}</div>}
                <div className="edu-address">{e.address}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}