import "./styles.scss";
import SideBar from "../../components/SideBar";
import Title from "../../components/Title";
import SummaryTime from "../../components/SummaryTime";
import WeatherWeek from "../../components/WeatherWeek";
import SelectGraphic from "../../components/SelectGraphic";
import { useContext } from "react";
import { AuthContext } from "../../controllers/contextController";

const Climate = () => {
  const { userData } = useContext(AuthContext);
  if (userData?.token) {
    return (
      <div className="pageClimateContainer">
        <SideBar />
        <div className="climateDataContainer">
          <div className="climateTitle">
            <Title
              fontSize="32px"
              fontWeight="700"
              text="Clima"
              hasIcon={true}
              hasLine={true}
            />
          </div>

          <div className="climateData">
            <div className="mainInfos">
              <SummaryTime resume={false} farmID={26} />
              <SelectGraphic farmID={26} />
            </div>
            <WeatherWeek className="weekData" city="Ipatinga" days={8} />
          </div>
        </div>
      </div>
    );
  } else {
    window.location.href = "/";
  }
};

export default Climate;
