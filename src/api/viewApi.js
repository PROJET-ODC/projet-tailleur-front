// src/api/viewApi.js
import apiBase from "./apiBase"; // Assurez-vous que le chemin est correct

const recordView = async (postId) => {
  try {
    const response = await apiBase.post("/client/view", { postId });
    return response.data;
  } catch (error) {
    console.error("Erreur lors de l'enregistrement de la vue :", error.response ? error.response.data : error.message);
  }
};


export { recordView };
