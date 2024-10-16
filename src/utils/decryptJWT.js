import { jwtDecode } from "jwt-decode";

const decodedToken = () => {
  const token = localStorage.getItem("token"); // Retrieve your token from storage

  if (token) {
    try {
      return jwtDecode(token);
      // Access the decoded payload data
    } catch (error) {
      return error;
    }
  }
  return null;
};

export const isAuth = () => {
  return decodedToken() !== null;
};

export const getRole = () => {
  const decoded = decodedToken();
  if (decoded) {
    return decoded.role;
  }
  return null;
};

export default decodedToken;
