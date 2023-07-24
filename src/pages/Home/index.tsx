import SideBar from "../../components/SideBar";
import PlotSearchInput from "../../components/PlotSearchInput";
import Title from "../../components/Title";
import { AuthContext } from "../../controllers/contextController";
import { useContext } from "react";
import SummaryTime from "../../components/SummaryTime";
import FilterDate from "../../components/FilterDate";
import "./styles.scss";

const Home = () => {
  const { userData } = useContext(AuthContext);
  if (userData?.token) {
    return (
      <div className="homeContainer">
        <SideBar />
        <div className="dataHomeContainer">
          <Title
            fontSize="48px"
            fontWeight="500"
            text={`Olá, ${userData.info.name}`}
          />
          <SummaryTime farmID={userData.info.farm_id} resume={true} />
          <Title fontSize="32px" fontWeight="700" text="Talhão" hasLine />
          <div className="searchContainer">
            <PlotSearchInput />
            <FilterDate />
          </div>
        </div>
      </div>
    );
  }
};

export default Home;
