import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Utilisé pour la navigation
import '../../../assets/css/app.css';
import '../../../assets/css/core.css';
import '../../../assets/img/favicon.png';
import '../../../assets/fonts.googleapis.com/csse409.css?family=Montserrat:600,700,800,900';
import('https://cdn.jsdelivr.net/npm/fontisto@3.0.4/css/fontisto/fontisto-brands.min.css')
    .then(() => {
        console.log('Fontisto CSS loaded');
    })
    .catch(err => {
        console.error('Failed to load Fontisto CSS:', err);
    });



const SidebarLeft = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [storyType, setStoryType] = useState('image');
    const [storyFile, setStoryFile] = useState(null);
    const [storyText, setStoryText] = useState('');

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => {
        setIsModalOpen(false);
        setStoryType('image');
        setStoryFile(null);
        setStoryText('');
    };

    const handleFileChange = (e) => setStoryFile(e.target.files[0]);
    const handleStoryTypeChange = (e) => setStoryType(e.target.value);

    const handlePostStory = (e) => {
        e.preventDefault();
        // Logique pour ajouter l'histoire (à adapter selon tes besoins)
        console.log('Story added:', { storyType, storyFile, storyText });
        closeModal(); // Ferme le modal après l'ajout
    };

    return (
        <div>
            <div class="navbar-v2">
               
            </div>

            <div class="view-wrapper">
                <div id="main-feed" class="navbar-v2-wrapper">
                    <div class="container">
                        <div id="activity-feed" class="view-wrap true-dom">
                            <div class="columns">
                                <div class="column is-3 is-hidden-mobile">
                                    <div class="feed-menu-v1">
                                        <ul class="main-menu">
                                            <li>
                                                <Link to="/articles">
                                                    <i data-feather="list"></i>
                                                    <span>Articles</span>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/approvisionnements">
                                                    <i data-feather="shopping-cart"></i>
                                                    <span>Approvisionnements</span>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/mes-commandes">
                                                    <i data-feather="box"></i>
                                                    <span>Mes Commandes</span>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/ajouter-article">
                                                    <i data-feather="plus-circle"></i>
                                                    <span>Ajouter Article</span>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="column is-6">
                                </div>
                                <div className="column is-3">
                                    <div className="card">
                                        <div className="card-heading is-bordered">
                                            <h4>Stories</h4>
                                            <div className="dropdown is-spaced is-neutral is-right dropdown-trigger">
                                                <div>
                                                    <div className="button">
                                                        <i data-feather="more-vertical"></i>
                                                    </div>
                                                </div>
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
                                                                    <small>Removes this widget from your feed.</small>
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
                                            <div class="story-block">
                                                <div class="img-wrapper">
                                                    <img src="../via.placeholder.com/300x300.png"
                                                        data-demo-src="assets/img/avatars/dan.jpg" data-user-popover="1"
                                                        alt="" />
                                                </div>
                                                <div class="story-meta">
                                                    <span>Dan Walker</span>
                                                    <span>1 hour ago</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Modal pour ajouter une histoire */}
                                    {isModalOpen && (
                                        <div className="modal is-active">
                                            <div className="modal-background" onClick={closeModal}></div>
                                            <div className="modal-card">
                                                <header className="modal-card-head">
                                                    <p className="modal-card-title">Ajouter une histoire</p>
                                                    <button className="delete" aria-label="close" onClick={closeModal}></button>
                                                </header>
                                                <section className="modal-card-body">
                                                    <form onSubmit={handlePostStory}>
                                                        <div className="field">
                                                            <label className="label">Choisir le type de Story</label>
                                                            <div className="control">
                                                                <div className="select">
                                                                    <select value={storyType} onChange={handleStoryTypeChange}>
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
                                                                        placeholder="Écrivez votre histoire ici..."
                                                                        value={storyText}
                                                                        onChange={(e) => setStoryText(e.target.value)}
                                                                    ></textarea>
                                                                </div>
                                                            </div>
                                                        )}
                                                    </form>
                                                </section>
                                                <footer className="modal-card-foot">
                                                    <button className="button is-success" onClick={handlePostStory}>Ajouter</button>
                                                    <button className="button" onClick={closeModal}>Annuler</button>
                                                </footer>
                                            </div>
                                        </div>
                                    )}
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SidebarLeft;
