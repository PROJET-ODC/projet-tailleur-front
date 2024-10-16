import * as jwtDecode from 'jwt-decode';

const decodedToken = (token) => {
  if (!token) {
    console.warn("Aucun jeton fourni à la fonction decodedToken");
    return null;
  }

  try {
    const decoded = jwtDecode.jwtDecode(token);
    console.log("Jeton décodé avec succès:", decoded);
    return decoded;
  } catch (error) {
    console.error("Erreur lors du décodage du jeton:", error.message);
    console.error("Jeton qui n'a pas pu être décodé:", token);
    return null;
  }
};

export const isAuth = () => {
  const token = localStorage.getItem("token");
  if (!token) {
    console.warn("Aucun jeton trouvé dans le localStorage");
    return false;
  }
  return decodedToken(token) !== null;
};

export const getRole = () => {
  const token = localStorage.getItem("token");
  if (!token) {
    console.warn("Aucun jeton trouvé dans le localStorage pour getRole");
    return null;
  }
  const decoded = decodedToken(token);
  if (decoded && decoded.role) {
    return decoded.role;
  } else {
    console.warn("Aucun rôle trouvé dans le jeton décodé");
    return null;
  }
};

export default decodedToken;