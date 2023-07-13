import "./styles.scss";
import { ColumnProps } from "../../../types/itemTypes";

const Column = ({ title, text }: ColumnProps) => {
  return (
    <div className="columnContainer">
      <h1>{title}</h1>
      <p>{text}</p>
    </div>
  );
};

export default Column;
