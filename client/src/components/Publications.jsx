import React from 'react';

export default function Publications({ publications }) {
  const defaultPubs = [
    {
      id: 1,
      title: "Emerging Trends in Modern Management Education",
      journal: "Management Education Review",
      year: "2025",
      tags: ["Management Education", "Curriculum Design", "Modern Trends"]
    },
    {
      id: 2,
      title: "Role of Artificial Intelligence in Business Management",
      journal: "Journal of Advanced Business & Technology",
      year: "2024",
      tags: ["Artificial Intelligence", "Business Strategy", "Decision Making"]
    },
    {
      id: 3,
      title: "Leadership and Organizational Effectiveness",
      journal: "International Journal of Organizational Dynamics",
      year: "2023",
      tags: ["Organizational Behavior", "Leadership", "HRM"]
    },
    {
      id: 4,
      title: "Digital Transformation in Higher Education",
      journal: "Higher Education Perspectives",
      year: "2022",
      tags: ["EdTech", "Digital Learning", "Institutional Strategy"]
    }
  ];

  const pubs = publications && publications.length > 0 ? publications : defaultPubs;

  return (
    <section className="section" id="publications">
      <div className="container">
        <div className="section-header">
          <span className="badge-pill">Scholarly Impact</span>
          <h2 className="section-title">Selected Publications</h2>
          <p className="section-subtitle">
            Scholarly articles and research contributions in management education, artificial intelligence, leadership effectiveness, and digital transformation.
          </p>
        </div>

        <div className="research-grid">
          {pubs.map((pub) => (
            <div key={pub.id} className="research-card">
              <div className="research-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                  <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
                </svg>
              </div>
              <div className="research-info">
                <h4>{pub.title}</h4>
                <div className="research-meta">{pub.journal} &bull; {pub.year}</div>
                {pub.tags && pub.tags.length > 0 && (
                  <div className="research-tags">
                    {pub.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="tag-mini">{tag}</span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
