import "./styless.scss";
import monitoreLogo from "../../assets/sideBar/monitoreLogo.svg";
import Input from "../../components/Input";

const LoginScreen = () => {
  return (
    <div className="LoginPage">
      <div className="LoginContainer">
        <header>
          <img src={monitoreLogo} alt="Logomarca Monitore" />
        </header>
        <div className="DataContainer">
          <h1>Bem Vindo!</h1>
          <Input
            className="TextInputDefault"
            label="CPF"
            placeHolder="000.000.000-00"
          />
          <Input
            className="TextInputDefault"
            type="password"
            label="Senha"
            placeHolder="Digite sua senha aqui"
          />
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;
