import { TitleProps } from "../../types/titleTypes";
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
        <button onClick={() => history.back()}>
          <img src={iconArrow} alt="icone para voltar" />
        </button>
      )}
      <h1 style={{ fontSize: fontSize, fontWeight: fontWeight }}>{text}</h1>
      {hasLine && <div className="lineTitle"></div>}
    </div>
  );
};

export default Title;
