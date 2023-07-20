import "./styles.scss";
import monitoreLogo from "./../../assets/sideBar/monitoreLogo.svg";
import iconFarm from "./../../assets/sideBar/iconFarm.svg";
import iconClima from "./../../assets/sideBar/iconClima.svg";
import iconPerfil from "./../../assets/sideBar/iconPerfil.svg";
import iconExit from "./../../assets/sideBar/iconExit.svg";
import Button from "../Button";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../controllers/contextController";

const SideBar = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { logout } = useContext(AuthContext);
  return (
    <div className="sideBar">
      <div className="containerLogo">
        <img src={monitoreLogo} alt="Logo monitore" />
      </div>
      <nav className="containerButtons">
        <div className="containerLinks">
          <NavLink
            to="/home"
            className={({ isActive }) =>
              isActive ? "linkActive" : "linkNoActive"
            }
          >
            <Button
              className="sideBarButton"
              text="Fazenda"
              iconLeft={iconFarm}
            />
          </NavLink>

          <NavLink
            to="/clima"
            className={({ isActive }) =>
              isActive ? "linkActive" : "linkNoActive"
            }
          >
            <Button
              className="sideBarButton"
              text="Clima"
              iconLeft={iconClima}
            />
          </NavLink>

          <NavLink
            to="/perfil"
            className={({ isActive }) =>
              isActive ? "linkActive" : "linkNoActive"
            }
          >
            <Button
              className="sideBarButton"
              text="Perfil"
              iconLeft={iconPerfil}
            />
          </NavLink>
        </div>
        <div className="containerExit">
          <Button
            className="sideBarButton"
            text="Sair"
            iconLeft={iconExit}
            onClick={() => {
              logout();
              window.location.href = "/";
            }}
          />
        </div>
      </nav>
    </div>
  );
};

export default SideBar;
