import { buildProgressBar } from "../../controller/progressBarController";
import { ProgressBarComponentProps } from "../../types/progressBarTypes";
import "./styles.scss";

const ProgressBar = ({
  className = "ProgressBarDefault",
  stages,
  actualStageOrder,
}: ProgressBarComponentProps) => {
  const progressBarData = buildProgressBar(stages, actualStageOrder);
  return (
    <div className={className}>
      <div className="ProgressbarBox">
        {progressBarData[0].map((component) => component)}
      </div>
      <div className="StagesNamesBox">
        {progressBarData[1].map((stageName) => (
          <p>{stageName}</p>
        ))}
      </div>
    </div>
  );
};

export default ProgressBar;
