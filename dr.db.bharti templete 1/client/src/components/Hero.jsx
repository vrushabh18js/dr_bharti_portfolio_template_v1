import React from 'react';

export default function Hero({ profile }) {
  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = profile?.cvUrl || '/CV-Dr-Devidas-Bharati.pdf';
    link.download = 'Prof-Dr-Devidas-B-Bharati-CV.pdf';
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="hero-section" id="hero">
      {/* 1. Subtle Executive Mesh Glow */}
      <div className="hero-ambient-glow hero-glow-1" aria-hidden="true"></div>
      <div className="hero-ambient-glow hero-glow-2" aria-hidden="true"></div>

      <div className="container hero-grid" style={{ position: 'relative', zIndex: 1 }}>
        <div className="hero-content">
          {/* Main Heading: Dr. Devidas B. Bharati */}
          <h1 className="hero-title">
            {profile?.name || "Prof. (Dr.) Devidas B. Bharati"}
          </h1>

          {/* 3. Polish the 3 Powerful Statements with Visual Rhythm */}
          <div className="hero-tagline-statement">
            <span className="statement-line statement-line-1">Inspiring Minds.</span>
            <span className="statement-line statement-line-2">Shaping Leaders.</span>
            <span className="statement-line statement-line-3">Creating Impact.</span>
          </div>

          <p className="hero-sub-statement">
            {profile?.tagline || "43+ Years of Distinguished Academic Leadership, Doctoral Research Guidance, and Financial Pedagogy."}
          </p>

          {/* 5. High-End Micro-Interactions on CTA Buttons */}
          <div className="hero-cta-group">
            <button
              className="btn btn-primary btn-hero-cv"
              onClick={handleDownloadCV}
              title="Download Dr. Bharati's Complete CV as PDF"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
              Download Official CV
            </button>

            <a
              href="#contact"
              className="btn btn-secondary btn-hero-contact"
              title="Get in touch with Dr. Bharati's office"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
              Connect With Office
            </a>
          </div>

          {/* Academic Profiles Quick Row */}
          <div style={{ marginTop: '2rem', display: 'flex', alignItems: 'center', gap: '0.8rem', flexWrap: 'wrap' }}>
            <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--brand-azure)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Academic Identity:
            </span>
            <a
              href="https://scholar.google.co.in/citations?hl=en&user=UZh6L7AAAAAJ"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontSize: '0.82rem',
                fontWeight: 600,
                color: 'var(--brand-navy)',
                background: '#FFFFFF',
                padding: '0.35rem 0.75rem',
                borderRadius: 'var(--radius-pill)',
                border: '1px solid var(--border-light)',
                textDecoration: 'none',
                boxShadow: '0 1px 3px rgba(0,0,0,0.05)'
              }}
            >
              Google Scholar ↗
            </a>
            <a
              href="https://orcid.org/0000-0003-1422-0509"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontSize: '0.82rem',
                fontWeight: 600,
                color: '#A6CE39',
                background: '#FFFFFF',
                padding: '0.35rem 0.75rem',
                borderRadius: 'var(--radius-pill)',
                border: '1px solid var(--border-light)',
                textDecoration: 'none',
                boxShadow: '0 1px 3px rgba(0,0,0,0.05)'
              }}
            >
              ORCID ↗
            </a>
            <a
              href="https://independent.academia.edu/DevidasBharati"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontSize: '0.82rem',
                fontWeight: 600,
                color: 'var(--brand-navy)',
                background: '#FFFFFF',
                padding: '0.35rem 0.75rem',
                borderRadius: 'var(--radius-pill)',
                border: '1px solid var(--border-light)',
                textDecoration: 'none',
                boxShadow: '0 1px 3px rgba(0,0,0,0.05)'
              }}
            >
              Academia.edu ↗
            </a>
            <a
              href="https://www.researchgate.net/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontSize: '0.82rem',
                fontWeight: 600,
                color: '#00CCBB',
                background: '#FFFFFF',
                padding: '0.35rem 0.75rem',
                borderRadius: 'var(--radius-pill)',
                border: '1px solid var(--border-light)',
                textDecoration: 'none',
                boxShadow: '0 1px 3px rgba(0,0,0,0.05)'
              }}
            >
              ResearchGate ↗
            </a>
            <a
              href="https://www.linkedin.com/feed/?trk=guest_homepage-basic_nav-header-signin"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontSize: '0.82rem',
                fontWeight: 600,
                color: '#0077B5',
                background: '#FFFFFF',
                padding: '0.35rem 0.75rem',
                borderRadius: 'var(--radius-pill)',
                border: '1px solid var(--border-light)',
                textDecoration: 'none',
                boxShadow: '0 1px 3px rgba(0,0,0,0.05)'
              }}
            >
              LinkedIn ↗
            </a>
          </div>
        </div>

        {/* 4. Premium Portrait Framing & Glassmorphism Halo */}
        <div className="hero-media">
          <div className="portrait-halo-glow" aria-hidden="true"></div>

          <div className="portrait-frame-card">
            {/* Top Floating Badge: Doctoral Credential */}
            <div className="floating-badge badge-top">
              <div className="floating-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
              </div>
              <div>
                <div className="floating-text-top">Doctoral Degree</div>
                <div className="floating-text-main">Ph.D. in Banking &amp; Finance</div>
              </div>
            </div>

            {/* Photo Container with Real Portrait */}
            <div className="portrait-image-wrapper">
              <img
                src={profile?.portrait || "/images/dr-bharti-portrait.jpg"}
                alt={profile?.name || "Prof. (Dr.) Devidas B. Bharati"}
                style={{ objectPosition: 'center top' }}
              />
            </div>

            {/* Bottom Floating Badge: Verified Academic Leader Seal */}
            <div className="floating-badge badge-bottom">
              <div className="floating-icon verified">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  <polyline points="9 12 11 14 15 10"></polyline>
                </svg>
              </div>
              <div>
                <div className="floating-text-top">Distinguished Career</div>
                <div className="floating-text-main">43+ Yrs · Ex-Director SPPU</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
