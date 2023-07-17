import "./styles.scss";
import { DataWeather } from "./controller";
const SummaryTime = ({ resume }: { resume: boolean }) => {
  return (
    <>
      <DataWeather resume={resume} />
    </>
  );
};

export default SummaryTime;
