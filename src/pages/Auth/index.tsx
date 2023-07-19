/* eslint-disable no-empty */
import Login from "../../screens/Login";
import { useContext } from "react";
import { AuthContext } from "../../controllers/contextController";
import Home from "../Home";
const AuthPage = () => {
  const { userData, validateToken } = useContext(AuthContext);
  if (localStorage.getItem("token"))
    validateToken(localStorage.getItem("token"));

  if (userData?.token) return <Home />;
  else return <Login />;
};

export default AuthPage;
