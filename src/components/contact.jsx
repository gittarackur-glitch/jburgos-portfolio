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
            icon: "📞",
            label: "Phone",
            value: "0927-311-6063",
            action: "tel:09273116063",
            actionLabel: "Call",
        },
        {
            icon: "✉️",
            label: "Email",
            value: "s2023102316@firstasia.edu.ph",
            action: "mailto:s2023102316@firstasia.edu.ph",
            actionLabel: "Send Email",
        },
        {
            icon: "📍",
            label: "Location",
            value: "Brgy. Gonzales, Tanauan City, Batangas",
            action: null,
            actionLabel: null,
        },
    ];

    const socials = [
        { icon: "💼", label: "LinkedIn", url: "#", placeholder: true },
        { icon: "🐙", label: "GitHub", url: "#", placeholder: true },
    ];

    return (
        <>
            <style>{`
        .contact {
          padding: 7rem 3rem;
          background: var(--navy-mid);
          position: relative;
          overflow: hidden;
        }
        .contact::before {
          content: '';
          position: absolute;
          right: 0; top: 10%; bottom: 10%;
          width: 1px;
          background: linear-gradient(to bottom, transparent, var(--blue-light), transparent);
          opacity: 0.2;
        }
        .contact-inner {
          max-width: 1020px;
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
          color: var(--gray);
          line-height: 1.85;
          margin-bottom: 2rem;
        }

        .contact-items {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .contact-item {
          background: var(--navy-card);
          border: 1px solid var(--border-dim);
          border-radius: 10px;
          padding: 1rem 1.25rem;
          display: flex;
          align-items: center;
          gap: 1rem;
          transition: border-color 0.2s;
          position: relative;
          overflow: hidden;
        }
        .contact-item::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 1px;
          background: linear-gradient(90deg, var(--blue-light), transparent);
          opacity: 0.2;
        }
        .contact-item:hover { border-color: var(--border); }

        .contact-item-icon {
          width: 40px; height: 40px;
          border-radius: 8px;
          background: var(--blue-muted);
          border: 1px solid var(--border);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1rem;
          flex-shrink: 0;
        }
        .contact-item-info { flex: 1; min-width: 0; }
        .contact-item-label {
          font-family: 'DM Mono', monospace;
          font-size: 0.6rem;
          color: var(--gray);
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin-bottom: 0.15rem;
        }
        .contact-item-value {
          font-size: 0.82rem;
          font-weight: 400;
          color: var(--white-dim);
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .contact-item-action {
          font-family: 'DM Mono', monospace;
          font-size: 0.65rem;
          color: var(--blue-light);
          text-decoration: none;
          border: 1px solid var(--border);
          padding: 0.2rem 0.6rem;
          border-radius: 4px;
          transition: border-color 0.2s, color 0.2s;
          flex-shrink: 0;
          cursor: pointer;
          background: none;
        }
        .contact-item-action:hover {
          border-color: var(--blue-light);
          color: var(--white);
        }

        /* Right */
        .contact-right {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .contact-cta-card {
          background: var(--navy-card);
          border: 1px solid var(--border-dim);
          border-radius: 12px;
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
          background: linear-gradient(90deg, transparent, var(--blue-light), transparent);
          opacity: 0.4;
        }
        .contact-cta-emoji {
          font-size: 2rem;
          margin-bottom: 0.75rem;
          display: block;
        }
        .contact-cta-title {
          font-family: 'Playfair Display', serif;
          font-size: 1.2rem;
          font-weight: 700;
          color: var(--white);
          margin-bottom: 0.5rem;
        }
        .contact-cta-text {
          font-size: 0.8rem;
          font-weight: 300;
          color: var(--gray);
          line-height: 1.7;
          margin-bottom: 1.25rem;
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
          background: var(--navy-card);
          border: 1px solid var(--border-dim);
          border-radius: 8px;
          font-size: 0.78rem;
          font-weight: 400;
          color: var(--white-dim);
          text-decoration: none;
          transition: border-color 0.2s, color 0.2s;
          position: relative;
        }
        .social-btn:hover {
          border-color: var(--blue-light);
          color: var(--white);
        }
        .social-placeholder-tag {
          position: absolute;
          top: -6px; right: -6px;
          font-size: 0.52rem;
          background: var(--navy-mid);
          border: 1px solid var(--border);
          color: var(--gray);
          padding: 0.1rem 0.35rem;
          border-radius: 4px;
          font-family: 'DM Mono', monospace;
        }

        /* Footer note */
        .contact-footer {
          margin-top: 4rem;
          padding-top: 2rem;
          border-top: 1px solid var(--border-dim);
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 1rem;
        }
        .contact-footer-name {
          font-family: 'Playfair Display', serif;
          font-size: 1rem;
          font-weight: 700;
          color: var(--white);
        }
        .contact-footer-name span { color: var(--blue-light); font-style: italic; }
        .contact-footer-copy {
          font-family: 'DM Mono', monospace;
          font-size: 0.65rem;
          color: var(--gray);
          letter-spacing: 0.05em;
        }

        @media (max-width: 768px) {
          .contact { padding: 5rem 1.5rem; }
          .contact-grid { grid-template-columns: 1fr; gap: 2rem; }
        }
      `}</style>

            <section className="contact" id="contact">
                <div className="contact-inner">
                    <p className="section-eyebrow">10 — Contact</p>
                    <h2 className="section-title">Get In <span>Touch</span></h2>
                    <div className="section-divider" />

                    <div className="contact-grid">

                        {/* Left */}
                        <div className="contact-left">
                            <p>
                                I'm currently open to internship opportunities and collaborations.
                                Whether you have a question, a project in mind, or just want to connect —
                                feel free to reach out. I'll do my best to get back to you promptly.
                            </p>

                            <div className="contact-items">
                                {contactItems.map((item, i) => (
                                    <div className="contact-item" key={i}>
                                        <div className="contact-item-icon">{item.icon}</div>
                                        <div className="contact-item-info">
                                            <div className="contact-item-label">{item.label}</div>
                                            <div className="contact-item-value">{item.value}</div>
                                        </div>
                                        {item.action && (
                                            <a href={item.action} className="contact-item-action">
                                                {item.actionLabel}
                                            </a>
                                        )}
                                    </div>
                                ))}

                                {/* Copy email */}
                                <button className="contact-item" onClick={handleCopyEmail} style={{ width: "100%", cursor: "pointer", textAlign: "left" }}>
                                    <div className="contact-item-icon">📋</div>
                                    <div className="contact-item-info">
                                        <div className="contact-item-label">Quick Copy</div>
                                        <div className="contact-item-value">Copy email address</div>
                                    </div>
                                    <span className="contact-item-action">
                                        {copied ? "Copied ✓" : "Copy"}
                                    </span>
                                </button>
                            </div>
                        </div>

                        {/* Right */}
                        <div className="contact-right">
                            <div className="contact-cta-card">
                                <span className="contact-cta-emoji">👋</span>
                                <div className="contact-cta-title">Let's Work Together</div>
                                <p className="contact-cta-text">
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
                                        <span>{s.icon}</span> {s.label}
                                        {s.placeholder && <span className="social-placeholder-tag">TBA</span>}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Footer */}
                    <div className="contact-footer">
                        <div className="contact-footer-name">
                            JL<span>.</span>Burgos
                        </div>
                        <div className="contact-footer-copy">
                            © {new Date().getFullYear()} John Lemset S. Burgos · BS Computer Engineering · FAITH Colleges
                        </div>
                    </div>

                </div>
            </section>
        </>
    );
}