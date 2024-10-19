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

export const getTaille = async() => {
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