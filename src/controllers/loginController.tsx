import auth from "../services/auth";
const getToken = (cpf_cnpj: string, password: string) => {
  const token = auth
    .loginUser({ cpf_cnpj, password })
    .then((token) => {
      return token;
    })
    .catch((error) => {
      alert(error);
    });
  return token;
};

export default { getToken };
