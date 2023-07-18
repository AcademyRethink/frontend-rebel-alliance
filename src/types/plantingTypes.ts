export type PlantingHistoryProps = {
  className?: string;
  plantingID: number;
};

export type Harvest = {
  id: number;
  date: string;
  bags: number;
  plot_id: number;
  user_id: number;
  farm_id: number;
  planting_id: number;
};
