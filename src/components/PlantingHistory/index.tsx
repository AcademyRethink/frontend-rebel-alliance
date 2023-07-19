import "./styles.scss";
import { useState, useEffect } from "react";
import { PlantingHistoryProps } from "../../types/plantingTypes";
import { Plot } from "../../types/plotTypes";
import { getPlantingByPlotID } from "../../services/planting";
import PlantingItem from "../Item/PlantingItem";
import { makeDateOutput } from "../../utils/itemsFunctions";

const PlantingHistory = ({ className, plotID }: PlantingHistoryProps) => {
  const [plantings, setPlantings] = useState<Plot[]>([]);

  useEffect(() => {
    getPlantingByPlotID(plotID)
      .then((result) => {
        setPlantings(result);
      })
      .catch(console.log);
  }, [plotID]);

  return (
    <div className={`plantingHistoryContainer ${className}`}>
      <h1>Histórico de plantios</h1>
      {plantings.map((planting) => (
        <PlantingItem
          className="plantingHistoryItem"
          key={planting.plot_id}
          startDate={makeDateOutput(planting.date)}
          finalDate={makeDateOutput(planting.date)}
          saplings={String(planting.saplings)}
          harvests={String(planting.harvests)}
        />
      ))}
    </div>
  );
};

export default PlantingHistory;
