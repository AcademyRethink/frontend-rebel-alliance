import "./styles.scss";
import { UserDataProperties } from "../../types/userDataTypes";

const UserInfo = ({ title, name, text }: UserDataProperties) => {
  return (
    <div className="userInfoContainer">
      <tr>
        <td id="title">{title}</td>
        <td id="name">{name}</td>
        <td id="text">{text}</td>
      </tr>
    </div>
  );
};

export default UserInfo;
