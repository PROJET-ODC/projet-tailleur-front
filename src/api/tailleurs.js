import apiBase from "./apiBase";

export const createStatus = async (data) => {
  const result = await apiBase
    .post("/tailleur/status", data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return error.response.data;
    });
  return result;
};

export const getFriendSuggestions = async () => {
  const result = await apiBase
    .get(`/client/suggestion`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return error.response.data;
    });
  return result;
};
