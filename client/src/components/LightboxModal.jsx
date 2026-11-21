import React from 'react';

export default function LightboxModal({ activePhoto, onClose }) {
  if (!activePhoto) return null;

  return (
    <div className="modal-backdrop active" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h3 className="modal-title">{activePhoto.title}</h3>
          <button className="modal-close-btn" onClick={onClose} aria-label="Close Preview">&times;</button>
        </div>
        <div className="modal-body">
          <img src={activePhoto.imageUrl} alt={activePhoto.title} />
        </div>
        <div className="modal-footer">
          <p>
            <strong>{activePhoto.date}</strong> &bull; {activePhoto.awardingBody}
            <br />
            {activePhoto.description}
          </p>
        </div>
      </div>
    </div>
  );
}

