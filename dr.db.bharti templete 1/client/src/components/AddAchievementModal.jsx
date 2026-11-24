import React, { useState } from 'react';

export default function AddAchievementModal({ isOpen, onClose, onAchievementAdded }) {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('awards');
  const [date, setDate] = useState('');
  const [awardingBody, setAwardingBody] = useState('');
  const [description, setDescription] = useState('');
  const [badge, setBadge] = useState('Honor');
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState('');

  if (!isOpen) return null;

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
      setPreviewUrl(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setMessage('');

    try {
      const formData = new FormData();
      formData.append('title', title);
      formData.append('category', category);
      formData.append('date', date);
      formData.append('awardingBody', awardingBody);
      formData.append('description', description);
      formData.append('badge', badge);
      if (selectedFile) {
        formData.append('imageFile', selectedFile);
      }

      const res = await fetch('/api/achievements', {
        method: 'POST',
        body: formData
      });

      if (res.ok) {
        const data = await res.json();
        setMessage('Achievement and picture added successfully!');
        if (onAchievementAdded) onAchievementAdded(data.achievement);
        setTimeout(() => {
          onClose();
        }, 1200);
      } else {
        setMessage('Saved locally in current session.');
        const localItem = {
          id: 'ach-' + Date.now(),
          title,
          category,
          date,
          awardingBody,
          description,
          badge,
          imageUrl: previewUrl || '/images/achievement-award.svg'
        };
        if (onAchievementAdded) onAchievementAdded(localItem);
        setTimeout(() => onClose(), 1200);
      }
    } catch (err) {
      console.warn('API error, saving in local state:', err);
      const localItem = {
        id: 'ach-' + Date.now(),
        title,
        category,
        date,
        awardingBody,
        description,
        badge,
        imageUrl: previewUrl || '/images/achievement-award.svg'
      };
      if (onAchievementAdded) onAchievementAdded(localItem);
      setTimeout(() => onClose(), 1200);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="modal-backdrop active" onClick={onClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '640px' }}>
        <div className="modal-header">
          <h3 className="modal-title">Add New Achievement &amp; Picture</h3>
          <button className="modal-close-btn" onClick={onClose}>&times;</button>
        </div>

        <div className="modal-form-body">
          {message && (
            <div style={{ padding: '0.75rem 1rem', background: '#ECFDF5', border: '1px solid #A7F3D0', borderRadius: '8px', color: '#065F46', marginBottom: '1.2rem', fontWeight: 600 }}>
              {message}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="form-label">Achievement Title *</label>
              <input
                type="text"
                className="form-control"
                placeholder="e.g. Best Academic Administrator Award"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label className="form-label">Category *</label>
                <select className="form-control" value={category} onChange={(e) => setCategory(e.target.value)}>
                  <option value="awards">Awards &amp; Honors</option>
                  <option value="keynotes">Keynotes &amp; Conferences</option>
                  <option value="convocations">Convocations</option>
                  <option value="incubation">Incubation &amp; MoUs</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">Date / Year *</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="e.g. Annual Conclave • 2026"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label className="form-label">Awarding Body / Organization</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="e.g. Higher Education Council"
                  value={awardingBody}
                  onChange={(e) => setAwardingBody(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label className="form-label">Badge Label</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="e.g. Gold Medal / Keynote"
                  value={badge}
                  onChange={(e) => setBadge(e.target.value)}
                />
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">Achievement Photograph *</label>
              <label className="file-upload-box">
                <input
                  type="file"
                  className="file-upload-input"
                  accept="image/*"
                  onChange={handleFileChange}
                />
                {previewUrl ? (
                  <div>
                    <img src={previewUrl} alt="Preview" style={{ maxHeight: '140px', margin: '0 auto 0.5rem auto', borderRadius: '8px' }} />
                    <div style={{ color: 'var(--brand-azure)', fontWeight: 600, fontSize: '0.9rem' }}>Click to change photo</div>
                  </div>
                ) : (
                  <div>
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" style={{ color: 'var(--brand-azure)', margin: '0 auto 0.5rem auto', display: 'block' }}>
                      <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                      <circle cx="8.5" cy="8.5" r="1.5"></circle>
                      <polyline points="21 15 16 10 5 21"></polyline>
                    </svg>
                    <div style={{ fontWeight: 700, color: 'var(--text-heading)' }}>Upload Achievement Picture</div>
                    <div style={{ fontSize: '0.82rem', color: 'var(--text-subtle)' }}>PNG, JPG, WebP up to 10MB</div>
                  </div>
                )}
              </label>
            </div>

            <div className="form-group">
              <label className="form-label">Detailed Description *</label>
              <textarea
                className="form-control"
                placeholder="Describe the milestone, significance, and institutional impact..."
                rows="3"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary" style={{ width: '100%' }} disabled={submitting}>
              {submitting ? 'Uploading & Saving...' : 'Save Achievement & Picture'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

