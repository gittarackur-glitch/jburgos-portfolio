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
    {
      title: "Chick-up",
      desc: "A responsive React‑based web application deployed on Cloudflare Pages, designed to provide a seamless ordering experience for users. It integrates directly with the Flask backend hosted on Render, enabling real‑time order management, email notifications, and secure API communication.",
      tools: ["React", "Cloudflare Pages", "Flask", "Render", "Antigravity"],
      role: "Developer",
      link: null,
    },
    {
      title: "FPGA-Based PIC PIC 3: 4-Player Multiplayer Game",
      desc: "A 4-player multiplayer game inspired by Pico Park, implemented on an Altera DE0-CV FPGA board, demonstrating real-time game logic and hardware-level programming.",
      tools: ["Verilog HDL", "Quartus II (32‑bit)", "FPGA hardware (Altera Cyclone V, 28nm, 5CEBA4F23C7N)"],
      role: "Developer",
      link: null,
    },
  ];

  return (
    <>
      <style>{`
        .projects {
          padding: 7rem 3rem;
          background: var(--bg-alt);
          position: relative;
        }
        .projects-inner {
          max-width: 1060px;
          margin: 0 auto;
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 1.25rem;
        }

        .project-card {
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: var(--radius);
          padding: 1.5rem 1.75rem;
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
          transition: border-color 0.3s ease, transform 0.25s ease;
        }
        .project-card:hover {
          border-color: var(--accent-border);
          transform: translateY(-2px);
        }

        .project-num {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.62rem;
          color: var(--accent);
          letter-spacing: 0.06em;
          opacity: 0.7;
        }
        .project-name {
          font-size: 0.95rem;
          font-weight: 500;
          color: var(--text);
          line-height: 1.35;
        }
        .project-desc {
          font-size: 0.78rem;
          font-weight: 300;
          color: var(--text-secondary);
          line-height: 1.7;
          flex: 1;
        }
        .project-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.35rem;
        }
        .project-tag {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.6rem;
          padding: 0.18rem 0.5rem;
          background: var(--accent-soft);
          border: 1px solid var(--accent-border);
          border-radius: 3px;
          color: var(--accent);
        }
        .project-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 0.75rem;
          border-top: 1px solid var(--border);
        }
        .project-role {
          font-size: 0.7rem;
          color: var(--text-muted);
          font-family: 'JetBrains Mono', monospace;
        }
        .project-link {
          font-size: 0.72rem;
          color: var(--accent);
          text-decoration: none;
          font-family: 'JetBrains Mono', monospace;
          transition: color 0.3s ease;
        }
        .project-link:hover { color: var(--text); }

        @media (max-width: 768px) {
          .projects { padding: 5rem 1.5rem; }
        }
      `}</style>

      <section className="projects" id="projects">
        <div className="projects-inner">
          <div className="fade-in">
            <p className="section-label">04 — Projects</p>
            <h2 className="section-heading">My <em>Projects</em></h2>
            <hr className="section-rule" />
          </div>

          <div className="projects-grid fade-in">
            {projects.map((p, i) => (
              <div className="project-card" key={i}>
                <div className="project-num">Project {String(i + 1).padStart(2, '0')}</div>
                <div className="project-name">{p.title}</div>
                <p className="project-desc">{p.desc}</p>
                <div className="project-tags">
                  {p.tools.map(t => (
                    <span className="project-tag" key={t}>{t}</span>
                  ))}
                </div>
                <div className="project-footer">
                  <span className="project-role">Role: {p.role}</span>
                  {p.link
                    ? <a href={p.link} className="project-link" target="_blank" rel="noopener noreferrer">View ↗</a>
                    : <span className="project-link" style={{ opacity: 0.35 }}>—</span>
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