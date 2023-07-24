/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect, useContext } from "react";
import { getPlotgByFarmID } from "../../services/plot";
import PlantingData from "../../components/PlantingData";
import { AuthContext } from "../../controllers/contextController";
import SideBar from "../../components/SideBar";
import { PlotWithFarm } from "../../types/plotTypes";
import "./styles.scss";
import Button from "./../../components/Button";
import HomeLoading from "./../../screens/ExampleScreen/Home";
import welcome from "./../../assets/welcome.svg";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const { userData } = useContext(AuthContext);
  const navigate = useNavigate();
  const [dataPlot, setDataPlot] = useState<Array<PlotWithFarm>>();
  const [showAddPlanting, setShowAddPlanting] = useState(false);
  const [showBlurry, setShowBlurry] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = () => {
    getPlotgByFarmID(userData.info.farm_id)
      .then((response) => {
        setDataPlot(response);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    if (!showBlurry) {
      fetchData();
    }
  }, [showBlurry]);

  const handleNewPlanting = () => {
    setShowAddPlanting(true);
    setShowBlurry(true);
  };

  const handleBlurryClick = () => {
    setShowAddPlanting(false);
    setShowBlurry(false);
  };

  const handlePlantingAdd = () => {
    setShowAddPlanting(false);
    setShowBlurry(false);
  };

  if (isLoading) {
    return <HomeLoading />;
  }

  return (
    <div className="pageHomeContainer">
      <SideBar />
      <div className="homeDataContainer">
        {dataPlot && dataPlot.length > 0 ? (
          <Button
            text="Adicionar Plantio"
            className="largeButton"
            onClick={handleNewPlanting}
          />
        ) : (
          <></>
        )}

        {showAddPlanting && (
          <>
            <div className="blurry" onClick={handleBlurryClick}></div>
            <PlantingData add={true} cultureID={1} onAdd={handlePlantingAdd} />
          </>
        )}

        {dataPlot && dataPlot.length > 0 ? (
          <>
            {dataPlot
              .sort((a, b) => b.plot_id - a.plot_id)
              .map((plot) => (
                <PlantingData
                  plotData={plot}
                  cultureID={1}
                  key={plot.plot_id}
                  fetchData={fetchData}
                  onButton={() => navigate(`/talhao/${plot.plot_id}`)}
                />
              ))}
          </>
        ) : (
          <div className="containerWelcome">
            <img src={welcome} alt="Imagem de boas vindas" />
            <h1>Boas-vindas ao Monitore!</h1>
            <p>Comece a monitorar sua fazenda adicionando plantios.</p>
            <Button
              text="Adicionar Plantio"
              className="largeButton"
              onClick={handleNewPlanting}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
