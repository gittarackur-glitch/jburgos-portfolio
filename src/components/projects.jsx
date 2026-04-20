export default function Projects() {
  const projects = [
    {
      title: "Automated Musical Note Analysis for Enhanced Music Understanding",
      desc: "A Python‑based system that applies computer vision and machine learning, powered by YOLO, to automatically recognize and categorize musical notes. Designed to be user‑friendly, it provides insights into pitch, duration, and other properties, making music comprehension more accessible for learners and enthusiasts.",
      tools: ["Python", "VS Code", "YOLO", "OpenCV", "TensorFlow", "PyTorch", "NumPy", "Pandas", "Matplotlib", "Scikit-learn", "Keras", "Google Colab"],
      role: "Developer",
      link: null,
    },
    {
      title: "Mealy Machine-Based Vending Machine Controller",
      desc: "A Verilog‑based vending machine controller implemented as a Mealy Machine in Quartus II, verified through real‑world FPGA simulation on an Altera Cyclone V board. The design successfully handled scenarios such as cancellation, overpayment, exact payment, and invalid transactions, demonstrating controlled outputs and reliable system behavior.",
      tools: ["Verilog HDL", "Quartus II (32‑bit)", "FPGA hardware (Altera Cyclone V, 28nm, 5CEBA4F23C7N)"],
      role: "Team Member",
      link: null,
    },
    {
      title: "Real-Time Chord Synthesis and Frequency Analysis via Fourier Transform in GUI Interface",
      desc: "A lightweight, open‑source Python application that uses sine wave synthesis and FFT to analyze and visualize musical chords in real time. Featuring an interactive GUI with frequency controls, waveform plotting, playback, and FFT output, it helps students and educators explore sound and frequency concepts without requiring advanced technical knowledge.",
      tools: ["Python", "VS Code", "NumPy", "SoundDevice", "SciPy(FFT)", "PyQt6", "Matplotlib"],
      role: "Developer",
      link: null,
    },
    {
      title: "Ambient Light-Based Smart Lighting System",
      desc: "An ESP32‑based ambient light smart lighting system that uses an LDR sensor, servo‑controlled SCR dimmer, and PZEM‑004T power meter to maintain a user‑defined lux setpoint. Featuring real‑time ADC sensing, smooth servo stepping, and an IoT dashboard, it achieved a 40% energy reduction compared to fixed‑brightness operation, offering a scalable solution for homes, offices, and academic environments.",
      tools: ["Arduino IDE", "ESP32", "LDR sensor", "Servo-controlled SCR dimmer", "PZEM-004T power meter", "IoT dashboard", "Antigravity"],
      role: "Co-Developer",
      link: null,
    },
  ];

  return (
    <>
      <style>{`
        .projects {
          padding: 7rem 3rem;
          background: var(--navy);
          position: relative;
          overflow: hidden;
        }
        .projects::before {
          content: '';
          position: absolute;
          left: 0; top: 10%; bottom: 10%;
          width: 1px;
          background: linear-gradient(to bottom, transparent, var(--blue-light), transparent);
          opacity: 0.2;
        }
        .projects-inner {
          max-width: 1020px;
          margin: 0 auto;
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 1.25rem;
        }

        .project-card {
          background: var(--navy-card);
          border: 1px solid var(--border-dim);
          border-radius: 12px;
          padding: 1.5rem 1.75rem;
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
          position: relative;
          overflow: hidden;
          transition: border-color 0.2s, transform 0.2s;
        }
        .project-card:hover {
          border-color: var(--border);
          transform: translateY(-2px);
        }
        .project-card-top {
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 1px;
          background: linear-gradient(90deg, var(--blue-light), transparent);
          opacity: 0.25;
        }

        .project-number {
          font-family: 'DM Mono', monospace;
          font-size: 0.62rem;
          color: var(--blue-light);
          letter-spacing: 0.08em;
          opacity: 0.6;
        }

        .project-title {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.95rem;
          font-weight: 500;
          color: var(--white);
          line-height: 1.3;
        }

        .project-desc {
          font-size: 0.78rem;
          font-weight: 300;
          color: var(--gray);
          line-height: 1.7;
          flex: 1;
        }

        .project-tools {
          display: flex;
          flex-wrap: wrap;
          gap: 0.4rem;
        }
        .project-tool {
          font-family: 'DM Mono', monospace;
          font-size: 0.62rem;
          padding: 0.2rem 0.55rem;
          background: var(--blue-muted);
          border: 1px solid var(--border);
          border-radius: 4px;
          color: var(--blue-light);
        }

        .project-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 0.75rem;
          border-top: 1px solid var(--border-dim);
        }
        .project-role {
          font-size: 0.7rem;
          font-weight: 300;
          color: var(--gray);
          font-family: 'DM Mono', monospace;
        }
        .project-link {
          font-size: 0.72rem;
          color: var(--blue-light);
          text-decoration: none;
          font-family: 'DM Mono', monospace;
          transition: color 0.2s;
        }
        .project-link:hover { color: var(--white); }

        .projects-placeholder-note {
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
          .projects { padding: 5rem 1.5rem; }
        }
      `}</style>

      <section className="projects" id="projects">
        <div className="projects-inner">
          <p className="section-eyebrow">05 — Projects</p>
          <h2 className="section-title">My <span>Projects</span></h2>
          <div className="section-divider" />

          <div className="projects-grid">
            {projects.map((p, i) => (
              <div className="project-card" key={i}>
                <div className="project-card-top" />
                <div className="project-number">Project {String(i + 1).padStart(2, '0')}</div>
                <div className="project-title">{p.title}</div>
                <p className="project-desc">{p.desc}</p>
                <div className="project-tools">
                  {p.tools.map(t => (
                    <span className="project-tool" key={t}>{t}</span>
                  ))}
                </div>
                <div className="project-footer">
                  <span className="project-role">Role: {p.role}</span>
                  {p.link
                    ? <a href={p.link} className="project-link" target="_blank" rel="noopener noreferrer">View ↗</a>
                    : <span className="project-link" style={{ opacity: 0.4 }}>Link unavailable</span>
                  }
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}