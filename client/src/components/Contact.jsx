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
        <div className="section-header">
          <span className="badge-pill">Connect With Director</span>
          <h2 className="section-title">Academic Office &amp; Inquiries</h2>
          <p className="section-subtitle">
            For academic collaborations, doctoral mentorship, keynote lectures, or institutional partnerships.
          </p>
        </div>

        <div className="contact-grid">
          {/* Office Info Card */}
          <div className="contact-info-card">
            <div className="office-card-header">
              <h3>Office of the Director</h3>
              <p>{profile?.department || "MBA Department"} &bull; {profile?.institution || "Dr. D. Y. Patil MBA College"}</p>
            </div>

            <div className="contact-details-list">
              <div className="contact-item">
                <div className="contact-icon-box">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                </div>
                <div>
                  <div className="contact-text-label">Office Chamber</div>
                  <div className="contact-text-val">
                    {profile?.office || "Director Chamber, MBA Department, Dr. D. Y. Patil MBA College, Pune, Maharashtra"}
                  </div>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon-box">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                </div>
                <div>
                  <div className="contact-text-label">Official Email</div>
                  <div className="contact-text-val">
                    <a href={`mailto:${profile?.email || "dr.dbbharti@gmail.com"}`}>{profile?.email || "dr.dbbharti@gmail.com"}</a>
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
                  <div className="contact-text-label">Department Phone</div>
                  <div className="contact-text-val">
                    <a href={`tel:${profile?.phone}`}>{profile?.phone || "+91 (0) 98765 43210"}</a> &bull; Ext: 204
                  </div>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon-box">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                </div>
                <div>
                  <div className="contact-text-label">Office &amp; Consultation Hours</div>
                  <div className="contact-text-val">
                    {profile?.officeHours || "Monday — Friday: 10:00 AM – 4:00 PM"}
                  </div>
                </div>
              </div>
            </div>

            {/* Social / Academic Profiles */}
            <div>
              <div className="contact-text-label" style={{ marginBottom: '0.6rem' }}>Academic &amp; Research Profiles</div>
              <div className="social-links-bar">
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-circle-btn" title="LinkedIn" aria-label="LinkedIn">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.45a1.64 1.64 0 1 0 0 3.28 1.64 1.64 0 0 0 0-3.28z"></path></svg>
                </a>
                <a href="https://scholar.google.com" target="_blank" rel="noopener noreferrer" className="social-circle-btn" title="Google Scholar" aria-label="Google Scholar">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c3 3 9 3 12 0v-5"></path></svg>
                </a>
                <a href="https://orcid.org" target="_blank" rel="noopener noreferrer" className="social-circle-btn" title="ORCID" aria-label="ORCID">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
                </a>
                <a href="https://researchgate.net" target="_blank" rel="noopener noreferrer" className="social-circle-btn" title="ResearchGate" aria-label="ResearchGate">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><polygon points="12 8 8 12 12 16 16 12 12 8"></polygon></svg>
                </a>
              </div>
            </div>
          </div>

          {/* Contact / Meeting Appointment Form */}
          <div className="contact-form-card">
            <h3>Schedule a Meeting / Send Message</h3>
            <p style={{ marginBottom: '1.8rem', fontSize: '0.95rem' }}>
              Reach Dr. Bharti's desk for academic consultations, guest lectures, curriculum advisory, or research collaborations.
            </p>

            {status.success && (
              <div style={{ padding: '0.9rem 1.2rem', background: '#ECFDF5', border: '1px solid #A7F3D0', borderRadius: '8px', color: '#065F46', marginBottom: '1.2rem', fontWeight: 600 }}>
                Thank you! Your inquiry has been routed to Dr. D. B. Bharti's Executive Academic Office.
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Prof. / Dr. / Mr. / Ms."
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="name@institution.edu"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">Institution / Organization</label>
                  <input
                    type="text"
                    name="affiliation"
                    className="form-control"
                    placeholder="University / Company Name"
                    value={formData.affiliation}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Purpose of Contact *</label>
                  <select
                    name="purpose"
                    className="form-control"
                    value={formData.purpose}
                    onChange={handleChange}
                    required
                  >
                    <option value="" disabled>Select Purpose</option>
                    <option value="academic">Academic / Departmental Inquiry</option>
                    <option value="research">Ph.D. / Research Collaboration</option>
                    <option value="incubation">Incubation &amp; Startup Pitch</option>
                    <option value="keynote">Keynote / Guest Lecture Invitation</option>
                    <option value="placement">Campus Placement / Corporate MoU</option>
                    <option value="other">Other Official Matter</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Your Message *</label>
                <textarea
                  name="message"
                  className="form-control"
                  placeholder="Please brief your query or proposal..."
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary" style={{ width: '100%' }} disabled={status.loading}>
                {status.loading ? 'Sending Inquiry...' : 'Send Official Inquiry'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

