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
  { icon: "💻", label: "Programming" },
  { icon: "✍️", label: "Proofreading" },
  { icon: "🧩", label: "Problem Solving" },
  { icon: "🖼️", label: "Basic Photo Editing" },
];

const contact = [
  { icon: "📞", label: "0927-311-6063" },
  { icon: "✉️", label: "s2023102316@firstasia.edu.ph" },
  { icon: "📍", label: "Brgy. Gonzales, Tanauan City, Batangas" },
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
          background: var(--navy-mid);
          position: relative;
          overflow: hidden;
        }

        .resume::before {
          content: '';
          position: absolute;
          right: 0; top: 10%; bottom: 10%;
          width: 1px;
          background: linear-gradient(to bottom, transparent, var(--blue-light), transparent);
          opacity: 0.2;
        }

        .resume-inner {
          max-width: 1020px;
          margin: 0 auto;
        }

        /* Download bar */
        .resume-download-bar {
          background: var(--navy-card);
          border: 1px solid var(--border-dim);
          border-radius: 12px;
          overflow: hidden;
          margin-bottom: 2.5rem;
        }
        .resume-download-bar-top {
          height: 2px;
          background: linear-gradient(90deg, var(--blue), var(--blue-light), transparent);
          opacity: 0.6;
        }
        .resume-download-bar-body {
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
          background: var(--blue-muted);
          border: 1px solid var(--border);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.3rem;
          flex-shrink: 0;
        }
        .resume-file-name {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.92rem;
          font-weight: 500;
          color: var(--white);
          margin-bottom: 0.2rem;
        }
        .resume-file-sub {
          font-family: 'DM Mono', monospace;
          font-size: 0.68rem;
          font-weight: 300;
          color: var(--gray);
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
          background: var(--navy-card);
          border: 1px solid var(--border-dim);
          border-radius: 12px;
          overflow: hidden;
        }

        /* Left sidebar */
        .resume-sidebar {
          background: #0a1628;
          border-right: 1px solid var(--border-dim);
          padding: 2rem 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .sidebar-photo {
          width: 100%;
          aspect-ratio: 3/4;
          border-radius: 8px;
          border: 1px solid var(--border);
          object-fit: cover;
          background: var(--navy-mid);
          display: block;
        }

        .sidebar-section-title {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.75rem;
          font-weight: 500;
          color: var(--white);
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin-bottom: 0.85rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        .sidebar-section-title::after {
          content: '';
          flex: 1;
          height: 1px;
          background: var(--border-dim);
        }

        .contact-list {
          display: flex;
          flex-direction: column;
          gap: 0.65rem;
        }
        .contact-item {
          display: flex;
          align-items: flex-start;
          gap: 0.6rem;
          font-size: 0.76rem;
          font-weight: 300;
          color: var(--gray);
          line-height: 1.5;
        }
        .contact-item-icon {
          font-size: 0.85rem;
          margin-top: 1px;
          flex-shrink: 0;
        }

        .personal-list {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        .personal-item {
          display: flex;
          flex-direction: column;
          gap: 0.1rem;
        }
        .personal-label {
          font-size: 0.62rem;
          font-weight: 400;
          color: var(--blue-light);
          text-transform: uppercase;
          letter-spacing: 0.08em;
          font-family: 'DM Mono', monospace;
        }
        .personal-value {
          font-size: 0.76rem;
          font-weight: 300;
          color: var(--white-dim);
        }

        .skills-list {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        .skill-item {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          font-size: 0.78rem;
          font-weight: 300;
          color: var(--white-dim);
          padding: 0.4rem 0.65rem;
          border-radius: 6px;
          background: var(--blue-muted);
          border: 1px solid var(--border);
        }

        /* Right main content */
        .resume-main {
          padding: 2rem 2.25rem;
        }

        .resume-name {
          font-family: 'Playfair Display', serif;
          font-size: 2rem;
          font-weight: 700;
          color: var(--white);
          line-height: 1.1;
          margin-bottom: 0.25rem;
        }

        .resume-title {
          font-family: 'DM Mono', monospace;
          font-size: 0.78rem;
          font-weight: 300;
          color: var(--blue-light);
          letter-spacing: 0.08em;
          margin-bottom: 0.85rem;
        }

        .resume-verse {
          font-size: 0.78rem;
          font-weight: 300;
          color: var(--gray);
          font-style: italic;
          line-height: 1.6;
          padding: 0.75rem 1rem;
          border-left: 2px solid var(--blue-light);
          background: var(--blue-muted);
          border-radius: 0 6px 6px 0;
          margin-bottom: 2rem;
          opacity: 0.8;
        }

        .resume-section {
          margin-bottom: 2rem;
        }

        .resume-section-title {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.72rem;
          font-weight: 500;
          color: var(--gray);
          text-transform: uppercase;
          letter-spacing: 0.12em;
          margin-bottom: 1.1rem;
          display: flex;
          align-items: center;
          gap: 0.6rem;
          font-family: 'DM Mono', monospace;
        }
        .resume-section-title::after {
          content: '';
          flex: 1;
          height: 1px;
          background: var(--border-dim);
        }

        /* Education timeline */
        .edu-timeline {
          display: flex;
          flex-direction: column;
          gap: 0;
          position: relative;
          padding-left: 1.25rem;
        }
        .edu-timeline::before {
          content: '';
          position: absolute;
          left: 4px; top: 8px; bottom: 8px;
          width: 1px;
          background: linear-gradient(to bottom, var(--blue-light), transparent);
          opacity: 0.3;
        }

        .edu-item {
          position: relative;
          padding-bottom: 1.5rem;
        }
        .edu-item:last-child { padding-bottom: 0; }

        .edu-dot {
          position: absolute;
          left: -1.25rem;
          top: 6px;
          width: 8px; height: 8px;
          border-radius: 50%;
          border: 1.5px solid var(--blue-light);
          background: var(--navy-mid);
        }
        .edu-item:first-child .edu-dot {
          background: var(--blue-light);
        }

        .edu-period {
          font-family: 'DM Mono', monospace;
          font-size: 0.65rem;
          font-weight: 300;
          color: var(--blue-light);
          letter-spacing: 0.06em;
          margin-bottom: 0.2rem;
        }

        .edu-school {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.85rem;
          font-weight: 500;
          color: var(--white);
          margin-bottom: 0.15rem;
          line-height: 1.3;
        }

        .edu-level {
          font-size: 0.75rem;
          font-weight: 400;
          color: var(--blue-light);
          margin-bottom: 0.15rem;
        }

        .edu-program {
          font-size: 0.75rem;
          font-weight: 300;
          color: var(--white-dim);
          margin-bottom: 0.15rem;
        }

        .edu-address {
          font-size: 0.7rem;
          font-weight: 300;
          color: var(--gray);
          line-height: 1.4;
        }

        /* Responsive */
        @media (max-width: 768px) {
          .resume { padding: 5rem 1.5rem; }
          .resume-preview { grid-template-columns: 1fr; }
          .resume-sidebar { border-right: none; border-bottom: 1px solid var(--border-dim); }
          .resume-download-bar-body { flex-direction: column; align-items: flex-start; }
          .resume-btns { width: 100%; }
          .resume-btns a { flex: 1; justify-content: center; }
        }
      `}</style>

      <section className="resume" id="resume">
        <div className="resume-inner">

          <p className="section-eyebrow">02 — Resume</p>
          <h2 className="section-title">My <span>Resume</span></h2>
          <div className="section-divider" />

          {/* Download bar */}
          <div className="resume-download-bar">
            <div className="resume-download-bar-top" />
            <div className="resume-download-bar-body">
              <div className="resume-file-info">
                <div className="resume-file-icon">📄</div>
                <div>
                  <div className="resume-file-name">Burgos_John_Lemset_Resume.pdf</div>
                  <div className="resume-file-sub">PDF · Last updated 2025</div>
                </div>
              </div>
              <div className="resume-btns">
                <a href={resume} target="_blank" rel="noopener noreferrer" className="btn-primary">
                  View Resume ↗
                </a>
                <a href={resume} download="Burgos_John_Lemset_Resume.pdf" className="btn-secondary">
                  Download ↓
                </a>
              </div>
            </div>
          </div>

          {/* Resume preview */}
          <div className="resume-preview">

            {/* Sidebar */}
            <div className="resume-sidebar">

              <img
                src={resumepic}
                alt="John Lemset S. Burgos"
                className="sidebar-photo"
              />

              <div>
                <div className="sidebar-section-title">Contact</div>
                <div className="contact-list">
                  {contact.map(c => (
                    <div className="contact-item" key={c.label}>
                      <span className="contact-item-icon">{c.icon}</span>
                      {c.label}
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <div className="sidebar-section-title">Personal</div>
                <div className="personal-list">
                  {personal.map(p => (
                    <div className="personal-item" key={p.label}>
                      <span className="personal-label">{p.label}</span>
                      <span className="personal-value">{p.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <div className="sidebar-section-title">Skills</div>
                <div className="skills-list">
                  {skills.map(s => (
                    <div className="skill-item" key={s.label}>
                      <span>{s.icon}</span>
                      {s.label}
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Main content */}
            <div className="resume-main">

              <div className="resume-name">John Lemset S. Burgos</div>
              <div className="resume-title">&gt;_ Computer Engineering Student</div>

              <div className="resume-verse">
                To obtain an internship or entry-level position where I can apply my knowledge 
                in computer engineering, software development, and embedded systems. As a dedicated and 
                fast-learning third-year BS Computer Engineering student at the First Asia Institute of 
                Technology and Humanities, I aim to contribute meaningfully to a dynamic team while continuously 
                growing as a future software engineer.
              </div>

              <div className="resume-section">
                <div className="resume-section-title">🎓 Education</div>
                <div className="edu-timeline">
                  {education.map((e, i) => (
                    <div className="edu-item" key={i}>
                      <div className="edu-dot" />
                      <div className="edu-period">{e.period}</div>
                      <div className="edu-school">{e.school}</div>
                      <div className="edu-level">{e.level}</div>
                      {e.program && <div className="edu-program">{e.program}</div>}
                      <div className="edu-address">{e.address}</div>
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