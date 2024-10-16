import React, { useState } from "react";

function Modal({ isOpen, closeModal, children }) {
  const [isPublishEnabled, setIsPublishEnabled] = useState(false);
  const [comment, setComment] = useState("");

  if (!isOpen) return null; // Ne pas afficher le modal s'il n'est pas ouvert

  const handleCommentChange = (e) => {
    const value = e.target.value;
    setComment(value);
    setIsPublishEnabled(value.trim().length > 0); // Active le bouton si le commentaire n'est pas vide
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content bg-white"> {/* Fond blanc */}
        <div className="modal-background bg-white" ></div>
        <div className="card">
          {/* Contenu du modal */}
          <div className="card-heading">
            {/* Titre et menu */}
            <div className="dropdown is-primary share-dropdown">
              <div>
                <div className="button">
                  <i className="mdi mdi-format-float-left"></i>
                  <span>Share in your feed</span>
                  <i data-feather="chevron-down"></i>
                </div>
              </div>
            </div>
            <div className="close-wrap">
              <span className="close-modal" onClick={closeModal}>
                <i data-feather="x"></i>
              </span>
            </div>
          </div>

          <div className="card-body">
            <div className="control">
              <textarea
                className="textarea comment-textarea"
                rows="1"
                placeholder="Say something about this ..."
                value={comment}
                onChange={handleCommentChange}
              />
            </div>
          </div>

          <div className="card-footer">
            <div className="button-wrap">
              <button
                type="button"
                className="button is-solid dark-grey-button close-modal"
                onClick={closeModal}
              >
                Cancel
              </button>
              <button
                type="button"
                className={`button is-solid primary-button ${
                  !isPublishEnabled ? "is-disabled" : ""
                }`}
                disabled={!isPublishEnabled}
                onClick={() => alert("Published!")}
              >
                Publish
              </button>
            </div>
          </div>
        </div>

        <button className="close-button" onClick={closeModal}>
          ×
        </button>
        {children}
      </div>
    </div>
  );
}

export default Modal;
