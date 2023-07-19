import "./styles.scss";
import DataTableRow from "../DataTableRow";
import { useEffect, useState } from "react";
import { userById } from "../../services/users";
import { User, UserDataProps } from "../../types/userDataTypes";
import { Skeleton } from "@mui/material";

const UserDatas = ({ userID }: UserDataProps) => {
  const [user, setUser] = useState<User | null>(null);
  const [result, setResult] = useState<any>();
  useEffect(() => {
    userById(userID)
      .then((result) => {
        setResult(result);
      })
      .catch((error) => {
        alert(error);
      });
    if (result?.name) setUser(result);
    console.log(result);
  }, [user, userID, result]);

  return (
    <div className="userDataContainer">
      {user ? (
        <table>
          <DataTableRow title="Nome" text={user.name} />
          <DataTableRow title="CPF/CNPJ" text={user.cpf_cnpj} />
          <DataTableRow title="Número de contato" text={user.celphone} />
          <DataTableRow title="E-mail" text={user.email} />
          <DataTableRow title="Tipo de conta" text={user.userType} />
        </table>
      ) : (
        <Skeleton
          variant="rounded"
          sx={{ bgcolor: "grey.400" }}
          width={1400}
          height={700}
        />
      )}
    </div>
  );
};

export default UserDatas;
