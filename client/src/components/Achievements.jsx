import React, { useState } from 'react';

export default function Achievements({ achievements, onSelectPhoto, onOpenAddModal }) {
  const [activeFilter, setActiveFilter] = useState('all');

  const filtered = achievements?.filter((item) => {
    if (activeFilter === 'all') return true;
    return item.category === activeFilter;
  });

  return (
    <section className="section section-bg" id="achievements">
      <div className="container">
        <div className="section-header">
          <span className="badge-pill">Honors &amp; Awards</span>
          <h2 className="section-title">Distinguished Key Achievements</h2>
          <p className="section-subtitle">
            Prestigious awards, academic leadership honors, and recognitions earned through excellence in management education.
          </p>
        </div>

        {/* Category Filters */}
        <div className="achievement-filter-bar">
          <button
            className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
            onClick={() => setActiveFilter('all')}
          >
            All Achievements
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
            Keynotes &amp; Conferences
          </button>
          <button
            className={`filter-btn ${activeFilter === 'convocations' ? 'active' : ''}`}
            onClick={() => setActiveFilter('convocations')}
          >
            Convocations
          </button>
          <button
            className={`filter-btn ${activeFilter === 'incubation' ? 'active' : ''}`}
            onClick={() => setActiveFilter('incubation')}
          >
            Incubation &amp; MoUs
          </button>
        </div>

        {/* Achievement Cards Grid */}
        <div className="achievement-grid">
          {filtered?.map((item) => (
            <article key={item.id} className="achievement-card">
              <div
                className="achievement-img-box"
                title="Click to view full photo"
                onClick={() => onSelectPhoto(item)}
              >
                <img src={item.imageUrl} alt={item.title} />
                <div className="achievement-overlay">
                  <span className="view-photo-btn">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><line x1="11" y1="8" x2="11" y2="14"></line><line x1="8" y1="11" x2="14" y2="11"></line></svg>
                    View Photo
                  </span>
                </div>
                <span className="achievement-badge-tag">{item.badge || item.category}</span>
              </div>

              <div className="achievement-content">
                <div className="achievement-date">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                  {item.date}
                </div>
                <h3 className="achievement-title">{item.title}</h3>
                <p className="achievement-desc">{item.description}</p>
                <div className="achievement-footer-meta">
                  <span>{item.awardingBody}</span>
                  <span style={{ color: 'var(--brand-azure)', cursor: 'pointer' }} onClick={() => onSelectPhoto(item)}>
                    Photo Preview
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Dynamic Add Achievement Button */}
        <div className="admin-actions-bar">
          <button className="btn-add-achievement" onClick={onOpenAddModal}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
            Add New Achievement &amp; Picture
          </button>
        </div>
      </div>
    </section>
  );
}

