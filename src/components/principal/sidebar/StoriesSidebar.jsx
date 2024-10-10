import React, { useState } from 'react';
import '../../../assets/css/app.css';
import '../../../assets/css/core.css'; 

const StoriesSidebar = () => {
    const [isModalOpen, setModalOpen] = useState(false);
    const [storyType, setStoryType] = useState('image');
    const [storyFile, setStoryFile] = useState(null);
    const [storyText, setStoryText] = useState('');

    const openModal = () => setModalOpen(true);
    const closeModal = () => {
        setModalOpen(false);
        setStoryType('image');
        setStoryFile(null);
        setStoryText('');
    };

    const handleFileChange = (e) => setStoryFile(e.target.files[0]);
    const handleStoryTypeChange = (e) => setStoryType(e.target.value);

    const handlePostStory = async (e) => {
        e.preventDefault();
        if (storyType === 'text' && storyText.trim() === "") {
            alert("Le texte ne peut pas être vide.");
            return;
        }
    
        const formData = new FormData();
        formData.append('type', storyType);
        if (storyFile) {
            formData.append('file', storyFile);
        }
        if (storyType === 'text') {
            formData.append('text', storyText);
        }
    
        try {
            const response = await fetch('/api/stories', {
                method: 'POST',
                body: formData,
            });
    
            if (response.ok) {
                alert('Story ajouté !');
                closeModal();
            } else {
                alert('Erreur lors de l\'ajout de la story');
            }
        } catch (error) {
            console.error('Erreur:', error);
            alert('Erreur de connexion au serveur');
        }
    };    

    return (
        <div className="column is-3">
            <div className="card">
                <div className="card-heading is-bordered">
                    <h4>Stories</h4>
                    <div className="dropdown is-spaced is-neutral is-right dropdown-trigger">
                        <div className="button"><i data-feather="more-vertical"></i></div>
                        <div className="dropdown-menu" role="menu">
                            <div className="dropdown-content">
                                <a href="#" className="dropdown-item">
                                    <div className="media">
                                        <i data-feather="tv"></i>
                                        <div className="media-content">
                                            <h3>Browse stories</h3>
                                            <small>View all recent stories.</small>
                                        </div>
                                    </div>
                                </a>
                                <a className="dropdown-item">
                                    <div className="media">
                                        <i data-feather="settings"></i>
                                        <div className="media-content">
                                            <h3>Settings</h3>
                                            <small>Access widget settings.</small>
                                        </div>
                                    </div>
                                </a>
                                <hr className="dropdown-divider" />
                                <a href="#" className="dropdown-item">
                                    <div className="media">
                                        <i data-feather="trash-2"></i>
                                        <div className="media-content">
                                            <h3>Remove</h3>
                                            <small>Remove this widget from your feed.</small>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card-body no-padding">
                    <div className="story-block">
                        <a id="add-story-button" href="#" className="add-story" onClick={openModal}>
                            <i data-feather="plus"></i>
                        </a>
                        <div className="story-meta">
                            <span>Add a new Story</span>
                            <span>Share an image, a video or some text</span>
                        </div>
                    </div>

                    <div className="story-block">
                        <div className="img-wrapper">
                            <img src="assets/img/avatars/dan.jpg" alt="Dan Walker" />
                        </div>
                        <div className="story-meta">
                            <span>Dan Walker</span>
                            <span>1 hour ago</span>
                        </div>
                    </div>

                    <div className="story-block">
                        <div className="img-wrapper">
                            <img src="assets/img/avatars/bobby.jpg" alt="Bobby Brown" />
                        </div>
                        <div className="story-meta">
                            <span>Bobby Brown</span>
                            <span>3 days ago</span>
                        </div>
                    </div>

                    <div className="story-block">
                        <div className="img-wrapper">
                            <img src="assets/img/avatars/elise.jpg" alt="Elise Walker" />
                        </div>
                        <div className="story-meta">
                            <span>Elise Walker</span>
                            <span>Last week</span>
                        </div>
                    </div>
                </div>
            </div>

            {isModalOpen && (
                <div className="modal is-active">
                    <div className="modal-background"></div>
                    <div className="modal-card">
                        <header className="modal-card-head">
                            <p className="modal-card-title">Ajouter un Story</p>
                            <button className="delete" aria-label="close" onClick={closeModal}></button>
                        </header>
                        <section className="modal-card-body">
                            <form id="storyForm">
                                <div className="field">
                                    <label className="label">Choisir le type de Story</label>
                                    <div className="control">
                                        <div className="select">
                                            <select id="storyType" value={storyType} onChange={handleStoryTypeChange}>
                                                <option value="image">Image</option>
                                                <option value="video">Vidéo</option>
                                                <option value="text">Texte</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>

                                {(storyType === 'image' || storyType === 'video') && (
                                    <div className="field">
                                        <label className="label">Ajouter un fichier (image/vidéo)</label>
                                        <div className="control">
                                            <input type="file" accept="image/*,video/*" onChange={handleFileChange} />
                                        </div>
                                    </div>
                                )}

                                {storyType === 'text' && (
                                    <div className="field">
                                        <label className="label">Ajouter un texte</label>
                                        <div className="control">
                                            <textarea
                                                className="textarea"
                                                value={storyText}
                                                onChange={(e) => setStoryText(e.target.value)}
                                                placeholder="Écrivez quelque chose..."
                                            ></textarea>
                                        </div>
                                    </div>
                                )}
                            </form>
                        </section>
                        <footer className="modal-card-foot">
                            <button className="button is-success" onClick={handlePostStory}>Poster le Story</button>
                            <button className="button" onClick={closeModal}>Annuler</button>
                        </footer>
                    </div>
                </div>
            )}
        </div>
    );
};

export default StoriesSidebar;


