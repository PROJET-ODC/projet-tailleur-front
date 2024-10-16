import apiBase from "./apiBase"; // Assurez-vous que le chemin est correct

const getLike = async () => {
  try {
    return await apiBase.post("/client/like", data);

  } catch (error) {
    // Gérer les erreurs, vous pouvez lancer l'erreur ou renvoyer un message d'erreur
    throw new Error(error.response?.data?.message || "Erreur lors de la récupération des posts");
  }
};

export { getLike };
