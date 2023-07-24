import { PlotWithFarm } from "../types/plotTypes";
import api from "./api";

export const getPlotgByName = async (
  farmName: string
): Promise<PlotWithFarm> => {
  const response = await api.get(`/plots/planting/farm/${farmName}`);
  return response.data;
};
