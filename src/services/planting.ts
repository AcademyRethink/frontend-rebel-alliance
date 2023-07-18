import api from "./api";

export const getHarvestByPlantingID = async (planintgID: number) => {
  const response = await api.get(`/harvests/planting/${planintgID}`);
  return response.data;
};
