import { useEffect, useState } from "react";
import { getWeatherByCity } from "../../services/weather";
import { getFarmById } from "../../services/weather";
import { HourlyWeather } from "../../types/weatherTypes";
import { Farm } from "../../types/farmTypes";
import separator from "./../../assets/separator.svg";
import DayController from "./dayController";
import HourController from "./hourController";
import iconLocation from "./../../assets/iconLocation.svg";
import raining from "../../assets/weatherCard/raining.svg";
import storm from "../../assets/weatherCard/storm.svg";
import clouds from "../../assets/weatherCard/clouds.svg";
import cloudsSun from "../../assets/weatherCard/cloudSun.svg";
import suny from "../../assets/weatherCard/suny.svg";

const allClimate = {
  algumas: cloudsSun,
  nublado: clouds,
  nuvens: cloudsSun,
  Rain: raining,
  Clear: suny,
  Extreme: storm,
};

export const DataWeather = ({ resume }: { resume: boolean }) => {
  const [data, setData] = useState<{ weather?: HourlyWeather; farm?: Farm }>(
    {}
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        const farmResponse = await getFarmById(26);
        const weatherResponse = await getWeatherByCity(
          farmResponse?.address?.city
        );
        setData({ farm: farmResponse, weather: weatherResponse });
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const { weather, farm } = data;

  if (!weather || !farm) {
    return null;
  }
  const firstWeatherItem = weather.list?.[0];

  const climate =
    firstWeatherItem?.weather[0].main == "Clouds"
      ? firstWeatherItem.weather[0].description.split(" ")[0]
      : firstWeatherItem?.weather[0].main;

  if (resume) {
    return (
      <div
        className="containerSummaryTime"
        onClick={() => (window.location.href = "/clima")}
      >
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
                Chuva:{" "}
                {(firstWeatherItem?.pop
                  ? firstWeatherItem.pop * 100
                  : 0
                ).toFixed(0)}{" "}
                %
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
      </div>
    );
  }
  return (
    <>
      <div className="containerWeatherPageClimate">
        <div className="containerInformationTime">
          <span>
            <HourController />
          </span>
          <div className="containerDateAndLocalPageClimate">
            <time>
              <DayController />
            </time>
            <address>
              <img src={iconLocation} alt="Icone de localização" />
              {farm?.address.city}, {farm?.address.state}, Brazil
            </address>
          </div>
        </div>
        <div className="temperaturePageClimate">
          <div>
            <span>{firstWeatherItem?.main.temp.toFixed(0)}</span>
            <sup>°C</sup>
            <p>{firstWeatherItem?.weather[0]?.description}</p>
          </div>
          <img
            src={
              climate === "algumas" ||
              climate === "nublado" ||
              climate === "nuvens" ||
              climate === "Rain" ||
              climate === "Clear" ||
              climate === "Extreme"
                ? allClimate[climate]
                : allClimate["Clear"]
            }
            alt="icone de clima"
          />
        </div>
      </div>
    </>
  );
};
