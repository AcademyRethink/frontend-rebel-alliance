import api from "./api";

const getUserById = async (id) => {
  const response = await api.get(`/users/${id}`);
  return response.data;
};

const userById = async () => {
  const response = await api.get(`/users/:id`);
  return response.data;
};

export { getUserById, userById };
