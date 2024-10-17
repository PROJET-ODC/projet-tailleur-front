import apiBase from "./apiBase";

const loginApi = async (data) => {
  try {
    const response = await apiBase.post("/login", data);
    return response.data;
  } catch (error) {
    console.error(
      "Erreur lors de la connexion:",
      error.response ? error.response.data : error.message
    );
    return error.response
      ? error.response.data
      : { message: "Erreur inconnue", status: "KO" };
  }
};

const registerApi = async (data) => {
  const result = await apiBase
    .post("/register", data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    .then((response) => {
      console.log(response);

      return response.data;
    })
    .catch((error) => {
      console.log(error);
      return error.response.data;
    });

  return result;
};

const isAuth = () => {
  return localStorage.getItem("token") ? true : false;
};

export { loginApi, registerApi };
