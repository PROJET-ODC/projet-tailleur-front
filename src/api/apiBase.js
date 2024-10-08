import axios from "axios";

const apiBase = axios.create({
  baseURL: import.meta.env.VITE_API_URL, // URL du backend Laravel
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage.getItem("token")}`, // Token stocké localement
  },
});

export default apiBase;
