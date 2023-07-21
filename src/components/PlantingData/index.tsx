import "./styles.scss";
import ProgressBar from "../ProgressBar";
import Button from "../Button";
import PlotItem from "../Item/PlotItem";
import { StagesWithName } from "../../types/progressBarTypes";

const PlantingData = () => {
  const stages: StagesWithName[] = [
    { stage: "Plantio", culture: "Café", order: 1 },
    { stage: "Pré-florada", culture: "Café", order: 2 },
    { stage: "Florada", culture: "Café", order: 3 },
    { stage: "Chumbinho", culture: "seila", order: 4 },
    { stage: "Expansão", culture: "seila", order: 5 },
    { stage: "Granação", culture: "seila", order: 6 },
    { stage: "Colheita", culture: "seila", order: 7 },
    { stage: "Pós-colheita", culture: "seila", order: 8 },
  ];
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
