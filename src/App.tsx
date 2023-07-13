import "./App.scss";
import HarvestItem from "./components/Item/HarvestItem";
import PlantingItem from "./components/Item/PlantingItem";
import PlotItem from "./components/Item/PlotItem";

function App() {
  return (
    <>
      <PlotItem
        plotName="Riacho Claro"
        date="12/08/2020"
        saplings="40"
        stage="Florada"
        harvests="2"
      />
      <PlantingItem
        startDate="12/08/2020"
        finalDate="12/08/2020"
        saplings="40"
        harvests="5"
      />
      <HarvestItem date="12/08/2020" bags="100" />
      <HarvestItem date="12/08/2020" bags="100" />
    </>
  );
}

export default App;
