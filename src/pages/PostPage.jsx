import { useEffect, useState } from "react";
import {
  getPosts,
  likePost,
  addComment,
  Deletepost,
  favoritePost,
} from "../api/postApi"; // Assurez-vous d'importer la fonction likePost
import { getTaille } from "../api/clients"; // Assurez-vous d'importer la fonction likePost

import CommentsSection from "./CommentsSection";
import Modal from "./SharePage";
import PostInput from "../components/principal/section/PostInput";
import decodedToken from "../utils/decryptJWT";
import { recordView } from "../api/viewApi"; // Importez l'API pour enregistrer la vue
import InputColor from "react-input-color";
import { toast } from "react-toastify";

function PostPage() {
  // Recevez posts en prop
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
  const [isShopPopupOpen, setIsShopPopupOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [color, setColor] = useState({});
  const [taille, setTaille] = useState(null);
  const [card, setCard] = useState({
    color: "#ff0000",
    taille: "S",
    quantity: 1,
    post: [],
  });

  const [cardStorage, setCardStorage] = useState([]); // État pour le <panier></panier>
  const [delte, setDelte] = useState([]);

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
        console.log("allpost", postsData);

        const tailleData = await getTaille();
        /*         const delete= await deletePosts();
         */
        let postsWithLikes = null;
        if (postsData.posts) {
          setTaille(tailleData.taille);
          postsWithLikes = postsData.posts.map((post) => {
            // Vérifiez si l'utilisateur connecté a liké ce post
            // const hasLiked = post.likes.some(
            //   (like) => like.compte_id === accountId
            // );

            let hasLiked = null;
            if (post.likes) {
              hasLiked = post.likes.some(
                (like) => like.compte_id === accountId
              );
            }

            return {
              ...post,
              liked: hasLiked, // Mettre à jour l'état liked pour chaque post
              comments: post.comments || [], // Assurez-vous que les commentaires sont récupérés
            };
          });
        }
        setPosts(postsWithLikes);
        console.log(postsData);
      } catch (error) {
        console.error("Erreur lors de la récupération des posts:", error);
      } finally {
        setLoading(false);
      }
    };

    // if (accountId) {
    fetchPosts(); // Exécute la récupération des posts après que l'accountId a été défini
    // }
  }, [accountId]); // Déclenchez cet effet après que l'ID du compte est défini

  const incrementViewCount = async (postId) => {
    console.log(
      "Tentative d'incrémentation des vues pour le post ID :",
      postId
    );

    if (!postId || typeof postId !== "number") {
      console.error("ID du post invalide :", postId);
      return;
    }

    try {
      console.log("Enregistrement de la vue pour le post ID :", postId);
      await recordView(postId); // Appel de l'API pour enregistrer la vue

      setPosts((prevPosts) =>
        prevPosts.map((post) => {
          if (post.id === postId) {
            return { ...post, viewNb: post.viewNb + 1 }; // Incrémenter la vue localement
          }
          return post;
        })
      );
    } catch (error) {
      console.error("Erreur lors de l'incrémentation des vues :", error);
      if (error.message.includes("Post non trouvé")) {
        alert("Le post que vous essayez de consulter n'existe pas.");
      }
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
      return newComment; // AssureclassName="time">{new Date(post.files).toLocaleString()}</spanz-vous que newComment a toutes les informations nécessaires
    } catch (error) {
      console.error("Erreur lors de l'ajout du commentaire :", error);
    }
  };

  //delete post

  const handleDeletePost = async (postId) => {
    console.log("podd", postId);

    if (!accountId) {
      console.error("Account ID manquant !");
      return;
    }
    console.log("count", accountId);

    try {
      // Appel à l'API pour supprimer le post
      await Deletepost(postId, accountId);

      // Mettre à jour l'état local pour retirer le post supprimé
      setPosts((prevPosts) => prevPosts.filter((post) => post.id !== postId));
      toast.success("Post supprimé avec succès !");
    } catch (error) {
      console.error("Erreur lors de la suppression du post:", error);
      toast.error("Erreur lors de la suppression du post.");
    }
  };

  //favorite
  const handleFavoriteClick = async (postId) => {
    if (!accountId) {
      console.error("Account ID manquant!");
      return;
    }

    try {
      const postIndex = posts.findIndex((post) => post.id === postId);
      console.log("kk", postIndex);

      if (postIndex === -1) {
        console.error("Post non trouvé!");
        return;
      }

      const isFavorited = posts[postIndex].favorite; // Vérifiez si le post est déjà favori

      // Appeler à l'API pour ajouter ou supprimer le post de la liste des favoris
      await favoritePost(postId, accountId, isFavorited); // Passer l'état actuel à l'API

      // Mettre à jour le tableau des posts favoris localement
      setPosts((prevPosts) =>
        prevPosts.map((post) => {
          if (post.id === postId) {
            return { ...post, favorite: !isFavorited }; // Inverser la valeur de favorite
          }
          return post;
        })
      );

      // Afficher le message toast en fonction de l'action
      if (isFavorited) {
        toast.error("Post supprimé des favoris!");
      } else {
        toast.success("Post ajouté aux favoris!");
      }
    } catch (error) {
      console.error("Erreur lors de l'ajout/suppression du favori", error);
    }
  };

  const handleChangeColor = (value) => {
    setCard((prevState) => ({ ...prevState, color: value }));

    console.log("couleur", value);
  };
  const handleTaille = (value) => {
    setCard((prevState) => ({ ...prevState, taille: value }));
    console.log("taillle", value);
  };
  const handleAddQuantity = (value) => {
    setCard((prevState) => ({ ...prevState, quantity: value }));
    console.log("quantité", value);
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
    const postLink = `https://votre-site.com/posts/${post.id}`; // Remplacez par l'URL réelle du post
    setComment(`cliquer ici pour voir le model  : ${postLink}`);

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

  /* shop */

  const handleShopClick = (post) => {
    setSelectedProduct(post);
    setIsShopPopupOpen(true);
  };

  const closeShopPopup = () => {
    setIsShopPopupOpen(false);
    setSelectedProduct(null);
  };

  // const addToCart = (productData) => {
  //   setCardStorage((prevCart) => [...prevCart, productData]);
  //   localStorage.setItem("panier", JSON.stringify(cardStorage));
  // };

  const handleAddToCart = (value) => {
    console.log(selectedProduct);

    const productData = {
      post: selectedProduct,
      name: selectedProduct.title,
      color: card.color.hex,
      taille: card.taille,
      quantity: card.quantity,
    };
    const panier = JSON.parse(localStorage.getItem("panier"));
    panier.push(productData);
    localStorage.setItem("panier", JSON.stringify(panier));
    toast.success("Produit ajouté au panier!");
    closeShopPopup();
  };

  if (loading) {
    return <div>Chargement des posts...</div>;
  }

  console.log(posts);

  const handleNewPost = (data) => {
    console.log("data", data);
    setPosts([data.post, ...posts]);
  };

  return (
    <>
      <div id="compose-card" className="card is-new-content">
        <PostInput onPostCreated={handleNewPost} />
      </div>

      {posts &&
        posts.map((post) => (
          <div
            key={post.id}
            id={`feed-post-${post.id}`}
            className="card is-post"
          >
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
                  className="flex gap-10 dropdown is-spaced is-right is-neutral dropdown-trigger"
                  // Afficher le popup au clic
                >
                  <div className="favorite-wrapper">
                    <a
                      href="javascript:void(0);"
                      className={`favorite-button ${
                        post.favorite ? "is-active white-button" : ""
                      }`}
                      onClick={() => handleFavoriteClick(post.id)}
                    >
                      <span className="favorite-overlay"></span>
                    </a>
                  </div>

                  <div className="button" onClick={() => togglePopup(post.id)}>
                    <i className="mdi mdi-dots-vertical text-2xl"></i>
                  </div>
                </div>

                {/* Popup qui s'affiche sur le bouton */}
                {popupVisible[post.id] && (
                  <div className="popup ml-20 p-5">
                    <div className="popup-contents">
                      <a
                        href="#"
                        className="popup-item"
                        onClick={() => handleDeletePost(post.id)}
                      >
                        <h3>Supprimer </h3>
                      </a>{" "}
                      <br />
                      <a
                        className="popup-item "
                        onClick={() => handleFavoriteClick(post.id)}
                      >
                        <h3>
                          Favorite
                          <i
                            className={`mdi mdi-bookmark bouncy ${
                              post.favorite ? "favorited" : "not-favorited"
                            }`}
                            style={{ color: post.favorite ? "gold" : "tan" }} // Changez la couleur ici
                          ></i>{" "}
                        </h3>{" "}
                        <br />
                      </a>
                      <hr />
                      <a href="#" className="popup-item">
                        <h3>signaler</h3>
                      </a>
                    </div>
                  </div>
                )}
              </div>

              <div className="card-body">
                <div className="post-text">
                  <p>{post.content}</p>
                  <p>{post.title}</p>
                  <p>{post.price}</p>
                </div>
                <div className="post-image">
                  {videoFormats.some(
                    (format) => post.files && post.files.endsWith(format)
                  ) ? (
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
                        style={{
                          maxHeight: "643px",
                          width: "100%",
                        }}
                        src={post.files}
                        alt="Post"
                        data-demo-src={post.files}
                        className="!object-content !object-top"
                      />
                    </a>
                  )}
                  <div className="fab-wrapper is-comment">
                    <a
                      href="javascript:void(0);"
                      className="small-fab"
                      onClick={() => toggleComments(post.id)}
                    >
                      <i className="mdi mdi-message"></i>
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
                      <i className="mdi mdi-share"></i>
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
                    <a
                      className="btn button is-solid accent-button raised"
                      onClick={() => handleShopClick(post)}
                    >
                      <i className="mdi mdi-cart-plus"></i>
                    </a>
                  </div>
                </div>

                <div className="social-count">
                  <div className="likes-count">
                    <i data-feather="heart"></i>
                    <p>{post.likes.length}</p>
                  </div>
                  <div className="likes-count">
                    <i data-feather="eye"></i>
                    <p>{post.viewNb}</p>
                  </div>
                  <div className="shares-count">
                    <i data-feather="link-2"></i>
                    <p>{post.shareNb}</p>
                  </div>
                  <div className="comments-count">
                    <i data-feather="message-circle"></i>
                    <p>{post.comments.length}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* //card shop */}
            {isShopPopupOpen && selectedProduct && (
              <div className="shop-popup bg-[rgba(22,16,16,0.5)]">
                <div className="popup-contents">
                  <button
                    onClick={closeShopPopup}
                    className="close-popup !text-white !z-[100]"
                  >
                    X
                  </button>
                  <div
                    id="product-quickview"
                    className="product-quickview is-large"
                  >
                    <div className="modal-background quickview-background !bg-transparent"></div>
                    <div className="modal-content !w-[100%]">
                      <div className="card">
                        <div className="left">
                          <div className="product-image is-active">
                            <img
                              src={selectedProduct.files}
                              className="!object-content !object-top"
                              alt=""
                            />
                          </div>
                        </div>
                        <div className="right">
                          <div className="header">
                            <div className="product-info">
                              <h3 id="quickview-name">
                                {selectedProduct.title}{" "}
                              </h3>
                              <p>{selectedProduct.title} </p>
                            </div>
                            <div id="quickview-price" className="price">
                              {selectedProduct.price}{" "}
                            </div>
                          </div>
                          <div className="properties">
                            <div>
                              <InputColor
                                initialValue="#5e72e4"
                                onChange={(value) => {
                                  setColor(value);
                                  handleChangeColor(value);
                                }}
                                placement="right"
                              />
                              <div
                                style={{
                                  width: 50,
                                  height: 50,
                                  marginTop: 20,
                                  backgroundColor: color.rgba,
                                }}
                              />
                            </div>

                            <div
                              id="size-properties"
                              className="property-group"
                            >
                              <h4>Sizes</h4>
                              <div className="property-box is-sizes">
                                {taille &&
                                  taille.map((size, index) => {
                                    return (
                                      <div
                                        key={index}
                                        className="property-item"
                                      >
                                        <input
                                          type="radio"
                                          name="quickview_sizes"
                                          value={size.libelle}
                                          id="S"
                                          onChange={(e) => {
                                            handleTaille(e.target.value);
                                          }}
                                        />
                                        <div className="item-inner">
                                          <span className="size-label">
                                            {size.libelle}
                                          </span>
                                        </div>
                                      </div>
                                    );
                                  })}
                              </div>
                            </div>
                          </div>

                          <div className="quickview-description content has-slimscroll">
                            <p>{selectedProduct.content}</p>
                          </div>

                          <div className="quickview-controls">
                            <div className="spinnere">
                              <button className="remove"></button>
                              <input
                                onChange={(e) => {
                                  handleAddQuantity(e.target.value);
                                }}
                                type="number"
                                id="quantity"
                                name="quantity"
                                min="1"
                                max="100"
                                defaultValue="1"
                                required
                              />{" "}
                              <button className="add"></button>
                              <input
                                className="spinner-input"
                                type="hidden"
                                value="1"
                              />
                            </div>
                            <button
                              type="submit"
                              onClick={(value) => handleAddToCart(value)}
                              className="button is-solid accent-button raised"
                            >
                              <span>Ajouter au panier</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
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
