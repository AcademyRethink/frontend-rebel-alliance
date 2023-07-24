import "./styles.scss";
import Button from "../Button";
import filterIcon from "../../assets/button/filterIcon.svg";

const FilterDate = () => {
  return (
    <div>
      <Button className="filterButton" text="AAAA" iconRight={filterIcon} />
    </div>
  );
};

export default FilterDate;
