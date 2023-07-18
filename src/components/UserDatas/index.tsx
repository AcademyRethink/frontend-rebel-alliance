import "./styles.scss";
import DataTableRow from "../DataTableRow";
import { useEffect, useState } from "react";
import { userById } from "../../services/users";
import { User, UserDataProps } from "../../types/userDataTypes";

const UserDatas = ({ userID }: UserDataProps) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    userById(userID)
      .then((result) => {
        setUser(result);
      })
      .catch((error) => {
        alert(error);
      });
  }, [userID]);

  return (
    <div className="userDataContainer">
      {user ? (
        <table>
          <DataTableRow title="Nome" text={user.name} />
          <DataTableRow title="CPF/CNPJ" text={user.cpf_cnpj} />
          <DataTableRow title="Data Nascimento" text={user.name} />
          <DataTableRow title="Número de contato" text={user.celphone} />
          <DataTableRow title="E-mail" text={user.email} />
          <DataTableRow title="Senha" text={user.password} />
          <DataTableRow title="Tipo de conta" text={user.userType} />
        </table>
      ) : (
        <p>Loading</p>
      )}
    </div>
  );
};

export default UserDatas;
