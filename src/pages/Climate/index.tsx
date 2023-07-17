import "./styles.scss";
import SideBar from "../../components/SideBar";
import Title from "../../components/Title";
import SummaryTime from "../../components/SummaryTime";
import WeatherWeek from "../../components/WeatherWeek";
import SelectGraphic from "../../components/SelectGraphic";

const Climate = () => {
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
            <SummaryTime resume={false} />
            <SelectGraphic />
          </div>
          <WeatherWeek className="weekData" city="Ipatinga" days={8} />
        </div>
      </div>
    </div>
  );
};

export default Climate;
