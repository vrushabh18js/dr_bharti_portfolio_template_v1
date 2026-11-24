import React from 'react';

export default function Publications({ publications, books, profile }) {
  const defaultPubs = [
    {
      id: 1,
      title: "A Study and Implementation of PERT and CPM in a Production Process",
      journal: "Purakala (UGC CARE Journal)",
      year: "2020",
      tags: ["Operations Research", "PERT & CPM", "UGC CARE", "Production Analytics"]
    },
    {
      id: 2,
      title: "A Study of Women Empowerment through Pradhan Mantri Jan Dhan Yojana Accounts",
      journal: "Purakala (UGC CARE Journal), ISSN: 0971-2143",
      year: "2020",
      tags: ["Financial Inclusion", "Jan Dhan Yojana", "Women Empowerment", "UGC CARE"]
    },
    {
      id: 3,
      title: "Impact of COVID-19 Breakdown on Individual’s Financial Behavior",
      journal: "Purakala (UGC CARE Journal), Vol. 31, Issue 8",
      year: "2020",
      tags: ["Behavioral Finance", "Crisis Economics", "Personal Finance", "UGC CARE"]
    },
    {
      id: 4,
      title: "Use of Forward Contracts as a Forex Risk Management Tool in SME IT & ITES Companies in Pune",
      journal: "International Journal of Research and Analytical Reviews, E-ISSN: 2348-1269",
      year: "2019",
      tags: ["Forex Risk", "Derivatives & Forwards", "SME Finance", "IT & ITES"]
    },
    {
      id: 5,
      title: "A Study on All Time Priority Investment Sector with Special Reference to Indians",
      journal: "International Conference on Business, Management and Governance (Neville Wadia)",
      year: "2016",
      tags: ["Investment Strategy", "Indian Retail Investors", "Portfolio Allocation"]
    },
    {
      id: 6,
      title: "How the Prepaid Payment Instruments Repelling the Traditional Payment Instruments?",
      journal: "Contemporary Research in India: Peer-Reviewed International Journal, ISSN: 2231-2137",
      year: "2017",
      tags: ["Digital Payments", "FinTech", "Prepaid Instruments", "Banking"]
    },
    {
      id: 7,
      title: "A Study of Corporate Bond Market in India and Its Liquidity",
      journal: "International Journal of Research in Commerce and Management, ISSN: 0976-2183",
      year: "2013",
      tags: ["Debt Markets", "Corporate Bonds", "Market Liquidity", "Capital Markets"]
    },
    {
      id: 8,
      title: "Impact of F.D.I. in Retail Sector of India: Matters of Concern",
      journal: "International Journal of Business, Management & Social Sciences, ISSN: 2249-7463",
      year: "2014",
      tags: ["Foreign Direct Investment", "Retail Economics", "Public Policy"]
    },
    {
      id: 9,
      title: "Working Capital Analysis of FMCG Sector Companies in India with the Help of Ratio Analysis",
      journal: "Research Journey International Multidisciplinary E-Research Journal, ISSN: 2348-7143",
      year: "2019",
      tags: ["Working Capital", "FMCG Sector", "Ratio Analysis", "Financial Health"]
    },
    {
      id: 10,
      title: "A Study of Lending Models for Micro Finance Institutions in India",
      journal: "International Journal of Advances in Social Sciences, ISSN: 2347-5153",
      year: "2015",
      tags: ["Microfinance", "Lending Models", "Financial Inclusion", "SHG Models"]
    }
  ];

  const defaultBooks = [
    { id: 1, title: "Contemporary Issues in Management: Cases and Caselets", publisher: "The Virtue, Nashik", subject: "Strategic Management & Case Studies" },
    { id: 2, title: "Management Accounting", publisher: "University of Pune / SPPU", subject: "M.B.A. Post-Graduate Curriculum" },
    { id: 3, title: "Accounting for Business Decisions", publisher: "Savitribai Phule Pune University (SPPU)", subject: "M.B.A. Core Financial Decisions" },
    { id: 4, title: "Financial Regulatory Framework", publisher: "Savitribai Phule Pune University (SPPU)", subject: "M.B.A. Financial Regulations & Policy" },
    { id: 5, title: "Enterprise Performance Management (EPM)", publisher: "Savitribai Phule Pune University (SPPU)", subject: "M.B.A. Performance Metrics & Strategy" },
    { id: 6, title: "Direct Taxation", publisher: "Savitribai Phule Pune University (SPPU)", subject: "M.B.A. Corporate Tax Laws" },
    { id: 7, title: "Indirect Taxation (GST)", publisher: "Savitribai Phule Pune University (SPPU)", subject: "M.B.A. & M.Com. Goods & Services Tax" },
    { id: 8, title: "Income Tax – II", publisher: "Savitribai Phule Pune University (SPPU)", subject: "M.B.A. Advanced Tax Assessment" },
    { id: 9, title: "Management Information Systems (MIS)", publisher: "Savitribai Phule Pune University (SPPU)", subject: "M.B.A. Enterprise IT & Information Systems" },
    { id: 10, title: "Basics of Accountancy", publisher: "University of Pune", subject: "B.B.A. and B.C.A. Programs" },
    { id: 11, title: "Financial Accountancy", publisher: "University of Pune", subject: "F.Y.B.Com. & S.Y.B.Com." },
    { id: 12, title: "Corporate Accounting", publisher: "University of Pune", subject: "F.Y.B.Com. & S.Y.B.Com." },
    { id: 13, title: "Accountancy for F.Y.B.Com.", publisher: "University of Pune", subject: "Undergraduate Commerce" },
    { id: 14, title: "Accountancy for T.Y.B.Com. & Translator (F.Y., S.Y., T.Y.)", publisher: "Y.C.M.O.U. Nashik", subject: "Distance Education Commerce Curriculum" },
    { id: 15, title: "Basics of Marketing", publisher: "Savitribai Phule Pune University (SPPU)", subject: "M.B.A. Core Marketing Principles" },
    { id: 16, title: "Accountancy E-Learning Instructional Courseware", publisher: "Higher Education Learning Systems", subject: "Digital Accountancy Courseware" }
  ];

  const pubsList = publications && publications.length > 0 ? publications : defaultPubs;
  const booksList = books && books.length > 0 ? books : defaultBooks;

  return (
    <section className="section" id="publications">
      <div className="container">
        {/* Section Header */}
        <div className="section-header reveal-on-scroll">
          <span className="badge-pill gold">Academic Literature</span>
          <h2 className="section-title">Authored Books &amp; Research Publications</h2>
          <p className="section-subtitle">
            16 authored standard textbooks and 100+ research contributions across Banking, Financial Management, Taxation (GST), and Corporate Accounting.
          </p>
        </div>

        {/* Academic Profile Callout */}
        <div className="reveal-on-scroll" style={{
          background: 'linear-gradient(135deg, rgba(240, 249, 255, 0.8), rgba(248, 250, 252, 0.95))',
          border: '1px solid #BAE6FD',
          borderRadius: 'var(--radius-lg)',
          padding: '1.25rem 1.8rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '1rem',
          marginBottom: '3rem'
        }}>
          <div>
            <div style={{ fontWeight: 800, color: 'var(--brand-navy)', fontSize: '1.05rem' }}>
              Explore Dr. Devidas Bharati's Indexed Citations &amp; Academic Profiles
            </div>
            <div style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>
              Google Scholar Citations, ORCID ID, Academia.edu, and ResearchGate networks
            </div>
          </div>
          <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap' }}>
            <a
              href="https://scholar.google.co.in/citations?hl=en&user=UZh6L7AAAAAJ"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-sm"
              style={{ fontSize: '0.85rem' }}
            >
              Google Scholar Profile ↗
            </a>
            <a
              href="https://independent.academia.edu/DevidasBharati"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary btn-sm"
              style={{ fontSize: '0.85rem' }}
            >
              Academia.edu ↗
            </a>
          </div>
        </div>

        {/* 2-Column Horizontal Split Section: Books & Research Papers */}
        <div className="publications-split-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(420px, 1fr))',
          gap: '2.5rem',
          alignItems: 'start'
        }}>
          {/* Column 1: Books Authored */}
          <div className="pub-column reveal-on-scroll">
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingBottom: '1.2rem',
              marginBottom: '1.5rem',
              borderBottom: '2px solid var(--border-light)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <div style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '10px',
                  background: 'var(--brand-gold-light)',
                  color: 'var(--brand-gold)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
                  </svg>
                </div>
                <div>
                  <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: 'var(--brand-navy)', margin: 0 }}>
                    Books Authored
                  </h3>
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                    Curriculum &amp; Standard Textbooks
                  </div>
                </div>
              </div>
              <span className="badge-pill gold" style={{ margin: 0, padding: '0.35rem 0.9rem', fontSize: '0.85rem' }}>
                {booksList.length} Books
              </span>
            </div>

            {/* Scrollable / Structured Books List */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              maxHeight: '850px',
              overflowY: 'auto',
              paddingRight: '0.5rem'
            }}>
              {booksList.map((book, idx) => (
                <div
                  key={`book-${book.id || idx}`}
                  className="research-card is-revealed"
                  style={{
                    borderLeft: '4px solid var(--brand-gold)',
                    background: '#FFFFFF',
                    borderRadius: 'var(--radius-md)',
                    padding: '1.25rem 1.4rem',
                    border: '1px solid var(--border-light)',
                    borderLeftWidth: '4px',
                    borderLeftColor: 'var(--brand-gold)',
                    boxShadow: 'var(--shadow-sm)',
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '1rem',
                    transition: 'transform 0.25s ease, box-shadow 0.25s ease'
                  }}
                >
                  <div style={{
                    width: '28px',
                    height: '28px',
                    borderRadius: '6px',
                    background: 'var(--brand-gold-light)',
                    color: 'var(--brand-gold)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 800,
                    fontSize: '0.8rem',
                    flexShrink: 0,
                    marginTop: '0.2rem'
                  }}>
                    {idx + 1}
                  </div>
                  <div className="research-info" style={{ flex: 1 }}>
                    <span className="tag-mini" style={{
                      background: 'var(--brand-gold-light)',
                      color: 'var(--brand-gold)',
                      fontWeight: 700,
                      marginBottom: '0.35rem',
                      display: 'inline-block'
                    }}>
                      Textbook
                    </span>
                    <h4 style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--brand-navy)', marginBottom: '0.3rem', lineHeight: 1.4 }}>
                      {book.title}
                    </h4>
                    <div className="research-meta" style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                      Publisher: {book.publisher} &bull; {book.subject}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Column 2: Research Papers */}
          <div className="pub-column reveal-on-scroll">
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingBottom: '1.2rem',
              marginBottom: '1.5rem',
              borderBottom: '2px solid var(--border-light)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <div style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '10px',
                  background: 'var(--brand-cyan-light)',
                  color: 'var(--brand-azure)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                    <polyline points="14 2 14 8 20 8"></polyline>
                    <line x1="16" y1="13" x2="8" y2="13"></line>
                    <line x1="16" y1="17" x2="8" y2="17"></line>
                  </svg>
                </div>
                <div>
                  <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: 'var(--brand-navy)', margin: 0 }}>
                    Research Papers
                  </h3>
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                    Refereed &amp; UGC CARE Journals
                  </div>
                </div>
              </div>
              <span className="badge-pill azure" style={{ margin: 0, padding: '0.35rem 0.9rem', fontSize: '0.85rem' }}>
                {pubsList.length} Papers
              </span>
            </div>

            {/* Scrollable / Structured Research Papers List */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              maxHeight: '850px',
              overflowY: 'auto',
              paddingRight: '0.5rem'
            }}>
              {pubsList.map((paper, idx) => (
                <div
                  key={`paper-${paper.id || idx}`}
                  className="research-card is-revealed"
                  style={{
                    background: '#FFFFFF',
                    borderRadius: 'var(--radius-md)',
                    padding: '1.25rem 1.4rem',
                    border: '1px solid var(--border-light)',
                    borderLeft: '4px solid var(--brand-azure)',
                    boxShadow: 'var(--shadow-sm)',
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '1rem',
                    transition: 'transform 0.25s ease, box-shadow 0.25s ease'
                  }}
                >
                  <div style={{
                    width: '28px',
                    height: '28px',
                    borderRadius: '6px',
                    background: 'var(--brand-cyan-light)',
                    color: 'var(--brand-azure)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 800,
                    fontSize: '0.8rem',
                    flexShrink: 0,
                    marginTop: '0.2rem'
                  }}>
                    {idx + 1}
                  </div>
                  <div className="research-info" style={{ flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.35rem', flexWrap: 'wrap' }}>
                      <span className="tag-mini" style={{
                        background: 'var(--brand-cyan-light)',
                        color: 'var(--brand-azure)',
                        fontWeight: 700
                      }}>
                        Research Article
                      </span>
                      {paper.year && (
                        <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--brand-azure)' }}>
                          • {paper.year}
                        </span>
                      )}
                    </div>
                    <h4 style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--brand-navy)', marginBottom: '0.35rem', lineHeight: 1.4 }}>
                      {paper.title}
                    </h4>
                    <div className="research-meta" style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>
                      {paper.journal}
                    </div>
                    {paper.tags && paper.tags.length > 0 && (
                      <div className="research-tags" style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
                        {paper.tags.map((tag, tIdx) => (
                          <span key={tIdx} className="tag-mini" style={{ fontSize: '0.75rem' }}>
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
