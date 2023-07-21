import SideBar from "../../components/SideBar";
import EditCard from "../../components/EditCard";
import "./styles.scss";

const Home = () => {
  return (
    <div className="pageClimateContainer">
      <SideBar />
      <div className="homeDataContainer">
        <EditCard />
      </div>
    </div>
  );
};

export default Home;
