import "./styles.scss";
import DataTableRow from "../DataTableRow";
import { UserDataProps } from "../../types/userDataTypes";
import { Skeleton } from "@mui/material";

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

  console.log(user);

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
