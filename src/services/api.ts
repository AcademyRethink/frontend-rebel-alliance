import axios from "axios";

const api = axios.create({
  baseURL: "https://verce-rebel-alliance.vercel.app/",
});

export default api;
