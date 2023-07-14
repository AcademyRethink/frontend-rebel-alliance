import "./styles.scss";
import { useState, useEffect } from "react";
import { HarvestHistoryProps } from "../../types/harvestsTypes";
import { getHarvestByPlantingID } from "../../service/harvests";
import { Harvest } from "../../types/harvestsTypes";
import HarvestItem from "../Item/HarvestItem";

const makeDateOutput = (date: string) => {
  return `${date.slice(8, 10)}/${date.slice(5, 7)}/${date.slice(0, 4)}`;
};

const HarvestHistory = ({ plantingID }: HarvestHistoryProps) => {
  const [harvests, setHarvests] = useState<Harvest[]>([]);

  useEffect(() => {
    getHarvestByPlantingID(plantingID)
      .then((response) => {
        setHarvests(response);
      })
      .catch(console.log);
  }, [plantingID]);

  return (
    <div className="harvestHistoryContainer">
      <h1>Histórico de Colheitas</h1>
      {harvests.map((harvest) => (
        <HarvestItem
          key={harvest.id}
          date={makeDateOutput(harvest.date)}
          bags={String(harvest.bags)}
        />
      ))}
    </div>
  );
};

export default HarvestHistory;
