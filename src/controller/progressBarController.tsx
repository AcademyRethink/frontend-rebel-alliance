import MidBar from "../components/ProgressBar/Components/MidBar";
import StageMarker from "../components/ProgressBar/Components/StageMarker";
import { StagesWithName } from "../types/progressBarTypes";

export const buildProgressBar = (
  stages: StagesWithName[],
  actualStageOrder: number
): [JSX.Element[], string[]] => {
  const stagesSort = stages.sort((a, b) => a.order - b.order);
  const progressBar = [];
  const totalStages = stagesSort.length;

  if (actualStageOrder > totalStages)
    throw new Error(
      "the actual stage value is greater than the last recorded stage"
    );

  for (let i = 1; i <= actualStageOrder; i++) {
    if (i == 1) {
      progressBar.push(
        <StageMarker
          className={
            actualStageOrder == i
              ? "StageMarkerInitalTransition"
              : "StageMarkerInitalActive"
          }
          orderOfStage={stagesSort[0].order}
          key={stagesSort[0].id}
        />
      );
      progressBar.push(
        <MidBar
          className={actualStageOrder == i ? "MidBarInactive" : "MidBarActive"}
          key={stagesSort[0].id}
        />
      );
    } else if (actualStageOrder == i) {
      console.log("if = i", actualStageOrder);
      progressBar.push(
        <StageMarker
          className={
            i !== totalStages
              ? "StageMarkerMidTransition"
              : "StageMarkerEndActive"
          }
          orderOfStage={stagesSort[i - 1].order}
          key={stagesSort[i - 1].id}
        />
      );
      if (i !== totalStages)
        progressBar.push(
          <MidBar className="MidBarInactive" key={stagesSort[i - 1].id} />
        );
    } else {
      console.log(stagesSort[i - 1]);

      progressBar.push(
        <StageMarker
          className="StageMarkerMidActive"
          orderOfStage={stagesSort[i - 1].order}
          key={stagesSort[i - 1].id}
        />
      );
      progressBar.push(
        <MidBar className="MidBarActive" key={stagesSort[i - 1].id} />
      );
    }
  }

  for (let i = actualStageOrder + 1; i <= totalStages; i++) {
    if (actualStageOrder == 0 && i == 1) {
      progressBar.push(
        <StageMarker
          className="StageMarkerInitalInactive"
          orderOfStage={stagesSort[0].order}
          key={stagesSort[0].id}
        />
      );
      progressBar.push(
        <MidBar className="MidBarInactive" key={stagesSort[i - 1].id} />
      );
    } else if (i == totalStages) {
      progressBar.push(
        <StageMarker
          className="StageMarkerEndInactive"
          orderOfStage={stagesSort[i - 1].order}
          key={stagesSort[i - 1].id}
        />
      );
    } else {
      progressBar.push(
        <StageMarker
          className="StageMarkerMidInactive"
          orderOfStage={stagesSort[i - 1].order}
          key={stagesSort[i - 1].id}
        />
      );

      progressBar.push(
        <MidBar className="MidBarInactive" key={stagesSort[i - 1].id} />
      );
    }
  }

  return [progressBar, stagesSort.map((stage) => stage.stage)];
};
