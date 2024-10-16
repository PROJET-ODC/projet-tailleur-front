import React, { useEffect, useState } from 'react';

const CommentsSection = ({ showComments, postId, ajouterCommentaire, commentaires: initialCommentaires,updatedPost }) => {
  const [nouveauCommentaire, setNouveauCommentaire] = useState('');
  const [commentaires, setCommentaires] = useState(initialCommentaires || []); // État pour les commentaires

  useEffect(() => {
    setCommentaires(initialCommentaires); // Mettre à jour les commentaires initiaux
  }, [initialCommentaires]);


  useEffect(() => {
    if (updatedPost) {
      console.log("Détails du post :", updatedPost);
      // Vous pouvez également afficher ces informations dans l'interface utilisateur si nécessaire
    }
  }, [updatedPost]);

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!nouveauCommentaire.trim()) {
      return; // Ne rien faire si le commentaire est vide
    }
  
    try {
      const nouveauCommentaireAjoute = await ajouterCommentaire(postId, nouveauCommentaire);
      console.log("Commentaire ajouté :", nouveauCommentaireAjoute); // Vérifiez ici
  
      // Vérifiez la structure de l'objet
      console.log("Structure de nouveauCommentaireAjoute :", nouveauCommentaireAjoute);

      // Mettre à jour l'état des commentaires
      setCommentaires((prevCommentaires) => [
        ...prevCommentaires,
        {
          createdAt: nouveauCommentaireAjoute.comment.createdAt,
          content: nouveauCommentaireAjoute.comment.content,
          avatar: nouveauCommentaireAjoute.avatar || 'default-avatar.png',
          likes: 0,
        },
      ]);
    
      setNouveauCommentaire(''); // Réinitialiser le champ de commentaire
    } catch (error) {
      console.error("Erreur lors de l'ajout du commentaire :", error);
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
            <button type="submit" className="send-icon">
              <i data-feather="send"></i>
            </button>
          </form>

          <div className="comments-body">
            {commentaires.map((commentaire, index) => (
              <div key={index} className="media is-comment">
                <div className="media-left">
                  <div className="image">
                    <img src={commentaire.avatar} alt={commentaire.nom} /> {/* Assurez-vous que c'est correct */}
                  </div>
                </div>
                <div className="media-content">
                  <a href="#">{commentaire.nom}</a>
                  <span className="time">{ new Date(commentaire.createdAt).toLocaleString()}</span>
                  <p dangerouslySetInnerHTML={{ __html: commentaire.content }}></p>
                  <div className="controls">
                    <div className="like-count">
                      <i data-feather="thumbs-up"></i>
                      <span>{commentaire.likes}</span>
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
