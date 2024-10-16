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