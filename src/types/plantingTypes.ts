export type PlantingHistoryProps = {
  className?: string;
  plotID: number;
};

export type Planting = {
  plot_id: number;
  planting_id: number;
  date: string;
  saplings: number;
  active: boolean;
  harvests: string;
};
