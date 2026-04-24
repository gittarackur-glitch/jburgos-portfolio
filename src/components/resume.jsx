import resume from '../assets/resume.pdf';
import resumepic from '../assets/resumepic.jpg';

const education = [
  {
    period: "2023 — Present",
    school: "First Asia Institute of Technology and Humanities",
    level: "College",
    program: "Bachelor of Science in Computer Engineering",
    address: "Pres. JP Laurel Highway, Darasa, Tanauan City, Batangas",
  },
  {
    period: "2021 — 2023",
    school: "Tanauan Institute, Inc.",
    level: "Senior High School",
    program: "Science, Technology, Engineering, and Mathematics",
    address: "J. Gonzales Street, Barangay 4, Tanauan City, Batangas",
  },
  {
    period: "2017 — 2021",
    school: "Tanauan Institute, Inc.",
    level: "Junior High School",
    program: null,
    address: "J. Gonzales Street, Barangay 4, Tanauan City, Batangas",
  },
  {
    period: "2011 — 2017",
    school: "Master Creator's Learning Center, Inc.",
    level: "Primary School",
    program: null,
    address: "Barangay Gonzales, Tanauan City, Batangas",
  },
];

const skills = [
  { label: "Programming" },
  { label: "Proofreading" },
  { label: "Problem Solving" },
  { label: "Basic Photo Editing" },
];

const contact = [
  { label: "Phone", value: "0927-311-6063" },
  { label: "Email", value: "s2023102316@firstasia.edu.ph" },
  { label: "Address", value: "Brgy. Gonzales, Tanauan City, Batangas" },
];

const personal = [
  { label: "Sex", value: "Male" },
  { label: "Birth Date", value: "April 23, 2005" },
  { label: "Religion", value: "Evangelical Christian" },
  { label: "Nationality", value: "Filipino" },
  { label: "Language", value: "Filipino & English" },
];

export default function Resume() {
  return (
    <>
      <style>{`
        .resume {
          padding: 7rem 3rem;
          background: var(--bg-alt);
          position: relative;
        }
        .resume-inner {
          max-width: 1060px;
          margin: 0 auto;
        }

        /* Download bar */
        .resume-download-bar {
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: var(--radius);
          overflow: hidden;
          margin-bottom: 2.5rem;
        }
        .resume-bar-accent {
          height: 2px;
          background: linear-gradient(90deg, var(--accent), rgba(196, 162, 101, 0.2), transparent);
        }
        .resume-bar-body {
          padding: 1.5rem 2rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1.5rem;
          flex-wrap: wrap;
        }
        .resume-file-info {
          display: flex;
          align-items: center;
          gap: 1rem;
        }
        .resume-file-icon {
          width: 48px; height: 48px;
          border-radius: 8px;
          background: var(--accent-soft);
          border: 1px solid var(--accent-border);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.7rem;
          font-weight: 500;
          color: var(--accent);
        }
        .resume-file-name {
          font-size: 0.92rem;
          font-weight: 500;
          color: var(--text);
          margin-bottom: 0.2rem;
        }
        .resume-file-sub {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.68rem;
          font-weight: 300;
          color: var(--text-muted);
          letter-spacing: 0.03em;
        }
        .resume-btns {
          display: flex;
          gap: 0.85rem;
          flex-wrap: wrap;
        }

        /* Resume preview card */
        .resume-preview {
          display: grid;
          grid-template-columns: 260px 1fr;
          gap: 0;
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: var(--radius);
          overflow: hidden;
        }

        /* Sidebar */
        .res-sidebar {
          background: #0d0d0d;
          border-right: 1px solid var(--border);
          padding: 2rem 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }
        .res-sidebar-photo {
          width: 100%;
          aspect-ratio: 3/4;
          border-radius: 8px;
          border: 1px solid var(--border);
          object-fit: cover;
          background: var(--bg-alt);
          display: block;
        }
        .res-sidebar-title {
          font-size: 0.72rem;
          font-weight: 500;
          color: var(--text);
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin-bottom: 0.85rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        .res-sidebar-title::after {
          content: '';
          flex: 1;
          height: 1px;
          background: var(--border);
        }

        .res-contact-list {
          display: flex;
          flex-direction: column;
          gap: 0.65rem;
        }
        .res-contact-item {
          display: flex;
          flex-direction: column;
          gap: 0.1rem;
        }
        .res-contact-label {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.58rem;
          font-weight: 400;
          color: var(--accent);
          text-transform: uppercase;
          letter-spacing: 0.08em;
        }
        .res-contact-value {
          font-size: 0.76rem;
          font-weight: 300;
          color: var(--text-secondary);
          line-height: 1.4;
        }

        .res-personal-list {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        .res-personal-item {
          display: flex;
          flex-direction: column;
          gap: 0.1rem;
        }
        .res-personal-label {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.58rem;
          font-weight: 400;
          color: var(--accent);
          text-transform: uppercase;
          letter-spacing: 0.08em;
        }
        .res-personal-value {
          font-size: 0.76rem;
          font-weight: 300;
          color: var(--text-secondary);
        }

        .res-skills-list {
          display: flex;
          flex-direction: column;
          gap: 0.45rem;
        }
        .res-skill-item {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          font-size: 0.76rem;
          font-weight: 300;
          color: var(--text-secondary);
          padding: 0.4rem 0.65rem;
          border-radius: var(--radius-sm);
          background: var(--accent-soft);
          border: 1px solid var(--accent-border);
        }
        .res-skill-dot {
          width: 4px; height: 4px;
          border-radius: 50%;
          background: var(--accent);
          opacity: 0.7;
        }

        /* Main content */
        .res-main {
          padding: 2rem 2.25rem;
        }
        .res-name {
          font-family: 'Playfair Display', serif;
          font-size: 2rem;
          font-weight: 700;
          color: var(--text);
          line-height: 1.1;
          margin-bottom: 0.25rem;
        }
        .res-title {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.78rem;
          font-weight: 400;
          color: var(--accent);
          letter-spacing: 0.06em;
          margin-bottom: 0.85rem;
        }
        .res-objective {
          font-size: 0.78rem;
          font-weight: 300;
          color: var(--text-secondary);
          font-style: italic;
          line-height: 1.65;
          padding: 0.75rem 1rem;
          border-left: 2px solid var(--accent);
          background: var(--accent-soft);
          border-radius: 0 var(--radius-sm) var(--radius-sm) 0;
          margin-bottom: 2rem;
          opacity: 0.85;
        }

        .res-section {
          margin-bottom: 2rem;
        }
        .res-section-title {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.68rem;
          font-weight: 400;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin-bottom: 1.1rem;
          display: flex;
          align-items: center;
          gap: 0.6rem;
        }
        .res-section-title::after {
          content: '';
          flex: 1;
          height: 1px;
          background: var(--border);
        }

        /* Education timeline in resume */
        .res-timeline {
          display: flex;
          flex-direction: column;
          gap: 0;
          position: relative;
          padding-left: 1.25rem;
        }
        .res-timeline::before {
          content: '';
          position: absolute;
          left: 3px; top: 8px; bottom: 8px;
          width: 1px;
          background: linear-gradient(to bottom, var(--accent), transparent);
          opacity: 0.3;
        }
        .res-edu-item {
          position: relative;
          padding-bottom: 1.5rem;
        }
        .res-edu-item:last-child { padding-bottom: 0; }
        .res-edu-dot {
          position: absolute;
          left: -1.25rem;
          top: 6px;
          width: 7px; height: 7px;
          border-radius: 50%;
          border: 1.5px solid var(--accent);
          background: var(--bg-alt);
        }
        .res-edu-item:first-child .res-edu-dot {
          background: var(--accent);
        }
        .res-edu-period {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.62rem;
          font-weight: 300;
          color: var(--accent);
          letter-spacing: 0.04em;
          margin-bottom: 0.2rem;
        }
        .res-edu-school {
          font-size: 0.85rem;
          font-weight: 500;
          color: var(--text);
          margin-bottom: 0.15rem;
          line-height: 1.3;
        }
        .res-edu-level {
          font-size: 0.72rem;
          font-weight: 400;
          color: var(--accent);
          margin-bottom: 0.15rem;
        }
        .res-edu-program {
          font-size: 0.72rem;
          font-weight: 300;
          color: var(--text-secondary);
          margin-bottom: 0.15rem;
        }
        .res-edu-address {
          font-size: 0.68rem;
          font-weight: 300;
          color: var(--text-muted);
          line-height: 1.4;
        }

        @media (max-width: 768px) {
          .resume { padding: 5rem 1.5rem; }
          .resume-preview { grid-template-columns: 1fr; }
          .res-sidebar {
            border-right: none;
            border-bottom: 1px solid var(--border);
          }
          .resume-bar-body {
            flex-direction: column;
            align-items: flex-start;
          }
          .resume-btns { width: 100%; }
          .resume-btns a { flex: 1; justify-content: center; }
        }
      `}</style>

      <section className="resume" id="resume">
        <div className="resume-inner">

          <div className="fade-in">
            <p className="section-label">06 — Resume</p>
            <h2 className="section-heading">My <em>Resume</em></h2>
            <hr className="section-rule" />
          </div>

          {/* Download bar */}
          <div className="resume-download-bar fade-in">
            <div className="resume-bar-accent" />
            <div className="resume-bar-body">
              <div className="resume-file-info">
                <div className="resume-file-icon">PDF</div>
                <div>
                  <div className="resume-file-name">Burgos_John_Lemset_Resume.pdf</div>
                  <div className="resume-file-sub">PDF · Last updated 2025</div>
                </div>
              </div>
              <div className="resume-btns">
                <a href={resume} target="_blank" rel="noopener noreferrer" className="btn-primary">
                  View Resume ↗
                </a>
                <a href={resume} download="Burgos_John_Lemset_Resume.pdf" className="btn-outline">
                  Download ↓
                </a>
              </div>
            </div>
          </div>

          {/* Resume preview */}
          <div className="resume-preview fade-in">

            {/* Sidebar */}
            <div className="res-sidebar">
              <img
                src={resumepic}
                alt="John Lemset S. Burgos"
                className="res-sidebar-photo"
              />

              <div>
                <div className="res-sidebar-title">Contact</div>
                <div className="res-contact-list">
                  {contact.map(c => (
                    <div className="res-contact-item" key={c.label}>
                      <span className="res-contact-label">{c.label}</span>
                      <span className="res-contact-value">{c.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <div className="res-sidebar-title">Personal</div>
                <div className="res-personal-list">
                  {personal.map(p => (
                    <div className="res-personal-item" key={p.label}>
                      <span className="res-personal-label">{p.label}</span>
                      <span className="res-personal-value">{p.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <div className="res-sidebar-title">Skills</div>
                <div className="res-skills-list">
                  {skills.map(s => (
                    <div className="res-skill-item" key={s.label}>
                      <span className="res-skill-dot" />
                      {s.label}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Main content */}
            <div className="res-main">
              <div className="res-name">John Lemset S. Burgos</div>
              <div className="res-title">&gt;_ Computer Engineering Student</div>

              <div className="res-objective">
                To obtain an internship or entry-level position where I can apply my knowledge
                in computer engineering, software development, and embedded systems. As a dedicated and
                fast-learning third-year BS Computer Engineering student at the First Asia Institute of
                Technology and Humanities, I aim to contribute meaningfully to a dynamic team while continuously
                growing as a future software engineer.
              </div>

              <div className="res-section">
                <div className="res-section-title">Education</div>
                <div className="res-timeline">
                  {education.map((e, i) => (
                    <div className="res-edu-item" key={i}>
                      <div className="res-edu-dot" />
                      <div className="res-edu-period">{e.period}</div>
                      <div className="res-edu-school">{e.school}</div>
                      <div className="res-edu-level">{e.level}</div>
                      {e.program && <div className="res-edu-program">{e.program}</div>}
                      <div className="res-edu-address">{e.address}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}