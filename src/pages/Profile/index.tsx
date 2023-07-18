import SideBar from "../../components/SideBar";
import Title from "../../components/Title";
import UserDatas from "../../components/UserDatas";
import "./styles.scss";

const Profile = () => {
  return (
    <div className="profileContainer">
      <SideBar />
      <div className="dataProfileContainer">
        <Title fontSize="" fontWeight="" text="Perfil" hasIcon hasLine />
        <UserDatas userID={1} />
      </div>
    </div>
  );
};

export default Profile;
