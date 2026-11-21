import React from 'react';

export default function Experience({ experience }) {
  return (
    <section className="section section-bg" id="experience">
      <div className="container">
        <div className="section-header">
          <span className="badge-pill emerald">Career Milestones</span>
          <h2 className="section-title">Leadership &amp; Academic Experience</h2>
          <p className="section-subtitle">
            A decorated trajectory of academic governance, departmental leadership, faculty development, and institutional accreditation.
          </p>
        </div>

        <div className="timeline-wrapper">
          <div className="timeline-line"></div>

          {experience?.map((item) => (
            <div key={item.id} className={`timeline-item ${item.current ? 'current' : ''}`}>
              <div className="timeline-marker">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c3 3 9 3 12 0v-5"></path></svg>
              </div>
              <div className="timeline-card">
                <div className="timeline-header">
                  <h3 className="role-title">{item.role}</h3>
                  <span className={`tenure-pill ${item.current ? 'active' : ''}`}>
                    {item.tenure} {item.current && '• Current Leadership'}
                  </span>
                </div>
                <div className="institution-tag">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 21h18"></path><path d="M5 21V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16"></path><path d="M9 9h1"></path><path d="M9 13h1"></path><path d="M9 17h1"></path><path d="M14 9h1"></path><path d="M14 13h1"></path><path d="M14 17h1"></path></svg>
                  {item.organization}
                </div>
                <p className="timeline-desc">{item.description}</p>
                {item.milestones && item.milestones.length > 0 && (
                  <ul className="milestones-list">
                    {item.milestones.map((m, mIdx) => (
                      <li key={mIdx}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                        <span>{m}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

