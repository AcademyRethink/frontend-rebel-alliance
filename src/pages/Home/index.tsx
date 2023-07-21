import { useState, useEffect, useContext } from "react";
import { getPlotgByFarmID } from "../../services/plot";
import PlantingData from "../../components/PlantingData";
import { AuthContext } from "../../controllers/contextController";
import SideBar from "../../components/SideBar";
import { PlotWithFarm } from "../../types/plotTypes";
import "./styles.scss";

const Home = () => {
  const { userData } = useContext(AuthContext);

  const [dataPlot, setDataPlot] = useState<Array<PlotWithFarm>>();

  useEffect(() => {
    getPlotgByFarmID(userData.info.farm_id)
      .then((response) => {
        setDataPlot(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [dataPlot]);
  return (
    <div className="pageClimateContainer">
      <SideBar />
      <div className="homeDataContainer">
        {dataPlot
          ?.sort((a, b) => a.plot_id - b.plot_id)
          .map((plot) => (
            <PlantingData plotData={plot} cultureID={1} key={plot.plot_id} />
          ))}
      </div>
    </div>
  );
};

export default Home;
