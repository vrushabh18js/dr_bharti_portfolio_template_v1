import React from 'react';

export default function AboutMe({ profile, corePrinciples, areasOfExpertise }) {
  const defaultPrinciples = [
    {
      id: 1,
      title: "Academic Excellence",
      description: "Maintaining high standards in management education and curriculum governance."
    },
    {
      id: 2,
      title: "Innovation & Research",
      description: "Encouraging creative thinking, empirical inquiry, and research-driven learning."
    },
    {
      id: 3,
      title: "Leadership Development",
      description: "Preparing postgraduate management students for real-world business challenges."
    }
  ];

  const defaultExpertise = [
    "Strategic Management",
    "Human Resource Management",
    "Organizational Behaviour",
    "Business Administration",
    "Leadership & Development",
    "Academic Administration",
    "Research & Innovation",
    "Entrepreneurship Development"
  ];

  const principlesList = corePrinciples && corePrinciples.length > 0 ? corePrinciples : defaultPrinciples;
  const expertiseList = areasOfExpertise && areasOfExpertise.length > 0 ? areasOfExpertise : defaultExpertise;

  const getPrincipleIcon = (idx) => {
    switch (idx) {
      case 0:
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
            <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
          </svg>
        );
      case 1:
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="12" y1="8" x2="12" y2="12"></line>
            <line x1="12" y1="16" x2="12.01" y2="16"></line>
          </svg>
        );
      case 2:
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
          </svg>
        );
      default:
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
          </svg>
        );
    }
  };

  return (
    <section className="section" id="about">
      <div className="container">
        {/* Personal Bio Intro */}
        <div style={{ maxWidth: '860px', margin: '0 auto 3rem auto', textAlign: 'center' }}>
          <span className="badge-pill">Academic Profile</span>
          <h2 className="section-title">About Dr. D. B. Bharti</h2>
          <div style={{
            fontSize: '1.05rem',
            fontWeight: 700,
            color: 'var(--brand-azure)',
            marginBottom: '1.2rem',
            letterSpacing: '0.02em',
            textTransform: 'uppercase'
          }}>
            {profile?.designation || "Director"} • {profile?.institution || "Dr. D. Y. Patil MBA College"}
          </div>

          <p style={{
            fontSize: '1.12rem',
            color: 'var(--text-main)',
            lineHeight: '1.8',
            marginBottom: '1.2rem',
            fontWeight: 500
          }}>
            {profile?.intro || "Dr. D. B. Bharti is an experienced academic professional specializing in management education, institutional leadership and student development. With a strong commitment to excellence in higher education, he focuses on bridging the gap between academic knowledge and practical industry requirements."}
          </p>

          <p style={{
            fontSize: '1.05rem',
            color: 'var(--text-muted)',
            lineHeight: '1.75',
            marginBottom: '2rem'
          }}>
            {profile?.about || "An enthusiastic academician and management professional committed to developing future leaders through innovative teaching methodologies, research-oriented learning and industry collaboration."}
          </p>
        </div>

        {/* Areas of Expertise */}
        <div style={{
          background: 'var(--bg-secondary)',
          borderRadius: 'var(--radius-lg)',
          padding: '2rem 2.5rem',
          border: '1px solid var(--border-light)',
          boxShadow: 'var(--shadow-sm)',
          marginBottom: '3rem',
          maxWidth: '960px',
          margin: '0 auto 3rem auto'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.6rem',
            marginBottom: '1.2rem'
          }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--brand-azure)" strokeWidth="2.2">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            <h3 style={{
              fontSize: '1.15rem',
              fontWeight: 800,
              color: 'var(--brand-navy)',
              margin: 0
            }}>
              Areas of Expertise
            </h3>
          </div>

          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0.75rem'
          }}>
            {expertiseList.map((area, idx) => (
              <span
                key={idx}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.45rem',
                  padding: '0.55rem 1.1rem',
                  background: '#FFFFFF',
                  color: 'var(--brand-navy)',
                  fontSize: '0.92rem',
                  fontWeight: 600,
                  borderRadius: 'var(--radius-pill)',
                  border: '1px solid var(--border-light)',
                  boxShadow: '0 1px 3px rgba(0,0,0,0.04)',
                  transition: 'all 0.2s ease'
                }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--brand-azure)" strokeWidth="2.5">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                {area}
              </span>
            ))}
          </div>
        </div>

        {/* 3 Core Principles */}
        <div style={{ marginTop: '3rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <span className="badge-pill gold">Academic Philosophy</span>
            <h3 style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--brand-navy)', marginTop: '0.5rem' }}>
              Core Principles
            </h3>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.5rem',
            maxWidth: '1040px',
            margin: '0 auto'
          }}>
            {principlesList.map((principle, idx) => (
              <div
                key={principle.id || idx}
                style={{
                  background: '#FFFFFF',
                  borderRadius: 'var(--radius-lg)',
                  padding: '2rem',
                  border: '1px solid var(--border-light)',
                  boxShadow: 'var(--shadow-sm)',
                  transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
                <div style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: '12px',
                  background: idx === 0 ? 'var(--brand-cyan-light)' : idx === 1 ? 'var(--brand-gold-light)' : 'var(--brand-emerald-light)',
                  color: idx === 0 ? 'var(--brand-azure)' : idx === 1 ? 'var(--brand-gold)' : 'var(--brand-emerald)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1.2rem'
                }}>
                  {getPrincipleIcon(idx)}
                </div>
                <h4 style={{
                  fontSize: '1.2rem',
                  fontWeight: 800,
                  color: 'var(--brand-navy)',
                  marginBottom: '0.6rem'
                }}>
                  {principle.title}
                </h4>
                <p style={{
                  fontSize: '0.95rem',
                  color: 'var(--text-muted)',
                  lineHeight: '1.65',
                  margin: 0
                }}>
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
