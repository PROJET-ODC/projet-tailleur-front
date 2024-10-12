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
