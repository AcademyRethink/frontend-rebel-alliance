import "./styles.scss";
import DataTableRow from "../DataTableRow";
import { useEffect, useState } from "react";
import { userById } from "../../services/users";

const UserDatas = () => {
  const [user, setUser] = useState();
  const id = 1;

  useEffect(() => {
    userById(1)
      .then((result) => {
        console.log(result);
        setUser(result);
      })
      .catch((error) => {
        alert(error);
      });
  }, []);

  return (
    <div className="userDataContainer">
      <table>
        <DataTableRow title="Nome" text="{user.name}" />
        <DataTableRow title="CPF/CNPJ" text="zabauba" />
        <DataTableRow title="Data Nascimento" text="zabauba" />
        <DataTableRow title="Número de contato" text="zabauba" />
        <DataTableRow title="E-mail" text="zabauba" />
        <DataTableRow title="Senha" text="zabauba" />
        <DataTableRow title="Tipo de conta" text="zabauba" />
      </table>
    </div>
  );
};

export default UserDatas;
