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

  return (
    <>
      <style>{`
        .certificates {
          padding: 7rem 3rem;
          background: var(--bg);
          position: relative;
        }
        .certificates-inner {
          max-width: 1060px;
          margin: 0 auto;
        }

        .certs-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
          gap: 1.1rem;
        }

        .cert-card {
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: var(--radius);
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          transition: border-color 0.3s ease, transform 0.25s ease;
        }
        .cert-card:hover {
          border-color: var(--accent-border);
          transform: translateY(-2px);
        }

        .cert-type-badge {
          display: inline-block;
          align-self: flex-start;
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.6rem;
          padding: 0.18rem 0.55rem;
          border-radius: 100px;
          letter-spacing: 0.04em;
          margin-bottom: 0.5rem;
          background: var(--accent-soft);
          border: 1px solid var(--accent-border);
          color: var(--accent);
        }

        .cert-name {
          font-size: 0.85rem;
          font-weight: 500;
          color: var(--text);
          line-height: 1.45;
        }
        .cert-org {
          font-size: 0.72rem;
          font-weight: 300;
          color: var(--text-secondary);
          line-height: 1.5;
        }
        .cert-date {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.62rem;
          color: var(--text-muted);
          margin-top: auto;
          padding-top: 0.5rem;
        }

        @media (max-width: 768px) {
          .certificates { padding: 5rem 1.5rem; }
        }
      `}</style>

      <section className="certificates" id="certificates">
        <div className="certificates-inner">
          <div className="fade-in">
            <p className="section-label">05 — Certificates</p>
            <h2 className="section-heading">Seminars & <em>Certificates</em></h2>
            <hr className="section-rule" />
          </div>

          <div className="certs-grid fade-in">
            {certificates.map((c, i) => (
              <div className="cert-card" key={i}>
                <span className="cert-type-badge">{c.type}</span>
                <div className="cert-name">{c.title}</div>
                <div className="cert-org">{c.org}</div>
                <div className="cert-date">{c.date}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}