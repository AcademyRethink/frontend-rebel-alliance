import "./styles.scss";
import monitoreLogo from "../../assets/sideBar/monitoreLogo.svg";
import iconLogin from "../../assets/loginPage/iconLogin.svg";
import Input from "../../components/Input";
import CustomCheckbox from "../../components/CustomCheckbox";
import Button from "../../components/Button";
import loginController from "../../controllers/loginController";
import { useEffect, useState } from "react";
// import jwt from "jsonwebtoken";
// import dotenv from "dotenv";

// dotenv.config();
// const mySecret = "default";

const LoginScreen = () => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState<any>();
  const [errorMessage, setErrorMessage] = useState<any>();
  const [stayLogged, setStayLogged] = useState(false);

  useEffect(() => {
    if (token) {
      if (token.message) {
        if (token.message === "User not Found") {
          setErrorMessage({ message: token.message, type: "login" });
        } else {
          setErrorMessage({ message: token.message, type: "password" });
        }
      } else {
        console.log(stayLogged);
        if (stayLogged) {
          // jwt.verify(token, mySecret);
          localStorage.setItem("token", token);
        }
      }
    }
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
            className={
              errorMessage?.type === "login"
                ? "TextInputError"
                : "TextInputDefault"
            }
            label="CPF/CNPJ"
            placeHolder="Apenas números"
            value={user}
            onChange={(event) => {
              setUser(event.target.value.replace(/\D/g, ""));
            }}
            errorMessage={errorMessage?.message}
          />
          <Input
            className={
              errorMessage?.type === "password"
                ? "TextInputError"
                : "TextInputDefault"
            }
            type="password"
            label="Senha"
            placeHolder="Digite sua senha aqui"
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
            errorMessage={errorMessage?.message}
          />
          <CustomCheckbox
            label="Manter Conectado"
            onChange={(event) => {
              setStayLogged(event.target.checked);
            }}
          />

          <Button
            text="Entrar"
            className="largeButton"
            iconRight={iconLogin}
            onClick={async () => {
              setToken(await loginController.getToken(user, password));
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;
