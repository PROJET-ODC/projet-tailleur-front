import React from 'react';

const PageCommentaires = ({ commentaires, onClose }) => {
  return (
    <div className="comments-page">
      <div className="comments-heading">
        <h4>Commentaires <small>({commentaires.length})</small></h4>
        <div className="close-comments" onClick={onClose}>
          <i data-feather="x"></i>
        </div>
      </div>
      <div className="comments-body">
        {commentaires.map((commentaire, index) => (
          <div key={index} className="media is-comment">
            <div className="media-left">
              <div className="image">
                <img src={commentaire.avatar} alt={commentaire.nom} />
              </div>
            </div>
            <div className="media-content">
              <a href="#">{commentaire.nom}</a>
              <span className="time">{commentaire.temps}</span>
              <p>{commentaire.texte}</p>
              <div className="controls">
                <div className="like-count">
                  <i data-feather="thumbs-up"></i>
                  <span>{commentaire.likes}</span>
                </div>
                <div className="reply">
                  <a href="#">Reply</a>
                </div>
                <div className="edit">
                  <a href="#">Edit</a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PageCommentaires;
