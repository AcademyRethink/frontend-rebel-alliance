import "./styles.scss";
import monitoreLogo from "./../../assets/sideBar/monitoreLogo.svg";
import iconFarm from "./../../assets/sideBar/iconFarm.svg";
import iconClima from "./../../assets/sideBar/iconClima.svg";
import iconPerfil from "./../../assets/sideBar/iconPerfil.svg";
import iconExit from "./../../assets/sideBar/iconExit.svg";
import Button from "../Button";
import { NavLink } from "react-router-dom";

const SideBar = () => {
  return (
    <div className="sideBar">
      <div className="containerLogo">
        <img src={monitoreLogo} alt="Logo monitore" />
      </div>
      <nav className="containerButtons">
        <ul className="containerLinks">
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
        </ul>
        <div className="containerExit">
          <Button
            className="sideBarButton"
            text="Sair"
            iconLeft={iconExit}
            onClick={() => {
              localStorage.removeItem("token");
              window.location.href = "/login";
            }}
          />
        </div>
      </nav>
    </div>
  );
};

export default SideBar;
