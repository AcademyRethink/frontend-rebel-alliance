import { useEffect, useState } from "react";
import { getWeatherByCity } from "../../services/weather";
import { getFarmById } from "../../services/weather";
import { HourlyWeather } from "../../types/weatherTypes";
import { Farm } from "../../types/farmTypes";
import separator from "./../../assets/separator.svg";

export const DataWeather = () => {
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
    const interval = setInterval(() => {
      fetchData();
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  const { weather, farm } = data;

  if (!weather || !farm) {
    return null;
  }
  const firstWeatherItem = weather.list?.[0];

  return (
    <>
      <div className="containerDateAndLocal">
        <time>{getDay()}</time>
        <address>
          {farm?.address.city}, {farm?.address.state}, Brazil
        </address>
      </div>
      <div className="containerWeather">
        <div className="containerHourAndTemp">
          <span>{getHour()}</span>
          <img src={separator} alt="separador" />
          <div className="temperature">
            <span>{firstWeatherItem?.temp.day.toFixed(0)}</span>
            <sup className="celsiusSymbol">°C</sup>
          </div>
        </div>
        <div className="weatherSummary">
          <ul>
            <li>{firstWeatherItem?.weather[0]?.description}</li>
            <li>
              Chuva: {firstWeatherItem?.pop ? firstWeatherItem.pop * 100 : 0} %
            </li>
            <li>Umidade: {firstWeatherItem?.humidity} %</li>
            <li>
              Vento:
              {firstWeatherItem?.speed
                ? (firstWeatherItem.speed * 3.6).toFixed(1)
                : 0}
              km/h
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

const getDay = (): string => {
  const dayOfWeek: string[] = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
  ];
  const month: string[] = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ];
  const today: Date = new Date();
  const dayOfWeekText: string = dayOfWeek[today.getDay()];
  const day: number = today.getDate();
  const monthText: string = month[today.getMonth()];
  const year: number = today.getFullYear();

  return `${dayOfWeekText}, ${day} de ${monthText} de ${year}`;
};

const getHour = () => {
  const today: Date = new Date();
  const hours: number = today.getHours();
  const minutes: string = today.getMinutes().toString().padStart(2, "0");
  return `${hours}:${minutes}`;
};
