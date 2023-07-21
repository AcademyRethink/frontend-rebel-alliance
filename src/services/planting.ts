import { Plot } from "../types/plotTypes";
import api from "./api";

export const getPlantingByPlotID = async (plotID: number): Promise<Plot[]> => {
  const response = await api.get(`/plantings/plot/${plotID}`);
  return response.data;
};
