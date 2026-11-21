import React from 'react';

export default function Education({ education }) {
  return (
    <section className="section" id="education">
      <div className="container">
        <div className="section-header">
          <span className="badge-pill gold">Academic Pedigree</span>
          <h2 className="section-title">Education &amp; Qualifications</h2>
          <p className="section-subtitle">
            Rigorous educational foundations in business administration, economics, and empirical strategic management research.
          </p>
        </div>

        <div className="education-grid">
          {education?.map((edu) => (
            <div key={edu.id} className={`edu-card ${edu.type || ''}`}>
              <span className="edu-level-badge">{edu.level}</span>
              <h3 className="degree-name">{edu.degree}</h3>
              <div className="edu-specialization">{edu.specialization}</div>
              <div className="edu-meta-block">
                <div className="edu-university">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path></svg>
                  {edu.institution}
                </div>
                <div className="edu-year">{edu.year}</div>
                {edu.highlight && (
                  <div className="edu-highlights">
                    {edu.highlight}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

