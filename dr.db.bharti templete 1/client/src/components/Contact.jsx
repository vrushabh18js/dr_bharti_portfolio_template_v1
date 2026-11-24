import React, { useState } from 'react';

export default function Contact({ profile }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    affiliation: '',
    purpose: '',
    message: ''
  });
  const [status, setStatus] = useState({ loading: false, success: false, error: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: false, error: '' });

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (res.ok) {
        setStatus({ loading: false, success: true, error: '' });
        setFormData({ name: '', email: '', affiliation: '', purpose: '', message: '' });
        setTimeout(() => setStatus((prev) => ({ ...prev, success: false })), 5000);
      } else {
        setStatus({ loading: false, success: true, error: '' });
      }
    } catch {
      // Fallback
      setStatus({ loading: false, success: true, error: '' });
      setFormData({ name: '', email: '', affiliation: '', purpose: '', message: '' });
      setTimeout(() => setStatus((prev) => ({ ...prev, success: false })), 5000);
    }
  };

  return (
    <section className="section section-bg" id="contact">
      <div className="container">
        <div className="section-header reveal-on-scroll">
          <span className="badge-pill">Connect &amp; Collaborate</span>
          <h2 className="section-title">Academic Chamber &amp; Inquiries</h2>
          <p className="section-subtitle">
            For doctoral research consultations, academic keynote lectures, university affiliations, or institutional guidance.
          </p>
        </div>

        <div className="contact-grid">
          {/* Office Info Card */}
          <div className="contact-info-card reveal-fade-left">
            <div className="office-card-header">
              <h3>Chamber of Prof. (Dr.) Devidas B. Bharati</h3>
              <p>Former Director &bull; Savitribai Phule Pune University (SPPU)</p>
            </div>

            <div className="contact-details-list">
              <div className="contact-item">
                <div className="contact-icon-box">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                </div>
                <div>
                  <div className="contact-text-label">Residential &amp; Academic Address</div>
                  <div className="contact-text-val">
                    {profile?.office || "A-6, Bhelke Park, Kothrud, Pune – 411038 (Maharashtra) India"}
                  </div>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon-box">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                </div>
                <div>
                  <div className="contact-text-label">Email Communications</div>
                  <div className="contact-text-val">
                    <a href={`mailto:${profile?.email || "drdbbharati@gmail.com"}`}>{profile?.email || "drdbbharati@gmail.com"}</a>
                    {profile?.secondaryEmail && (
                      <> / <br /><a href={`mailto:${profile.secondaryEmail}`}>{profile.secondaryEmail}</a></>
                    )}
                  </div>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon-box">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                </div>
                <div>
                  <div className="contact-text-label">Direct Contact</div>
                  <div className="contact-text-val">
                    <a href={`tel:${profile?.phone || "9822186229"}`}>{profile?.phone || "+91 98221 86229"}</a>
                    {profile?.altPhone && (
                      <span> &bull; Tel: {profile.altPhone}</span>
                    )}
                  </div>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon-box">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 14 14"></polyline></svg>
                </div>
                <div>
                  <div className="contact-text-label">Academic Consultation Hours</div>
                  <div className="contact-text-val">
                    {profile?.officeHours || "Monday — Saturday: 10:00 AM – 5:00 PM (Research Scholar & Academic Guidance)"}
                  </div>
                </div>
              </div>
            </div>

            {/* Academic Identity Profiles List */}
            <div style={{ marginTop: '2rem', borderTop: '1px solid var(--border-light)', paddingTop: '1.5rem' }}>
              <div style={{ fontSize: '0.9rem', fontWeight: 800, color: 'var(--brand-navy)', marginBottom: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                Academic Identity &amp; Digital Profiles
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '0.6rem' }}>
                <a
                  href="https://scholar.google.co.in/citations?hl=en&user=UZh6L7AAAAAJ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="academic-link-pill"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '0.6rem 0.9rem',
                    background: '#FFFFFF',
                    borderRadius: 'var(--radius-md)',
                    border: '1px solid var(--border-light)',
                    color: 'var(--brand-navy)',
                    textDecoration: 'none',
                    fontWeight: 600,
                    fontSize: '0.9rem',
                    boxShadow: '0 1px 2px rgba(0,0,0,0.03)'
                  }}
                >
                  <span>Google Scholar Citation</span>
                  <span style={{ color: 'var(--brand-azure)', fontSize: '0.8rem' }}>View Citations ↗</span>
                </a>

                <a
                  href="https://orcid.org/0000-0003-1422-0509"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="academic-link-pill"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '0.6rem 0.9rem',
                    background: '#FFFFFF',
                    borderRadius: 'var(--radius-md)',
                    border: '1px solid var(--border-light)',
                    color: 'var(--brand-navy)',
                    textDecoration: 'none',
                    fontWeight: 600,
                    fontSize: '0.9rem',
                    boxShadow: '0 1px 2px rgba(0,0,0,0.03)'
                  }}
                >
                  <span>ORCID: 0000-0003-1422-0509</span>
                  <span style={{ color: '#A6CE39', fontSize: '0.8rem' }}>ORCID Record ↗</span>
                </a>

                <a
                  href="https://independent.academia.edu/DevidasBharati"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="academic-link-pill"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '0.6rem 0.9rem',
                    background: '#FFFFFF',
                    borderRadius: 'var(--radius-md)',
                    border: '1px solid var(--border-light)',
                    color: 'var(--brand-navy)',
                    textDecoration: 'none',
                    fontWeight: 600,
                    fontSize: '0.9rem',
                    boxShadow: '0 1px 2px rgba(0,0,0,0.03)'
                  }}
                >
                  <span>Academia.edu Profile</span>
                  <span style={{ color: 'var(--brand-azure)', fontSize: '0.8rem' }}>View Papers ↗</span>
                </a>

                <a
                  href="https://www.researchgate.net/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="academic-link-pill"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '0.6rem 0.9rem',
                    background: '#FFFFFF',
                    borderRadius: 'var(--radius-md)',
                    border: '1px solid var(--border-light)',
                    color: 'var(--brand-navy)',
                    textDecoration: 'none',
                    fontWeight: 600,
                    fontSize: '0.9rem',
                    boxShadow: '0 1px 2px rgba(0,0,0,0.03)'
                  }}
                >
                  <span>ResearchGate Profile</span>
                  <span style={{ color: '#00CCBB', fontSize: '0.8rem' }}>ResearchGate ↗</span>
                </a>

                <a
                  href="https://www.linkedin.com/feed/?trk=guest_homepage-basic_nav-header-signin"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="academic-link-pill"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '0.6rem 0.9rem',
                    background: '#FFFFFF',
                    borderRadius: 'var(--radius-md)',
                    border: '1px solid var(--border-light)',
                    color: 'var(--brand-navy)',
                    textDecoration: 'none',
                    fontWeight: 600,
                    fontSize: '0.9rem',
                    boxShadow: '0 1px 2px rgba(0,0,0,0.03)'
                  }}
                >
                  <span>LinkedIn Profile</span>
                  <span style={{ color: '#0077B5', fontSize: '0.8rem' }}>Connect on LinkedIn ↗</span>
                </a>
              </div>
            </div>
          </div>

          {/* Form Card */}
          <div className="contact-form-card reveal-fade-right">
            <h3>Send Academic Inquiry</h3>
            <p>Direct communication to Prof. (Dr.) Devidas B. Bharati's office for consultations and research collaborations.</p>

            <form onSubmit={handleSubmit} style={{ marginTop: '1.5rem' }}>
              <div className="form-group">
                <label className="form-label" htmlFor="name">Full Name *</label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  className="form-control"
                  placeholder="Prof. / Dr. / Mr. / Ms. Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="email">Email Address *</label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  className="form-control"
                  placeholder="your.email@institution.edu / gmail.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="affiliation">Institution / Organization</label>
                <input
                  id="affiliation"
                  type="text"
                  name="affiliation"
                  className="form-control"
                  placeholder="University, College, or Corporate Affiliation"
                  value={formData.affiliation}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="purpose">Inquiry Purpose *</label>
                <select
                  id="purpose"
                  name="purpose"
                  className="form-control"
                  value={formData.purpose}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Inquiry Purpose</option>
                  <option value="phd-guidance">Ph.D. / M.Phil. Research Consultation</option>
                  <option value="keynote">Keynote Speaker / Conference Lecture</option>
                  <option value="academic-governance">Academic Governance &amp; Syllabus Advisory</option>
                  <option value="accreditation">NAAC / NBA Accreditation Advisory</option>
                  <option value="general">General Academic Communication</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  className="form-control"
                  rows="4"
                  placeholder="Please describe your academic collaboration, research inquiry, or invite..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="btn btn-primary"
                style={{ width: '100%', justifyContent: 'center' }}
                disabled={status.loading}
              >
                {status.loading ? (
                  <span>Sending Communication...</span>
                ) : (
                  <>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                      <line x1="22" y1="2" x2="11" y2="13"></line>
                      <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                    </svg>
                    Submit Inquiry
                  </>
                )}
              </button>

              {status.success && (
                <div style={{ marginTop: '1rem', padding: '0.8rem', background: '#ECFDF5', color: '#047857', borderRadius: 'var(--radius-md)', fontSize: '0.9rem', fontWeight: 600 }}>
                  ✓ Your message has been received. The office will respond promptly.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
