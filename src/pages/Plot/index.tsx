import HarvestHistory from "../../components/HarvestHistory";
import SideBar from "../../components/SideBar";
import Title from "../../components/Title";
import "./styles.scss";

const Plot = () => {
  return (
    <div className="containerPagePLot">
      <SideBar />
      <div className="containerPlot">
        <div className="plotTitle">
          <Title
            fontSize="32px"
            fontWeight="700"
            text="Plantios e Colheitas"
            hasIcon={true}
            hasLine={true}
          />
        </div>
        <div className="plotInfos">
          <div className="plotData"></div>
          <div className="plotHistorys">
            <HarvestHistory className="harvestHistory" plantingID={10} />
            <div className="plantingHistory">
              <HarvestHistory plantingID={10} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Plot;
