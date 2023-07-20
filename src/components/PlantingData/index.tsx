import "./styles.scss";
import { useState, useEffect } from "react";
import ProgressBar from "../ProgressBar";
import Button from "../Button";
import PlotItem from "../Item/PlotItem";
import { getStages } from "../../services/stages";
import { Stages } from "../../types/stageTypes";
import { PlantingDataProps } from "../../types/farmTypes";
import { makeDateOutput } from "../../utils/itemsFunctions";
import editIcon from "../../assets/button/editIcon.svg";

const PlantingData = ({ plotData, cultureID }: PlantingDataProps) => {
  const [stages, setStages] = useState<Stages[]>();

  useEffect(() => {
    getStages(cultureID)
      .then((result) => {
        setStages(result);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  return (
    <div className="plantingDataContainer">
      <div className="infoPlot">
        <PlotItem
          plotName={plotData.plot_name}
          date={makeDateOutput(plotData.planting_date)}
          saplings={String(plotData.saplings)}
          stage={plotData.stage}
          harvests={plotData.harvests}
        />
        <Button className="filterButton" text="Editar" iconRight={editIcon} />
      </div>
      <div className="infoStages">
        {stages && (
          <ProgressBar
            className="ProgressBarDefault"
            stages={stages}
            actualStageOrder={plotData.stage_order}
          />
        )}
        <Button className="normalButton" text="Mais detalhes" />
      </div>
    </div>
  );
};

export default PlantingData;
