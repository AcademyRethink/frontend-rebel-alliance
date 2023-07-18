import { Stages } from "./../types/stagesTypes";
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000/",
});

export async function getStages(): Promise<Array<Stages>> {
  const response = await api.get(`stages`);
  return response.data;
}
