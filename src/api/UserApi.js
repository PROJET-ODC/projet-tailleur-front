import apiBase from "./apiBase";

// Function to submit a post
const UserApi = async (data) => {
  const token = localStorage.getItem("token"); // Assurez-vous que le token est stocké dans localStorage
  const result = await apiBase
    .post("/tailleur/posts", data, {
      headers: {
        Authorization: `Bearer ${token}`, // Ajouter le token d'authentification
        'Content-Type': 'multipart/form-data', // Ajouter le type de contenu pour les fichiers
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

export { UserApi };

