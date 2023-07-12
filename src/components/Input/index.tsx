import "./styles.scss";
import { TextInputProps } from "../../types/InputTypes";

const TextInput = ({
  className,
  label,
  placeHolder,
  value,
  errorMessage,
  onChange,
}: TextInputProps) => {
  return (
    <div className="TextInputContainer">
      <label htmlFor={className}>{label}</label>
      <input
        type="text"
        className={className}
        id={className}
        placeholder={placeHolder}
        value={value}
        onChange={onChange}
        disabled={className === "Disable" ? true : false}
      />
      {className === "Error" && errorMessage && <p>{errorMessage}</p>}
    </div>
  );
};

export default TextInput;
