import apiBase from "./apiBase";

const getCommandes = async () => {
  const token = localStorage.getItem("token");
  const result = await apiBase
    .get(`tailleur/listcommandes`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return error.response.data;
    });

  return result;
};

export { getCommandes };
