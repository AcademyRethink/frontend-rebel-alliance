import "./styles.scss";
import UserInfo from "../UserInfo";

const UserDatas = () => {
  return (
    <div className="userDataContainer">
      <table>
        <UserInfo title="Nome" text="user.name" />
        <UserInfo title="CPF/CNPJ" text="zabauba" />
        <UserInfo title="Data Nascimento" text="zabauba" />
        <UserInfo title="Número de contato" text="zabauba" />
        <UserInfo title="E-mail" text="zabauba" />
        <UserInfo title="Senha" text="zabauba" />
        <UserInfo title="Tipo de conta" text="zabauba" />
      </table>
    </div>
  );
};

export default UserDatas;
