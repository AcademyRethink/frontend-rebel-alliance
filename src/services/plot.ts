import { PlotWithFarm } from "../types/plotTypes";
import api from "./api";

export const getPlotgByFarmID = async (
  farmID: number
): Promise<Array<PlotWithFarm>> => {
  const response = await api.get(`/plots/planting/farm/${farmID}`);
  return response.data;
};

export const getAPlotgByIdAndFarmID = async (
  plotID: number,
  farmID: number
): Promise<Array<PlotWithFarm>> => {
  const response = await api.get(`/plots/${plotID}/farm/${farmID}`);
  return response.data;
};

export const getPlotByName = async (farmName: string, farmID: number) => {
  const response = await api.get(`/plantings?farm=${farmID}&plot=${farmName}`);
  return response.data;
};
