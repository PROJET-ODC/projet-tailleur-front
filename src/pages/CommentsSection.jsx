import React, { useEffect, useState } from 'react';

const StickerPicker = ({ onStickerSelect, position }) => {
  const stickers = [
    'https://media.giphy.com/media/3oEjI6SIIHBdRx3Xo0/giphy.gif', // Sticker 1
    'https://media.giphy.com/media/5xaOcL2H7jR1GVcD1Ma/giphy.gif', // Sticker 2
    'https://media.giphy.com/media/26AOTmWEA4j8hczfG/giphy.gif', // Sticker 3
  ];

  return (
    <div 
      className="sticker-picker" 
      style={{ 
        position: 'absolute', 
        top: position.top, 
        left: position.left, 
        border: '1px solid #ccc',
        backgroundColor: '#fff',
        zIndex: 1000,
        padding: '10px',
        borderRadius: '5px'
      }}
    >
      {stickers.map((sticker, index) => (
        <img 
          key={index} 
          src={sticker} 
          alt={`Sticker ${index + 1}`} 
          onClick={() => onStickerSelect(sticker)} 
          style={{ cursor: 'pointer', width: '50px', margin: '5px' }}
        />
      ))}
    </div>
  );
};

const CommentsSection = ({ showComments, setShowComments, commentaires, ajouterCommentaire }) => {
  const [nouveauCommentaire, setNouveauCommentaire] = useState('');
  const [showStickerPicker, setShowStickerPicker] = useState(false);
  const [pickerPosition, setPickerPosition] = useState({ top: 0, left: 0 });

  useEffect(() => {
    feather.replace();
  }, [showComments, commentaires]);

  const handleSubmit = (e) => {
    e.preventDefault();

    ajouterCommentaire({
      nom: 'Utilisateur',
      temps: 'Just now',
      texte: nouveauCommentaire,
      avatar: 'https://via.placeholder.com/300x300.png', // Utiliser une URL valide pour l'avatar
      likes: 0,
    });

    setNouveauCommentaire('');
  };

  const handleStickerSelect = (sticker) => {
    setNouveauCommentaire(nouveauCommentaire + `![Sticker](${sticker}) `);
    setShowStickerPicker(false);
  };

  const toggleStickerPicker = (e) => {
    e.preventDefault();
    setShowStickerPicker((prev) => !prev);
    console.log('Picker Position:', { top: rect.bottom + window.scrollY + 5, left: rect.left + window.scrollX });


    if (!showStickerPicker) {
      const rect = e.currentTarget.getBoundingClientRect();
      setPickerPosition({
        top: rect.bottom + window.scrollY + 5,
        left: rect.left + window.scrollX,
      });
    }
  };

  return (
    <>
      {showComments && (
        <div id="share-fab" className="comments-wrap" style={{ position: 'relative' }}>
          <div className="comments-heading">
            <h4>
              Commentaires <small>({commentaires.length})</small>
            </h4>
          </div>

          <form className='add-comment' onSubmit={handleSubmit} style={{ marginTop: '10px' }}>
            <input 
              type="text" 
              placeholder="Ajouter un commentaire..." 
              value={nouveauCommentaire}
              onChange={(e) => setNouveauCommentaire(e.target.value)}
            />
            <button type="button" className="send-icon" onClick={toggleStickerPicker} style={{ marginTop: '2px', marginLeft: '-40px' }}>
              <i data-feather="smile"></i>
            </button>
            <button type="submit" className="send-icon">
              <i data-feather="send"></i>
            </button>
          </form>

          {showStickerPicker && <StickerPicker onStickerSelect={handleStickerSelect} position={pickerPosition} />}

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
      )}
    </>
  );
};

export default CommentsSection;
