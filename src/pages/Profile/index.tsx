import "./styles.scss";
import SideBar from "../../components/SideBar";
import Title from "../../components/Title";
import UserDatas from "../../components/UserDatas";
import { useContext } from "react";
import { AuthContext } from "../../controllers/contextController";

const Profile = () => {
  const { userData } = useContext(AuthContext);
  if (userData?.token) {
    return (
      <div className="profileContainer">
        <SideBar />
        <div className="dataProfileContainer">
          <Title fontSize="" fontWeight="" text="Perfil" hasIcon hasLine />
          <UserDatas user={userData.info} />
        </div>
      </div>
    );
  } else {
    window.location.href = "/";
  }
};

export default Profile;
