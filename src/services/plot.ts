import { PlotWithFarm } from "../types/plotTypes";
import api from "./api";

export const getPlotgByFarmID = async (
  farmID: number
): Promise<PlotWithFarm> => {
  const response = await api.get(`/plots/planting/farm/${farmID}`);
  return response.data;
};