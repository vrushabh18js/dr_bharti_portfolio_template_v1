import React, { useState } from 'react';

export default function Gallery({ photos, onSelectPhoto, onOpenAddModal }) {
  const [activeFilter, setActiveFilter] = useState('all');

  const defaultPhotos = [
    {
      id: "gal-1",
      title: "Prof. (Dr.) Devidas B. Bharati — Academic Leadership Portrait",
      category: "awards",
      date: "Distinguished Academician",
      awardingBody: "Former Director & Ph.D. Guide",
      description: "Executive portrait of Prof. (Dr.) Devidas B. Bharati, carrying 43+ years of leadership in commerce, management, and doctoral supervision.",
      imageUrl: "/images/dr-bharti-portrait.jpg",
      tag: "Director Portrait"
    },
    {
      id: "gal-2",
      title: "Keynote Address & National Conference Dignitary Session",
      category: "keynotes",
      date: "National & International Summits",
      awardingBody: "University & Management Forums",
      description: "Dr. D. B. Bharati addressing delegates on financial risk, capital markets, and modern curriculum innovations across prestigious forums.",
      imageUrl: "/images/dr-bharti-event.jpg",
      tag: "Keynote Address"
    },
    {
      id: "gal-3",
      title: "Academic Council & Institutional Governance Conclave",
      category: "convocations",
      date: "Academic Leadership",
      awardingBody: "Savitribai Phule Pune University",
      description: "Engaging in university statutory body sessions, finance board governance, and institutional accreditation reviews.",
      imageUrl: "/images/dr-bharti-photo2.jpg",
      tag: "University Governance"
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
        <div className="section-header reveal-on-scroll">
          <span className="badge-pill">Moments &amp; Media</span>
          <h2 className="section-title">Photo Gallery &amp; Campus Moments</h2>
          <p className="section-subtitle">
            A visual chronicle of academic leadership addresses, convocation ceremonies, corporate alliances, and student mentorship.
          </p>
        </div>

        {/* Category Filters */}
        <div className="achievement-filter-bar reveal-on-scroll">
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
            Convocations &amp; Governance
          </button>
        </div>

        {/* Gallery Cards Grid */}
        <div className="achievement-grid">
          {filtered.map((item, idx) => (
            <article key={item.id} className={`achievement-card reveal-scale-up stagger-${(idx % 4) + 1}`}>
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
                    Zoom &bull; Full Image ↗
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Upload Action */}
        {onOpenAddModal && (
          <div className="reveal-on-scroll" style={{ textAlign: 'center', marginTop: '3rem' }}>
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
