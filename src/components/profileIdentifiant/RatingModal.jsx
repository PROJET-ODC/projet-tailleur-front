import React from 'react';
import ReactDOM from 'react-dom';
import StarRating from './StarRating';

const modalStyles = {
    overlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.8)', // Arrière-plan noir opaque
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1000, // Assurez-vous que le modal est au-dessus des autres éléments
    },
    content: {
        backgroundColor: 'white',
        padding: '20px',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        maxWidth: '400px', // Largeur maximale du modal
        width: '100%', // S'assure que le modal s'adapte à la largeur de l'écran sur mobile
        position: 'relative', // Pour positionner le bouton de fermeture
    },
    title: {
        fontSize: '1.5rem',
        marginBottom: '20px',
        textAlign: 'center', // Centrer le titre
    },
    buttons: {
        display: 'flex',
        justifyContent: 'center', // Centre le bouton OK
        marginTop: '20px', // Ajoute un peu d'espace au-dessus
    },
    buttonOk: {
        backgroundColor: '#28a745', // Couleur du bouton OK
        color: 'white',
        padding: '10px 15px',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        fontSize: '1rem', // Taille de police
        transition: 'background-color 0.3s', // Transition pour l'effet au survol
    },
    buttonOkHover: {
        backgroundColor: '#218838', // Couleur au survol
    },
    closeIcon: {
        position: 'absolute',
        top: '10px',
        right: '10px',
        cursor: 'pointer',
        fontSize: '1.5rem',
        color: '#aaa',
    },
};

const RatingModal = ({ isOpen, onClose, onRatingChange, profileId }) => {
    if (!isOpen) return null;
    console.log(profileId);
    

    return ReactDOM.createPortal(
        <div style={modalStyles.overlay}>
            <div style={modalStyles.content}>
                <span style={modalStyles.closeIcon} onClick={onClose}>&times;</span>
                <h2 style={modalStyles.title}>Ajouter une note</h2>
                <StarRating onRatingChange={onRatingChange} />
                <div style={modalStyles.buttons}>
                    <button onClick={onRatingChange} style={modalStyles.buttonOk}>Valider</button>
                </div>
            </div>
        </div>,
        document.body
    );
};

export default RatingModal;
