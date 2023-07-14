import "./styles.scss";
import { useState, useEffect } from "react";
import { HarvestHistoryProps } from "../../types/harvestsTypes";
import { getHarvestByPlantingID } from "../../service/harvests";
import { Harvest } from "../../types/harvestsTypes";
import HarvestItem from "../Item/HarvestItem";
import { makeDateOutput } from "../../utils/itemsFunctions";

const HarvestHistory = ({ className, plantingID }: HarvestHistoryProps) => {
  const [harvests, setHarvests] = useState<Harvest[]>([]);

  useEffect(() => {
    getHarvestByPlantingID(plantingID)
      .then((response) => {
        setHarvests(response);
      })
      .catch(console.log);
  }, [plantingID]);

  return (
    <div className={`harvestHistoryContainer ${className}`}>
      <h2>Histórico de Colheitas</h2>
      {harvests.map((harvest) => (
        <HarvestItem
          className="harvestHistoryItem"
          key={harvest.id}
          date={makeDateOutput(harvest.date)}
          bags={String(harvest.bags)}
        />
      ))}
    </div>
  );
};

export default HarvestHistory;
