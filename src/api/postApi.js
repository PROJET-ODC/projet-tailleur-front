import apiBase from "./apiBase"; // Assurez-vous que le chemin est correct

const getPosts = async () => {
  try {
    const response = await apiBase.get("/tailleur/posts");
    return response.data; // Renvoie les données des posts
  } catch (error) {
    throw new Error(error.response?.data?.message || "Erreur lors de la récupération des posts");
  }
};
const likePost = async (postId, accountId) => {
  try {
    const response = await apiBase.post(`/client/like`, { post_id: postId, compte_id: accountId });
    return response.data; // Renvoie les données du post liké
  } catch (error) {
    throw new Error(error.response?.data?.message || "Erreur lors du liking du post");
  }
};

// api/commentApi.js
const addComment = async (postId, accountId, content) => {
  try {
      const response = await apiBase.post(`/client/posts/comment`, { 
          post_id: postId, 
          compte_id: accountId, 
          content 
      });
      return response.data; // Retourne le nouveau commentaire ajouté
  } catch (error) {
    console.error("Données envoyées : ", { post_id: postId, compte_id: accountId, content });

      throw new Error(error.response?.data?.message || "Erreur lors de l'ajout du commentaire");
  }
};



export { getPosts, likePost,addComment }; // Ajoutez likePost à l'export