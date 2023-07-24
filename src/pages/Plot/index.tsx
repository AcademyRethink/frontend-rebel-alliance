import { useParams } from "react-router";
import { useState, useEffect } from "react";
import HarvestHistory from "../../components/HarvestHistory";
import PlantingHistory from "../../components/PlantingHistory";
import SideBar from "../../components/SideBar";
import Title from "../../components/Title";
import "./styles.scss";
import { Planting, PlantingType } from "../../types/plantingTypes";
import {
  getPlantingById,
  getPlantingByPlotID,
  putPlanting,
} from "../../services/planting";
import PlantingData from "../../components/PlantingData";
import { PlotWithFarm } from "../../types/plotTypes";
import { getAPlotgByIdAndFarmID } from "../../services/plot";
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
      return plantingID;
    }
  } else {
    return 0;
  }
};

const Plot = () => {
  // const { userData } = useContext(AuthContext);
  const { id } = useParams();
  const [plantings, setPlantings] = useState<Planting[]>();
  const [activePlantingID, setActivePlatingID] = useState<number>(0);
  const [plotInfo, setPlotInfo] = useState<PlotWithFarm>();
  // const [endPlantingData, setEndPlantingData] = useState<PlantingType>({
  //   date: "",
  //   saplings: 0,
  //   plot: "",
  //   stage: "Plantio",
  //   user: "",
  //   farm: "",
  // });
  const [addNewPlanting, setAddNewPlanting] = useState<boolean>(false);
  const [updatePage, setUpdatePage] = useState<number>(0);

  useEffect(() => {
    //userData.info.farm_id
    getAPlotgByIdAndFarmID(Number(id), 2)
      .then((response) => setPlotInfo(response[0]))
      .catch(console.log);

    getPlantingByPlotID(Number(id))
      .then((response) => {
        setPlantings(plantings);
        setActivePlatingID(getLastActivePlanting(response));
      })
      // .then(() => {
      //   getPlantingById(activePlantingID)
      //     .then((response) =>
      //       setEndPlantingData({
      //         ...response[0],
      //         user: "09579219699",
      //         // user: userData.info.cpf_cnpj,
      //         active: false,
      //       })
      //     )
      // .catch(console.log);
      // })
      .catch(console.log);
  }, [id, plantings, addNewPlanting, updatePage]);

  const handleAddNewPlanting = () => {
    setAddNewPlanting((prev) => !prev);
    handleUpdatePage();
  };

  const handleUpdatePage = () => setUpdatePage((prev) => prev + 1);

  // const handleEndPlanting = () => {
  //   putPlanting(activePlantingID, endPlantingData)
  //     .then(() => console.log("Success", endPlantingData))
  //     .catch(console.log);
  // };

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
          <div className="plotData">
            {addNewPlanting ? (
              <>
                <div className="blurry" onClick={handleAddNewPlanting}></div>
                <PlantingData
                  cultureID={1}
                  add={true}
                  onAdd={handleAddNewPlanting}
                  plotName={plotInfo?.plot_name}
                />
              </>
            ) : (
              <PlantingData
                cultureID={1}
                plotData={plotInfo}
                buttonText="Novo plantio"
                onButton={handleAddNewPlanting}
                onAdd={handleUpdatePage}
              />
            )}
          </div>
          <div className="plotHistorys">
            <HarvestHistory
              className="harvestHistory"
              plantingID={activePlantingID}
              plotID={Number(id)}
              stage={plotInfo?.stage}
              onAdd={handleUpdatePage}
            />
            <PlantingHistory
              className="plantingHistory"
              plotID={Number(id)}
              update={updatePage}
            />
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
