import axios from "axios";

const api = axios.create({
  baseURL: "https://backend-rebel-alliance.vercel.app/",
});

export default api;
