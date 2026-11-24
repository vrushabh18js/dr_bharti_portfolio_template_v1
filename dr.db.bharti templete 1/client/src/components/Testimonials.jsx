import React from 'react';

export default function Testimonials({ testimonials }) {
  if (!testimonials || testimonials.length === 0) return null;

  return (
    <section className="section" style={{ background: 'var(--bg-primary)', borderTop: '1px solid var(--border-light)' }}>
      <div className="container">
        <div className="section-header">
          <span className="badge-pill gold">Endorsements</span>
          <h2 className="section-title">Words from Alumni &amp; Peers</h2>
          <p className="section-subtitle">
            Reflections from corporate leaders, research scholars, and academic contemporaries who have worked with Dr. Bharti.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          {testimonials.map((item) => (
            <div
              key={item.id}
              style={{
                background: 'var(--bg-secondary)',
                borderRadius: 'var(--radius-lg)',
                padding: '2rem',
                border: '1px solid var(--border-light)',
                boxShadow: 'var(--shadow-sm)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
            >
              <div style={{ fontSize: '1.8rem', color: 'var(--brand-azure)', lineHeight: 1, marginBottom: '0.8rem' }}>“</div>
              <p style={{ fontStyle: 'italic', color: 'var(--text-main)', fontSize: '0.98rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                {item.quote}
              </p>
              <div style={{ borderTop: '1px solid var(--border-light)', paddingTop: '1rem' }}>
                <div style={{ fontWeight: 800, color: 'var(--brand-navy)', fontSize: '1rem' }}>
                  {item.author}
                </div>
                <div style={{ fontSize: '0.85rem', color: 'var(--brand-azure)', fontWeight: 600 }}>
                  {item.designation}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

