import "./styles.scss";
import { useState, useEffect } from "react";
import ProgressBar from "../ProgressBar";
import Button from "../Button";
import PlotItem from "../Item/PlotItem";
import { StagesWithName } from "../../types/progressBarTypes";
import { getStages } from "../../services/stages";
import { Stages } from "../../types/stageTypes";

const PlantingData = () => {
  const [stages, setStages] = useState<Stages[]>([]);

  useEffect(() => {
    getStages()
      .then((result) => {
        setStages(result);
      })
      .catch(console.log);
  }, []);

  return (
    <div className="plantingDataContainer">
      <div className="infoPlot">
        <PlotItem plotName="" date="" saplings="" stage="" harvests="" />
        <Button className="filterButton" text="Editar" iconRight="" />
      </div>
      <div className="infoStages">
        <ProgressBar
          className="ProgressBarDefault"
          stages={stages}
          actualStageOrder={3}
        />
        <Button className="normalButton" text="Mais detalhes" />
      </div>
    </div>
  );
};

export default PlantingData;
