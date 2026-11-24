import React, { useState } from 'react';

export default function SPPUGovernance({ sppuGovernance }) {
  const [activeTab, setActiveTab] = useState('all');
  const [expanded, setExpanded] = useState(false);

  const defaultCategories = [
    {
      id: "statutory-boards",
      categoryName: "Statutory Boards & Councils",
      badge: "Statutory Authority",
      items: [
        {
          role: "Former Academic Council Member",
          body: "Savitribai Phule Pune University (SPPU)",
          details: "Served on the university's supreme academic authority, determining academic policy, research direction, and faculty regulations."
        },
        {
          role: "Former Chairman of Finance Board",
          body: "Faculty of Management, Savitribai Phule Pune University",
          details: "Headed the financial management board, governing university curriculum development, financial pedagogy, and faculty coordination."
        },
        {
          role: "Special Invitee / Ex-Member",
          body: "Faculty of Commerce and Management, SPPU",
          details: "Participated in strategic statutory decisions, academic affiliations, interdisciplinary guidelines, and research ethics."
        },
        {
          role: "Ex-BOS Member — International Business Management",
          body: "Commerce and Management Faculty, SPPU",
          details: "Contributed to curriculum standardization, credits allocation, and evaluation metrics for international business studies."
        },
        {
          role: "Ex-Member, Board of Studies (BOS) of Accountancy",
          body: "University of Pune (2001 – 2005)",
          details: "Designed accountancy curricula, standardized accounting instruction, and regulated standards across undergraduate and postgraduate commerce."
        },
        {
          role: "Ex-Member, Research & Recognition (RR) Committee",
          body: "Financial Management & Management, SPPU",
          details: "Evaluated Ph.D. research proposals, synopsis approvals, and guide recognitions for doctoral scholars across Pune University."
        },
        {
          role: "Former Member, BCUD Sub-Committee",
          body: "Board of College and University Development, SPPU",
          details: "Oversaw institutional development grants, faculty research projects, and university college quality enhancement initiatives."
        },
        {
          role: "Ex-Member, RR Committee (Management)",
          body: "Dr. D. Y. Patil University (DPU), Pimpri",
          details: "Appointed university expert on research and recognition for management doctoral dissertations and scholar evaluations."
        }
      ]
    },
    {
      id: "syllabus-architecture",
      categoryName: "Curriculum & Syllabus Design",
      badge: "Academic Reform",
      items: [
        {
          role: "MBA Syllabus Restructuring Committee 2016",
          body: "Savitribai Phule Pune University",
          details: "Entrusted with the entire responsibility of structuring MBA specializations to align with evolving corporate expectations."
        },
        {
          role: "MBA Syllabus Restructuring Committee 2019",
          body: "Savitribai Phule Pune University",
          details: "Key architect for Management Accounting and Financial Management curricula in the revised CBCS university framework."
        },
        {
          role: "Convener — Introduction of GST into Syllabi (Dec 2017)",
          body: "SPPU M.Com. and MBA Curriculum Committees",
          details: "Appointed Convener to modify Indirect Taxation syllabus, leading the rollout of Goods & Services Tax (GST) across SPPU programs."
        },
        {
          role: "Undergraduate & Postgraduate Accountancy Restructuring",
          body: "University of Pune",
          details: "Active contributor in restructuring accountancy syllabi across F.Y.B.Com, S.Y.B.Com, T.Y.B.Com, and M.Com levels."
        },
        {
          role: "Syllabus Structuring Committee Member",
          body: "Sanjay Ghodawat Private University, Kolhapur",
          details: "Appointed expert committee member for designing MBA and postgraduate management programs for the newly established private university."
        }
      ]
    },
    {
      id: "examination-governance",
      categoryName: "Examinations & Doctoral Referees",
      badge: "Evaluation & Viva",
      items: [
        {
          role: "Chairman & Paper Setter — Ph.D. Entrance Examination (PET)",
          body: "Foreign Trade Paper II, University of Pune (Feb 2009)",
          details: "Appointed as paper setter and evaluator for university-wide doctoral entrance assessments."
        },
        {
          role: "Chairman — MBA Viva-Voce Examinations",
          body: "University of Pune",
          details: "Conducted executive viva-voce examinations and defended student project dissertations across affiliated institutes."
        },
        {
          role: "Paper Setter, Examiner, Moderator & Chairman",
          body: "MBA, MBS, PGDCCM, PGDBF, PGDBM, MMM Annual Exams, SPPU",
          details: "Chaired evaluation committees and set annual examination papers for major postgraduate diploma and degree courses."
        },
        {
          role: "Senior Supervisor for Annual Examinations",
          body: "University of Pune",
          details: "Headed examination center integrity, confidential processing, and university flying squad protocols."
        },
        {
          role: "External Ph.D. Thesis Referee & Viva Examiner",
          body: "Barkatullah University Bhopal, RTM Nagpur University & SPPU",
          details: "Evaluated and adjudicated doctoral theses across commerce, banking, and management faculties."
        }
      ]
    },
    {
      id: "selection-committees",
      categoryName: "Selection Panels & LIC Inspection",
      badge: "Institutional Quality",
      items: [
        {
          role: "Chairman & Member, Local Inquiry Committee (LIC)",
          body: "University of Pune",
          details: "Conducted statutory college inspections, affiliation verifications, faculty qualification checks, and infrastructure audits."
        },
        {
          role: "University Subject Expert — Selection of Directors",
          body: "Camp Education Society's & Sahyadri Institute of Management, Pune",
          details: "Appointed by SPPU Vice-Chancellor as subject expert on statutory selection panels for Institute Directors."
        },
        {
          role: "University Subject Expert — Faculty Selection Panels",
          body: "Professors, Associate Professors & Assistant Professors, SPPU",
          details: "Conducted official interviews and UGC CAS evaluations for faculty appointments across Pune University management colleges."
        },
        {
          role: "Subject Expert for Teachers Fellowship Committee",
          body: "Garware College of Commerce, Pune",
          details: "Evaluated research proposals and awarded teacher research fellowships under UGC schemes."
        }
      ]
    }
  ];

  const categories = sppuGovernance?.categories || defaultCategories;

  const allItems = categories.flatMap(cat =>
    cat.items.map(item => ({ ...item, categoryId: cat.id, categoryBadge: cat.badge }))
  );

  const filteredItems = activeTab === 'all'
    ? allItems
    : allItems.filter(item => item.categoryId === activeTab);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setExpanded(false);
  };

  // Show all or slice based on expanded
  const visibleItems = filteredItems;

  return (
    <section className="section section-bg" id="sppu-board">
      <div className="container">
        {/* Section Header */}
        <div className="section-header reveal-on-scroll">
          <span className="badge-pill gold">University Governance</span>
          <h2 className="section-title">SPPU Board &amp; Statutory Leadership</h2>
          <p className="section-subtitle">
            A distinguished record of statutory leadership, board chairmanships, syllabus restructuring, examination governance, and faculty selection across Savitribai Phule Pune University.
          </p>
        </div>

        {/* Official SPPU Leadership Commendations Banner */}
        <div className="reveal-on-scroll" style={{
          background: 'linear-gradient(135deg, rgba(238, 242, 255, 0.95), rgba(245, 243, 255, 0.95))',
          border: '1px solid #C7D2FE',
          borderRadius: 'var(--radius-lg)',
          padding: '1.8rem 2.2rem',
          marginBottom: '3rem',
          boxShadow: '0 4px 16px rgba(99, 102, 241, 0.08)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '1.2rem' }}>
            <div style={{
              width: '42px',
              height: '42px',
              borderRadius: '50%',
              background: '#4F46E5',
              color: '#FFFFFF',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'transform 0.3s ease'
            }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
              </svg>
            </div>
            <div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#1E1B4B', margin: 0 }}>
                Official University Commendations &amp; Letters of Recognition
              </h3>
              <div style={{ fontSize: '0.88rem', color: '#4338CA', fontWeight: 600 }}>
                Conferred by Savitribai Phule Pune University Statutory Authorities
              </div>
            </div>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.2rem'
          }}>
            <div
              className="academic-link-pill"
              style={{
                background: '#FFFFFF',
                borderRadius: 'var(--radius-md)',
                padding: '1.2rem 1.4rem',
                border: '1px solid #E0E7FF',
                boxShadow: '0 1px 4px rgba(0,0,0,0.03)'
              }}
            >
              <div style={{ fontSize: '0.82rem', fontWeight: 800, color: '#4F46E5', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                SPPU Registrar &amp; Dean
              </div>
              <div style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--brand-navy)', margin: '0.3rem 0' }}>
                Official Letter of Appreciation &amp; Recognition
              </div>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', margin: 0, lineHeight: 1.6 }}>
                Formally recognized by the Registrar and Dean of Commerce &amp; Management for pioneering leadership in university statutory work, syllabus restructuring, and academic governance.
              </p>
            </div>

            <div
              className="academic-link-pill"
              style={{
                background: '#FFFFFF',
                borderRadius: 'var(--radius-md)',
                padding: '1.2rem 1.4rem',
                border: '1px solid #E0E7FF',
                boxShadow: '0 1px 4px rgba(0,0,0,0.03)'
              }}
            >
              <div style={{ fontSize: '0.82rem', fontWeight: 800, color: '#4F46E5', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                SPPU Pro-Vice Chancellor
              </div>
              <div style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--brand-navy)', margin: '0.3rem 0' }}>
                Official Letter of Appreciation &amp; Recognition
              </div>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', margin: 0, lineHeight: 1.6 }}>
                Conferred high commendation by the Pro-Vice Chancellor for dedicated service on university boards, curriculum modernization, and institutional accreditation oversight.
              </p>
            </div>
          </div>
        </div>

        {/* Category Filters Bar */}
        <div className="achievement-filter-bar reveal-on-scroll" style={{ marginBottom: '2.5rem' }}>
          <button
            className={`filter-btn ${activeTab === 'all' ? 'active' : ''}`}
            onClick={() => handleTabChange('all')}
          >
            All University Roles ({allItems.length})
          </button>
          <button
            className={`filter-btn ${activeTab === 'statutory-boards' ? 'active' : ''}`}
            onClick={() => handleTabChange('statutory-boards')}
          >
            Statutory Boards &amp; Councils
          </button>
          <button
            className={`filter-btn ${activeTab === 'syllabus-architecture' ? 'active' : ''}`}
            onClick={() => handleTabChange('syllabus-architecture')}
          >
            Syllabus Restructuring
          </button>
          <button
            className={`filter-btn ${activeTab === 'examination-governance' ? 'active' : ''}`}
            onClick={() => handleTabChange('examination-governance')}
          >
            Examinations &amp; Viva
          </button>
          <button
            className={`filter-btn ${activeTab === 'selection-committees' ? 'active' : ''}`}
            onClick={() => handleTabChange('selection-committees')}
          >
            Selection Panels &amp; LIC
          </button>
        </div>

                {/* Primary Visible Roles Grid (Top 6) */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '1.5rem'
        }}>
          {filteredItems.slice(0, 6).map((item, idx) => (
            <div
              key={idx}
              className={`pillar-card reveal-on-scroll stagger-${(idx % 6) + 1} is-revealed`}
              style={{
                background: '#FFFFFF',
                borderRadius: 'var(--radius-lg)',
                padding: '1.8rem',
                border: '1px solid var(--border-light)',
                boxShadow: 'var(--shadow-sm)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'relative'
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.8rem', gap: '0.5rem' }}>
                  <span className="tag-mini" style={{
                    background: item.categoryId === 'statutory-boards' ? '#EFF6FF' :
                                item.categoryId === 'syllabus-architecture' ? '#ECFDF5' :
                                item.categoryId === 'examination-governance' ? '#FFFBEB' : '#FAF5FF',
                    color: item.categoryId === 'statutory-boards' ? '#1D4ED8' :
                           item.categoryId === 'syllabus-architecture' ? '#047857' :
                           item.categoryId === 'examination-governance' ? '#B45309' : '#7E22CE',
                    fontWeight: 700
                  }}>
                    {item.categoryBadge || "SPPU Leadership"}
                  </span>
                  <div className="pillar-icon-box" style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '8px',
                    background: 'var(--brand-cyan-light)',
                    color: 'var(--brand-azure)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                      <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
                    </svg>
                  </div>
                </div>

                <h4 style={{
                  fontSize: '1.15rem',
                  fontWeight: 800,
                  color: 'var(--brand-navy)',
                  marginBottom: '0.4rem',
                  lineHeight: 1.35
                }}>
                  {item.role}
                </h4>

                <div style={{
                  fontSize: '0.88rem',
                  fontWeight: 600,
                  color: 'var(--brand-azure)',
                  marginBottom: '0.8rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.35rem'
                }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M3 21h18"></path>
                    <path d="M5 21V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16"></path>
                  </svg>
                  {item.body}
                </div>

                <p style={{
                  fontSize: '0.92rem',
                  color: 'var(--text-muted)',
                  lineHeight: 1.6,
                  margin: 0
                }}>
                  {item.details}
                </p>
              </div>

              <div style={{
                marginTop: '1.2rem',
                paddingTop: '0.8rem',
                borderTop: '1px solid var(--border-light)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                fontSize: '0.82rem',
                color: 'var(--text-muted)'
              }}>
                <span style={{ fontWeight: 600 }}>Savitribai Phule Pune University</span>
                <span style={{ color: 'var(--brand-azure)', fontWeight: 700 }}>Official Service</span>
              </div>
            </div>
          ))}
        </div>

        {/* Smooth Expandable Extra Roles Grid */}
        {filteredItems.length > 6 && (
          <div className={`expandable-grid ${expanded ? 'is-expanded' : ''}`}>
            <div className="expandable-inner">
              <div className="expandable-content-grid" style={{
                gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))'
              }}>
                {filteredItems.slice(6).map((item, idx) => (
                  <div
                    key={`extra-${idx}`}
                    className="pillar-card is-revealed"
                    style={{
                      background: '#FFFFFF',
                      borderRadius: 'var(--radius-lg)',
                      padding: '1.8rem',
                      border: '1px solid var(--border-light)',
                      boxShadow: 'var(--shadow-sm)',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      position: 'relative'
                    }}
                  >
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.8rem', gap: '0.5rem' }}>
                        <span className="tag-mini" style={{
                          background: item.categoryId === 'statutory-boards' ? '#EFF6FF' :
                                      item.categoryId === 'syllabus-architecture' ? '#ECFDF5' :
                                      item.categoryId === 'examination-governance' ? '#FFFBEB' : '#FAF5FF',
                          color: item.categoryId === 'statutory-boards' ? '#1D4ED8' :
                                 item.categoryId === 'syllabus-architecture' ? '#047857' :
                                 item.categoryId === 'examination-governance' ? '#B45309' : '#7E22CE',
                          fontWeight: 700
                        }}>
                          {item.categoryBadge || "SPPU Leadership"}
                        </span>
                        <div className="pillar-icon-box" style={{
                          width: '32px',
                          height: '32px',
                          borderRadius: '8px',
                          background: 'var(--brand-cyan-light)',
                          color: 'var(--brand-azure)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}>
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                            <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
                          </svg>
                        </div>
                      </div>

                      <h4 style={{
                        fontSize: '1.15rem',
                        fontWeight: 800,
                        color: 'var(--brand-navy)',
                        marginBottom: '0.4rem',
                        lineHeight: 1.35
                      }}>
                        {item.role}
                      </h4>

                      <div style={{
                        fontSize: '0.88rem',
                        fontWeight: 600,
                        color: 'var(--brand-azure)',
                        marginBottom: '0.8rem',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.35rem'
                      }}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M3 21h18"></path>
                          <path d="M5 21V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16"></path>
                        </svg>
                        {item.body}
                      </div>

                      <p style={{
                        fontSize: '0.92rem',
                        color: 'var(--text-muted)',
                        lineHeight: 1.6,
                        margin: 0
                      }}>
                        {item.details}
                      </p>
                    </div>

                    <div style={{
                      marginTop: '1.2rem',
                      paddingTop: '0.8rem',
                      borderTop: '1px solid var(--border-light)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      fontSize: '0.82rem',
                      color: 'var(--text-muted)'
                    }}>
                      <span style={{ fontWeight: 600 }}>Savitribai Phule Pune University</span>
                      <span style={{ color: 'var(--brand-azure)', fontWeight: 700 }}>Official Service</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Dropdown / Show More Button */}
        {filteredItems.length > 6 && (
          <div className="reveal-on-scroll" style={{ textAlign: 'center', marginTop: '3rem' }}>
            <button
              className="btn btn-secondary"
              onClick={() => setExpanded(!expanded)}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.65rem',
                padding: '0.85rem 2.2rem',
                fontSize: '0.96rem',
                fontWeight: 700,
                borderRadius: 'var(--radius-pill)',
                boxShadow: 'var(--shadow-sm)'
              }}
            >
              <span>
                {expanded
                  ? 'Show Less University Roles'
                  : `Show More University Roles (${filteredItems.length - 6} more)`}
              </span>
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                style={{
                  transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)',
                  transition: 'transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
                }}
              >
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
