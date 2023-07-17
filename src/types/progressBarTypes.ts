export type ProgressBarComponentProps = {
  className: string;
  stages: StagesWithName[];
  actualStageOrder: number;
};

export type StagesWithName = {
  id?: number;
  stage: string;
  culture: string;
  order: number;
};

export type StageMarkerProps = {
  className: string;
  orderOfStage: number;
};

export type MidBarProps = { className: string };
