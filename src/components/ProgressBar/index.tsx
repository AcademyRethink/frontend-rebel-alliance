import { renderProgressBar } from "../../controller/progressBarController";
import {
  ProgressBarComponentProps,
  StagesWithName,
} from "../../types/progressBarTypes";
import "./styles.scss";

const mock: StagesWithName[] = [
  {
    id: 3,
    stage: "Florada",
    culture: "cafe",
    order: 3,
  },
  {
    id: 1,
    stage: "Plantio",
    culture: "cafe",
    order: 1,
  },
  {
    id: 2,
    stage: "Pré-florada",
    culture: "cafe",
    order: 2,
  },
  {
    id: 4,
    stage: "Chumbinho",
    culture: "cafe",
    order: 4,
  },
  {
    id: 5,
    stage: "Expansão",
    culture: "cafe",
    order: 5,
  },
  {
    id: 6,
    stage: "Granação",
    culture: "cafe",
    order: 6,
  },
  {
    id: 7,
    stage: "Colheita",
    culture: "cafe",
    order: 7,
  },
  {
    id: 8,
    stage: "Pós-colheita",
    culture: "cafe",
    order: 8,
  },
];
const ProgressBar = () => {
  const progressBar = renderProgressBar({ stages: mock, actualStageOrder: 8 });
  return (
    <div className="ProgressBarContainer">
      {progressBar.map((component) => component)}
    </div>
  );
};

export default ProgressBar;
