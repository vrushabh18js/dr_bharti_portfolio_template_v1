import React from 'react';

export default function LeadershipPillars({ pillars }) {
  const getPillarIcon = (idx) => {
    switch(idx) {
      case 0:
        return <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>;
      case 1:
        return <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 14 14"></polyline></svg>;
      case 2:
        return <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>;
      default:
        return <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>;
    }
  };

  return (
    <section className="section" id="about">
      <div className="container">
        <div className="section-header">
          <span className="badge-pill">Executive Leadership</span>
          <h2 className="section-title">Strategic Vision for Business Education</h2>
          <p className="section-subtitle">
            Cultivating global competencies, empirical rigor, and entrepreneurial acumen across postgraduate management cohorts.
          </p>
        </div>

        <div className="pillars-grid">
          {pillars?.map((pillar, idx) => (
            <div key={pillar.id || idx} className="pillar-card">
              <div className="pillar-icon-box">
                {getPillarIcon(idx)}
              </div>
              <h3 className="pillar-title">{pillar.title}</h3>
              <p className="pillar-desc">{pillar.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

