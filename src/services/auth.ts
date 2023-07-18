import api from "./api";
import { UserLoginProps } from "../types/authTypes";

const loginUser = async (userData: UserLoginProps) => {
  try {
    const response = await api.get("user/login", {
      data: {
        cpf_cnpj: "22222222222",
        password: "jose1234",
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export default { loginUser };
