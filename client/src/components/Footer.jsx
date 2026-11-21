import React from 'react';

export default function Footer({ profile }) {
  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <h4>{profile?.name || "Dr. D. B. Bharti"}</h4>
            <p style={{ color: 'var(--brand-azure)', fontWeight: 700 }}>
              {profile?.title || "Director — Master of Business Administration"}
            </p>
            <p>
              Dedicated to advancing strategic leadership, academic rigor, and enterprise incubation in higher management education.
            </p>
          </div>

          <div className="footer-col">
            <h5>Quick Navigation</h5>
            <div className="footer-links">
              <a href="#hero">Profile Overview</a>
              <a href="#about">Leadership Pillars</a>
              <a href="#experience">Work Experience</a>
              <a href="#education">Academic Qualifications</a>
              <a href="#achievements">Achievements &amp; Photos</a>
            </div>
          </div>

          <div className="footer-col">
            <h5>Key Initiatives</h5>
            <div className="footer-links">
              <a href="#about">Strategic Management</a>
              <a href="#about">Human Resource Management</a>
              <a href="#publications">Research &amp; Publications</a>
              <a href="#education">Executive Leadership Pedagogy</a>
              <a href="#contact">Director Consultation Hours</a>
            </div>
          </div>

          <div className="footer-col">
            <h5>Director Chamber</h5>
            <p style={{ fontSize: '0.92rem', color: '#94A3B8' }}>
              {profile?.department || "MBA Department"}<br />
              {profile?.institution || "Dr. D. Y. Patil MBA College"}<br />
              Email: {profile?.email || "dr.dbbharti@gmail.com"}<br />
              Phone: {profile?.phone || "+91 (0) 98765 43210"}
            </p>
          </div>
        </div>

        <div className="footer-bottom">
          <div>
            &copy; {new Date().getFullYear()} {profile?.name || "Dr. D. B. Bharti"}. Powered by React &amp; Express.
          </div>
          <div>
            <button className="back-to-top-btn" onClick={handleBackToTop}>
              Back to Top
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="18 15 12 9 6 15"></polyline></svg>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

