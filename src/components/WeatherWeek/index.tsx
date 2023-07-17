import "./styles.scss";
import { WeatherWeekProps } from "../../types/weatherComponentsTypes";
import WeatherWeekData from "./controller";
import calendarIcon from "../../assets/calendarIcon.svg";

const WeatherWeek = ({ className, city, days = 8 }: WeatherWeekProps) => {
  return (
    <div className={`weatherWeekContainer ${className}`}>
      <div className="title">
        <h2>Esta semana</h2>
        <img src={calendarIcon} alt="icone calendário" />
      </div>
      <WeatherWeekData city={city} days={days} />
    </div>
  );
};

export default WeatherWeek;
