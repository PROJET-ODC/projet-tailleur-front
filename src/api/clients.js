import apiBase from "./apiBase";


export const getFeedsInitData = async () => {
  try {
    const response = await apiBase.post("/client/accueil");
    return response.data; // Renvoie les données des posts
  } catch (error) {
    // Gérer les erreurs, vous pouvez lancer l'erreur ou renvoyer un message d'erreur
    throw new Error(error.response?.data?.message || "Erreur lors de la récupération des posts");
  }
};


export const getMessageByUser = async (user_id) => {

  const result = await apiBase
    .get(`/client/messages/${user_id}`)

    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return error.response.data;
    });
  return result;
};

export const followApi = async (idFollowedCompte) => {
  const result = await apiBase
    .post("/client/follow", { idFollowedCompte })
      .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return error.response.data;
    });
  return result;
};

