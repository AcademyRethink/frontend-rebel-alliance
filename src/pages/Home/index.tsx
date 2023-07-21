import SideBar from "../../components/SideBar";
import PlantingData from "../../components/PlantingData";

const Home = () => {
  const mock = {
    farm_id: 23,
    plot_id: 103,
    plot_name: "Updated Plot 83",
    planting_id: 183,
    planting_date: "2023-06-26T00:00:00.000Z",
    saplings: 603,
    stage: "Florada",
    stage_order: 4,
    harvests: "33",
  };

  return (
    <div>
      <PlantingData plotData={mock} cultureID={1} />
    </div>
  );
};

export default Home;
