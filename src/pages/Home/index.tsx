import SideBar from "../../components/SideBar";
import PlotSearch from "../../components/PlotSearch";
import Title from "../../components/Title";
import { AuthContext } from "../../controllers/contextController";
import { useContext } from "react";
import SummaryTime from "../../components/SummaryTime";
import FilterDate from "../../components/FilterDate";

const Home = () => {
  const { userData } = useContext(AuthContext);
  if (userData?.token) {
    return (
      <div>
        <SideBar />
        <Title
          fontSize="48px"
          fontWeight="500"
          text={`Olá, ${userData.info.name}`}
        />
        <SummaryTime farmID={27} resume={true} />
        <Title fontSize="32px" fontWeight="700" text="Talhão" hasLine />
        <PlotSearch />
        <FilterDate />
      </div>
    );
  }
};

export default Home;
