import { useEffect, useState } from "react";
import { getPosts, likePost, addComment } from "../api/postApi"; // Assurez-vous d'importer la fonction likePost
import CommentsSection from "./CommentsSection";
import Modal from "./SharePage";
import PostInput from "../components/principal/section/PostInput";
import decodedToken from "../utils/decryptJWT";
import { recordView } from "../api/viewApi"; // Importez l'API pour enregistrer la vue

function PostPage() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showComments, setShowComments] = useState({});
  const [dropdownOpen, setDropdownOpen] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);
  const [popupVisible, setPopupVisible] = useState({}); // État pour gérer la visibilité du popup
  const [accountId, setAccountId] = useState(null); // État pour stocker l'ID du compte
  const [nameuser, setName] = useState(null); // État pour stocker l'ID du compte
  const [userIcon, setUserIcon] = useState(""); // État pour stocker l'icône de l'utilisateur
  const [comment, setComment] = useState(""); // Ajoutez cette ligne

  const videoFormats = [".mp4", ".webm", ".ogg", ".avi", ".mov", ".mkv"]; // Ajoutez d'autres formats si nécessaire

  const commentaires = [
    {
      nom: "Dan Walker",
      temps: "28 minutes ago",
      texte:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      avatar: "../via.placeholder.com/300x300.png",
      likes: 4,
    },
  ];

  useEffect(() => {
    // Récupérer et décoder le token pour obtenir le compte_id
    const token = localStorage.getItem("token");
    if (token) {
      const decoded = decodedToken(token);
      console.log("decode", decoded); // Affichage du token décodé
      if (decoded && decoded.id) {
        setAccountId(decoded.id);
        setName(decoded.identifiant);
        console.log("Account ID récupéré :", decoded.id);
        console.log("name :", decoded.identifiant);
      } else {
        console.warn("Impossible de récupérer le compte_id du token décodé");
      }
    } else {
      console.warn("Aucun token trouvé dans le localStorage");
    }

    const fetchPosts = async () => {
      try {
        const postsData = await getPosts(); // Récupérer les posts depuis l'API
        const postsWithLikes = postsData.posts.map((post) => {
          // Vérifiez si l'utilisateur connecté a liké ce post
          const hasLiked = post.likes.some(
            (like) => like.compte_id === accountId
          );

          return {
            ...post,
            liked: hasLiked, // Mettre à jour l'état liked pour chaque post
            comments: post.comments || [], // Assurez-vous que les commentaires sont récupérés
          };
        });
        setPosts(postsWithLikes);
        console.log(postsData);
      } catch (error) {
        console.error("Erreur lors de la récupération des posts:", error);
      } finally {
        setLoading(false);
      }
    };

    if (accountId) {
      fetchPosts(); // Exécute la récupération des posts après que l'accountId a été défini
    }
  }, [accountId]); // Déclenchez cet effet après que l'ID du compte est défini

  const incrementViewCount = async (postId) => {
    if (!accountId) {
      console.error("Account ID manquant !");
      return;
    }

    // Vérifiez si postId est valide
    if (!postId || typeof postId !== "number") {
      console.error("ID du post invalide :", postId);
      return;
    }

    try {
      // Enregistrer la vue via l'API
      console.log("Enregistrement de la vue pour le post ID :", postId); // Debugging
      await recordView(postId, accountId);

      // Mettre à jour le nombre de vues localement
      setPosts((prevPosts) =>
        prevPosts.map((post) => {
          if (post.id === postId) {
            return { ...post, viewNb: post.viewNb + 1 };
          }
          return post;
        })
      );
    } catch (error) {
      console.error("Erreur lors de l'incrémentation des vues :", error);
    }
  };

  const handleLikeClick = async (postId) => {
    if (!accountId) {
      console.error("Account ID manquant !");
      return;
    }

    try {
      const postIndex = posts.findIndex((post) => post.id === postId);
      if (postIndex === -1) {
        console.error("Post non trouvé !");
        return;
      }

      // Appel à l'API pour liker le post
      const likedPostData = await likePost(postId, accountId);

      // Mettre à jour le tableau des posts localement
      setPosts((prevPosts) =>
        prevPosts.map((post) => {
          if (post.id === postId) {
            // Vérifier si l'utilisateur a déjà liké ce post
            const hasLiked = post.likes.some(
              (like) => like.compte_id === accountId
            );

            // Si l'utilisateur a déjà liké, on retire le like, sinon on l'ajoute
            const updatedLikes = hasLiked
              ? post.likes.filter((like) => like.compte_id !== accountId)
              : [...post.likes, { compte_id: accountId }];

            return {
              ...post,
              liked: !post.liked,
              likes: updatedLikes, // Mettre à jour le tableau des likes
            };
          }
          return post;
        })
      );
    } catch (error) {
      console.error("Erreur lors du like du post:", error);
    }
  };

  const ajouterCommentaire = async (postId, content) => {
    if (!accountId) {
      console.error("Account ID manquant !");
      return;
    }
    if (!content || content.trim() === "") {
      console.error("Le contenu du commentaire est vide.");
      return;
    }

    try {
      // Appeler l'API pour récupérer les détails du post

      // Afficher les détails du post
      // Appeler l'API pour ajouter un commentaire
      const newComment = await addComment(postId, accountId, content);

      // On retourne le commentaire ajouté
      return newComment; // Assurez-vous que newComment a toutes les informations nécessaires
    } catch (error) {
      console.error("Erreur lors de l'ajout du commentaire :", error);
    }
  };

  const toggleComments = (postId) => {
    setShowComments((prevState) => ({
      ...prevState,
      [postId]: !prevState[postId],
    }));
  };

  const toggleDropdown = (postId) => {
    setDropdownOpen((prevState) => ({
      ...prevState,
      [postId]: !prevState[postId],
    }));
  };

  const openModal = (post) => {
    setSelectedPost(post);
    setComment(`Voici le lien du post : ${post.link}`); // Remplacez `post.link` par la propriété appropriée qui contient le lien du post
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedPost(null);
    setComment(""); // Réinitialisez le commentaire lorsque vous fermez le modal
  };

  const togglePopup = (postId) => {
    setPopupVisible((prevState) => ({
      ...prevState,
      [postId]: !prevState[postId],
    }));
  };

  if (loading) {
    return <div>Chargement des posts...</div>;
  }

  console.log(posts);

  return (
    <>
      <div id="compose-card" className="card is-new-content">
        <PostInput />
      </div>

      {posts.map((post) => (
        <div key={post.id} id={`feed-post-${post.id}`} className="card is-post">
          <div className="content-wrap">
            <div className="card-heading">
              <div className="user-block">
                <div className="image">
                  <img src={post.tailleur.compte.user.picture} alt="Avatar" />
                </div>
                <div className="user-info">
                  <p>{post.user.firstname}</p>
                  <p>{new Date(post.createdAt).toLocaleString()}</p>
                </div>
              </div>

              <div
                className="dropdown is-spaced is-right is-neutral dropdown-trigger"
                onClick={() => togglePopup(post.id)} // Afficher le popup au clic
              >
                <div className="button">
                  <i data-feather="more-vertical"></i>
                </div>
              </div>

              {/* Popup qui s'affiche sur le bouton */}
              {popupVisible[post.id] && (
                <div className="popup">
                  <div className="popup-content">
                    <a href="#" className="popup-item">
                      <h3>Bookmark</h3>
                      <small>Add this post to your bookmarks.</small>
                    </a>
                    <a className="popup-item">
                      <h3>Notify me</h3>
                      <small>Send me the updates.</small>
                    </a>
                    <hr />
                    <a href="#" className="popup-item">
                      <h3>Flag</h3>
                      <small>In case of inappropriate content.</small>
                    </a>
                  </div>
                </div>
              )}
            </div>

            <div className="card-body">
              <div className="post-text">
                <p>{post.content}</p>
              </div>
              <div className="post-image">
                {videoFormats.some((format) => post.files.endsWith(format)) ? (
                  <a
                    data-fancybox="post1"
                    href={post.files}
                    data-lightbox-type="comments"
                    data-thumb={post.files}
                    data-demo-href={post.files}
                    onClick={() => incrementViewCount(post.id)} // Incrémenter les vues
                  >
                    <video controls>
                      <source
                        src={post.files}
                        type={`video/${post.files.split(".").pop()}`}
                      />
                      Votre navigateur ne supporte pas la lecture de vidéo.
                    </video>
                  </a>
                ) : (
                  <a
                    data-fancybox="post1"
                    href={post.files}
                    data-lightbox-type="comments"
                    data-thumb={post.files}
                    data-demo-href={post.files}
                    onClick={() => incrementViewCount(post.id)} // Incrémenter les vues
                  >
                    <img
                      src={post.files}
                      alt="Post"
                      data-demo-src={post.files}
                    />
                  </a>
                )}
                <div className="fab-wrapper is-comment">
                  <a
                    href="javascript:void(0);"
                    className="small-fab"
                    onClick={() => toggleComments(post.id)}
                  >
                    <i data-feather="message-circle"></i>
                  </a>
                </div>

                {post.comments && (
                  <CommentsSection
                    showComments={showComments[post.id]}
                    commentaires={post.comments} // Utilisez les commentaires du post
                    ajouterCommentaire={ajouterCommentaire} // Passer la fonction ici
                    postId={post.id} // Passer l'ID du post
                  />
                )}

                <div className="fab-wrapper is-share">
                  <a
                    href="javascript:void(0);"
                    className="small-fab share-fab modal-trigger"
                    onClick={() => openModal(post)}
                  >
                    <i data-feather="link-2"></i>
                  </a>
                </div>

                <div className="like-wrapper">
                  <a
                    href="javascript:void(0);"
                    className={`like-button ${
                      post.liked ? "is-active red-button" : ""
                    }`}
                    onClick={() => handleLikeClick(post.id)}
                  >
                    <i className="mdi mdi-heart not-liked bouncy"></i>
                    <i className="mdi mdi-heart is-liked bouncy"></i>
                    <span className="like-overlay"></span>
                  </a>
                </div>
              </div>
            </div>

            <div className="card-footer">
              <div className="likers-text">
                <div className="right">
                  <a className="btn button is-solid accent-button raised">
                    <i className="mdi mdi-cart-plus"></i>
                  </a>
                </div>
              </div>

              <div className="social-count">
                <div className="likes-count">
                  <i data-feather="heart"></i>
                  <p>{post.likes.length}</p>
                </div>
                <div className="shares-count">
                  <i data-feather="link-2"></i>
                  <p>{post.viewNb}</p>
                </div>
                <div className="comments-count">
                  <i data-feather="message-circle"></i>
                  <p>{post.comments.length}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* share */}
      <Modal
        isOpen={isModalOpen}
        closeModal={closeModal}
        comment={comment}
        setComment={setComment}
      >
        {/* Contenu du modal */}
      </Modal>
    </>
  );
}

export default PostPage;
