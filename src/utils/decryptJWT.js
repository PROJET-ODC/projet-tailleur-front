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

export default decodedToken;
