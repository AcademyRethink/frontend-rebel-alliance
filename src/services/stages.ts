import { Stages } from "./../types/stagesTypes";
import api from "./api";

export async function getStages(): Promise<Array<Stages>> {
  const response = await api.get(`stages`);
  return response.data;
}
