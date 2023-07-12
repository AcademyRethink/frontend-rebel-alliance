import { TitleProps } from "../../types/titleTypes";
import { NavLink } from "react-router-dom";
import "./styles.scss";
import iconArrow from "./../../assets/Title/icon_arrow.svg";

const Title = ({
  fontSize,
  fontWeight,
  text,
  hasLine = false,
  hasIcon = false,
}: TitleProps) => {
  return (
    <div className="containerTitle">
      {hasIcon && (
        <NavLink to="/home">
          <img src={iconArrow} alt="icone para voltar" />
        </NavLink>
      )}
      <h1 style={{ fontSize: fontSize, fontWeight: fontWeight }}>{text}</h1>
      {hasLine && <div className="lineTitle"></div>}
    </div>
  );
};

export default Title;
