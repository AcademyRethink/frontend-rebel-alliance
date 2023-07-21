import "./styles.scss";
import { DataProperties } from "../../types/dataTypes";

const DataTableRow = ({ title, text }: DataProperties) => {
  return (
    <div className="dataTableRowContainer">
      <tr>
        <td id="title">{title}</td>
        <td id="text">{text}</td>
      </tr>
    </div>
  );
};

export default DataTableRow;
