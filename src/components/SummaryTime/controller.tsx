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
  }, []);

  const { weather, farm } = data;

  if (!weather || !farm) {
    return null;
  }
  const firstWeatherItem = weather.list?.[0];

  return (
    <>
      <div className="containerDateAndLocal">
        <time>{GetDay()}</time>
        <address>
          {farm?.address.city}, {farm?.address.state}, Brazil
        </address>
      </div>
      <div className="containerWeather">
        <div className="containerHourAndTemp">
          <span>13:30</span>
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

export const GetDay = (): string => {
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
