/* eslint-disable no-empty */
import Login from "../../screens/Login";
import { useContext, useState } from "react";
import { AuthContext } from "../../controllers/contextController";
import Home from "../Home";
const AuthPage = () => {
  const { userData, validateToken } = useContext(AuthContext);
  const [validate, setValidate] = useState<number>(1);

  if (validate && localStorage.getItem("token")) {
    validateToken(localStorage.getItem("token"));
    setValidate(0);
  }

  if (userData?.token) return <Home />;
  else return <Login />;
};

export default AuthPage;
