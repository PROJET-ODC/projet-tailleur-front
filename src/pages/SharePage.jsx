import { useState } from "react";

function Modal({ isOpen, closeModal, post, comment, setComment }) {
    const [isPublishEnabled, setIsPublishEnabled] = useState(false);

    if (!isOpen) return null;

    const handleCommentChange = (e) => {
        const value = e.target.value;
        setComment(value);
        setIsPublishEnabled(value.trim().length > 0);
    };

    return (
        <div className="modal-overlay">
            <div className="modal-content bg-white">
                <div className="modal-background bg-white"></div>
                <div className="card">
                    <div className="card-heading">
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
                                className={`button is-solid primary-button ${!isPublishEnabled ? "is-disabled" : ""}`}
                                disabled={!isPublishEnabled}
                                onClick={() => {
                                    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(comment)}`;
                                    window.open(whatsappUrl, '_blank');
                                }}
                            >
                                Publish
                            </button>
                        </div>
                    </div>
                </div>

                <button className="close-button" onClick={closeModal}>
                    ×
                </button>
            </div>
        </div>
    );
}

export default Modal;
