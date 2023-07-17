import api from "./api";

const userById = async (id: number) => {
  const response = await api.get(`/users/${id}`);
  return response.data;
};

export { userById };
