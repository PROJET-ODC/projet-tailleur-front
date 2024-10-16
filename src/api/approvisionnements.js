import apiBase from "./apiBase";

const getApprovisionnements = async (libelle = "") => {
  const token = localStorage.getItem("token");
  const result = await apiBase
    .get(`tailleur/approvisions?libelle=${libelle}`, {
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

export { getApprovisionnements };






// import apiBase from "./apiBase";

// const getApprovisionnements = async ( ) => {
//   const token = localStorage.getItem("token");
//   const result = await apiBase
//     .get("tailleur/approvisions", {
//       headers: {
//         Authorization: `Bearer ${token}`
//       }
//     })
//     .then((response) => {
//       return response.data;
//     })
//     .catch((error) => {
//       return error.response.data;
//     });

//   return result;
// };

// export { getApprovisionnements };
