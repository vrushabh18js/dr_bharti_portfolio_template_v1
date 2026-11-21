import React, { useState } from 'react';

export default function Gallery({ photos, onSelectPhoto, onOpenAddModal }) {
  const [activeFilter, setActiveFilter] = useState('all');

  const defaultPhotos = [
    {
      id: "gal-1",
      title: "Excellence in Academic Leadership Award Ceremony",
      category: "awards",
      date: "Annual Conclave • 2024",
      awardingBody: "Higher Education & Leadership Forum",
      description: "Conferred the prestigious Academic Leadership Award for strategic MBA governance and institutional excellence.",
      imageUrl: "/images/achievement-award.svg",
      tag: "Leadership Award"
    },
    {
      id: "gal-2",
      title: "Keynote Address on Future-Ready Management Education",
      category: "keynotes",
      date: "National Educators Summit • 2023",
      awardingBody: "Management Educators Council",
      description: "Delivering an invited keynote address on AI in Business Management and modern pedagogical frameworks.",
      imageUrl: "/images/achievement-keynote.svg",
      tag: "Keynote Speaker"
    },
    {
      id: "gal-3",
      title: "Annual Convocation & MBA Degree Conferral",
      category: "convocations",
      date: "University Convocation • 2024",
      awardingBody: "MBA Department",
      description: "Presiding over the graduation ceremony and conferring degrees to postgraduate management scholars.",
      imageUrl: "/images/achievement-convocation.svg",
      tag: "Convocation"
    },
    {
      id: "gal-4",
      title: "Industry-Academia Corporate MoU Signing",
      category: "corporate",
      date: "Corporate Alliances • 2023",
      awardingBody: "Industry Chambers & MNCs",
      description: "Establishing corporate linkages and live consulting labs for MBA student executive immersion.",
      imageUrl: "/images/achievement-mou.svg",
      tag: "Corporate MoU"
    },
    {
      id: "gal-5",
      title: "Postgraduate Student Mentorship & Research Guidance",
      category: "mentorship",
      date: "Research Initiative • 2024",
      awardingBody: "Dr. D. Y. Patil MBA College",
      description: "Guiding postgraduate scholars through case study methodology, business analytics, and thesis defenses.",
      imageUrl: "/images/achievement-incubation.svg",
      tag: "Student Mentorship"
    },
    {
      id: "gal-6",
      title: "National Management Research Seminar & Conclave",
      category: "keynotes",
      date: "Research Summit • 2024",
      awardingBody: "University & Academic Bodies",
      description: "Convening national management research symposium on Strategic Management and Organizational Agility.",
      imageUrl: "/images/achievement-research.svg",
      tag: "Research Chair"
    }
  ];

  const galleryList = photos && photos.length > 0 ? photos : defaultPhotos;

  const filtered = galleryList.filter((item) => {
    if (activeFilter === 'all') return true;
    return item.category === activeFilter;
  });

  return (
    <section className="section" id="gallery">
      <div className="container">
        <div className="section-header">
          <span className="badge-pill">Moments &amp; Media</span>
          <h2 className="section-title">Photo Gallery &amp; Campus Moments</h2>
          <p className="section-subtitle">
            A visual chronicle of academic leadership addresses, convocation ceremonies, corporate alliances, and student mentorship at Dr. D. Y. Patil MBA College.
          </p>
        </div>

        {/* Category Filters */}
        <div className="achievement-filter-bar">
          <button
            className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
            onClick={() => setActiveFilter('all')}
          >
            All Moments
          </button>
          <button
            className={`filter-btn ${activeFilter === 'awards' ? 'active' : ''}`}
            onClick={() => setActiveFilter('awards')}
          >
            Awards &amp; Honors
          </button>
          <button
            className={`filter-btn ${activeFilter === 'keynotes' ? 'active' : ''}`}
            onClick={() => setActiveFilter('keynotes')}
          >
            Keynotes &amp; Seminars
          </button>
          <button
            className={`filter-btn ${activeFilter === 'convocations' ? 'active' : ''}`}
            onClick={() => setActiveFilter('convocations')}
          >
            Convocations
          </button>
          <button
            className={`filter-btn ${activeFilter === 'corporate' ? 'active' : ''}`}
            onClick={() => setActiveFilter('corporate')}
          >
            Corporate MoUs
          </button>
          <button
            className={`filter-btn ${activeFilter === 'mentorship' ? 'active' : ''}`}
            onClick={() => setActiveFilter('mentorship')}
          >
            Mentorship
          </button>
        </div>

        {/* Gallery Cards Grid */}
        <div className="achievement-grid">
          {filtered.map((item) => (
            <article key={item.id} className="achievement-card">
              <div
                className="achievement-img-box"
                title="Click to view full photo"
                onClick={() => onSelectPhoto(item)}
              >
                <img src={item.imageUrl} alt={item.title} />
                <div className="achievement-overlay">
                  <span className="view-photo-btn">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="11" cy="11" r="8"></circle>
                      <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                      <line x1="11" y1="8" x2="11" y2="14"></line>
                      <line x1="8" y1="11" x2="14" y2="11"></line>
                    </svg>
                    View Photo
                  </span>
                </div>
                {item.tag && (
                  <span className="achievement-badge-tag">{item.tag}</span>
                )}
              </div>
              <div className="achievement-content">
                <div className="achievement-date">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                    <line x1="16" y1="2" x2="16" y2="6"></line>
                    <line x1="8" y1="2" x2="8" y2="6"></line>
                    <line x1="3" y1="10" x2="21" y2="10"></line>
                  </svg>
                  {item.date}
                </div>
                <h3 className="achievement-title" style={{ fontSize: '1.15rem' }}>{item.title}</h3>
                <p className="achievement-desc" style={{ fontSize: '0.9rem' }}>
                  {item.description}
                </p>
                <div className="achievement-footer-meta">
                  <span>{item.awardingBody}</span>
                  <span
                    style={{ color: 'var(--brand-azure)', fontWeight: 600, cursor: 'pointer' }}
                    onClick={() => onSelectPhoto(item)}
                  >
                    Zoom &bull; Full Image
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Upload Action */}
        {onOpenAddModal && (
          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <button className="btn btn-secondary btn-sm" onClick={onOpenAddModal}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <line x1="5" y1="12" x2="19" y2="12"></line>
              </svg>
              Upload New Photo
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

