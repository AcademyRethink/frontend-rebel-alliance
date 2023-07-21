import { useParams } from "react-router";
import { useState, useEffect } from "react";
import HarvestHistory from "../../components/HarvestHistory";
import PlantingHistory from "../../components/PlantingHistory";
import SideBar from "../../components/SideBar";
import Title from "../../components/Title";
import "./styles.scss";
import { Planting } from "../../types/plantingTypes";
import { getPlantingByPlotID } from "../../services/planting";
// import { useContext } from "react";
// import { AuthContext } from "../../controllers/contextController";

const getLastActivePlanting = (
  allPlantings: Planting[] | undefined
): number => {
  if (allPlantings) {
    const lastActivePlanting = allPlantings.filter(
      (planting) => planting.active
    );
    if (lastActivePlanting.length) {
      return lastActivePlanting[0].planting_id;
    } else {
      const plantingID = Math.max(
        ...allPlantings.map((planting) => planting.planting_id)
      );
      console.log(plantingID);
      return plantingID;
    }
  } else {
    return 0;
  }
};

const Plot = () => {
  // const { userData } = useContext(AuthContext);
  const { id } = useParams();
  const [plantings, setPlatings] = useState<Planting[]>();

  useEffect(() => {
    getPlantingByPlotID(Number(id))
      .then((response) => setPlatings(response))
      .catch(console.log);
  }, [id]);

  // if (userData?.token) {
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
            <HarvestHistory
              className="harvestHistory"
              plantingID={getLastActivePlanting(plantings)}
            />
            <PlantingHistory className="plantingHistory" plotID={Number(id)} />
          </div>
        </div>
      </div>
    </div>
  );
  // } else {
  //   window.location.href = "/";
  // }
};

export default Plot;
