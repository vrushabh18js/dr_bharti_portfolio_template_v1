import React, { useState, useEffect } from 'react';

export default function Navbar({ profile }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`site-header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container navbar">
        {/* Brand: Prof. (Dr.) Devidas B. Bharati */}
        <a href="#hero" className="nav-brand" aria-label="Dr. Devidas B. Bharati Home">
          <span className="brand-name">{profile?.shortName || profile?.name || "Dr. D. B. Bharati"}</span>
        </a>

        {/* Desktop Nav Links */}
        <nav className={`nav-menu ${mobileOpen ? 'open' : ''}`}>
          <a href="#about" className="nav-link" onClick={() => setMobileOpen(false)}>About Me</a>
          <a href="#sppu-board" className="nav-link" onClick={() => setMobileOpen(false)}>SPPU Board</a>
          <a href="#experience" className="nav-link" onClick={() => setMobileOpen(false)}>Experience</a>
          <a href="#education" className="nav-link" onClick={() => setMobileOpen(false)}>Education</a>
          <a href="#achievements" className="nav-link" onClick={() => setMobileOpen(false)}>Achievements</a>
          <a href="#publications" className="nav-link" onClick={() => setMobileOpen(false)}>Books &amp; Research</a>
          <a href="#gallery" className="nav-link" onClick={() => setMobileOpen(false)}>Gallery</a>
          <a href="#contact" className="nav-link" onClick={() => setMobileOpen(false)}>Contact</a>
        </nav>

        {/* Action Button */}
        <div className="nav-actions">
          <a href="#contact" className="btn btn-primary btn-sm">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
            Connect With Office
          </a>
          <button
            className="mobile-toggle"
            aria-label="Toggle Navigation Menu"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
