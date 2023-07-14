import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import Graphic from "./components/Graphic/";
import Home from "./pages/Home";
import Climate from "./pages/Climate";
import Profile from "./pages/Profile";

function App() {
  return (
    <>
      <Graphic
        chartData={"rain"}
        backgroundColor="#004CBD"
        unit="%"
        minY={0}
        maxY={50}
        increment={10}
      />
      <Graphic
        chartData={"wind"}
        backgroundColor="#1F78FF"
        unit="km"
        minY={0}
        maxY={50}
        increment={10}
      />
      <Graphic
        chartData={"temp"}
        backgroundColor="#ECA900"
        unit="°"
        minY={0}
        maxY={40}
        increment={8}
      />
      <BrowserRouter>
        <Routes>
          <Route path="/" />
          <Route path="/home" element={<Home />} />
          <Route path="/plantio/:id" />
          <Route path="/clima" element={<Climate />} />
          <Route path="/perfil" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
