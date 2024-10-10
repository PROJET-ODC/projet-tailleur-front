import apiBase from "./apiBase";

const loginApi = async (data) => {
  const result = await apiBase
    .post("/login", data)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return error.response.data;
    });

  return result;
};

const registerApi = async (data) => {
  const result = await apiBase
    .post("/register", data)
    .then((response) => {
      console.log(response);

      return response.data;
    })
    .catch((error) => {
      return error.response.data;
    });

  return result;
};

const isAuth = () => {
  return localStorage.getItem("token") ? true : false;
};

export { loginApi, registerApi };
