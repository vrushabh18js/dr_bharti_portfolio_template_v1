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
            <h4>{profile?.name || "Prof. (Dr.) Devidas B. Bharati"}</h4>
            <p style={{ color: 'var(--brand-azure)', fontWeight: 700 }}>
              {profile?.title || "Academic Leader · Former Director · Ph.D. Research Guide"}
            </p>
            <p>
              Dedicated to four decades of educational leadership, doctoral scholarship in Banking &amp; Finance, and institutional development across Savitribai Phule Pune University.
            </p>
          </div>

          <div className="footer-col">
            <h5>Quick Navigation</h5>
            <div className="footer-links">
              <a href="#hero">Profile Overview</a>
              <a href="#about">About &amp; Philosophy</a>
              <a href="#sppu-board">SPPU Board &amp; Governance</a>
              <a href="#experience">Leadership Trajectory</a>
              <a href="#education">Academic Pedigree</a>
              <a href="#achievements">Honors &amp; Recognitions</a>
              <a href="#publications">Books &amp; Research</a>
              <a href="#gallery">Moments &amp; Gallery</a>
              <a href="#contact">Contact Chamber</a>
            </div>
          </div>

          <div className="footer-col">
            <h5>Academic Profiles</h5>
            <div className="footer-links">
              <a href="https://scholar.google.co.in/citations?hl=en&user=UZh6L7AAAAAJ" target="_blank" rel="noopener noreferrer">
                Google Scholar Citations ↗
              </a>
              <a href="https://orcid.org/0000-0003-1422-0509" target="_blank" rel="noopener noreferrer">
                ORCID: 0000-0003-1422-0509 ↗
              </a>
              <a href="https://independent.academia.edu/DevidasBharati" target="_blank" rel="noopener noreferrer">
                Academia.edu Research ↗
              </a>
              <a href="https://www.researchgate.net/" target="_blank" rel="noopener noreferrer">
                ResearchGate Network ↗
              </a>
              <a href="https://www.linkedin.com/feed/?trk=guest_homepage-basic_nav-header-signin" target="_blank" rel="noopener noreferrer">
                LinkedIn Profile ↗
              </a>
            </div>
          </div>

          <div className="footer-col">
            <h5>Academic Chamber</h5>
            <p style={{ fontSize: '0.92rem', color: '#94A3B8', lineHeight: 1.6 }}>
              A-6, Bhelke Park, Kothrud<br />
              Pune – 411038, Maharashtra<br />
              Email: {profile?.email || "drdbbharati@gmail.com"}<br />
              Phone: {profile?.phone || "+91 98221 86229"}
            </p>
          </div>
        </div>

        <div className="footer-bottom" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            &copy; {new Date().getFullYear()} {profile?.name || "Prof. (Dr.) Devidas B. Bharati"}. All Academic Rights Reserved.
          </div>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.45rem',
            background: 'rgba(255, 255, 255, 0.05)',
            border: '1px solid rgba(255, 255, 255, 0.12)',
            padding: '0.45rem 1.1rem',
            borderRadius: 'var(--radius-pill)',
            fontSize: '0.85rem'
          }}>
            <span style={{ color: '#94A3B8' }}>Developed by</span>
            <span style={{ color: '#38BDF8', fontWeight: 700, letterSpacing: '0.02em' }}>
              Vrushabh | Sayali | DYPCOEI Incubation Center
            </span>
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
