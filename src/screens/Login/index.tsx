import "./styles.scss";
import monitoreLogo from "../../assets/sideBar/monitoreLogo.svg";
import iconLogin from "../../assets/loginPage/iconLogin.svg";
import Input from "../../components/Input";
import CustomCheckbox from "../../components/CustomCheckbox";
import Button from "../../components/Button";
import loginController from "../../controllers/loginController";
import { useEffect, useState } from "react";

const LoginScreen = () => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState();

  useEffect(() => {
    console.log(token);
  }, [token]);
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
            label="CPF/CNPJ"
            placeHolder="000.000.000-00"
            value={user}
            onChange={(event) => {
              setUser(event.target.value);
            }}
          />
          <Input
            className="TextInputDefault"
            type="password"
            label="Senha"
            placeHolder="Digite sua senha aqui"
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
          <CustomCheckbox label="Manter Conectado" />

          <Button
            text="Entrar"
            className="largeButton"
            iconRight={iconLogin}
            onClick={async () => {
              console.log(user);
              console.log(password);
              setToken(await loginController.getToken(user, password));
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;
