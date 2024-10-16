// src/api/viewApi.js
import apiBase from "./apiBase"; // Assurez-vous que le chemin est correct

const recordView = async (postId, accountId) => {
  const data = { postId, accountId }; // Inclure postId dans l'objet de données à envoyer

  try {
    return await apiBase.post(`/client/view`, data); // Appelez l'API pour enregistrer la vue
  } catch (error) {
    // Gérer les erreurs
    throw new Error(
      error.response?.data?.message ||
        "Erreur lors de l'enregistrement de la vue"
    );
  }
};

export { recordView };
