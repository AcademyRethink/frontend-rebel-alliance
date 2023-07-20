import axios from "axios";

const api = axios.create({
  // baseURL: "http://localhost:3000/",
  baseURL: "https://backend-rebel-alliance.vercel.app/",
});

export default api;
