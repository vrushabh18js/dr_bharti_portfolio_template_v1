import React from 'react';

export default function AboutMe({ profile, corePrinciples, areasOfExpertise, metrics }) {
  const defaultPrinciples = [
    {
      id: 1,
      title: "Academic & Institutional Leadership",
      description: "Fostering institutional excellence, NAAC/NBA accreditation benchmarks, and proactive university governance."
    },
    {
      id: 2,
      title: "Empirical Research & Ph.D. Mentorship",
      description: "Advancing rigorous scholarship in banking, financial markets, forex risk, and microfinance with 12 awarded Ph.D. scholars."
    },
    {
      id: 3,
      title: "Industry-Aligned Financial Pedagogy",
      description: "Curriculum innovation, modern accounting decision-making, and seamless integration of taxation reforms like GST."
    }
  ];

  const defaultExpertise = [
    "Banking & Finance",
    "Financial Management",
    "Advanced Accountancy & Costing",
    "Direct & Indirect Taxation (GST)",
    "Enterprise Performance Management",
    "Ph.D. & M.Phil. Research Guidance",
    "NAAC & NBA Accreditation Leadership",
    "Academic Administration & Affiliations",
    "Curriculum Restructuring & Syllabus Design",
    "Forex Risk Management & Derivatives"
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
        <div className="reveal-on-scroll" style={{ maxWidth: '860px', margin: '0 auto 2.5rem auto', textAlign: 'center' }}>
          <span className="badge-pill">Academic Profile</span>
          <h2 className="section-title">About Prof. (Dr.) Devidas B. Bharati</h2>
          <div style={{
            fontSize: '1.05rem',
            fontWeight: 700,
            color: 'var(--brand-azure)',
            marginBottom: '1.2rem',
            letterSpacing: '0.02em',
            textTransform: 'uppercase'
          }}>
            {profile?.designation || "Director & Professor"} • Savitribai Phule Pune University Affiliated
          </div>

          <p style={{
            fontSize: '1.12rem',
            color: 'var(--text-main)',
            lineHeight: '1.8',
            marginBottom: '1.2rem',
            fontWeight: 500
          }}>
            {profile?.intro || "Prof. (Dr.) Devidas B. Bharati is an accomplished academic leader, former Director, and recognized Ph.D. guide with over 43 years of dedicated service in higher education under Savitribai Phule Pune University (SPPU). An authority in Banking & Finance, Advanced Accountancy, Costing, and Direct/Indirect Taxation, he has shaped generations of management professionals and researchers."}
          </p>

          <p style={{
            fontSize: '1.05rem',
            color: 'var(--text-muted)',
            lineHeight: '1.75',
            marginBottom: '1rem'
          }}>
            {profile?.about || "Throughout his 43-year career, Dr. Bharati served for 24 years at the prestigious Brihan Maharashtra College of Commerce (BMCC), Pune, followed by leadership as Director at Rajgad Institute of Management Research & Development and key roles at Allana Institute of Management Sciences and Pratibha Institute of Business Management. A former Academic Council Member and Chairman of the Finance Board at SPPU, he has guided 12 Ph.D. and 16 M.Phil. scholars to completion, authored 16 books, and published over 100 research papers."}
          </p>
        </div>

        {/* 5 Prominent Metrics Badges */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
          gap: '1.2rem',
          maxWidth: '1040px',
          margin: '0 auto 3.5rem auto'
        }}>
          {[
            { num: "43+", label: "Years Experience", sub: "Academic & Leadership", delay: "stagger-1" },
            { num: "12", label: "Ph.D. Scholars", sub: "Successfully Awarded", delay: "stagger-2" },
            { num: "16", label: "M.Phil. Scholars", sub: "Successfully Awarded", delay: "stagger-3" },
            { num: "16", label: "Standard Books", sub: "Authored & Prescribed", delay: "stagger-4" },
            { num: "100+", label: "Research Articles", sub: "UGC Care & International", delay: "stagger-5" }
          ].map((m, idx) => (
            <div
              key={idx}
              className={`reveal-scale-up ${m.delay}`}
              style={{
                background: '#FFFFFF',
                border: '1px solid var(--border-light)',
                borderRadius: 'var(--radius-lg)',
                padding: '1.5rem 1rem',
                textAlign: 'center',
                boxShadow: 'var(--shadow-sm)',
                transition: 'transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.3s ease',
                cursor: 'default'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-6px)';
                e.currentTarget.style.boxShadow = '0 16px 30px -4px rgba(15, 23, 42, 0.12)';
                e.currentTarget.style.borderColor = 'var(--brand-azure)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
                e.currentTarget.style.borderColor = 'var(--border-light)';
              }}
            >
              <div style={{ fontSize: '2.2rem', fontWeight: 900, color: 'var(--brand-navy)', lineHeight: 1 }}>{m.num}</div>
              <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--brand-azure)', marginTop: '0.4rem', textTransform: 'uppercase' }}>{m.label}</div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>{m.sub}</div>
            </div>
          ))}
        </div>

        {/* Areas of Expertise */}
        <div className="reveal-on-scroll" style={{
          background: 'var(--bg-secondary)',
          borderRadius: 'var(--radius-lg)',
          padding: '2rem 2.5rem',
          border: '1px solid var(--border-light)',
          boxShadow: 'var(--shadow-sm)',
          marginBottom: '3.5rem',
          maxWidth: '1040px',
          margin: '0 auto 3.5rem auto'
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
              Core Academic &amp; Research Competencies
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
                className="academic-link-pill"
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
                  cursor: 'default'
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
        <div>
          <div className="reveal-on-scroll" style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <span className="badge-pill gold">Academic Philosophy</span>
            <h3 style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--brand-navy)', marginTop: '0.5rem' }}>
              Pillars of Academic Excellence
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
                className={`pillar-card reveal-on-scroll stagger-${idx + 1}`}
                style={{
                  background: '#FFFFFF',
                  borderRadius: 'var(--radius-lg)',
                  padding: '2rem',
                  border: '1px solid var(--border-light)',
                  boxShadow: 'var(--shadow-sm)',
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
                <div className="pillar-icon-box" style={{
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
