import { CustomCheckboxProps } from "../../types/customCheckboxTypes";
import "./styles.scss";

const CustomCheckbox = ({ className, label }: CustomCheckboxProps) => {
  return (
    <div className="CustomCheckboxContainer">
      <label htmlFor="">{label}</label>
    </div>
  );
};

export default CustomCheckbox;
