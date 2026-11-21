import React from 'react';

export default function Hero({ profile }) {
  const handleDownloadCV = () => {
    // Triggers print to PDF / download
    window.print();
  };

  return (
    <section className="hero-section" id="hero">
      {/* 1. Subtle Executive Mesh Glow */}
      <div className="hero-ambient-glow hero-glow-1" aria-hidden="true"></div>
      <div className="hero-ambient-glow hero-glow-2" aria-hidden="true"></div>

      <div className="container hero-grid" style={{ position: 'relative', zIndex: 1 }}>
        <div className="hero-content">
          {/* Main Heading: ONLY HIS NAME IN BOLD SQUARISH FONT */}
          <h1 className="hero-title">
            {profile?.name || "Dr. D. B. Bharti"}
          </h1>

          {/* 3. Polish the 3 Powerful Statements with Visual Rhythm */}
          <div className="hero-tagline-statement">
            <span className="statement-line statement-line-1">Inspiring Minds.</span>
            <span className="statement-line statement-line-2">Shaping Leaders.</span>
            <span className="statement-line statement-line-3">Creating Impact.</span>
          </div>

          <p className="hero-sub-statement">
            A commitment to academic excellence, meaningful research, and the development of future leaders.
          </p>

          {/* 5. High-End Micro-Interactions on the EXACTLY 2 BUTTONS */}
          <div className="hero-cta-group">
            <button
              className="btn btn-primary btn-hero-cv"
              onClick={handleDownloadCV}
              title="Download or Save Dr. Bharti's CV as PDF"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
              Download CV
            </button>

            <a
              href="#contact"
              className="btn btn-secondary btn-hero-contact"
              title="Get in touch with Dr. Bharti's office"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
              Get in Touch
            </a>
          </div>
        </div>

        {/* 4. Premium Portrait Framing & Glassmorphism Halo */}
        <div className="hero-media">
          <div className="portrait-halo-glow" aria-hidden="true"></div>

          <div className="portrait-frame-card">
            {/* Top Floating Badge: Conferred Doctoral Credential */}
            <div className="floating-badge badge-top">
              <div className="floating-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
              </div>
              <div>
                <div className="floating-text-top">Credential</div>
                <div className="floating-text-main">Ph.D. in Management</div>
              </div>
            </div>

            {/* Photo Container */}
            <div className="portrait-image-wrapper">
              <img
                src={profile?.portrait || "/images/profile-dr-bharti.svg"}
                alt={profile?.name || "Dr. D. B. Bharti"}
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
                <div className="floating-text-top">Verified Leadership</div>
                <div className="floating-text-main">Director &bull; MBA</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
