import apiBase from "./apiBase";

export const getFeedsInitData = async () => {
  const result = await apiBase
    .get("/client/accueil")
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return error.response.data;
    });
  return result;
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


export const unfollowApi = async (idFollowedCompte) => {
  const result = await apiBase
    .post("/client/unfollow", { idFollowedCompte })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return error.response.data;
    });
  return result;
};


export const getNotificationsByUser = async () => {
  const result = await apiBase
    .get(`/client/notifications`)

    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return error.response.data;
    });
  return result;
};

export const getAllFollowers = async () => {
  const result = await apiBase
    .get(`/client/followers`)

    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return error.response.data;
    });
  return result;
};

export const getDiscussionData = async () => {
  const result = await apiBase
    .get(`/client/discussions`)

    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return error.response.data;
    });
  return result;
};

export const getTaille = async () => {
  const result = await apiBase
    .get(`/client/taille`)

    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return error.response.data;
    });
  return result;
};

export const sendMessages = async (data) => {
  const result = await apiBase
    .post("/client/sendMessage", data)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return error.response.data;
    });
  return result;
};

export const updateLikeStatus = async (data) => {
  const result = await apiBase
    .post("/client/statuslikes", data)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return error.response.data;
    });
  return result;
};

export const getAllLikesStatus = async (status_id) => {
  const result = await apiBase
    .get(`/client/statuslikes/${status_id}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return error.response.data;
    });
  return result;
  };

export const addPaiementCommande = async (postId, accountId, qte, taille, montant) => {
  try {
      const response = await apiBase.post(`/client/paiements`, { 
          post_id: postId, 
          compte_id: accountId, 
          qte, 
          taille, 
          montant 
      });
      return response.data; // Retourne la commande et le paiement ajoutés
  } catch (error) {
      console.error("Données envoyées : ", { post_id: postId, compte_id: accountId, qte, taille, montant });
      throw new Error(error.response?.data?.message || "Erreur lors de l'ajout du paiement de la commande");
  }
};

export const addNote = async (noter_id, noted_id, note) => {
  try {
      const response = await apiBase.post(`/client/note`, { 
        noter_id: noter_id, // Correction ici
        noted_id: noted_id, 
        note: note
      });
      return response.data; // Retourne les données de la réponse
  } catch (error) {
      console.error("Erreur lors de l'ajout de la note : ", error.response?.data || error.message);
      throw new Error(error.response?.data?.message || "Erreur lors de l'ajout de la note");
  }

