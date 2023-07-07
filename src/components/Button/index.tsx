import "./styles.scss";
import { ButtonProps } from "../../types/buttonTypes";

const Button = ({
  className = "buttonDefault",
  text,
  icon,
  onClick,
}: ButtonProps) => {
  return (
    <button className={className} onClick={onClick}>
      {text}
      {icon && <img src={icon} alt={icon} />}
    </button>
  );
};

export default Button;
