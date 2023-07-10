import "./styles.scss";
import { TextInputProps } from "../../types/InputTypes";

const TextInput = ({
  className,
  placeHolder,
  value,
  onChange,
}: TextInputProps) => {
  return (
    <input
      type="text"
      className={className}
      placeholder={placeHolder}
      value={value}
      onChange={onChange}
    />
  );
};

export default TextInput;
