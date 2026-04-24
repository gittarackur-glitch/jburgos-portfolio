import { useState } from "react";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("s2023102316@firstasia.edu.ph");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const contactItems = [
    {
      label: "Phone",
      value: "0927-311-6063",
      action: "tel:09273116063",
      actionLabel: "Call",
    },
    {
      label: "Email",
      value: "s2023102316@firstasia.edu.ph",
      action: "mailto:s2023102316@firstasia.edu.ph",
      actionLabel: "Send",
    },
    {
      label: "Location",
      value: "Brgy. Gonzales, Tanauan City, Batangas",
      action: null,
      actionLabel: null,
    },
  ];

  const socials = [
    { label: "LinkedIn", url: "#", placeholder: true },
    { label: "GitHub", url: "#", placeholder: true },
  ];

  return (
    <>
      <style>{`
        .contact {
          padding: 7rem 3rem;
          background: var(--bg);
          position: relative;
        }
        .contact-inner {
          max-width: 1060px;
          margin: 0 auto;
        }

        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
          align-items: start;
        }

        /* Left */
        .contact-left p {
          font-size: 0.9rem;
          font-weight: 300;
          color: var(--text-secondary);
          line-height: 1.85;
          margin-bottom: 2rem;
        }

        .contact-items {
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
        }

        .contact-card {
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: var(--radius);
          padding: 1rem 1.25rem;
          display: flex;
          align-items: center;
          gap: 1rem;
          transition: border-color 0.3s ease;
        }
        .contact-card:hover { border-color: var(--border-hover); }

        .contact-card-icon {
          width: 40px; height: 40px;
          border-radius: 8px;
          background: var(--accent-soft);
          border: 1px solid var(--accent-border);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.6rem;
          font-weight: 500;
          color: var(--accent);
          text-transform: uppercase;
          letter-spacing: 0.04em;
        }
        .contact-card-info { flex: 1; min-width: 0; }
        .contact-card-label {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.6rem;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin-bottom: 0.15rem;
        }
        .contact-card-value {
          font-size: 0.82rem;
          font-weight: 400;
          color: var(--text-secondary);
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .contact-card-action {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.65rem;
          color: var(--accent);
          text-decoration: none;
          border: 1px solid var(--accent-border);
          padding: 0.22rem 0.6rem;
          border-radius: 4px;
          transition: border-color 0.3s ease, color 0.3s ease, background 0.3s ease;
          flex-shrink: 0;
          cursor: pointer;
          background: none;
        }
        .contact-card-action:hover {
          border-color: var(--accent);
          color: var(--text);
          background: var(--accent-soft);
        }

        /* Copy button */
        .copy-btn {
          width: 100%;
          cursor: pointer;
          text-align: left;
          font-family: inherit;
          color: inherit;
        }

        /* Right */
        .contact-right {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .contact-cta-card {
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: var(--radius);
          padding: 2rem;
          text-align: center;
          position: relative;
          overflow: hidden;
        }
        .contact-cta-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 2px;
          background: linear-gradient(90deg, transparent, var(--accent), transparent);
          opacity: 0.3;
        }
        .cta-heading {
          font-family: 'Playfair Display', serif;
          font-size: 1.2rem;
          font-weight: 600;
          color: var(--text);
          margin-bottom: 0.6rem;
        }
        .cta-text {
          font-size: 0.82rem;
          font-weight: 300;
          color: var(--text-secondary);
          line-height: 1.7;
          margin-bottom: 1.5rem;
        }

        /* Socials */
        .socials-row {
          display: flex;
          gap: 0.85rem;
        }
        .social-btn {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          padding: 0.65rem 1rem;
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: 8px;
          font-size: 0.78rem;
          font-weight: 400;
          color: var(--text-secondary);
          text-decoration: none;
          transition: border-color 0.3s ease, color 0.3s ease;
          position: relative;
        }
        .social-btn:hover {
          border-color: var(--accent-border);
          color: var(--text);
        }
        .social-placeholder {
          position: absolute;
          top: -5px; right: -5px;
          font-size: 0.5rem;
          background: var(--bg);
          border: 1px solid var(--border);
          color: var(--text-muted);
          padding: 0.08rem 0.3rem;
          border-radius: 3px;
          font-family: 'JetBrains Mono', monospace;
        }

        /* Footer */
        .site-footer {
          margin-top: 5rem;
          padding-top: 2rem;
          border-top: 1px solid var(--border);
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 1rem;
        }
        .footer-logo {
          font-family: 'Playfair Display', serif;
          font-size: 1rem;
          font-weight: 600;
          color: var(--text);
        }
        .footer-logo span { color: var(--accent); font-style: italic; }
        .footer-copy {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.62rem;
          color: var(--text-muted);
          letter-spacing: 0.04em;
        }

        @media (max-width: 768px) {
          .contact { padding: 5rem 1.5rem; }
          .contact-grid { grid-template-columns: 1fr; gap: 2rem; }
        }
      `}</style>

      <section className="contact" id="contact">
        <div className="contact-inner">
          <div className="fade-in">
            <p className="section-label">07 — Contact</p>
            <h2 className="section-heading">Get In <em>Touch</em></h2>
            <hr className="section-rule" />
          </div>

          <div className="contact-grid">

            {/* Left */}
            <div className="contact-left fade-in">
              <p>
                I'm currently open to internship opportunities and collaborations.
                Whether you have a question, a project in mind, or just want to connect —
                feel free to reach out. I'll do my best to get back to you promptly.
              </p>

              <div className="contact-items">
                {contactItems.map((item, i) => (
                  <div className="contact-card" key={i}>
                    <div className="contact-card-icon">
                      {item.label.slice(0, 3)}
                    </div>
                    <div className="contact-card-info">
                      <div className="contact-card-label">{item.label}</div>
                      <div className="contact-card-value">{item.value}</div>
                    </div>
                    {item.action && (
                      <a href={item.action} className="contact-card-action">
                        {item.actionLabel}
                      </a>
                    )}
                  </div>
                ))}

                {/* Copy email */}
                <button className="contact-card copy-btn" onClick={handleCopyEmail}>
                  <div className="contact-card-icon">CPY</div>
                  <div className="contact-card-info">
                    <div className="contact-card-label">Quick Copy</div>
                    <div className="contact-card-value">Copy email address</div>
                  </div>
                  <span className="contact-card-action">
                    {copied ? "Copied ✓" : "Copy"}
                  </span>
                </button>
              </div>
            </div>

            {/* Right */}
            <div className="contact-right fade-in d1">
              <div className="contact-cta-card">
                <div className="cta-heading">Let's Work Together</div>
                <p className="cta-text">
                  Open to internship roles, academic collaborations, and any opportunities
                  related to software development or computer engineering.
                </p>
                <a href="mailto:s2023102316@firstasia.edu.ph" className="btn-primary" style={{ display: "inline-flex", margin: "0 auto" }}>
                  Send an Email →
                </a>
              </div>

              <div className="socials-row">
                {socials.map(s => (
                  <a href={s.url} key={s.label} className="social-btn" target="_blank" rel="noopener noreferrer">
                    {s.label}
                    {s.placeholder && <span className="social-placeholder">TBA</span>}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="site-footer fade-in">
            <div className="footer-logo">
              JL<span>.</span>Burgos
            </div>
            <div className="footer-copy">
              © {new Date().getFullYear()} John Lemset S. Burgos · BS Computer Engineering · FAITH Colleges
            </div>
          </div>

        </div>
      </section>
    </>
  );
}