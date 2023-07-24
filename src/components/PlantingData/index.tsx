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
import EditCard from "../EditCard";

const PlantingData = ({
  plotData,
  cultureID,
  add = false,
  onAdd,
  fetchData,
}: PlantingDataProps) => {
  const [stages, setStages] = useState<Stages[]>();
  const [mode, setMode] = useState("normal");
  const [showBlurry, setShowBlurry] = useState(true);
  const [isRendered, setIsRendered] = useState(true);

  useEffect(() => {
    getStages(cultureID)
      .then((result) => {
        setStages(result);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [cultureID]);

  const handleModeForEdit = () => {
    setMode("edit");
    setShowBlurry(false);
  };

  const handleModeForNormal = () => {
    setMode("normal");
    fetchData?.();
    if (onAdd) {
      onAdd();
    }
    setShowBlurry(false);
  };

  const handleBlurryClick = () => {
    if (add) {
      setIsRendered(false);
    } else {
      setMode("normal");
      setShowBlurry(false);
    }
  };

  if (!isRendered) {
    return null;
  }

  if (add) {
    return (
      <>
        <div
          className={`plantingDataContainer ${
            mode === "normal" ? "emphasis" : ""
          }`}
        >
          <EditCard handleMode={handleModeForNormal} />
          <div className="infoStages">
            {stages && (
              <ProgressBar
                className="ProgressBarDefault"
                label="Progresso do plantio"
                stages={stages}
                actualStageOrder={0}
              />
            )}
          </div>
        </div>
      </>
    );
  }

  if (!add && plotData) {
    return (
      <>
        {mode === "edit" && (
          <div className="blurry" onClick={handleBlurryClick}></div>
        )}
        <div
          className={`plantingDataContainer ${
            mode === "edit" ? "emphasis" : ""
          }`}
        >
          {mode === "edit" ? (
            <EditCard
              plantingId={plotData.planting_id}
              handleMode={handleModeForNormal}
            />
          ) : (
            <div className="infoPlot">
              <PlotItem
                plotName={plotData.plot_name}
                date={makeDateOutput(plotData.planting_date)}
                saplings={String(plotData.saplings)}
                stage={plotData.stage}
                harvests={plotData.harvests}
              />
              <Button
                className="filterButton"
                text="Editar"
                iconRight={editIcon}
                onClick={handleModeForEdit}
              />
            </div>
          )}
          <div className="infoStages">
            {stages && (
              <ProgressBar
                className="ProgressBarDefault"
                label="Progresso do plantio"
                stages={stages}
                actualStageOrder={plotData.stage_order}
              />
            )}

            <Button className="normalButton" text="Mais detalhes" />
          </div>
        </div>
      </>
    );
  }
};

export default PlantingData;
