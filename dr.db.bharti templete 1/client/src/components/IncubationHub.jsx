import React from 'react';

export default function IncubationHub({ stats }) {
  return (
    <div className="incubation-banner-card">
      <div className="incubation-content">
        <span
          className="badge-pill gold"
          style={{ background: 'rgba(251, 191, 36, 0.2)', color: '#FBBF24', borderColor: 'rgba(251, 191, 36, 0.4)' }}
        >
          Innovation &amp; Incubation Hub
        </span>
        <h3>Fostering the Next Wave of Entrepreneurs</h3>
        <p>
          As Director, Dr. D. B. Bharti bridges academic theory with venture creation. Overseeing the university Incubation Center, linking student founders with angel mentors, patent consultants, and seed funding ecosystems.
        </p>
        <div className="incubation-highlights-grid">
          <div className="incubation-stat-box">
            <div className="incubation-stat-number">{stats?.startups || "25+"}</div>
            <div className="incubation-stat-label">Student Startups Seeded</div>
          </div>
          <div className="incubation-stat-box">
            <div className="incubation-stat-number">{stats?.funding || "₹3.5 Cr+"}</div>
            <div className="incubation-stat-label">Angel &amp; Grant Funding Raised</div>
          </div>
          <div className="incubation-stat-box">
            <div className="incubation-stat-number">{stats?.mous || "12+"}</div>
            <div className="incubation-stat-label">Corporate &amp; Tech MoUs</div>
          </div>
          <div className="incubation-stat-box">
            <div className="incubation-stat-number">{stats?.patents || "8"}</div>
            <div className="incubation-stat-label">Patents &amp; Trademarks Filed</div>
          </div>
        </div>
      </div>
      <div>
        <img
          src="/images/achievement-incubation.svg"
          alt="Incubation Mentorship"
          style={{ borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-xl)', border: '2px solid rgba(255,255,255,0.2)' }}
        />
      </div>
    </div>
  );
}

