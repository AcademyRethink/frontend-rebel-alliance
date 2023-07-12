import api from "./api";
import { HourlyWeather } from "./../types/weatherTypes";
import { Farm } from "../types/farmTypes";

export async function getWeatherByCity(
  city: string | undefined
): Promise<HourlyWeather> {
  const response = await api.get(`weather/hourly?city=${city}`);
  return response.data;
}

export async function getFarmById(id: number): Promise<Farm> {
  const response = await api.get(`http://localhost:3000/farms/${id}`);
  return response.data;
}
