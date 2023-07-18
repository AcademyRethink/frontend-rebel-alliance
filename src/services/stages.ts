import api from "./api";
import { Stages } from "./../types/stagesTypes";

export async function getStages(): Promise<Array<Stages>> {
  const response = await api.get(`stages`);
  return response.data;
}
