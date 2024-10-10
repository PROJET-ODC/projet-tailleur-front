import React, { useState } from 'react';
import CommentsSection from './CommentsSection'; // Importez le composant

function PostPage() {
    const [showComments, setShowComments] = useState(false);
    

  // Liste des commentaires
  const commentaires = [
    {
      nom: 'Dan Walker',
      temps: '28 minutes ago',
      texte: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempo incididunt ut labore et dolore magna aliqua.',
      avatar: '../via.placeholder.com/300x300.png',
      likes: 4,
    },
    {
      nom: 'David Kim',
      temps: '15 minutes ago',
      texte: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempo incididunt ut labore et dolore magna aliqua.',
      avatar: '../via.placeholder.com/300x300.png',
      likes: 0,
    },
    {
        nom: 'David Kim',
        temps: '15 minutes ago',
        texte: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempo incididunt ut labore et dolore magna aliqua.',
        avatar: '../via.placeholder.com/300x300.png',
        likes: 0,
      },

  ];
   // État pour gérer les commentaires affichés pour chaque publication
   const [commentsVisible, setCommentsVisible] = useState({});

   // Fonction pour basculer l'affichage des commentaires pour une publication spécifique
   const toggleComments = (postId) => {
     setCommentsVisible((prevState) => ({
       ...prevState,
       [postId]: !prevState[postId], // Basculer l'affichage pour ce post spécifique
     }));
   };

    return (
      
<div class="column is-6">
   
    <div id="compose-card" class="card is-new-content">
      
    </div>

  
    <div id="feed-post-1" class="card is-post">
        <div class="content-wrap">
            <div class="card-heading">
                <div class="user-block">
                    <div class="image">
                        <img src="../via.placeholder.com/300x300.png" data-demo-src="../src/assets/img/avatars/dan.jpg" data-user-popover="1" alt="" />
                    </div>
                    <div class="user-info">
                        <a href="#">Dan Walker</a>
                        <span class="time">July 26 2018, 01:03pm</span>
                    </div>
                </div>
               
                <div class="dropdown is-spaced is-right is-neutral dropdown-trigger">
                    <div>
                        <div class="button">
                            <i data-feather="more-vertical"></i>
                        </div>
                    </div>
                    <div class="dropdown-menu" role="menu">
                        <div class="dropdown-content">
                            <a href="#" class="dropdown-item">
                                <div class="media">
                                    <i data-feather="bookmark"></i>
                                    <div class="media-content">
                                        <h3>Bookmark</h3>
                                        <small>Add this post to your bookmarks.</small>
                                    </div>
                                </div>
                            </a>
                            <a class="dropdown-item">
                                <div class="media">
                                    <i data-feather="bell"></i>
                                    <div class="media-content">
                                        <h3>Notify me</h3>
                                        <small>Send me the updates.</small>
                                    </div>
                                </div>
                            </a>
                            <hr class="dropdown-divider" />
                            <a href="#" class="dropdown-item">
                                <div class="media">
                                    <i data-feather="flag"></i>
                                    <div class="media-content">
                                        <h3>Flag</h3>
                                        <small>In case of inappropriate content.</small>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div class="card-body">
                <div class="post-text">
                    <p>
                        Yesterday with <a href="#">@Karen Miller</a> and
                        <a href="#">@Marvin Stemperd</a> at the
                        <a href="#">#Rock'n'Rolla</a> concert in LA. Was totally fantastic!
                        People were really excited about this one!
                    </p>
                </div>
                <div class="post-image">
                    <a data-fancybox="post1" data-lightbox-type="comments" data-thumb="../src/assets/img/demo/unsplash/1.jpg" href="../via.placeholder.com/1600x900.png" data-demo-href="../src/assets/img/demo/unsplash/1.jpg">
                        <img src="../src/assets/img/demo/unsplash/1.jpg" alt="kk" />
                    </a>
                    
                    <div class="like-wrapper">
                        <a href="javascript:void(0);" class="like-button">
                            <i class="mdi mdi-heart not-liked bouncy"></i>
                            <i class="mdi mdi-heart is-liked bouncy"></i>
                            <span class="like-overlay"></span>
                        </a>
                    </div>

                    <div class="fab-wrapper is-share">
                        <a href="javascript:void(0);" class="small-fab share-fab modal-trigger" data-modal="share-modal">
                            <i data-feather="link-2"></i>
                        </a>
                    </div>

                    {/* Bouton pour afficher ou masquer les commentaires */}
            <div className="fab-wrapper is-comment">
                <a href="javascript:void(0);" className="small-fab" onClick={() => setShowComments(!showComments)}>
                <i data-feather="message-circle"></i>
                </a>
            </div>

          {/* Section des commentaires */}
          <CommentsSection
        showComments={showComments}
        setShowComments={setShowComments}
        commentaires={commentaires}
      />

                </div>
            </div>
        
            <div class="card-footer">
               
                <div class="likers-text">
                <div class="right">
                        <a class="btn button is-solid accent-button raised">
                        <h3 class="p">  </h3> 
                        <i class=" foot mdi mdi-cart-plus"></i>
                                                </a>
                </div>
                   
                </div>
                <div class="social-count">
                    <div class="likes-count">
                        <i data-feather="heart"></i>
                        <span>27</span>
                    </div>
                    <div class="shares-count">
                        <i data-feather="link-2"></i>
                        <span>9</span>
                    </div>
                    <div class="comments-count">
                        <i data-feather="message-circle"></i>
                        <span>3</span>
                    </div>
                </div>
            </div>
        </div>

        <div class="comments-wrap is-hidden">
           <div class="comments-heading">
                <h4>Comments <small>(8)</small></h4>
                <div class="close-comments">
                    <i data-feather="x"></i>
                </div>
            </div>
           =
            <div class="comments-body has-slimscroll">
                <div class="media is-comment">
                    <div class="media-left">
                        <div class="image">
                            <img src="../via.placeholder.com/300x300.png" data-demo-src="../src/assets/img/avatars/dan.jpg" data-user-popover="1" alt="" />
                        </div>
                    </div>
                    <div class="media-content">
                        <a href="#">Dan Walker</a>
                        <span class="time">28 minutes ago</span>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                            eiusmod tempo incididunt ut labore et dolore magna aliqua. Ut enim
                            ad minim veniam, quis nostrud exercitation ullamco laboris
                            consequat.
                        </p>
                        <div class="controls">
                            <div class="like-count">
                                <i data-feather="thumbs-up"></i>
                                <span>4</span>
                            </div>
                            <div class="reply">
                                <a href="#">Reply</a>
                            </div>
                            <div class="edit">
                                <a href="#">Edit</a>
                            </div>
                        </div>


                        <div class="media is-comment">
                            <div class="media-left">
                                <div class="image">
                                    <img src="../via.placeholder.com/300x300.png" data-demo-src="../src/assets/img/avatars/david.jpg" data-user-popover="4" alt="" />
                                </div>
                            </div>
                            <div class="media-content">
                                <a href="#">David Kim</a>
                                <span class="time">15 minutes ago</span>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                                    eiusmod tempo incididunt ut labore et dolore magna aliqua.
                                </p>
                                <div class="controls">
                                    <div class="like-count">
                                        <i data-feather="thumbs-up"></i>
                                        <span>0</span>
                                    </div>
                                    <div class="reply">
                                        <a href="#">Reply</a>
                                    </div>
                                </div>
                            </div>
                            <div class="media-right">
                                <div class="dropdown is-spaced is-right is-neutral dropdown-trigger">
                                    <div>
                                        <div class="button">
                                            <i data-feather="more-vertical"></i>
                                        </div>
                                    </div>
                                    <div class="dropdown-menu" role="menu">
                                        <div class="dropdown-content">
                                            <a class="dropdown-item">
                                                <div class="media">
                                                    <i data-feather="x"></i>
                                                    <div class="media-content">
                                                        <h3>Hide</h3>
                                                        <small>Hide this comment.</small>
                                                    </div>
                                                </div>
                                            </a>
                                            <div class="dropdown-divider"></div>
                                            <a href="#" class="dropdown-item">
                                                <div class="media">
                                                    <i data-feather="flag"></i>
                                                    <div class="media-content">
                                                        <h3>Report</h3>
                                                        <small>Report this comment.</small>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div class="media-right">
                        <div class="dropdown is-spaced is-right is-neutral dropdown-trigger">
                            <div>
                                <div class="button">
                                    <i data-feather="more-vertical"></i>
                                </div>
                            </div>
                            <div class="dropdown-menu" role="menu">
                                <div class="dropdown-content">
                                    <a class="dropdown-item">
                                        <div class="media">
                                            <i data-feather="x"></i>
                                            <div class="media-content">
                                                <h3>Hide</h3>
                                                <small>Hide this comment.</small>
                                            </div>
                                        </div>
                                    </a>
                                    <div class="dropdown-divider"></div>
                                    <a href="#" class="dropdown-item">
                                        <div class="media">
                                            <i data-feather="flag"></i>
                                            <div class="media-content">
                                                <h3>Report</h3>
                                                <small>Report this comment.</small>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
               

               
                <div class="media is-comment">
                    <div class="media-left">
                        <div class="image">
                            <img src="../via.placeholder.com/300x300.png" data-demo-src="../src/assets/img/avatars/rolf.jpg" data-user-popover="13" alt="" />
                        </div>
                    </div>
                    <div class="media-content">
                        <a href="#">Rolf Krupp</a>
                        <span class="time">9 hours ago</span>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                            eiusmod tempo incididunt ut labore et dolore magna aliqua.
                            Exercitation ullamco laboris consequat.
                        </p>
                        <div class="controls">
                            <div class="like-count">
                                <i data-feather="thumbs-up"></i>
                                <span>2</span>
                            </div>
                            <div class="reply">
                                <a href="#">Reply</a>
                            </div>
                        </div>

                        <div class="media is-comment">
                            <div class="media-left">
                                <div class="image">
                                    <img src="../via.placeholder.com/300x300.png" data-demo-src="../src/assets/img/avatars/elise.jpg" data-user-popover="6" alt="" />
                                </div>
                            </div>
                            <div class="media-content">
                                <a href="#">Elise Walker</a>
                                <span class="time">8 hours ago</span>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                                    eiusmod tempo incididunt ut labore et dolore magna aliqua.
                                </p>
                                <div class="controls">
                                    <div class="like-count">
                                        <i data-feather="thumbs-up"></i>
                                        <span>0</span>
                                    </div>
                                    <div class="reply">
                                        <a href="#">Reply</a>
                                    </div>
                                </div>
                            </div>
                            <div class="media-right">
                                <div class="dropdown is-spaced is-right is-neutral dropdown-trigger">
                                    <div>
                                        <div class="button">
                                            <i data-feather="more-vertical"></i>
                                        </div>
                                    </div>
                                    <div class="dropdown-menu" role="menu">
                                        <div class="dropdown-content">
                                            <a class="dropdown-item">
                                                <div class="media">
                                                    <i data-feather="x"></i>
                                                    <div class="media-content">
                                                        <h3>Hide</h3>
                                                        <small>Hide this comment.</small>
                                                    </div>
                                                </div>
                                            </a>
                                            <div class="dropdown-divider"></div>
                                            <a href="#" class="dropdown-item">
                                                <div class="media">
                                                    <i data-feather="flag"></i>
                                                    <div class="media-content">
                                                        <h3>Report</h3>
                                                        <small>Report this comment.</small>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>



                        <div class="media is-comment">
                            <div class="media-left">
                                <div class="image">
                                    <img src="../via.placeholder.com/300x300.png" data-demo-src="../src/assets/img/avatars/rolf.jpg" data-user-popover="13" alt="" />
                                </div>
                            </div>
                            <div class="media-content">
                                <a href="#">Rolf Krupp</a>
                                <span class="time">7 hours ago</span>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                                    eiusmod tempo incididunt ut labore et dolore magna aliqua.
                                </p>
                                <div class="controls">
                                    <div class="like-count">
                                        <i data-feather="thumbs-up"></i>
                                        <span>1</span>
                                    </div>
                                    <div class="reply">
                                        <a href="#">Reply</a>
                                    </div>
                                </div>
                            </div>
                            <div class="media-right">
                                <div class="dropdown is-spaced is-right is-neutral dropdown-trigger">
                                    <div>
                                        <div class="button">
                                            <i data-feather="more-vertical"></i>
                                        </div>
                                    </div>
                                    <div class="dropdown-menu" role="menu">
                                        <div class="dropdown-content">
                                            <a class="dropdown-item">
                                                <div class="media">
                                                    <i data-feather="x"></i>
                                                    <div class="media-content">
                                                        <h3>Hide</h3>
                                                        <small>Hide this comment.</small>
                                                    </div>
                                                </div>
                                            </a>
                                            <div class="dropdown-divider"></div>
                                            <a href="#" class="dropdown-item">
                                                <div class="media">
                                                    <i data-feather="flag"></i>
                                                    <div class="media-content">
                                                        <h3>Report</h3>
                                                        <small>Report this comment.</small>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>



                        <div class="media is-comment">
                            <div class="media-left">
                                <div class="image">
                                    <img src="../via.placeholder.com/300x300.png" data-demo-src="../src/assets/img/avatars/elise.jpg" data-user-popover="6" alt="" />
                                </div>
                            </div>
                            <div class="media-content">
                                <a href="#">Elise Walker</a>
                                <span class="time">6 hours ago</span>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                                    eiusmod tempo incididunt ut labore et dolore magna aliqua.
                                </p>
                                <div class="controls">
                                    <div class="like-count">
                                        <i data-feather="thumbs-up"></i>
                                        <span>0</span>
                                    </div>
                                    <div class="reply">
                                        <a href="#">Reply</a>
                                    </div>
                                </div>
                            </div>
                            <div class="media-right">
                                <div class="dropdown is-spaced is-right is-neutral dropdown-trigger">
                                    <div>
                                        <div class="button">
                                            <i data-feather="more-vertical"></i>
                                        </div>
                                    </div>
                                    <div class="dropdown-menu" role="menu">
                                        <div class="dropdown-content">
                                            <a class="dropdown-item">
                                                <div class="media">
                                                    <i data-feather="x"></i>
                                                    <div class="media-content">
                                                        <h3>Hide</h3>
                                                        <small>Hide this comment.</small>
                                                    </div>
                                                </div>
                                            </a>
                                            <div class="dropdown-divider"></div>
                                            <a href="#" class="dropdown-item">
                                                <div class="media">
                                                    <i data-feather="flag"></i>
                                                    <div class="media-content">
                                                        <h3>Report</h3>
                                                        <small>Report this comment.</small>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div class="media-right">
                        <div class="dropdown is-spaced is-right is-neutral dropdown-trigger">
                            <div>
                                <div class="button">
                                    <i data-feather="more-vertical"></i>
                                </div>
                            </div>
                            <div class="dropdown-menu" role="menu">
                                <div class="dropdown-content">
                                    <a class="dropdown-item">
                                        <div class="media">
                                            <i data-feather="x"></i>
                                            <div class="media-content">
                                                <h3>Hide</h3>
                                                <small>Hide this comment.</small>
                                            </div>
                                        </div>
                                    </a>
                                    <div class="dropdown-divider"></div>
                                    <a href="#" class="dropdown-item">
                                        <div class="media">
                                            <i data-feather="flag"></i>
                                            <div class="media-content">
                                                <h3>Report</h3>
                                                <small>Report this comment.</small>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
               

               
                <div class="media is-comment">
                    <div class="media-left">
                        <div class="image">
                            <img src="../via.placeholder.com/300x300.png" data-demo-src="../src/assets/img/avatars/stella.jpg" data-user-popover="10" alt="" />
                        </div>
                    </div>
                    <div class="media-content">
                        <a href="#">Lana Henrikssen</a>
                        <span class="time">10 hours ago</span>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                            eiusmod tempo incididunt ut labore et dolore magna aliqua.
                        </p>
                        <div class="controls">
                            <div class="like-count">
                                <i data-feather="thumbs-up"></i>
                                <span>5</span>
                            </div>
                            <div class="reply">
                                <a href="#">Reply</a>
                            </div>
                        </div>
                    </div>
                    <div class="media-right">
                        <div class="dropdown is-spaced is-right is-neutral dropdown-trigger">
                            <div>
                                <div class="button">
                                    <i data-feather="more-vertical"></i>
                                </div>
                            </div>
                            <div class="dropdown-menu" role="menu">
                                <div class="dropdown-content">
                                    <a class="dropdown-item">
                                        <div class="media">
                                            <i data-feather="x"></i>
                                            <div class="media-content">
                                                <h3>Hide</h3>
                                                <small>Hide this comment.</small>
                                            </div>
                                        </div>
                                    </a>
                                    <div class="dropdown-divider"></div>
                                    <a href="#" class="dropdown-item">
                                        <div class="media">
                                            <i data-feather="flag"></i>
                                            <div class="media-content">
                                                <h3>Report</h3>
                                                <small>Report this comment.</small>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
               
            </div>
           
            <div class="card-footer">
                <div class="media post-comment has-emojis">
                    <div class="media-content">
                        <div class="field">
                            <p class="control">
                                <textarea class="textarea comment-textarea" rows="5" placeholder="Write a comment..."></textarea>
                            </p>
                        </div>
                        <div class="actions">
                            <div class="image is-32x32">
                                <img class="is-rounded" src="../via.placeholder.com/300x300.png" data-demo-src="../src/assets/img/avatars/jenna.png" data-user-popover="0" alt="" />
                            </div>
                            <div class="toolbar">
                                <div class="action is-auto">
                                    <i data-feather="at-sign"></i>
                                </div>
                                <div class="action is-emoji">
                                    <i data-feather="smile"></i>
                                </div>
                                <div class="action is-upload">
                                    <i data-feather="camera"></i>
                                    <input type="file" />
                                </div>
                                <a class="button is-solid primary-button raised">Post Comment</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
   
    <div class="card is-post">
        <div class="content-wrap">
            <div class="card-heading">
                <div class="user-block">
                    <div class="image">
                        <img src="../via.placeholder.com/300x300.png" data-demo-src="../src/assets/img/avatars/edward.jpg" data-user-popover="5" alt="" />
                    </div>
                    <div class="user-info">
                        <a href="#">Edward Mayers</a>
                        <span class="time">July 26 2018, 11:14am</span>
                    </div>
                </div>
             
                <div class="dropdown is-spaced is-right is-neutral dropdown-trigger">
                    <div>
                        <div class="button">
                            <i data-feather="more-vertical"></i>
                        </div>
                    </div>
                    <div class="dropdown-menu" role="menu">
                        <div class="dropdown-content">
                            <a href="#" class="dropdown-item">
                                <div class="media">
                                    <i data-feather="bookmark"></i>
                                    <div class="media-content">
                                        <h3>Bookmark</h3>
                                        <small>Add this post to your bookmarks.</small>
                                    </div>
                                </div>
                            </a>
                            <a class="dropdown-item">
                                <div class="media">
                                    <i data-feather="bell"></i>
                                    <div class="media-content">
                                        <h3>Notify me</h3>
                                        <small>Send me the updates.</small>
                                    </div>
                                </div>
                            </a>
                            <hr class="dropdown-divider" />
                            <a href="#" class="dropdown-item">
                                <div class="media">
                                    <i data-feather="flag"></i>
                                    <div class="media-content">
                                        <h3>Flag</h3>
                                        <small>In case of inappropriate content.</small>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div class="card-body">
                <div class="post-text">
                    <p>
                        You all know how i love bootstrap, but i didn't have time to dig
                        deeper into it. Therefore i found this very interesting video i wanted
                        to share with you all. <a href="#">#bootsrap #webdesign</a>
                    </p>

                    <p></p>
                </div>
                <div class="post-link is-video">
                    
                    <div class="link-image">
                        <img src="../via.placeholder.com/300x300.png" data-demo-src="../src/assets/img/demo/video/bootstrap.jpg" alt="" />
                        <div class="video-overlay"></div>
                        <a class="video-button" data-fancybox href="https://www.youtube.com/watch?v=N8GksI_-iIM">
                            <img src="../src/assets/img/icons/video/play.svg" alt="" />
                        </a>
                    </div>
                    <div class="link-content">
                        <h4>
                            <a href="#">What's new in Bootstrap 4 ?</a>
                        </h4>
                        <p>
                            Before I create the new Bootstrap 4 crash course I want to go over
                            some of the changes from Bootstrap 3.
                        </p>
                        <small>Youtube.com</small>
                    </div>
                    
                    <div class="like-wrapper">
                        <a href="javascript:void(0);" class="like-button">
                            <i class="mdi mdi-heart not-liked bouncy"></i>
                            <i class="mdi mdi-heart is-liked bouncy"></i>
                            <span class="like-overlay"></span>
                        </a>
                    </div>

                    <div class="fab-wrapper is-share">
                        <a href="javascript:void(0);" class="small-fab share-fab modal-trigger" data-modal="share-modal">
                            <i data-feather="link-2"></i>
                        </a>
                    </div>

                    <div className="fab-wrapper is-comment">
                <a href="javascript:void(0);" className="small-fab" >
                <i data-feather="message-circle"></i>
                </a>
            </div>
            
                </div>
         
                                    {/* Bouton pour afficher ou masquer les commentaires */}
           

            </div>
            
            <div class="card-footer">
             
                <div class="likers-text">
                <div class="right">
                        <a class="btn button is-solid accent-button raised">
                        <h3 class="p">  </h3> 
                        <i class=" foot mdi mdi-cart-plus"></i>

                         </a>
                </div>
                </div>
                <div class="social-count">
                    <div class="likes-count">
                        <i data-feather="heart"></i>
                        <span>2</span>
                    </div>
                    <div class="shares-count">
                        <i data-feather="link-2"></i>
                        <span>0</span>
                    </div>
                    <div class="comments-count">
                        <i data-feather="message-circle"></i>
                        <span>2</span>
                    </div>
                </div>
            </div>
        </div>

        <div class="comments-wrap is-hidden">
            <div class="comments-heading">
                <h4>Comments <small>(2)</small></h4>
                <div class="close-comments">
                    <i data-feather="x"></i>
                </div>
            </div>

            <div class="comments-body has-slimscroll">
               
                <div class="media is-comment">
                    <div class="media-left">
                        <div class="image">
                            <img src="../via.placeholder.com/300x300.png" data-demo-src="../src/assets/img/avatars/elise.jpg" data-user-popover="6" alt="" />
                        </div>
                    </div>
                    <div class="media-content">
                        <a href="#">Elise Walker</a>
                        <span class="time">2 days ago</span>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                            eiusmod tempo incididunt ut labore et dolore magna aliqua. Ut enim
                            ad minim veniam, quis nostrud exercitation ullamco laboris
                            consequat.
                        </p>
                        <div class="controls">
                            <div class="like-count">
                                <i data-feather="thumbs-up"></i>
                                <span>1</span>
                            </div>
                            <div class="reply">
                                <a href="#">Reply</a>
                            </div>
                        </div>


                        <div class="media is-comment">
                            <div class="media-left">
                                <div class="image">
                                    <img src="../via.placeholder.com/300x300.png" data-demo-src="../src/assets/img/avatars/daniel.jpg" data-user-popover="3" alt="" />
                                </div>
                            </div>
                          <div class="media-content">
                                <a href="#">Daniel Wellington</a>
                                <span class="time">2 days ago</span>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                                    eiusmod tempo incididunt ut labore et dolore magna aliqua.
                                </p>
                                <div class="controls">
                                    <div class="like-count">
                                        <i data-feather="thumbs-up"></i>
                                        <span>0</span>
                                    </div>
                                    <div class="reply">
                                        <a href="#">Reply</a>
                                    </div>
                                </div>
                            </div>
                            <div class="media-right">
                                <div class="dropdown is-spaced is-right is-neutral dropdown-trigger">
                                    <div>
                                        <div class="button">
                                            <i data-feather="more-vertical"></i>
                                        </div>
                                    </div>
                                    <div class="dropdown-menu" role="menu">
                                        <div class="dropdown-content">
                                            <a class="dropdown-item">
                                                <div class="media">
                                                    <i data-feather="x"></i>
                                                    <div class="media-content">
                                                        <h3>Hide</h3>
                                                        <small>Hide this comment.</small>
                                                    </div>
                                                </div>
                                            </a>
                                            <div class="dropdown-divider"></div>
                                            <a href="#" class="dropdown-item">
                                                <div class="media">
                                                    <i data-feather="flag"></i>
                                                    <div class="media-content">
                                                        <h3>Report</h3>
                                                        <small>Report this comment.</small>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div class="media-right">
                        <div class="dropdown is-spaced is-right is-neutral dropdown-trigger">
                            <div>
                                <div class="button">
                                    <i data-feather="more-vertical"></i>
                                </div>
                            </div>
                            <div class="dropdown-menu" role="menu">
                                <div class="dropdown-content">
                                    <a class="dropdown-item">
                                        <div class="media">
                                            <i data-feather="x"></i>
                                            <div class="media-content">
                                                <h3>Hide</h3>
                                                <small>Hide this comment.</small>
                                            </div>
                                        </div>
                                    </a>
                                    <div class="dropdown-divider"></div>
                                    <a href="#" class="dropdown-item">
                                        <div class="media">
                                            <i data-feather="flag"></i>
                                            <div class="media-content">
                                                <h3>Report</h3>
                                                <small>Report this comment.</small>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
               
            </div>

            <div class="card-footer">
                <div class="media post-comment has-emojis">
                    <div class="media-content">
                        <div class="field">
                            <p class="control">
                                <textarea class="textarea comment-textarea" rows="5" placeholder="Write a comment..."></textarea>
                            </p>
                        </div>
                        <div class="actions">
                            <div class="image is-32x32">
                                <img class="is-rounded" src="../via.placeholder.com/300x300.png" data-demo-src="../src/assets/img/avatars/jenna.png" data-user-popover="0" alt="" />
                            </div>
                            <div class="toolbar">
                                <div class="action is-auto">
                                    <i data-feather="at-sign"></i>
                                </div>
                                <div class="action is-emoji">
                                    <i data-feather="smile"></i>
                                </div>
                                <div class="action is-upload">
                                    <i data-feather="camera"></i>
                                    <input type="file" />
                                </div>
                                <a class="button is-solid primary-button raised">Post Comment</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
   
    <div class="card is-post">
        <div class="content-wrap">
            <div class="card-heading">
                <div class="user-block">
                    <div class="image">
                        <img src="../via.placeholder.com/300x300.png" data-demo-src="../src/assets/img/avatars/elise.jpg" data-user-popover="6" alt="" />
                    </div>
                    <div class="user-info">
                        <a href="#">Elise Walker</a>
                        <span class="time">July 19 2018, 19:42pm</span>
                    </div>
                </div>
                <div class="dropdown is-spaced is-right is-neutral dropdown-trigger">
                    <div>
                        <div class="button">
                            <i data-feather="more-vertical"></i>
                        </div>
                    </div>
                    <div class="dropdown-menu" role="menu">
                        <div class="dropdown-content">
                            <a href="#" class="dropdown-item">
                                <div class="media">
                                    <i data-feather="bookmark"></i>
                                    <div class="media-content">
                                        <h3>Bookmark</h3>
                                        <small>Add this post to your bookmarks.</small>
                                    </div>
                                </div>
                            </a>
                            <a class="dropdown-item">
                                <div class="media">
                                    <i data-feather="bell"></i>
                                    <div class="media-content">
                                        <h3>Notify me</h3>
                                        <small>Send me the updates.</small>
                                    </div>
                                </div>
                            </a>
                            <hr class="dropdown-divider" />
                            <a href="#" class="dropdown-item">
                                <div class="media">
                                    <i data-feather="flag"></i>
                                    <div class="media-content">
                                        <h3>Flag</h3>
                                        <small>In case of inappropriate content.</small>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div class="card-body">
                <div class="post-text">
                    <p>
                        Thanks a lot to <a href="#">@Gaelle</a> and <a href="#">@Rolf</a> for
                        this wonderful team lunch. The food was really tasty and we had some
                        great laughs. Thanks to all the team, you're all awesome !
                    </p>

                    <p></p>
                </div>
                <div class="post-image">
                    <a data-fancybox="post2" data-lightbox-type="comments" data-thumb="../src/assets/img/demo/unsplash/2.jpg" href="../via.placeholder.com/1600x900.png" data-demo-href="../src/assets/img/demo/unsplash/2.jpg">
                        <img src="../via.placeholder.com/1600x900.png" data-demo-src="../src/assets/img/demo/unsplash/2.jpg" alt="" />
                    </a>
                   
                    <div class="like-wrapper">
                        <a href="javascript:void(0);" class="like-button">
                            <i class="mdi mdi-heart not-liked bouncy"></i>
                            <i class="mdi mdi-heart is-liked bouncy"></i>
                            <span class="like-overlay"></span>
                        </a>
                    </div>

                    <div class="fab-wrapper is-share">
                        <a href="javascript:void(0);" class="small-fab share-fab modal-trigger" data-modal="share-modal">
                            <i data-feather="link-2"></i>
                        </a>
                    </div>

                    <div class="fab-wrapper is-comment">
                        <a href="javascript:void(0);" class="small-fab"  id="share">
                            <i data-feather="message-circle"></i>
                        </a>
                    </div>
                </div>
            </div>
         

            <div class="card-footer">
             
                <div class="likers-text">
                <div class="right">
                <a class="btn button is-solid accent-button raised">
                        <h3 class="p">  </h3> 
                        <i class=" foot mdi mdi-cart-plus"></i>
                         </a>
                </div>
                </div>
                <div class="social-count">
                    <div class="likes-count">
                        <i data-feather="heart"></i>
                        <span>3</span>
                    </div>
                    <div class="shares-count">
                        <i data-feather="link-2"></i>
                        <span>0</span>
                    </div>
                    <div class="comments-count">
                        <i data-feather="message-circle"></i>
                        <span>5</span>
                    </div>
                </div>
            </div>
        </div>

        <div class="comments-wrap is-hidden">
            <div class="comments-heading">
                <h4>Comments <small>(5)</small></h4>
                <div class="close-comments">
                    <i data-feather="x"></i>
                </div>
            </div>
            
            <div class="comments-body has-slimscroll">
               
                <div class="media is-comment">
                    <div class="media-left">
                        <div class="image">
                            <img src="../via.placeholder.com/300x300.png" data-demo-src="../src/assets/img/avatars/gaelle.jpg" data-user-popover="11" alt="" />
                        </div>
                    </div>
                    <div class="media-content">
                        <a href="#">Gaelle Morris</a>
                        <span class="time">2 days ago</span>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                            eiusmod tempo incididunt ut labore et dolore magna aliqua. Ut enim
                            ad minim veniam, quis nostrud exercitation ullamco laboris
                            consequat.
                        </p>
                        <div class="controls">
                            <div class="like-count">
                                <i data-feather="thumbs-up"></i>
                                <span>3</span>
                            </div>
                            <div class="reply">
                                <a href="#">Reply</a>
                            </div>
                        </div>


                        <div class="media is-comment">
                           <div class="media-left">
                                <div class="image">
                                    <img src="../via.placeholder.com/300x300.png" data-demo-src="../src/assets/img/avatars/elise.jpg" data-user-popover="6" alt="" />
                                </div>
                            </div>
                            <div class="media-content">
                                <a href="#">Elise Walker</a>
                                <span class="time">2 days ago</span>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                                    eiusmod tempo incididunt ut labore et dolore magna aliqua.
                                </p>
                                <div class="controls">
                                    <div class="like-count">
                                        <i data-feather="thumbs-up"></i>
                                        <span>1</span>
                                    </div>
                                    <div class="reply">
                                        <a href="#">Reply</a>
                                    </div>
                                </div>
                            </div>
                           <div class="media-right">
                                <div class="dropdown is-spaced is-right is-neutral dropdown-trigger">
                                    <div>
                                        <div class="button">
                                            <i data-feather="more-vertical"></i>
                                        </div>
                                    </div>
                                    <div class="dropdown-menu" role="menu">
                                        <div class="dropdown-content">
                                            <a class="dropdown-item">
                                                <div class="media">
                                                    <i data-feather="x"></i>
                                                    <div class="media-content">
                                                        <h3>Hide</h3>
                                                        <small>Hide this comment.</small>
                                                    </div>
                                                </div>
                                            </a>
                                            <div class="dropdown-divider"></div>
                                            <a href="#" class="dropdown-item">
                                                <div class="media">
                                                    <i data-feather="flag"></i>
                                                    <div class="media-content">
                                                        <h3>Report</h3>
                                                        <small>Report this comment.</small>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>



                        <div class="media is-comment">
                            <div class="media-left">
                                <div class="image">
                                    <img src="../via.placeholder.com/300x300.png" data-demo-src="../src/assets/img/avatars/rolf.jpg" data-user-popover="13" alt="" />
                                </div>
                            </div>
                            <div class="media-content">
                                <a href="#">Rolf Krupp</a>
                                <span class="time">2 days ago</span>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                                    eiusmod tempo incididunt.
                                </p>
                              <div class="controls">
                                    <div class="like-count">
                                        <i data-feather="thumbs-up"></i>
                                        <span>1</span>
                                    </div>
                                    <div class="reply">
                                        <a href="#">Reply</a>
                                    </div>
                                </div>
                            </div>
                            <div class="media-right">
                                <div class="dropdown is-spaced is-right is-neutral dropdown-trigger">
                                    <div>
                                        <div class="button">
                                            <i data-feather="more-vertical"></i>
                                        </div>
                                    </div>
                                    <div class="dropdown-menu" role="menu">
                                        <div class="dropdown-content">
                                            <a class="dropdown-item">
                                                <div class="media">
                                                    <i data-feather="x"></i>
                                                    <div class="media-content">
                                                        <h3>Hide</h3>
                                                        <small>Hide this comment.</small>
                                                    </div>
                                                </div>
                                            </a>
                                            <div class="dropdown-divider"></div>
                                            <a href="#" class="dropdown-item">
                                                <div class="media">
                                                    <i data-feather="flag"></i>
                                                    <div class="media-content">
                                                        <h3>Report</h3>
                                                        <small>Report this comment.</small>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>



                        <div class="media is-comment">
                            <div class="media-left">
                                <div class="image">
                                    <img src="../via.placeholder.com/300x300.png" data-demo-src="../src/assets/img/avatars/elise.jpg" data-user-popover="6" alt="" />
                                </div>
                            </div>
                            <div class="media-content">
                                <a href="#">Elise Walker</a>
                                <span class="time">2 days ago</span>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                                    eiusmod tempo incididunt ut labore et dolore magna aliqua.
                                </p>
                                <div class="controls">
                                    <div class="like-count">
                                        <i data-feather="thumbs-up"></i>
                                        <span>1</span>
                                    </div>
                                    <div class="reply">
                                        <a href="#">Reply</a>
                                    </div>
                                </div>
                            </div>
                            <div class="media-right">
                                <div class="dropdown is-spaced is-right is-neutral dropdown-trigger">
                                    <div>
                                        <div class="button">
                                            <i data-feather="more-vertical"></i>
                                        </div>
                                    </div>
                                    <div class="dropdown-menu" role="menu">
                                        <div class="dropdown-content">
                                            <a class="dropdown-item">
                                                <div class="media">
                                                    <i data-feather="x"></i>
                                                    <div class="media-content">
                                                        <h3>Hide</h3>
                                                        <small>Hide this comment.</small>
                                                    </div>
                                                </div>
                                            </a>
                                            <div class="dropdown-divider"></div>
                                            <a href="#" class="dropdown-item">
                                                <div class="media">
                                                    <i data-feather="flag"></i>
                                                    <div class="media-content">
                                                        <h3>Report</h3>
                                                        <small>Report this comment.</small>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div class="media-right">
                        <div class="dropdown is-spaced is-right is-neutral dropdown-trigger">
                            <div>
                                <div class="button">
                                    <i data-feather="more-vertical"></i>
                                </div>
                            </div>
                            <div class="dropdown-menu" role="menu">
                                <div class="dropdown-content">
                                    <a class="dropdown-item">
                                        <div class="media">
                                            <i data-feather="x"></i>
                                            <div class="media-content">
                                                <h3>Hide</h3>
                                                <small>Hide this comment.</small>
                                            </div>
                                        </div>
                                    </a>
                                    <div class="dropdown-divider"></div>
                                    <a href="#" class="dropdown-item">
                                        <div class="media">
                                            <i data-feather="flag"></i>
                                            <div class="media-content">
                                                <h3>Report</h3>
                                                <small>Report this comment.</small>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
               

               
                <div class="media is-comment">
                   <div class="media-left">
                        <div class="image">
                            <img src="../via.placeholder.com/300x300.png" data-demo-src="../src/assets/img/avatars/nelly.png" data-user-popover="9" alt="" />
                        </div>
                    </div>
                    <div class="media-content">
                        <a href="#">Nelly Schwartz</a>
                        <span class="time">2 days ago</span>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                            eiusmod tempo incididunt ut labore et dolore magna aliqua.
                        </p>
                        <div class="controls">
                            <div class="like-count">
                                <i data-feather="thumbs-up"></i>
                                <span>1</span>
                            </div>
                            <div class="reply">
                                <a href="#">Reply</a>
                            </div>
                        </div>
                    </div>
                    <div class="media-right">
                        <div class="dropdown is-spaced is-right is-neutral dropdown-trigger">
                            <div>
                                <div class="button">
                                    <i data-feather="more-vertical"></i>
                                </div>
                            </div>
                            <div class="dropdown-menu" role="menu">
                                <div class="dropdown-content">
                                    <a class="dropdown-item">
                                        <div class="media">
                                            <i data-feather="x"></i>
                                            <div class="media-content">
                                                <h3>Hide</h3>
                                                <small>Hide this comment.</small>
                                            </div>
                                        </div>
                                    </a>
                                    <div class="dropdown-divider"></div>
                                    <a href="#" class="dropdown-item">
                                        <div class="media">
                                            <i data-feather="flag"></i>
                                            <div class="media-content">
                                                <h3>Report</h3>
                                                <small>Report this comment.</small>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
               
            </div>
         
            <div class="card-footer">
                <div class="media post-comment has-emojis">
                    <div class="media-content">
                        <div class="field">
                            <p class="control">
                                <textarea class="textarea comment-textarea" rows="5" placeholder="Write a comment..."></textarea>
                            </p>
                        </div>
                        <div class="actions">
                            <div class="image is-32x32">
                                <img class="is-rounded" src="../via.placeholder.com/300x300.png" data-demo-src="../src/assets/img/avatars/jenna.png" data-user-popover="0" alt="" />
                            </div>
                            <div class="toolbar">
                                <div class="action is-auto">
                                    <i data-feather="at-sign"></i>
                                </div>
                                <div class="action is-emoji">
                                    <i data-feather="smile"></i>
                                </div>
                                <div class="action is-upload">
                                    <i data-feather="camera"></i>
                                    <input type="file" />
                                </div>
                                <a class="button is-solid primary-button raised">Post Comment</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    <div class="card is-post">
        <div class="content-wrap">
         
            <div class="card-heading">
                <div class="user-block">
                    <div class="image">
                        <img src="../via.placeholder.com/300x300.png" data-demo-src="../src/assets/img/avatars/stella.jpg" data-user-popover="2" alt="" />
                    </div>
                    <div class="user-info">
                        <a href="#">Stella Bergmann</a>
                        <span class="time">July 19 2018, 15:13pm</span>
                    </div>
                </div>
              
                <div class="dropdown is-spaced is-right is-neutral dropdown-trigger">
                    <div>
                        <div class="button">
                            <i data-feather="more-vertical"></i>
                        </div>
                    </div>
                    <div class="dropdown-menu" role="menu">
                        <div class="dropdown-content">
                            <a href="#" class="dropdown-item">
                                <div class="media">
                                    <i data-feather="bookmark"></i>
                                    <div class="media-content">
                                        <h3>Bookmark</h3>
                                        <small>Add this post to your bookmarks.</small>
                                    </div>
                                </div>
                            </a>
                            <a class="dropdown-item">
                                <div class="media">
                                    <i data-feather="bell"></i>
                                    <div class="media-content">
                                        <h3>Notify me</h3>
                                        <small>Send me the updates.</small>
                                    </div>
                                </div>
                            </a>
                            <hr class="dropdown-divider" />
                            <a href="#" class="dropdown-item">
                                <div class="media">
                                    <i data-feather="flag"></i>
                                    <div class="media-content">
                                        <h3>Flag</h3>
                                        <small>In case of inappropriate content.</small>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div class="card-body">
                <div class="post-text">
                    <p>
                        Hey friends ! Iam back and i wanted to share with you some awesome
                        pictures we took during our trip to Santa Monica. We had wonderful
                        holidays at the beach. Kisses to all !
                    </p>

                    <p></p>
                </div>
                <div class="post-image">
                    <div class="masonry-grid">
                        <div class="masonry-column-left">
                            <a data-fancybox="post3" data-lightbox-type="comments" data-thumb="../src/assets/img/demo/unsplash/3.jpg" href="../via.placeholder.com/1600x900.png" data-demo-href="../src/assets/img/demo/unsplash/3.jpg">
                                <img src="../via.placeholder.com/1600x900.png" data-demo-src="../src/assets/img/demo/unsplash/3.jpg" alt="" />
                            </a>
                            <a data-fancybox="post3" data-lightbox-type="comments" data-thumb="../src/assets/img/demo/unsplash/4.jpg" href="../via.placeholder.com/1600x900.png" data-demo-href="../src/assets/img/demo/unsplash/4.jpg">
                                <img src="../via.placeholder.com/1600x900.png" data-demo-src="../src/assets/img/demo/unsplash/4.jpg" alt="" />
                            </a>
                        </div>
                        <div class="masonry-column-right">
                            <a data-fancybox="post3" data-lightbox-type="comments" data-thumb="../src/assets/img/demo/unsplash/5.jpg" href="../via.placeholder.com/1600x900.png" data-demo-href="../src/assets/img/demo/unsplash/5.jpg">
                                <img src="../via.placeholder.com/1600x900.png" data-demo-src="../src/assets/img/demo/unsplash/5.jpg" alt="" />
                            </a>
                            <a data-fancybox="post3" data-lightbox-type="comments" data-thumb="../src/assets/img/demo/unsplash/6.jpg" href="../via.placeholder.com/1600x900.png" data-demo-href="../src/assets/img/demo/unsplash/6.jpg">
                                <img src="../via.placeholder.com/1600x900.png" data-demo-src="../src/assets/img/demo/unsplash/6.jpg" alt="" />
                            </a>
                            <a data-fancybox="post3" data-lightbox-type="comments" data-thumb="../src/assets/img/demo/unsplash/7.jpg" href="../via.placeholder.com/1600x900.png" data-demo-href="../src/assets/img/demo/unsplash/7.jpg">
                                <img src="../via.placeholder.com/1600x900.png" data-demo-src="../src/assets/img/demo/unsplash/7.jpg" alt="" />
                            </a>
                        </div>
                        
                        <div class="like-wrapper">
                            <a href="javascript:void(0);" class="like-button">
                                <i class="mdi mdi-heart not-liked bouncy"></i>
                                <i class="mdi mdi-heart is-liked bouncy"></i>
                                <span class="like-overlay"></span>
                            </a>
                        </div>

                        <div class="fab-wrapper is-share">
                            <a href="javascript:void(0);" class="small-fab share-fab modal-trigger" data-modal="share-modal">
                                <i data-feather="link-2"></i>
                            </a>
                        </div>

                        <div class="fab-wrapper is-comment">
                            <a href="javascript:void(0);" class="small-fab"  id="share">
                                <i data-feather="message-circle"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
           
            <div class="card-footer">
                
                <div class="likers-text">
                <div class="right">
                        <a class="btn button is-solid accent-button raised">
                        <h3 class="p">  </h3> 
                        <i class=" foot mdi mdi-cart-plus"></i>

                         </a>
                </div>
                </div>
                <div class="social-count">
                    <div class="likes-count">
                        <i data-feather="heart"></i>
                        <span>33</span>
                    </div>
                    <div class="shares-count">
                        <i data-feather="link-2"></i>
                        <span>1</span>
                    </div>
                    <div class="comments-count">
                        <i data-feather="message-circle"></i>
                        <span>9</span>
                    </div>
                </div>
            </div>

        </div>
      
        <div class="comments-wrap is-hidden">
            <div class="comments-heading">
                <h4>Comments <small>(9)</small></h4>
                <div class="close-comments">
                    <i data-feather="x"></i>
                </div>
            </div>
          
            <div class="comments-body has-slimscroll">
               
                <div class="media is-comment">
=                    <div class="media-left">
                        <div class="image">
                            <img src="../via.placeholder.com/300x300.png" data-demo-src="../src/assets/img/avatars/jenna.png" data-user-popover="0" alt="" />
                        </div>
                    </div>
=                    <div class="media-content">
                        <a href="#">Jenna Davis</a>
                        <span class="time">30 minutes ago</span>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                            eiusmod tempo incididunt ut labore et dolore magna aliqua. Ut enim
                            ad minim veniam, quis nostrud exercitation ullamco laboris
                            consequat.
                        </p>
=                        <div class="controls">
                            <div class="like-count">
                                <i data-feather="thumbs-up"></i>
                                <span>0</span>
                            </div>
                            <div class="reply">
                                <a href="#">Reply</a>
                            </div>
                        </div>


                        <div class="media is-comment">
                            <div class="media-left">
                                <div class="image">
                                    <img src="../via.placeholder.com/300x300.png" data-demo-src="../src/assets/img/avatars/jenna.jpg" data-user-popover="10" alt="" />
                                </div>
                            </div>
                            <div class="media-content">
                                <a href="#">Lana Henrikssen</a>
                                <span class="time">15 minutes ago</span>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                                    eiusmod tempo.
                                </p>
                                <div class="controls">
                                    <div class="like-count">
                                        <i data-feather="thumbs-up"></i>
                                        <span>2</span>
                                    </div>
                                    <div class="reply">
                                        <a href="#">Reply</a>
                                    </div>
                                </div>
                            </div>
                            <div class="media-right">
                                <div class="dropdown is-spaced is-right is-neutral dropdown-trigger">
                                    <div>
                                        <div class="button">
                                            <i data-feather="more-vertical"></i>
                                        </div>
                                    </div>
                                    <div class="dropdown-menu" role="menu">
                                        <div class="dropdown-content">
                                            <a class="dropdown-item">
                                                <div class="media">
                                                    <i data-feather="x"></i>
                                                    <div class="media-content">
                                                        <h3>Hide</h3>
                                                        <small>Hide this comment.</small>
                                                    </div>
                                                </div>
                                            </a>
                                            <div class="dropdown-divider"></div>
                                            <a href="#" class="dropdown-item">
                                                <div class="media">
                                                    <i data-feather="flag"></i>
                                                    <div class="media-content">
                                                        <h3>Report</h3>
                                                        <small>Report this comment.</small>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>



                        <div class="media is-comment">
                            <div class="media-left">
                                <div class="image">
                                    <img src="../via.placeholder.com/300x300.png" data-demo-src="../src/assets/img/avatars/david.jpg" data-user-popover="4" alt="" />
                                </div>
                            </div>
                            <div class="media-content">
                                <a href="#">David Kim</a>
                                <span class="time">12 minutes ago</span>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                                    eiusmod tempo incididunt ut labore et dolore magna aliqua.
                                </p>
                                <div class="controls">
                                    <div class="like-count">
                                        <i data-feather="thumbs-up"></i>
                                        <span>5</span>
                                    </div>
                                    <div class="reply">
                                        <a href="#">Reply</a>
                                    </div>
                                </div>
                            </div>
                            <div class="media-right">
                                <div class="dropdown is-spaced is-right is-neutral dropdown-trigger">
                                    <div>
                                        <div class="button">
                                            <i data-feather="more-vertical"></i>
                                        </div>
                                    </div>
                                    <div class="dropdown-menu" role="menu">
                                        <div class="dropdown-content">
                                            <a class="dropdown-item">
                                                <div class="media">
                                                    <i data-feather="x"></i>
                                                    <div class="media-content">
                                                        <h3>Hide</h3>
                                                        <small>Hide this comment.</small>
                                                    </div>
                                                </div>
                                            </a>
                                            <div class="dropdown-divider"></div>
                                            <a href="#" class="dropdown-item">
                                                <div class="media">
                                                    <i data-feather="flag"></i>
                                                    <div class="media-content">
                                                        <h3>Report</h3>
                                                        <small>Report this comment.</small>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>



                        <div class="media is-comment">
                            <div class="media-left">
                                <div class="image">
                                    <img src="../via.placeholder.com/300x300.png" data-demo-src="../src/assets/img/avatars/mike.jpg" data-user-popover="12" alt="" />
                                </div>
                            </div>
                            <div class="media-content">
                                <a href="#">Mike Lasalle</a>
                                <span class="time">8 minutes ago</span>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                                    eiusmod tempo incididunt.
                                </p>
                                <div class="controls">
                                    <div class="like-count">
                                        <i data-feather="thumbs-up"></i>
                                        <span>5</span>
                                    </div>
                                    <div class="reply">
                                        <a href="#">Reply</a>
                                    </div>
                                </div>
                            </div>
                            <div class="media-right">
                                <div class="dropdown is-spaced is-right is-neutral dropdown-trigger">
                                    <div>
                                        <div class="button">
                                            <i data-feather="more-vertical"></i>
                                        </div>
                                    </div>
                                    <div class="dropdown-menu" role="menu">
                                        <div class="dropdown-content">
                                            <a class="dropdown-item">
                                                <div class="media">
                                                    <i data-feather="x"></i>
                                                    <div class="media-content">
                                                        <h3>Hide</h3>
                                                        <small>Hide this comment.</small>
                                                    </div>
                                                </div>
                                            </a>
                                            <div class="dropdown-divider"></div>
                                            <a href="#" class="dropdown-item">
                                                <div class="media">
                                                    <i data-feather="flag"></i>
                                                    <div class="media-content">
                                                        <h3>Report</h3>
                                                        <small>Report this comment.</small>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>



                        <div class="media is-comment">
                            <div class="media-left">
                                <div class="image">
                                    <img src="../via.placeholder.com/300x300.png" data-demo-src="../src/assets/img/avatars/stella.jpg" data-user-popover="2" alt="" />
                                </div>
                            </div>
                            <div class="media-content">
                                <a href="#">Stella Bergmann</a>
                                <span class="time">Just now</span>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                                    eiusmod tempo incididunt.
                                </p>
                                <div class="controls">
                                    <div class="like-count">
                                        <i data-feather="thumbs-up"></i>
                                        <span>2</span>
                                    </div>
                                    <div class="reply">
                                        <a href="#">Reply</a>
                                    </div>
                                </div>
                            </div>
                            <div class="media-right">
                                <div class="dropdown is-spaced is-right is-neutral dropdown-trigger">
                                    <div>
                                        <div class="button">
                                            <i data-feather="more-vertical"></i>
                                        </div>
                                    </div>
                                    <div class="dropdown-menu" role="menu">
                                        <div class="dropdown-content">
                                            <a class="dropdown-item">
                                                <div class="media">
                                                    <i data-feather="x"></i>
                                                    <div class="media-content">
                                                        <h3>Hide</h3>
                                                        <small>Hide this comment.</small>
                                                    </div>
                                                </div>
                                            </a>
                                            <div class="dropdown-divider"></div>
                                            <a href="#" class="dropdown-item">
                                                <div class="media">
                                                    <i data-feather="flag"></i>
                                                    <div class="media-content">
                                                        <h3>Report</h3>
                                                        <small>Report this comment.</small>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div class="media-right">
                        <div class="dropdown is-spaced is-right is-neutral dropdown-trigger">
                            <div>
                                <div class="button">
                                    <i data-feather="more-vertical"></i>
                                </div>
                            </div>
                            <div class="dropdown-menu" role="menu">
                                <div class="dropdown-content">
                                    <a class="dropdown-item">
                                        <div class="media">
                                            <i data-feather="x"></i>
                                            <div class="media-content">
                                                <h3>Hide</h3>
                                                <small>Hide this comment.</small>
                                            </div>
                                        </div>
                                    </a>
                                    <div class="dropdown-divider"></div>
                                    <a href="#" class="dropdown-item">
                                        <div class="media">
                                            <i data-feather="flag"></i>
                                            <div class="media-content">
                                                <h3>Report</h3>
                                                <small>Report this comment.</small>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
               

               
                <div class="media is-comment">
                    <div class="media-left">
                        <div class="image">
                            <img src="../via.placeholder.com/300x300.png" data-demo-src="../src/assets/img/avatars/daniel.jpg" data-user-popover="3" alt="" />
                        </div>
                    </div>
                    <div class="media-content">
                        <a href="#">Daniel Wellington</a>
                        <span class="time">5 hours ago</span>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                            eiusmod tempo incididunt ut labore et dolore magna aliqua.
                        </p>
                        <div class="controls">
                            <div class="like-count">
                                <i data-feather="thumbs-up"></i>
                                <span>1</span>
                            </div>
                            <div class="reply">
                                <a href="#">Reply</a>
                            </div>
                        </div>
                    </div>
                    <div class="media-right">
                        <div class="dropdown is-spaced is-right is-neutral dropdown-trigger">
                            <div>
                                <div class="button">
                                    <i data-feather="more-vertical"></i>
                                </div>
                            </div>
                            <div class="dropdown-menu" role="menu">
                                <div class="dropdown-content">
                                    <a class="dropdown-item">
                                        <div class="media">
                                            <i data-feather="x"></i>
                                            <div class="media-content">
                                                <h3>Hide</h3>
                                                <small>Hide this comment.</small>
                                            </div>
                                        </div>
                                    </a>
                                    <div class="dropdown-divider"></div>
                                    <a href="#" class="dropdown-item">
                                        <div class="media">
                                            <i data-feather="flag"></i>
                                            <div class="media-content">
                                                <h3>Report</h3>
                                                <small>Report this comment.</small>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
               

               
                <div class="media is-comment">
                    <div class="media-left">
                        <div class="image">
                            <img src="../via.placeholder.com/300x300.png" data-demo-src="../src/assets/img/avatars/bobby.jpg" data-user-popover="8" alt="" />
                        </div>
                    </div>
                    <div class="media-content">
                        <a href="#">Bobby Brown</a>
                        <span class="time">7 hours ago</span>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                            eiusmod tempo incididunt ut labore et dolore magna aliqua.
                        </p>
                        <div class="controls">
                            <div class="like-count">
                                <i data-feather="thumbs-up"></i>
                                <span>1</span>
                            </div>
                            <div class="reply">
                                <a href="#">Reply</a>
                            </div>
                        </div>


                        <div class="media is-comment">
                            <div class="media-left">
                                <div class="image">
                                    <img src="../via.placeholder.com/300x300.png" data-demo-src="../src/assets/img/avatars/stella.jpg" data-user-popover="2" alt="" />
                                </div>
                            </div>
                            <div class="media-content">
                                <a href="#">Stella Bergmann</a>
                                <span class="time">7 hours ago</span>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                                    eiusmod tempo incididunt.
                                </p>
                                <div class="controls">
                                    <div class="like-count">
                                        <i data-feather="thumbs-up"></i>
                                        <span>2</span>
                                    </div>
                                    <div class="reply">
                                        <a href="#">Reply</a>
                                    </div>
                                </div>
                            </div>
                            <div class="media-right">
                                <div class="dropdown is-spaced is-right is-neutral dropdown-trigger">
                                    <div>
                                        <div class="button">
                                            <i data-feather="more-vertical"></i>
                                        </div>
                                    </div>
                                    <div class="dropdown-menu" role="menu">
                                        <div class="dropdown-content">
                                            <a class="dropdown-item">
                                                <div class="media">
                                                    <i data-feather="x"></i>
                                                    <div class="media-content">
                                                        <h3>Hide</h3>
                                                        <small>Hide this comment.</small>
                                                    </div>
                                                </div>
                                            </a>
                                            <div class="dropdown-divider"></div>
                                            <a href="#" class="dropdown-item">
                                                <div class="media">
                                                    <i data-feather="flag"></i>
                                                    <div class="media-content">
                                                        <h3>Report</h3>
                                                        <small>Report this comment.</small>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>



                        <div class="media is-comment">
                            <div class="media-left">
                                <div class="image">
                                    <img src="../via.placeholder.com/300x300.png" data-demo-src="../src/assets/img/avatars/ken.jpg" data-user-popover="10" alt="" />
                                </div>
                            </div>
                            <div class="media-content">
                                <a href="#">Lana Henrikssen</a>
                                <span class="time">15 minutes ago</span>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                                    eiusmod tempo.
                                </p>
                                <div class="controls">
                                    <div class="like-count">
                                        <i data-feather="thumbs-up"></i>
                                        <span>2</span>
                                    </div>
                                    <div class="reply">
                                        <a href="#">Reply</a>
                                    </div>
                                </div>
                            </div>
                            <div class="media-right">
                                <div class="dropdown is-spaced is-right is-neutral dropdown-trigger">
                                    <div>
                                        <div class="button">
                                            <i data-feather="more-vertical"></i>
                                        </div>
                                    </div>
                                    <div class="dropdown-menu" role="menu">
                                        <div class="dropdown-content">
                                            <a class="dropdown-item">
                                                <div class="media">
                                                    <i data-feather="x"></i>
                                                    <div class="media-content">
                                                        <h3>Hide</h3>
                                                        <small>Hide this comment.</small>
                                                    </div>
                                                </div>
                                            </a>
                                            <div class="dropdown-divider"></div>
                                            <a href="#" class="dropdown-item">
                                                <div class="media">
                                                    <i data-feather="flag"></i>
                                                    <div class="media-content">
                                                        <h3>Report</h3>
                                                        <small>Report this comment.</small>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div class="media-right">
                        <div class="dropdown is-spaced is-right is-neutral dropdown-trigger">
                            <div>
                                <div class="button">
                                    <i data-feather="more-vertical"></i>
                                </div>
                            </div>
                            <div class="dropdown-menu" role="menu">
                                <div class="dropdown-content">
                                    <a class="dropdown-item">
                                        <div class="media">
                                            <i data-feather="x"></i>
                                            <div class="media-content">
                                                <h3>Hide</h3>
                                                <small>Hide this comment.</small>
                                            </div>
                                        </div>
                                    </a>
                                    <div class="dropdown-divider"></div>
                                    <a href="#" class="dropdown-item">
                                        <div class="media">
                                            <i data-feather="flag"></i>
                                            <div class="media-content">
                                                <h3>Report</h3>
                                                <small>Report this comment.</small>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
               
            </div>
         
            <div class="card-footer">
                <div class="media post-comment has-emojis">
                    <div class="media-content">
                        <div class="field">
                            <p class="control">
                                <textarea class="textarea comment-textarea" rows="5" placeholder="Write a comment..."></textarea>
                            </p>
                        </div>
                        <div class="actions">
                            <div class="image is-32x32">
                                <img class="is-rounded" src="../via.placeholder.com/300x300.png" data-demo-src="../src/assets/img/avatars/jenna.png" data-user-popover="0" alt="" />
                            </div>
                            <div class="toolbar">
                                <div class="action is-auto">
                                    <i data-feather="at-sign"></i>
                                </div>
                                <div class="action is-emoji">
                                    <i data-feather="smile"></i>
                                </div>
                                <div class="action is-upload">
                                    <i data-feather="camera"></i>
                                    <input type="file" />
                                </div>
                                <a class="button is-solid primary-button raised">Post Comment</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
   </div>
   
    <div class="card is-post">
        <div class="content-wrap">
            <div class="card-heading">
                <div class="user-block">
                    <div class="image">
                        <img src="../via.placeholder.com/300x300.png" data-demo-src="../src/assets/img/avatars/david.jpg" data-user-popover="4" alt="" />
                    </div>
                    <div class="user-info">
                        <a href="#">David Kim</a>
                        <span class="time">August 02 2018, 03:04pm</span>
                    </div>
                </div>
               
                <div class="dropdown is-spaced is-right is-neutral dropdown-trigger">
                    <div>
                        <div class="button">
                            <i data-feather="more-vertical"></i>
                        </div>
                    </div>
                    <div class="dropdown-menu" role="menu">
                        <div class="dropdown-content">
                            <a href="#" class="dropdown-item">
                                <div class="media">
                                    <i data-feather="bookmark"></i>
                                    <div class="media-content">
                                        <h3>Bookmark</h3>
                                        <small>Add this post to your bookmarks.</small>
                                    </div>
                                </div>
                            </a>
                            <a class="dropdown-item">
                                <div class="media">
                                    <i data-feather="bell"></i>
                                    <div class="media-content">
                                        <h3>Notify me</h3>
                                        <small>Send me the updates.</small>
                                    </div>
                                </div>
                            </a>
                            <hr class="dropdown-divider" />
                            <a href="#" class="dropdown-item">
                                <div class="media">
                                    <i data-feather="flag"></i>
                                    <div class="media-content">
                                        <h3>Flag</h3>
                                        <small>In case of inappropriate content.</small>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        
            <div class="card-body">
                <div class="post-text">
                    <p>
                        Just discovered this awesome CSS framework named
                        <a href="#">#bulmaCss</a>. It's based on flexbox, so easy to use and
                        comes with so many mobile first modifiers. You can build anything from
                        scratch easily with Bulma.
                        <a href="#">#webdesign #bulmaio</a>
                    </p>
                </div>
               
                <div class="post-link">
                    <div class="link-image">
                        <img src="../via.placeholder.com/300x300.png" data-demo-src="../src/assets/img/demo/video/source/dress.mp4" alt="" />
                    </div>
                    <div class="link-content">
                        <h4>
                            <a href="#">Bulma CSS Framework</a>
                        </h4>
                        <p>
                            Bulma is a mobile first CSS framework built on top of Flexbox. It's
                            awesome and so easy to use.
                        </p>
                        <small>Bulma.io</small>
                    </div>
                  
                    <div class="like-wrapper">
                        <a href="javascript:void(0);" class="like-button">
                            <i class="mdi mdi-heart not-liked bouncy"></i>
                            <i class="mdi mdi-heart is-liked bouncy"></i>
                            <span class="like-overlay"></span>
                        </a>
                    </div>

                    <div class="fab-wrapper is-share">
                        <a href="javascript:void(0);" class="small-fab share-fab modal-trigger" data-modal="share-modal">
                            <i data-feather="link-2"></i>
                        </a>
                    </div>

                    <div class="fab-wrapper is-comment">
                        <a href="javascript:void(0);" class="small-fab" id="share">
                            <i data-feather="message-circle"></i>
                        </a>
                    </div>
                </div>
            </div>
            <div class="card-footer">
               
                <div class="likers-text">
                <div class="right">
                        <a class="btn button is-solid accent-button raised">
                        <h3 class="p">  </h3> 

                        <i class="foot mdi mdi-cart-plus"></i>

                         </a>
                </div>
                </div>
                <div class="social-count">
                    <div class="likes-count">
                        <i data-feather="heart"></i>
                        <span>11</span>
                    </div>
                    <div class="shares-count">
                        <i data-feather="link-2"></i>
                        <span>3</span>
                    </div>
                    <div class="comments-count">
                        <i data-feather="message-circle"></i>
                        <span>2</span>
                    </div>
                </div>
            </div>
        </div>
      
        <div class="comments-wrap is-hidden">
        
            <div class="comments-heading">
                <h4>
                    Comments
                    <small>(2)</small>
                </h4>
                <div class="close-comments">
                    <i data-feather="x"></i>
                </div>
            </div>
          
            <div class="comments-body has-slimscroll">
               
                <div class="media is-comment">
                    <div class="media-left">
                        <div class="image">
                            <img src="../via.placeholder.com/300x300.png" data-demo-src="../src/assets/img/avatars/rolf.jpg" data-user-popover="10" alt="" />
                        </div>
                    </div>
                    <div class="media-content">
                        <a href="#">Lana Henrikssen</a>
                        <span class="time">2 days ago</span>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                            eiusmod tempo incididunt ut labore et dolore magna aliqua. Ut enim
                            ad minim veniam, quis nostrud exercitation ullamco laboris
                            consequat.
                        </p>
                        <div class="controls">
                            <div class="like-count">
                                <i data-feather="thumbs-up"></i>
                                <span>1</span>
                            </div>
                            <div class="reply">
                                <a href="#">Reply</a>
                            </div>
                        </div>


                        <div class="media is-comment">
                            <div class="media-left">
                                <div class="image">
                                    <img src="../via.placeholder.com/300x300.png" data-demo-src="../src/assets/img/avatars/david.jpg" data-user-popover="4" alt="" />
                                </div>
                            </div>
                            <div class="media-content">
                                <a href="#">David Kim</a>
                                <span class="time">2 days ago</span>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                                    eiusmod tempo incididunt ut labore et dolore magna aliqua.
                                </p>
                                <div class="controls">
                                    <div class="like-count">
                                        <i data-feather="thumbs-up"></i>
                                        <span>0</span>
                                    </div>
                                    <div class="reply">
                                        <a href="#">Reply</a>
                                    </div>
                                </div>
                            </div>
                            <div class="media-right">
                                <div class="dropdown is-spaced is-right is-neutral dropdown-trigger">
                                    <div>
                                        <div class="button">
                                            <i data-feather="more-vertical"></i>
                                        </div>
                                    </div>
                                    <div class="dropdown-menu" role="menu">
                                        <div class="dropdown-content">
                                            <a class="dropdown-item">
                                                <div class="media">
                                                    <i data-feather="x"></i>
                                                    <div class="media-content">
                                                        <h3>Hide</h3>
                                                        <small>Hide this comment.</small>
                                                    </div>
                                                </div>
                                            </a>
                                            <div class="dropdown-divider"></div>
                                            <a href="#" class="dropdown-item">
                                                <div class="media">
                                                    <i data-feather="flag"></i>
                                                    <div class="media-content">
                                                        <h3>Report</h3>
                                                        <small>Report this comment.</small>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div class="media-right">
                        <div class="dropdown is-spaced is-right is-neutral dropdown-trigger">
                            <div>
                                <div class="button">
                                </div>
                            </div>
                            <div class="dropdown-menu" role="menu">
                                <div class="dropdown-content">
                                    <a class="dropdown-item">
                                        <div class="media">
                                            <i data-feather="x"></i>
                                            <div class="media-content">
                                                <h3>Hide</h3>
                                                <small>Hide this comment.</small>
                                            </div>
                                        </div>
                                    </a>
                                    <div class="dropdown-divider"></div>
                                    <a href="#" class="dropdown-item">
                                        <div class="media">
                                            <i data-feather="flag"></i>
                                            <div class="media-content">
                                                <h3>Report</h3>
                                                <small>Report this comment.</small>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
               
            </div>

            <div class="card-footer">
                <div class="media post-comment has-emojis">
                    <div class="media-content">
                        <div class="field">
                            <p class="control">
                                <textarea class="textarea comment-textarea" rows="5" placeholder="Write a comment..."></textarea>
                            </p>
                        </div>
                        <div class="actions">
                            <div class="image is-32x32">
                                <img class="is-rounded" src="../via.placeholder.com/300x300.png" data-demo-src="../src/assets/img/avatars/jenna.png" data-user-popover="0" alt="" />
                            </div>
                            <div class="toolbar">
                                <div class="action is-auto">
                                    <i data-feather="at-sign"></i>
                                </div>
                                <div class="action is-emoji">
                                    <i data-feather="smile"></i>
                                </div>
                                <div class="action is-upload">
                                    <i data-feather="camera"></i>
                                    <input type="file" />
                                </div>
                                <a class="button is-solid primary-button raised">Post Comment</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
   
    <div class="card is-post is-simple">
        <div class="content-wrap">
            <div class="card-heading">
              
          
            </div>


            {/* share */}
           <div id="share-modal" class="modal share-modal is-xsmall has-light-bg">
            <div class="modal-background"></div>
            <div class="modal-content">
                <div class="card">
                    <div class="card-heading">
                        <div class="dropdown is-primary share-dropdown">
                            <div>
                                <div class="button">
                                    <i class="mdi mdi-format-float-left"></i>
                                    <span>Share in your feed</span>
                                    <i data-feather="chevron-down"></i>
                                </div>
                            </div>
                            <div class="dropdown-menu" role="menu">
                                <div class="dropdown-content">
                                    <div class="dropdown-item" data-target-channel="feed">
                                        <div class="media">
                                            <i class="mdi mdi-format-float-left"></i>
                                            <div class="media-content">
                                                <h3>Share in your feed</h3>
                                                <small>Share this publication on your feed.</small>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="dropdown-item" data-target-channel="friend">
                                        <div class="media">
                                            <i class="mdi mdi-account-heart"></i>
                                            <div class="media-content">
                                                <h3>Share in a friend's feed</h3>
                                                <small>Share this publication on a friend's feed.</small>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="dropdown-item" data-target-channel="group">
                                        <div class="media">
                                            <i class="mdi mdi-account-group"></i>
                                            <div class="media-content">
                                                <h3>Share in a group</h3>
                                                <small>Share this publication in a group.</small>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="dropdown-item" data-target-channel="page">
                                        <div class="media">
                                            <i class="mdi mdi-file-document-box"></i>
                                            <div class="media-content">
                                                <h3>Share in a page</h3>
                                                <small>Share this publication in a page.</small>
                                            </div>
                                        </div>
                                    </div>
                                    <hr class="dropdown-divider" />
                                    <div class="dropdown-item" data-target-channel="private-message">
                                        <div class="media">
                                            <i class="mdi mdi-email-plus"></i>
                                            <div class="media-content">
                                                <h3>Share in message</h3>
                                                <small>Share this publication in a private message.</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="close-wrap">
                            <span class="close-modal">
                            <i data-feather="x"></i>
                        </span>
                        </div>
                    </div>
                    <div class="share-inputs">
                        <div class="field is-autocomplete">
                            <div id="share-to-friend" class="control share-channel-control is-hidden">
                                <input id="share-with-friend" type="text" class="input is-sm no-radius share-input simple-users-autocpl" placeholder="Your friend's name" />
                                <div class="input-heading">Friend :</div>
                            </div>
                        </div>

                        <div class="field is-autocomplete">
                            <div id="share-to-group" class="control share-channel-control is-hidden">
                                <input id="share-with-group" type="text" class="input is-sm no-radius share-input simple-groups-autocpl" placeholder="Your group's name" />
                                <div class="input-heading">Group :</div>
                            </div>
                        </div>

                        <div id="share-to-page" class="control share-channel-control no-border is-hidden">
                            <div class="page-controls">
                                <div class="page-selection">
                                    <div class="dropdown is-accent page-dropdown">
                                        <div>
                                            <div class="button page-selector">
                                                <img src="../via.placeholder.com/150x150.png" data-demo-src="assets/img/avatars/hanzo.svg" alt="" />
                                                <span>Css Ninja</span> <i data-feather="chevron-down"></i>
                                            </div>
                                        </div>
                                        <div class="dropdown-menu" role="menu">
                                            <div class="dropdown-content">
                                                <div class="dropdown-item">
                                                    <div class="media">
                                                        <img src="../via.placeholder.com/150x150.png" data-demo-src="assets/img/avatars/hanzo.svg" alt="" />
                                                        <div class="media-content">
                                                            <h3>Css Ninja</h3>
                                                            <small>Share on Css Ninja.</small>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="dropdown-item">
                                                    <div class="media">
                                                        <img src="../via.placeholder.com/150x150.png" data-demo-src="assets/img/vector/icons/logos/nuclearjs.svg" alt="" />
                                                        <div class="media-content">
                                                            <h3>NuclearJs</h3>
                                                            <small>Share on NuclearJs.</small>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="dropdown-item">
                                                    <div class="media">
                                                        <img src="../via.placeholder.com/150x150.png" data-demo-src="assets/img/vector/icons/logos/slicer.svg" alt="" />
                                                        <div class="media-content">
                                                            <h3>Slicer</h3>
                                                            <small>Share on Slicer.</small>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="alias">
                                    <img src="../via.placeholder.com/150x150.png" data-demo-src="assets/img/avatars/jenna.png" alt="" />
                                </div>
                            </div>
                        </div>

                        <div class="field is-autocomplete">
                            <div id="share-to-private-message" class="control share-channel-control is-hidden">
                                <input id="share-with-private-message" type="text" class="input is-sm no-radius share-input simple-users-autocpl" placeholder="Message a friend" />
                                <div class="input-heading">To :</div>
                            </div>
                        </div>
                    </div>
                    <div class="card-body">
                        <div class="control">
                            <textarea class="textarea comment-textarea" rows="1" placeholder="Say something about this ..."></textarea>
                            <button class="emoji-button">
                                <i data-feather="smile"></i>
                            </button>
                        </div>
                        <div class="shared-publication">
                            <div class="featured-image">
                                <img id="share-modal-image" src="../via.placeholder.com/1600x900.png" data-demo-src="assets/img/demo/unsplash/1.jpg" alt="" />
                            </div>
                            <div class="publication-meta">
                                <div class="inner-flex">
                                    <img id="share-modal-avatar" src="../via.placeholder.com/300x300.png" data-demo-src="assets/img/avatars/dan.jpg" data-user-popover="1" alt="" />
                                    <p id="share-modal-text">
                                        Yesterday with <a href="#">@Karen Miller</a> and
                                        <a href="#">@Marvin Stemperd</a> at the
                                        <a href="#">#Rock'n'Rolla</a> concert in LA. Was totally
                                        fantastic! People were really excited about this one!
                                    </p>
                                </div>
                                <div class="publication-footer">
                                    <div class="stats">
                                        <div class="stat-block">
                                            <i class="mdi mdi-earth"></i>
                                            <small>Public</small>
                                        </div>
                                        <div class="stat-block">
                                            <i class="mdi mdi-eye"></i>
                                            <small>163 views</small>
                                        </div>
                                    </div>
                                    <div class="publication-origin">
                                        <small>Friendkit.io</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="bottom-share-inputs">
                        <div id="action-place" class="field is-autocomplete is-dropup is-hidden">
                            <div id="share-place" class="control share-bottom-channel-control">
                                <input type="text" class="input is-sm no-radius share-input simple-locations-autocpl" placeholder="Where are you?" />
                                <div class="input-heading">Location :</div>
                            </div>
                        </div>

                        <div id="action-tag" class="field is-autocomplete is-dropup is-hidden">
                            <div id="share-tags" class="control share-bottom-channel-control">
                                <input id="share-friend-tags-autocpl" type="text" class="input is-sm no-radius share-input" placeholder="Who are you with" />
                                <div class="input-heading">Friends :</div>
                            </div>
                            <div id="share-modal-tag-list" class="tag-list no-margin"></div>
                        </div>
                    </div>
                    <div class="card-footer">
                        <div class="action-wrap">
                            <div class="footer-action" data-target-action="tag">
                                <i class="mdi mdi-account-plus"></i>
                            </div>
                            <div class="footer-action" data-target-action="place">
                                <i class="mdi mdi-map-marker"></i>
                            </div>
                            <div class="footer-action dropdown is-spaced is-neutral dropdown-trigger is-up" data-target-action="permissions">
                                <div>
                                    <i class="mdi mdi-lock-clock"></i>
                                </div>
                                <div class="dropdown-menu" role="menu">
                                    <div class="dropdown-content">
                                        <a href="#" class="dropdown-item">
                                            <div class="media">
                                                <i data-feather="globe"></i>
                                                <div class="media-content">
                                                    <h3>Public</h3>
                                                    <small>Anyone can see this publication.</small>
                                                </div>
                                            </div>
                                        </a>
                                        <a class="dropdown-item">
                                            <div class="media">
                                                <i data-feather="users"></i>
                                                <div class="media-content">
                                                    <h3>Friends</h3>
                                                    <small>only friends can see this publication.</small>
                                                </div>
                                            </div>
                                        </a>
                                        <a class="dropdown-item">
                                            <div class="media">
                                                <i data-feather="user"></i>
                                                <div class="media-content">
                                                    <h3>Specific friends</h3>
                                                    <small>Don't show it to some friends.</small>
                                                </div>
                                            </div>
                                        </a>
                                        <hr class="dropdown-divider" />
                                        <a class="dropdown-item">
                                            <div class="media">
                                                <i data-feather="lock"></i>
                                                <div class="media-content">
                                                    <h3>Only me</h3>
                                                    <small>Only me can see this publication.</small>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="button-wrap">
                            <button type="button" class="button is-solid dark-grey-button close-modal">
                                Cancel
                            </button>
                            <button type="button" class="button is-solid primary-button close-modal">
                                Publish
                            </button>
                        </div>
                    </div>
                </div>
            </div>

          

      <div class="comments-wrap is-hidden">
            <div class="comments-heading">
                <h4>
                    Comments
                    <small>(0)</small>
                </h4>
                <div class="close-comments">
                    <i data-feather="x"></i>
                </div>
            </div>
           
            <div class="comments-body has-slimscroll">
                <div class="comments-placeholder">
                    <img src="../src/assets/img/icons/feed/bubble.svg" alt="" />
                    <h3>Nothing in here yet</h3>
                    <p>Be the first to post a comment.</p>
                </div>
            </div>
        
            <div class="card-footer">
                <div class="media post-comment has-emojis">
                    <div class="media-content">
                        <div class="field">
                            <p class="control">
                                <textarea class="textarea comment-textarea" rows="5" placeholder="Write a comment..."></textarea>
                            </p>
                        </div>
                        <div class="actions">
                            <div class="image is-32x32">
                                <img class="is-rounded" src="../via.placeholder.com/300x300.png" data-demo-src="../src/assets/img/avatars/jenna.png" data-user-popover="0" alt="" />
                            </div>
                            <div class="toolbar">
                                <div class="action is-auto">
                                    <i data-feather="at-sign"></i>
                                </div>
                                <div class="action is-emoji">
                                    <i data-feather="smile"></i>
                                </div>
                                <div class="action is-upload">
                                    <i data-feather="camera"></i>
                                    <input type="file" />
                                </div>
                                <a class="button is-solid primary-button raised">Post Comment</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
   
    <div class="load-more-wrap has-text-centered">
        <a href="#" class="load-more-button">Load More</a>
    </div>
    </div>
    </div>
</div>


   )
}

export default PostPage
