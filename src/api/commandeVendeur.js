// api/commandeVendeur.js
import apiBase from "./apiBase";

const getCommandeVendeur = async () => {
  const token = localStorage.getItem("token");
  const result = await apiBase
    .get("/vendeur/commandes", {
      headers: {
        Authorization: `Bearer ${token}`,
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

export { getCommandeVendeur };
