import { useEffect, useState } from "react";
import { HourlyWeather } from "../../types/weatherTypes";
import { Farm } from "../../types/farmTypes";
import separator from "./../../assets/separator.svg";
import DayController from "./dayController";
import HourController from "./hourController";
import iconLocation from "./../../assets/iconLocation.svg";
import { fetchWeatherHourlyData } from "../../utils/weatherFunctions";

export const DataWeather = () => {
  const [data, setData] = useState<{ weather?: HourlyWeather; farm?: Farm }>(
    {}
  );

  useEffect(() => {
    fetchWeatherHourlyData(26)
      .then((response) =>
        setData({ farm: response?.farm, weather: response?.weather })
      )
      .catch();
  }, []);
  const { weather, farm } = data;

  if (!weather || !farm) {
    return null;
  }
  const firstWeatherItem = weather.list?.[0];

  return (
    <>
      <div className="containerDateAndLocal">
        <time>
          <DayController />
        </time>
        <address>
          <img src={iconLocation} alt="Icone de localização" />
          {farm?.address.city}, {farm?.address.state}, Brazil
        </address>
      </div>
      <div className="containerWeather">
        <div className="containerHourAndTemp">
          <span>
            <HourController />
          </span>
          <img src={separator} alt="separador" />
          <div className="temperature">
            <span>{firstWeatherItem?.main.temp.toFixed(0)}</span>
            <sup className="celsiusSymbol">°C</sup>
          </div>
        </div>
        <div className="weatherSummary">
          <ul>
            <li>{firstWeatherItem?.weather[0]?.description}</li>
            <li>
              Chuva: {firstWeatherItem?.pop ? firstWeatherItem.pop * 100 : 0} %
            </li>
            <li>Umidade: {firstWeatherItem?.main.humidity} %</li>
            <li>
              Vento:
              {firstWeatherItem?.wind.speed
                ? (firstWeatherItem.wind.speed * 3.6).toFixed(1)
                : 0}
              km/h
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
