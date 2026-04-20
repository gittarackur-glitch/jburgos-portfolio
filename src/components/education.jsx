export default function Education() {
    const education = [
        {
            period: "2023 — Present",
            school: "First Asia Institute of Technology and Humanities",
            short: "FAITH Colleges",
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
          background: var(--navy);
          position: relative;
          overflow: hidden;
        }
        .education::before {
          content: '';
          position: absolute;
          left: 0; top: 10%; bottom: 10%;
          width: 1px;
          background: linear-gradient(to bottom, transparent, var(--blue-light), transparent);
          opacity: 0.2;
        }
        .education-inner {
          max-width: 1020px;
          margin: 0 auto;
        }

        .edu-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.25rem;
        }

        .edu-card {
          background: var(--navy-card);
          border: 1px solid var(--border-dim);
          border-radius: 12px;
          padding: 1.5rem 1.75rem;
          position: relative;
          overflow: hidden;
          transition: border-color 0.2s;
        }
        .edu-card:hover { border-color: var(--border); }
        .edu-card.current { border-color: var(--border); }

        .edu-card-top {
          height: 2px;
          position: absolute;
          top: 0; left: 0; right: 0;
          background: linear-gradient(90deg, var(--blue), transparent);
          opacity: 0.4;
        }
        .edu-card.current .edu-card-top { opacity: 0.8; }

        .edu-card-header {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 1rem;
          margin-bottom: 0.85rem;
        }

        .edu-badge {
          font-family: 'DM Mono', monospace;
          font-size: 0.62rem;
          font-weight: 300;
          padding: 0.22rem 0.6rem;
          border-radius: 100px;
          letter-spacing: 0.06em;
          flex-shrink: 0;
        }
        .edu-badge.active {
          background: rgba(74,222,128,0.1);
          border: 1px solid rgba(74,222,128,0.3);
          color: #4ade80;
        }
        .edu-badge.completed {
          background: var(--blue-muted);
          border: 1px solid var(--border);
          color: var(--blue-light);
        }

        .edu-period {
          font-family: 'DM Mono', monospace;
          font-size: 0.65rem;
          font-weight: 300;
          color: var(--blue-light);
          letter-spacing: 0.06em;
          margin-bottom: 0.4rem;
        }

        .edu-school-name {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.95rem;
          font-weight: 500;
          color: var(--white);
          line-height: 1.3;
          margin-bottom: 0.3rem;
        }

        .edu-level-tag {
          display: inline-block;
          font-size: 0.7rem;
          font-weight: 400;
          color: var(--blue-light);
          background: var(--blue-muted);
          padding: 0.15rem 0.55rem;
          border-radius: 4px;
          margin-bottom: 0.4rem;
        }

        .edu-program-text {
          font-size: 0.78rem;
          font-weight: 300;
          color: var(--white-dim);
          margin-bottom: 0.4rem;
          line-height: 1.4;
        }

        .edu-address-text {
          font-size: 0.7rem;
          font-weight: 300;
          color: var(--gray);
          line-height: 1.5;
          display: flex;
          align-items: flex-start;
          gap: 0.4rem;
        }

        .edu-short {
          font-family: 'Playfair Display', serif;
          font-size: 2.5rem;
          font-weight: 700;
          color: var(--border-dim);
          position: absolute;
          bottom: 0.75rem;
          right: 1.25rem;
          letter-spacing: -0.02em;
          pointer-events: none;
          user-select: none;
        }
        .edu-card.current .edu-short {
          color: rgba(91,141,238,0.08);
        }

        @media (max-width: 768px) {
          .education { padding: 5rem 1.5rem; }
          .edu-grid { grid-template-columns: 1fr; }
        }
      `}</style>

            <section className="education" id="education">
                <div className="education-inner">
                    <p className="section-eyebrow">03 — Education</p>
                    <h2 className="section-title">Academic <span>Background</span></h2>
                    <div className="section-divider" />

                    <div className="edu-grid">
                        {education.map((e, i) => (
                            <div className={`edu-card${e.current ? " current" : ""}`} key={i}>
                                <div className="edu-card-top" />
                                <div className="edu-card-header">
                                    <div className="edu-period">{e.period}</div>
                                    <span className={`edu-badge ${e.current ? "active" : "completed"}`}>
                                        {e.current ? "Current" : "Completed"}
                                    </span>
                                </div>
                                <div className="edu-school-name">{e.school}</div>
                                <span className="edu-level-tag">{e.level}</span>
                                {e.program && <div className="edu-program-text">{e.program}</div>}
                                <div className="edu-address-text">📍 {e.address}</div>
                                <div className="edu-short">{e.short}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}