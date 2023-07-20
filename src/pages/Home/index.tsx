import SideBar from "../../components/SideBar";
import PlantingData from "../../components/PlantingData";

const Home = () => {
  const mock = {
    farm_id: 2,
    plot_id: 10,
    plot_name: "Updated Plot 8",
    planting_id: 18,
    planting_date: "2023-06-26T00:00:00.000Z",
    saplings: 60,
    stage: "Florada",
    stage_order: 3,
    harvests: "3",
  };

  return (
    <div>
      <SideBar />
      <PlantingData plotData={mock} cultureID={1} />
    </div>
  );
};

export default Home;
