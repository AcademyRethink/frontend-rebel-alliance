import { PlotItemProps } from "../../../types/itemTypes";
import Column from "../Column";
import "../styles.scss";

const PlotItem = ({
  className,
  plotName,
  date,
  saplings,
  stage,
  harvests,
}: PlotItemProps) => {
  return (
    <div className="plotItemContainer">
      <div className={`itemContainer ${className}`}>
        <Column title="Talhão" text={plotName} />
        <Column title="Data" text={date} />
        <Column title="Mudas" text={saplings} />
        <Column title="Fase" text={stage} />
        <Column title="Colheitas" text={harvests} />
      </div>
    </div>
  );
};

export default PlotItem;
