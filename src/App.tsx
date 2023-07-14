import "./App.scss";
import Graphic from "./components/Graphic/";

function App() {
  return (
    <>
      <Graphic
        chartData={[20, 25, 22, 23, 25, 31, 12, 25, 25, 25, 25, 12]}
        backgroundColor="#004CBD"
        unit="%"
        minY={0}
        maxY={50}
        increment={10}
      />
      <Graphic
        chartData={[20, 25, 22, 23, 25, 31, 12, 25, 25, 25, 25, 12]}
        backgroundColor="#1F78FF"
        unit="km"
        minY={0}
        maxY={50}
        increment={10}
      />
      <Graphic
        chartData={[20, 25, 22, 23, 25, 31, 12, 25, 25, 25, 25, 12]}
        backgroundColor="#ECA900"
        unit="°"
        minY={0}
        maxY={40}
        increment={8}
      />
    </>
  );
}

export default App;
