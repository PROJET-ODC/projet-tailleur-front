import axios from "axios";

const token = localStorage.getItem("token");
const _headers = {
  "Content-Type": "application/json",
};

if (token) {
  _headers.Authorization = `Bearer ${token}`;
}

const apiBase = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: _headers,
});

export default apiBase;
