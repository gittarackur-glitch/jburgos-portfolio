export default function Certificates() {
  const certificates = [
    {
      title: "3rd Annual CIDRCON: Connect. Innovate. Design. Revolutionize. Strengthening the Philippines' Microelectronics Ecosystem Through Strategic Collaboration and Talent Development",
      org: "Center for Innovation, Design, and Research (CIDR)",
      date: "August 2025",
      type: "Conference",
    },
    {
      title: "Certificate of Presentation: Ambient Light-Based Smart Lighting System",
      org: "FAITH Colleges COE: 2026 Collaborative Project Presentation and Prototype Exhibition",
      date: "April 2026",
      type: "Presentation",
    },
    {
      title: "Certificate of Best Research and Prototype: Ambient Light-Based Smart Lighting System",
      org: "FAITH Colleges COE: 2026 Collaborative Project Presentation and Prototype Exhibition",
      date: "April 2026",
      type: "Presentation",
    },
  ];

  const typeColors = {
    Seminar: { bg: "rgba(91,141,238,0.12)", border: "rgba(91,141,238,0.25)", color: "#5b8dee" },
    Webinar: { bg: "rgba(168,85,247,0.1)", border: "rgba(168,85,247,0.25)", color: "#a855f7" },
    Workshop: { bg: "rgba(251,146,60,0.1)", border: "rgba(251,146,60,0.25)", color: "#fb923c" },
    Training: { bg: "rgba(74,222,128,0.1)", border: "rgba(74,222,128,0.25)", color: "#4ade80" },
  };

  return (
    <>
      <style>{`
        .certificates {
          padding: 7rem 3rem;
          background: var(--navy);
          position: relative;
          overflow: hidden;
        }
        .certificates::before {
          content: '';
          position: absolute;
          left: 0; top: 10%; bottom: 10%;
          width: 1px;
          background: linear-gradient(to bottom, transparent, var(--blue-light), transparent);
          opacity: 0.2;
        }
        .certificates-inner {
          max-width: 1020px;
          margin: 0 auto;
        }

        .certificates-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
          gap: 1.1rem;
        }

        .cert-card {
          background: var(--navy-card);
          border: 1px solid var(--border-dim);
          border-radius: 12px;
          padding: 1.4rem 1.5rem;
          position: relative;
          overflow: hidden;
          transition: border-color 0.2s, transform 0.2s;
        }
        .cert-card:hover {
          border-color: var(--border);
          transform: translateY(-2px);
        }
        .cert-card-top {
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 1px;
          background: linear-gradient(90deg, var(--blue-light), transparent);
          opacity: 0.2;
        }

        .cert-icon {
          font-size: 1.75rem;
          margin-bottom: 0.85rem;
          display: block;
        }

        .cert-type {
          display: inline-block;
          font-family: 'DM Mono', monospace;
          font-size: 0.6rem;
          padding: 0.18rem 0.5rem;
          border-radius: 100px;
          letter-spacing: 0.06em;
          margin-bottom: 0.65rem;
        }

        .cert-title {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.85rem;
          font-weight: 500;
          color: var(--white);
          line-height: 1.4;
          margin-bottom: 0.4rem;
        }
        .cert-org {
          font-size: 0.72rem;
          font-weight: 300;
          color: var(--gray);
          margin-bottom: 0.65rem;
        }
        .cert-date {
          font-family: 'DM Mono', monospace;
          font-size: 0.62rem;
          color: var(--gray);
          display: flex;
          align-items: center;
          gap: 0.3rem;
        }

        .certificates-placeholder-note {
          text-align: center;
          margin-top: 2rem;
          font-size: 0.75rem;
          font-family: 'DM Mono', monospace;
          color: var(--gray);
          padding: 0.75rem 1.25rem;
          border: 1px dashed var(--border);
          border-radius: 8px;
          display: inline-block;
          left: 50%;
          position: relative;
          transform: translateX(-50%);
        }

        @media (max-width: 768px) {
          .certificates { padding: 5rem 1.5rem; }
        }
      `}</style>

      <section className="certificates" id="certificates">
        <div className="certificates-inner">
          <p className="section-eyebrow">09 — Certificates</p>
          <h2 className="section-title">Seminars & <span>Certificates</span></h2>
          <div className="section-divider" />

          <div className="certificates-grid">
            {certificates.map((c, i) => {
              const style = typeColors[c.type] || typeColors.Seminar;
              return (
                <div className="cert-card" key={i}>
                  <div className="cert-card-top" />
                  <span className="cert-icon">📜</span>
                  <span
                    className="cert-type"
                    style={{ background: style.bg, border: `1px solid ${style.border}`, color: style.color }}
                  >
                    {c.type}
                  </span>
                  <div className="cert-title">{c.title}</div>
                  <div className="cert-org">{c.org}</div>
                  <div className="cert-date">📅 {c.date}</div>
                </div>
              );
            })}
          </div>
          <div className="certificates-placeholder-note">
            💡 Update the certificates array in Certificates.jsx with your actual certificates
          </div>
        </div>
      </section>
    </>
  );
}