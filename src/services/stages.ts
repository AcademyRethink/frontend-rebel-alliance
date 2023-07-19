import { Stages } from "../types/stageTypes";
import api from "./api";

export const getStages = async (): Promise<Stages[]> => {
  const response = await api.get(`/stages`);
  return response.data;
};
