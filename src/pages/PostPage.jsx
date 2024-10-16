import { useEffect, useState } from "react";
import PostInput from "../components/principal/section/PostInput";
import apiBase from "../api/apiBase";

function PostPage() {
  const [posts, setPosts] = useState([]);

  // Fetch posts depuis le backend
  useEffect(() => {
    const fetchPosts = async () => {
      const token = localStorage.getItem("token");
      try {
        const response = await apiBase.get("/tailleur/posts", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setPosts(response.data.posts); // Stocke les posts dans le state
      } catch (error) {
        console.error("Erreur lors de la récupération des posts :", error);
      }
    };

    fetchPosts();
  }, []);

  // Fonction pour ajouter un nouveau post
  const handlePostCreated = (newPost) => {
    // Ajouter le nouveau post en haut de la liste
    setPosts((prevPosts) => [newPost, ...prevPosts]);
  };

  return (
    <>
      <div id="compose-card" className="card is-new-content">
        <PostInput onPostCreated={handlePostCreated} />
      </div>

      {posts.length > 0 ? (
        posts.map((post) => (
          <div
            key={post.id}
            id={`feed-post-${post.id}`}
            className="card is-post"
          >
            <div className="content-wrap">
              {/* En-tête du post */}
              <div className="card-heading">
                <div className="user-block">
                  <div className="image">
                    <img
                      src={
                        post.user.profilePicture ||
                        "../via.placeholder.com/300x300.png"
                      }
                      alt={`${post.user.firstname} ${post.user.lastname}`}
                      style={{
                        width: "50px",
                        height: "50px",
                        borderRadius: "50%",
                      }} // Style pour la photo de profil
                    />
                  </div>
                  <div className="user-info">
                    <a href="#">{`${post.user.firstname} ${post.user.lastname}`}</a>
                    <span className="time">
                      {new Date(post.createdAt).toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>

              {/* Contenu du post */}
              <div className="card-body">
                <h3>{post.title}</h3>
                <div className="post-text">
                  <p>{post.content}</p>
                </div>

                {post.files && (
                  <div className="post-media" style={{ textAlign: "center" }}>
                    {post.categorie === "IMAGE" ? (
                      <img
                        src={post.files}
                        alt="Média du post"
                        style={{ maxWidth: "100%", height: "auto" }}
                      />
                    ) : (
                      // <video controls style={{ maxWidth: "100%", height: "auto" }}>
                      //   <source src={post.files} type="video/mp4" />
                      //   Your browser does not support the video tag.
                      // </video>
                      <video controls style={{ width: "100%", height: "auto" }}>
                        <source src={post.files} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>

                    )}
                  </div>
                )}


                
              </div>

                  

              {/* Pied du post avec les interactions */}
              <div className="card-footer">
                <div className="social-count">
                  <div className="likes-count">
                    <i className="mdi mdi-heart"></i>
                    <span>{post.likes.length}</span>
                  </div>
                  <div className="shares-count">
                    <i className="mdi mdi-share"></i>
                    <span>{post.shareNb}</span>
                  </div>
                  <div className="comments-count">
                    <i className="mdi mdi-comment"></i>
                    <span>{post.comments.length}</span>
                  </div>
                  <div className="views-count">
                    <i className="mdi mdi-eye"></i>
                    <span>{post.viewNb}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p>Aucun post disponible.</p>
      )}
    </>
  );
}

export default PostPage;
