import api from "./api";
import { Harvest } from "../types/harvestsTypes";

export const getHarvestByPlantingID = async (
  planintgID: number
): Promise<Harvest[]> => {
  const response = await api.get(`/harvests/planting/${planintgID}`);
  return response.data;
};
